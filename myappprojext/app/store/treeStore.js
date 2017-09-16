Ext.define('Admin.store.treeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.treeStore',
    storeId:'treeStore',
    model:'Admin.view.tree.treeModel',
    proxy: {
        type: 'ajax',
         reader: 'json',
        url: './resources/treeStore.json'
    }
//  ,
//  root: {
//      text: 'All',
//      id: 'all',
//      expanded: true
//  }

});
