/*LIST YOUR FUNCTIONS HERE BRUH*/

function listenForTypedText()
 {
	$("input").keyup(function()
	{
		var value = $( this ).val();
     	$("ul.need-items").append(value);
	});
 }

function ShowSubMenu()
 {
	$('.sub-menu').hide();
    $('.item-cat').click(function(){
        $('.sub-menu').slideToggle();
        $('.sub-menu').css('opacity','1.0');
    });
 
}

function ClickCat1()
{
	$('.item-cat1').hide();
	$('.fresh').click(function(){
		$('.item-cat').hide();
		$('.item-cat2').hide();
		$('.item-cat3').hide();
		$('.item-cat4').hide();
		$('.item-cat1').show();
	});
	
}

function ClickCat2()
{
	$('.item-cat2').hide();
	$('.meat').click(function(){
		$('.item-cat').hide();
		$('.item-cat1').hide();
		$('.item-cat3').hide();
		$('.item-cat4').hide();
		$('.item-cat2').show();
	});
	
}

function ClickCat3()
{
	$('.item-cat3').hide();
	$('.canned').click(function(){
		$('.item-cat').hide();
		$('.item-cat1').hide();
		$('.item-cat2').hide();
		$('.item-cat4').hide();
		$('.item-cat3').show();
	});
	
}

function ClickCat4()
{
	$('.item-cat4').hide();
	$('.other').click(function(){
		$('.item-cat').hide();
		$('.item-cat1').hide();
		$('.item-cat2').hide();
		$('.item-cat3').hide();
		$('.item-cat4').show();
	});
	
}

function ShowSubMenu1()
 {
	$('.sub-menu').hide();
    $('.item-cat1, .item-cat2, .item-cat3, .item-cat4').click(function(){
        $('.sub-menu').slideToggle();
        $('.sub-menu').css('opacity','1.0');
    });
 
}

var dropdSelectVal;

function ListenDropdown() 
{
	 $('.item-cat').on('change', function(){ 
	 	console.log(this.value) 
	 	dropdSelectVal = this.value;
	 });
}

function listenPlus()
{
  $(".plus").on('click', function()
  {
    console.log("PLUS clicked");
    console.log(dropdSelectVal);
  });
}



/*LIST OF FUNCTIONS THAT ARE BEING EXECUTED*/

$(document).ready(function() {

	listenForTypedText();
	ShowSubMenu();
	ClickCat1();
	ClickCat2();
	ClickCat3();
	ClickCat4();
	ShowSubMenu1();
	ListenDropdown;
	listenPlus;

});




