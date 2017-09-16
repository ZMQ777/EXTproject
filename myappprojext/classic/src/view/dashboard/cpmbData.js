//Ext.create('Admin.view.dashboard.comboOptions',{
//	extend: 'Ext.data.JsonStore',
//	alias: 'store.comboOptions',
//	url:'./resources/myurl.json',
//	fields: ['id','name'],
//	autoLoad: true
//}),

Ext.define('Admin.view.dashboard.comboOptions', {
    extend: 'Ext.data.JsonStore',
    alias: 'comboOptions',
	url:'./resources/myurl.json',
    fields: ['id','name'],
	autoLoad: true
});
