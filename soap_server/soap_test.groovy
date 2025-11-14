// Importar XmlSlurper explícitamente
import groovy.util.XmlSlurper

// Obtener la respuesta del request anterior
def response = messageExchange.response.responseContent

// Parsear la respuesta XML
def xml = new XmlSlurper().parseText(response)

// Definir los namespaces
xml.declareNamespace(soap: "http://schemas.xmlsoap.org/soap/envelope/")
xml.declareNamespace(tns: "http://example.com/hello")

// Validar la estructura y contenido de la respuesta
try {
    // Verificar que existe el envelope SOAP
    assert xml.name() == "Envelope"
    
    // Verificar que existe el Body
    def body = xml.Body
    assert body.size() > 0
    
    // Verificar que existe sayHelloResponse
    def sayHelloResponse = body.sayHelloResponse
    assert sayHelloResponse.size() > 0
    
    // Verificar el contenido del greeting
    def greeting = sayHelloResponse.greeting.text()
    assert greeting == "Hola, Clase!"
    
    log.info("✓ Test PASSED: La respuesta contiene el greeting esperado: '$greeting'")
    
} catch (AssertionError e) {
    log.error("✗ Test FAILED: " + e.message)
    throw e
} catch (Exception e) {
    log.error("✗ Error al procesar la respuesta: " + e.message)
    throw e
}

// Validación adicional de namespaces (opcional)
def envelope = new XmlSlurper().parseText(response)
// assert envelope.@'xmlns:soap' == "http://schemas.xmlsoap.org/soap/envelope/"
// assert envelope.@'xmlns:tns' == "http://example.com/hello"

// log envelope
log.info("Envelope XML: \n" + response)


log.info("✓ Todos los tests pasaron correctamente")