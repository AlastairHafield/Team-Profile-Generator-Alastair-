// importing employee constructor
const Employee = require('./Employee');
// manager constructor (extends employee constructor)

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // using employee properties
        super (name, id, email);
        //creating manager properties
        this.officeNumber = officeNumber;
    }
    //overriding employee method
    getRole() {
        return 'Manager';
    }
};

//exporting manager constructor
module.exports = Manager; 