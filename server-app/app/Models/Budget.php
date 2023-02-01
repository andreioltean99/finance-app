<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
    use HasFactory;

    public mixed $id;
    /**
     * @var int|mixed|string|null
     */
    public mixed $user_id;
    public mixed $name;
    public mixed $max;
    protected $table = 'budgets';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'max',
    ];
    protected $casts = [
        'id' => 'string'
    ];

    public function expenses(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany("App\Models\Expense");
    }
}
