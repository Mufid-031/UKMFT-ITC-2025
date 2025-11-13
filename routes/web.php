<?php

use App\Http\Controllers\DivisionController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::resource('divisions', DivisionController::class)
        ->name('divisions', 'divisions');
    Route::resource('positions', PositionController::class)
        ->name('positions', 'positions');
    Route::resource('users', UserController::class)
        ->name('users', 'users');
});

Route::get('/activity', function () {
    return Inertia::render('activity');
})->name('activity');

Route::get('/structure', function () {
    return Inertia::render('structure');
})->name('structure');

Route::get('/profile', function () {
    return Inertia::render('profile');
})->name('profile');

Route::get('/developer', function () {
    return Inertia::render('developer');
})->name('developer');

require __DIR__ . '/settings.php';
