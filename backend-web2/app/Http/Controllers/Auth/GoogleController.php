<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
     public function redirect()
     {
          return Socialite::driver('google')->redirect();
     }

     public function callback()
     {
          try {
               $googleUser = Socialite::driver('google')->user();

               $user = User::updateOrCreate([
                    'email' => $googleUser->email,
               ], [
                    'name' => $googleUser->name,
                    'password' => bcrypt(\Str::random(24)),
                    'avatar' => $googleUser->avatar,
               ]);

               Auth::login($user);

               return redirect(RouteServiceProvider::HOME);
          } catch (\Exception $e) {
               return redirect('/login')->withErrors([
                    'email' => 'Gagal login dengan Google.',
               ]);
          }
     }
}