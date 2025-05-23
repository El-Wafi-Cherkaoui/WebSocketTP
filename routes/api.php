<?php

use App\Events\ClickEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Broadcast::routes();

Route::post('/click', function (Request $request) {
    $row = $request->input('row');
    $col = $request->input('col');
    $username = $request->input('username');
    Log::alert($request->all());

    broadcast(new ClickEvent($row, $col, $username));

    return response()->json(['status' => 'broadcast sent']);
});
