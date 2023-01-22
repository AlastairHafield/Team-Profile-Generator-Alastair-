//import Engineer constructor
const Engineer = require('../lib/engineer');

// creating engineer constructor with necessary properties
Test('creates an engineer object', () => {
    const engineer = new Engineer('John', 1, 'johnsmith@gmail.com', 'johnsmith');  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// testing methods
Test('gets engineer github', () => {
    const engineer = new Engineer('John', 1, 'johnsmith@gmail.com', 'johnsmith');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets engineer role', () => {
    const engineer = new Engineer('John', 1, 'johnsmith@gmail.com', 'johnsmith');
    expect(engineer.getRole()).toEqual("Engineer");
});
