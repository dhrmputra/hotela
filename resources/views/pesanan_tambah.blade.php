<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Tambah Pesanan</h1>
</div>

<!-- Content Row -->
<div class="row">

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-md-12 col-md-12 mb-4">
        <div class="card border-left shadow h-100 py-2">
            <div class="card-body">
                <a href="/hotela/pesanan" class="btn btn-primary">Kembali</a>
                <br />
                <br />

                <form method="post" action="/hotela/pesanan/store">
                    {{ csrf_field() }}

                    <div class="form-group">
                        <label>Nama pemesan</label>
                        <input type="text" name="nama_pemesan" required="required" class="form-control" placeholder="nama pemesan">
                    </div>

                    <div class="form-group">
                        <label>No Telepon Pemesan</label>
                        <input type="number" name="telp_pemesan" required="required" class="form-control" placeholder="No Telp Pemesan">
                    </div>

                    <div class="form-group">
                        <label>Tanggal Lahir</label>
                        <input type="date" name="tanggal_lahir" required="required" class="form-control" placeholder="Tanggal Lahir">
                    </div>

                    <div class="form-group">
                        <label>Waktu mulai</label>
                        <input type="date" name="waktu_mulai" required="required" class="form-control" placeholder="waktu mulai">
                    </div>

                    <div class="form-group">
                        <label>Waktu_selesai</label>
                        <input type="date" name="waktu_selesai" required="required" class="form-control" placeholder="waktu_selesai">
                    </div>
                    <div class="form-group">
                        <label>Keterangan</label>
                        <input type="text" name="keterangan" required="required" class="form-control" placeholder="keterangan">
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