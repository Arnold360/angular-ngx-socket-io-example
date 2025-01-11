 const io = require('socket.io')();
 let numero = 100;
 let textos = "cccc";
io.on('connection', client => {
  

  client.on('subscribeToServer', interval => {
    numero += 50;
    console.log(
      'client has subscribed to the socketio server. Updating at interval(ms): ',
      interval
    );
    setInterval(() => {
      let temp = +(10 + Math.random() * 10).toFixed(1);
      humidity = +(numero + Math.random() * 10).toFixed(1);
     
      client.emit('reading', [Date.now(), humidity, temp, textos]);
      }, interval);
  });


});

const port = 4001;
io.listen(port);
console.log('socketio server listening on port ', port);
