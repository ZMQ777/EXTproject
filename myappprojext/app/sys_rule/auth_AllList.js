var auth_AllListStore = Ext.create('Admin.view.sys_rule.auth_AllListStore',{});
Ext.define('Admin.view.sys_admin.auth_AllList', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.auth_AllList',
	id:'auth_AllList',
    requires: [
        'Admin.view.sys_rule.auth_AllListStore'
    ],
	height:document.documentElement.clientHeight-130,	
//	store:{type:'auth_AllListStore'},
	store:auth_AllListStore,
    columns: [
        { 
        	text: '权限ID',
        	dataIndex: 'auth_id',
        	flex: 1,
        	align:'center'
        },
        { text: '权限名称', dataIndex: 'auth_name',flex: 1,align:'center'},
        { text: '权限信息', dataIndex: 'auth_inro',flex: 1,align:'center'},
        { text: '权限类型', dataIndex: 'p_id',flex: 1,align:'center',hidden: true}
    ],
//  selType: 'checkboxmodel',
    listeners:{
    	 	select: function(model,record,index) {//record被选中时产生的事件
//				console.log(Ext.getCmp('auth'))
//				console.log(model.selected);
			}
	 	},
    selModel:{
    	selType : 'checkboxmodel',
    	mode:"SIMPLE",
//  	checkOnly:true,
    	id:'ck'
    }
    
});  