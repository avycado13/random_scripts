var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });
  c.write('hello\r\n');
  c.on("data",(data)=>{
    console.log(data.toString())
    });
  c.pipe(c);
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});
