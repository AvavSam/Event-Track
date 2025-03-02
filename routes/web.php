<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('events', [EventController::class, 'show'])
  ->name('events');
  Route::get('addEvent', function () {
    return Inertia::render('add-event');
  })->name('add-event');
  Route::apiResource('api/v1/events', EventController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
