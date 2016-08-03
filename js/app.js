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
   		totalinput = '<i id="yes" class="fa fa-check"><span class="wspace1"></span></i>'
      	+ '<i id="no" class="fa fa-times"></i><span class="wspace">'
     	+ textinput
     	+ '</span><span class="wspace2"></span>'
     	+ dropdSelectValsymbol;

		if (textinput=='' || dropdSelectValsymbol==undefined) {
			alert("Please Enter a Name & Pick a Category");
		}
		else
		{
			$('ul.need-items2').append("<li>" + totalinput + "<li/>");
		}

		$('input').val('');
		
	  checkListener();
	  
	});
}

function checkListener()
{
  $('ul.need-items2 i.fa.fa-check').on('click', function(e)
    {
      var dad = $(this).parent();
      console.log(dad);
     

      $('ul.got-items2').append(dad); 
      /*$('ul.got-items2 .fa.fa-check').remove();
      $('ul.got-items2 .fa.fa-times').remove();*/
     clickListener();
    });
}

function clickListener()
{
	$('ul.got-items2 li').on('click', function()
	{
		console.log($(this));
		$(this).remove();
		
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
