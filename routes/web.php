<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PesananController;

/*
|--------------------------------------------------------------------- -----
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
//
Route::get('/', function () {
    return view('welcome');
});

// Route::get('tes',function(){
//     return 'Welcome Rawr';
// });
// Route::get('user/{id}/{a}', function($id,$a){
//     return 'selamat calon programmer ' .$id . ' ' .$a;
// });

Route::get('/hotela', [HotelController::class, 'home']);
Route::get('/hotela', [HotelController::class, 'index']);
Route::get('/hotela/kamar', [HotelController::class, 'kamar']);
Route::get('/hotela/kamar/tambah', [HotelController::class, 'kamartambah']);
Route::post('/hotela/kamar/store', [HotelController::class, 'kamarstore']);
Route::get('/hotela/kamar/edit/{id_kamar}', [HotelController::class, 'kamaredit']);
Route::post('/hotela/kamar/update', [HotelController::class, 'kamarupdate']);
Route::get('/hotela/kamar/hapus/{id_kamar}', [HotelController::class, 'kamarhapus']);

Route::get('/hotela/user', [HotelController::class, 'user']);
Route::get('/hotela/user/tambah', [HotelController::class, 'usertambah']);
Route::post('/hotela/user/store', [HotelController::class, 'userstore']);
Route::get('/hotela/user/edit/{id_user}', [HotelController::class, 'useredit']);
Route::post('/hotela/user/update', [HotelController::class, 'userupdate']);
Route::get('/hotela/user/hapus/{id_user}', [HotelController::class, 'userhapus']);

Route::get('/hotela/pesanan', [HotelController::class, 'pesanan']);
Route::get('/hotela/pesanan/tambah', [HotelController::class, 'pesanantambah']);
Route::post('/hotela/pesanan/store', [HotelController::class, 'pesananstore']);
Route::get('/hotela/pesanan/edit/{id_pesanan}', [HotelController::class, 'pesananedit']);
Route::post('/hotela/pesanan/update', [HotelController::class, 'pesananupdate']);
Route::get('/hotela/pesanan/hapus/{id_pesanan}', [HotelController::class, 'pesananhapus']);

Route::get('/hotela/pegawai', [HotelController::class, 'pegawai']);
Route::get('/hotela/pegawai/tambah', [HotelController::class, 'pegawaitambah']);
Route::post('/hotela/pegawai/store', [HotelController::class, 'pegawaistore']);
Route::get('/hotela/pegawai/edit/{id_pegawai}', [HotelController::class, 'pegawaiedit']);
Route::post('/hotela/pegawai/update', [HotelController::class, 'pegawaiupdate']);
Route::get('/hotela/pegawai/hapus/{id_pegawai}', [HotelController::class, 'pegawaihapus']);
