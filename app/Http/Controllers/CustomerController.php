<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }
	
	public function index()
	{
		$customers = Customer::query()->paginate(10);

		return Inertia::render('Customer/Index', [
			'customers' => $customers,
		]);
	}
	
	public function create()
	{
		return Inertia::render('Customer/Create');
	}

	public function store(Request $request)
	{
		$request->validate([
			'name' => 'required|string',
			'phone_num' => 'required|string',
			'email' => 'required|email',
			'address' => 'required|string',
		]);

		$customer = new Customer;

        $customer->name = $request->name;
		$customer->phone_num = $request->phone_num;
		$customer->email = $request->email;
		$customer->address = $request->address;

        $customer->save();
		
		return Redirect::route('customers.index')->with('success', 'Customer added!');
	}
	
	public function show($id)
	{
		$customer = Customer::where('id', $id)->get();
		
		return Inertia::render('Customer/Show', [
			'customer' => $customer[0],
		]);
	}
	
	public function edit($id)
	{
		$customer = Customer::where('id', $id)->get();
		
		return Inertia::render('Customer/Edit', [
			'customer' => $customer[0],
		]);
	}
	
	public function update(Request $request, $id)
	{
		$request->validate([
			'name' => 'required|string',
			'phone_num' => 'required|string',
			'email' => 'required|email',
			'address' => 'required|string',
		]);
		
		$customer = Customer::find($id);

		$customer->name = $request->name;
		$customer->phone_num = $request->phone_num;
		$customer->email = $request->email;
		$customer->address = $request->address;

		$customer->save();
		
		return Redirect::route('customers.index')->with('success', 'Customer updated!');
	}
	
	public function destroy($id)
	{
		Customer::where('id', $id)->delete();
		return Redirect::route('customers.index')->with('success', 'Customer deleted!');
	}
}
