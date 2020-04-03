const fs = require('fs'),
    fetchJson = require('./util').fetchJson,
    generator = require('../sdkgen'),
    collectionParser = require('./util').parseCollection,
    _ = require('lodash');

function SDKGenerator(path, language) {
    this.collectionPath = path;
    this.Language = language;
    this.generator = generator[language];
    this.setCollectionJson();
    return this;
}
SDKGenerator.prototype.ping = function () {
    return this;
}

SDKGenerator.prototype.setCollectionJson = function () {
    var self = this;
    var jsonCollection = fetchJson(self.collectionPath, (err, collection) => {
        if (err) {
            return err;
        }
        self.collectionJson = collection;
        self.setCollection(self);
    });
};

SDKGenerator.prototype.setCollection = function () {
    var self = this;
    collectionParser(this.collectionJson, (err, collection) => {
        self.collection = collection;
    });
};

SDKGenerator.prototype.outputFile = function (path) {
    var self = this;
    self.outFilePath = path;
};



SDKGenerator.prototype.generate = function () {
    var self = this;
    var snippet = self.generator(self.collection,null,function (err, snippet){
        self.packageSnippet = snippet
    });
    return snippet;
}

SDKGenerator.prototype = Object.create(SDKGenerator.prototype);
module.exports = SDKGenerator;