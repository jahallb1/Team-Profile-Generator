const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function generateManagerHTML() {
  const manager = new Manager(name, id, email, officeNumber);
  return `
  <div class="card">
  <div class="card-header">
    ${manager.getName()}
  </div>
  <div class="card-body">
    <h5 class="card-title">${manager.getId()}</h5>
    <p class="card-text">${manager.getOfficeNumber()}</p>
    <p class="card-text">${manager.getEmail()}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    `;
}
function generateEngineerHTML() {
  const engineer = new Engineer(name, id, email, gitHub);
  return `
    <div class="card">
    <div class="card-header">
      ${engineer.getName()}
    </div>
    <div class="card-body">
      <h5 class="card-title">${engineer.getId()}</h5>
      <p class="card-text">${engineer.getGitHub()}</p>
      <p class="card-text">${engineer.getEmail()}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      
      `;
}
function generateInternHTML() {
  const intern = new Intern(name, id, email, school);
  return `
    <div class="card">
    <div class="card-header">
      ${intern.getName()}
    </div>
    <div class="card-body">
      <h5 class="card-title">${intern.getId()}</h5>
      <p class="card-text">${intern.getSchool()}</p>
      <p class="card-text">${intern.getEmail()}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      `;
}

function generatePage({ manager, engineer, intern }) {
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
    <div class="card">
    ${generateManagerHTML(manager)}
    ${generateEngineerHTML(engineer)}
    ${generateInternHTML(intern)}
    </div>
  </body>
</html>
  `;
}
module.exports = generatePage;
