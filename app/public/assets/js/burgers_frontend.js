// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger-input").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/newburger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created New Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".clone-burger").on("click", function(event) {
    var burgerName = $(this).data("burger_name");

    var clonedBurger = {
      burger_name: burgerName,
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/newburger", {
      type: "POST",
      data: clonedBurger
    }).then(
      function() {
        console.log("Cloned New Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
      data: {id:id}
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var burgerChanged = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/devour/" + id, {
      type: "PUT",
      data: burgerChanged
    }).then(
      function() {
        console.log("changed to devoured ", burgerChanged);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
