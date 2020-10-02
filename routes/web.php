<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;

//Global routes
Route::get('/', [HomeController::class, 'index'])->name('welcome');
//Danish study pages
Route::get('studyvue', [HomeController::class, 'studyvue'])->name('studyvue');
Route::get('chart', [HomeController::class, 'chart'])->name('chart');
Route::get('sidebar', [HomeController::class, 'sidebar'])->name('sidebar');

Route::prefix('adminpanel')->group(function () {
    Route::name('adminpanel.')->group(function () {
        Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
        Route::get('nas', [DashboardController::class, 'nas'])->name('nas');
        Route::get('manager', [DashboardController::class, 'manager'])->name('manager');
        Route::get('service', [DashboardController::class, 'service'])->name('service');
        Route::get('user', [DashboardController::class, 'user'])->name('user');
        Route::get('finance', [DashboardController::class, 'finance'])->name('finance');
        Route::get('settings', [DashboardController::class, 'settings'])->name('settings');
    });
});

//Authenticated web routes
Route::middleware('auth')->group(function () {

    Route::prefix('users')->group(function () {
        Route::name('users.')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('index');
            Route::get('create', [UserController::class, 'create'])->name('create');
            Route::get('/{id}', [UserController::class, 'show'])->name('show');
            Route::get('/{id}/edit', [UserController::class, 'edit'])->name('edit');
        });
    });

    Route::prefix('customers')->group(function () {
        Route::name('customers.')->group(function () {
            Route::get('/', [CustomerController::class, 'index'])->name('index');
            Route::get('create', [CustomerController::class, 'create'])->name('create');
            Route::get('/{id}', [CustomerController::class, 'show'])->name('show');
            Route::get('/{id}/edit', [CustomerController::class, 'edit'])->name('edit');
        });
    });

    Route::prefix('services')->group(function () {
        Route::name('services.')->group(function () {
            Route::get('/', [ServiceController::class, 'index'])->name('index');
            Route::get('create', [ServiceController::class, 'create'])->name('create');
            Route::get('/{id}', [ServiceController::class, 'show'])->name('show');
            Route::get('/{id}/edit', [ServiceController::class, 'edit'])->name('edit');
        });
    }); 
});

//API routes
Route::prefix('api')->group(function () {
    Route::name('users.')->group(function () {
        Route::post('users',[UserController::class, 'store'])->name('store');
        Route::put('users/{id}',[UserController::class, 'update'])->name('update');
        Route::delete('users/{id}',[UserController::class, 'destroy'])->name('destroy');    
    });
    
    Route::name('customers.')->group(function () {
        Route::post('customers',[CustomerController::class, 'store'])->name('store');
        Route::put('customers/{id}',[CustomerController::class, 'update'])->name('update');
        Route::delete('customers/{id}',[CustomerController::class, 'destroy'])->name('destroy');
    });

    Route::name('services.')->group(function () {
        Route::post('services',[ServiceController::class, 'store'])->name('store');
        Route::put('services/{id}',[ServiceController::class, 'update'])->name('update');
        Route::delete('services/{id}',[ServiceController::class, 'destroy'])->name('destroy');
    });
});

Auth::routes();