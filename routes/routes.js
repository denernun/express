'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    'status': new Date()
  });
});

const chave = 'X1BBD08-66EBB4-0714'; // <string>1BBD08-66EBB4-0714</string>
const validade = '01/12/2099'; // <string>01/12/2099</string>
const nome = 'SOFT CLASS SOFTWARE'; // <string>SOFT CLASS SOFTWARE</string>
const razao = 'SOFT CLASS SOFTWARE EIRELI - ME'; // <string>SOFT CLASS SOFTWARE EIRELI - ME</string>
const logradouro = 'R MARIA NICOLINI SUFREDINI,260'; // <string>R MARIA NICOLINI SUFREDINI,260</string>
const complemento = 'CASA 02'; // <string>CASA 02</string>
const bairro = 'JARDIM ESTRELA'; // <string>JARDIM ESTRELA</string>
const cidade = 'MAUA'; // <string>MAUA</string>
const uf = 'SP'; // <string>SP</string>
const cep = '09340-520'; // <string>09340-520</string>
const fone = '(11) 4519-4664'; // <string>(11) 4519-4664</string>
const fax = '(11) 4519-4664'; // <string>(11) 4519-4664</string>
const cnpj = '04.845.971/0001-93'; // <string>04.845.971/0001-93</string>
const ie = '442.193.840.116'; // <string>442.193.840.116</string>
const endereco = 'R MARIA NICOLINI SUFREDINI'; // <string>R MARIA NICOLINI SUFREDINI</string>
const numero = '260'; // <string>260</string>
const data = '11/09/2019'; // <string>11/09/2019</string>

module.exports = router;
