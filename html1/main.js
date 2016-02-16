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
	// //円を書く
	// ctx.beginPath();
	// var x = 70;
	// var y = 250;
	// // ctx.arc(x,250,20,0,Math.PI*2,false);
	// // ctx.stroke();

	// // 円を10回書く
	// for(var i=0;i<10;i++){
	// 	x = x + 10;
	// 	ctx.beginPath();
	// 	ctx.arc(x,250,20,0,Math.PI*2,false);
	// 	ctx.stroke();
	// }

	// //四角
	// ctx.clearRect(0,0,500,500);
	

	// // 1000ミリ秒ごとに'hello'を表示
	// var g = function(){
	// 	console.log('hello');
	// 	setTimeout(g,1000);
	// };
	// g();

	var x = 50;
	var f = function(){
		ctx.clearRect(0,0,500,500);
		x = x + 1;
		ctx.beginPath();
		ctx.arc(x,50,20,0,Math.PI*2,false);
		ctx.stroke();
		setTimeout(f,17);
	};
	f();
	
	var sum = function(x,y){
		return x + y;
	};
	// var ans = sum(1,3);
	// var ans2 = sum('HEllo','world');
	// console.log(ans2);

	// 	x = x + 1;
	// 	// y = y - 1;
	// 	ctx.beginPath();
	// 	ctx.arc(x,y,20,0,Math.PI*2,false);
	// 	ctx.stroke();

	// 	setTimeout(f,17);
	// };
	// // }
	// f();
	// var g = function(){
	// 	console.log(Math.random());
	// 	setTimeout(g,100);
	// };
	// g();
});