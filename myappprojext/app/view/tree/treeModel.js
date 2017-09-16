
Ext.define('Admin.view.tree.treeModel', {
	extend: 'Ext.data.Model',
	
	fields: [
		{
	        name: 'text',
	        convert: undefined
	   },
	   {
	   		name: 'iconCls',
	        convert: undefined
	   },
	   {
	   		name: 'viewType',
	        convert: undefined
	   },
	   {
	   		name: 'leaf',
	        convert: undefined
	   }
	]
	
})