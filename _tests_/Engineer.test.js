const Engineer = require('../lib/Engineer');

test("receive name", () => {
    const engName = new Engineer("John");
    expect(engName.getName()).toBe("John");
})

test("receive id", () => {
    const engId = new Engineer("John", "1");
    expect(engId.getId()).toBe("1"); 
})

test("receive email", () => {
    const engEmail = new Engineer("John", "1", "John010@gmail.com");
    expect(engEmail.getEmail()).toBe("John010@gmail.com"); 
})

test("receive gitHub", () => {
    const engGitHub = new Engineer("John", "1", "John010@gmail.com", "https://github.com/John010");
    expect(engGitHub.getGitHub()).toBe("https://github.com/John010")
})