'use strict';

const path = require('path');
const fs = require('fs');

exports.certificate = fs.readFileSync(path.join(__dirname, './../certs/localhost.crt')).toString();
exports.privateKey = fs.readFileSync(path.join(__dirname, './../certs/localhost.key')).toString();
