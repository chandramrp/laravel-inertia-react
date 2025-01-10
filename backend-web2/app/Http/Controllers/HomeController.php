<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
     public function index()
     {
          return Inertia::render('Home', [
               'title' => 'Beranda',
               'description' => 'Selamat datang di AllYouCanWatch'
          ]);
     }
}