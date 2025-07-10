const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

// Lógica del servicio
const service = {
  HelloService: {
    HelloPort: {
      sayHello: function(args) {
        const name = args.name || 'Mundo';
        return { greeting: `Hola, ${name}!` };
      }
    }
  }
};

// Cargar el WSDL
const wsdlPath = path.join(__dirname, 'HelloService.wsdl');
const wsdlXml = fs.readFileSync(wsdlPath, 'utf8');

// Ruta SOAP
app.listen(PORT, function() {
  soap.listen(app, '/hello', service, wsdlXml);
  console.log(`Servidor SOAP corriendo en http://localhost:${PORT}/hello`);
});
