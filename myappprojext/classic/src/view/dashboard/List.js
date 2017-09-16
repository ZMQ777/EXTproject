
var st = Ext.create('Admin.view.dashboard.Personnel',{});
var typeStore = Ext.create('Admin.view.user_type.typeStore',{});
Ext.define('Admin.view.dashboard.List', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'mainlist',
    requires: [
        'Admin.view.dashboard.Personnel'
    ],

//  title: 'Personnel',
//	width: 300,
    height:document.documentElement.clientHeight-130,
//  padding:'50 0 0 0',
//  store: {
//      type: 'personnel'
//  },
	store:st,
//	items: {
//		xtype;''
//	},
	autoLoad: true,
    columns: [
    	{text: 'ID',  dataIndex: 'u_id' , flex: 1,align:'center'},
        { text: '姓名',  dataIndex: 'u_name' , flex: 1,align:'center'},
     	{ 
     		text: '部门',
     		dataIndex: 'u_type',
     		flex: 1,align:'center',
     		renderer:function(v,m,record,ri,ci){
     			var type=typeStore.data.items;

     			for(var i=0;i<type.length;i++){
     				if(type[i].data.t_id==v)
     				return type[i].data.t_name;
     			}
     			
     		}
     	},
        { text: '邮箱', dataIndex: 'u_email', flex: 1,align:'center'},
        { text: '电话号码', dataIndex: 'u_photo', flex: 1,align:'center'
//      ,renderer:function(v,m,record,ri,ci){
//      	return	"<a href='#'>"+v+"</a>"
//      }
        },
        {  
            xtype: 'actioncolumn',  
            text: '操作',  
            flex: 1,
            tdCls: 'action', 
            align:'center',
            padding: '10 25 10 25',
            items: [ 
            {
                icon: './resources/icons/fam/delete.png',  
                tooltip: '删除', 
                margin: '0 10',
                handler: function (grid, rowIndex, colIndex, node, e, record, rowEl) {  
//					console.log(record);
//					console.log(record.data.u_id);
					var u_id=record.data.u_id
					Ext.Msg.confirm("消息","确定删除 ID 为"+u_id+" 的数据吗？",function(btn){ 
						if(btn=="yes"){
							Ext.Ajax.request({
							    url: './resources/delete.php',
							    params:{
						        	u_id:u_id
						        },
							    success: function(resp,opts) { 
			//				    	var respText = Ext.util.JSON.decode(resp.responseText);
									if(resp.responseText=="success"){
										Ext.Msg.alert("提示",'删除成功'); 
										st.reload();
									}else{
										Ext.Msg.alert("提示",'删除失败'); 
									}
							    },
							    failure: function() { 
							    	Ext.Msg.alert('Fail'); 
							    }
						    });
						}
					})
                }  
            },{
            	icon: './resources/icons/fam/page_white_edit.png',  
                tooltip: '修改',  
//              id:'updateUser',
                handler: function(grid, rowIndex, colIndex, node, e, record, rowEl){
//              	console.log(record);
                	var win = Ext.widget("useredit");
			        win.down("form").loadRecord(record);
			        win.show();
                }
            },{
            	icon: './resources/icons/fam/add.png',  
                tooltip: '新增',
                id:'addUser',
                handler: 'addItems'
            }
            ]
		}],
		bbar: [
            { 
            	xtype: "pagingtoolbar", 
            	store:st,
//            	store: {type: 'personnel'},
            	displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
                emptyMsg: "没有数据",
                beforePageText: "当前页",
                afterPageText: "共{0}页",
                displayInfo: true

            }
        ],

    listeners: {

    }
});


