fetchImport = (snippet)=>{

}

fetchRequest = (snippet)=>{

}

generateFunctionSnippet = (request,options) =>{
    var snippet = '\n';
    snippet += 'function_name : () => {\n';
    snippet +=  request + '\n';
    snippet += '}\n'

    return snippet;
}

module.exports = {
    generateFunctionSnippet,
    fetchImport,
    fetchRequest
}