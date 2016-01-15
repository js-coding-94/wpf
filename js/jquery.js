/*$(document).ready(function() {

    var state = true;
    
    $( ".project-frame" ).hover(function() {
      if ( state ) {
        $( this).animate({
          opacity: '0.95',
          color: "#fff",
        }, 400 );

      } else {
        $( this ).animate({
          opacity: '1',
          color: "#000",
        }, 400 );
      }
      
      state = !state;
    });
  });*/


$(document).ready(function() {

    $('.project-frame').hover(function(){
      $('.project-text',this).stop().slideToggle('slow');
    }, function(){
      $('.project-text',this).stop().slideToggle('slow');
      });
});

    
