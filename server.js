var http = require('http').Server();
var io = require('socket.io')(http);
 
// Listen for incoming socket requests on the special “connection” event
io.on('connection', function(socket) {

  console.log('a user connected');

});
 
http.listen(10000, function(){
  console.log('listening on *:10000');
});

setInterval(function() {
  var ret = new Date().toString();
  io.emit('total', ret);
  console.log(ret);
}, 1000);

