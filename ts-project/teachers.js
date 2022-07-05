 class Teachers {
    constructor() {
        this.map = new Map();
    }
    validateTeacher(data) {
        let date_regex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
        date_regex.test(data.dateOfBirth);
        if (!date_regex) {
            throw new Error('warning message');
        }
    }
    add(teacher) {
        const id = Math.floor(Math.random() * 12345678987654).toString();
        this.map.set(id, Object.assign({ id }, teacher));
        return id;
    }
    read(id) {
        return Object.assign({ id }, this.map.get(id));
    }
    readAll() {
        if (arguments.length)
            throw new Error('argument was passed');
        console.log(this.map.values());
        return [...this.map.values()];
    }
    remove(id) {
        if (!this.map.has(id)) {
            throw new TypeError("id is not exist or invalid");
        }
        this.map.delete(id);
    }
    update(id, updatedProfile) {
        const foundGroup = this.read(id);
        delete foundGroup.id;
        this.map.set(id, Object.assign(Object.assign({ id }, foundGroup), updatedProfile));
    }
}
const teachers = new Teachers();
// console.log(teachers)
// const teacherId = teachers.add({
//     name: { first: 'luka', last: "kurtanidze" }, dateOfBirth: "'09.05.2002'", phones: [{ phone: '577239116', primary: true }],
//     emails: [{ email: "kurtanidzeluka@gmail.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
// });
// console.log(teachers)
// const teacherId3 = teachers.add({
//     name: { first: 'bacho', last: "kurtanidze" }, dateOfBirth: "20.10.18", phones: [{ phone: '5563434316', primary: true }],
//     emails: [{ email: "kurtanimil.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
// });
// console.log(teachers)
// console.log(teachers.read(teacherId));
// const teacherId2 = teachers.update(teacherId, {
//     name: { first: 'mgeli', last: "random" }, dateOfBirth: "09.21.21",  phones: [{ phone: '88999999', primary: true }],
//     emails: [{ email: "kurtanimdaddsadadsil.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
// })
// console.log(teachers)
// teachers.remove(teacherId)
// console.log(teachers)
