/*
소메뉴 전체 슬라이드 다운
$('header .gnb').mouseenter(function(){
	$('.gnb ul').stop().slideDown();
});
$('header .gnb').mouseleave(function(){
	$('.gnb ul').stop().slideUp();
});
*/


//웹 nav 항목별 슬라이드
$('.title').mouseenter(function(){
	$(this).next().stop().slideDown();
});
$('.gnb>li').mouseleave(function(){
	$('.subMenu').stop().slideUp();
});


//자동슬라이드
function slideimg(){//이름을 가진 선언함수
		var pos = $('.imgG').css("margin-left");//css매서드를 통해 얻은 값은 문자열로 인식.
		pos = parseInt(pos);//숫자열로 변경.parseInt

		$('.imgG').stop().animate({marginLeft: pos-1200 },function(){
			$('.imgG').css('margin-left',0);
			$('.imgG>li').first().appendTo('.imgG');
		});
	}
	
	var auto = setInterval(slideimg,5000);

	//마우스를 버튼 위에 올리면 자동 슬라이드 멈춤
	$('.slide').mouseenter(function(){
		clearInterval(auto);
	});
	//마우스를 버튼 위에 내리면 자동 슬라이드 실행
	$('.slide').mouseleave(function(){
		auto = setInterval(slideimg,5000);//지정된 시간마다 실행.
	});

	var $btn = $(".btn>li");

	$btn.click(function(){
		var idx = $(this).index();//요소가 가진 인덱스 번호 탐색
		$(".imgG").animate({ marginLeft:-1200 * idx });
	});	


//plant 마우스 이벤트
$('.plant li').mouseenter(function(){
	$(this).find('.cost').css('opacity','1');
});
$('.plant li').mouseleave(function(){
	$('.cost').css('opacity','0');
});

//interior 마우스 이벤트		 
$('.interior li').mouseenter(function(){
	$(this).css('opacity','.5');
});
$('.interior li').mouseleave(function(){
	$(this).css('opacity','1');
});


//웹 스크롤시 shopName 숨김
$(window).scroll(function(){//브라우저에서 스크롤 했을 때
	//브라우저에서 스크롤한 만큼의 거리
	var winTop = $(window).scrollTop();
	console.log(winTop);
	var zone = $('.btn').offset().top; /*- $(window).height()-100;*/
	// var zone = $(window).height/2;

	if(zone < winTop){
		$('.shopName').hide();
		$('header').css('height','65');
	} else{
		//큐에 남아있는 효과를 지우고 현재 진행만 실행
		$('.shopName').show();
		$('header').css('height','245');
	}									
});


//모바일 gnb 슬라이드
$('.m_icon1').click(function(){
	$('.gnb').slideToggle();
});

	var userAgent = navigator.userAgent;
	//alert(userAgent);

 //스마트폰 구분	
 var smartPhones = ['iphone', 'ipad', 'android'];
 for(var i in smartPhones) {
 	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
 		alert('스마트폰 페이지로 이동합니다.').stop();
 		location = 'https://hydelci.github.io/01/html/shop1_m_index.html';//이동하고자 하는 주소 작성 (기터브 내주소)
 	}
 }