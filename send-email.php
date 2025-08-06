<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

//Load Composer's autoloader (created by composer, not included with PHPMailer)
require 'vendor/autoload.php';

$name = htmlspecialchars($_POST['name'] ?? '');
$email = htmlspecialchars($_POST['email'] ?? '');
$message = nl2br(htmlspecialchars($_POST['message'] ?? ''));

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.office365.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = 'lisa@volcanocreekenterprises.com';
$mail->Password = 'your_password';
$mail->setFrom('lisa@volcanocreekenterprises.com', 'Lisa');
$mail->addAddress('bristolhall@gmail.com', 'Bristol Hall');
$mail->isHTML(true);
$mail->Subject = "New Contact Form Message from $name";
$mail->Body = "
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Message:</strong><br>$message</p>
";
$mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n" . $_POST['message'];

if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
?>