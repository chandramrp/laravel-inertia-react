<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\AuthController;

Route::get('/', function () {
    return Inertia::render('Home');
});

// Guest routes
Route::middleware('guest')->group(function () {
    Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('login', [AuthController::class, 'login'])->name('login.post');
    Route::get('register', [AuthController::class, 'showRegisterForm'])->name('register');
    Route::post('register', [AuthController::class, 'register'])->name('register.post');

    // Google routes
    Route::get('auth/google', [GoogleController::class, 'redirect'])->name('google.login');
    Route::get('auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');
});

// Protected routes
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

// Search route
Route::get('/search', [MovieController::class, 'search'])->name('search');

