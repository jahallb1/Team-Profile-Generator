const Manager = require("../lib/Manager");

test("creates a new employee object", () => {
  const manager = new Manager("josh");

  expect(manager.name).toBe("josh");
});
