const convert = require('../../codegen').nodejsRequest.convert,
    getFunctionSnippet = require('./util').generateFunctionSnippet,
    options = [{
        indentType: 'Tab',
        indentCount: 4,
        followRediredirect: false,
        trimRequestBody: true,
        requestTimeout: 0
    }];

module.exports = (collection, option = options) => {
    var requestList = collection.items.members;
    snippet = ''
    snippet += "const request = require(request);\n";
    snippet += "module.exports = {\n\t";
    requestList.forEach(item => {
        var snippets_total = convert(item.request, options, function (err, request) {
            if (err) {
                console.log(err)
            }
            snippet += request + '\n';
        });
    })
    return snippet;
}