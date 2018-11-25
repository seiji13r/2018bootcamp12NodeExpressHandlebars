# 2018bootcamp12NodeExpressHandlebars <!-- omit in toc --> 

- [Overview](#overview)
    - [Web App Usage](#web-app-usage)
    - [Deployed App](#deployed-app)
- [Development Process](#development-process)
- [Development Notes](#development-notes)
    - [ORM Function Signatures](#orm-function-signatures)
        - [Select All](#select-all)
        - [Insert One](#insert-one)
        - [Update One](#update-one)
        - [Delete One](#delete-one)
    - [Model Function Signatures](#model-function-signatures)
        - [All](#all)
        - [Create](#create)
        - [Update](#update)
        - [Delete](#delete)
- [MVC Modules Relationships](#mvc-modules-relationships)

# Overview

Eat-Da-Burger it is a web app which showcase the capabilities of some important web technologies working together such as:

NodeJS, Express, Handlebars, MySQL and Heroku in action.

## Web App Usage

* The user will have a Text Box available to type and submit the name of the Burger of his/her like.
* All these burgers will pile up in the left side of the window with a button to activate the action of devour the Burger.
* Once a burger is `Devoured` this will be piled up in the right side of the window.
* All the Burgers will be stored in the database.

## Deployed App

[Eat-Da-Burger](https://seiji-eat-da-burger.herokuapp.com/)

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
* Create the `models` directory and inside it:
    * Create the `burger.js` file with:
        * A require statement for the `orm.js`.
        * Methods that use the ORM functionality to manipulate the burgers.
        * Export the Burger object in `module.exports`.
* Create the `controllers` directory and inside it:
    * Create burgers_controller.js file with:
        * Require Statements of `Express` and `burger.js`.
        * A Router with the routes that perform the required actions that interact with the views.
        * Export the Router object.
* Create the `public` directory and inside it:
    * Create the `css` directory with:
        * `style.css` file for custom styles.
    * Create the `img` directory.
        * Include the required images.
    * Create the `js` directory.
        * Create the `burgers_frontend` file, this will contain all front end javascript functionality.
* Create the `views` directory and inside it:
    * Create the `index.handlebars` file.
    * Create the `layouts` directory with:
        * The `main.handlebars` file.
    * Create the `partials` directory with:
        * The `burger-block.handlebars` file.
* Complete the ORM and Model functionality.
* Build the Routes in the controller and use the Model methods.
* Populate the information in the Front end.
* Iterate over the code into `index.handlebar`, `frontend.js` and the `controller.js` to finish up the required application functionalities.
    
# Development Notes
## ORM Function Signatures
### Select All

```javascript
orm.slectAll(tableInput, cb)
```
**tableInput:** *String* "Name of the Table" \
**cb:** *function* "Callback Function"

### Insert One

```javascript
orm.insertOne(table, cols, vals, cb)
```
**table:** *String* "Name of the Table" \
**cols:** *Array* "Column Names" \
**vals:** *Array* "Values of the Fields" \
**cb:** *function* "Callback Function"

### Update One

```javascript
orm.updateOne(table, objColVals, condition, cb)
```
**table:** *String* "Name of the Table" \
**objColVals:** *Object* "// An example of objColVals would be {burger_name: TinyMc, devoured: true}" \
**condition:** ** Example of Condition `"id = " + req.params.id` \
**cb:** *function* "Callback Function"

### Delete One

```javascript
orm.deleteOne(table, id, cb)
```
**table:** *String* "Name of the Table" \
**id:** *Integer* "id" \
**cb:** *function* "Callback Function"


## Model Function Signatures
### All

```javascript
burger.all(cb)
```
**cb:** *function* "Callback Function"

### Create

```javascript
burger.create(cols, vals, cb)
```
**cols:** *Array* "Column Names" \
**vals:** *Array* "Values of the Fields" \
**cb:** *function* "Callback Function"

### Update

```javascript
burger.update(objColVals, condition, cb)
```
**objColVals:** *Object* "// An example of objColVals would be {burger_name: TinyMc, devoured: true}" \
**condition:** ** Example of Condition `"id = " + req.params.id` \
**cb:** *function* "Callback Function"

### Delete

```javascript
burger.delete(id, cb)
```
**table:** *String* "Name of the Table" \
**id:** *Integer* "id" \
**cb:** *function* "Callback Function"

# MVC Modules Relationships

```console
server.js
^   ^
^   express = app <<<<<<<< app.use(routes)
^                                    ^
controllers.burgers_controllers.js = router
^   ^   ^
^   ^   express.Router()
^   ^
^   views.index > views.layouts.main < public.assets
^   ^
^   views.partials.burger.burger-block
^
^
models.burger.js
^
config.orm.js
^
config.connection.js
```