<?php

use App\Http\Controllers\StudenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
route::get('/student', [StudenController::class, 'index']);
route::post('/student', [StudenController::class, 'store']);
Route::put('/student/{id}', [StudenController::class, 'update']);
Route::delete('/student/{id}', [StudenController::class, 'destroy']);

