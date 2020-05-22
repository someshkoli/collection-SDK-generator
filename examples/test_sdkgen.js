const sdk = require('postman-collection'),
	sdkGenerator = require('..');

var testCollectionPath = '/home/wolf/development/collection-codegen-postman/examples/collections/sample_collection.json';
var testVariablePath = '/home/wolf/development/collection-codegen-postman/examples/output/test21.postman_environment.json';
const a = new sdkGenerator(testCollectionPath, 'nodejs-request');
a.setVariables('/home/wolf/development/collection-codegen-postman/examples/output/test21.postman_environment.json');
a.generate();
a.outputFile('./examples/output/sample-collection');