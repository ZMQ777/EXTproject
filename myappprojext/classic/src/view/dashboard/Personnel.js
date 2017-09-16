Ext.define('Admin.view.dashboard.Personnel', {
    extend: 'Ext.data.Store',
	model: "Admin.view.dashboard.User",
    alias: 'store.personnel',

//  fields: [
//      'name', 'email', 'phone'
//  ],
	
	pageSize: 10,
	proxy: {
			type: "ajax",
	        url: "./resources/userData.php?combo=default&value=",
	        reader: {
	            type: 'json',
	            rootProperty: 'items',
	            totalProperty:'total',
	            idProperty: 'ID'
	        }
	  },
    listeners:{  
                beforeload:function(thiz,options){  
                	var value = Ext.getCmp('textvalue').value;		//获取下拉框的value值
    				var combo = Ext.getCmp('combo').value;		//获取文本框的value值
    				st.proxy.url='./resources/userData.php?value='+value+'&combo='+combo; 
                }
            }
// autoLoad: true
});




//var store = Ext.create("Ext.data.Store", {
//  model: "Admin.view.dashboard.User",
//  alias: 'store',
//  autoLoad: true,
//  pageSize: 10,
//  proxy: {
//      type: "ajax",
//      url: "./resources/data.php",
//      reader: {
//          type: 'json',
//          rootProperty: 'items',
//          totalProperty:'total'
//      }
//  }
//});

