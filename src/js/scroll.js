$(document).ready(function(){

    $('section').each( function(i){
        var top_of_section = $(this).offset().top;
        var bottom_of_window = $(window).height();
       
        if(bottom_of_window < top_of_section){
                $(this).css("opacity", "0");
                $(this).css("margin-top", "150px");
        } 
        
    });
});

$(window).scroll( function(){

    $('section').each( function(i){

        var top_of_section = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 100;
  
        if( bottom_of_window > top_of_section ){
            
            $(this).animate({'opacity':'1', 'margin-top':'0'},500);
              
        } else if(bottom_of_window < top_of_section){
                $(this).css("opacity", "0");
                $(this).css("margin-top", "100px");        
  }
        

    }); 


});