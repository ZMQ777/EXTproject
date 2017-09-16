<?php

$auth_id=$_REQUEST['auth_id'];
$auth_name=$_REQUEST['auth_name'];
$auth_inro=$_REQUEST['auth_inro'];
$p_id=$_REQUEST['p_id'];


$sql="UPDATE sys_auth set auth_name='$auth_name',p_id=$p_id,auth_inro='$auth_inro' where auth_id=$auth_id";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$count = $dbh->exec($sql);
// 以关联数组取出所有结果集
$dbh=null;

if($count>0){
	echo 'true';
}else{
	echo 'false';
}


