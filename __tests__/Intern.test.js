const Intern = require("../lib/Intern");

test("creates a new employee object", () => {
  const intern = new Intern("josh");

  expect(intern.name).toBe("josh");
});
