class Employee {
    constructor(name = 'Austin', id = 1234, email = 'sample@gmail.com') {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    name() {
        return this.name;
    };
    id() {
        return this.id;
    };
    email() {
        return this.email;
    };
    role() {
        return "Employee";
    };
};

class Manager extends Employee {
    constructor(name, id, email, officeNo = 1) {
        super(name, id, email);
        this.officeNo = officeNo;
    };

    officeNo() {
        return this.officeNo;
    };

    role() {
        return "Manager";
    };
};

class Engineer extends Employee {
    constructor(name, id, email, github = austibb) {
        super(name, id, email);
        this.github = github;
    };

    github() {
        return this.github;
    };

    role() {
        return "Engineer";
    };
};

class Intern extends Employee {
    constructor(name, id, email, school = 'preschool') {
        super(name, id, email);
        this.school = school;
    };

    school() {
        return this.school;
    };

    role() {
        return "Intern";
    };
};

module.exports = { Manager, Engineer, Intern };