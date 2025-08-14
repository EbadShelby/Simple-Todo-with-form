<?php
require_once 'config/database.php';

$sql = "SELECT id, name, email FROM users LIMIT 5";
$result = $conn->query($sql);

if ($result === false) {
    die("Query failed: " . $conn->error);
}

if ($result->num_rows > 0) {
    echo "<h2>Database connected successfully! Users found:</h2>";
    echo "<ul>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>ID: {$row['id']} | Name: {$row['name']} | Email: {$row['email']}</li>";
    }
    echo "</ul>";
} else {
    echo "Database connected, but no users found.";
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Todo</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div id="starsBox"></div>
</body>
<script src="assets/js/script.js"></script>

</html>
