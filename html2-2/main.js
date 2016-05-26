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

	var bx = 150;
	var by = 150;
	var bw = 200;
	var bh = 200;

	var barX = 100;
	var barY = 450;
	var barW = 100;
	var barH = 20;

	$('body').mousemove(function(event){
		// console.log(event.clientX;
		barX = event.clientX;
	});

	var f = function(){
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		ctx.rect(0,0,w,h);
		ctx.stroke();

		x = x + vx;
		y = y + vy;
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

		

		// if(50<x && x<150&&50<y&&y<150){
			// vx = -vx;
			// vy = -vy;

			// console.log("hit");
		// }
		var bx0 = bx + bw /2;
		var by0 = by + bh /2;
		var dx = x - bx0;
		var dy = y - by0;
		var theta = Math.atan2(dy,dx) * 180 / Math.PI;
		theta += 360;
		theta %= 360;
		// if(bx <x+r && x-r<bx + bw&&by<y&&y<by + bh){
			if(bx < x +r &&
				x -r< bx + bw &&
				by < y+r &&
				y -r< by + bh
				){
				console.log('hit');
				if(theta < 45 ||(135 < theta && theta <225) ||
					315<theta
					){
					vx = -vx;
				}else{
					vy = -vy;
				}
			}
		// }
		ctx.beginPath();
		ctx.rect(bx,by,bw,bh);
		ctx.stroke();

		ctx.beginPath();
		ctx.rect(barX,barY,barW,barH);
		ctx.stroke();

		// y = y + 1;
		// console.log(x);
		ctx.beginPath();
		ctx.arc(x,y,r,0,Math.PI*2,false);
		ctx.stroke();
		setTimeout(f,17);
	};
	f();

});