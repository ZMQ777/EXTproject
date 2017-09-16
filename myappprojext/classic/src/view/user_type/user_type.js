Ext.define('Admin.view.user_type.user_type', {
    extend: 'Ext.data.Model',
    alias: 'typemodel',
    phantom :true,
    fields: [
        { name: 't_id', type: 'int' },
        { name: 't_name', type: 'auto' }
    ]
});



