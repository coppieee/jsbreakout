jQuery(function($){
	'use strict';
	// $('#go').click(function(){
	// 	var left = $('#left').val()-0;
	// 	var right = $('#right').val()-0;
	// 	$('#answer').val(left + right);
	// });

	var canvas = $('#canvas')[0];
	//var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var x = 50;
	var vx = 5;
	var y = 50;
	var vy = 3;
	var r = 20;
	var w = 500;
	var h = 500;


// 

	var f = function(){
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		ctx.rect(0,0,w,h);
		ctx.stroke();

		x = x + vx;

		if(x > 500){
			vx = -5;
		}else if(x < 0){
			vx = 5;

		}
		// x = x + vx;
		// y = y + vy;
		// if(w - r <= x){
		// 	vx = -vx;
		// }else if(x <= 0 + r){
		// 	vx = -vx;
		// }

		if(h - r <= y){
			vy = -vy;
		}else if(y <= 0 + r){
			vy = -vy;
		}

		if(50<x && x<150&&50<y&&y<150){
			vx = -vx;
			vy = -vy;
			console.log("hit");
		}

		ctx.beginPath();
		ctx.rect(50,50,100,100);
		ctx.stroke();


		console.log(x);
		// y = y + 1;
		ctx.beginPath();
		ctx.arc(x,y,r,0,Math.PI*2,false);
		ctx.stroke();
		setTimeout(f,17);
	};
	f();

});