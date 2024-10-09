<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Data Pesanan</h1>
</div>

<!-- Content Row -->
<div class="row">

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-md-12 col-md-12 mb-4">
        <div class="card border-left shadow h-100 py-2">
            <div class="card-body">
                <div class="text-center mb-4">
                    <a href="/hotela/pesanan/tambah" class="btn btn-primary">Tambah</a>
                </div>
                <table class="table border-4 w-100 m-auto table-striped">
                    <thead class="bg-primary text-white">
                        <tr>
                            <td>id</td>
                            <td>Nama Pemesan</td>
                            <td>Telp</td>
                            <td>Tgl Lahir</td>
                            <td>Waktu Mulai</td>
                            <td>Waktu Selesai</td>
                            <td>Keterangan</td>
                            <td>Opsi</td>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($pesanan as $p)
                        <tr>
                            <td>{{ $p->id_pesanan }}</td>
                            <td>{{ $p->nama_pemesan }}</td>
                            <td>{{ $p->telp_pemesan }}</td>
                            <td>{{ $p->tanggal_lahir }}</td>
                            <td>{{ $p->waktu_mulai }}</td>
                            <td>{{ $p->waktu_selesai }}</td>
                            <td>{{ $p->keterangan }}</td>
                            <td>
                                <a href="/hotela/pesanan/edit/{{ $p->id_pesanan}}" class="btn btn-warning">Edit</a>
                                |
                                <a href="/hotela/pesanan/hapus/{{ $p->id_pesanan}}" class="btn btn-danger">Hapus</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                @endsection