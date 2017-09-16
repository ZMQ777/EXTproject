<?php

$rule_id=$_REQUEST['rule_id'];
$rule_name=$_REQUEST['rule_name'];
$rule_inro=$_REQUEST['rule_inro'];
$rule_auth=$_REQUEST['rule_auth'];


$sql="UPDATE sys_rule set rule_auth='$rule_auth',rule_name='$rule_name',rule_inro='$rule_inro' where rule_id=$rule_id";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$count = $dbh->exec($sql);
// 以关联数组取出所有结果集
$dbh=null;

if($count>0){
	echo 'true';
}else{
	echo 'false';
}