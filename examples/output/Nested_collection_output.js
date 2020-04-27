const request = require('request');

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
        "GET_Request": (body, headers) => {
            var options = {
                'method': 'GET',
                'url': 'https://postman-echo.com/get?foo1=bar1&foo2={{variable_key}}',
                'headers': {}
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
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
        "POST_Raw_Text": (body, headers) => {
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
        "POST_Form_Data": (body, headers) => {
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
        Digest authentication protects an endpoint with a username and password without actually transmitting the password over network.
        One has to apply a hash function (like MD5, etc) to the username and password before sending them over the network.
        
        > Username: `postman`
        > Password: `password`
        
        Unlike Basic-Auth, authentication happens using two consecutive requests where the first request returns `401 Unauthorised` along with `WWW-Authenticate` header containing information that needs to be used to authenticate subsequent calls.
        
        To know more about digest authentication, refer to the [Digest Access Authentication](https://en.wikipedia.org/wiki/Digest_access_authentication) wikipedia article.
        The article on [authentication helpers](https://www.getpostman.com/docs/helpers#digest-auth) elaborates how to use the same within the Postman app.
    */
    "Auth:_Digest": {
        /*
            Description:
            Performing a simple `GET` request to this endpoint returns status code `401 Unauthorized` with `WWW-Authenticate` header containing information to successfully authenticate subsequent requests.
            The `WWW-Authenticate` header must be processed to extract `realm` and `nonce` values to hash subsequent requests.
            When this request is executed within Postman, the script attached with this request does the hard work of extracting realm and nonce from the header and set it as [global variables](https://www.getpostman.com/docs/environments#global-variables?source=echo-collection-app-onboarding) named `echo_digest_nonce` and `echo_digest_realm`.
            These variables are re-used in subsequent request for seamless integration of the two requests.
        */
        "DigestAuth_Request": (body, headers) => {
            var options = {
                'method': 'GET',
                'url': 'https://postman-echo.com/digest-auth',
                'headers': {}
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
    "GET_Request 1": (body, headers) => {
        var options = {
            'method': 'GET',
            'url': 'https://postman-echo.com/get?foo1=bar1&foo2={{variable_key}}',
            'headers': {}
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
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
    this.variables = {
        ip: '128.157.9.1',
        port: '2222',
        url: 'google.com',
    }

    /*
        Description:
        List of requests and folders inside the collection.
    */
    this.requests = requestList;

    /*
        Description:
        Method to set environment variables.
    */
    SDKName.prototype.setEnv = (key, value) => {
        this.variables[key] = value;
    }
}

module.exports = SDKName;