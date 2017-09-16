<?php

$p_id=$_GET['p_id'];



$sql="SELECT * FROM area  where p_id =$p_id";


$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
$data = $sta->fetchAll(PDO::FETCH_ASSOC);

//$json1=array('success' => true,'success' => true,'total' => $total,'items' => $data);
$dbh=null;
//var_dump();
// 格式化成 json
echo json_encode($data);


//var_dump($sql);

?>



