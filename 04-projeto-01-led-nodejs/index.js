/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino - 10/12/2021
  Feira do Polo Digital de Manaus 2021
  Facilitador:       Orlewilson Bentes Maia
  Data Criacao:      08/12/2021
  Data Atualizacao:  08/12/2021
  Descricao:         Projeto 01 - Ligar/desligar LED com NodeJS
*/

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação (não se esquecer de mudar porta)
var board = new five.Board({port: "COM5"}); // porta definida (informar a porta confirme mostrado no seu Arduino IDE)

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   // placa pronta
   console.log("Placa Arduino pronta!");  
   
   // informando que utilizará Led e qual porta
   var led = new five.Led(13); 
    
   // liga/desliga a cada 1s
   led.blink(1000);  
});