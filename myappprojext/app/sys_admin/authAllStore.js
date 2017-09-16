Ext.define('Admin.view.sys_admin.authAllStore', {
    extend: 'Ext.data.Store',
    alias: 'store.authAllStore',
    storeId:'authAllStore',
    proxy: {
        type: 'ajax',
        url: './resources/authStore.php?rule_auth=0',
        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
    },
//  autoLoad: true,
	listeners:{
		load:function(record){
			var authh = Ext.getCmp("auth");		//sys_authList
	//		var ck = Ext.getCmp("ck");
	
			var sttdata=stt.data.items;			//sys_authList
			
			var dataarr=[];
			
			
			for (var i=0;i<sttdata.length;i++) {
				for(var j=0;j<record.data.items.length;j++) {
					if(record.data.items[j].data.auth_id==sttdata[i].data.auth_id){
						dataarr.push(record.data.items[j]);
					}
				}	
			}
			authh.getSelectionModel().select(dataarr);
		}
	}
});