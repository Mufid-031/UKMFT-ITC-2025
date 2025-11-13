<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Http\Requests\Position\StorePositionRequest;
use App\Http\Requests\Position\UpdatePositionRequest;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $positions = Position::withCount('users')->get();

        return Inertia::render('position/index', [
            'positions' => $positions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('position/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePositionRequest $request)
    {
        try {
            $validated = $request->validated();

            Position::create($validated);

            return redirect()
                ->route('positions.index')
                ->with('success', 'Position created successfully');
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
    public function show(Position $position)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Position $position)
    {
        return Inertia::render('position/edit', [
            'position' => $position
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePositionRequest $request, Position $position)
    {
        try {
            $validated = $request->validated();

            $position->update($validated);

            return redirect()
                ->route('positions.index')
                ->with('success', 'Position updated successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->route('positions.index')
                ->with('error', 'Something went wrong');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Position $position)
    {
        try {
            $position->delete();

            return redirect()
                ->route('positions.index')
                ->with('success', 'Position deleted successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->route('positions.index')
                ->with('error', 'Something went wrong');
        }
    }
}
