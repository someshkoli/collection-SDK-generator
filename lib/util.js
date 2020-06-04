const sdk = require('postman-collection'),
    fs = require('fs');
module.exports = {
    
    fetchJson: (path, callback) => {
        var text = fs.readFileSync(path, 'utf8');
        return callback(null, JSON.parse(text))
    },
    
    parseCollection: (collection, callback) => {
        var postmanCollection;
        try {
            postmanCollection = new sdk.Collection(collection);
        } catch (error) {
            callback(error, null)
        }
        callback(null, postmanCollection);
    },
}