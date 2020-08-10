const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
  const employee = new Employee("josh");

  expect(employee.name).toBe("josh");
});
