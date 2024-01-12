//primeira camada, models.

//pegando o connection la de connection.js para podermos mexer no banco de dados(inserir, puxar, mudar, excluir, etc...)
const connection = require("./connection")


// função 1, pegar todas as tasks no banco de dados.
const getAll = async () => { //esta função tem "async" para conseguirmos usar o await logo abaixo.
    const tasks = await connection.execute("SELECT * FROM tasks") //Precisa-se esperar para retornar o SELECT * FROM por isso usamos o await.
    return tasks[0];
};

//função 2, cria tasks para o banco de dados
const createTask = async (task) => { //ira receber um parametro, esse parametro o usuario que ira definir através de um input, que enviara um json para o server.
    const { title } = task; // estou falando que quero apenas o "title" do json "task" que vira do user.
    const date = new Date(Date.now()).toUTCString(); //criando uma data baseada em milisegundos extraidos do Date.now() e convertendo em UTC.

    //const create = await connection.execute("INSERT INTO tasks(title, status, create_at) VALUES (?, ?, ?)", [title, "pendente", date]);
    const create = await connection.execute(`INSERT INTO tasks(title, status, create_at) VALUES ("${title}", "Pendente", "${date}")`);
    //acima estamos criado uma variavel chamada create que vai armazenar a função de inserir os valores no banco de dados, ela esta inserindo os valores "title", "status", "create_at"
    return create[0].insertId;
    //acima estamos retornando para esta função o create[0], apenas a primeira posição do array, pois a segunda é o buffer.
}

const deleteTask = async (id) => {
    const delet = await connection.execute(`DELETE FROM tasks WHERE id = ${id}`);
    return delet;
}

//função de fazer atualização nas tasks no db
const updateTask = async (id, task) => {
    const { title, status } = task;

    const [updateTask] = await connection.execute(`UPDATE tasks SET title = "${title}", status = "${status}" WHERE id = "${id}"`);
    return updateTask;
}



//exportando as funções da camada 1 para pegar na camada 2
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};