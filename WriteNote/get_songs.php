<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$songDir = 'song/';
$mp3Files = [];

// Check if the song directory exists
if (!is_dir($songDir)) {
    echo json_encode([]);
    exit;
}

// Scan the directory for files
$files = scandir($songDir);

// Filter for MP3 files
foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'mp3') {
        // Use the filename as the title and remove extension for display
        $title = pathinfo($file, PATHINFO_FILENAME);
        $mp3Files[] = [
            'title' => $title,
            'artist' => 'Unknown Artist',
            'file' => $file
        ];
    }
}

echo json_encode($mp3Files);
?>