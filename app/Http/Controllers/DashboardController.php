<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard/Dashboard');
    }

    public function nas()
    {
        return Inertia::render('Dashboard/Nas');
    }

    public function manager()
    {
        return Inertia::render('Dashboard/Manager');
    }

    public function service()
    {
        return Inertia::render('Dashboard/Service');
    }

    public function user()
    {
        return Inertia::render('Dashboard/User');
    }

    public function finance()
    {
        return Inertia::render('Dashboard/Finance');
    }

    public function settings()
    {
        return Inertia::render('Dashboard/Settings');
    }
}
