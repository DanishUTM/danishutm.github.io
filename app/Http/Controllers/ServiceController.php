<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }
	
	public function index()
	{
		$services = Service::query()->paginate(10);
		
		return Inertia::render('Service/Index', [
			'services' => $services,
		]);
	}
	
	public function create()
	{
		return Inertia::render('Service/Create');
	}

	public function store(Request $request)
	{
		$service = new Service;
        $service->save();
		
		return Redirect::route('service.index')->with('success', 'Service added!');
	}
	
	public function show($id)
	{
		$service = Service::where('id', $id)->get();
		
		return Inertia::render('Service/Show', [
			'service' => $service[0],
		]);
	}
	
	public function edit($id)
	{
		$service = Service::where('id', $id)->get();

        return Inertia::render('Service/Edit', [
            'service' => $service[0],
        ]);
	}
	
	public function update(Request $request, $id)
	{
		$service = Service::find($id);
		$service->save();

        return Redirect::route('service.index')->with('success', 'Service updated!');
	}
	
	public function destroy($id)
	{
		Service::where('id', $id)->delete();
		return Redirect::route('service.index')->with('success', 'Service deleted!');
	}
}
