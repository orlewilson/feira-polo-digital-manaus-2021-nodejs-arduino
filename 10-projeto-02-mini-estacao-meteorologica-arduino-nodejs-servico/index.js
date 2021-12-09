/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino - 10/12/2021
  Feira do Polo Digital de Manaus 2021
  Facilitador:       Orlewilson Bentes Maia
  Data Criacao:      08/12/2021
  Data Atualizacao:  08/12/2021
  Descricao:         Projeto 02 – Mini Estação Meteorológica - NodeJS + Servico
*/

// importando bibliotecas
// para trabalhar com páginas web
var app = require('express')();

// para saber ip da máquina
var ip = require("ip");  

// importando bibliotecas
// para acesso serial a placa Arduino
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

// abre a porta de comunicação (não se esquecer de mudar porta)
var port = new SerialPort('COM5', {
  baudRate: 9600
});

// variáveis

// formatador de conteúdo
const parser = port.pipe(new Readline({delimiter: '\r\n'}))

// armazena valores temperatura, umidade e luminosidade, respectivamente
var temp, umi, lumi;

// servidor escutando na porta 8080
app.listen(8080);
  
console.log("Digite no seu navegador para saber valor ");
console.log("temperatura: http://"+ ip.address() + ":8080/temp");
console.log("umidade: http://"+ ip.address() + ":8080/umi");
console.log("luminosidade: http://"+ ip.address() + ":8080/lumi");
console.log("todos: http://"+ ip.address() + ":8080/todos");

// lê o conteúdo da porta serial
parser.on('data', function (data) {

  // obtem o arquivo JSON e ler cada parâmetro
  try{
    var obj = JSON.parse(data);
    temp = obj.Temperatura;
    umi = obj.Umidade;
    lumi = obj.Luminosidade;
  } catch (e){
    temp = NaN;
    umi = NaN;
    lumi = NaN;
  }
});

// aguardando chamada /todos 
app.get('/todos', function (req, res) {
  // mostra no console a resposta ao cliente 
  console.log({temperatura: temp, umidade: umi, luminosidade: lumi});
  
  // responde ao cliente a solicitação
  res.json({temperatura: temp, umidade: umi, luminosidade: lumi});
});

// aguardando chamada /temp 
app.get('/temp', function (req, res) {
  // mostra no console a resposta ao cliente 
  console.log({temperatura: temp});
  
  // responde ao cliente a solicitação
  res.json({temperatura: temp});
});

// aguardando chamada /umi 
app.get('/umi', function (req, res) {

  // mostra no console a resposta ao cliente 
  console.log({umidade: umi});
  
  // responde ao cliente a solicitação
  res.json({umidade: umi});
});

// aguardando chamada /lumi 
app.get('/lumi', function (req, res) {
  // mostra no console a resposta ao cliente 
  console.log({luminosidade: lumi});
  
  // responde ao cliente a solicitação
  res.json({luminosidade: lumi});
});
