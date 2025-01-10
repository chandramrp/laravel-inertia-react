<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class GoogleController extends Controller
{
    public function redirect()
    {
        try {
            return Socialite::driver('google')
                ->scopes(['openid', 'profile', 'email'])
                ->redirect();
        } catch (Exception $e) {
            Log::error('Google OAuth Redirect Error: ' . $e->getMessage());
            return redirect('/login')->withErrors([
                'email' => 'Terjadi kesalahan saat menghubungkan ke Google.'
            ]);
        }
    }

    public function callback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            $user = User::updateOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'name' => $googleUser->getName(),
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                    'password' => bcrypt(Str::random(24)),
                    'email_verified_at' => now(),
                    'role' => 'user',
                    'status' => 'active'
                ]
            );

            Auth::login($user);
            session()->regenerate();

            return redirect('/dashboard');

        } catch (Exception $e) {
            Log::error('Google OAuth Error:', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return redirect('/login')->withErrors([
                'email' => 'Gagal login dengan Google. Silakan coba lagi.'
            ]);
        }
    }
}