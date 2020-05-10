const io = require('socket.io')();
const r = require('rethinkdb');

r.connect({
  host: 'localhost',
  port: 32772,
  db: 'awesome_whiteboard',
}).then((connection) => {
  io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
      console.log('client is subscribing to timer with interval ', interval);
      r.table('timers')
      .changes()
      .run(connection) //execute the query
      .then((cursor) => {
        cursor.each((err, timerRow) => {
          client.emit('timer', timerRow.new_val.timestamp);
        })
        
      });
    });
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

