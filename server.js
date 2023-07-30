'use strict';


const express = require('express');
const server = express();
server.use(express.static('./'));

const PORT = process.env.PORT || 3000;

server.get('/test',(request,response)=>{
    console.log('test route');
     response.send('your test route is working')
 })

//  server.get('/people',(request,response)=>{
//     let family = [
//         {name:'Razan'},
//         {name:'Abdulrahman'},
//         {name:'Fatima'},
//         {name:'Hanaa'},
//         {name:'Husam'}
//     ];
//     response.json(family);
// })

server.listen(PORT,() => console.log(`Listening on port ${PORT}`));
