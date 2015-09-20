 $(document).ready(function() {
    
	$('#click1').click(function() {
	  $('.backdrop, #click_p1').animate({'opacity':'.70'}, 100, 'linear');
	  $('#click_p1').animate({'opacity':'1.00'}, 100, 'linear');
	  $('#click_p1').animate({'margin-top':'0%'}, 100, 'linear');
	  $('.backdrop, #click_p1').css('display', 'block');
	});

	
	$('.backdrop').click(function() {
	  close_box1();
	});
	
	});
  
  function close_box1()
  {
    $('.backdrop, #click_p1').animate({'opacity':'0'}, 100, 'linear', function() {
	    $('#click_p1').animate({'margin-top':'-200%'}, 100, 'linear');
	    $('.backdrop, #click_p1').css('display', 'none');
	  });
  }


  $(document).ready(function() {
    
	$('#click2').click(function() {
	  $('.backdrop, #click_p2').animate({'opacity':'.70'}, 100, 'linear');
	  $('#click_p2').animate({'opacity':'1.00'}, 100, 'linear');
	  $('#click_p2').animate({'margin-top':'0%'}, 100, 'linear');
	  $('.backdrop, #click_p2').css('display', 'block');
	});

	
	$('.backdrop').click(function() {
	  close_box2();
	});
	
	});
  
  function close_box2()
  {
    $('.backdrop, #click_p2').animate({'opacity':'0'}, 100, 'linear', function() {
	    $('#click_p2').animate({'margin-top':'-200%'}, 100, 'linear');
	    $('.backdrop, #click_p2').css('display', 'none');
	  });
  }



  $(document).ready(function() {
    
	$('#click3').click(function() {
	  $('.backdrop, #click_p3').animate({'opacity':'.70'}, 100, 'linear');
	  $('#click_p3').animate({'opacity':'1.00'}, 100, 'linear');
	  $('#click_p3').animate({'margin-top':'0%'}, 100, 'linear');
	  $('.backdrop, #click_p3').css('display', 'block');
	});

	
	$('.backdrop').click(function() {
	  close_box3();
	});
	
	});
  
  function close_box3()
  {
    $('.backdrop, #click_p3').animate({'opacity':'0'}, 100, 'linear', function() {
	    $('#click_p3').animate({'margin-top':'-100%'}, 100, 'linear');
	    $('.backdrop, #click_p3').css('display', 'none');
	  });
  }



  