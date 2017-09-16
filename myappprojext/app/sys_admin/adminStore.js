Ext.define('Admin.view.sys_admin.adminStore', {
    extend: 'Ext.data.Store',
    alias: 'store.adminStore',
    storeId:'adminStore',
    proxy: {
        type: 'ajax',
        url: './resources/ruleStore.php',
        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
    },
    autoLoad:true
});