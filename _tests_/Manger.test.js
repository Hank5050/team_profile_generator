
const Manager = require('../lib/Manager')

test("receive name", () => {
    const manName = new Manager("John");
    expect(manName.getName()).toBe("John");
})

test("receive id", () => {
    const manId = new Manager("John", "1");
    expect(manId.getId()).toBe("1"); 
})

test("receive email", () => {
    const manEmail = new Manager("John", "1", "John010@gmail.com");
    expect(manEmail.getEmail()).toBe("John010@gmail.com"); 
})

test("receive office number", () => {
    const manNum = new Manager("John", "1", "John010@gmail.com", '0123456789');
    expect(manNum.getOfficeNumer()).toBe("0123456789")
})

