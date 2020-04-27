const request = require('request');

var requestList = {
  "Request_Methods": {
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
  "Auth:_Digest": {
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
  "GET_Request_1_": (body, headers) => {
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

}

function SDKName() {
  this.requests = requestList;
  SDKName.prototype.setEnv = (key, value) => {
    this.variables[key] = value;
  }
}

module.exports = SDKName;