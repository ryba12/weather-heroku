//Install express server
const express = require('express');
const path = require('path');
const port = process.env.port || '8080'
const app = express();

app.set("port", port);
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/weather-globe-test'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/weather-globe-test/index.html'));
});
// Start the app by listening on the default Heroku port
