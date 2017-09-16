Ext.define('Admin.view.user_type.typeStore', {
    extend: 'Ext.data.Store',
	model: "Admin.view.user_type.user_type",
    alias: 'store.typeStore',

	proxy: {
			type: "ajax",
	        url: "./resources/user_typeSelect.php",
	        reader: {
	            type: 'json',
	            rootProperty: 'items',
	            idProperty: 'ID'
	        }
	},
	
	autoLoad: true  
	
});