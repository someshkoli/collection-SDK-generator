const sdk = require('postman-collection'),
    fs = require('fs');
module.exports = {
    /**
     * fetchJson: returns json from a file
     * @path path to collection
     * @callback callback function to return collection
     */
    fetchJson: (path, callback) => {
        var text = fs.readFileSync(path, 'utf8')
        return callback(null, JSON.parse(text))
    },
    /**
     * parseCollection: returns postman collection object for given collection input
     * @collection collection json
     * @callback callback function to return generated postman collection object
     */
    parseCollection: (collection, callback) => {
        var postmanCollection = new sdk.Collection(collection);
        if(sdk.Collection.isCollection(postmanCollection)){
            callback(null, postmanCollection);
        }
        else{
            callback("could not parse collection due to broken object");
        }
    },
    /**
     * parseVariable: returns postman variablelist object for given variablelist object
     * @variable object containing variables
     * @callback method used to return err or resulting postman variable;
     */
    parseVariables: (variable, callback) =>{
        var postmanVariable = new sdk.VariableList(variable);
        if(sdk.VariableList.isVariableList(postmanVariable)) {
            callback(null, postmanVariable);
        }
        else{
            callback("unable to parse input variable");
        }
    }
}