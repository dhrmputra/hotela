<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Edit Pesanan</h1>
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

                @foreach($pesanan as $p)
                <form method="post" action="/hotela/pesanan/update">
                    {{ csrf_field() }}
                    <input type="hidden" name="id_pesanan" value="{{ $p->id_pesanan }}"> 
                    <div class="form-group">
                        <label>Nama pemesan</label>
                        <input type="text" name="nama_pemesan" required="required" class="form-control" placeholder="nama pemesan Kamar" value=" {{ $p->nama_pemesan }}">
                    </div>

                    <div class="form-group">
                        <label>Telp pemesan</label>
                        <input type="text" name="telp_pemesan" required="required" class="form-control" placeholder="telp pemesan" value=" {{ $p->telp_pemesan }}">
                    </div>

                    <div class="form-group">
                        <label>Tanggal lahir</label>
                        <input type="text" name="tanggal_lahir" required="required" class="form-control" placeholder="tanggal_lahir" value=" {{ $p->tanggal_lahir }}">
                    </div>

                    <div class="form-group">
                        <label>Waktu mulai</label>
                        <input type="text" name="waktu_mulai" required="required" class="form-control" placeholder="waktu mulai" value=" {{ $p->waktu_mulai }}">
                    </div>

                    <div class="form-group">
                        <label>Waktu Selesai</label>
                        <input type="text" name="waktu_selesai" required="required" class="form-control" placeholder="waktu selesai" value=" {{ $p->waktu_selesai }}">
                    </div>
                    <div class="form-group">
                        <label>Keterangan</label>
                        <input type="text" name="keterangan" required="required" class="form-control" placeholder="waktu mulai" value=" {{ $p->keterangan }}">
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-success" value="Simpan">
                    </div>
                </form>
                @endforeach
            </div>
        </div>
    </div>
</div> 
@endsection