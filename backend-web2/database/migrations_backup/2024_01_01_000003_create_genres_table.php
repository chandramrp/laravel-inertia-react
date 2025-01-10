<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('genres', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('genre_movie', function (Blueprint $table) {
            $table->foreignId('genre_id')->constrained()->onDelete('cascade');
            $table->foreignId('movie_id')->constrained()->onDelete('cascade');
            $table->primary(['genre_id', 'movie_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('genre_movie');
        Schema::dropIfExists('genres');
    }
}; 