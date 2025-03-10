<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;
    protected $fillable = [
        'title',
        'date',
        'location',
        'category',
        'description',
        'image_url',
        'price',
        'capacity',
        'registered_count',
        'status',
    ];

    protected $casts = [
        'date' => 'date',
        'price' => 'decimal:2',
        'capacity' => 'integer',
        'registered_count' => 'integer',
    ];
}
