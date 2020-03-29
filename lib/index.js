const fs = require('fs'),
    fetchJson = require('./util').fetchJson,
    getCollection = require('./util').parseCollection,
    sdkgen = require('../sdkgen'),
    collectionParser = require('./util').parseCollection,
    _ = require('lodash');

var sdkGenerator = {
    // collectoin imported
    collectionJson: null,

    // postman collection instance
    collection: null,

    // codegen variant / language to be used to generate sdk
    codegenVariant: null,

    sdkGenerator: null,

    // set which sdk generator variant to use
    _setSdkType: (language) => {
        // this.
    },

    // entry point of program
    _start: (path, language) => {
        // this.codegenVariant = codegen[language];
        // this._setSdkType(language);
        this.sdkGenerator = sdkgen[language]
        fetchJson(path, (err, collection) => {
            this.collectionJson = collection;
        });

        collectionParser(this.collectionJson, (err, collection) => {
            this.collection = collection;
        });

        var snippet = this.sdkGenerator(this.collection)
        console.log("/// success ///");
        console.log(snippet)
    },
}


module.exports = sdkGenerator._start