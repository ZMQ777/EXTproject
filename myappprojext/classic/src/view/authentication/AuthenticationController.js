Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
    	
    	var u_name = Ext.getCmp('name').value;
		var u_password = Ext.getCmp('password').value;
		var base=this;

	  	var re=/^\w+$/; 
		var nama_result=re.test(u_name);
		var password_result=re.test(u_password);
				
		if(nama_result && password_result){
			Ext.Ajax.request({
			    url: './resources/login.php',
			    params:{
		        	u_name:u_name,
		        	u_password:u_password
		        },
			    success: function(resp,opts) { 
	//				    	var respText = Ext.util.JSON.decode(resp.responseText);
					var obj = JSON.parse(resp.responseText);
					var loginResult = obj["success"];
					
	//				console.log(obj);
				    if(loginResult){
						alert("登录成功");
						var user = obj["data"][0];
						
						localStorage.setItem("TutorialLoggedIn", true);
						var loginUser = JSON.stringify(user)
//						console.log(loginUser);
						localStorage.setItem("loginUser",loginUser);
						
				    	var navigationTreeList = Ext.getCmp('main111').refs.navigationTreeList._store;
				    	if(user.u_type==1){
							navigationTreeList.proxy.url='./resources/treeStore.json';		//多
						}else{
							navigationTreeList.proxy.url='./resources/treeStore1.json';		//少
						}
				    	navigationTreeList.removeAll();
				    	navigationTreeList.reload();
						
				    	
				        base.redirectTo('mainlist', true);
					}else{
						alert("用户名或密码错误！！！请重新输入");
					}
			    },
			    failure: function() { 
			    	Ext.Msg.alert('提示','登录失败!!!'); 
			    }
		    });
		}else{
			alert("用户名或密码错误！！！请重新输入");
		}
        
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});