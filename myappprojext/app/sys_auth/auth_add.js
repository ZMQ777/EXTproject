Ext.define("Admin.view.sys_auth.auth_add", {
    extend: "Ext.window.Window",
    alias: "widget.auth_add",
    requires: ['Ext.form.Panel'],
    title: "新增权限",
    width: 300,
    height: 250,
    layout: "fit",
	modal:true,
	autoShow: true,
    items: {
        xtype: "form",
        margin: 5,
//      border: false,
        reference: 'form',
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 60
        },
        items: [
            { 
            	xtype: "textfield", 
            	name: "auth_name", 
            	fieldLabel: "权限名称" ,
            	allowBlank: false 
            },
            { 
            	xtype: "textfield", 
            	name: "auth_inro", 
            	fieldLabel: "权限信息" ,
            	allowBlank: false
            },
            { 
            	xtype: "combo", 
            	name: "p_id", 
            	store:new Ext.data.JsonStore({
				fields:['auth_id','auth_name'],
//			    autoLoad : true,
			    method: 'GET' ,
		    	proxy:new Ext.data.HttpProxy(
				  	{
				  		url : "./resources/authStore.php?rule_auth=-1"
					}
				)
                }),
				width:235,
	          	displayField:'auth_name',
	          	valueField:'auth_id',
	          	mode:'local',
//	          	value:'0',
				fieldLabel: "权限类别" ,
//	          	emptyText:'0',
	          	editable:false,
	          	forceSelection:true,
	          	readOnly:false,
	          	margin: '10 0 0 0',
	          	style:{'text-align':'center'},
	          	id:'auth_p',
	          	listeners:{
			      	afterRender : function(combo) {
//			         	var firstValue = store.reader.jsonData[0].text;

						Ext.getCmp("auth_p").setValue(0);
						Ext.getCmp("auth_p").setRawValue(0);
			      	}
			   	}
            },
	        { 
	        	xtype:'button',
	        	text: "保存", 
	        	formBind: true,
	        	listeners: {
	                //当按钮被点击时
	                click: 'saveauth'
	            }
	        }

        ]
    }
   
});