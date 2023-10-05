import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

// import { dirname } from "path";
// import { fileURLToPath } from 'node:url';
// const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const server = createServer(app);
const io = new Server(server);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname +"/index.html");
// })

app.get('/', (req, res) => {
  res.sendFile(new URL('./index.html', import.meta.url).pathname);
});

io.on('connection', (socket)=> {
    console.log('a user connected');
    socket.on('disconnect', ()=> {
        console.log('user disconnected');
    })
})

server.listen(3000, () => {
  console.log('server running at port 3000');
});