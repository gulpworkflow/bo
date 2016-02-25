//import $ from 'jquery';

// ==================
//
// Dropdown
//
// ==================
module.exports = $(document).ready(function() {
  $(".Dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".Dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });
});