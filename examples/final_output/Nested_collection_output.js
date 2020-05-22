const request = require('request');
requre('dotenv').config();
var requestList = {
    /*
        Description:
        HTTP has multiple request "verbs", such as `GET`, `PUT`, `POST`, `DELETE`,
        `PATCH`, `HEAD`, etc.
        An HTTP Method (verb) defines how a request should be interpreted by a server.
        The endpoints in this section demonstrate various HTTP Verbs. Postman supports 
        all the HTTP Verbs, including some rarely used ones, such as `PROPFIND`, `UNLINK`, 
        etc.

        For details about HTTP Verbs, refer to [RFC 2616]
        (http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)

    */
    "Request_Methods": {
        /*
            Description:
            The HTTP `GET` request method is meant to retrieve data from a server. The data
            is identified by a unique URI (Uniform Resource Identifier). 
            A `GET` request can pass parameters to the server using "Query String 
            Parameters".For example, in the following request,
            
            > http://example.com/hi/there?hand=wave
            
            The parameter "hand" has the value "wave".
            
            This endpoint echoes the HTTP headers, request parameters and the complete
            URI requested.
        */
        /**
         * ? does get request require data parameter?
         * ! callback function added for better response method
         */
        "GET_Request": (data, callback) => {
            var options = {
                'method': 'GET',
                'url': 'https://postman-echo.com/get?foo1=bar1&foo2=' + SDKName.variables.var_name_2 + '',
                'headers': {}
            };
            request(options, function (error, response) {
                callback(err, response);
            });
        },
        /*
            Description:
            The HTTP `POST` request method is meant to transfer data to a server 
            (and elicit a response).
            What data is returned depends on the implementation
            of the server.
            
            A `POST` request can pass parameters to the server using "Query String 
            Parameters", as well as the Request Body. For example, in the following request,
            
            > POST /hi/there?hand=wave
            
            > <request-body>
            
            The parameter "hand" has the value "wave".The request body can be in multiple
            formats. These formats are defined by the MIME type of the request.The MIME 
            Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
            MIME types are:
            
            * `multipart/form-data`
            * `application/x-www-form-urlencoded`
            * `application/json`

            This endpoint echoes the HTTP headers, request parameters, the contents of
            the request body and the complete URI requested.
        */
        /**
         * ! callback function added
         */
        "POST_Raw_Text": (data, callback) => {
            var options = {
                'method': 'POST',
                'url': 'https://postman-echo.com/post',
                'headers': {},
                body: "This is expected to be sent back as part of response body."

            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
        },
        /*
            Description:
            The HTTP `POST` request method is meant to transfer data to a server 
            (and elicit a response).What data is returned depends on the implementation
            of the server.
            
            A `POST` request can pass parameters to the server using "Query String 
            Parameters", as well as the Request Body.For example, in the following request,
            
            > POST /hi/there?hand=wave
            
            > <request-body>
            
            The parameter "hand" has the value "wave". The request body can be in multiple
            formats. These formats are defined by the MIME type of the request. 
            The MIME Type can be set using the ``Content-Type`` HTTP header. 
            The most commonly used MIME types are:
            * `multipart/form-data`
            * `application/x-www-form-urlencoded`
            * `application/json`
            This endpoint echoes the HTTP headers, request parameters, the contents of the request body and the complete URI requested when data is sent as a form parameter.
        */
        /**
         * ! callback function added
         */
        "POST_Form_Data": (data, callback) => {
            var options = {
                'method': 'POST',
                'url': 'https://postman-echo.com/post',
                'headers': {},
                form: {
                    'foo1': 'bar1',
                    'foo2': 'bar2'
                }
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
        },
    },
    /*
        Description:
        The HTTP `GET` request method is meant to retrieve data from a server.The data
        is identified by a unique URI (Uniform Resource Identifier). 
        
        A `GET` request can pass parameters to the server using "Query String Parameters".
        For example, in the following request,
        
        > http://example.com/hi/there?hand=wave
        
        The parameter "hand" has the value "wave".
        This endpoint echoes the HTTP headers, request parameters and the complete URI requested.
    */
    /**
     * ? does get request require data parameter ?
     * ! callback func added
     */
    "GET_Request 1": (data, callback) => {
        var options = {
            'method': 'GET',
            'url': 'https://postman-echo.com/get?foo1=bar1&foo2=' + SDKName.variables.var_name_1 + '',
            'headers': {}
        };
        request(options, function (error, response) {
            callback(err, response)
        });
    },
};
/*  
    Name: Postman Echo
    Description:
    Postman Echo is service you can use to test your REST clients and make sample API calls. 
    It provides endpoints for `GET`, `POST`, `PUT`, various auth mechanisms and other utility endpoints.
    
    The documentation for the endpoints as well as example responses can be found at [https://postman-echo.com]
    (https://postman-echo.com/?source=echo-collection-app-onboarding)
*/
function SDKName() {
    /*
        Description:
        Environment Varibles exported from postman.
    */
    /**
     * ? is this type of variable declaration alright ? as most of the env variables will be stored at the users end
     * ? .env can be used to reference them
     */
    this.variables = {
        // these are collection variables extracted from the collection
        ip: '128.157.9.1',
        port: '2222',
        url: 'google.com',
        //these are the environment variables
        var_name_1 : process.env('var_name_1'),
        var_name_2 : process.env('var_name_2'),
        var_name_3 : process.env('var_name_3'),
    }

    /*
        Description:
        List of requests and folders inside the collection.
    */
    this.requests = requestList.bind(this);

    /*
        Description:
        Method to set environment variables.
    */
    SDKName.prototype.setEnv = (key, value) => {
        this.variables[key] = value;
    }
}

module.exports = SDKName;