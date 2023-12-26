const connection = require("./connection")

const getAll = async () => { //esta função tem "async" para conseguirmos usar o await logo abaixo
    const tasks = await connection.execute("SELECT * FROM tasks") //Precisa-se esperar para retornar o SELECT * FROM por isso usamos o await
};

module.exports = {
    getAll
};