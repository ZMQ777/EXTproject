var auth_Store_type = Ext.create('Admin.view.sys_auth.auth_Store_type',{});
Ext.define('Admin.view.sys_auth.auth_Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.auth_Main',
	id:'auth_Main',
    requires: [
        'Admin.view.sys_rule.auth_AllListStore'
    ],
	height:document.documentElement.clientHeight-130,	
	store:{type:'auth_AllListStore'},
	features: [{     
		id: 'group',     
		ftype: 'grouping',     
		groupHeaderTpl : '{columnName}: {name} ({rows.length} Item{[values. rows.length >= 0 ? "s" : ""]})',    
		hideGroupedHeader: true,    
		enableGroupingMenu: false,
		startCollapsed:true
	}],
    columns: [
        { 
        	text: '权限ID',
        	dataIndex: 'auth_id',
        	flex: 1,
        	align:'center'
        },
        { text: '权限名称', dataIndex: 'auth_name',flex: 1,align:'center'},
        { text: '权限信息', dataIndex: 'auth_inro',flex: 1,align:'center'},
        { 
        	text: '权限类型', 
        	dataIndex: 'p_id',
        	flex: 1,
        	align:'center',
//      	hidden: true,
        	renderer:function(v,m,record,ri,ci){
        		
     			var authType=auth_Store_type.data.items;
     			for(var i=0;i<authType.length;i++){
     				if(authType[i].data.auth_id==v)
     				return authType[i].data.auth_name;
     			}
     			
     		}
        },
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
	                	var auth_id=record.data.auth_id
	                	Ext.Msg.confirm("确认","确定删除ID为 "+auth_id+" 的权限吗？",function(btn){
		                	if(btn=='yes'){
		                		Ext.Ajax.request({
								    url: './resources/authDelete.php',
								    params:{
							        	auth_id:auth_id
							        },
								    success: function(resp,opts) { 
								    	var result = resp.responseText;
								    	if(result){
								    		Ext.Msg.alert('提示','删除权限成功!!!');
								    		Ext.getCmp("auth_Main").store.reload();
		    								auth_Store_type.reload();
		    								auth_AllListStore.reload();
								    	}else{
								    		Ext.Msg.alert('提示','删除权限失败!!!'); 
								    	}
								    },
								    failure: function() { 
								    	Ext.Msg.alert('提示','删除权限失败!!!'); 
								    }
								
				            	})
		                	}
	                	});
	                	
	                	
	                	
	                }
	            },
	            {
	            	icon: './resources/icons/fam/page_white_edit.png',  
	                tooltip: '修改',
	                margin: '0 10',
	                handler: function(grid, rowIndex, colIndex, node, e, record, rowEl){
	                	var win = Ext.widget("authEdit");
				        win.down("form").loadRecord(record);
				        win.show();
	                }
            	},
            	{
	            	icon: './resources/icons/fam/add.png',  
	                tooltip: '新增',
	                id:'addauth',
	                handler: 'addauth'
	            }
            ]
        }
    ],
//  selType: 'checkboxmodel',
    listeners:{
    	 	select: function(model,record,index) {//record被选中时产生的事件
//				console.log(Ext.getCmp('auth'))
//				console.log(model.selected);
			}
	 	}  
});  