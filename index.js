const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },{
    type: "input",
    message: "What is your project title?",
    name: "title"
  },{
    type: "input",
    message: "What is a description of the project?",
    name: "description"
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
    message: "Who contributed to this project?",
    name: "contributors"
  },{
    type: "input",
    message: "What is your email?",
    name: "email"
  }])
  .then(async function({title, description, installation, usage, contributors, email}) {
        try {
          var string = `# ${title}\n`
          string += `[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)\n`
          string += `\n## Description\n${description}\n`
          string += `## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [License](#license)\n`
          string += `\n## Installation\n${installation}\n`
          string += `\n## Usage\n${usage}\n`
          string += `\n## Credits\n${contributors}\n`
          console.log(string);
          await writeFileAsync("newREADME.md", string)
        } 
        catch(err) {
          console.log(err);
        }
  })
