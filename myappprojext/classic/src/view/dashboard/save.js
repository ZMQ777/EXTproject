Ext.define("MyApp.view.user.save", {
    extend: "Ext.window.Window",
    alias: "widget.usersave",
    requires: ['Ext.form.Panel'],
    title: "新增用户",
    width: 300,
    height: 300,
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
            	name: "name", 
            	fieldLabel: "姓名" ,
            	allowBlank: false 
            },
            { 
            	xtype: "textfield", 
            	name: "email", 
            	fieldLabel: "邮箱" ,
            	allowBlank: false
            },
            { 
            	xtype: "textfield", 
            	name: "phone", 
            	fieldLabel: "电话号码" ,
            	allowBlank: false
            }
        ]
    },
    buttons: [
        { 
        	text: "保存", 
        	formBind: true,
//      	action: "save" ,
        	listeners: {
                //当按钮被点击时
                click: 'save'
            }
        }
    ]
});