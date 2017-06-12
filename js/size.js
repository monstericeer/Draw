// 线条所有宽度
var lineWidth_arr = [1,4,8,12];

// 默认线条宽度
var line_width = lineWidth_arr[0];

var sizeBox = document.querySelector(".sizeBox");


sizeBox.addEventListener('touchstart',sizeBoxTouchStart,false);
sizeBox.addEventListener('touchend',sizeBoxTouchEnd,false);

function sizeBoxTouchStart() {
	$('.s0').css('opacity','0.9');
}

var sizeTog = true;
function sizeBoxTouchEnd() {
	$('.s0').css('opacity','1');
	
	if(sizeTog){
		sizeTog = !sizeTog;
		$('.s1').stop().animate({'top':'-4rem','left':'0rem','opacity': '1'},100)
		$('.s2').stop().animate({'top':'-3rem','left':'3rem','opacity': '1'},200)
		$('.s3').stop().animate({'top':'0rem','left':'4rem','opacity': '1'},300)
		$('.s4').stop().animate({'top':'3rem','left':'3rem','opacity': '1'},400)
	}else{
		sizeTog = !sizeTog;
		$('.s1').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},400)
		$('.s2').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},300)
		$('.s3').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},200)
		$('.s4').stop().animate({'top':'0rem','left':'0rem','opacity': '0'},100)
	}
}

for(var i=1;i<=lineWidth_arr.length;i++){
	(function(j){
		$('.s'+j).on('touchend',function(){
			line_width = lineWidth_arr[j-1];
			console.log(line_width)
		});
	})(i)
}
