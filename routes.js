const { query } = require('express');
const express = require('express');

const router = express.Router();

const app = express();

const mysqlConnection = require('./util/database');

//INSERT
router.post('/Insert', (request, response)=>{

    let {nome_marmita, valor_marmita, descricao} = request.body;

    mysqlConnection.query(
        'INSERT INTO tbl_cardapio (nome_marmita, valor_marmita, descricao) VALUES (?, ?, ?)',
                [nome_marmita, valor_marmita, descricao],
                (error, rows, fields)=>{
                    if (error) {
                                 
                        response.json({status : 'Erro ao inserir os dados!'})
    
                    } else {
    
                        response.json({status : 'Dados inseridos!'})
                                 
                    }
                });
                         

});

//ALTER

router.put('/Alter/:cod_marmita', (request, response)=>{

    let {nome_marmita, valor_marmita, descricao} = request.body;
    let { cod_marmita } = request.params;
 
    mysqlConnection.query(
        'UPDATE tbl_cardapio SET nome_marmita = ?, valor_marmita = ?, descricao = ? WHERE cod_marmita = ?',
        [nome_marmita, valor_marmita, descricao, cod_marmita],
        (error, rows, fields)=>{
            if (error) {
 
               response.json({status : 'Erro ao alterar os dados!'})
 
            } else {
 
               response.json({status : 'Dados alterados!'})
                
            }
        });

});

//LIST

router.get('/List', (request, response)=>{
    mysqlConnection.query('SELECT * FROM tbl_cardapio',
    (error, rows, fields)=>{
        if (error) {

          response.json({status: 'Erro ao selecionar dados!'});
            
        } else {
            response.json(rows);
            
        }
    });
});

//LISTID

router.get('/ListID/:cod_marmita', (request, response)=>{
 
    let {cod_marmita} = request.params;
 
    mysqlConnection.query('SELECT * FROM tbl_cardapio WHERE cod_marmita = ?',
                          [cod_marmita],
                          (error, rows, fields)=>{
                            if (error) {
 
                              response.json({status: 'ERRO AO SELECIONAR OS DADOS'});
                                
                            } else {
                                response.json(rows);
                                
                            }
                        });
 
});

//DELETE

router.delete('/Delete/:cod_marmita', (request, response)=>{
 
    let { cod_marmita } = request.params;
 
    mysqlConnection.query('DELETE FROM tbl_cardapio WHERE cod_marmita = ?',
                          [cod_marmita],
                          (error, rows, fields)=>{
                            if (error) {
                                console.log(error);
                            response.json({status : 'Erro ao excluir os dados!'})
 
                            } else {
 
                            response.json({status : 'Dados excluidos!'})
                                
                        }
 
    })
});



module.exports = router;


app.use(require('./routes'));