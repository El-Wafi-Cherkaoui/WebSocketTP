<?php

use App\Events\ClickEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('/click', function (Request $request) {
    $row = $request->input('row');
    $col = $request->input('col');

    broadcast(new ClickEvent($row, $col));

    return response()->json(['status' => 'broadcast sent']);
});
