<?php
	
$rule_name=$_REQUEST['rule_name'];
$rule_inro=$_REQUEST['rule_inro'];
$rule_auth=$_REQUEST['rule_auth'];

$sql="select max(rule_id) as maxid from sys_rule";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
$data = $sta->fetchAll(PDO::FETCH_ASSOC);


$rule_id=$data[0]['maxid']+1;

$sql="insert into sys_rule values($rule_id,'$rule_name','$rule_inro','$rule_auth')";
$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
//$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
//$data = $sta->fetchAll(PDO::FETCH_ASSOC);
$dbh=null;
if($dbh->query($sql)){
	echo 'true';
}else{
	echo 'false';
}