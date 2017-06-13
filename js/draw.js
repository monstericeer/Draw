var cas = document.querySelector("#cas");
if(window.innerWidth<800){
	cas.width = window.innerWidth * 0.94;
	cas.height = window.innerHeight * 0.8;
}else {
	cas.width = window.innerWidth * 0.7;
	cas.height = window.innerHeight * 0.9;
}

var haveSomething = false;
	
cas.addEventListener('touchstart',drawStart,false);
cas.addEventListener('touchmove',drawMove,false);
cas.addEventListener('touchend',drawEnd,false);
cas.addEventListener('touchleave',drawEnd,false);
cas.addEventListener('touchcancel',drawCancel,false);

	
//进行中的触摸事件
var touching = new Array();

function drawStart(evt) {
	evt.preventDefault();
	var el = document.querySelector("#cas");
	var ctx = el.getContext('2d');
	var touches = evt.changedTouches;
	
	for(var i=0;i<touches.length;i++){
		touching.push(touches[i]);
		// 颜色
    	ctx.fillStyle = line_color;
		//context.fillRect(x,y,width,height);
		ctx.fillRect(touches[i].pageX-el.offsetLeft-(line_width/2),touches[i].pageY-el.offsetTop-(line_width/2),line_width,line_width)
	}
	haveSomething = true;
}

function drawMove(evt) {
	evt.preventDefault();
	var el = document.querySelector("#cas");
	var ctx = el.getContext('2d');
	var touches = evt.changedTouches;
	
	// 宽度
	ctx.lineWidth = line_width;
	
	for(var i=0;i<touches.length;i++){
		var idx = ongoingTouchIndexById(touches[i].identifier);
		// 颜色
    	ctx.strokeStyle = line_color;
    	ctx.beginPath();
    	ctx.moveTo(touching[idx].pageX-el.offsetLeft, touching[idx].pageY-el.offsetTop);
    	ctx.lineTo(touches[i].pageX-el.offsetLeft, touches[i].pageY-el.offsetTop);
    	ctx.closePath();
    	ctx.stroke();
    	touching.splice(idx, 1, touches[i]);
	}
}

function drawEnd(evt){
	evt.preventDefault();
	var el = document.querySelector("#cas");
	var ctx = el.getContext('2d');
	var touches = evt.changedTouches;
	
	// 宽度
	ctx.lineWidth = line_width;
	
	for(var i=0;i<touches.length;i++){
		var idx = ongoingTouchIndexById(touches[i].identifier);

    	// 颜色
    	ctx.strokeStyle = line_color;
    	ctx.beginPath();
    	ctx.moveTo(touching[i].pageX-el.offsetLeft, touching[i].pageY-el.offsetTop);
    	ctx.lineTo(touches[i].pageX-el.offsetLeft, touches[i].pageY-el.offsetTop);
    	touching.splice(i, 1);
	}
}

//取消触摸事件
function drawCancel(evt) {
 	evt.preventDefault();
  	var touches = evt.changedTouches;
  
  	for (var i=0; i<touches.length; i++) {
    	touchng.splice(i, 1);
 	}
}

//查询进行中的触摸行为
function ongoingTouchIndexById(idToFind) {
  	for (var i=0; i<touching.length; i++) {
    	var id = touching[i].identifier;
    
    	if (id == idToFind) {
      		return i;
    	}
  	}
  	return -1;
}





