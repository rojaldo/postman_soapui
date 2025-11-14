def response = messageExchange.getResponseContentAsXml()

// Parse the response using string manipulation for compatibility
def greeting = response.find(/<greeting>(.+?)<\/greeting>/) { match -> match[1] }

// Assert greeting value
assert greeting == "Hola, Clase!", "Expected greeting 'Hola, Clase!' but got '$greeting'"

// Verify SOAP structure
assert response.contains('<soap:Body>'), "SOAP Body not found"
assert response.contains('<tns:sayHelloResponse>'), "tns:sayHelloResponse not found"
assert response.contains('http://schemas.xmlsoap.org/soap/envelope/'), "SOAP envelope namespace not found"

// Log success
log.info "Test passed! Response contains correct SOAP structure and greeting message."
