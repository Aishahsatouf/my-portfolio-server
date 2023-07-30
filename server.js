'use strict';


const express = require('express');
const server = express();
server.use(express.static('./public'));

const PORT = process.env.PORT || 3000;

server.get('/test',(request,response)=>{
  console.log('test route');
  response.send('your test route is working')
})

server.listen(PORT,() => console.log(`Listening on port ${PORT}`));
