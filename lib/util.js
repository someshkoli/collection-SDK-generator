const sdk = require('postman-collection'),
    fs = require('fs');
module.exports = {
    // write docs

    fetchJson: (path,callback) => {
        var text = fs.readFileSync(path,'utf8')   
        return callback(null,JSON.parse(text))
    },

    parseCollection: (collection,callback) => {
        // todo: wire error cases to test invalid input
        var postmanCollection = new sdk.Collection(collection);
        callback(null,postmanCollection);
    },
}