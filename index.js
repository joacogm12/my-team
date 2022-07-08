import { Manager } from "./lib/Manager.js";
import { Intern } from "./lib/Intern.js";
import { Engineer } from "./lib/Engineer.js";
import inquirer from "inquirer";

var teamObj = [];

var employee


function createManager() {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: "Manager's name:" },
        { type: 'input', name: 'id', message: "Manager's id:" },
        { type: 'input', name: 'mail', message: "Manager's mail:" },
        { type: 'input', name: 'officeNum', message: "Manager's office number:" },
    ]).then((reponse) => {
        employee = new Manager(reponse.name, reponse.id, reponse.mail, reponse.officeNum);
        teamObj.push(employee);
        console.log(teamObj);
        menu()
    });
}

function menu() {
    return inquirer.prompt([
        { type: 'list', name: 'menu', message: "select employye type or finish your team", choices: ['engineer', 'intern', 'finish'] }
    ]).then((response) => {
        if (response.menu === "engineer") {
            createEngineer();
        } else {
            createIntern()
        }
    })
}

function createEngineer() {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: "name:" },
        { type: 'input', name: 'id', message: "id:" },
        { type: 'input', name: 'mail', message: "mail:" },
        { type: 'input', name: 'github', message: "github:" },
    ]).then((reponse) => {
        employee = new Engineer(reponse.name, reponse.id, reponse.mail, reponse.github);
        teamObj.push(employee);
        console.log(teamObj);
        menu()
    });
}

function createIntern() {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: "name:" },
        { type: 'input', name: 'id', message: "id:" },
        { type: 'input', name: 'mail', message: "mail:" },
        { type: 'input', name: 'school', message: "school:" },
    ]).then((reponse) => {
        employee = new Intern(reponse.name, reponse.id, reponse.mail, reponse.school);
        teamObj.push(employee);
        console.log(teamObj);
        menu()
    });
}

createManager()