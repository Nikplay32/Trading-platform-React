<?php 
	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","root","","trading_platform");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$email = $_POST['email'];
		$password = $_POST['password'];
        $username = $_POST['username'];
        $uniqueID = uniqid();
		
		$sql = "INSERT INTO user_auth(id,email,password,username) VALUES('$uniqueID','$email','$password','$username');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}
?>