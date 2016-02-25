//import $ from 'jquery';

// ==================
//
// Overlay
//
// ==================
module.exports = $(document).ready(function() {
  //if any .Overlays are :target, addClass 'overflow-hidden'
//  var OverlayActive = window.getComputedStyle(document.querySelector('.Overlay'), ':target').length;
  var overlays = document.getElementsByClassName('Overlay');
  //console.log(overlays.length);
  for (var thisOverlay in overlays) {
    //console.log(overlays[thisOverlay].id);
    if($('#' + overlays[thisOverlay].id + ":target")) {
      //console.log('target yes!');
    }
  }
 // console.log(OverlayActive);
  $('.Overlay-trigger, .Overlay-cancel, .Overlay-close').click(function(){
    //var thisOverlayID  = $(this).attr('href');
    //var $thisOverlay   = $(thisOverlayID);
    $('body').toggleClass('overflow-hidden');
  });
});