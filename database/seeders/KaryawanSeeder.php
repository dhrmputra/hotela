<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KaryawanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('karyawan')->insert([
        	'nama' => 'DIDOG',        	
        	'nim' => 212,
        	'alamat' => 'Jl. Nusa Dua'
        ]);
    }
}
