/**
 * SCRIPTS DE TESTS PARA POSTMAN - APOD API
 * 
 * INSTRUCCIONES DE USO:
 * Copia cada uno de estos scripts a la pestaña "Tests" de cada request en Postman
 * 
 * Cada sección corresponde a un test específico del spec
 */

// =====================================================
// TEST 1: Comprobar que la api responde con un 200
// =====================================================
// Pega este script en: GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY -> Tests

pm.test('✓ Respuesta con status 200', function () {
    pm.response.to.have.status(200);
});

pm.test('✓ Response time es menor a 5000ms', function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});

pm.test('✓ Response tiene header Content-Type', function () {
    pm.response.to.have.header('Content-Type');
});


// =====================================================
// TEST 2: Status 403 con API Key inválida
// =====================================================
// Pega este script en: GET https://api.nasa.gov/planetary/apod?api_key=INVALID_KEY -> Tests

pm.test('✓ Respuesta con status 403 (Forbidden)', function () {
    pm.response.to.have.status(403);
});

pm.test('✓ Response contiene mensaje de error', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('error');
});

pm.test('✓ Mensaje de error no está vacío', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.error).to.not.be.empty;
});


// =====================================================
// TEST 3: Status 400 sin API Key
// =====================================================
// Pega este script en: GET https://api.nasa.gov/planetary/apod -> Tests

pm.test('✓ Respuesta con status 400 (Bad Request)', function () {
    pm.response.to.have.status(400);
});

pm.test('✓ Response contiene mensaje de error', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('error');
});

pm.test('✓ Mensaje de error indica que falta la API key', function () {
    const jsonData = pm.response.json();
    const errorMsg = jsonData.error.toLowerCase();
    pm.expect(errorMsg).to.include.any.of(['api_key', 'api key', 'required', 'requerida']);
});


// =====================================================
// TEST 4: Campos esperados en la respuesta
// =====================================================
// Pega este script en: GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY -> Tests

pm.test('✓ Respuesta con status 200', function () {
    pm.response.to.have.status(200);
});

pm.test('✓ JSON response contiene todos los campos requeridos', function () {
    const jsonData = pm.response.json();
    
    // Campos obligatorios
    pm.expect(jsonData).to.have.property('date');
    pm.expect(jsonData).to.have.property('explanation');
    pm.expect(jsonData).to.have.property('media_type');
    pm.expect(jsonData).to.have.property('service_version');
    pm.expect(jsonData).to.have.property('title');
    pm.expect(jsonData).to.have.property('url');
});

pm.test('✓ Campos tienen tipos de dato correctos', function () {
    const jsonData = pm.response.json();
    
    pm.expect(jsonData.date).to.be.a('string');
    pm.expect(jsonData.explanation).to.be.a('string');
    pm.expect(jsonData.media_type).to.be.a('string');
    pm.expect(jsonData.service_version).to.be.a('string');
    pm.expect(jsonData.title).to.be.a('string');
    pm.expect(jsonData.url).to.be.a('string');
});

pm.test('✓ Campos no están vacíos', function () {
    const jsonData = pm.response.json();
    
    pm.expect(jsonData.date).to.not.be.empty;
    pm.expect(jsonData.explanation).to.not.be.empty;
    pm.expect(jsonData.media_type).to.not.be.empty;
    pm.expect(jsonData.title).to.not.be.empty;
    pm.expect(jsonData.url).to.not.be.empty;
});

pm.test('✓ Campos opcionales (copyright, hdurl) pueden existir', function () {
    const jsonData = pm.response.json();
    
    if (jsonData.copyright) {
        pm.expect(jsonData.copyright).to.be.a('string');
    }
    if (jsonData.hdurl) {
        pm.expect(jsonData.hdurl).to.be.a('string');
    }
});


// =====================================================
// TEST 5: Media Type es "image" o "video"
// =====================================================
// Pega este script en: GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY -> Tests

pm.test('✓ Respuesta con status 200', function () {
    pm.response.to.have.status(200);
});

pm.test('✓ Media Type es "image" o "video"', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.media_type).to.be.oneOf(['image', 'video']);
});

pm.test('✓ Media Type es un string válido', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.media_type).to.be.a('string');
    pm.expect(jsonData.media_type.length).to.be.above(0);
});


// =====================================================
// TEST 6: Fecha coincide con la solicitada
// =====================================================
// Pega este script en: GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2022-01-01 -> Tests

pm.test('✓ Respuesta con status 200', function () {
    pm.response.to.have.status(200);
});

pm.test('✓ Fecha en respuesta coincide con la solicitada (2022-01-01)', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.date).to.equal('2022-01-01');
});

pm.test('✓ Fecha está en formato correcto YYYY-MM-DD', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.date).to.match(/^\d{4}-\d{2}-\d{2}$/);
});


// =====================================================
// TESTS ADICIONALES DE VALIDACIÓN
// =====================================================
// Pega este script en cualquier GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY -> Tests

pm.test('✓ URL debe ser válida y comenzar con https://', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.url).to.match(/^https?:\/\/.+/);
});

pm.test('✓ Explicación debe tener al menos 10 caracteres', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.explanation.length).to.be.above(10);
});

pm.test('✓ Título debe tener al menos 3 caracteres', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.title.length).to.be.above(3);
});

pm.test('✓ Service version es un string', function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.service_version).to.be.a('string');
});

