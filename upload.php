<?php
$targetDir = 'uploads/';
$targetFile = $targetDir . basename($_FILES['image']['name']);

// Check if the file already exists
if (file_exists($targetFile)) {
    echo 'File already exists.';
    exit;
}

// Check file size (adjust as needed)
if ($_FILES['image']['size'] > 5 * 1024 * 1024) {
    echo 'File is too large. Maximum file size is 5MB.';
    exit;
}

// Allow only certain file formats (adjust as needed)
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
$uploadedFileExtension = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
if (!in_array($uploadedFileExtension, $allowedExtensions)) {
    echo 'Invalid file format. Allowed formats: JPG, JPEG, PNG, GIF.';
    exit;
}

// Move the uploaded file to the target directory
if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
    echo 'File uploaded successfully.';
} else {
    echo 'Error uploading file.';
}
?>
