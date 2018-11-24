// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.slectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  // An example of objColVals would be {burger_name: TinyMc, devoured: true}
  // Example of Condition `"id = " + req.params.id`
  update: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.deleteOne("burger", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
