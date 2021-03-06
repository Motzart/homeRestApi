'use strict';

const joi = require('joi');

const envVarsSchema = joi.object({
    NODE_ENV: joi.string()
        .allow(['development', 'production', 'test',])
        .required(),
    PORT: joi.number()
        .required()
}).unknown()
    .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Server Config validation Error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    isTest: envVars.NODE_ENV === 'test',
    isDevelopment: envVars.NODE_ENV === 'development',
    server: {
        port: envVars.PORT
    }

};

module.exports = config;