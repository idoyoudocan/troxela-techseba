<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} — শীঘ্রই আসছে</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background: #F7F5F0;
            color: #0B1F17;
            font-family: system-ui, -apple-system, "Segoe UI", "Noto Sans Bengali", sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }
        .card {
            background: #fff;
            border: 1px solid #e5e0d5;
            border-top: 5px solid #14694D;
            border-radius: 16px;
            max-width: 560px;
            width: 100%;
            padding: 48px 32px;
            text-align: center;
            box-shadow: 0 12px 40px rgba(11, 31, 23, .08);
        }
        .logo {
            width: 72px; height: 72px;
            margin: 0 auto 20px;
            border-radius: 18px;
            background: linear-gradient(135deg, #14694D, #0E3B2E);
            color: #fff;
            font-size: 40px;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .brand {
            font-size: 13px;
            letter-spacing: .35em;
            color: #14694D;
            font-weight: 700;
            text-transform: uppercase;
        }
        h1 {
            font-size: 34px;
            line-height: 1.25;
            margin: 10px 0 12px;
            color: #0B1F17;
        }
        .tagline {
            font-size: 17px;
            line-height: 1.7;
            color: #4a5a52;
        }
        .badge {
            display: inline-block;
            margin-top: 26px;
            padding: 10px 22px;
            border-radius: 999px;
            background: #0E3B2E;
            color: #F7F5F0;
            font-size: 16px;
            font-weight: 700;
        }
        .badge span { color: #C6A15B; }
        footer {
            margin-top: 30px;
            font-size: 13px;
            color: #8a938c;
        }
        footer a { color: #14694D; text-decoration: none; }
    </style>
</head>
<body>
    <main class="card">
        <div class="logo">T</div>
        <div class="brand">Troxela</div>
        <h1>{{ config('app.name') }}</h1>
        <p class="tagline">{{ config('app.tagline') }}</p>
        <div class="badge"><span>✦</span> শীঘ্রই আসছে <span>✦</span></div>
        <footer>
            <a href="https://troxela.store">troxela.store</a> · আমরা কাজ করছি, খুব শীঘ্রই দেখা হবে
        </footer>
    </main>
</body>
</html>
