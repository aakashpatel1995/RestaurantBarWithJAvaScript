
$.fn.sooperfish = function(op) {

  var sf = $.fn.sooperfish;
  sf.o = [];
  sf.op = {};
  sf.c = {
    menuClass   : 'sf-js-enabled',
    isParent : 'sf-parent',
    arrowClass  : 'sf-arrow'
  };
  if ($.easing.easeOutOvershoot) { 
    sooperEasingShow = 'easeOutOvershoot';
  } else {
    sooperEasingShow = 'linear';
  };
  if ($.easing.easeInTurbo) {
    sooperEasingHide = 'easeInTurbo';
  } else {
    sooperEasingHide = 'linear';
  };  
  sf.defaults = {
    multiColumn  : true,
    dualColumn  : 6, 
    tripleColumn  : 12, 
    hoverClass  : 'sfHover',
    delay    : 500, 
    animationShow  : {height:'show'},
    speedShow    : 600,
    easingShow      : sooperEasingShow,
    animationHide  : {height:'hide',opacity:'hide'},
    speedHide    : 200,
    easingHide      : sooperEasingHide,
    autoArrows  : true, 
    onShow    : function(){},
    onHide    : function(){} 
  };
  


  var o = $.extend({},sf.defaults,op);
  if (!o.sooperfishWidth) {
  o.sooperfishWidth = $('ul:first li:first', this).width();
  } else {
  $('ul li', this).width(o.sooperfishWidth) 
  }

  this.each(function() {
    
   
    var parentLi = $('li:has(ul)', this);
    parentLi.each(function(){
      if (o.autoArrows) { 
      $('>a',this).append('<span class="'+sf.c.arrowClass+'"></span>');
      }
      $(this).addClass(sf.c.isParent);
    });
    
    $('ul',this).css({left: 'auto',display: 'none'}); 

   
    if (o.multiColumn) {
    var uls = $('ul',this);
    uls.each(function(){
      var ulsize = $('>li:not(.backLava)',this).length; 
      if (ulsize >= o.dualColumn) {
        if (ulsize >= o.tripleColumn) {
          $(this).width(3*o.sooperfishWidth).addClass('multicolumn triplecolumn');
        } else {
          $(this).width(2*o.sooperfishWidth).addClass('multicolumn dualcolumn');
        }
      }
    });
    }

    var root = this, zIndex = 1000;

    function getSubmenu(ele) {
      if (ele.nodeName.toLowerCase() == 'li') {
        var submenu = $('> ul', ele);
        return submenu.length ? submenu[0] : null;
      } else {
        return ele;
      }
    }

    function getActuator(ele) {
      if (ele.nodeName.toLowerCase() == 'ul') {
        return $(ele).parents('li')[0];
      } else {
        return ele;
      }
    }

    function hideSooperfishUl() {
      var submenu = getSubmenu(this);
      if (!submenu) return;
      $.data(submenu, 'cancelHide', false);
      setTimeout(function() {
        if (!$.data(submenu, 'cancelHide')) {
          $(submenu).animate(o.animationHide,o.speedHide,o.easingHide,function(){ o.onHide.call(submenu); });
        }
      }, o.delay);
    }

    function showSooperfishUl() {
      var submenu = getSubmenu(this);
      if (!submenu) return;
      $.data(submenu, 'cancelHide', true);
      $(submenu).css({zIndex: zIndex++}).animate(o.animationShow,o.speedShow,o.easingShow,function(){ o.onShow.call(submenu); });
      if (this.nodeName.toLowerCase() == 'ul') {
        var li = getActuator(this);
        $(li).addClass('hover');
        $('> a', li).addClass('hover');
      }
    }

    $('li', this).unbind().hover(showSooperfishUl, hideSooperfishUl);

  });

};
