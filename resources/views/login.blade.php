<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Login Pegawai</title>

    @vite('resources/js/login.jsx')
</head>
<body class="bg-gray-100">

    <div id="login"
         data-error="{{ session('error') }}"
     data-csrf="{{ csrf_token() }}">
    </div>

</body>
</html>