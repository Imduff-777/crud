//Segunda camada, controllers.

//pegando o tasksModel da primeira camada para usarmos as funções aqui
const tasksModel = require("../models/tasksModel")

//criando uma função na segunda camada chamada getAll
const getAll = async (req,res) => {
    const tasks = await tasksModel.getAll(); //criando uma variavel chamada tasks que guarda o retorno da função 1 da primeira camada.
    res.json(tasks); //exibindo o retorno da função da camada 1 atraves da variavel tasks
}

//criando uma função na segunda camada chamada createTask
const createTask = async (req,res) => {
    const createdTask = await tasksModel.createTask(req.body); //criando uma variavel chamada createdTask que executa e armazena retorno da função createTask da primeira camada.
    res.json(createdTask); //exibindo o retorno da função da camada 1 atraves da variavel createdTask
}

//exportando as funções da camada 2 para pegar na camada 3
module.exports = {
    getAll,
    createTask
}