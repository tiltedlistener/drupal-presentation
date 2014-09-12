<?php

	$to = "corey@tagcreativestudio.com";
	$subject = "Error Report";
	$message = $_POST['data'];
	$from = "drupal-preso@tagcreativestudio.com";
	$headers = "From:" . $from;
	mail($to,$subject,$message,$headers);

?>