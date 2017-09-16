Ext.define('Admin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange'
    },	
    lastView: null,

    init: function () {
//  	console.log(1111);
        this.control({
//          'mainlist': {
//              itemdblclick: this.editUser
//          },
//			'updateUser': {
//              click: this.editUser
//          },
            'useredit button[action=save]': {
                click: this.update
            },
            'usersave button[action=save]': {
                click: this.save
            },
            'combo':{
            	change:this.onSelectChange
            },
            'authEdit button[action=save]':{
            	click:this.authUpdate
            },
            'auth_add button[action=save]':{
            	click:this.saveauth
            }
       }); 
    },
    launch: function () {
        // TODO - Launch the application
        alert("launch");
    },
    //新增user
    addItems:function(){
        var win = Ext.widget("usersave"); 
        win.show();
    },
    //新增权限界面显示
    addauth:function(){
        var win = Ext.widget("auth_add"); 
        win.show();
    },
    //单击新增权限按钮,添加权限记录
    saveauth:function(btn){
    	var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();
        var auth_name = form.items.items[0].value;	//权限名称
        var auth_inro = form.items.items[1].value; //权限信息
        var p_id = form.items.items[2].value;	//权限类别
        
        Ext.Ajax.request({
		    url: './resources/authAdd.php',
		    params:{
	        	auth_name:auth_name,
	        	auth_inro:auth_inro,
	        	p_id:p_id
	        },
		    success: function(resp,opts) { 
		    	var result = resp.responseText;
		    	if(result){
		    		Ext.Msg.alert('提示','添加成功!!!');
		    		Ext.getCmp("auth_Main").store.reload();
		    		auth_Store_type.reload();
		    		auth_AllListStore.reload();
		    	}else{
		    		Ext.Msg.alert('提示','添加失败!!!'); 
		    	}
		    },
		    failure: function() { 
		    	Ext.Msg.alert('提示','添加失败!!!'); 
		    }
		
		})
        win.close();
    },
    //combo选中改变事件
    onSelectChange:function(){
		var value = Ext.getCmp('textvalue').value;
		var combo = Ext.getCmp('combo').value;
		if(value.length==0){
			Ext.getCmp('onSelect').setDisabled(true);
		}else if(combo=="default"){
			Ext.getCmp('onSelect').setDisabled(true);
		}else{
			Ext.getCmp('onSelect').setDisabled(false);
		}
    },

    onSelectChange1:function(){
//		var combo1 = Ext.getCmp('combo1').value;
		alert('combo1');
    },
    
    
    onSelectChange2:function(){

//		var combo2 = Ext.getCmp('combo2').value;
		alert('combo2');
    },
    
    
    
    
    
    
    //文本框值改变事件
    onValueChange:function(field,newValue,oldValue){
		var value = Ext.getCmp('textvalue').value;
		var combo = Ext.getCmp('combo').value;
//		var emptyText =	Ext.getCmp('combo').emptyText;
		if(value.length==0){
			Ext.getCmp('onSelect').setDisabled(true);
		}else if(combo=="default"||combo==null){	//||emptyText=="请选择"
			Ext.getCmp('onSelect').setDisabled(true);
		}else{
			Ext.getCmp('onSelect').setDisabled(false);
		}
    },
    //修改窗体弹出
    editUser: function (grid, record) {
    	console.log(record);
        var win = Ext.widget("useredit"); 
        win.down("form").loadRecord(record);
        win.show();
    },
    //查询功能
    onItemSelect:function(){
    	var value = Ext.getCmp('textvalue').value;		//获取下拉框的value值
    	var combo = Ext.getCmp('combo').value;		//获取文本框的value值
		
		
		
 		st.proxy.url='./resources/userData.php?value='+value+'&combo='+combo;
 		
        st.reload();
		

//  	alert("正在查询"+combo+"为 "+value+"  的用户!!!")
    },
    //修改提交
    update: function (btn) {
        var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();
        console.log(form.items.items[0].value);	//form.items.items[0].value
        console.log(form.items.items[1].value);
        console.log(form.items.items[2].value);
        console.log(form.items.items[3].value);
        form.updateRecord();
        record.commit();
//      form.load();			//刷新列表数据
        win.close();
    },
    authUpdate: function (btn) {
        var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();
            
        var auth_id = form.items.items[0].value;	//权限ID
        var auth_name = form.items.items[1].value;	//权限名称
        var auth_inro = form.items.items[2].value;	//权限信息
        var p_id = form.items.items[3].value;	//权限类别
        
        
        
        Ext.Ajax.request({
		    url: './resources/authUpdate.php',
		    params:{
		    	auth_id:auth_id,
	        	auth_name:auth_name,
	        	auth_inro:auth_inro,
	        	p_id:p_id
	        },
		    success: function(resp,opts) { 
		    	var result = resp.responseText;
		    	if(result){
		    		Ext.Msg.alert('提示','修改成功!!!');
		    		Ext.getCmp("auth_Main").store.reload();
		    		auth_Store_type.reload();
		    		auth_AllListStore.reload();
		    	}else{
		    		Ext.Msg.alert('提示','修改失败!!!'); 
		    	}
		    },
		    failure: function() { 
		    	Ext.Msg.alert('提示','修改失败!!!'); 
		    }
		
		})
        form.updateRecord();
        record.commit();
        win.close();
    },
    //新增提交
    save: function (btn) {
    	
		var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();
        console.log(form.items.items[0].value);	//form.items.items[0].value
        console.log(form.items.items[1].value);
        console.log(form.items.items[2].value);
        win.close();
    },
    
    
    //路由视图切换
    setCurrentView: function(hashTag) {
        hashTag = (hashTag || '').toLowerCase();
//		console.log(this.getReferences().navigationTreeList.getStore());
        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag) ||
                   store.findNode('viewType', hashTag),
            view = (node && node.get('viewType')), //|| 'page404',
            lastView = me.lastView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;
			
			if(hashTag=='login'){
				view="login";
			}else if(view==null){
            	view="treepanels";
            }

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag,  // for existingItem search later
                hideMode: 'offsets'
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }
        me.lastView = newView;
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);
        }
    },

    onToggleNavigationSize: function () {
        var me = this,
            refs = me.getReferences(),
            navigationList = refs.navigationTreeList,
            wrapContainer = refs.mainContainerWrap,
            collapsing = !navigationList.getMicro(),
            new_width = collapsing ? 64 : 250;

        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();

            refs.senchaLogo.setWidth(new_width);

            navigationList.setWidth(new_width);
            navigationList.setMicro(collapsing);

            Ext.resumeLayouts(); // do not flush the layout here...

            // No animation for IE9 or lower...
            wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
            wrapContainer.updateLayout();  // ... since this will flush them
        }
        else {
            if (!collapsing) {
                // If we are leaving micro mode (expanding), we do that first so that the
                // text of the items in the navlist will be revealed by the animation.
                navigationList.setMicro(false);
            }

            // Start this layout first since it does not require a layout
            refs.senchaLogo.animate({dynamic: true, to: {width: new_width}});

            // Directly adjust the width config and then run the main wrap container layout
            // as the root layout (it and its chidren). This will cause the adjusted size to
            // be flushed to the element and animate to that new size.
            navigationList.width = new_width;
            wrapContainer.updateLayout({isRoot: true});
            navigationList.el.addCls('nav-tree-animating');

            // We need to switch to micro mode on the navlist *after* the animation (this
            // allows the "sweep" to leave the item text in place until it is no longer
            // visible.
            if (collapsing) {
                navigationList.on({
                    afterlayoutanimation: function () {
                        navigationList.setMicro(true);
                        navigationList.el.removeCls('nav-tree-animating');
                    },
                    single: true
                });
            }
        }
    },
	//默认加载的路由
    onMainViewRender:function() {

//			refs.remove(navigationList);
//			refs.navigationTreeList=null;
//		console.log(refs);


		
    	

    	var loggedIn;
        loggedIn = localStorage.getItem("TutorialLoggedIn");
        
        if (!window.location.hash) {

            if(loggedIn){
        		this.redirectTo("mainlist");

        	}else{
        		this.redirectTo("login");

        	}
        }

    },

    onRouteChange:function(id){
		var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

         if(id!='login'){
        	if(loggedIn==null||loggedIn=="false"){
        		this.setCurrentView('login');
	        }else{
	        	this.setCurrentView(id);
	        }
        }else{
        	localStorage.setItem("TutorialLoggedIn", false);
//      	localStorage.setItem("loginUser", null);
        	this.setCurrentView('login');
        }

//		alert(id);
//      this.setCurrentView(id);
    }

//  onSearchRouteChange: function () {
//      this.setCurrentView('searchresults');
//  },
//
//  onSwitchToModern: function () {
//      Ext.Msg.confirm('Switch to Modern', 'Are you sure you want to switch toolkits?',
//                      this.onSwitchToModernConfirmed, this);
//  },
//
//  onSwitchToModernConfirmed: function (choice) {
//      if (choice === 'yes') {
//          var s = location.search;
//
//          // Strip "?classic" or "&classic" with optionally more "&foo" tokens
//          // following and ensure we don't start with "?".
//          s = s.replace(/(^\?|&)classic($|&)/, '').replace(/^\?/, '');
//
//          // Add "?modern&" before the remaining tokens and strip & if there are
//          // none.
//          location.search = ('?modern&' + s).replace(/&$/, '');
//      }
//  },
//
//  onEmailRouteChange: function () {
//      this.setCurrentView('email');
//  }
});
