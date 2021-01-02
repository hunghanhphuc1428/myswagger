const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const indexRouter =  ['./app.js']

swaggerAutogen(outputFile, indexRouter)