<?php

namespace App\Http\Controllers;

use App\Http\Requests\Division\StoreDivisionRequest;
use App\Http\Requests\Division\UpdateDivisionRequest;
use App\Models\Division;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $divisions = Division::withCount('users')->get();

        return Inertia::render('division/index', [
            'divisions' => $divisions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('division/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDivisionRequest $request)
    {
        try {
            $validated = $request->validated();

            Division::create($validated);

            return redirect()
                ->route('divisions.index')
                ->with('success', 'Division created successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->route('divisions.index')
                ->with('error', 'Division creation failed');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Division $division)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Division $division)
    {
        return Inertia::render('division/edit', [
            'division' => $division
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDivisionRequest $request, Division $division)
    {
        try {
            $validated = $request->validated();

            $division->update($validated);

            return redirect()
                ->route('divisions.index')
                ->with('success', 'Division updated successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->route('divisions.index')
                ->with('error', 'Division update failed');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Division $division)
    {
        try {
            $division->delete();

            return redirect()
                ->route('divisions.index')
                ->with('success', 'Division deleted successfully');
        } catch (\Throwable $th) {
            Log::error($th);

            return redirect()
                ->route('divisions.index')
                ->with('error', 'Division deletion failed');
        }
    }
}
