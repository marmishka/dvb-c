



$.getJSON("main.json",function(data){
    $("header").append(data[0].id+"<img src=\""+data[0].ch+"\" width=\"100px\"/>");
    $("main").append("<div class=\"info\">"+
                     "<div id=\"info\">FEC - "+data[1].id+",  QAM - "+data[1].ch+"</div>"+          
                     "</div>");
    $("footer").append("Created by Zmichgen 2018");                 
    var k="";
    var nu =":hidden"
    for ( var i in data){
        if (i>1){
        var n=data[i].id;
        if(k!=n){
          k=n;
          $("main").append("<div class=\"trans\"> <div id=\""+n+"\" class=\"header\">"+n+"000 KGz"+"</div><div id=\"a"+n+"\" class=\"content\"></div></div>");
     };       
        var chan = data[i].ch;      
            $("#a"+n).append("<div id = \""+i+"\">"+chan+"</div>");    
         
    }};
    $(".content").slideUp();
    $(".header").click(function(){
        $("#a"+this.id).slideToggle();
    });
    $(".info").click(function(){
        
        $(".content"+nu).slideToggle();
        if (nu===":hidden"){nu=":visible";}
        else
        {nu=":hidden";}
    });
    $(".content div").click(function(){
         $(this).html("Changed");
    });
   });  
 




    
    




