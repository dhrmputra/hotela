<!-- Menghubungkan dengan view template master -->
@extends('master')

<!-- isi bagian judul halaman -->
<!-- cara penulisan isi section yang pendek -->
@section('judul_halaman', 'Halaman Home')


<!-- isi bagian konten -->
<!-- cara penulisan isi section yang panjang -->
@section('konten')

@vite(['resources/css/app.css', 'resources/js/app.jsx'])

<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">Selamat Datang !</h1>
</div>

<!-- Content Row -->
<div class="row">

	<!-- Earnings (Monthly) Card Example -->
	<div class="col-md-12 col-md-12 mb-4">
		<div class="card border-left shadow h-100 py-2">
			<div id="app"></div>

			<div class="card-body d-flex">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title text-center">Total Kamar</h5>
						<p class="card-text text-center fs-4">{{ $kamar }}</p>
						<a href="/kamar" class="btn btn-primary">More Details</a>
					</div>
				</div>
				<div class="card mx-4">
					<div class="card-body">
						<h5 class="card-title text-center">Total User</h5>
						<p class="card-text text-center fs-4">{{ $user }}</p>
						<a href="/user" class="btn btn-primary">More Details</a>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<h5 class="card-title text-center">Total Pesanan</h5>
						<p class="card-text text-center fs-4">{{ $pesanan }}</p>
						<a href="/pesanan" class="btn btn-primary">More Details</a>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<h5 class="card-title text-center">Total pegawai</h5>
						<p class="card-text text-center fs-4">{{ $pesanan }}</p>
						<a href="/pegawai" class="btn btn-primary">More Details</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection