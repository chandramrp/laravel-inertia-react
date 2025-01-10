<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Exception;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
     public function showLoginForm()
     {
          return Inertia::render('Auth/Login');
     }

     public function showRegisterForm()
     {
          return Inertia::render('Auth/Register');
     }

     public function login(Request $request)
     {
          $credentials = $request->validate([
               'email' => ['required', 'email'],
               'password' => ['required'],
          ]);

          if (Auth::attempt($credentials, $request->boolean('remember'))) {
               $request->session()->regenerate();
               return redirect('/dashboard');
          }

          return back()->withErrors([
               'email' => 'Email atau password salah.',
          ]);
     }

     public function register(Request $request)
     {
          try {
               $validated = $request->validate([
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255|unique:users',
                    'password' => 'required|string|min:8|confirmed',
               ]);

               $user = User::create([
                    'name' => $validated['name'],
                    'email' => $validated['email'],
                    'password' => Hash::make($validated['password']),
                    'email_verified_at' => now(),
                    'role' => 'user',
                    'status' => 'active'
               ]);

               Auth::login($user);

               $request->session()->regenerate();

               return redirect('/dashboard');

          } catch (Exception $e) {
               Log::error('Registration Error:', [
                    'message' => $e->getMessage(),
                    'user_data' => $request->only(['name', 'email'])
               ]);

               return back()->withErrors([
                    'email' => 'Gagal melakukan registrasi. Silakan coba lagi.'
               ])->withInput();
          }
     }

     public function logout(Request $request)
     {
          Auth::logout();

          $request->session()->invalidate();
          $request->session()->regenerateToken();

          return redirect('/');
     }
}