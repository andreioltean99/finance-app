<?php

namespace App\Http\Controllers;

use App\Models\Budget;

class BudgetController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json(Budget::all());
    }
}
