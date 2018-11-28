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


//모바일 gnb 슬라이드
$('.m_icon1').click(function(){
	$('.gnb').slideToggle();
});