
var keshiStore1 = new Ext.data.JsonStore({
				fields:['value','name'],
			    method: 'GET' ,
		    	proxy:new Ext.data.HttpProxy(
				  	{
				  		url : "./resources/keshi.php?p_id=0"
					}
				)
               });
var keshiStore2 = new Ext.data.JsonStore({
				fields:['value','name'],
			    method: 'GET' ,
		    	proxy:new Ext.data.HttpProxy(
				  	{
				  		url : "./resources/keshi.php?p_id=0"
					}
				)
               });
var keshiStore3 = new Ext.data.JsonStore({
				fields:['value','name'],
			    method: 'GET' ,
		    	proxy:new Ext.data.HttpProxy(
				  	{
				  		url : "./resources/keshi.php?p_id=0"
					}
				)
               });
Ext.define('Admin.view.keshi.keshipanal', {
    extend: 'Ext.Container',  
    xtype: 'widget.keshipanal', 
    items: [
        	{
	            xtype:'combo',
	          	name:'combo1',
				store:keshiStore1,
	          	width:120,
	          	displayField:'name',
	          	valueField:'value',
	          	mode:'local',
//	          	value:'default',
	          	emptyText:'省',
	          	editable:false,
	          	forceSelection:true,
	          	readOnly:false,
	          	margin: '10 0 0 350',
	          	style:{'text-align':'center'},
	          	id:'combo1',
	          	listeners: {
				    select: function(){ 
				    	keshiStore2.removeAll();
				    	keshiStore3.removeAll();
				    	Ext.getCmp('combo2').setValue('');
				    	Ext.getCmp('combo3').setValue('');
				    	Ext.getCmp('combo2').enable(); 
				    }
				}
        	},
        	{
				xtype:'combo',
	          	name:'combo2',
				store:keshiStore2,
	          	width:120,
	          	displayField:'name',
	          	valueField:'value',
	          	mode:'local',
//	          	value:'default',
	          	emptyText:'市',
	          	editable:false,
	          	disabled:true,
	          	forceSelection:true,
	          	readOnly:false,
	          	margin: '10 0 0 350',
	          	style:{'text-align':'center'},
	          	id:'combo2',
	          	listeners: {
				    select: function(){ 
				    	keshiStore3.removeAll();
				    	Ext.getCmp('combo3').setValue('');
				    	Ext.getCmp('combo3').enable(); 
				    },
				    expand: function(combo, record, index) {
				    	var p_id = Ext.getCmp('combo1').selection.data.id;
				    	keshiStore2.proxy.url="./resources/keshi.php?p_id="+p_id;
						keshiStore2.reload();
					}
				    
				}
        	},
  	      	{
				xtype:'combo',
	          	name:'combo3',
				store:keshiStore3,
	          	width:120,
	          	displayField:'name',
	          	valueField:'value',
	          	mode:'local',
	          	disabled:true,
//	          	value:'default',
	          	emptyText:'镇',
	          	editable:false,
	          	forceSelection:true,
	          	readOnly:false,
	          	margin: '10 0 0 350',
	          	style:{'text-align':'center'},
	          	id:'combo3',
          		listeners: {
				    expand: function(combo, record, index) {
				    	var select = Ext.getCmp('combo2').selection;
				    	
//				    	if(select)
				    	
				    	var p_id = Ext.getCmp('combo2').selection.data.id;
				    	
//				    	if(p_id)
				    	
				    	
				    	keshiStore3.proxy.url="./resources/keshi.php?p_id="+p_id;
						keshiStore3.reload();
					}
				    
				}
        	}
        	
        ]
});  