<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Player;

class AuthController extends Controller
{
    // Login for both admins and players
    function login(Request $request) {
        $player = Player::where('email', $request->email)->first();

        if (!$player || !Hash::check($request->password,  $player->password)) {
            return response()->json(['status' => 401]);
        }

        $token = $player->createToken($player->player_id)->plainTextToken;
        return response()->json(['player' => $player, 'token' => $token, 'status' => 200]);
    }

    // Register for players
    function register(Request $request) {

        $validate = Validator::make($request->all(), [
            'fname' => ['required', 'max:10', 'min:3'],
            'lname' => ['required', 'max:10', 'min:3'],
            'gender' => ['required', 'max:6'],
            'email' => ['required', 'email', 'max:40', 'unique:users,email'],
            'password' => ['required', 'min:8', 'max:60'],
            // 'country' => ['required', 'max:20'],
            // 'nativeLang' => ['required'],
            // 'goalLang' => ['required'],
        ]);
        if ($validate->fails()) {
            return response()->json(['error' => $validate->errors(), 'status' => 401]);
        }

        // Generating Player ID
        $playerId = ''.mt_rand(1, 9);
        for ($i = 0; $i < 8; $i++) {
            $playerId .= mt_rand(0, 9);
        }

        $hashedPassword = Hash::make($request->password);

        $user = Player::create([
            'player_id' => $playerId,
            'name' => $request->fname .' '. $request->lname,
            'gender' => $request->gender,
            'email' => $request->email,
            'password' => $hashedPassword,
            'country' => $request->country,
            'nlang_id' => $request->nativeLang,
            'glang_id' => $request->goalLang
        ]);

        $token = $user->createToken($playerId)->plainTextToken;
        return response()->json(['message' => 'You are signed up successfully', 'token' => $token, 'user' => $user]);
        
    }

    
}
