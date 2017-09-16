Ext.define('Admin.view.sys_admin.authStore', {
    extend: 'Ext.data.Store',
    alias: 'store.authStore',
    storeId:'authStore',
    proxy: {
        type: 'ajax',
        url: './resources/authStore.php',
        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
    },
    listeners:{
		load:function(record){
			
		}
	}

});

