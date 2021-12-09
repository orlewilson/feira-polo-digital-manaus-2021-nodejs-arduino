/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino - 10/12/2021
  Feira do Polo Digital de Manaus 2021
  Facilitador:       Orlewilson Bentes Maia
  Data Criacao:      08/12/2021
  Data Atualizacao:  08/12/2021
  Descricao:         Hello World NodeJS na página web
*/

// bibliotecas
var http = require ("http"); 	// servidor web
var ip = require("ip");			  // saber ip da máquina

// criando um servidor
http.createServer(function (req, res) {
    
    // informando o tipo de conteúdo
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // mostrar uma mensagem
    res.end('Hello World! Bem-vindo ao NodeJS!');

// porta na qual o servidor estará escutando
}).listen(8080); 

// mensagem no console
console.log("Digite no seu navegador http://"+ ip.address() + ":8080");