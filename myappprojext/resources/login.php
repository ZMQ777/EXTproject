<?php

$u_name=$_REQUEST['u_name'];
$u_password=$_REQUEST['u_password'];


$sql="SELECT * FROM users  where u_name ='$u_name' and u_password='$u_password'";

$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
$sta = $dbh->query($sql);
// 以关联数组取出所有结果集
$data = $sta->fetchAll(PDO::FETCH_ASSOC);



//$json1=array('success' => true,'data' => $data);

//var_dump();
// 格式化成 json
//echo json_encode($data);

if(empty($data)){
	$json1=array('success' => false);
}else{
	$json1=array('success' => true,'data' => $data);
}
$dbh=null;
echo json_encode($json1);

//echo $sql;
?>