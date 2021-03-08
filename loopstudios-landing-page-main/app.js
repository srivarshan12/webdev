$(document).ready(function(){
    $("#hamburger").click(function(){
        $(".navbaritems").css("left","0");
    });
    $("#closeicon").click(function(){
        $(".navbaritems").css("left","-100%");
    });
});