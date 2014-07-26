/*  
	Your Ecua Airlines
	Author: Alex Onate
*/

(function($){
	
	
	/*
	===============================================
      Tooltip ========================= 
	*/
	
	$('.masterTooltip').hover(function(){
		// Hover over code
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="toolTip"></p>')
		.text(title)
		.appendTo('body')
		.fadeIn('slow');
	}, function() {
		//Hover out code
		$(this).attr('title',$(this).data('tipText'));
		$('.toolTip').remove();
	}).mousemove(function(e) {
		var mousex = e.pageX + 20; //Get x coordinate
		var mousey = e.pageY + 10; //Get x coordinate
		$('.tooltip')
		.css({ top: mousey, left: mousex })
	});
	

   /*
	===============================================
      Login ========================= 
	*/
	
	$('#signinButton').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		console.log("This notifies you if the password is working");
		$.ajax({
			url:'xhr/login.php',
			type:'post',
			dataType: 'json',
			data: {
				username: user,
				password: pass
			},
			success:function(response){
				console.log("Test User");
				if(response.error) {
					alert(response.error);
				}else{
					window.location.assign('Admin.html')
				};
			}
		});
			
	
   /*
	===============================================
      Register========================= 
	*/
	
	$('#register').on('click',function(){
		var firstname= $('#first').val(),
		    lastname= $('#last').val(),
		    username= $('#userName').val(),
		    email= $('#email').val(),
		    password= $('#password').val();
		console.log(firstname+' '+lastname+' '+username+' '+email+' '+password);
		
		$.ajax({
			url:'xhr/register.php',
			type: 'post',
			dataType: 'json',
			data: {
			    firstname: firstname,
		        lastname: lastname,
		        username: username,
		        email: email,
		        password: password
		},
		
		success: function(response){
			if (response.error){
				alert(response.error);
			}else{
				window.location.assign('Admin.html');
			}
		}
	});
});

  /*
	===============================================
     Go to projects page========================= 
	*/

$('.projectsbtn').on('click',function(e) {
	e.preventDefault();
	window.location.assign('Projects.html');
});

/*
	===============================================
    Add Modal========================= 
	*/

$('.modalClick').on('click', function(event){
	event.preventDefault();
	$('#overlay')
	.fadeIn()
	.find('#modal')
	.fadeIn();
});

 $('.close').on('click', function(event){
	event.preventDefault();
	$('#overlay')
	.fadeOut()
	.find('#modal')
	.fadeOut();
}); 

/*
	===============================================
    Fading Status Option========================= 
	*/

$('.mystatus').mouseover(function() {
	$(this).fadeTo(100, .3);
});

$('.mystatus').mouseover(function() {
	$(this).fadeTo(100, .1);



/*
	===============================================
    Tabbed Accordion for projects========================= 
	*/
	
$('#tabs p').hide().eq(0).show();
$('#tabs p:not(:first)').hide();

$('#tabs-nav li').click(function(e) {
     e.preventDefault();
     $('#tabs p').hide();

$('#tabs-nav .current').removeClass("current");
   $(this).addClass('current');
   var clicked = $(this).find('a:first').attr('href');
   
   $('#tabs ' + clicked).fadeIn('fast');
}).eq(0).addClass('current');



 

 
	
	