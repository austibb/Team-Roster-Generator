class Employee {
    constructor(name = 'Austin', id = 1234, email = 'sample@gmail.com') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
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
        return this.role;
    };
};

class Manager extends Employee {
    constructor(name, id, email, officeNo = 1) {
        super(name, id, email);
        this.officeNo = officeNo;
        this.role = 'Manager';
    };

    officeNo() {
        return this.officeNo;
    };

    role() {
        return this.role;
    };
};

class Engineer extends Employee {
    constructor(name, id, email, github = austibb) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    };

    github() {
        return this.github;
    };

    role() {
        return this.role;
    };
};

class Intern extends Employee {
    constructor(name, id, email, school = 'preschool') {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    };

    school() {
        return this.school;
    };

    role() {
        return this.role;
    };
};

module.exports = { Manager, Engineer, Intern };