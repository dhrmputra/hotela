<?php
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
 
class PegawaiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	// insert data ke table pegawai
        DB::table('pegawai_table')->insert([
        	'nama' => 'Joni',        	
        	'nim' => 313,
        	'alamat' => 'Jl. Panglateh'
        ]);
        
    }
}