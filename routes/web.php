<?php

use Illuminate\Support\Facades\Route;

// Tech Seba homepage is the shop (static home.html in public/); the admin
// dashboard template lives at dashboard.html. Served via Laravel so the
// homepage does not depend on the server's DirectoryIndex order.
Route::get('/', function () {
    return response()->file(public_path('home.html'));
});

// The live server does not serve the static template files directly
// (every .html request falls through to Laravel and 404s), so serve them
// through Laravel too. Strict allowlist — no path traversal.
Route::get('/{file}', function (string $file) {
    $allowed = [
        'dashboard.html', 'home.html', 'products.html', 'product.html',
        'login.html', 'register.html', 'forgot-password.html', 'otp.html',
        'reset-password.html', 'lock-screen.html',
        'style.css', 'app.js', 'home.js', 'product.js', 'products.js',
    ];

    abort_unless(in_array($file, $allowed, true), 404);

    return response()->file(public_path($file));
})->where('file', '[A-Za-z0-9_.\-]+');
