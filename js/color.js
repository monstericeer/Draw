// 线条所有颜色
var lineColor_arr = [
	'#000',					//黑
	'rgb(68, 124, 105)',	//绿
	'rgb(226, 121, 163)',	//粉
	'rgb(201, 74, 83)',		//红
	'rgb(101, 56, 125)',	//紫
	'rgb(233, 215, 142)',	//黄
	'rgb(86, 152, 196)',	//蓝
	'rgb(252,146,59)'		//橘
];

// 默认线条颜色
var line_color = lineColor_arr[0];

$('.colorBox').on('touchstart',function(){
	$('.s0').css('opacity','0.8');
})

var colorTog = true;
$('.colorBox').on('touchend',function(){
	$('.c0').css('opacity','1');
	
	if(colorTog){
		colorTog = !colorTog;
		colorOut();
		sizeIn();
	}else{
		colorTog = !colorTog;
		colorIn()
	}
});


for(var i=1;i<=lineColor_arr.length;i++){
	(function(j){
		$('.c'+j).on('touchend',function(){
			line_color = lineColor_arr[j-1];
		});
	})(i)
}


function colorOut(){
	$('.c1').stop().animate({'top':'-4rem','left':'0rem','opacity': '1'},100)
	$('.c2').stop().animate({'top':'-3rem','left':'3rem','opacity': '1'},200)
	$('.c3').stop().animate({'top':'0rem','left':'4rem','opacity': '1'},300)
	$('.c4').stop().animate({'top':'3rem','left':'3rem','opacity': '1'},400)
	$('.c5').stop().animate({'top':'4rem','left':'0rem','opacity': '1'},500)
	$('.c6').stop().animate({'top':'3rem','left':'-3rem','opacity': '1'},600)
	$('.c7').stop().animate({'top':'0rem','left':'-4rem','opacity': '1'},700)
	$('.c8').stop().animate({'top':'-3rem','left':'-3rem','opacity': '1'},800)
}
function colorIn(){
	$('.c1').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},800)
	$('.c2').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},700)
	$('.c3').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},600)
	$('.c4').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},500)
	$('.c5').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},400)
	$('.c6').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},300)
	$('.c7').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},200)
	$('.c8').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},100)
}
