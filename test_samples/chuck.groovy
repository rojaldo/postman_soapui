import groovy.json.JsonSlurper

def response = messageExchange.getResponseContent()
def jsonSlurper = new JsonSlurper()
def json = jsonSlurper.parseText(response)

// Validate required fields exist
assert json.containsKey('categories'), "Missing 'categories' field"
assert json.containsKey('created_at'), "Missing 'created_at' field"
assert json.containsKey('icon_url'), "Missing 'icon_url' field"
assert json.containsKey('id'), "Missing 'id' field"
assert json.containsKey('updated_at'), "Missing 'updated_at' field"
assert json.containsKey('url'), "Missing 'url' field"
assert json.containsKey('value'), "Missing 'value' field"

// Validate data types
assert json.categories instanceof List, "'categories' should be an array"
assert json.created_at instanceof String, "'created_at' should be a string"
assert json.icon_url instanceof String, "'icon_url' should be a string"
assert json.id instanceof String, "'id' should be a string"
assert json.updated_at instanceof String, "'updated_at' should be a string"
assert json.url instanceof String, "'url' should be a string"
assert json.value instanceof String, "'value' should be a string"

// Validate field values
assert json.icon_url.startsWith('https://'), "'icon_url' should be a valid HTTPS URL"
assert json.url.startsWith('https://'), "'url' should be a valid HTTPS URL"
assert json.id?.trim()?.length() > 0, "'id' should not be empty"
assert json.value?.trim()?.length() > 0, "'value' should not be empty"

// Log success
log.info "JSON Schema validation passed! All fields are present and valid."
