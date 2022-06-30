const elMmenu = document.querySelectorAll('#gnb > ul > li > a');
const elBar = document.querySelector('.bar');

console.log(elMmenu);

elMmenu.forEach(function(bb){
    bb.onmouseover =function(){
        elBar.style = `width:${this.offsetWidth}px; 
                    left:${this.offsetLeft}px;`
    }
    bb.onmouseout = function(){
        elBar.style = `width:0px;
                        left:${this.offsetLeft}px;`
    }
});

$('#gnb > ul > li').on("mouseenter",function(){
    $(this).find('.sub').stop().fadeIn(500);


});

$('#gnb > ul > li').on("mouseleave",function(){
    $(this).find('.sub').stop().fadeOut(100);

});