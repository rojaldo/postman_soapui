# Curso: Postman, REST, SOAP y SoapUI

Un curso completo sobre API testing y desarrollo de servicios web utilizando las herramientas más populares: Postman, SoapUI y conceptos fundamentales de REST y SOAP.

## Tabla de Contenidos

- [Curso: Postman, REST, SOAP y SoapUI](#curso-postman-rest-soap-y-soapui)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
    - [1. Descargar Postman](#1-descargar-postman)
    - [2. Descargar SoapUI](#2-descargar-soapui)
    - [3. Clonar este repositorio](#3-clonar-este-repositorio)
  - [Estructura del Curso](#estructura-del-curso)
  - [Temas Cubiertos](#temas-cubiertos)
    - [REST API](#rest-api)
    - [SOAP Web Services](#soap-web-services)
    - [Postman](#postman)
    - [SoapUI](#soapui)
  - [Herramientas Utilizadas](#herramientas-utilizadas)
  - [Uso](#uso)
    - [Ejecutar ejemplos en Postman](#ejecutar-ejemplos-en-postman)
    - [Ejecutar proyectos en SoapUI](#ejecutar-proyectos-en-soapui)
  - [Recursos de Aprendizaje](#recursos-de-aprendizaje)
  - [Presentaciones](#presentaciones)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)
  - [Autor](#autor)

## Descripción

Este repositorio contiene material, ejemplos prácticos y ejercicios para aprender a trabajar con APIs REST y SOAP, utilizando Postman y SoapUI como herramientas principales de testing y desarrollo.

## Requisitos Previos

- Conocimientos básicos de HTTP y protocolos de red
- Familiaridad con línea de comandos
- Navegador web moderno
- Editor de texto o IDE (recomendado: VS Code)

## Instalación

### 1. Descargar Postman
```bash
# Opción 1: Descargar desde el sitio oficial
# https://www.postman.com/downloads/

# Opción 2: Instalar con homebrew (macOS)
brew install postman

# Opción 3: Instalar con apt (Linux Ubuntu/Debian)
sudo apt-get install postman
```

### 2. Descargar SoapUI
```bash
# https://www.soapui.org/downloads/soapui/
# Seleccionar la versión gratuita (Open Source)
```

### 3. Clonar este repositorio
```bash
git clone https://github.com/usuario/rest-course.git
cd rest-course
```

## Estructura del Curso

```
├── 01-introduccion-rest/
├── 02-introduccion-soap/
├── 03-postman-basico/
├── 04-postman-avanzado/
├── 05-soapui-basico/
├── 06-soapui-avanzado/
├── 07-ejercicios-practicos/
├── 08-proyectos-finales/
└── recursos/
```

## Temas Cubiertos

### REST API
- ✅ Conceptos fundamentales de REST
- ✅ Métodos HTTP (GET, POST, PUT, DELETE, PATCH)
- ✅ Códigos de estado HTTP
- ✅ Autenticación y autorización
- ✅ Gestión de headers y parámetros
- ✅ Mejores prácticas

### SOAP Web Services
- ✅ Introducción a SOAP y XML
- ✅ Estructura de mensajes SOAP
- ✅ WSDL (Web Services Description Language)
- ✅ Construcción de solicitudes SOAP
- ✅ Manejo de errores SOAP

### Postman
- ✅ Interfaz y navegación
- ✅ Crear colecciones y solicitudes
- ✅ Variables y environments
- ✅ Tests y automatización
- ✅ Pre-scripts y scripts
- ✅ Documentación de APIs

### SoapUI
- ✅ Configuración inicial
- ✅ Importar WSDL
- ✅ Crear y ejecutar test suites
- ✅ Assertions y validaciones
- ✅ Mock services
- ✅ Generación de reportes

## Herramientas Utilizadas

| Herramienta | Versión | Propósito |
|-------------|---------|----------|
| Postman | Latest | Testing de APIs REST |
| SoapUI | 5.x+ | Testing de Web Services SOAP |
| Git | Latest | Control de versiones |
| JSON | - | Formato de datos |
| XML | - | Formato de datos SOAP |

## Uso

### Ejecutar ejemplos en Postman
```bash
1. Abrir Postman
2. Importar colecciones desde: recursos/postman_collections/
3. Seleccionar un environment
4. Ejecutar las solicitudes
```

### Ejecutar proyectos en SoapUI
```bash
1. Abrir SoapUI
2. File > New SOAP Project
3. Importar WSDL desde: recursos/soap_wsdl/
4. Ejecutar test cases
```

## Recursos de Aprendizaje

- 📚 [Documentación oficial de REST](https://restfulapi.net/)
- 📚 [Especificación SOAP W3C](https://www.w3.org/TR/soap/)
- 📖 [Guía de Postman](https://learning.postman.com/)
- 📖 [Documentación de SoapUI](https://www.soapui.org/docs/)

## Presentaciones

- 🎬 [Introducción a REST](https://docs.google.com/presentation/d/1W-Y-E7hdAlKnaVKMoqnZy3i71fCZ5f51icSvqDb8Mkc/edit?usp=sharing)
- 🎬 [Guía completa de Postman](https://docs.google.com/presentation/d/1oI3RFoKVgbRktdp-hl4RT06Hck2JCkTjDCT3kPJctoU/edit?usp=sharing)

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Agrega nueva feature'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT.

## Autor

Rojaldo - 2025

---

**¿Preguntas o sugerencias?** Abre un issue en el repositorio.
