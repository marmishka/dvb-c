$(document).ready(function(){     
    $("#btnC").click(function(){
        $(".content").hide();
    });
    $("#btnE").click(function(){
        $(".content").show();
    });
    
    

});
$(window).on("load",function(){
    $(".content").hide();
});