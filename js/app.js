$(document).ready(function() {


$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "ul.need-items" ).append( value );
  })
  .keyup();
})