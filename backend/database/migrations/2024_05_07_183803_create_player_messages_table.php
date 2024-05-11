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
        Schema::create('player_messages', function (Blueprint $table) {
            $table->integer('player_id');
            $table->unsignedInteger('message_id');
            $table->primary(['player_id', 'message_id']);
            $table->foreign('player_id')->references('player_id')->on('players')->onDelete('cascade');
            $table->foreign('message_id')->references('message_id')->on('messages')->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_messages');
    }
};
