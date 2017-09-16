<?php
//
//$page=$_GET['page'];
//$start=$_GET['start'];
//$limit=$_GET['limit'];
//$value=$_GET['value'];
//$combo=$_GET['combo'];


$sql="SELECT * FROM user_type";


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


