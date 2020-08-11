const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatePage = require("./src/page-template");
const { writeFile } = require("./utls/write-copy-file");

// command line interface class....aka entry point

function createManager() {
  let teamData = {
    manager: [],
    engineer: [],
    intern: [],
  };
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Manager's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a character!";
        },
      },
      {
        type: "text",
        name: "officeNumber",
        message: "What is the Manager's office number?",
      },
      {
        type: "text",
        name: "email",
        message: "What is the Manager's email?",
      },
      {
        type: "text",
        name: "id",
        message: "What is the Manager's id?",
      },
    ])
    .then(({ name, email, id, officeNumber }) => {
      const newManager = new Manager(name, id, email, officeNumber);
      teamData.manager.push(newManager);
      createTeamMember(teamData);
    });
}

function createTeamMember(teamData) {
  inquirer
    .prompt({
      type: "list",
      name: "otherTypes",
      message: "What is their role?",
      choices: ["Engineer", "Intern", "Finished"],
    })
    .then((response) => {
      switch (response.otherTypes) {
        case "Engineer":
          createEngineer(teamData);

          break;
        case "Intern":
          createIntern(teamData);

          break;

        default:
          let pageHtml = generatePage(teamData);
          writeFile(pageHtml).then((data) => {
            console.log(data);
          });

          return;
      }
    });
}

function createEngineer(teamData) {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is there name?",
      },
      {
        type: "text",
        name: "email",
        message: "What is the Engineer's email?",
      },
      {
        type: "text",
        name: "id",
        message: "What is their id?",
      },
      {
        type: "text",
        name: "gitHub",
        message: "What is there Engineer's GitHub?",
      },
    ])
    .then(({ name, id, email, gitHub }) => {
      const newEngineer = new Engineer(name, id, email, gitHub);
      teamData.engineer.push(newEngineer);
      createTeamMember(teamData);
    });
}

function createIntern(teamData) {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is there name?",
      },
      {
        type: "text",
        name: "email",
        message: "What is the Intern's email?",
      },
      {
        type: "text",
        name: "id",
        message: "What is their id?",
      },
      {
        type: "text",
        name: "school",
        message: "What is there Intern's school?",
      },
    ])
    .then(({ name, id, email, school }) => {
      const newIntern = new Intern(name, id, email, school);
      teamData.intern.push(newIntern);
      createTeamMember(teamData);
    });
}

createManager();

//one function to ask everything
//last question is to ask your title
//switch function to ask what you want todo
