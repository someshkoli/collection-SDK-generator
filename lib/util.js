const sdk = require('postman-collection'),
    fs = require('fs');
module.exports = {
    
    fetchJson: (path, callback) => {
        var text = fs.readFileSync(path, 'utf8');
        return callback(null, JSON.parse(text))
    },
    
    parseCollection: (collection, callback) => {
        var postmanCollection = new sdk.Collection(collection);
        if(sdk.Collection.isCollection(postmanCollection)){
            callback(null, postmanCollection);
        }
        else{
            callback("could not parse collection due to broken object");
        }
    },
   
    parseVariables: (variable, callback) =>{

        var postmanVariable = new sdk.Variable(variable);
        if(sdk.VariableList.isVariableList(postmanVariable)|| true) {
            callback(null, postmanVariable);
        }
        else{
            callback("unable to parse input variable");
        }
    }
}