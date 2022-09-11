const PropertiesReader = require('properties-reader');
const config = new PropertiesReader('./config/config.properties');

module.exports = config;
