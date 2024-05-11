<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
   
    public function index()
    {
        $players = Player::all();
        if ($players->count() > 0) {
            return response()->json([
                'status' => 200,
                'players' => $players
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Records Found'
            ], 404);
        }
    }



    public function destroy($id)
    {
        $player = Player::find($id);
        if ($player) {
            $player->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Player deleted successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Player found'
            ], 404);
        }
    }
}
