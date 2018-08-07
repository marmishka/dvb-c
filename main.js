
$.getJSON("main.json",function(data){
   var k="";
   for (var i in data){
       var n=data[i].id;
       if(k!=n){
         k=n;
         $("main").append("<div class=\"trans\"> <div id=\""+n+"\" class=\"header\">"+n+"000 KGz"+"</div><div id=\"a"+n+"\" class=\"content\"></div></div>");
    };       
       var chan = data[i].ch;      
           $("#a"+n).append("<div>"+chan+"</div>");    
        
   };
   $("#274").click(function(){
    $(".container").hide();

  });
  });
  $(document).ready(function(){     
    $("#btnC").click(function(){
        $(".content").hide();
    });

    $("#btnE").click(function(){
        $(".content").show();
    });

    $(".content").hide();

    $(".header").click(function(){
        $("#a"+this.id).toggle();
    });

});
    
    




