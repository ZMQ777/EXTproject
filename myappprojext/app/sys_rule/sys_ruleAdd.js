
Ext.define('Admin.view.sys_rule.sys_ruleAdd', {
    extend: 'Ext.Container',  
    xtype: 'widget.sys_ruleAdd',
    id:'sys_ruleAdd',
    layout: 'responsivecolumn',
    title:'新增角色',
    items:
    	[
	    	{
	        	xtype: 'form',
	        	id:'f',
	        	userCls: 'big-100 small-100',
	        	height:document.documentElement.clientHeight-100,
	        	items:
	        	[
	        		{
	        			xtype:'label',
			    		html:"<p>当前位置: <span style='color:#999'>权限管理  => 新增角色</span></p>",
			    		style:{'background-color':'red'},
			    		userCls: 'big-50 small-40'
	        		},
	        		{
	        			xtype:'auth_AllList',
	    				userCls: 'big-50 small-40',
	    				height:400,
	    				allowBlank: false 
	        		},
	        		{
	        			xtype:'textfield',
					 	layout : "form",
					 	labelWidth : 65,
					 	id:'rule_name',
					 	style:{'margin-left':'30%','margin-top':'10px'},
	        			fieldLabel :'角色名称',
	        			allowBlank: false,
        			 	enforceMaxLength:true,   //关键是这个
 						maxLength:18
	        			
	        		},
	        		{
	        			xtype:'textarea',
	        			layout : "form",
	        			labelWidth : 65,
	        			id:'rule_inro',
	        			style:{'margin-left':'30%'},
	        			fieldLabel :'角色详细',
	        			allowBlank: false 
	        		},
	        		{
	        			xtype:'button',
		        		text: '保存',
			            id:'authSave',
			            width:100,
			            formBind: true,
			            style:{'margin-left':'40%'},
			            handler: function(){
			            	var ruleArr = Ext.getCmp("auth_AllList").selModel.selected.items;
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
							var rule_name=Ext.getCmp("rule_name").value;
							var rule_inro=Ext.getCmp("rule_inro").value;
							
							Ext.Ajax.request({
							    url: './resources/ruleAdd.php',
							    params:{
						        	rule_name:rule_name,
						        	rule_inro:rule_inro,
						        	rule_auth:rule_auth
						        },
							    success: function(resp,opts) { 
							    	var result = resp.responseText;
							    	if(result){
							    		Ext.Msg.alert('提示','新增角色成功!!!');
							    		auth_AllListStore.reload();
							    		Ext.getCmp("f").form.reset();
							    		adStore.reload();
							    	}else{
							    		Ext.Msg.alert('提示','新增角色失败!!!'); 
							    	}
							    },
							    failure: function() { 
							    	Ext.Msg.alert('提示','新增角色失败!!!'); 
							    }
							
			            	})
	        			}
		            }
	        		
	        	]
	    	}
//	    	,
//	    	{
//	    		xtype:'auth_AllList',
//	    		userCls: 'big-50 small-40'
//	    	}
        ]
    
});  