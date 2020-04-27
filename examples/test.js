const sdk = require('postman-collection'),
	sdkGenerator = require('..');

var testCollectionPath = '/home/wolf/development/collection-codegen-postman/examples/collections/sample_collection.json';
const a = new sdkGenerator(testCollectionPath, 'nodejs-request');
var result = a.generate();
a.outputFile('./examples/output/sample-collection');