<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use Illuminate\Support\Facades\Log;

class GoogleController extends Controller
{
    public function redirect()
    {
        try {
            return Socialite::driver('google')
                ->with([
                    'prompt' => 'select_account',
                    'access_type' => 'offline',
                    'approval_prompt' => 'force'
                ])
                ->redirect();
        } catch (Exception $e) {
            Log::error('Google OAuth Redirect Error: ' . $e->getMessage());
            return redirect('/login')->withErrors([
                'email' => 'Terjadi kesalahan saat menghubungkan ke Google.',
            ]);
        }
    }

    public function callback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
            
            Log::info('Google OAuth User:', [
                'id' => $googleUser->getId(),
                'email' => $googleUser->getEmail(),
                'name' => $googleUser->getName(),
            ]);

            $user = User::updateOrCreate(
                [
                    'email' => $googleUser->getEmail(),
                ],
                [
                    'name' => $googleUser->getName(),
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                    'password' => bcrypt(\Str::random(24)),
                    'email_verified_at' => now(),
                ]
            );

            Auth::login($user);

            return redirect()->intended(RouteServiceProvider::HOME);
        } catch (Exception $e) {
            Log::error('Google OAuth Callback Error: ' . $e->getMessage());
            return redirect('/login')->withErrors([
                'email' => 'Gagal login dengan Google. Silakan coba lagi.',
            ]);
        }
    }
}