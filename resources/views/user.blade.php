<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Data User</h1>
</div>

<!-- Content Row -->
<div class="row">

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-md-12 col-md-12 mb-4">
        <div class="card border-left shadow h-100 py-2">
            <div class="card-body">
                <div class="text-center mb-4">
                    <a href="/hotela/user/tambah" class="btn btn-primary">Tambah</a>
                </div>
                <table class="table border-4 w-100 m-auto table-striped">
                    <thead class="bg-primary text-white">
                        <tr>
                            <td>id</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Nama</td>
                            <td>Jabatan</td>
                            <td>Telp</td>
                            <td>Alamat</td>
                            <td>Status</td>
                            <td style="width: 200px;">Opsi</td>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($user as $p)
                        <tr>
                            <td>{{ $p->id_user }}</td>
                            <td>{{ $p->username }}</td>
                            <td>{{ $p->password }}</td>
                            <td>{{ $p->nama }}</td>
                            <td>{{ $p->jabatan }}</td>
                            <td>{{ $p->telp }}</td>
                            <td>{{ $p->alamat }}</td>
                            <td>{{ $p->status }}</td>
                            <td>
                                <a href="/hotela/user/edit/{{ $p->id_user }}" class="btn btn-warning">Edit</a>
                                |
                                <a href="/hotela/user/hapus/{{ $p->id_user }}" class="btn btn-danger">Hapus</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                @endsection