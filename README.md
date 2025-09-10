This project was entirely created by giving commands to Copilot running within Visual Studio Code.  There is no actual original work here.

# Authentication Demo Project

This project demonstrates authentication tokens in a full-stack application using HTML, CSS, JavaScript, Java (Spring Boot), MongoDB, OAuth, and React.js.  

I used Copilot with the following prompt to get the basic code started.
"Prompt for Authentication Token

I want to create a new project that will demonstrate the use of authentication tokens in programs written with HTML, CSS, JavaScript, and Java with MongoDB, OAuth and React.js.

The demonstration application should start from a simple web page that offers only three buttons: Register, Login, and Cancel.

The Cancel button takes the user to the Google.ca website.

Registration creates a new user registration by opening a new webpage.  This page is a form that requests: a userid which must be a valid email address, a password which must be 8 characters long and must include at least one of each of these: uppercase letter, lowercase letter, and digit.  The form will also have fields for given name(s) and family name(s) as well as a field for a telephone number which must be one of the many reasonable formats.  The userid must not already be in the database.  Missing or incorrect information must be flagged and do not proceed.  The two buttons are Submit and Cancel.  Cancel returns to the initial page and Submit validates the data and, when valid, creates a new record in the database which stores everything in plain text except the password which is appropriately encrypted.

Login opens a new page that has two fields: userid and password. There are two buttons: Submit and Cancel.  Cancel returns to the initial page.  Submit compares the userid and password combination with those stored in the database.  If there is a match, an authentication token is returned.  If there is no match, an error is flagged and return to the login page.

All of this should be built as a Visual Studio Code project that can also saved in a GitHub repository."

After AI generated the basic code, I modified .........

## Features
- Simple landing page with Register, Login, and Cancel buttons
- Registration form with validation and encrypted password storage
- Login form with authentication token generation
- Cancel buttons redirect appropriately
- Backend with Java (Spring Boot) and MongoDB
- Frontend with React.js
- OAuth integration

## Structure
- `/client` - React.js frontend
- `/server` - Java Spring Boot backend

## Setup
Instructions for running the project will be added as development progresses.
