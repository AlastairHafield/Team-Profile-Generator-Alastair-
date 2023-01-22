//import manager constructor
const Manager = require('../lib/Manager');

// creating manager constructor with necessary properties
test('creates a manager object', () => {
    const manager = new Manager('John', 1, 'johnsmith@gmail.com', 3);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// testing methods
test('gets manager role', () => {
    const manager = new Manager('John', 1, 'johnsmith@gmail.com', 3);
    expect(manager.getRole()).toEqual("Manager");
});
