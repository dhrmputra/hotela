<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthPegawai
{
    public function handle(Request $request, Closure $next)
    {
        if (! session('login')) {
            return redirect('/login');
        }

        // cek waktu terakhir aktivitas
        if (session('last_activity')) {

            $inactive = time() - session('last_activity');

            if ($inactive > 300) { // 300 detik = 5 menit
                session()->flush();

                return redirect('/login')->with('error', 'Session expired, silakan login kembali.');
            }
        }

        // update waktu aktivitas
        session(['last_activity' => time()]);

        return $next($request);
    }
}
