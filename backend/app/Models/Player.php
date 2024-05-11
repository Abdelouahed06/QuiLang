<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Player extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $primaryKey = 'player_id';
    protected $fillable = [
        'player_id', 'name', 'gender', 'email', 'password', 'country', 'level', 'points', 'wins', 'losses', 'coins', 'state'
    ];

    public function avatars()
    {
        return $this->belongsToMany(Avatar::class);
    }

    public function messages()
    {
        return $this->belongsToMany(Message::class);
    }
}
