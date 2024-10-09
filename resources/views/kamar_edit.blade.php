<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Edit Kamar</h1>
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

                @foreach($kamar as $p)
                <form method="post" action="/hotela/kamar/update">
                    {{ csrf_field() }}
                    <input type="hidden" name="id_kamar" value="{{ $p->id_kamar }}"> 
                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" name="nama" class="form-control" required="required" placeholder="Nama Kamar" value=" {{ $p->nama }}">
                    </div>
                    <div class="form-group">
                        <label>Harga</label>
                        <input type="text" name="harga" class="form-control" required="required" placeholder="Harga" value=" {{ $p->harga }}">
                    </div>

                    <div class="form-group">
                        <label>Kategori</label>
                        <input type="text" name="kategori" class="form-control"  required="required" placeholder="kategori" value=" {{ $p->kategori }}">
                    </div>

                    <div class="form-group">
                        <label>Kapasitas</label>
                        <input type="text" name="kapasitas" required="required" class="form-control" placeholder="kapasitas" value=" {{ $p->kapasitas }}">
                    </div>

                    <div class="form-group">
                        <label>Deskripsi</label>
                        <textarea type="text" name="deskripsi" required="required" class="form-control" placeholder="deskripsi">{{ $p->deskripsi }}</textarea>
                    </div>

                    <div class="form-group">
                        <label>Status</label>
                        <input type="text" name="status" class="form-control" required="required" placeholder="status" value=" {{ $p->status }}">
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