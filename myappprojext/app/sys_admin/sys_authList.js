var stt = Ext.create('Admin.view.sys_admin.authStore',{});
var authAllStore = Ext.create('Admin.view.sys_admin.authAllStore',{});
Ext.define('Admin.view.sys_admin.sys_authList', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.sys_authList',
	id:'auth',
	
    requires: [
        'Admin.view.sys_admin.authStore'
    ],
	height:document.documentElement.clientHeight-130,	
	store:authAllStore,
	height:400,
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
			},
			beforeload:function(){
				alert('beforeload');
			},
			load:function(){
				alert('load');
			}
//			beforeselect:function(){
//				alert('beforeselect');
//			}
	 	},
    selModel:{
    	selType : 'checkboxmodel',
    	mode:"SIMPLE",
    	checkOnly:true,
    	id:'ck'
    }
    
});  












