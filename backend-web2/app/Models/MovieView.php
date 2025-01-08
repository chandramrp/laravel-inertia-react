<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MovieView extends Model
{
    protected $fillable = [
        'user_id',
        'movie_id',
        'watched_time',
        'completed',
    ];

    protected $casts = [
        'completed' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }
} 