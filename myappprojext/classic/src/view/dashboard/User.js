Ext.define('Admin.view.dashboard.User', {
    extend: 'Ext.data.Model',
    alias: 'listmodel',
    phantom :true,
    fields: [
        { name: 'u_id', type: 'int' },
        { name: 'u_name', type: 'auto' },
        { name: 'u_email', type: 'auto' },
        { name: 'u_photo', type: 'auto' },
        {name:'u_type',type:'auto'}

    ]
});
