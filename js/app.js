/*LIST YOUR FUNCTIONS HERE BRUH*/

var dropdSelectValsymbol;
var dropdSelectVal;
var dropdShow;
var totalinput;

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
		$('ul.need-items').append(totalinput);
	});
}


function clickfail()
{
	$('.plus').on('click', function()
		{
			alert("Please enter a Name and Pick a Category");
		});
}


function inputrequired() 
{
	$('.plus').on('click', function(e)
	{
	if ($('totalinput').val().length !='')
	{
		clickfail();
	}
	else 
	{
		clickonplus();
	}
	});
}


/*LIST OF FUNCTIONS THAT ARE BEING EXECUTED*/

$(document).ready(function() {

	clickDropDown();
  	listenSelectCat();
  	inputrequired();

});










