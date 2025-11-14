import groovy.json.JsonSlurper

// Cambia 'Request 1' por el nombre real de tu test step si es diferente
def response = context.testCase.testSteps["GET - get cards"].getPropertyValue("Response")
def json = new JsonSlurper().parseText(response)

// def statusCode = context.testCase.testSteps["GET - get cards"].getPropertyValue("StatusCode")
// assert statusCode == 200


// Validación general
assert json.response_code == 0
assert json.results instanceof List
assert json.results.size() == 10

// Validación de cada pregunta
json.results.each { item ->
    assert item.type in ['multiple', 'boolean']
    assert item.difficulty in ['easy', 'medium', 'hard']
    assert item.category instanceof String
    assert item.category.length() > 0
    assert item.question instanceof String
    assert item.question.length() > 0
    assert item.correct_answer instanceof String
    assert item.correct_answer.length() > 0
    assert item.incorrect_answers instanceof List
    if (item.type == 'multiple') {
        assert item.incorrect_answers.size() == 3
    } else if (item.type == 'boolean') {
        assert item.incorrect_answers.size() == 1
        assert item.incorrect_answers[0] in ['True', 'False']
    }
}
