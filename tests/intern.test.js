// import Intern constructor
const Intern = require('../lib/Intern');

// creating intern constructor with necessary properties
Test('creates an intern object', () => {
    const intern = new Intern('John', 1, 'johnsmith@gmail.com', 'Univesity of Birmingham');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// testing methods
Test('gets intern school', () => {
    const intern = new Intern('John', 1, 'johnsmith@gmail.com', 'Univesity of Birmingham');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets intern role', () => {
    const intern = new Intern('John', 1, 'johnsmith@gmail.com', 'Univesity of Birmingham');
    expect(intern.getRole()).toEqual("Intern");
});
