<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\Division;
use App\Models\DivisionUser;
use App\Models\Position;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with(['division', 'position'])->get();

        return Inertia::render('user/index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $divisions = Division::all();
        $positions = Position::all();

        return Inertia::render('user/create', [
            'divisions' => $divisions,
            'positions' => $positions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        try {
            $validated = $request->validated();

            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => $validated['password'],
            ]);

            DivisionUser::create([
                'user_id' => $user->id,
                'division_id' => $validated['division_id'],
                'position_id' => $validated['position_id'],
            ]);

            return redirect()
                ->route('users.index')
                ->with('success', 'User created successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->back()
                ->with('error', 'Something went wrong');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $user = $user->load('division', 'position');
        $divisions = Division::all();
        $positions = Position::all();

        return Inertia::render('user/edit', [
            'divisions' => $divisions,
            'positions' => $positions,
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        try {
            $validated = $request->validated();

            $user->update([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => $validated['password'] ? bcrypt($validated['password']) : $user->password,
            ]);

            DivisionUser::where('user_id', $user->id)->update([
                'division_id' => $validated['division_id'],
                'position_id' => $validated['position_id'],
            ]);

            return redirect()
                ->route('users.index')
                ->with('success', 'User updated successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->back()
                ->with('error', 'Something went wrong');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {
            $user->delete();

            return redirect()
                ->route('users.index')
                ->with('success', 'User deleted successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->back()
                ->with('error', 'Something went wrong');
        }
    }
}
