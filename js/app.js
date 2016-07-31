/*LIST YOUR FUNCTIONS HERE BRUH*/

var dropdSelectValsymbol;
var dropdSelectVal;
var dropdShow;
var totalinput;
var textinput;

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
  $('.item-cat p').on('click', function(e)
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
  $('.sub-menu li').on('click', function()
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
		

		if (textinput=='' || dropdSelectValsymbol==undefined) {
			alert("Please enter a Name and Pick a Category");
		}
		else
		{
			$('ul.need-items').append(totalinput);
		}

		});
}

function refresh()
{
	$('.logo').on('click', function()
	{
		window.location.reload();
	});

}

$(document).ready(function() {

	clickDropDown();
  	listenSelectCat();
  	clickonplus();
  	refresh();

});










