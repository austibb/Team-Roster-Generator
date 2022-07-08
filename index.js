// packages and files needed for program to function
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const employees = require('./employees');
const Manager = employees.Manager;
const Engineer = employees.Engineer;
const Intern = employees.Intern;
// Packages needed for this application

// let HTMLpage = ""
var teamRoster = [];

// array of the prompts the user will see when running this program

function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addEmployees',
                message: 'Would you like to add an employee?',
                choices: ['add intern', 'add engineer', 'no, that\'s everyone!'],
                default: "None",
            }
        ])
        .then(val => {
            if (val.addEmployees === 'add intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'intern',
                            message: 'Please enter the intern\'s name, ID, email address, and school in a comma separated list:',
                        }
                    ])
                    .then(val => {
                        addEmployee(val.intern, 'intern');
                        buildTeam();
                    }
                    );
            } else if (val.addEmployees === 'add engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'engineer',
                            message: 'Please enter the intern\'s name, ID, email address, and Github username in a comma separated list:',
                        }
                    ])
                    .then(val => {
                        addEmployee(val.engineer, 'engineer');
                        buildTeam();
                    }
                    );
            } else {
                window.open("./index.html");
            };
        });
}

function addEmployee(response, title) {
    let employee;
    let info = response.split(' ');
    if (title === 'manager') {
        employee = new Manager(info[0], info[1], info[2], info[3]);
    } else if (title === 'intern') {
        employee = new Intern(info[0], info[1], info[2], info[3]);
    } if (title === 'engineer') {
        employee = new Engineer(info[0], info[1], info[2], info[3]);
    };
    teamRoster.push(employee);
}

function managerLogin() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager',
                message: 'Please enter the team manager\'s name, ID, email address, and office number in a comma separated list:',
            }
        ])
        .then(val => {
            addEmployee(val.manager, 'manager');
            buildTeam();
            // create 
        }
        );
}

// initialization function
function init() {
    managerLogin();
    // console.log('lfksdj');
}

init();
module.exports = teamRoster;