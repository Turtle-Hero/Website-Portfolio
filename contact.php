<?php
$field_name = $_POST['contact_name'];
$field_email = $_POST['contact_email'];
$field_subject = $_POST['contact_subject'];
$field_message = $_POST['contact_message'];


$mail_to = 'twarner714@gmail.com';
$subject = 'Portfolio contact wants: '.$field_subject;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. I will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to twarner714@gmail.com');
		window.location = 'index.html';
	</script>
<?php
}
?>
