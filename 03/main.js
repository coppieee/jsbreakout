jQuery(function($){
	'use strict';
	var canvas = document.getElementById('canvas');
	//var canvas = $('#canvas')[0];
	var ctx = canvas.getContext('2d');
	//ctx.rect(20,30,40,5);
	var x = 50;
	var y = 80;
	var vx = 1;
	var vy = 1;
	var r = 5;
	var block = {x:20,y:50,w:50,h:10};
	
	ctx.arc(x,y,r,0,Math.PI*2,false);
	ctx.stroke();
	
	var f = function(){
		x = x + vx;
		y = y + vy;
		if(x + r >= 140){
			vx = -vx;
		}else if(x - r <= 0){
			vx = -vx;
		}
		// || OR,または
		// && AND,かつ
		if(y + r >= 140 || y - r <= 0){
			vy = -vy;
		}
		
		if(block.x < x &&
			x < block.x + block.w &&
			block.y < y &&
			y < block.y + block.h
		){
			console.log('hit!');
		}
		//描画範囲クリア
		ctx.clearRect(0,0,500,500);
		
		//枠を描く
		ctx.beginPath();
		ctx.rect(0,0,140,140);
		ctx.stroke();
		
		//ブロックを描く
		ctx.beginPath();
		ctx.rect(block.x,block.y,block.w,block.h);
		ctx.stroke();
		
		//円を描く
		ctx.beginPath();
		ctx.arc(x,y,10,0,Math.PI*2,false);
		ctx.stroke();
		
		setTimeout(f,17);
	};
	f();
});