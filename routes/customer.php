<?php

use App\Http\Controllers\Customer\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', [HomeController::class, 'index'])
//     ->name('customer.home');

// Route::get('/rooms', [HomeController::class, 'rooms'])
//     ->name('customer.rooms');

// Route::get('/about', [HomeController::class, 'about'])
//     ->name('customer.about');

// Route::get('/contact', [HomeController::class, 'contact'])
//     ->name('customer.contact');

Route::get('/{any}', function () {
    return view('customer.dashboard');
})->where('any', '.*');
