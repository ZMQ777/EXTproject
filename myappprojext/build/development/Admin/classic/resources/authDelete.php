<?php

$auth_id=$_REQUEST['auth_id'];

$sql="DELETE from sys_auth WHERE auth_id=$auth_id";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$count = $dbh->exec($sql);
// 以关联数组取出所有结果集
$dbh=null;

if($count>0){
	echo 'true';
}else{
	echo 'false';
}
