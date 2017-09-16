Ext.define("MyApp.view.user.Edit", {
    extend: "Ext.window.Window",
    alias: "widget.useredit",
    title: "编辑用户",
    width: 300,
    height: 300,
    layout: "fit",
	modal:true,
    items: {
        xtype: "form",
        margin: 5,
        border: false,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 60
        },
        items: [
        	{ 
            	xtype: "textfield", 
            	name: "u_id", 
            	fieldLabel: "ID" ,
            	readOnly:true,
            	allowBlank: false 
           },
            { 
            	xtype: "textfield", 
            	name: "u_name", 
            	fieldLabel: "姓名" ,
            	allowBlank : false
            },
            {
            	xtype: "textfield", 
            	name: "u_type", 
            	fieldLabel: "部门编号" ,
            	allowBlank : false
            },
            { 
            	xtype: "textfield", 
            	name: "u_email", 
            	fieldLabel: "邮箱" ,
            	allowBlank : false
            },
            { 
            	xtype: "textfield", 
            	name: "u_photo", 
            	fieldLabel: "电话号码" ,
            	allowBlank : false
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