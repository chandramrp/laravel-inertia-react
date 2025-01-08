<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->integer('duration')->nullable();
            $table->year('release_year');
            $table->decimal('rating', 3, 1)->nullable();
            $table->string('poster')->nullable();
            $table->string('banner')->nullable();
            $table->string('trailer_url')->nullable();
            $table->string('video_url')->nullable();
            $table->boolean('featured')->default(false);
            $table->string('status')->default('published');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('movies');
    }
}; 