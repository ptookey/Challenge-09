// TODO: Include packages needed for this application
const fs=require("fs");

const inquirer=require("inquirer");
const renderLicenseBadge = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{type:"input", name:"projectTitle",message:"What is the title of your project?"},{type:"input",name:"projectDescription",message:"Describe your Project"},{type:"input",name:"projectInstall",message:"Explain how to install your project"},{type:"input",name:"projectUsage",message:"Explain how your project can be used"},{type:"list",name:"projectLicense",message:"Choose a license to use",choices:["BSD License","MIT License","GNU GPL License","Apache License 2.0","ISC License","No License"]},{type:"input",name:"projectContribution",message:"Explain how to contribute to the project via well formed pull requests and opening useful issues"},{type:"input",name:"projectTests",message:"Include any tests you may have used to fully test your project"},{type:"input",name:"githubUser",message:"What is your github username?"},{type:"input",name:"userEmail",message:"What is your email address?"},];

inquirer.prompt(questions).then(response=>writeToFile('README.md',response));

// TODO: Create a function to write README file
function writeToFile(fileName, response){
    const md =`# Project Title: ${response.projectTitle}
## Description 
${response.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation 
${response.projectInstall}

## Usage 
${response.projectUsage}

## Contributing 
${response.projectContribution}

## Tests 
${response.projectTests}

## License 
${renderLicenseBadge(response.projectLicense)}
    
## Questions
GitHub: [${response.githubUser}](https://github.com/${response.githubUser})
Email: ${response.userEmail}`
    fs.writeFile(fileName,md,(error)=>{
        if(error){
           console.log(error);
        }else{
           console.log("md file generated successfully!")
        }
      })
}