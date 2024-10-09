<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
 
 
class KamarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 
    	$faker = Faker::create('id_ID');
 
    	for($i = 1; $i <= 50; $i++){
 
    	      // insert data ke table pegawai menggunakan Faker
    		DB::table('kamar')->insert([
    			'nama' => $faker->streetName(),
    			'harga' => $faker->numberBetween(10000,50000),
    			'kategori' => $faker->realTextBetween("aman","aman"),
    			'kapasitas' => $faker->numberBetween(1,5),
    			'deskripsi' => $faker->text,
    			'status' => $faker->realTextBetween("ready","not ready")
    		]);
 
    	}
 
    }
}