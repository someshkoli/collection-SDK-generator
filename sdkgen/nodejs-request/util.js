fetchImport = (snippet)=>{
    var separator = '// -> REQUEST LOGIC <-\n'
    var request = snippet.split(separator);
    return request[1];
}

fetchRequest = (snippet)=>{
    var separator = '// -> REQUEST LOGIC <-\n'
    var request = snippet.split(separator);
    return request[1];
}

// todo: figure out why you aded options parameter
generateFunctionSnippet = (request,options) =>{
    var snippet = '\n';
    snippet += `"${options.name}"` + ' : (body, headers) => {\n';
    snippet +=  request;
    snippet += '}\n'
    return snippet;
}

module.exports = {
    generateFunctionSnippet,
    fetchImport,
    fetchRequest
}