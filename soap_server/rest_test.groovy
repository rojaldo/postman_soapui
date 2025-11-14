// this is a Groovy script test for a REST service using SOAP UI

import groovy.json.JsonSlurper

// Comprobar que el código de estado HTTP es 200
assert messageExchange.responseStatusCode == 200 : "Código de estado no es 200, es ${messageExchange.responseStatusCode}"

// Obtener el contenido de la respuesta
def responseContent = messageExchange.responseContent

// Parsear el JSON de la respuesta
def json = new JsonSlurper().parseText(responseContent)

// Verificar que el JSON contiene los atributos response_code y results
assert json.containsKey('response_code') : "No se encontró el atributo 'response_code' en la respuesta"
assert json.containsKey('results') : "No se encontró el atributo 'results' en la respuesta"
assert json.results instanceof List : "'results' no es una lista"
assert json.results.size() > 0 : "'results' está vacío"
assert json.results[0].containsKey('question') : "No se encontró el atributo 'name' en el primer elemento de 'results'"