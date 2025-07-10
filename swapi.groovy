import groovy.json.JsonSlurper

// Cambia 'Request 1' por el nombre real de tu test step si es diferente
def testStepName = "People 1 - Request 1"
def testStep = context.testCase.testSteps[testStepName]

// Obtener y parsear la respuesta JSON
def response = testStep.getPropertyValue("Response")
def data = new JsonSlurper().parseText(response)

// Validación: debe ser una lista con al menos un elemento
assert data instanceof List : "La respuesta no es una lista"
assert data.size() > 0 : "La lista está vacía"

// Validación de cada personaje
data.eachWithIndex { item, idx ->
    assert item.id instanceof Integer : "id no es Integer en item ${idx}"
    assert item.name instanceof String : "name no es String en item ${idx}"
    assert item.gender instanceof String : "gender no es String en item ${idx}"
    assert item.skin_color instanceof String : "skin_color no es String en item ${idx}"
    assert item.hair_color instanceof String : "hair_color no es String en item ${idx}"
    assert item.height instanceof String : "height no es String en item ${idx}"
    // check that height il greater than 0 and less than 300
    assert item.height.toInteger() > 0 && item.height.toInteger() < 300
    assert item.eye_color instanceof String : "eye_color no es String en item ${idx}"
    assert item.mass instanceof String : "mass no es String en item ${idx}"
    assert item.homeworld instanceof Integer : "homeworld no es Integer en item ${idx}"
    assert item.birth_year instanceof String : "birth_year no es String en item ${idx}"
    assert item.species_id instanceof Integer : "species_id no es Integer en item ${idx}"
}
log.info "¡Validación completada correctamente!"
