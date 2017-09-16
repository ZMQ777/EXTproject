Ext.define("Admin.view.sys_auth.authEdit", {
    extend: "Ext.window.Window",
    alias: "widget.authEdit",
    title: "编辑用户",
    width: 350,
    height: 300,
    layout: "fit",
	modal:true,
    items: {
        xtype: "form",
        margin: 5,
        border: false,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 100
        },
        items: [
        	{ 
            	xtype: "textfield", 
            	name: "auth_id", 
            	fieldLabel: "权限ID" ,
            	readOnly:true,
            	allowBlank: false 
           },
            { 
            	xtype: "textfield", 
            	name: "auth_name", 
            	fieldLabel: "权限名称" ,
            	allowBlank : false
            },
            {
            	xtype: "textfield", 
            	name: "auth_inro", 
            	fieldLabel: "权限信息" ,
            	allowBlank : false
            },
            { 
            	xtype: "combo", 
            	name: "p_id", 
            	fieldLabel: "权限类别ID" ,
            	allowBlank : false,
            	store:new Ext.data.JsonStore({
				fields:['auth_id','auth_name'],
			    autoLoad : true,
			    method: 'GET' ,
		    	proxy:new Ext.data.HttpProxy(
				  	{
				  		url : "./resources/authStore.php?rule_auth=-1"
					}
				)
                }),
                displayField:'auth_name',
	          	valueField:'auth_id',
	          	mode:'local'
            }
        ]
    },
    buttons: [
        { 
        	text: "保存", 
        	formBind: true,
        	action: "save" 
        }
    ]
});