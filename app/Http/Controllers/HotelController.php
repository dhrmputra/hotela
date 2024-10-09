<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class HotelController extends Controller
{
    public function home()
    {
        return view('home');
    }
    public function index()
    {
        $kamar = DB::table('kamar')->count();
        $user = DB::table('user')->count();
        $pesanan = DB::table('pesanan')->count();

        return view('home', compact('kamar', 'user', 'pesanan'));
    }
    public function kamar()
    {
        $kamar = DB::table('kamar')->get();

        return view('kamar', ['kamar' => $kamar]);
    }
    public function pegawai()
    {
        $pegawai = DB::table('pegawai')->get();

        return view('pegawai', ['pegawai' => $pegawai]);
    }
    public function user()
    {
        $user = DB::table('user')->get();

        return view('user', ['user' => $user]);
    }
    public function pesanan()
    {
        $pesanan = DB::table('pesanan')->get();

        return view('pesanan', ['pesanan' => $pesanan]);
    }
    public function kamartambah()
    {
        return view('kamar_tambah');
    }
    public function usertambah()
    {
        return view('user_tambah');
    }
    public function pegawaitambah()
    {
        return view('pegawai_tambah');
    }
    public function pesanantambah()
    {
        return view('pesanan_tambah');
    }
    public function kamarstore(Request $request)
    {
        DB::table('kamar')->insert([
            'nama' => $request->nama,
            'harga' => $request->harga,
            'kategori' => $request->kategori,
            'kapasitas' => $request->kapasitas,
            'deskripsi' => $request->deskripsi,
            'status' => $request->status
        ]);
        return redirect('/hotela/kamar');
    }
    public function pegawaistore(Request $request)
    {
        DB::table('pegawai')->insert([
            'nama_pegawai' => $request->nama_pegawai,
            'umur' => $request->umur,
            'alamat' => $request->alamat,
            'jabatan' => $request->jabatan,
        ]);
        return redirect('/hotela/kamar');
    }
    public function userstore(Request $request)
    {
        DB::table('user')->insert([
            'username' => $request->username,
            'password' => $request->password,
            'nama' => $request->nama,
            'jabatan' => $request->jabatan,
            'telp' => $request->telp,
            'alamat' => $request->alamat,
            'status' => $request->status
        ]);
        return redirect('/hotela/user');
    }
    public function pesananstore(Request $request)
    {
        DB::table('pesanan')->insert([
            'nama_pemesan' => $request->nama_pemesan,
            'telp_pemesan' => $request->telp_pemesan,
            'tanggal_lahir' => $request->tanggal_lahir,
            'waktu_mulai' => $request->waktu_mulai,
            'waktu_selesai' => $request->waktu_selesai,
            'keterangan' => $request->keterangan,
        ]);
        return redirect('/hotela/pesanan');
    }
    public function kamaredit($id)
    {
        $kamar = DB::table('kamar')->where('id_kamar', $id)->get();
        return view('kamar_edit', ['kamar' => $kamar]);
    }
    public function useredit($id)
    {
        $user = DB::table('user')->where('id_user', $id)->get();
        return view('user_edit', ['user' => $user]);
    }
    public function pegawaiedit($id)
    {
        $user = DB::table('pegawai')->where('id_pegawai', $id)->get();
        return view('pegawai_edit', ['pegawai' => $user]);
    }
    public function pesananedit($id)
    {
        $pesanan = DB::table('pesanan')->where('id_pesanan', $id)->get();
        return view('pesanan_edit', ['pesanan' => $pesanan]);
    }
    public function kamarupdate(Request $request)
    {
        DB::table('kamar')->where('id_kamar', $request->id_kamar)->update([
            'nama' => $request->nama,
            'harga' => $request->harga,
            'kategori' => $request->kategori,
            'kapasitas' => $request->kapasitas,
            'deskripsi' => $request->deskripsi,
            'status' => $request->status
        ]);
        return redirect('/hotela/kamar');
    }
    public function pegawaiupdate(Request $request)
    {
        DB::table('pegawai')->where('id_pegawai', $request->id_kamar)->update([
            'nama_pegawai' => $request->nama_pegawai,
            'umur' => $request->umur,
            'alamat' => $request->alamat,
            'jabatan' => $request->jabatan,
        ]);
        return redirect('/hotela/pegawai');
    }

    public function userupdate(Request $request)
    {
        DB::table('user')->where('id_user', $request->id_user)->update([
            'username' => $request->username,
            'password' => $request->password,
            'nama' => $request->nama,
            'jabatan' => $request->jabatan,
            'telp' => $request->telp,
            'alamat' => $request->alamat,
            'status' => $request->status
        ]);
        return redirect('/hotela/user');
    }

    public function pesananupdate(Request $request)
    {
        DB::table('pesanan')->where('id_pesanan', $request->id_pesanan)->update([
            'nama_pemesan' => $request->nama_pemesan,
            'telp_pemesan' => $request->telp_pemesan,
            'tanggal_lahir' => $request->tanggal_lahir,
            'waktu_mulai' => $request->waktu_mulai,
            'waktu_selesai' => $request->waktu_selesai,
            'keterangan' => $request->keterangan,
        ]);
        return redirect('/hotela/pesanan');
    }

    public function kamarhapus($id)
    {
        DB::table('kamar')->where('id_kamar', $id)->delete();
        return redirect('/hotela/kamar');
    }
    public function pegawaihapus($id)
    {
        DB::table('kamar')->where('id_pegawai', $id)->delete();
        return redirect('/hotela/pegawai');
    }
    public function userhapus($id)
    {
        DB::table('user')->where('id_user', $id)->delete();
        return redirect('/hotela/user');
    }
    public function pesananhapus($id)
    {
        DB::table('pesanan')->where('id_pesanan', $id)->delete();
        return redirect('/hotela/pesanan');
    }
}
