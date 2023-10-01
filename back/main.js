const express = require('express');
const {createServer} = require('node:http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);
const io = new Server(server,
  {
    cors: {
      origin: '*'
    }
  })

const port = 4000

const messages = [];
const whoTyping = [];


io.on('connection', socket => {
  console.log('a user connected');

  socket.on('addUser', data => { //triggers when user enters a username
    console.log(`a new user connected to chat, username: ${data}`)
  })
  socket.on('addMessage', data => { //triggers when user sending message
    console.log(`new message. username:${data.username} message:${data.text}`)
    messages.push(data)
    io.emit('addMessage', messages)
  })

  socket.on('setTyping', data => { //triggers when user typing a message
    if(!whoTyping.find(el => el === data)){
      whoTyping.push(data)
      console.log(`${whoTyping} typing a message`)
    }
    io.emit('messageTyping', whoTyping)
  })

  socket.on('unsetTyping', data => { //triggers when user stops typing a message
    whoTyping.splice(whoTyping.indexOf(data), 1)
    io.emit('messageTyping', whoTyping)
  })
});

io.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})