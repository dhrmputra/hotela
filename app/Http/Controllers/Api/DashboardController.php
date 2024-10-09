<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\HotelController;
use App\Models\Kamar;
use App\Models\User;
use App\Models\Pesanan;
use App\Models\Pegawai;
use Database\Seeders\KamarSeeder;

class DashboardController extends HotelController
{
    public function index()
    {
        return response()->json([
            'kamar'   => Kamar::count(),
            'user'    => User::count(),
            'pesanan' => Pesanan::count(),
            'pegawai' => Pesanan::count(),
        ]);
    }
}