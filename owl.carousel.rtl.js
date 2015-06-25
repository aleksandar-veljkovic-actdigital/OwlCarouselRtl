;

/*
 *  jQuery OwlCarouselRtl 
 *  version in git tag
 *
 *  Copyright (c) 2015 Aleksandar Veljkovic
 *  https://github.com/biosonic
 *
 *  Licensed under MIT
 *
 */

(function($) {
  $.fn.owlCarouselRtl = function(config) {
    config = config || {};
    config.rtlJump = (config.rtlJump === false) ? false : true;
    var $this = $(this);
    // rtl class
    $this.addClass("owl-rtl");
    // rtl reorder & numeration
    var itemNo = 0;
    $this.children().each(function(i, o) {
      var $o = $(o);
      $o.addClass("item-no-" + itemNo);
      $o.data("no", itemNo);
      itemNo++;
      $($o.parent()).prepend($o);
    });
    // after init bug fix & jump to last
    if (config.afterInit) {
      var afterInitClone = config.afterInit;
    }
    config.afterInit = function() {
      var timeout = setInterval(function() {
        if ($this.data('owlCarousel') !== 'undefined') {
          clearInterval(timeout);
          rtlEnumeration();
          afterInitBindings();
          jump2BugFig();
          if (config.rtlJump === true) {
            $this.data('owlCarousel').jumpTo(9999);
          }
          rtlEnumeration();
          if (typeof (afterInitClone) === "function") {
            afterInitClone();
          }          
          $this.find('.owl-wrapper-outer').css({direction:'ltr'});
          $this.find('.owl-wrapper').css({direction:'rtl'});
          rtlEnumeration();
        }
      }, 300);
    };
    // after Action
    if (config.afterAction) {
      var afterAfterActionClone = config.afterAction;
    }
    config.afterAction = function() {
      rtlEnumeration();
      if (typeof (afterAfterActionClone) === "function") {
        afterAfterActionClone();
      }
    };

    // RTL METHODS
    var afterInitBindings = function() {      
      var owl = $this.data('owl-carousel');      
      owl.jumpToRtl = function(num) {        
        var numRtl = owl.itemsAmount - num - 1;
        owl.jumpTo(numRtl);
      };     
      owl.goToRtl = function(num) {        
        var numRtl = owl.itemsAmount - num - 1;
        owl.goTo(numRtl);
      };
    };
    // RTL ENUMERATION
    var rtlEnumeration = function() {
      var owl = $this.data('owl-carousel');
      if (!owl) {
        return false;
      }
      owl.currentItemRtl = owl.maximumItem - owl.currentItem;
      owl.currentPositionRtl = owl.maximumItem - owl.currentItem + 1;
    };

    var jump2BugFig = function() {
      var ua = window.navigator.userAgent;
      var broken = false;
      broken = broken || (ua.indexOf('GT-I9300') > -1) && (ua.indexOf('GT-I9300') > -1) && (ua.indexOf('Chrome') === -1);
      if (broken) {
        $('.owl-controls .owl-buttons', $this).off("touchend.owlControls");
      }
    };

    // call super
    $this.owlCarousel(config);
  };
})(jQuery);
