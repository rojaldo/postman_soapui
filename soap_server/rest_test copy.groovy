import groovy.json.JsonSlurper
import java.time.LocalDate
import java.time.format.DateTimeFormatter

// Obtener la respuesta JSON
def jsonResponse = new JsonSlurper().parseText(messageExchange.responseContent)

// Obtener la request desde messageExchange
def httpRequest = messageExchange.modelItem.testStep.httpRequest
def requestDate = httpRequest.params.getPropertyValue("date")

log.info("Fecha enviada en la query: ${requestDate}")

// Obtener el valor del campo 'date' en la respuesta
def responseDate = jsonResponse.date

log.info("Fecha recibida en la respuesta: ${responseDate}")

// Normalizar ambas fechas al formato ISO (yyyy-MM-dd)
def normalizeDate = { dateString ->
    // Parsear la fecha independientemente del formato
    def parts = dateString.split('-')
    def year = parts[0]
    def month = parts[1].padLeft(2, '0')
    def day = parts[2].padLeft(2, '0')
    return "${year}-${month}-${day}"
}

def normalizedRequestDate = normalizeDate(requestDate)
def normalizedResponseDate = normalizeDate(responseDate)

log.info("Fecha normalizada enviada: ${normalizedRequestDate}")
log.info("Fecha normalizada recibida: ${normalizedResponseDate}")

// Comparar las fechas normalizadas
assert normalizedResponseDate == normalizedRequestDate : "El campo 'date' de la respuesta (${responseDate}) no coincide con el parámetro enviado (${requestDate})"
