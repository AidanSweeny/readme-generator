# readme-generator
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)

## Description
For this project I created a README generator, using Node.js, as well as the fs, and inquirer libraries. To make this process run more smootly, I started by promisifying the fs.writeFile function we were using. This way, I could use the promise based async set up after the questions had been asked to the user. I used the inquirer docs to figure out sending questions through the terminal. I used a few different types of prompts, such as the input, checkbox, and confirm questions. This allowed me to gather the correct information that would be utilized in this README. I used object deconstruction as a parameter of my async function. I then created a long string that would eventually be outputted to the README. I used different if statements, and loops as a method to create this massive string. Once it was collected, I wrote to a new file using the fs library's call. Here is a video of the final product:

![](readme.gif)

(I apologize for poor quality, the video was too large to have a amazing quality)
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Installation
To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Usage
To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
The user must also have Node.js downloaded, which can be found here https://nodejs.org/en/download/
To use the inquirer and fs libraries, you can use the command: 
```
npm install
```
Through the terminal

## Credits
* Aidan Sweeny
 - [Link to Github](https://github.com/AidanSweeny)
 - [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## Questions
For any questions you can contact me at apswee22@colby.edu, and you can see my other work at https://github.com/AidanSweeny

## License
This project is licensed under the MIT License