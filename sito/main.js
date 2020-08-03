/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';



  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Valeria Costa.", "Designer.", "Nature Lover.", "Leader of my self."],
      typeSpeed: 100,
      loop: true,
    });
  });



})
