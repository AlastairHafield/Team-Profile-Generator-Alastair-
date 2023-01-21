// import employee constructor 
const employee = require('./employee');

// engineer constructor (extends employee constructor)

class engineer extends employee {
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
        return 'engineer';
    }
};

module.exports = engineer;