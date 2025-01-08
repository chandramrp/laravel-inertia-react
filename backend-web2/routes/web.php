<?php

use Illuminate\Support\Facades\Route;
useInertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
