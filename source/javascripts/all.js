//= require_tree .

$(document).ready(function(){
  $('.feature').mouseenter(function(){
    $(this).addClass('shadowed');
  })

  $('.feature').mouseleave(function(){
    $(this).removeClass('shadowed');
  })

})
