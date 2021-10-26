class EmployeePayrollData {
    //getter and setter Method
    get id() {
        return this.id
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1} [a-zA\\s] {2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            'Name is Incorrect!';
        }
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this.salary;
    }
    set salary(salary) {
        this.salary = salary;
    }
    get note() {
        return this.note;
    }
    set note(note) {
        this.note = note;
    }

    get startDate() {
        return this.startDate;
    }
    set startDate(startDate) {
        this.startDate = startDate;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + ", name'" + this.name + ", gender'" + this.gender + ", profilePic'" + this.profilePic + ", department'" + this.department + ", salary'" + this.salary + ", startDate'" + empDate + ", note'" + this.note;
    }
}