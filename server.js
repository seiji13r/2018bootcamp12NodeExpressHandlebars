var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Important: As the views directory is inside app directory it is important so specify the reference paths.
// partialsDir: "app/views/partials"
// layoutsDir: "app/views/layouts"
// app.set('views', "app/views");
app.engine("handlebars", exphbs({ layoutsDir: "app/views/layouts", partialsDir: "app/views/partials", defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', "app/views");

// Import routes and give the server access to them.
var routes = require("./app/controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
