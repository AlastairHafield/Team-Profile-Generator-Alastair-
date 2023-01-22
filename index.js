//import gen html 

const genHTML = require('./lib/generateHTML');

//import profiles

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import modules 

const fs = require('fs');
const inquirer = require('inquirer');

// Array for team

const teamArray = [];

// inquirer prompts
//manager prompts

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please input managers name',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Enter name to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the manager ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('please enter the ID')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office Number for manager',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('please enter the office number')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

// prompt for adding employees

const addEmployee = () => {
    console.log(`
    Adding employee's to the team!
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please select the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Enter name to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('please enter the ID')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username.",
            when: (input) => input.role === 'Engineer', 
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Enter name to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school.",
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Enter name to continue');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    // adding employees to team array
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// function to gen html file using file system
const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been generated!')
        }
    })
};

addManager()
    .then(addEmployee)  
    .then(teamArray => {
        return genHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });