<?php
	
$auth_name=$_REQUEST['auth_name'];
$auth_inro=$_REQUEST['auth_inro'];
$p_id=$_REQUEST['p_id'];

$sql="SELECT MAX(auth_id) FROM sys_auth";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$res = $dbh->query($sql);
$count = $res->fetchColumn();


$auth_id=$count+1;

$sql="insert into sys_auth values($auth_id,'$auth_name','$auth_inro',$p_id)";
$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');

$result = $dbh->exec($sql);
$dbh=null;
if($result>0){
	echo 'true';
}else{
	echo 'false';
}