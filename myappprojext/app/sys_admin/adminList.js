var adStore = Ext.create('Admin.view.sys_admin.adminStore',{});
Ext.define('Admin.view.sys_admin.adminList', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'widget.adminList',
//  title: 'adminList',
    requires: [
        'Admin.view.sys_admin.adminStore'
    ],
//  store: {
//      type: 'adminStore'
//  },
	height:document.documentElement.clientHeight-130,	
	store:adStore,
    columns: [
        { text: '角色ID',dataIndex: 'rule_id',flex: 1,align:'center'},
        { text: '角色名称', dataIndex: 'rule_name',flex: 1,align:'center'},
        { text: '角色简介', dataIndex: 'rule_inro',flex: 1,align:'center'},
        { text: '权限列表', dataIndex: 'rule_auth',flex: 1,align:'center',hidden: true},
        {
        	xtype: 'actioncolumn',  
            text: '操作',  
            flex: 1,
            tdCls: 'action', 
            align:'center',
            padding: '10 25 10 25',
            items: 
            [
	            {
	                icon: './resources/icons/fam/delete.png',  
	                tooltip: '删除', 
	                margin: '0 10',
	                handler: function (grid, rowIndex, colIndex, node, e, record, rowEl) {  
	                	var rule_id=record.data.rule_id                	
	                	Ext.Msg.confirm("确认","确定删除ID为 "+rule_id+" 的角色吗？",function(btn){
		                	if(btn=='yes'){
		                		Ext.Ajax.request({
								    url: './resources/ruleDelete.php',
								    params:{
							        	rule_id:rule_id
							        },
								    success: function(resp,opts) { 
								    	var result = resp.responseText;
								    	if(result){
								    		Ext.Msg.alert('提示','删除角色成功!!!');
								    		adStore.reload();
								    		Ext.getCmp('userName').setText('当前角色为    null');
								    		Ext.getCmp('rule_id_label').setText(-1);
											var authh = Ext.getCmp("auth");	
											var dataarr = authh.getSelectionModel().selected.items;
											var arr=[];
						                	for(var i=0;i<dataarr.length;i++){
												arr.push(dataarr[i]);
											}
											authh.getSelectionModel().deselect(arr);
											
								    	}else{
								    		Ext.Msg.alert('提示','删除角色失败!!!'); 
								    	}
								    },
								    failure: function() { 
								    	Ext.Msg.alert('提示','删除角色失败!!!'); 
								    }
								
				            	})
		                	}
	                	});
	                }
	            }
            ]
        }
    ],
    listeners: {
		itemdblclick:function(grid, record){
			authAllStore.removeAll();
			authAllStore.reload();
			
			
			Ext.getCmp('rule_update_name').setValue(record.data.rule_name);
			Ext.getCmp('rule_update_id').setValue(record.data.rule_id);
			Ext.getCmp('rule_update_inro').setValue(record.data.rule_inro);
			
		},
		beforeselect:function(grid, record){
			if(record.data.rule_auth==""){
				stt.proxy.url="./resources/authStore.php?rule_auth=null";
			}else{
				stt.proxy.url="./resources/authStore.php?rule_auth="+record.data.rule_auth;
			}
			stt.removeAll();
			stt.reload();
		}

    }
});  

//cellclick