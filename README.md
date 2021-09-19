# Millionaire

To start the game follow the [link](https://d-ok.github.io/Millionaire/).

## Load source code on your computer

In the folder on your computer run the command:
### `npm clone https://github.com/D-Ok/Millionaire.git`

Move to the direct folder of the App: 
### `cd millionaire`

Install all packages used in the application by running: 
### `npm install`

Run the app in the development mode:
###`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Now you can make changes in the application by yourself. 
For example, to configure a set of questions you can open the 'config.json' file and add or remove questions.
Notice that the question object must have the following structure: 

# Question

Name | Type | Description
------------ | ------------- | -------------
key | string | unique identificator for every question
score | number | number of score that user can earn for current question
question | string | question 
correct | [string] | Array of correct answers for this question
options | [{[options](#Option)}] | Array of available options for this question

#Option

Name | Type | Description
------------ | ------------- | -------------
id | string | unique identificator for every option to the current question
text | string | option text
