(function ( $ ) {

  
  $.fn.sameHeight = function(selector) {

    // set to auto to get natural box sizes
    $(selector).css('height', 'auto');
  
    var highest_size = 0;
  
    $('.string_box').each(function(){
  
      var size = $(this).outerHeight();  
    
      if (size > highest_size) highest_size = size;
    
    });
  
  
    $(selector).css('height', highest_size + 'px');
    
    
    return this;

};

}( jQuery ));