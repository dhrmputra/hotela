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

// Route::get('tes',function(){
//     return 'Welcome Rawr';
// });
// Route::get('user/{id}/{a}', function($id,$a){
//     return 'selamat calon programmer ' .$id . ' ' .$a;
// });

Route::get('/', [HotelController::class, 'index']);
Route::get('kamar', [HotelController::class, 'kamar']);
Route::get('kamar/tambah', [HotelController::class, 'kamartambah']);
Route::post('kamar/store', [HotelController::class, 'kamarstore']);
Route::get('kamar/edit/{id_kamar}', [HotelController::class, 'kamaredit']);
Route::post('kamar/update', [HotelController::class, 'kamarupdate']);
Route::get('kamar/hapus/{id_kamar}', [HotelController::class, 'kamarhapus']);

Route::get('user', [HotelController::class, 'user']);
Route::get('user/tambah', [HotelController::class, 'usertambah']);
Route::post('user/store', [HotelController::class, 'userstore']);
Route::get('user/edit/{id_user}', [HotelController::class, 'useredit']);
Route::post('user/update', [HotelController::class, 'userupdate']);
Route::get('user/hapus/{id_user}', [HotelController::class, 'userhapus']);

Route::get('pesanan', [HotelController::class, 'pesanan']);
Route::get('pesanan/tambah', [HotelController::class, 'pesanantambah']);
Route::post('pesanan/store', [HotelController::class, 'pesananstore']);
Route::get('pesanan/edit/{id_pesanan}', [HotelController::class, 'pesananedit']);
Route::post('pesanan/update', [HotelController::class, 'pesananupdate']);
Route::get('pesanan/hapus/{id_pesanan}', [HotelController::class, 'pesananhapus']);

Route::get('pegawai', [HotelController::class, 'pegawai']);
Route::get('pegawai/tambah', [HotelController::class, 'pegawaitambah']);
Route::post('pegawai/store', [HotelController::class, 'pegawaistore']);
Route::get('pegawai/edit/{id_pegawai}', [HotelController::class, 'pegawaiedit']);
Route::post('pegawai/update', [HotelController::class, 'pegawaiupdate']);
Route::get('pegawai/hapus/{id_pegawai}', [HotelController::class, 'pegawaihapus']);


Route::get('/login', [HotelController::class, 'login'])->middleware('guest');
Route::post('/login', [HotelController::class, 'loginProcess']);
Route::get('/logout', [HotelController::class, 'logout']);

Route::middleware('auth.pegawai')->group(function () {

    Route::get('/', [HotelController::class, 'index']);

    Route::get('kamar', [HotelController::class, 'kamar']);
    Route::get('kamar/tambah', [HotelController::class, 'kamartambah']);
    Route::post('kamar/store', [HotelController::class, 'kamarstore']);

    Route::get('user', [HotelController::class, 'user']);
    Route::get('user/tambah', [HotelController::class, 'usertambah']);
    Route::post('user/store', [HotelController::class, 'userstore']);

    Route::get('pesanan', [HotelController::class, 'pesanan']);
    Route::get('pesanan/tambah', [HotelController::class, 'pesanantambah']);
    Route::post('pesanan/store', [HotelController::class, 'pesananstore']);

    Route::get('pegawai', [HotelController::class, 'pegawai']);
    Route::get('pegawai/tambah', [HotelController::class, 'pegawaitambah']);
    Route::post('pegawai/store', [HotelController::class, 'pegawaistore']);

    Route::get('/logout', [HotelController::class, 'logout']);
});