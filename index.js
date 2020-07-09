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
    message: "How do you install in necessary information?",
    name: "installation"
  },{
    type: "input",
    message: "Who contributed to this project?",
    name: "contributors"
  },{
    type: "input",
    message: "What is your email?",
    name: "email"
  }])
  .then(async function({title, description, installation, contributors, email}) {
        try {
          var string = `#${title}\n`
          string += "[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)\n"
          console.log(string);
          // await writeFileAsync("newREADME.md", JSON.stringify(res))
        } 
        catch(err) {
          console.log(err);
        }
  })
