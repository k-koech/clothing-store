// Show ratings div when the product is overed
$(document).ready(function(){
    $( ".item" ).mouseenter(function() 
    {
        var closestImage = $(this).closest(".item");
        closestImage.next(".ratings").slideDown(100);
      })
      $(".cols" ).mouseleave(function() {
        $(".ratings" ).hide();
    });
    });


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