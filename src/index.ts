import express from 'express';
import compression from 'compression';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routers from './routers'; 

const app = express();

app.use(cors({
    credentials:true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server listening on port 3000")
})

app.use('/',routers());