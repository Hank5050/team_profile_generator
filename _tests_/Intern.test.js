const Intern = require("../lib/Intern");

test("receive name", () => {
    const intName = new Intern("John");
    expect(intName.getName()).toBe("John");
})

test("receive id", () => {
    const intId = new Intern("John", "1");
    expect(intId.getId()).toBe("1"); 
})

test("receive email", () => {
    const intEmail = new Intern("John", "1", "John010@gmail.com");
    expect(intEmail.getEmail()).toBe("John010@gmail.com"); 
})

test("receive school", () => {
    const intSchool = new Intern("John", "1", "John010@gmail.com", "University of Central Florida");
    expect(intSchool.getSchool()).toBe("University of Central Florida")
})