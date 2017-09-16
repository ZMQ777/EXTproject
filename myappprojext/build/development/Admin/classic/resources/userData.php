<?php

$page=$_GET['page'];
$start=$_GET['start'];
$limit=$_GET['limit'];
$value=$_GET['value'];
$combo=$_GET['combo'];

$where="";

$vu = explode(',',$value);

if($combo!='default'&&$value!=""){
	$count=1;
	foreach ($vu as $str){
		if($count==1){
			$where.="where $combo like '%$str%'";
			$count=2;
		}else{
			$where .="or $combo like '%$str%'";
		}
	}
}

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



