<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
// ------------------------------------------
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AvatarController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PlayerController;







Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// admins API
Route::get('/Admins', [AdminController::class, 'index'])->name('Admins');
Route::post('/Admins', [AdminController::class, 'store'])->name('Admins');
Route::delete('/Admins/{id}/delete', [AdminController::class, 'destroy'])->name('Admins');


// players API
Route::get('/Players', [PlayerController::class, 'index'])->name('Players');
Route::delete('/Players/{id}/delete', [PlayerController::class, 'destroy'])->name('Players');








Route::get('/Avatars', [AvatarController::class, 'index'])->name('Avatars');
Route::get('/Languages', [LanguageController::class, 'index'])->name('Languages');
Route::get('/Messages', [MessageController::class, 'index'])->name('Messages');
