// グローバル変数
//var socket = io.connect('http://aosho235.com:10000', { path: '/abc/hoge.io' });
var socket = io.connect('http://aosho235.com:10000');
 
// 初期化
$(function() {
  console.log("main.js start");

  socket.on('total', function(data){
    console.log("get total", data);
    $('#result').html(data);
  });  

  //setInterval(function() {
    socket.emit('total', {});   
  //}, 2000);

  console.log("main.js end");
});
