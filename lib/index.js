const fs = require('fs'),
    fetchJson = require('./util').fetchJson,
    generator = require('../sdkgen'),
    collectionParser = require('./util').parseCollection,
    _ = require('lodash'),
    sdk = require('postman-collection');

function SDKGenerator(path, language) {
    this.collectionSource = path;
    this.Language = language;
    this.generator = generator[language];
    this.setCollectionInstance();
    return this;
}
SDKGenerator.prototype.ping = function () {
    return this;
}

SDKGenerator.prototype.setCollectionInstance = function () {
    var self = this;
    if (typeof (self.collectionSource) === 'object') {
        if (sdk.Collection.isCollection(self.collectionSource)) {
            self.collection = self.collectionSource;
        } else {
            self.collectionJson = self.collectionSource
            self.setCollection();
        }
    } else {
        fetchJson(self.collectionSource, (err, collection) => {
            if (err) {
                return err;
            }
            self.collectionJson = collection;
        });
        self.setCollection();
    }
};

SDKGenerator.prototype.setCollection = function () {
    var self = this;
    collectionParser(self.collectionJson, (err, collection) => {
        self.collection = collection;
    });
};

SDKGenerator.prototype.outputFile = function (path) {
    var self = this;
    self.outFilePath = path;
    fs.writeFile(`${self.outFilePath}` + 'output_sdk.js', self.packageSnippet, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    return self.outFilePath;
};

SDKGenerator.prototype.generate = function () {
    var self = this;
    var snippet = self.generator(self.collection, null, function (err, snippet) {
        self.packageSnippet = snippet
    });
    return self.packageSnippet;
}

SDKGenerator.prototype = Object.create(SDKGenerator.prototype);
module.exports = SDKGenerator;