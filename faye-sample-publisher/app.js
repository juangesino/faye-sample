var faye = require('faye');
var client = new faye.Client('http://localhost:8000/');

client.publish('/messages', {text: 'Hi there'});
