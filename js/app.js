/*LIST YOUR FUNCTIONS HERE BRUH*/

var dropdSelectValsymbol;
var dropdSelectVal;
var dropdShow;
var totalinput;
var textinput;
var gotitem;


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
    fillItemCategory(dropdSelectVal);
  });
 }


function clickonplus()
{
	$('.plus').on('click', function()
	{
		textinput = $('input').val();
		mediuminput = textinput + dropdSelectValsymbol;
   	totalinput = '<i id="yes" class="fa fa-check"></i>' + '<i id="no" class="fa fa-times"></i>' + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + textinput + dropdSelectValsymbol;

		if (textinput=='' || dropdSelectValsymbol==undefined) {
			alert("Please Enter a Name & Pick a Category");
		}
		else
		{

			$('ul.need-items2').append(totalinput+"<br/>");
		}

		$('input').val('');

		$('ul.need-items2 i.fa.fa-check').on('click', function(e)
		{
			$('ul.got-items2').append(mediuminput + '<br/>'); 
      var toRemove =  $(this);
      var allinput = $(this).nextAll();
    	toRemove.remove();
      allinput.remove();				

		});
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
