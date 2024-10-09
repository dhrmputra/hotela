<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Tambah User</h1>
</div>

<!-- Content Row -->
<div class="row">

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-md-12 col-md-12 mb-4">
        <div class="card border-left shadow h-100 py-2">
            <div class="card-body">
                <a href="/hotela/user" class="btn btn-primary">Kembali</a>
                <br />
                <br />

                <form method="post" action="/hotela/user/store">

                    {{ csrf_field() }}

                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" name="username" required="required" class="form-control" placeholder="Username">
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password" required="required" class="form-control" placeholder="Password">
                    </div>

                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" name="nama" required="required" class="form-control" placeholder="Nama">
                    </div>

                    <div class="form-group">
                        <label>Jabatan</label>
                        <input type="text" name="jabatan" required="required" class="form-control" placeholder="Jabatan">
                    </div>

                    <div class="form-group">
                        <label>Telepon</label>
                        <input type="number" name="telp" required="required" class="form-control" placeholder="Telepon">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <textarea type="number" name="alamat" required="required" class="form-control" placeholder="Alamat"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                        <input type="number" name="status" required="required" class="form-control" placeholder="Status">
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-success" value="Simpan">
                    </div>

                </form>

            </div>
        </div>
    </div>
</div>
@endsection