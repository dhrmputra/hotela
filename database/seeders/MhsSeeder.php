<?php
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
 
 
use Faker\Factory as Faker;
 
 
class MhsSeeder extends Seeder
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
 
    		DB::table('mhs')->insert([
    			'nama' => $faker->name,
    			'jurusan' => $faker->jobTitle,
    			'umur' => $faker->numberBetween(25,40),
    			'alamat' => $faker->address,
    			'telp' => $faker->phone
    		]);
 
    	}
 
    }
}