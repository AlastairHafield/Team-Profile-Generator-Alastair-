// importing employee constructor 
const employee = require('./employee');

//intern constructor (extends employee constructor)

class intern extends employee {
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
        return 'intern';
    }

};

// exporting intern constructor 
module.exports = intern;