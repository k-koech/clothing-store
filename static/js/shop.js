// rating
$(document).ready(function() {  
    
$('.ratings').each(function() 
{

   
        $("#st1").click(function() {  
            $(".fa-star").css("color", "black");  
            $("#st1").css("color", "green");  

        });  
        $("#st2").click(function() {  
            $(".fa-star").css("color", "black");  
            $("#st1, #st2").css("color", "green");  

        });  
        $("#st3").click(function() {  
            $(".fa-star").css("color", "black")  
            $("#st1, #st2, #st3").css("color", "green");  

        });  
        $("#st4").click(function() {  
            $(".fa-star").css("color", "black");  
            $("#st1, #st2, #st3, #st4").css("color", "green");  

        });  
        $("#st5").click(function() {  
            $(".fa-star").css("color", "black");  
            $("#st1, #st2, #st3, #st4, #st5").css("color", "green");  

        });  
    });  

});