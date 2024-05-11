<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_avatars', function (Blueprint $table) {
            $table->integer('player_id');
            $table->unsignedInteger('avatar_id');
            $table->primary(['player_id', 'avatar_id']);
            $table->foreign('player_id')->references('player_id')->on('players')->onDelete('cascade');
            $table->foreign('avatar_id')->references('avatar_id')->on('avatars')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_avatars');
    }
};
