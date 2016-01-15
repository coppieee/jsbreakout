jQuery(function($){
	'use strict';
	var canvas = document.getElementById('canvas');
	//var canvas = $('#canvas')[0];
	var ctx = canvas.getContext('2d');
	var width = canvas.width;
	var height = canvas.height;
	//ctx.rect(20,30,40,5);
	var status = 'title';
	ctx.font = "64px 'ＭＳ ゴシック'";
	ctx.fillText('ブロック崩し',40,200);
	ctx.font = "32px 'ＭＳ ゴシック'";
	ctx.fillText('Click to Start.',100,250);
	$('#canvas').click(function(){
		if(status === 'title' || status === 'end' || status === 'clear'){
			status = 'game';
			gameStart();
		}
	});
	var gameStart = function(){
		var x = 50;
		var y = 140;
		var vx = 6;
		var vy = 6;
		var r = 5;

		var blocks = [];
		for(var i=0;i<8;i++){
			blocks.push({x:20+ i * 60,y:50,w:50,h:10,isBroken:false});
			blocks.push({x:20+ i * 60,y:60,w:50,h:10,isBroken:false});
			blocks.push({x:20+ i * 60,y:70,w:50,h:10,isBroken:false});
			blocks.push({x:20+ i * 60,y:80,w:50,h:10,isBroken:false});
			blocks.push({x:20+ i * 60,y:90,w:50,h:10,isBroken:false});
		}
		var bar = {x:20,y:450,w:100,h:20};
		var count = 0;
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
			if(y - r <= 0){
				vy = -vy;
			}
			//ゲームオーバー判定
			if(y + r >= height){
				// console.log('game over');
				// ctx.fillStyle = 'blue';
				ctx.font = "64px 'ＭＳ ゴシック'";
				// ctx.textAlign = 'left';
				// ctx.textBaseline = 'top';
				ctx.fillText('Game Over',80, 180);
				status = 'end';
				return;
			}
			
			blocks.forEach(function(b){
				if(isHit(b,x,y) &&
					b.isBroken === false){
					b.isBroken = true;
					vy = -vy;
					count = count + 1;
					// $('#point').text(count);
				}
			});
			// console.log('count:'+count + 'blocks.length:'+blocks.length);
			if(count === blocks.length){
				ctx.clearRect(0,0,width,height);
				status = 'clear';
				ctx.font = "64px 'ＭＳ ゴシック'";
				ctx.fillText('Game Clear',80, 180);
				return;
			}
			
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
			
			ctx.font = "20px 'ＭＳ ゴシック'";
			ctx.fillText(count+'点',470,20);

			setTimeout(f,17);
		};
		f();
	};
});