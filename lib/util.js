const sdk = require('postman-collection'),
    fs = require('fs');
module.exports = {
    // write docs

    fetchJson: (path, ) => {
        fs.readFile(require.resolve(path), (err, data) => {
            if (err)
                callback(err)
            else
                callback(null, JSON.parse(data))
        })
    },

    parseCollection: (collection,callback) => {
        // todo: wire error cases to test invalid input
        var postmanCollection = new sdk.Collection(collection);
        callback(null,postmanCollection);
    },


}