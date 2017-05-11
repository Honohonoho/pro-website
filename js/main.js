/*
require(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});
*/

requirejs.config({
	baseUrl: './js',
    paths: {
       // lib: './lib'
    }
});


require(['lib/jquery-3.2.1.min','app/carousel'],
	function(/*carousel*/){ //参数名不要求与模块名，接口一致，便于理解即可

		//carousel.init($('.carousel')); //carousel是之前定义的参数
});

require(['app/nav-bar&go-top'],function(){
	//加载导航栏和回到顶部功能
});

require(['app/loadmore'],function(){
	//加载loadmore
});