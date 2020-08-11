const fs = require("fs");
const { resolve } = require("path");

function writeFile(pageHTML) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/employee.html", pageHTML, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("My team profile has been created!");
    });
  });
}

function copyFile() {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/sample.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("Stylesheet has been copied!");
    });
  });
}
module.exports = { writeFile, copyFile };
