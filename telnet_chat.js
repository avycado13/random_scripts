var net = require('net');
var chat_handle = "";
var message_to_send = "";
var users = [];
var server = net.createServer(function(c) { //'connection' listener
 console.log('server connected');
 c.on('end', function() {
   console.log('server disconnected');
   users = users.filter(user => user.id !== c.id);
 });
 c.write('hello\r\n');
 c.write(`Hello! What's your chat handle? `, function(answer){
   chat_handle = answer;
   
     users.push({id: c.id, handle: chat_handle});
     c.emit("message", `${chat_handle} has entered the chat`);
     chat();
   
     c.end();
  
 });

 function chat(){
   chat_interface.question(chat_handle + ": ", function(message){
     message_to_send = chat_handle + ': ' + message;
     server.broadcast(message_to_send);
     chat();
   });
 }

 function display_message(message){
   if(message_to_send != message){
     console.log(`\n \x1b[94m${message}\x1b[0m`);
     chat();
   }
 }

 c.on("data",(data)=>{
   console.log(data.toString())
   c.pipe(c);
 });
});

server.listen(8124, function() { //'listening' listener
 console.log('server bound');
});
