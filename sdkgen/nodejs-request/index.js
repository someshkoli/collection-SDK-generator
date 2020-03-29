const convert = require('../../codegen').nodejsRequest.convert,
    options = [{
        indentType: 'Tab',
        indentCount: 4,
        followRediredirect: false,
        trimRequestBody: true,
        requestTimeout: 0
    }];

module.exports = (collection, option = options,callback) => {
    var requestList = collection.items.members;

    snippet = "const request = require(request);\n";
    snippet = "module.exports = {\n\t";
    requestList.forEach(item => {
        convert(item.request, options, function (err, snippet) {
            if (err) {
                // console.log(err)
            }
            console.log(snippet)
        });
    })
    console.table(snippets)
    // callback(null,snippets)
    return snippets;
}