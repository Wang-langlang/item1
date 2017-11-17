

var box = document.querySelector('.box');
var mask = document.querySelector('.mask');
var bigbox = document.querySelector('.bigbox');
var bigimg = document.querySelector('.bigbox img');
var boximg = document.querySelector('.box img');
var lis = document.querySelectorAll('.ul-box li');
$('.ul-box li').on('click', function () {
    $(this).css({
        border: '2px solid red'
    }).siblings().css({
        border: '2px solid transparent'
    })
});
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function () {
//            this.style.border='2px solid red';
        bigimg.src = this.dataset.img;
        boximg.src = this.dataset.img;
    });
}
box.addEventListener('mouseenter', function () {
    mask.style.display = 'block';
    bigbox.style.display = 'block';
});
box.addEventListener('mouseleave', function () {
    mask.style.display = 'none';
    bigbox.style.display = 'none';
});
//    mousemove事件 鼠标在某个元素身上移动的时候出发
box.addEventListener('mousemove', function (e) {
//        处理兼容性
    var ev = e || window.event;

    //        原声JS获取元素的宽度 通过offsetWidth 来获取
//        ev.x - box.offsetLeft - (mask.offsetWidth / 2)
//        获取鼠标X轴
    var maskLeft = ev.clientX - this.offsetParent.offsetLeft - (mask.offsetWidth / 2);
//        获取Y轴
    var maskTop = ev.clientY - this.offsetParent.offsetTop - (mask.offsetHeight / 2) + document.body.scrollTop;
//        控制遮罩层的范围
    if (maskLeft <= 0) {
        maskLeft = 0;
    } else if (maskLeft >= box.offsetWidth - mask.offsetWidth) {
        maskLeft = box.offsetWidth - mask.offsetWidth;
    }
    if (maskTop <= 0) {
        maskTop = 0;
    } else if (maskTop >= box.offsetHeight - mask.offsetHeight) {
        maskTop = box.offsetHeight - mask.offsetHeight;
    }

    mask.style.left = maskLeft + 'px';
    mask.style.top = maskTop + 'px';

//        移动右边图片
    var b = maskLeft / (box.offsetWidth - mask.offsetWidth);
    var t = maskTop / (box.offsetHeight - mask.offsetHeight);
//
    var imgLeft = b * (bigimg.offsetWidth - bigbox.offsetWidth);
    var imgTop = t * (bigimg.offsetHeight - bigbox.offsetHeight);
//
    bigimg.style.left = -imgLeft + 'px';
    bigimg.style.top = (-imgTop) + 'px';
})


//    数量加减
var zong = document.querySelector('.zong');
var text = zong.innerHTML;
var jian = document.querySelector('.jian');
var jia = document.querySelector('.jia');

jian.onclick = function () {
    if (text > 0) {
        text--;
        zong.innerHTML = text;

    }

};
jia.onclick = function () {
    text++;
    zong.innerHTML = text;

};

$(document).ready(function(){
    $.ajax({
        url:'http://172.25.7.225:8080/gym/selectAllComm?jsoncallback= ',
        type:'get',
        success:function(json){
            var str = '';
            for(var i = 0; i < json.length; i++){
                str += '<li>';
                str += ' <div class="l-sec-li-top">';
                str += ' <p class="l-txt1-1 pull-left">'+json[i].content+'<br><img src="'+json[i].picp+'" alt=""></p>';
                str += '<div class="l-sec-li-mid pull-left">';
                str += ' <p class="l-txt1-2">'+json[i].color+'</p>';
                str += ' <p class="l-txt1-2">'+json[i].size+'</p></div>';
                str += ' <p  class="l-sec-li-right pull-left">'+json[i].pname+'</p></div>';
                str += ' <div class="clearfix"></div>';
                str += '<p class="l-sec-li-bottom"><span>'+json[i].createTime+'</span> <span class="pull-right"><img src="'+json[i].pic+'" alt=""/></span></p>';
                str += '</li>';
            }
            $('.l-section ul').html(str);
        }
    })
})

$('.w-box .red').on('click',function(){
    $('.l-sec').css('display','none')
    $('.sh').css({
        'display':'block'
    })
    $('.w-box .red').css({'color':'#ff3333','border':'1px solid #cccccc'})
    $('.w-box .bao').css({'color':'black','border':'none'})
    $('.w-box .shangpin img').css('left','0')
})
$('.w-box .bao').on('click',function(){
    $('.l-sec').css('display','block')
    $('.sh').css('display','none')
    $('.w-box .red').css({'color':'black','border':'none'})
    $('.w-box .bao').css({'color':'#ff3333','border':'1px solid #cccccc'})
    $('.w-box .shangpin img').css('left','204px')
})