//Arquivo separado apenas para a inicialização / configurações do server

const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`);
})


