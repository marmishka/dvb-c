


$(document).ready(function(){     
    $("#btnC").click(function(){
        $(".content").hide();
    });

    $("#btnE").click(function(){
        $(".content").show();
    });

    




$.getJSON("main.json",function(data){
 var k="";
   for (var i in data){
       var n=data[i].id;
       if(k!=n){
         k=n;
         $("main").append("<div class=\"trans\"> <div id=\""+i+"\" class=\"header\">"+n+"000 KGz"+"</div><div id=\""+n+"\" class=\"content\"></div></div>");
    }       
       var chan = data[i].ch;      
           $("#"+n).append("<div>"+chan+"</div>");    
        
   };
       $(".content").hide(); 
  
    });

});
