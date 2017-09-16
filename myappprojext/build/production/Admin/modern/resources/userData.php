<?php

$page=$_GET['page'];
$start=$_GET['start'];
$limit=$_GET['limit'];
$value=$_GET['value'];
$combo=$_GET['combo'];

$where="";

if($combo!='default'&&$value!=""){
	$where="where $combo like '%$value%'";
}
//

$sql="SELECT count(*) FROM user_Info  $where";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
$data = $sta->fetchAll(PDO::FETCH_ASSOC);

$total=$data[0]["count(*)"];

//var_dump($sql);

$sql="SELECT * FROM user_Info  $where limit $start,$limit";


$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
$data = $sta->fetchAll(PDO::FETCH_ASSOC);

$json1=array('success' => true,'success' => true,'total' => $total,'items' => $data);

//var_dump();
// 格式化成 json
echo json_encode($json1);



?>



