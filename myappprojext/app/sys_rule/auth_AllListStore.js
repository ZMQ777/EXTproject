Ext.define('Admin.view.sys_rule.auth_AllListStore', {
    extend: 'Ext.data.Store',
    alias: 'store.auth_AllListStore',
    storeId:'auth_AllListStore',
    proxy: {
        type: 'ajax',
        url: './resources/authStore.php?rule_auth=0',
        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
    },
    autoLoad: true,
	listeners:{
		load:function(record){

		}
	},
	groupField: 'p_id' 
});