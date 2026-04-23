<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
@section('judul_halaman', 'Data Pegawai')

<!-- isi bagian konten -->
@section('konten')

    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Data Pegawai</h1>
    </div>

    <!-- Content Row -->
    <div class="row">

        <div class="col-md-12 mb-4">
            <div class="card border-left shadow h-100 py-2">
                <div class="card-body">

                    <div class="text-center mb-4">
                        <a href="/pegawai/tambah" class="btn btn-primary">Tambah</a>
                    </div>

                    <table class="table w-100 m-auto table-striped">
                        <thead class="bg-primary text-white">
                            <tr>
                                <td>ID</td>
                                <td>Nama Pegawai</td>
                                <td>Username</td>
                                <td>Password</td>
                                <td>Umur</td>
                                <td>Alamat</td>
                                <td>Jabatan</td>
                                <td>Opsi</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($pegawai as $p)
                                <tr>
                                    <td>{{ $p->id_pegawai }}</td>
                                    <td>{{ $p->nama_pegawai }}</td>
                                    <td>{{ $p->username }}</td>
                                    <td>{{ $p->password }}</td>
                                    <td>{{ $p->umur }}</td>
                                    <td>{{ $p->alamat }}</td>
                                    <td>{{ $p->jabatan }}</td>
                                    <td>
                                        <a href="/pegawai/edit/{{ $p->id_pegawai }}" class="btn btn-warning">
                                            Edit
                                        </a>
                                        |
                                        <a href="/pegawai/hapus/{{ $p->id_pegawai }}" class="btn btn-danger"
                                            onclick="return confirm('Yakin hapus data ini?')">
                                            Hapus
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    </div>

@endsection
