<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Tambah Kamar</h1>
</div>

<!-- Content Row -->
<div class="row">

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-md-12 col-md-12 mb-4">
        <div class="card border-left shadow h-100 py-2">
            <div class="card-body">
                <a href="/hotela/kamar" class="btn btn-primary">Kembali</a>
                <br />
                <br />

                <form method="post" action="/hotela/kamar/store">

                    {{ csrf_field() }}

                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" name="nama" required="required" class="form-control" placeholder="Nama Kamar">
                    </div>

                    <div class="form-group">
                        <label>Harga</label>
                        <input type="number" name="harga" required="required" class="form-control" placeholder="Harga">
                    </div>

                    <div class="form-group">
                        <label>Kategori</label>
                        <input type="number" name="kategori" required="required" class="form-control" placeholder="kategori">
                    </div>

                    <div class="form-group">
                        <label>Kapasitas</label>
                        <input type="number" name="kapasitas" required="required" class="form-control" placeholder="kapasitas">
                    </div>

                    <div class="form-group">
                        <label>Deskripsi</label>
                        <textarea type="number" name="deskripsi" required="required" class="form-control" placeholder="deskripsi"></textarea>
                    </div>

                    <div class="form-group">
                        <label>Status</label>
                        <input type="number" required="required name="status" class="form-control" placeholder="status">
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