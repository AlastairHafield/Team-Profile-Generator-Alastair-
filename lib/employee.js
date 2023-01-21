
// creating employee constructor with necessary properties 
class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // creating necessary methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'employee';
    }
};
//exporting constructor
module.exports = employee;