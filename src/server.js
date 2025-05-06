import express from 'express';
import router from './router/index.js';


const server=express()
server.use(express.json())
server.use(router)
server.listen(4000,()=>console.log("Server ishlamoqda 4000 portda"))