const convert = require('../../codegen').nodejsRequest.convert,
    getFunctionSnippet = require('./util').generateFunctionSnippet,
    fetchRequestLogic = require('./util').fetchRequest,
    extractRequests = require('./util').extractRequests,

    options = [{
        indentType: 'Tab',
        indentCount: 4,
        followRediredirect: false,
        trimRequestBody: true,
        requestTimeout: 0
    }];

module.exports = (collection, option = options, callback) => {
    var requestMembers = collection.items.members,
        package_snippet = '',
        functionSnippets = [];
    package_snippet += "const request = require('request');\n\n";
    package_snippet += "var requestList = {\n\t";
    requestMembers.forEach(item => {
        package_snippet += extractRequests(item,options);
    })
    package_snippet += '}\n';
    package_snippet += 'function SDKName() {\n';
    // add variable extraction func here
    package_snippet += '\tthis.requests = requestList;\n';
    package_snippet += '\tSDKName.prototype.setEnv = (key, value) => {\n';
    package_snippet += '\t\t\tthis.variables[key] = value;\n';
    package_snippet += '\t\t}\n';
    package_snippet += '\t}\n';
    package_snippet += '\n';
    package_snippet += 'module.exports = SDKName;';
    callback(null, package_snippet);
    return package_snippet;
}