const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer')
const CreateHtml = require('./src/GenerateHtml')

var teamObj = [];
var managerObj = [];
var internsObj = [];
var engineersObj = [];

var employee


//ask for the managers name, id, mail and officenumber
function createManager() {
    inquirer.prompt([
        { type: 'input', name: 'name', message: "Manager's name:" },
        { type: 'number', name: 'id', message: "Manager's id:" },
        { type: 'input', name: 'mail', message: "Manager's mail:" },
        { type: 'number', name: 'officeNum', message: "Manager's office number:" },
    ]).then((reponse) => {
        const name = capName(reponse.name);
        managerObj = new Manager(name, reponse.id, reponse.mail, reponse.officeNum);
        console.log('Manager added succesfully\n');
        //call function menu to choose an engineer or an intern
        menu()
    });
}


//choose engineer, intern or finish your team
function menu() {
    inquirer.prompt([
        { type: 'list', name: 'menu', message: "select employye type or finish your team", choices: ['engineer', 'intern', 'finish'] }
    ]).then((response) => {
        //validations to choose the function of the choice that was made
        if (response.menu === "engineer") {
            createEngineer();
        }
        if (response.menu === "intern") {
            createIntern()
        }
        if (response.menu === "finish") {
            finishTeam()
        }
    })
}


//ask for engineer´s info
function createEngineer() {
    inquirer.prompt([
        { type: 'input', name: 'name', message: "name:" },
        { type: 'number', name: 'id', message: "id:" },
        { type: 'input', name: 'mail', message: "mail:" },
        { type: 'input', name: 'github', message: "github:" },
    ]).then((reponse) => {
        const name = capName(reponse.name);
        employee = new Engineer(name, reponse.id, reponse.mail, reponse.github);
        engineersObj.push(employee);
        console.log('Engineer added succesfully\n')
        menu()
    });
}


//ask for intern´s info
function createIntern() {
    inquirer.prompt([
        { type: 'input', name: 'name', message: "name:" },
        { type: 'number', name: 'id', message: "id:" },
        { type: 'input', name: 'mail', message: "mail:" },
        { type: 'input', name: 'school', message: "school:" },
    ]).then((reponse) => {
        const name = capName(reponse.name);
        employee = new Intern(name, reponse.id, reponse.mail, reponse.school);
        internsObj.push(employee);
        console.log('Intern added succesfully\n')
        menu()
    });
}


//finish the team 
function finishTeam() {
    teamObj = [managerObj, ...engineersObj, ...internsObj]
    var finishHtml = CreateHtml.generateString(teamObj);
    writeHtml(finishHtml);
}

//
function writeHtml(finishHtml) {
    fs.writeFile('./dist/index.html', finishHtml, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('your team profile has been succesfully created!');
        }
    })
}

function capName(name) {
    const nameArr = name.split(' ');
    const cap = nameArr.map((element) => {
        arr = element.split('');
        arr[0] = arr[0].toUpperCase();

        return arr.join('')
    })
    return cap.join(' ')
}
createManager()

