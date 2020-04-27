const fetchJson = require('../../lib/util').parseCollection;
const sdk = require('postman-collection');
    sdkGenerator = require('../../'),
	jso = require('../../lib/util').fetchJson;

var testCollectionPath = '/home/wolf/development/collection-codegen-postman/examples/collections/Postman Echo.postman_collection_new.json';
const a = new sdkGenerator(testCollectionPath, 'nodejs-request');
var result = a.generate();
a.outputFile('./examples/output/nested_echo');