
var answerflag=0; 
function activebtns(){
    $(".btn1").prop('disabled',false);
    $('.btn2').prop('disabled',false);
    $('#check-ans-btn').prop('disabled',false);
    $('.reset-btn').prop('disabled',false);
     $(".btn1").removeClass('removepointer');
    $(".btn2").removeClass('removepointer');
     $('#check-ans-btn').removeClass('removepointer');
    $('.reset-btn').removeClass('removepointer');
     $(".em").show();
} 
function disablebtns(){
    $(".btn1").prop('disabled',true);
    $('.btn2').prop('disabled',true);
    $('#check-ans-btn').prop('disabled',true);
    $('.reset-btn').prop('disabled',true);
     $(".btn1").addClass('removepointer');
    $(".btn2").addClass('removepointer');
     $('#check-ans-btn').addClass('removepointer');
    $('.reset-btn').addClass('removepointer');
     $(".em").hide();
}
//the two hidden pages 

 $(".btn1").click(function() { 
  
    $(".msg2").css({display: "none"});
    $(".while_bg").fadeTo(1 , 0.5);
    $("#main").css({display:"none"});
    $(".msg1").css({display: "block" });
    disablebtns();
   
  
});

$(".btn3").click(function() { 
    
    $(".msg1").css({display: "none"});
    $(".while_bg").fadeTo(0.5 , 1);
    $("#main").css({display: "block"});
    activebtns(); 
    
});

$(".btn2").click(function() { 
    $(".msg1").css({display: "none"});
    $(".while_bg").fadeTo(1 , 0.5);
    $(".msg2").css({display: "block"});
    $("#main").css({display: "none"});
   
    disablebtns();
});

$(".btn4").click(function() { 
    
    $(".msg2").css({display: "none"});
    $(".while_bg").fadeTo(0.5 , 1);
    $("#main").css({display: "block"});
     activebtns(); 
    
});

               // how to answer 

    $(".emp").click(function(){ 
    
        var oldactive = $('#main .active');
        if(oldactive.length >0){
        
       //get active answer
        var activebtn=$('#main .active').text(); 

        var correctans1 = ["eraser" ,"ruler","pen","pencil","book"] 
       //var wrongans1 = ["bag","pencil case","scissors"] ;
        if ($.inArray(activebtn , correctans1) !== -1){
            console.log(answerflag)
            answerflag++;

       //if(activebtn == correctans1){
   
       $('#main .active').fadeTo(10 , 0); 
       
       $(this).html("<span class='right'>" +activebtn  +"</span> "+"&#9989;" +"</span> " );
       $(this).removeClass("emp");
       $(this).addClass("removepointer");
       $('#main .active').removeClass("active");
       $(".audio_right").trigger("play");
            //fade
            if(answerflag == 5){
                 $("#btn6").fadeTo(5 ,0);
                $("#btn7").fadeTo(5 ,0);
                $("#btn10").fadeTo(5 ,0);
                $("#btn11").fadeTo(5 ,0);
                $("#btn12").fadeTo(5 ,0);
                $("#btn5").fadeTo(1 ,0.5);
                $("#btn8").fadeTo(1 ,0.5);
                $("#btn9").fadeTo(1 ,0.5);
                $("#btn5").addClass("removepointer");
                $("#btn8").addClass("removepointer");
                $("#btn9").addClass("removepointer");
                $("#check-ans-btn").addClass('disabled');
                $('#check-ans-btn').prop('disabled',true);

                 var oldactive = $('#main .active');
                if(oldactive.length >0){
                    $('#main .active').removeClass("active");
                   }
            }
            
    }
   
   else{             
        $(this).html("<span class='wrong'>"+activebtn + "<span class='x'> &#x274C;</span>" + "</span> " );
           $('.x').fadeOut(120).fadeIn(120).fadeOut(120).fadeIn(120);

        setTimeout(function() {

            $('.wrong' ).remove();
        }, 400);  
      $(".audio_wrong").trigger("play");
                                                    }} 
  
    
                                                     }); 

             //click on the button
    $(".all").click(function(){ 
    //remove old active class from  button
    var oldactive = $('#main .active');
    if(oldactive.length >0){
        $('#main .active').removeClass("active");
       }
    //add new active button
    $(this).addClass("active");
                                 })

               //reset 


$(".reset-btn").click(function(){
    answerflag=0;
    $(".all-emty").addClass("emp");
    $(".all-emty").removeClass("removepointer")
    $(".all").fadeTo(0 ,5);
    $(".emp").empty();
    
    $("#btn5").removeClass("removepointer");
    $("#btn8").removeClass("removepointer");
    $("#btn9").removeClass("removepointer");
    
    $("#check-ans-btn").removeClass('disabled');
    $('#check-ans-btn').prop('disabled',false);

    var oldactive = $('#main .active');
    if(oldactive.length >0){
        $('#main .active').removeClass("active");
        
        
        
       }
   //  $(this).removeClass("removepointer")
  //  $(this).addClass("active");
    
});
                //see answers

$("#check-ans-btn").click(function(){
    $("#btn6").fadeTo(5 ,0);
    $("#btn7").fadeTo(5 ,0);
    $("#btn10").fadeTo(5 ,0);
    $("#btn11").fadeTo(5 ,0);
    $("#btn12").fadeTo(5 ,0);
    $("#btn5").fadeTo(1 ,0.5);
    $("#btn8").fadeTo(1 ,0.5);
    $("#btn9").fadeTo(1 ,0.5);
    $("#btn5").addClass("removepointer");
    $("#btn8").addClass("removepointer");
    $("#btn9").addClass("removepointer");
    $("#check-ans-btn").addClass('disabled');
    
    
    $(".empty1").html("<span class='right'>"+"eraser"+"</span> " + "&#9989;");
    $(".empty2").html("<span class='right'>"+"ruler   "+"</span> " + "&#9989;");
    $(".empty3").html("<span class='right'>"+"pencil"+"</span> " + "&#9989;");
    $(".empty4").html("<span class='right'>"+"pen"+"</span> " + "&#9989;");
    $(".empty5").html("<span class='right'>"+"book"+"</span> " + "&#9989;");
   var oldactive = $('#main .active');
    if(oldactive.length >0){
        $('#main .active').removeClass("active");
       }
   
});
