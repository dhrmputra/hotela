-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jan 2024 pada 17.45
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `fact`
--

CREATE TABLE `fact` (
  `id_pesanan` int(11) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_waktu` int(11) DEFAULT NULL,
  `lama_menginap` int(11) DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `fact`
--

INSERT INTO `fact` (`id_pesanan`, `id_kamar`, `id_user`, `id_waktu`, `lama_menginap`, `total_harga`) VALUES
(1, 2, 3, 4, 7, 20000),
(2, 3, 4, 5, 4, 10000),
(4, 3, 7, 1, 3, 40000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `factt`
--

CREATE TABLE `factt` (
  `id_pesanan` int(11) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_waktu` int(11) DEFAULT NULL,
  `lama_menginap` int(11) DEFAULT NULL,
  `total_hargaa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `factt`
--

INSERT INTO `factt` (`id_pesanan`, `id_kamar`, `id_user`, `id_waktu`, `lama_menginap`, `total_hargaa`) VALUES
(1, 2, 3, 4, 7, 63000),
(2, 3, 4, 5, 4, 16000),
(4, 3, 7, 1, 3, 12000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `facttt`
--

CREATE TABLE `facttt` (
  `id_pesanan` int(11) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_waktu` int(11) DEFAULT NULL,
  `lama_menginap` int(11) DEFAULT NULL,
  `total_hargaa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kamar`
--

CREATE TABLE `kamar` (
  `id_kamar` int(11) NOT NULL,
  `nama` varchar(60) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `kategori` tinyint(4) DEFAULT NULL,
  `kapasitas` int(11) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kamar`
--

INSERT INTO `kamar` (`id_kamar`, `nama`, `harga`, `kategori`, `kapasitas`, `deskripsi`, `status`) VALUES
(1, 'Kamar Premium', 2000, 1, 2, 'Kamar ini sangat mevvah ', 1),
(2, 'Kamar Gaming', 9000, 2, 5, 'Kamar ini khusus anak gamer', 1),
(3, 'Kamar Standard', 4000, 1, 1, 'Kamar ini seperti kamar kost', 2),
(4, 'Kamar Gubuk', 3000, 2, 10, 'Kamar ini sangat mewah ', 1),
(5, 'Kamar Honeymoon', 10000, 2, 2, 'Kamar ini khusus anak gamer', 1),
(6, 'Kamar Mayor', 1000, 1, 3, 'Kamar ini seperti kamar kost', 2),
(7, 'Kamar Platinum', 5000, 1, 5, 'Kamar ini sangat mewah ', 1),
(8, 'Kamar Diamond', 6000, 2, 6, 'Kamar ini khusus anak gamer', 1),
(9, 'Kamar Ascendant', 7000, 1, 7, 'Kamar ini enak', 2),
(10, 'Kamar Radiant', 8000, 2, 9, 'Kamar ini GG', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `paket`
--

CREATE TABLE `paket` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `paket`
--

INSERT INTO `paket` (`id`, `nama`, `harga`, `status`, `deskripsi`) VALUES
(1, 'Wedding', 20000, 1, 'Paket untuk nganten'),
(2, 'Honeymoon', 25000, 2, 'Paket untuk enak enak'),
(3, 'Family', 35000, 1, 'Paket untuk keluarga besar'),
(4, 'Hemat', 15000, 2, 'Paket untuk promo kamar'),
(5, 'Party', 20000, 1, 'Paket untuk pesta pora'),
(6, 'Birthday', 50000, 2, 'Paket untuk ulang tahun'),
(7, 'Meeting', 10000, 1, 'Paket untuk rapat kerja'),
(8, 'Murmer', 25000, 1, 'Paket untuk kaum murah meriah'),
(9, 'Sultan', 50000, 2, 'Paket untuk anak sultan'),
(10, 'Mevvah', 40000, 1, 'Paket untuk orang kaya');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesanan`
--

CREATE TABLE `pesanan` (
  `id_pesanan` int(11) NOT NULL,
  `nama_pemesan` varchar(255) DEFAULT NULL,
  `telp_pemesan` varchar(255) DEFAULT NULL,
  `tanggal_lahir` varchar(255) DEFAULT NULL,
  `KTP` varchar(255) DEFAULT NULL,
  `waktu_mulai` date DEFAULT NULL,
  `waktu_selesai` date DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `lama_menginap` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pesanan`
--

INSERT INTO `pesanan` (`id_pesanan`, `nama_pemesan`, `telp_pemesan`, `tanggal_lahir`, `KTP`, `waktu_mulai`, `waktu_selesai`, `keterangan`, `lama_menginap`) VALUES
(1, 'Komeng', '0869696969', '2003-04-05', '-', '2023-04-02', '2023-04-21', 'aman', 1),
(2, 'Alit', '0812121212', '2004-02-06', '-', '2023-04-03', '2023-04-11', 'aman', 2),
(3, 'Angga', '0834343434', '2005-01-07', '-', '2023-04-04', '2023-04-12', 'aman', 1),
(4, 'Dharmo', '0856565656', '2006-11-05', '-', '2023-04-05', '2023-04-12', 'aman', 2),
(5, 'Didok', '0878787878', '2007-12-05', '-', '2023-04-05', '2023-04-11', 'aman', 1),
(6, 'Soho', '0890909090', '2003-08-05', '-', '2023-04-07', '2023-04-14', 'aman', 1),
(7, 'Sengap', '0810101010', '2004-09-05', '-', '2023-04-06', '2023-04-18', 'aman', 2),
(8, 'Gembul', '0823232323', '2005-07-09', '-', '2023-04-02', '2023-04-19', 'aman', 1),
(9, 'Budi', '0845454545', '2006-06-08', '-', '2023-04-01', '2023-04-21', 'aman', 2),
(10, 'Mangku', '0867676767', '2007-09-02', '-', '2023-09-06', '2023-04-20', 'aman', 1),
(11, 'Mayun', '08123123123', '2003-02-02', '-', '2023-05-05', '2023-05-21', 'aman', 1),
(12, 'Deni', '08234234234', '2004-01-05', '-', '2023-04-23', '2023-05-15', 'aman', 2),
(13, 'Lanyink', '08345345345', '2003-05-20', '-', '2023-04-25', '2023-06-23', 'aman', 1),
(14, 'Saka', '08456456456', '2005-07-11', '-', '2023-04-21', '2023-06-05', 'aman', 2),
(15, 'Mayada', '08567567567', '2004-08-27', '-', '2023-03-14', '2023-06-10', 'aman', 1),
(16, 'Manik', '08678678678', '2006-08-17', '-', '2023-03-20', '2023-05-30', 'aman', 1),
(17, 'Junta', '08789789789', '2002-11-23', '-', '2023-05-01', '2023-06-01', 'aman', 2),
(18, 'Adnya', '08890890890', '2004-07-22', '-', '2023-05-02', '2023-06-20', 'aman', 1),
(19, 'Gading', '08901901901', '2005-07-15', '-', '2023-04-29', '2023-06-16', 'aman', 2),
(20, 'Ananta', '08012012012', '2004-09-12', '-', '2023-05-05', '2023-06-03', 'aman', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesanan_kamar`
--

CREATE TABLE `pesanan_kamar` (
  `id` int(11) NOT NULL,
  `id_pesanan` int(11) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pesanan_kamar`
--

INSERT INTO `pesanan_kamar` (`id`, `id_pesanan`, `id_kamar`) VALUES
(10, 1, 3),
(11, 5, 3),
(20, 2, 2),
(30, 3, 1),
(40, 4, 4),
(50, 5, 2),
(60, 1, 3),
(70, 2, 2),
(80, 3, 1),
(90, 4, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesanan_ruangan`
--

CREATE TABLE `pesanan_ruangan` (
  `id` int(11) NOT NULL,
  `id_pesanan` int(11) DEFAULT NULL,
  `id_ruangan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pesanan_ruangan`
--

INSERT INTO `pesanan_ruangan` (`id`, `id_pesanan`, `id_ruangan`) VALUES
(101, 1, 2),
(102, 2, 3),
(103, 4, 5),
(104, 2, 1),
(105, 3, 4),
(106, 1, 2),
(107, 2, 3),
(108, 4, 5),
(109, 2, 1),
(111, 3, 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ruangan`
--

CREATE TABLE `ruangan` (
  `id_ruangan` int(11) NOT NULL,
  `nama` varchar(10) DEFAULT NULL,
  `kapasitas` int(11) DEFAULT NULL,
  `fasilitas` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `ruangan`
--

INSERT INTO `ruangan` (`id_ruangan`, `nama`, `kapasitas`, `fasilitas`, `status`) VALUES
(1, 'Standard', 2, 'AC, TV, Toilet, 1 Bed', 1),
(2, 'VIP', 3, 'AC, TV, Toilet, 2 Bed', 2),
(3, 'VVIP', 4, 'AC, TV, Toilet, 3 Bed', 1),
(4, 'VVVIP', 5, 'AC, TV, Toilet, 4 Bed', 2),
(5, 'Mevvah', 10, 'AC, TV, Toilet, 1 Bed', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tr_pesanan`
--

CREATE TABLE `tr_pesanan` (
  `id_pesanan` int(11) NOT NULL,
  `id_kamar` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_waktu` int(11) NOT NULL,
  `lama_menginap` int(11) NOT NULL,
  `total_harga` int(11) NOT NULL,
  `id_ruangan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tr_pesanan`
--

INSERT INTO `tr_pesanan` (`id_pesanan`, `id_kamar`, `id_user`, `id_waktu`, `lama_menginap`, `total_harga`, `id_ruangan`) VALUES
(1, 2, 3, 4, 7, 20000, 5),
(2, 3, 4, 5, 4, 10000, 1),
(4, 3, 7, 1, 3, 40000, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `jabatan` varchar(255) DEFAULT NULL,
  `telp` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `KTP` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `nama`, `jabatan`, `telp`, `alamat`, `KTP`, `foto`, `status`) VALUES
(1, 'Komeng', 'kominggay', 'Ladusigh', 'member party gay', '0869696969', 'Jl. Danau Tempe no.69', '-', '-', 1),
(2, 'Lok', 'alitlok', 'Alit', 'petugas', '0812121212', 'Jl. Tukad pakerisan no.87', '-', '-', 1),
(3, 'Tole', 'anggatole', 'Angga', 'pengangguran', '0834343434', 'Jl. Tukad Barito no.19', '-', '-', 1),
(4, 'Dharmo', 'dharmomo', 'dharma', 'admin', '0856565656', 'Jl. Tukad Citarum no.21', '-', '-', 1),
(5, 'Didok', 'didokrawr', 'dwipayana', 'pelanggan setia', '0878787878', 'Jl. Tukad Batanghari no.22', '-', '-', 1),
(6, 'Soho', 'soho123', 'Putra', 'member party gay', '0823232323', 'Jl. Danau Batur no.69', '-', '-', 1),
(7, 'Sengap', 'sengap78', 'Agus', 'petugas', '0845454545', 'Jl. Tukad badung no.87', '-', '-', 1),
(8, 'Gembul', 'gembul96', 'Wira', 'pengangguran', '0867676767', 'Jl. Tukad pancoran no.19', '-', '-', 1),
(9, 'Wibudi', 'budi87', 'Budi', 'admin', '0889898989', 'Jl. Tukad badung no.21', '-', '-', 1),
(10, 'Mangku', 'mangku19', 'merta', 'pelanggan setia', '0810101010', 'Jl. Tukad citarum no.22', '-', '-', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `waktu`
--

CREATE TABLE `waktu` (
  `id_waktu` int(11) NOT NULL,
  `hari` varchar(20) NOT NULL,
  `kuartal` varchar(20) NOT NULL,
  `bulan` varchar(20) NOT NULL,
  `tahun` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `waktu`
--

INSERT INTO `waktu` (`id_waktu`, `hari`, `kuartal`, `bulan`, `tahun`) VALUES
(1, 'senin', '3', 'september', '2023'),
(2, 'selasa', '4', 'november', '2023'),
(3, 'rabu', '2', 'desember', '2023'),
(4, 'minggu', '1', 'januari', '2023'),
(5, 'sabtu', '2', 'februari', '2023');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kamar`
--
ALTER TABLE `kamar`
  ADD PRIMARY KEY (`id_kamar`),
  ADD UNIQUE KEY `id` (`id_kamar`);

--
-- Indeks untuk tabel `paket`
--
ALTER TABLE `paket`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indeks untuk tabel `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`id_pesanan`),
  ADD UNIQUE KEY `id` (`id_pesanan`);

--
-- Indeks untuk tabel `pesanan_kamar`
--
ALTER TABLE `pesanan_kamar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indeks untuk tabel `pesanan_ruangan`
--
ALTER TABLE `pesanan_ruangan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indeks untuk tabel `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`id_ruangan`),
  ADD UNIQUE KEY `id` (`id_ruangan`);

--
-- Indeks untuk tabel `tr_pesanan`
--
ALTER TABLE `tr_pesanan`
  ADD PRIMARY KEY (`id_pesanan`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `id` (`id_user`);

--
-- Indeks untuk tabel `waktu`
--
ALTER TABLE `waktu`
  ADD PRIMARY KEY (`id_waktu`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kamar`
--
ALTER TABLE `kamar`
  MODIFY `id_kamar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `paket`
--
ALTER TABLE `paket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `pesanan`
--
ALTER TABLE `pesanan`
  MODIFY `id_pesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `pesanan_kamar`
--
ALTER TABLE `pesanan_kamar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT untuk tabel `pesanan_ruangan`
--
ALTER TABLE `pesanan_ruangan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT untuk tabel `ruangan`
--
ALTER TABLE `ruangan`
  MODIFY `id_ruangan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `waktu`
--
ALTER TABLE `waktu`
  MODIFY `id_waktu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
