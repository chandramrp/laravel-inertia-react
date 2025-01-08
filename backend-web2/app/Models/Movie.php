<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'duration',
        'release_year',
        'rating',
        'poster',
        'banner',
        'trailer_url',
        'video_url',
        'featured',
        'status',
    ];

    protected $casts = [
        'release_year' => 'integer',
        'featured' => 'boolean',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }

    public function watchlist()
    {
        return $this->belongsToMany(User::class, 'watchlist');
    }

    public function views()
    {
        return $this->hasMany(MovieView::class);
    }
} 