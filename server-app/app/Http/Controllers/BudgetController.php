<?php

namespace App\Http\Controllers;

use App\Http\Requests\BudgetStoreRequest;
use App\Models\Budget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BudgetController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json(Budget::where('user_id', '=', intval(Auth::id()))->with('Expenses')->get());
    }
    public function show($budgetId)
    {
        return response()->json(Budget::where('id', '=', $budgetId)->get());
    }
    public function store(BudgetStoreRequest $request)
    {
        $budget = new Budget();
        $budget['id'] = $request->id;
        $budget['user_id'] = Auth::id();
        $budget['name'] = $request->name;
        $budget['max'] = $request->max;
        $budget->save();

        return response()->json($budget);
    }
}
