const net = require('net');

// This is to define carriage return for simplicity
let n = '\n';

// Function for quoting strings
let quote = function(value) {
  return '"' + value + '"';
};

let controller = {
  authenticate: function(params) {
    let client = new net.Socket();
    client.connect(9051, '127.0.0.1', function() {
      console.log('Authenticating with Password: ' + params.password);
      client.write('AUTHENTICATE '+ quote(params.password) + n);
    });
    client.on('data', function(data) {
      console.log('Received: ' + data);
      client.destroy();
    });
  },
};

module.exports = controller;

// Everything below here may be used for testing.
params = {
  password: 'password',
};
controller.authenticate(params);
