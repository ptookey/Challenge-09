// TODO: Include packages needed for this application
const fs=require("fs");

const inquirer=require("inquirer")

// TODO: Create an array of questions for user input
const questions = [{type:"input", name:"projectTitle",message:"What is the title of your project?"},{type:"input",name:"projectDescription",message:"Describe your Project"},{type:"input",name:"projectInstall",message:"Explain how to install your project"},{type:"input",name:"projectUsage",message:"Explain how your project can be used"},{type:"list",name:"projectLicense",message:"Choose a license to use",choices:["this one","that one","what is a license"]},{type:"input",name:"projectContribution",message:"Explain how to contribute to the project via well formed pull requests and opening useful issues"},{type:"input",name:"projectTests",message:"Include any tests you may have used to fully test your project"},{type:"input",name:"githubUser",message:"What is your github username?"},{type:"input",name:"userEmail",message:"What is your email address?"},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
