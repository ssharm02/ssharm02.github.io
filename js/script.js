(function($, self) {

    if (!$ || !self) {
      return;
    }
  
    for (var i = 0; i < self.properties.length; i++) {
      var property = self.properties[i],
        camelCased = StyleFix.camelCase(property),
        PrefixCamelCased = self.prefixProperty(property, true);
  
      $.cssProps[camelCased] = PrefixCamelCased;
    }
  
  })(window.jQuery, window.PrefixFree);
  
  var hash = $(this).find('li.active a').attr('href');
  if (hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }
  
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if (hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });
  
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });