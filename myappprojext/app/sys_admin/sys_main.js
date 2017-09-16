Ext.define('Admin.view.sys_admin.sys_main', {
    extend: 'Ext.Container',  
    xtype: 'widget.sys_mainpanal', 
    layout: 'responsivecolumn',
    items:
    	[
    		{
    			xtype:'label',
	    		html:"<p>当前位置: <span style='color:#999'>权限管理  => 角色管理</span></p>",
	    		userCls: 'big-100 small-100',
	    		style:{'margin-bottom':'-10px'}
	        },
	    	{
	        	xtype: 'adminList',
	        	userCls: 'big-50 small-50'
	    	},
	    	{
	    		xtype:'sys_authList',
	    		userCls: 'big-50 small-40'
	    	},
	    	{
	    		xtype:'label',
	    		html:' ',
	    		style:{'text-align':'center','margin':'0px 20px 10px 0'},
	    		userCls: 'big-50 small-20',
	    		id:'userName'
	    		
	    	},
	    	{
	    		xtype: "form",
//		        margin: 5,
				userCls: 'big-50 small-20',
				style:{'text-align':'center','margin':'0px 20px 30px 0'},
		        border: false,
		        items: [
		        	{ 
		            	xtype: "textfield", 
		            	name: "rule_id", 
		            	fieldLabel: "角色ID" ,
		            	readOnly:true,
		            	allowBlank: false,
		            	width:'90%',
		            	id:'rule_update_id'
		           },
		            { 
		            	xtype: "textfield", 
		            	name: "rule_name", 
		            	fieldLabel: "角色名称" ,
		            	allowBlank : false,
		            	width:'90%',
		            	id:'rule_update_name'
		            },
		            {
		            	xtype: "textfield", 
		            	name: "rule_inro", 
		            	fieldLabel: "角色信息" ,
		            	allowBlank : false,
		            	width:'90%',
		            	id:'rule_update_inro'
		            },
		            {
		        		xtype:'button',
		        		text: '保存',
			            id:'authUpdate',
			            width:150,
			            formBind: true,
		//	            style:{'margin-left':'30%'},
			            handler: function(){
			            	var ruleArr=Ext.getCmp('auth').selModel.selected.items;
			            	var authArr=[];
							for (var i=0;i<ruleArr.length;i++) {
								authArr.push(ruleArr[i].data.auth_id);
							}							
						 	for(var j=authArr.length-1; j>0; j--){
					      		for(var i=0; i<j;i++){	
							        if(authArr[i]>authArr[i+1]){
							          var temp = authArr[i];
							          authArr.splice(i,1,authArr[i+1]);
							          authArr.splice(i+1,1,temp);
					        		}
						      	}
						   	}
							var rule_auth = authArr.join(',');
							var rule_name = Ext.getCmp('rule_update_name').getValue();
							var rule_id = Ext.getCmp('rule_update_id').getValue();
							var rule_inro = Ext.getCmp('rule_update_inro').getValue();
							
							Ext.Ajax.request({
							    url: './resources/ruleUpdate.php',
							    params:{
						        	rule_id:rule_id,
						        	rule_name:rule_name,
						        	rule_inro:rule_inro,
						        	rule_auth:rule_auth
						        },
							    success: function(resp,opts) { 
							    	var result = resp.responseText;
							    	if(result){
							    		Ext.Msg.alert('提示','修改成功!!!');
							    		stt.proxy.url="./resources/authStore.php?rule_auth="+rule_auth;
							    		stt.removeAll();
										stt.reload();
							    		authAllStore.reload();
							    		adStore.reload();
							    	}else{
							    		Ext.Msg.alert('提示','修改失败!!!'); 
							    	}
							    },
							    failure: function() { 
							    	Ext.Msg.alert('提示','修改失败!!!'); 
							    }
							
			            	})
							
			            }
		        	}
		        ]
	    	}
        	
        ]
});  



