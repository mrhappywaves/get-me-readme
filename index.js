// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log(`Please enter title to proceed.`)
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description for your project.',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log(`Please enter description to proceed.`)
            }
        }
    },
    {
        type: `confirm`,
        name: `addMoreContext`,
        message: `Would you like to add more context to the project description?`,
    },
    {
        type: `editor`,
        name: `additionalContext`,
        message: `This section will open a default text editor to enter additional description.`,
        default: `Use the following questions as a guide to fill out the form below:
        \n- What was your motivation?
        \n- Why did you build this project?
        \n- What problem does it solve?
        \n- What did you learn?
        \n\nPlease delete this line and the above text after you are finished with your answers, then close the editor and save the file.
        \n\n<Enter answer(s) to questions above right here>`,
        validate: additionalContext => {
            if (additionalContext) {
                return true;
            } else {
                console.log(`\nNo text was entered. Please enter text per the prompt to proceed.`);
            }
        },
        when(answers) {
            return answers.addMoreContext;
        }
    },
    {
        type: `editor`,
        name: `install`,
        message: `What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running:\n`,
        default: `To get the project set up locally please follow the following steps:\n1. <First Step>.`,
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log(`Please enter installation instructions to proceed.`)
            }
        }
    },
    {
        type: `editor`,
        name: `usage`,
        message: `Provide instructions and examples for use.`,
        default: `<Enter examples here>\n\nAlternatively take a screenshot showcasing your app and fill out the link markdown:\n![alt text](assets/images/screenshot.png)`,
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log(`Please enter usage examples to proceed.`)
            }
        }
    },
    {
        type: `confirm`,
        name: `credits`,
        message: `Would you like to add List your collaborators, if any?`,
    },
    {
        type: `editor`,
        name: `collaborators`,
        message: `This section will open a default text editor to enter a list of project collaborators.`,
        default: `
        \n - <Enter name here>
        \n - <Enter another name here>
        \n - <Enter another name and continue below or delete this line, then close the editor and save the file>`,
        validate: collaborators => {
            if (collaborators) {
                return true;
            } else {
                console.log(`\nNo text was entered. Please enter text per the prompt to proceed.`);
            }
        },
        when(answers) {
            return answers.credits;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose from the following licenses or choose the option to add your own later:',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License', 'Boost Software License', 'No License']
    },
    {
        type: `confirm`,
        name: `features`,
        message: `Would you like to list the features for your application?`,
    },
    {
        type: `editor`,
        name: `featuresList`,
        message: `This section will open a default text editor to enter a list features.`,
        default: `
        \n - <One feature>
        \n - <Another feature>
        \n - <Another feature and continue below or delete this line, then close the editor and save the file>`,
        validate: featuresList => {
            if (featuresList) {
                return true;
            } else {
                console.log(`\nNo text was entered. Please enter text per the prompt to proceed.`);
            }
        },
        when(answers) {
            return answers.features;
        }
    },
    {
        type: `confirm`,
        name: `tests`,
        message: `Would you like to provide testing instructions?`,
    },
    {
        type: `editor`,
        name: `testingInstructions`,
        message: `This section will open a default text editor to enter testing instructions.`,
        default: `There are no tests written for this application yet.`,
        validate: testingInstructions => {
            if (testingInstructions) {
                return true;
            } else {
                console.log(`\nNo text was entered. Please enter text per the prompt to proceed.`);
            }
        },
        when(answers) {
            return answers.tests;
        }
    },
    {
        type: 'input',
        name: 'gitHubName',
        message: 'Please enter your GitHub username:',
    },
    {
        type: "input",
        name: "gitHubLink",
        message: "Please provide your GitHub profile link.",
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email:',
    }
];

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answer => {
            return generateMarkdown(answer);
        })
        .then(data => {
            console.log(data);
            fs.writeFileSync("readyREADME.md", data);
            console.log("Your readme is ready!");
        })
        .catch(err => { console.log(err) });
}

// Initialize app
init();
