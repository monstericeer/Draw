
// 橡皮擦所有宽度
var rubberWidth_arr = [4,8,12];

// 橡皮擦默认宽度
var rubberWidth = rubberWidth_arr[0];

var isRubber = false;

$('.rubberBox').on('touchstart',function(){
	$('.r0').css('opacity','0.8');
})

var rubberTog = true;
$('.rubberBox').on('touchend',function(){
	$('.r0').css('opacity','1');
	
	if(rubberTog){
		rubberTog = !rubberTog;
		rubberOut();
		colorIn();
		sizeIn();
	}else{
		rubberTog = !rubberTog;
		rubberIn()
	}
});


for(var i=1;i<=rubberWidth_arr.length;i++){
	(function(j){
		$('.r'+j).on('touchend',function(){
			isRubber = true;
			rubberWidth = rubberWidth_arr[j-1];
			line_width = rubberWidth;
			line_color = "#FFF";
		});
	})(i)
}

function rubberOut(){
	$('.r1').stop().animate({'top':'-3rem','left':'-3rem','opacity': '1'},200)
	$('.r2').stop().animate({'top':'-4rem','left':'0rem','opacity': '1'},350)
	$('.r3').stop().animate({'top':'-3rem','left':'3rem','opacity': '1'},450)
}
function rubberIn(){
	$('.r1').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},400)
	$('.r2').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},300)
	$('.r3').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},200)
}

