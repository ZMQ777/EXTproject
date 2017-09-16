
//var ts = Ext.create('Admin.store.treeStore',{});
Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',
	id:'NavigationTree',
    model:'Admin.view.tree.treeModel',
	proxy: {
        type: 'ajax',
         reader: 'json',
        url: './resources/treeStore.json'
   }
});






//var store = Ext.create("Ext.data.TreeStore",{  
////      model: "DeptModel",  
//      // 根节点的参数是parentId  
//      //nodeParam : 'deptParentId', 
//		storeId: 'NavigationTree',
//      // 根节点的参数值是0  
//      //defaultRootId : 0, 
//      fields: [{
//      name: 'text'
//	    }],
//      proxy:{   
//          type:'ajax',    
//          url:'./resources/treeStore.json',  
//          reader : {  
//              type : 'json',  
//              rootProperty : 'children'//数据    
//          }  
//      }  
//  }); 
//  
