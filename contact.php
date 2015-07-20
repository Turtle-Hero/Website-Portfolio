<?php
if(isset($_POST["submit"])) {
$recipient = "twarner714@gmail.com"; //my email
echo $subject = $_POST ["contact_subject"];
echo $name = $_POST ["contact_name"];
echo $email = $_POST["contact_email"];
echo  $message = $_POST["contact_message"];

 $mailBody="Name: $name\nEmail: $email\n\n$message"; 

 mail($recipient, $subject, $mailBody, "From: $name <$email>");

echo $thankYou="<p>Thank you! I will be in contact with you shortly.</p>";

}
?>
