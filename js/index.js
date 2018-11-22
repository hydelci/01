$(function(){
	

	$('.gnb li').on('click',function(){
		var ht = $(window).height();//브라우저의 높이값 저장 = section의 높이값
		var idx = $(this).index();//각각의 메뉴의 인덱스 번호를 저장

		var sectionT = ht * idx;//현재 박스의 스크롤 위치값

		$('html,body').stop().animate({'scrollTop':sectionT},1000);
	});

	$('.click').mouseenter(function(){
		$(this).css('opacity','.5');			
	});
	$('.click').mouseleave(function(){
		$(this).css('opacity','0');
	});

});