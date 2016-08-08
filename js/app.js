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

function clickinput()
{
	$('.inputname').on('click', function()
	{
		$('input').val('');
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
		
	  checkListener();
	  crossListener();
	  
	});
}

function checkListener()
{
  $('ul.need-items2 i.fa.fa-check').unbind("click");
  $('ul.need-items2 i.fa.fa-check').on('click', function(e)
    {
      var dadObj = $(this).parent()
      var dadHtml = dadObj[0].outerHTML;

      console.log(dadObj);

      dadObj.remove();
      
      $('ul.got-items2').append(dadHtml); 
      $('ul.got-items2 .fa.fa-check').remove();
      $('ul.got-items2 .fa.fa-times').remove();
     clickListener();
    });
}

function crossListener()
{
  $('ul.need-items2 i.fa.fa-times').unbind('click');
	$('ul.need-items2 i.fa.fa-times').on('click', function(e)
	{
		var cross = $(this).parent()
		cross.remove();
	});
}


function clickListener()
{
  $('ul.got-items2 li').unbind('click');
	$('ul.got-items2 li').on('click', function(e)
	{	
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
  	clickinput();

});
