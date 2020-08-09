const inquirer = require("inquirer");
// uuid
const nanoid = require("nanoid").nanoid;
const Employee = require("./lib/Employee");

// command line interface class....aka entry point
class CliClass {
  constructor() {
    this.teamMembers = [];
  }

  createManager() {
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
          name: "email",
          message: "What is the Manager's email?",
        },
      ])
      .then((data) => {
        const id = nanoid();
        this.teamMembers.push({
          ...data,
          id,
        });
        console.log(this.teamMembers);
        this.createTeamMember(id);
        // call, bind, apply
      });
  }

  // returns index of team member for array
  findTeamMemberIndex(id) {
    return this.teamMembers.findIndex((member) => (member.id = id));
  }

  // returns the data object
  findTeamMemberById(idImLookingFor) {
    return this.teamMembers.find((member) => member.id === idImLookingFor);
  }

  createTeamMember(id) {
    inquirer
      .prompt({
        type: "list",
        name: "otherTypes",
        message: "What is their role?",
        choices: ["Engineer", "Employee", "Intern"],
      })
      .then(({ otherTypes }) => {
        console.log(this.teamMembers);
        switch (otherTypes) {
          case "Engineer":
            this.createEngineer(id);
            return;
          case "Employee":
            this.createEmployee(id);
            return;
          case "Intern":
            this.createIntern(id);
            return;

          default:
            // error
            return;
        }
      });
  }

  createEngineer(id) {
    inquirer
      .prompt({
        type: "text",
        name: "name",
        message: "What is there name?",
      })
      .then(({ name }) => {
        const newObj = {
          // take the return value of this method and spread it into newDataObject
          ...this.findTeamMemberById(id),
          // mutate new object by adding name value
          name,
        };
        // replace old value on this.teamMembers with the new object
        this.teamMembers[this.findTeamMemberIndex(id)] = newObj;
        console.log(this.teamMembers);
      });
  }

  createIntern() {
    inquirer.prompt({
      type: "text",
      name: "name",
      message: "What's their name?",
    });
  }
  createEmployee() {
    inquirer.prompt({
      type: "text",
      name: "name",
      message: "What's their name?",
    });
  }
}

const app = new CliClass();

app.createManager();

//one function to ask everything
//last question is to ask your title
//switch function to ask what you want todo
