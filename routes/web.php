<?php

use Illuminate\Support\Facades\Route;

// Tech Seba homepage is the shop (static home.html in public/); the admin
// dashboard template lives at dashboard.html. Served via Laravel so the
// homepage does not depend on the server's DirectoryIndex order.
Route::get('/', function () {
    return response()->file(public_path('home.html'));
});
