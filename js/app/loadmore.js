//加载更多
define(['lib/jquery-3.2.1.min'],function(){

	var ctIndex = 0;
    var $loadImages = $('.load-images');
    var $loadList = $('.load-list');

	$(".btn").on("click",function(e){
        e.preventDefault(); //防止点击 a 链接页面跳到顶部
        $.get("/loadMore",{index: ctIndex,length: 3}).done(function(e){
            if(e.status === 0){  //status的值要约定一致
                appendHtml(e.data,ctIndex);
                ctIndex += 3;
            }else{
                console.log("获取出错")
            }
        });
    });
    
    function appendHtml(e,idx){
        console.log(idx)
        for (var i = 0; i < e.length; i++) {
            if(idx >= 12){ //只有12张图
                break;
            }else{
                $loadList.append('<li class="load-images"><img src="" alt=""></li>');
                //console.log()
                $loadList.children().eq(i+idx).children().attr('src',e[i]);
            } 
        }
    }

});