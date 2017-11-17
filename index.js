/**
 * Created by Administrator on 2017/11/17.
 */


$(document).ready(function(){
    $.getJSON('http://172.25.7.225:8080/gym/selectAll?jsoncallback=',
    function(json){
        console.log(json);
        var str='';
        for(var i=0;i<4;i++){

            str+='<div class="pa thumbnail">'
            str+='<div class="padd">'
            str+='<a href="particulars.html" class="center"><img src="'+json[i].picpath+'" alt=""/></a>'
            str+='<p>'+json[i].description+'</p>'
            str+='<p class="p"><del class="jiage">'+json[i].realprice+'</del><span class="red">'+json[i].sealprice+'</span></p>'
            str+='<button class="pull-right">立即购买</button>'
            str+='</div>'
            str+='</div>'
            console.log(json[i].picpath)
            $('.w-box .li').eq(i).html(str);
        }
    })
})
