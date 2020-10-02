<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }
	
	public function index()
	{
		$users = User::query()->paginate(10);
		
		return Inertia::render('User/Index', [
			'users' => $users,
		]);
	}
	
	public function create()
	{
		if(Auth::user()->role == 1){
			return Inertia::render('User/Create');
		}else{
			return abort(404);
		}
	}

	public function store(Request $request)
	{
		$request->validate([
			'name' => 'required|string|max:255',
			'email' => 'required|email|unique:users',
			'password' => 'required|string|min:8',
			'role' => 'required|integer',
		]);

		$user = new User;

        $user->name = $request->name;
		$user->email = $request->email;
		$user->password = Hash::make($request->password);
		$user->role = $request->role;

        $user->save();
		
		return Redirect::route('users.index')->with('success', 'User added!');
	}
	
	public function show($id)
	{
		$user = User::where('id', $id)->get();
		
		return Inertia::render('User/Show', [
			'user' => $user[0],
		]);
	}
	
	public function edit($id)
	{
		$user = User::where('id', $id)->get();

		if(Auth::user()->id == $id || Auth::user()->role == 1){
			return Inertia::render('User/Edit', [
				'user' => $user[0],
			]);
		}else{
			return abort(404);
		}
	}
	
	public function update(Request $request, $id)
	{
		$request->validate([
			'name' => 'required|string|max:255',
			'email' => 'required|email',
			'password' => 'required|string|min:8',
			'role' => 'required|integer',
		]);

		$user = User::find($id);

		$user->name = $request->name;
		$user->email = $request->email;
		$user->password = Hash::make($request->password);
		$user->role = (isset($request->role)) ? $request->role : $user->role;

		$user->save();

        return Redirect::route('users.index')->with('success', 'User updated!');
	}
	
	public function destroy($id)
	{
		User::where('id', $id)->delete();
		return Redirect::route('users.index')->with('success', 'User deleted!');
	}
}
