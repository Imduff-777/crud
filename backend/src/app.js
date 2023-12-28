//arquivo separado para o app

const express = require("express");
const app = express();
const router = require("./router") //pegando o router la do arquivo router

app.use(express.json());
app.use(router) //falando que o app vai usar as rotas que estão em router.js


module.exports = app; 