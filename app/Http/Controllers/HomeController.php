<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
	
class HomeController extends Controller
{

	public function index()
	{
		return Inertia::render('Welcome');
	}

	public function chart()
	{
		return Inertia::render('Chart');
	}

	public function sidebar()
	{
		return Inertia::render('Shared/Sidebar');
	}

	public function studyvue()
	{
		return Inertia::render('StudyVue');
	}
}
