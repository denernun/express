const properties = require('properties-reader');
const config = new properties('./config/config.properties');

module.exports = config;
