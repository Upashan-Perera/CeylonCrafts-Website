$(document).ready(function(){

    $(function(){
        $("#header").load("./inc/header.html");
    });
    
    $(function(){
        $("#footer").load("./inc/footer.html");
    });
    
    $(".num1").hover(function(){
        $(this).addClass("highlight");
    },
    function(){
        $(this).removeClass("highlight");
    });
    $(".num2").hover(function(){
        $(this).addClass("highlight");
    },
    function(){
        $(this).removeClass("highlight");
    });
    $(".num3").hover(function(){
        $(this).addClass("highlight");
    },
    function(){
        $(this).removeClass("highlight");
    });
    $(".num4").hover(function(){
        $(this).addClass("highlight");
    },
    function(){
        $(this).removeClass("highlight");
    });
    $(".num5").hover(function(){
        $(this).addClass("highlight");
    },
    function(){
        $(this).removeClass("highlight");
    });
    $(".num6").hover(function(){
        $(this).addClass("highlight");
    },
    function(){
        $(this).removeClass("highlight");
    });
});