const Engineer = require("../lib/Engineer");

test("creates a new employee object", () => {
  const engineer = new Engineer("josh");

  expect(engineer.name).toBe("josh");
});
