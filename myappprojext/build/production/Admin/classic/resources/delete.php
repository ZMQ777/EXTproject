<?php
	
	$u_id=$_REQUEST['u_id'];
	
	$sql="delete from user_Info where u_id=$u_id";
	
	$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
	
	$sta = $dbh->query($sql);
	
	if($dbh->query($sql)){
		echo 'success';
	}else{
		echo 'error';
	}
	
	
	// 以关联数组取出所有结果集
//	$data = $sta->fetchAll(PDO::FETCH_ASSOC);
	

	
//	var_dump($sta);
	
	
	
?>