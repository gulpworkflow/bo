//import $ from 'jquery';

// ==================
//
// Tabs
//
// ==================
module.exports = $(document).ready(function () {
  var $tabs = $('.Tabs');
  $tabs.each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $tabs.on('click', 'li > a.Tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.Tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});