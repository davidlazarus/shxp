/*LIST YOUR FUNCTIONS HERE BRUH*/

var dropdSelectValsymbol;
var dropdSelectVal;
var dropdShow;

function showSubMenu()
 {
  $('.sub-menu').fadeIn('slow');
  dropdShow = true;
 }

function hideSubMenu()
 {
  $('.sub-menu').hide();
  dropdShow = false;	
 }

function clickDropDown()
 {
  $(".item-cat p").on("click", function(e)
  {
    if(dropdShow)
    {
      hideSubMenu();
    }
    else
    {
      showSubMenu();
    }
  });
 }

function fillItemCategory(val)
 {
  $('.item-cat p').html(val);  
 }

function listenSelectCat()
 {
  $(".sub-menu li").on('click', function()
  {
    hideSubMenu();
    dropdSelectVal = $(this).html();
    dropdSelectValsymbol = $(this).children('i')[0].outerHTML;
    console.log(dropdSelectVal);
    console.log(dropdSelectValsymbol);
    fillItemCategory(dropdSelectVal);
  });
 }

function clickonplus()
{
	$('.plus').on('click', function()
	{
		textinput = $('input').val();
   		totalinput = textinput + dropdSelectValsymbol;
		$('ul.need-items').append(totalinput);
	});
}

function inputrequired() 
{
	if (textinput) 
	{
		clickonplus();
	}
	else 
	{
		clickDropDown();
	}


}


/*LIST OF FUNCTIONS THAT ARE BEING EXECUTED*/

$(document).ready(function() {

	clickDropDown();
  	listenSelectCat();
  	clickonplus();
  	inputrequired();

});










