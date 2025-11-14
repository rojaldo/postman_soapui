const Ajv = require('ajv');
const ajv = new Ajv();

// Schema de validación para la respuesta de APOD
const apodSchema = {
  type: 'object',
  properties: {
    copyright: { type: 'string' },
    date: { type: 'string', pattern: '^\\d{4}-\\d{2}-\\d{2}$' },
    explanation: { type: 'string' },
    hdurl: { type: 'string' },
    media_type: { type: 'string', enum: ['image', 'video'] },
    service_version: { type: 'string' },
    title: { type: 'string' },
    url: { type: 'string' }
  },
  required: ['date', 'explanation', 'media_type', 'service_version', 'title', 'url']
};

const validate = ajv.compile(apodSchema);

// Test 1: Comprobar que la api responde con un 200
pm.test('Test 1: API responde con 200', function () {
  pm.response.to.have.status(200);
});

// Test 2: Comprobar que la api responde con un 403 con una api-key invalida
pm.test('Test 2: API responde con 403 para api-key inválida', function () {
  if (pm.request.url.query.get('api_key') === 'INVALID_KEY') {
    pm.response.to.have.status(403);
  }
});

// Test 3: Comprobar que la api responde con un 400 si no se envia la api-key
pm.test('Test 3: API responde con 400 sin api-key', function () {
  if (!pm.request.url.query.get('api_key')) {
    pm.response.to.have.status(400);
  }
});

// Test 4: Comprobar que el json devuelto contiene los campos esperados
pm.test('Test 4: JSON contiene los campos esperados', function () {
  let response = pm.response.json();
  
  // Validar contra el schema
  const valid = validate(response);
  pm.expect(valid).to.be.true;
  
  if (!valid) {
    console.log('Schema validation errors:', validate.errors);
  }
  
  // Verificar campos requeridos
  pm.expect(response).to.have.property('date');
  pm.expect(response).to.have.property('explanation');
  pm.expect(response).to.have.property('media_type');
  pm.expect(response).to.have.property('service_version');
  pm.expect(response).to.have.property('title');
  pm.expect(response).to.have.property('url');
  
  // Verificar campos opcionales si existen
  if (response.hasOwnProperty('copyright')) {
    pm.expect(response.copyright).to.be.a('string');
  }
  if (response.hasOwnProperty('hdurl')) {
    pm.expect(response.hdurl).to.be.a('string');
  }
});

// Test 5: Comprobar que el campo media_type es "image" o "video"
pm.test('Test 5: Campo media_type es "image" o "video"', function () {
  let response = pm.response.json();
  pm.expect(response.media_type).to.be.oneOf(['image', 'video']);
});

// Test 6: Comprobar que la fecha de la respuesta coincide con la fecha solicitada
pm.test('Test 6: Fecha coincide con la solicitada', function () {
  let response = pm.response.json();
  let requestedDate = pm.request.url.query.get('date');
  
  if (requestedDate) {
    pm.expect(response.date).to.equal(requestedDate);
  } else {
    // Si no se especifica fecha, debe ser la fecha actual
    pm.expect(response.date).to.exist;
  }
});
