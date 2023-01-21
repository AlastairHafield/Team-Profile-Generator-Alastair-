// import employee constructor 
const Employee = require('./Employee');

// engineer constructor (extends employee constructor)

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //using employee properties for engineer 
        super (name, id, email);
        // engineer property 
        this.github = github;
    }
    //engineer method
    getGithub() {
        return this.github;
    }
    // overriding parent role
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;