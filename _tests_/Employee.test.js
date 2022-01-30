const Employee = require('../lib/Employee');


test("receive name", () => {
    const empName = new Employee("John");
    expect(empName.getName()).toBe("John");
})

test("receive id", () => {
    const empId = new Employee("John", "1");
    expect(empId.getId()).toBe("1"); 
})

test("receive email", () => {
    const empEmail = new Employee("John", "1", "john010@gmail.com");
    expect(empEmail.getEmail()).toBe("john010@gmail.com"); 
})