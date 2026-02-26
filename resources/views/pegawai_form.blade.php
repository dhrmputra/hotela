<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
@section('judul_halaman', isset($pegawai) ? 'Edit Pegawai' : 'Tambah Pegawai')

<!-- isi bagian konten -->
@section('konten')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        {{ isset($pegawai) ? 'Edit Pegawai' : 'Tambah Pegawai' }}
    </h1>
</div>

<!-- Content Row -->
<div class="row">

    <div class="col-md-12 mb-4">
        <div class="card border-left shadow h-100 py-2">
            <div class="card-body">

                <a href="/pegawai" class="btn btn-primary">Kembali</a>
                <br /><br />

                <form method="post"
                      action="{{ isset($pegawai) ? '/pegawai/update' : '/pegawai/store' }}">

                    {{ csrf_field() }}

                    @if(isset($pegawai))
                        <input type="hidden" name="id_pegawai" value="{{ $pegawai->id_pegawai }}">
                    @endif

                    <div class="form-group">
                        <label>Nama Pegawai</label>
                        <input type="text"
                               name="nama_pegawai"
                               required
                               class="form-control"
                               placeholder="Nama Pegawai"
                               value="{{ $pegawai->nama_pegawai ?? '' }}">
                    </div>

                    <div class="form-group">
                        <label>Umur</label>
                        <input type="number"
                               name="umur"
                               required
                               class="form-control"
                               placeholder="Umur"
                               value="{{ $pegawai->umur ?? '' }}">
                    </div>

                    <div class="form-group">
                        <label>Alamat</label>
                        <textarea name="alamat"
                                  required
                                  class="form-control"
                                  placeholder="Alamat">{{ $pegawai->alamat ?? '' }}</textarea>
                    </div>

                    <div class="form-group">
                        <label>Jabatan</label>
                        <input type="text"
                               name="jabatan"
                               required
                               class="form-control"
                               placeholder="Jabatan"
                               value="{{ $pegawai->jabatan ?? '' }}">
                    </div>

                    <div class="form-group">
                        <input type="submit"
                               class="btn btn-success"
                               value="{{ isset($pegawai) ? 'Update' : 'Simpan' }}">
                    </div>

                </form>

            </div>
        </div>
    </div>

</div>

@endsection