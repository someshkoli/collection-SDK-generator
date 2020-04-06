const sdk = require('postman-collection');
sdkGenerator = require('..'),
	jso = require('../lib/util').fetchJson
// lib = require('./lib')

// const a = new sdkGenerator(__dirname + '/collections/sample_collection.json', 'nodejs-request',
const a = new sdkGenerator('/home/wolf/development/collection-codegen-postman/examples/collections/sample_collection.json', 'nodejs-request',
	'nodejs-request');
var result = a.generate();
a.outputFile('./');
// console.log(result);