
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
    $(".content").slideUp();
    $(".header").click(function(){
        $("#a"+this.id).slideToggle();
    });
    $(".info").click(function(){
        $(".content").slideToggle();
    });
   

   });  
 




    
    




