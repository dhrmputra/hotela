<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Kontak')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Edit User</h1>
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

                @foreach($user as $p)

                <form method="post" action="/hotela/user/update">
                    <input type="hidden" name="id_user" value="{{ $p->id_user }}"> 
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" name="username" required="required" class="form-control" placeholder="username Kamar" value=" {{ $p->username }}">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" name="password" required="required" class="form-control" placeholder="password" value=" {{ $p->password }}">
                    </div>

                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" name="nama" required="required" class="form-control" placeholder="nama" value=" {{ $p->nama }}">
                    </div>

                    <div class="form-group">
                        <label>Jabatan</label>
                        <input type="text" name="jabatan" required="required" class="form-control" placeholder="jabatan" value=" {{ $p->jabatan }}">
                    </div>

                    <div class="form-group">
                        <label>Telepon</label>
                        <input type="text" name="telp" class="form-control" placeholder="telp" value=" {{$p->telp }}">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <textarea type="text" name="alamat" class="form-control" placeholder="Alamat">{{ $p->alamat }}</textarea>
                    </div>

                    <div class="form-group">
                        <label>Status</label>
                        <input type="text" name="status" class="form-control" placeholder="status" value=" {{ $p->status }}">
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