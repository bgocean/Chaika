<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $messageContent = $_POST['message'];

    $token = "TOKEN_HERE";
    $chat_id = "YOUR_CHAT_ID";

    $message = "Name: " . $name . "\nEmail: " . $email . "\nPhone: " . $phone . "\nMessage: " . $messageContent;

    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . urlencode($message);

    $response = file_get_contents($url);
    if ($response) {
        echo 'Message has been sent';
    } else {
        echo 'Message could not be sent.';
    }
}
