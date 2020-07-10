const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([{
    type: "input",
    message: "What is your project title?",
    name: "title"
  },{
    type: "input",
    message: "What is a description of the project?",
    name: "description"
  },{
    type: "checkbox",
    message: "What button would you like",
    name: "button",
    choices: ["Website up", "Website down", "Uses CSS", "Uses HTML", "Uses Javascript"]
  },{
    type: "input",
    message: "How and what is required to install this project?",
    name: "installation"
  },{
    type: "input",
    message: "What do others need to do to use this project?",
    name: "usage"
  },{
    type: "input",
    message: "Who contributed to this project(seperate with commas)?",
    name: "contributors"
  },{
    type: "input",
    message: "What is your email?",
    name: "email"
  },{
    type: "input",
    message: "What is your Github username?",
    name: "github"
  },{
    type: "input",
    message: "What tests that can be run on this project, and how are they run?",
    name: "test"
  },{
    type: "confirm",
    message: "Would you like to include a license?",
    name: "license"
  }])
  .then(async function({title, button, description, installation, usage, contributors, license, email, github, test}) {
        try {
          var string = `# ${title}\n`
          for (b of button){
            if(b === "Website up"){
              string += "[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)\n"
            }
            if(b === "Website down"){
              string += "[![Website cv.lbesson.qc.to](https://img.shields.io/website-up-down-green-red/http/cv.lbesson.qc.to.svg)](http://cv.lbesson.qc.to/)\n"
            }
            if(b === "Uses CSS"){
              string += "[![forthebadge](https://ForTheBadge.com/images/badges/uses-css.svg)](https://forthebadge.com)\n"
            }
            if(b === "Uses HTML"){
              string += "[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)\n"
            }
            if(b === "Uses Javascript"){
              string += "[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)\n"
            }
          }
          string += `\n## Description\n${description}\n`
          string += `## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n`
          if(test){
            string += "* [Tests](#tests)\n"
          }
          string += `* [Questions](#questions)\n`
          if(license){
            string += "* [License](#license)\n"
          }
          string += `\n## Installation\n${installation}\n`
          string += `\n## Usage\n${usage}\n`
          string += `\n## Credits\n`
          var con = contributors.split(",")
          for(people of con){
            string += `* ${people}\n - [Link to Github](Add link here)\n - [Link to LinkedIn](Add link here)\n`
          }
          if (test){
            string += `\n## Test\n${test}`
          }
          string += `\n## Questions\nFor any questions you can contact me at ${email}, and you can see my other work at https://github.com/${github}`
          if (license){
            string += `\n## License\nThis project is licensed under the MIT License`
          }
          await writeFileAsync("newREADME.md", string)
        } 
        catch(err) {
          console.log(err);
        }
  })
