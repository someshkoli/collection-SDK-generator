const request = require('request');

module.exports = {
  "Request_Headers": (body, headers) => {
    var options = {
      'method': 'GET',
      'url': 'https://postman-echo.com/headers',
      'headers': {
        'my-sample-header': 'Lorem ipsum dolor sit amet',
        'testing': '\'singlequotes\'',
        'TEST': '"doublequotes"'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "Request_Headers_(With_special_Characters)": (body, headers) => {
    var options = {
      'method': 'GET',
      'url': 'https://postman-echo.com/headers',
      'headers': {
        'my-sample-header': 'Lorem ipsum dolor sit amet',
        'TEST': '@#$%^&*()',
        'more': ',./\';[]}{":?><|'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "Request_Headers_with_disabled_headers": (body, headers) => {
    var options = {
      'method': 'GET',
      'url': 'https://postman-echo.com/headers',
      'headers': {
        'my-sample-header': 'Lorem ipsum dolor sit amet',
        'not-disabled-header': 'ENABLED'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "GET_Request_with_disabled_query": (body, headers) => {
    var options = {
      'method': 'GET',
      'url': 'https://postman-echo.com/get?test=123&anotherone=232',
      'headers': {}
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_form_data_with_special_characters_Copy": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {},
      formData: {
        'pl': '\'a\'',
        'qu': '"b"',
        'hdjkljh': 'c',
        'sa': 'd',
        'Special': '!@#$%&*()^_+=`~',
        'more': ',./\';[]}{":?><|\\\\'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_form_data_with_empty_form_data_body": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {},
      formData: {

      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "Resolve_URL_(Quotes_+_Special_Characters)_Copy": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post?a=!@$^*()_-`%26&b=,./\';[]}{":/?><||',
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
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_urlencoded_data_with_disabled_entries": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        '1': '\'a\'',
        '2': '"b"',
        '\'3\'': 'c',
        '"4"': 'd',
        'Special': '!@#$%&*()^_=`~',
        'more': ',./\';[]}{":?><|\\\\'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_urlencoded_data_with_empty_urlencoded_body": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {

      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_json_with_raw": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "json": "Test-Test"
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_javascript_with_raw": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'application/javascript'
      },
      body: "var val = 6;\nconsole.log(val);"

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_text/xml_with_raw": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'text/xml'
      },
      body: "<xml>\n\tTest Test\n</xml>"

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_text/html_with_raw": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'text/html'
      },
      body: "<html>\n  Test Test\n</html>"

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "POST_raw_with_empty_raw_body": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'text/plain'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "Resolve_URL": (body, headers) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post?a=\'\'&b=""',
      'headers': {}
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "PUT_Request": (body, headers) => {
    var options = {
      'method': 'PUT',
      'url': 'https://postman-echo.com/put',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Etiam mi lacus, cursus vitae felis et, blandit pellentesque neque. Vestibulum eget nisi a tortor commodo dignissim.\nQuisque ipsum ligula, faucibus a felis a, commodo elementum nisl. Mauris vulputate sapien et tincidunt viverra. Donec vitae velit nec metus."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "PATCH_Request": (body, headers) => {
    var options = {
      'method': 'PATCH',
      'url': 'https://postman-echo.com/patch',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Curabitur auctor, elit nec pulvinar porttitor, ex augue condimentum enim, eget suscipit urna felis quis neque.\nSuspendisse sit amet luctus massa, nec venenatis mi. Suspendisse tincidunt massa at nibh efficitur fringilla. Nam quis congue mi. Etiam volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "DELETE_Request": (body, headers) => {
    var options = {
      'method': 'DELETE',
      'url': 'https://postman-echo.com/delete',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Donec fermentum, nisi sed cursus eleifend, nulla tortor ultricies tellus, ut vehicula orci arcu ut velit. In volutpat egestas dapibus.\nMorbi condimentum vestibulum sapien. Etiam dignissim diam quis eros lobortis gravida vel lobortis est. Etiam gravida sed."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "OPTIONS_to_postman_echo": (body, headers) => {
    var options = {
      'method': 'OPTIONS',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "LINK_request": (body, headers) => {
    var options = {
      'method': 'LINK',
      'url': 'https://www.google.com',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "UNLINK_request": (body, headers) => {
    var options = {
      'method': 'UNLINK',
      'url': 'https://www.google.com',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "LOCK_request": (body, headers) => {
    var options = {
      'method': 'LOCK',
      'url': 'https://www.google.com',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "UNLOCK_request": (body, headers) => {
    var options = {
      'method': 'UNLOCK',
      'url': 'https://www.google.com',
      'headers': {}
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "PROPFIND_request": (body, headers) => {
    var options = {
      'method': 'PROPFIND',
      'url': 'https://www.google.com',
      'headers': {
        'Content-Type': 'text/plain'
      },
      body: "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "PURGE_Request": (body, headers) => {
    var options = {
      'method': 'PURGE',
      'url': 'https://9c76407d-5b8d-4b22-99fb-8c47a85d9848.mock.pstmn.io',
      'headers': {}
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

  "COPY_Request": (body, headers) => {
    var options = {
      'method': 'COPY',
      'url': 'https://9c76407d-5b8d-4b22-99fb-8c47a85d9848.mock.pstmn.io',
      'headers': {}
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },

}