



$.getJSON("main.json",function(data){
  
    $("header").append(data[0].id+"<img src=\""+data[0].ch+"\" width=\"100px\"/>");
    $("main").append("<form><select id=\"ch-list\" placeholder=\"Enter Channel Name\"></select>"+
    "<h3 id =\"search\">SEARCH</h3><input id=\"ttt\" type=\"text\" disabled></input><h3 id =\"close\">CLOSE</h3></form>");
    $("main").append("<div class=\"info\">"+
                     "<div id=\"info\">FEC - "+data[1].id+",  QAM - "+data[1].ch+"</div>"+          
                     "</div>");
    $("footer").append("Created by zdev.by 2018");                 
    var k="";
    var nu =":hidden"
    var lch=[];
    for ( var i in data){
        if (i>1){
        var n=data[i].id;
        if(k!=n){
          k=n;
          $("main").append("<div class=\"trans\"> <div id=\""+n+"\" class=\"header\">"+n+"000 KGz"+"</div><div id=\"a"+n+"\" class=\"content\"></div></div>");
     };   
     lch[i]=data[i].ch;    
        var chan = data[i].ch;      
            $("#a"+n).append("<div id = \""+i+"\">"+chan+"</div>");    
         
    }};
    lch.sort();
   
    $(lch).each( function(index, item) {
        var option = $('<option  value="'+item+'">'+item+'</option>');
        $('#ch-list').append(option);
    });
    $(".content").slideUp();
    $("#search").click(function(){
        var freq="";
        var end ="";
        var key ="";
        var channel=document.getElementById("ch-list").value;
            for (var i=2;i<data.length;i++){
                if (channel===data[i].ch){freq=data[i].id; 
                                           end="000 KGz"; 
                                           key="#a"+freq;                
            }
           
            
            
        }
        document.getElementById("ttt").value =freq+end;
            $(key).slideDown();
        
   });
   $("#clear").click(function(){
    document.getElementById("tt").value ="";
});
   
    $("#close").click(function(){
        $("form").slideUp();
   });
   
  
  
   $("header").click(function(){
         $("form").slideDown();
    });
  
    $(".header").click(function(){
        $("#a"+this.id).slideToggle();
    });
    $(".info").click(function(){
        
        $(".content"+nu).slideToggle();
        if (nu===":hidden"){nu=":visible";}
        else
        {nu=":hidden";}
    });
    
   });  
 




    
    




