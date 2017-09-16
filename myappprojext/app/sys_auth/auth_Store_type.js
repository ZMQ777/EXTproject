Ext.define('Admin.view.sys_auth.auth_Store_type', {
    extend: 'Ext.data.Store',
    alias: 'store.auth_Store_type',
    storeId:'auth_Store_type',
    proxy: {
        type: 'ajax',
        url : "./resources/authStore.php?rule_auth=-1",
        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
    },
    autoLoad: true
});