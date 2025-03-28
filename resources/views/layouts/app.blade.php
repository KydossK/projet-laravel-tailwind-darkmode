<!DOCTYPE html>
<html lang="fr" x-data="{ darkMode: localStorage.getItem('darkMode') === 'true' }"
      :class="{ 'dark': darkMode }"
      x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val))">
<head>
    <meta charset="UTF-8">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 transition-colors duration-300 min-h-screen">

    {{-- Bouton dark/light --}}
    <div class="p-4 flex justify-end">
        <button
            @click="darkMode = !darkMode"
            class="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:shadow transition">
            🌗 Mode {{ darkMode ? 'Clair' : 'Sombre' }}
        </button>
    </div>

    {{-- Contenu principal --}}
    <main class="p-4">
        @yield('content')
    </main>

</body>
</html>
