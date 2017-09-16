<?php

$rule_id=$_REQUEST['rule_id'];

$sql="DELETE from sys_rule WHERE rule_id=$rule_id";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$count = $dbh->exec($sql);
// 以关联数组取出所有结果集
$dbh=null;

if($count>0){
	echo 'true';
}else{
	echo 'false';
}
