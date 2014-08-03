/*  
	Your Ecua Airlines
	Author: Alex Onate
*/

(function($){
	
	/* 
	===============================================
      login ========================= 
	*/
	 $('#signinButton').click(function(){
		 var user = $('#user').val();
		 var pass = $('#pass').val();
		 console.log("This notifies you if the password is working");
		    $.ajax({
				url:'xhr/login.php',
				type: 'post',  //Had a semi colon here instead of colon
				dataType: 'json',
				data: {
					username: user,
					password: pass
				},
				success:function(response){  //Forgot closing parethesis.
					console.log("Test User");
					if (response.error){
					   alert(response.error);
				}else{
					window.location.assign('admin.html')
		   };
	    }
	 });
});
	
	/*
	===============================================
      Logout ========================= 
	*/
	$('#logOut').click(function(e){
		e.preventDefault;
		$.get('xhr/logout.php', function(){  //missing comma here
			window.location.assign('index.html');
		})
	});
	
	
	
	
	
	/*
	===============================================
      Tooltip ========================= 
	*/
	
	$('.masterTooltip').hover(function(){
		// Hover over code
		var title = $(this).attr("title");
		$(this)
		    .data('tipText', title)
			.removeAttr("title");
			
		$('<p class="toolTip"></p>')
		  .text(title)
		  .appendTo('body')
	    	.fadeIn('slow');
	}, function() {
		//Hover out code
		$(this).attr('title',$(this).data('tipText'));
		$('.toolTip').remove();
	}).mousemove(function(e) {
		$('.tooltip')
		.css("top", (e.pageY - 10) + "px") //Get x coordinate
		.css("left", (e.pageY + 20) + "px"); //Get x coordinate
		
		
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
				window.location.assign('admin.html');
			}
		}
	});
});

 /*
	===============================================
     Display Username========================= 
	*/
$.getJSON("xhr/check_login.php", function(data){
	   console.log(data);
	   $.each(data, function(key, val){
		   console.log(val.first_name);
		   $(".useid").html("Welcome User: "+ val.first_name);
	   })
});
 
 /*
	===============================================
     Go to profile page========================= 
	*/

$('.profilebtn').on('click',function(e) {
	e.preventDefault();
	window.location.assign('profile.html');
});


  /*
	===============================================
     Go to projects page========================= 
	*/

$('.projectsbtn').on('click',function(e) {
	e.preventDefault();
	window.location.assign('projects.html');
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
     Go to projects page========================= 
	*/

$('.addbtn').on('click',function(e) {
	e.preventDefault();
	window.location.assign('add.html');
});

 /*
	===============================================
     Go to projects page========================= 
	*/

$('.dashboard').on('click',function(e) {
	e.preventDefault();
	window.location.assign('admin.html');
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
}); 

/*
	===============================================
    New Project========================= 
	*/

$('#addbutton').on('click', function() {
	
	var projName = $('#projectName').val(),
	projDesc = $('#projectDescription').val(),
	projDue = $('#projectDueDate').val(),
	status = $('input[name = "status"]:checked').prop("id");
	
	$.ajax({
		url: "xhr/new_project.php",
		type: "post",
		dataType: "json",
		data: {
			projectName: projName,
			projectDescription: projDesc,
			dueDate: projDue,
			status: status
		},
		success: function(response) {
			 console.log('Testing for success');
			 
			 if(response.error) {
				  alert(response.error);
			 }else {
				 window.location.assign("projects.html");
			 };
		}
	});
});

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

})(jQuery)