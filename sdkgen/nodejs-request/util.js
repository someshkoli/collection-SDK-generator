const convert = require('../../codegen').nodejsRequest.convert;

fetchImport = (snippet) => {
    var separator = '// -> REQUEST LOGIC <-\n'
    var request = snippet.split(separator);
    return request[1];
}

fetchRequest = (snippet) => {
    var separator = '// -> REQUEST LOGIC <-\n'
    var request = snippet.split(separator);
    return request[1];
}

// todo: figure out why you aded options parameter
generateFunctionSnippet = (request, options) => {
    var snippet = '\n';
    snippet += `"${options.name}"` + ' : (body, headers) => {\n';
    snippet += request;
    snippet += '},\n'
    return snippet;
}

extractRequests = (collectionItemMember,options) => {
    if (collectionItemMember.request) {
        var snippet = '';
        convert(collectionItemMember.request, options, function (err, request) {
            if (err) {
                console.log(err)
            }
            snippet += generateFunctionSnippet(
                fetchRequest(request), {
                    name: collectionItemMember.name.split(' ').join('_')
                }
            ).trim() + '\n\n';
        });
        return snippet;
    } else {
        var snippet = '';
        snippet += `"${collectionItemMember.name.split(' ').join('_')}"` + ': {\n';
        collectionItemMember.items.members.forEach(element => {
            snippet += extractRequests(element);
        });
        snippet += '},'
        return snippet;
    }
}

module.exports = {
    generateFunctionSnippet,
    fetchImport,
    fetchRequest,
    extractRequests
}