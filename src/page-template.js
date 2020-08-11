const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateManagerHTML(name, id, email, officeNumber) {
  const manager = new Manager(name, id, email, officeNumber);
  return `
  <div class="card">
  <div class="card-header">
    ${manager.getName()}
  </div>
  <div class="card-body">
    <h5 class="card-title">${manager.getId()}, Manager</h5>
    <p class="card-text">${manager.getOfficeNumber()}</p>
    <p class="card-text">${manager.getEmail()}</p>
    <a href="${manager.getEmail()}" class="btn btn-primary">Email</a>
  </div>
</div>
    
    `;
}
function generateEngineerHTML(name, id, email, gitHub) {
  const engineer = new Engineer(name, id, email, gitHub);
  return `
    <div class="card">
    <div class="card-header">
      ${engineer.getName()}
    </div>
    <div class="card-body">
      <h5 class="card-title">${engineer.getId()}, Engineer</h5>
      <p class="card-text">${engineer.getGitHub()}</p>
      <p class="card-text">${engineer.getEmail()}</p>
      <a href="${engineer.getEmail()}" class="btn btn-primary">Email</a>
    </div>
  </div>
      
      `;
}
function generateInternHTML(name, id, email, school) {
  const intern = new Intern(name, id, email, school);
  return `
    <div class="card">
    <div class="card-header">
      ${intern.getName()}
    </div>
    <div class="card-body">
      <h5 class="card-title">${intern.getId()}, Intern</h5>
      <p class="card-text">${intern.getSchool()}</p>
      <p class="card-text">${intern.getEmail()}</p>
      <a href="${intern.getEmail()}" class="btn btn-primary">Email</a>
    </div>
  </div>
      `;
}

function generatePage({ manager, engineer, intern }) {
  let managerHtml = "";
  for (let i = 0; i < manager.length; i++) {
    managerHtml += generateManagerHTML(
      manager[i].name,
      manager[i].id,
      manager[i].email,
      manager[i].gitHub
    );
  }

  let engineerHtml = "";
  for (let i = 0; i < engineer.length; i++) {
    engineerHtml += generateEngineerHTML(
      engineer[i].name,
      engineer[i].id,
      engineer[i].email,
      engineer[i].gitHub
    );
  }
  let internHtml = "";
  for (let i = 0; i < intern.length; i++) {
    internHtml += generateInternHTML(
      intern[i].name,
      intern[i].id,
      intern[i].email,
      intern[i].gitHub
    );
  }

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>Team Project Generator</title>
  </head>
  <body>
  <nav class="navbar navbar-dark bg-primary">
        <h1 class="justfiy-center">My Team</h1>
      </nav>
    <div class="row">
    <div class="col-sm-4">
    ${managerHtml}
    </div>
    <div class="col-sm-4">
    ${engineerHtml}
    </div>
    <div class="col-sm-4">
    ${internHtml}
    </div>
    </div>
  </container?
  </body>
</html>
  `;
}

module.exports = generatePage;
