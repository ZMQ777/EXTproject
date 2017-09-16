var tttt = Ext.create('Admin.store.NavigationTree',{});
Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    stores: tttt,

    defaultToken : 'mainlist',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    mainView: 'Admin.view.main.Main',
//	init: function() {
////	     Ext.getBody().mask('Loading...');
//	},
    launch: function () {
        // TODO - Launch the application
        
		var loginUser = localStorage.getItem("loginUser");
		loginUser =JSON.parse(loginUser);
		
		if(loginUser!=null){
	    	if(loginUser.u_type==1){
				tttt.proxy.url='./resources/treeStore.json';		//多
			}else{
				tttt.proxy.url='./resources/treeStore1.json';		//少
			}
			tttt.removeAll();
			tttt.reload();
		}
		this.redirectTo('mainlist', true);
    },
    onClickButton: function () {
        //删除保存在localStorage中的登录状态
        localStorage.removeItem('TutorialLoggedIn');
        //删除首页
        this.getView().destroy();
        //创建Login窗口
        Ext.create({
            xtype: 'login'
        });
//		var loggedIn;
//      //从localStorage读取用户登录状态
//      loggedIn = localStorage.getItem("TutorialLoggedIn");
//      //如果用户已登录，则显示首页，否则显示Login窗口
//      alert(loggedIn);
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
   }
   
});
