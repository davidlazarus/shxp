/*LIST YOUR FUNCTIONS HERE BRUH*/

var dropdSelectValsymbol;
var dropdSelectVal;
var dropdShow;
var totalinput;
var textinput;
var yes = $('.yes').html();
var no = $('.no').html();
var gotitem;


$('#yes').hide();
$('.no').hide();

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
			alert("Please Enter a Name & Pick a Category");
		}
		else
		{
			$('ul.need-items2').append(yes+no+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+totalinput+"<br/>");
			yes = $(this).attr('id', 'newyes');
		}

		});
}

function gotem()
{	/* Its this part that I can't figure out - how to target the 'yes' (check) element that i've appended just above*/
	$('ul.need-items2 i#newyes').on('click', function()
	{
		gotitem = $(this).parent();
		console.log(gotitem);
		$('ul.got-items2').append(gotitem);
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
  	gotem();
  	refresh();

});










