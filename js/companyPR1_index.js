// 메인 이미지 슬라이드
$('.mainG').vegas({
	slides: [
	   { src: '../images/companyPR1/main1.jpg' },
	   { src: '../images/companyPR1/main2.jpg' },
	   { src: '../images/companyPR1/main3.jpg' }
	],
		overlay: '../images/companyPR1/01.png',
		animation: 'fade',		    
		timer:false//하단에 로딩선 보이지 않음.
});	

// 대메뉴 border-bottom
$('.gnb>li>a').mouseenter(function(){
	$(this).css({'border-bottom':'5px solid red'});
});
$('.gnb>li>a').mouseleave(function(){
	$(this).css({'border-bottom':'none'});
});

// 소메뉴 슬라이드 다운
$('header .gnb').mouseenter(function(){
	$('.gnb ul').stop().slideDown();
});
$('header .gnb').mouseleave(function(){
	$('.gnb ul').stop().slideUp();
});	

$('.event').click(function(){
	$(this).css('display','none');
});
