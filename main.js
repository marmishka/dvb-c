$(document).ready(function(){     
    $("#btnC").click(function(){
        $(".content").hide();
    });
    $("#btnE").click(function(){
        $(".content").show();
    });
    $(".header").click(function(){
        var x = this(id);
        $('.content:nth-child(2)').show();
    });
    $(".content").click(function(){
        $('.content:first').hide();
    });
    

});