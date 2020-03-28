const fs = require('fs'),
    fetchJson = require('./util').fetchJson,
    getCollection = require('./util').parseCollection,
    codegen = require('../codegen'),
    collectionParser = require('./util').parseCollection;


module.exports = {
    // collectoin imported
    collection: null,

    codegen: null
    // entry point of program
    start: (path, codegen) => {
        this.codegen = codegen;
        var collectoinJson = fetchJson(path, (err, collection)=>{
            this.collection = collection;
        });
        return this.runCollectoin(this.collection);
    },

    runCollection: (collection) => {
        console.log(collection);
    }

    generateSDK: () => {
        // write sdk snippet here
    }

    convert: convert
}