<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        return view('customer.dashboard');
    }

    // public function rooms()
    // {
    //     return view('customer.rooms');
    // }

    // public function about()
    // {
    //     return view('customer.about');
    // }

    // public function contact()
    // {
    //     return view('customer.contact');
    // }
}
