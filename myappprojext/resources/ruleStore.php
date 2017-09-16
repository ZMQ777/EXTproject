<?php
$sql="SELECT * FROM sys_rule";


$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
$data = $sta->fetchAll(PDO::FETCH_ASSOC);

$json1=array('items' => $data);
$dbh=null;
//var_dump();
// 格式化成 json
echo json_encode($json1);
?>