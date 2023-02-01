<?php

namespace App\Http\Controllers;

use App\Http\Requests\BudgetStoreRequest;
use App\Http\Requests\ExpenseStoreRequest;
use App\Models\Expense;
use Illuminate\Support\Facades\Auth;

class ExpenseController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
      //  return response()->json(Expense::where('user_id', '=', intval(Auth::id()))->get());
    }
    public function show($budgetId)
    {
        return response()->json(Expense::where('id', '=', $budgetId)->get());
    }
    public function store(ExpenseStoreRequest $request)
    {
        $expense = new Expense();
        $expense['id'] = $request->id;
        $expense['description'] = $request->description;
        $expense['amount'] = $request->amount;
        $expense['budget_id'] = $request->budget_id;
        $expense->save();

        return response()->json($expense);
    }
}
