$(".tit .btn").click(function(){
    //$("#con_nav").css("display","block");
    //$("#con_nav").show();
    //$("#con_nav").fadeIn();
    //$("#con_nav").slideDown();
    //$("#con_nav").toggle();
    //$("#con_nav").fadeToggle();
    $("#con_nav").slideToggle(200);
    $(this).toggleClass("on");
});