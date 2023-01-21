// importing employee constructor
const employee = require('./employee');
// manager constructor (extends employee constructor)

class manager extends employee {
    constructor (name, id, email, officeNumber) {
        // using employee properties
        super (name, id, email);
        //creating manager properties
        this.officeNumber = officeNumber;
    }
    //overriding employee method
    getRole() {
        return 'manager';
    }
};

//exporting manager constructor
module.exports = manager; 