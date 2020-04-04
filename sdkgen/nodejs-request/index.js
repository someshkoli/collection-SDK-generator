const convert = require('../../codegen').nodejsRequest.convert,
    getFunctionSnippet = require('./util').generateFunctionSnippet,
    fetchRequestLogic = require('./util').fetchRequest,
    options = [{
        indentType: 'Tab',
        indentCount: 4,
        followRediredirect: false,
        trimRequestBody: true,
        requestTimeout: 0
    }];

module.exports = (collection, option = options, callback) => {
    var requestList = collection.items.members,
        package_snippet = '',
        functionSnippets = [];
    package_snippet += "const request = require('request');\n\n";
    package_snippet += "module.exports = {\n\t";
    requestList.forEach(item => {
        convert(item.request, options, function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(functionSnippets , "asdasd");
            // functionSnippets.push(getFunctionSnippet(fetchRequestLogic(request), {
            //     name: item.name.split(' ').join('_')
            // }).trim());
            // package_snippet += functionSnippets.join(',\n\n')
            package_snippet += getFunctionSnippet(fetchRequestLogic(request), {
                name: item.name.split(' ').join('_')
            }).trim() + ',\n\n';
        });
    })
    package_snippet += '}\n';
    callback(null, package_snippet);
    return package_snippet;
}