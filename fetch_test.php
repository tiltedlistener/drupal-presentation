<?php


if ($_GET['type']) {
	$con = mysqli_connect("localhost","root","root","canada_test");

	// Check connection
	if (mysqli_connect_errno($con))
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	else {

		$query = "SELECT * FROM ". $_GET['type'] ." LIMIT 10";
		$res = mysqli_query($con, $query);
		if (!$res) {
		    echo "Failed to run query: (" . $mysqli->errno . ") " . $mysqli->error;
		}

		$result = array();
		$count = 0;
		while ($row = $res->fetch_assoc()) {
		  $result[$count] = $row;
		  $count++;
		}
		echo json_encode($result);
	}

	mysqli_close($con);
}


?>