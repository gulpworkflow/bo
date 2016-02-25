//import $ from 'jquery';

// ==================
//
// NavBar
//
// ==================
module.exports = $(document).ready(function() {
  var $menuToggleEl = $('.js-menu-toggle');
  var $menuEl       = $('.js-NavBar-mainMenu');

  var menuToggle = $menuToggleEl.unbind();
  $menuEl.removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $menuEl.slideToggle(function(){
      if($menuEl.is(':hidden')) {
        $menuEl.removeAttr('style');
      }
    });
  });

  // NavBar Centered
  var $menuToggleEl = $(".js-NavBarCentered-menu-toggle").unbind();
  var $menuEl = $(".js-NavBarCentered-mainMenu");
  $menuEl.removeClass("show");
  
  $menuToggleEl.on("click", function(e) {
    e.preventDefault();

    $menuEl.slideToggle(function(){
      if($menuEl.is(":hidden")) {
        $menuEl.removeAttr("style");
      }
    });
  });
});
