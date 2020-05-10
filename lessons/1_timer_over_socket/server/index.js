const io = require('socket.io')();

io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    console.log('client is suscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = 8000;
io.listen(8000);
console.log('listening on port ', port);
