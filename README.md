# lightfeather-coding-challenge

To build, cd into the top level directory and run:
```docker-compose up --build```

The app will be running at http://localhost:3000



# Modules

## Back-end

### submit
handles requests to POST /api/submit. Utilizes express-validator package to ensure request body meets validation requirements

### supervisors
Handles requests to GET /api/supervisors. Utilizes axios to retrieve list of supervisors, removes supervisors with numerical jurisdictions and returns supervisors in array of strings sorted alphabetically by jurisdiction, last name, and then first name. 

### validators
Validation rules for POST /api/submit

### helpers
Functions used for formatting supervisor list to correct format. Moved to separate file for easier readability and to make future unit tests easier.
## Front-end

### Button
button used for form submission

props: 
- onClick (function) - function to call when button is clicked
- text (string) - text to display in the button

### Error
displays server side error messages

props:
- message (string) - error message to be displayed

### Input
form input field

props:
- label (string) - text to be displayed above input field
- onChange (function) - called when there's user action inside the field
- value (string) - text displayed inside the field
- name (string) - name of field

### Select
drop-down field for displaying supervisors

props:
- label (string) - text to be displayed above input field
- onChange (function) - called when an option is selected
- value (string) - current value of field
- name (string) - name of field
- options (array) - list of strings to display in the drop down

### Title
title of form with logo

props:
- text (string) title to be displayed above form

### App.js
fetches supervisors on render, handles form input, submits form and handles server side validation errors.