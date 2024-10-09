<?php
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
 
class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {    	
        DB::table('mhs')->insert([
        	'nama' => 'Joni',
        	'alamat' => 'Jl. Panglateh',
        	'umur' => 20
        ]);
        
    }
}