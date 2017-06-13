
$('.clearBox').on('touchstart',function(){
	$('.clear').css('opacity','0.8');
})

$('.clearBox').on('touchend',function(){
	$('.clear').css('opacity','1');
	
	colorIn();
	sizeIn();
	rubberIn();
	
	if(haveSomething){
		if(confirm('确认清空？')){
			cas.width = cas.width;
			cas.height = cas.height;
		}
	}
})
