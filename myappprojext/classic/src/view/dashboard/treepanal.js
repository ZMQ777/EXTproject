
Ext.define('Admin.view.dashboard.treepanal', {
    extend: 'Ext.Container',  
    xtype: 'widget.treepanels', 
    items: [
        	{
	            xtype:'combo',
//	          	fieldLabel:'选择',
	          	name:'combo',
				store:new Ext.data.JsonStore({
				fields:['value','text'],
//			    autoLoad : true,
			    method: 'GET' ,
		    	proxy:new Ext.data.HttpProxy(
				  	{
				  		url : "./resources/comboStore.json"
					}
				)
                }),
	          	width:120,
	          	displayField:'text',
	          	valueField:'value',
	          	mode:'local',
//	          	value:'default',
	          	emptyText:'请选择',
	          	editable:false,
	          	forceSelection:true,
	          	readOnly:false,
	          	margin: '10 0 0 350',
	          	style:{'text-align':'center'},
	          	id:'combo'
        	},
        	{
	            xtype: 'textfield',
	            text: '文本框',
//	            fieldLabel: '标题',
	            margin: '-30 0 0 500',
	            padding:'0 0 0 0',
	            id: 'textvalue',
//	            handler: ''
				listeners : {
				       change : 'onValueChange'
				}
        	},
  	      	{
	            xtype: 'button',
	            text: '查询',
	            margin: '-30 0 20 700',
	            handler: 'onItemSelect',
	            id:'onSelect',
	            disabled : true
        	},
        	{
            	xtype: 'mainlist'
        	}
        	
        ]
});  