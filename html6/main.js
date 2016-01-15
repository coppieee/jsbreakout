jQuery(function($){
	'use strict';
	var canvas = document.getElementById('canvas');
	//var canvas = $('#canvas')[0];
	var ctx = canvas.getContext('2d');
	var width = canvas.width;
	var height = canvas.height;
	//ctx.rect(20,30,40,5);
	var x = 50;
	var y = 80;
	var vx = 3;
	var vy = 3;
	var r = 5;

	//isBroken: ture か false
	//var block = {x:20,y:50,w:50,h:10,isBroken:false};
	//var block2 = {x:20,y:100,w:50,h:10,isBroken:false};
	/*
	var xs = [1,2,5];
	var x = xs[0]; // x == 1
	var y = xs[1]; // y == 2
	var z = xs[2]; // z == 5
	xs[0] = 6;
	*/
	var blocks = [];
	for(var i=0;i<10;i++){
		//blocks[i] = {x:20+ i * 60,y:50,w:50,h:10,isBroken:false};
		blocks.push({x:20+ i * 60,y:50,w:50,h:10,isBroken:false});
		blocks.push({x:20+ i * 60,y:60,w:50,h:10,isBroken:false});
		blocks.push({x:20+ i * 60,y:70,w:50,h:10,isBroken:false});
		blocks.push({x:20+ i * 60,y:80,w:50,h:10,isBroken:false});
		blocks.push({x:20+ i * 60,y:90,w:50,h:10,isBroken:false});
	}
	var bar = {x:20,y:450,w:50,h:10};
	//ctx.arc(x,y,r,0,Math.PI*2,false);
	//ctx.stroke();

	$('canvas').mousemove(function(e){
		var canvasX = $('#canvas').position().left;
		bar.x = e.clientX - canvasX - bar.w/2;
	});
	var isHit = function(o,x,y){
		return o.x < x &&
			x < o.x + o.w &&
			o.y < y &&
			y < o.y + o.h;
	};
	var f = function(){
		x = x + vx;
		y = y + vy;
		if(x + r >= width){
			vx = -vx;
		}else if(x - r <= 0){
			vx = -vx;
		}
		// || OR,または
		// && AND,かつ
		if(y + r >= height || y - r <= 0){
			vy = -vy;
		}
		
		blocks.forEach(function(b){
			if(isHit(b,x,y) &&
				b.isBroken === false){
				b.isBroken = true;
				vy = -vy;
			}
		});
		
		if(isHit(bar,x,y)){
			vy = -vy;
			bar.w = bar.w-1;
		}
		
		//描画範囲クリア
		ctx.clearRect(0,0,width,height);
		
		//枠を描く
		ctx.beginPath();
		ctx.rect(0,0,width,height);
		ctx.stroke();
		
		
		//ブロックを描く
		blocks.forEach(function(b){
			if(b.isBroken === false){
				ctx.beginPath();
				ctx.rect(b.x,b.y,b.w,b.h);
				ctx.stroke();
			}
		});
		
		//バーを描く
		ctx.beginPath();
		ctx.rect(bar.x,bar.y,bar.w,bar.h);
		ctx.stroke();
		
		//円を描く
		ctx.beginPath();
		ctx.arc(x,y,10,0,Math.PI*2,false);
		ctx.stroke();
		
		setTimeout(f,17);
	};
	f();
});