# 2018bootcamp12NodeExpressHandlebars <!-- omit in toc --> 

- [Overview](#overview)
    - [Web App Usage](#web-app-usage)
- [Development Process](#development-process)
- [Development Notes](#development-notes)

# Overview

Eat-Da-Burger it is a web app which showcase the capabilities of some important web technologies working together such as:

NodeJS, Express, Handlebars, MySQL and Heroku in action.

## Web App Usage

* The user will have a Text Box available to type and submit the name of the Burger of his/her like.
* All these burgers will pile up in the left side of the window with a button to activate the action of devour the Burger.
* Once a burger is `Devoured` this will be piled up in the right side of the window.
* All the Burgers will be stored in the database.


Eat-Da-Burger

seiji-eat-da-burger

# Development Process

* Repository `2018bootcamp12NodeExpressHandlebars` created and cloned locally.
* `npm init` executed inside the project.
* Dependencies installed.
    * `npm install express`
    * `npm install express-handlebars`
    * `npm install mysql`
    * `npm install path`
* Create the `server.js`file which is the applications entry point.
* Create the app directory to contain all our application dependencies.
* Create the `db` directory and inside it:
    * Create the `schema.sql` file to define the database:
        * **Database:** `burgers_db`.
        * **Table:** `burgers`.
            * id
            * burguer_name
            * devoured
    * Create the `seeds.sql` file and create three entries.
    * Run these two files into MySQL Workbench.
* Create the `config` directory and inside it:
    * Create the `connection.js` file with:
        * MySQL connection configuration `host`, `port`, `user`, `password` and `database`.
    * Create the `orm.js` file with:
        * The following methods to interact with MySQL Database:
            * selectAll()
            * insertOne()
            * updateOne()
        * Export the ORM object in module.exports.
  

# Development Notes
