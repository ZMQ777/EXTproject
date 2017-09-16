<?php
	
	$rule_auth=$_REQUEST['rule_auth'];
	
	
	if($rule_auth==0&&$rule_auth!='null'){
		$sql="SELECT * FROM sys_auth where p_id!=0";
	}else if($rule_auth==-1){
		$sql="SELECT auth_id,auth_name FROM sys_auth where p_id=0";
	}else{
		$sql="SELECT * FROM sys_auth where auth_id in ($rule_auth)";
	}

	
	$dbh = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'zmq', '123');
	$sta = $dbh->query($sql);
	// 以关联数组取出所有结果集
	$data = $sta->fetchAll(PDO::FETCH_ASSOC);
	
	if($rule_auth==-1){
		$json1=$data;
	}else{
		$json1=array('items' => $data);
	}
//	
//	var_dump();
//	 格式化成 json
	echo json_encode($json1);
?>