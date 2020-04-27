# postman-collection-codegen

### Introduction
- A SDK generator for postman collections. Generates entire SDK with all the requests inside the postman collection powered with postman-code-generator. This is a collection level sdk generator which generates snippets for collections having multi-level arrangement.

### Installation
 - ```git clone https://github.com/someshkoli/postman-collection-codegen.git```
 - ```cd postman-collection-codegen```
 - ```npm install```

#### Libraries used:
 - ```postman collection``` - [postmanlabs/postman-collection](https://github.com/postmanlabs/postman-collection)
 - ```postman code generator``` - [postmanlabs/postman-code-generator](https://github.com/postmanlabs/postman-code-generator)

#### Supported code generators
 - nodejs-requests
 - dart


### Features:
 - Multi Level Collection Code generator.
 - Auto Documenting with postman collection descriptions.
 - Flexible codes for better usage in integrated systems.
 - Output to file

### Usage:

    const sdkGenerator = require('sdk_generator_root');

    /*create a new sdk generator instance by providing collection and sdkgenerator variant as parameters. */

    const instance = new sdkGenerator(testCollectionPath, 'nodejs-request');

    /* to get generated sdk use generate() method. This returns the generated sdk in string format. */

    var result = instance.generate();

    /* to output the sdk to a file use outputFile(file_name) method */  

    a.outputFile('./examples/output/sample-collection');


