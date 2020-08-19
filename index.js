var fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "Description",
    message: "Write a description of your project."
  },
  {
    type: "input",
    name: "Installation",
    message: "Write a quick installation description for your project."
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide and explain how to use the app."
  },
  {
    type: "list",
    message: "Which license are you using?",
    name: "License",
    choices: [
      "MIT License",
      "GVP GPL License",
      "Apache License",
      "No License",
    ]
  },
  {
    type: "input",
    name: "Credits",
    message: "Provide any tools, references you've used to create this app."
  },
  {
    type: "input",
    name: "Comments",
    message: "Provide comments and parting words."
  },
  {
    type: "input",
    name: "Tests",
    message: "Provide info about testing."
  },
  {
    type: "input",
    name: "Deployed",
    message: "Provide github deployed address."
  },
  {
    type: "input",
    name: "Repository",
    message: "Provide github repository address."
  }
];


//function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      console.log("Readme file created");
    });
  }




function init() {
  inquirer.prompt(questions).then((answers) => {

    const response = generateMarkdown(answers);
    console.log(answers);

    writeToFile("ReadMe.md", response);
  })

}
init()