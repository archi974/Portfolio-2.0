import http from "http";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({path: '.env'});

app.set('port', process.env.PORT);
const serveur = http.createServer(app)
serveur.listen(process.env.PORT, () => {
    console.log("The server is listening");
});