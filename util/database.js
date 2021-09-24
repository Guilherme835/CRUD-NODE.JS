const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'SaborCaseiro'
});

mysqlConnection.connect( (error)=>{
    if (error){
        console.log(`Erro no banco de dados: ${error}`)
    } else {
        console.log('Conexão efetuada com sucesso')
    }
});

module.exports = mysqlConnection;