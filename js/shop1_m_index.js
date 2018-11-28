/*
소메뉴 전체 슬라이드 다운
$('header .gnb').mouseenter(function(){
	$('.gnb ul').stop().slideDown();
});
$('header .gnb').mouseleave(function(){
	$('.gnb ul').stop().slideUp();
});
*/

	var userAgent = navigator.userAgent;
	//alert(userAgent);

 //스마트폰 구분	
 var smartPhones = ['iphone', 'ipad', 'android'];
 for(var i in smartPhones) {
 	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
 		alert('스마트폰 페이지로 이동합니다.');
 		location = 'https://hydelci.github.io/01/html/shop1_m_index.html';//이동하고자 하는 주소 작성 (기터브 내주소)
 	}
 }

//웹 nav 항목별 슬라이드
$('.title').mouseenter(function(){
	$(this).next().stop().slideDown();
});
$('.gnb>li').mouseleave(function(){
	$('.subMenu').stop().slideUp();
});


//모바일 gnb 슬라이드
$('.m_icon1').click(function(){
	$('.gnb').slideToggle();
});