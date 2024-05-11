<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;
    
    protected $primaryKey = 'lang_id';
    protected $fillable = [
        'language', 'native_state', 'goal_state', 'short_form'
    ];
}
