<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index(){
        $newProducts = Product::where('created_at', '>=', Carbon::now()->subDays(7))
            ->latest()
            ->take(10)
            ->get();

        return Inertia::render('welcome', [
            'newProducts' => $newProducts
        ]);
    }
}
