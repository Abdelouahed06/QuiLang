<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    use HasFactory;
    
    protected $primaryKey = 'avatar_id';
    protected $fillable = ['avatar_path','avatar', 'price'];

    public function players()
    {
        return $this->belongsToMany(Player::class);
    }
}
