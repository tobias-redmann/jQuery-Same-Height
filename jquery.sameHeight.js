(function ( $ ) {

  
  $.fn.sameHeight = function() {

    // set to auto to get natural box sizes
    $(this).css('height', 'auto');
  
    var highest_size = 0;
  
    $(this).each(function(){
  
      var size = $(this).outerHeight();  
    
      if (size > highest_size) highest_size = size;
    
    });
  
  
    $(this).css('height', highest_size + 'px');
    
    
    return this;

};

}( jQuery ));