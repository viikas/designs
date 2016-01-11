(function($){
  $(function(){


    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.slider').slider({
      full_width: true,
      height:500
    });
    $('#masoncontainer').masonry({
      // options
      itemSelector : '.item',
      columnWidth : 340,
      isAnimated:true,
      animationOptions:{
        duration:750,
        easing:'linear',
        queue:false
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
    
  });