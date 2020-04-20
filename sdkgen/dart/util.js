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
    
}

module.exports = {
    generateFunctionSnippet,
    fetchImport,
    fetchRequest
}