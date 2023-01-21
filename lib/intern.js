// importing employee constructor 
const Employee = require('./Employee');

//intern constructor (extends employee constructor)

class Intern extends Employee {
    constructor (name, id, email, school) {
        // using employee properties 
        super (name, id, email);
        // creating intern properties 
        this.school = school;
    }
    //intern method
    getSchool() {
        return this.school;
    }
    //overriding employee method
    getRole() {
        return 'Intern';
    }

};

// exporting intern constructor 
module.exports = Intern;