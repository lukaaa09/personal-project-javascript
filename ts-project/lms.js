class Subject {
    constructor(obj) {
        this.tittle = obj.tittle;
        this.lessons = obj.lessons;
        if (obj.description) {
            this.description = obj.description;
        }
        this.id = Math.floor(Math.random() * Date.now()).toString();
    }
    id(){
        return this.id
    }
}

    const history = new Subject({
        tittle: 'History',
        lessons: 24
    });

 class Lms {
    constructor() {
        this.lms = new Map();
    }
    validateSub(subject) {
        if (Object.keys(subject).length < 2 || Object.keys(subject).length > 3) {
            throw new Error('1');
        }
        if (!subject.hasOwnProperty("lessons") || typeof subject.lessons !== 'number') {
            throw new Error("3");
        }
        if (subject.hasOwnProperty("description") && typeof subject.description !== 'string') {
            throw new Error("4");
        }
    }
    add(subject) {
        this.validateSub(subject);
        this.lms.set(subject.id, subject);
    }
    remove(subject) {
        if (!this.lms.has(subject.id)) {
            throw new TypeError('warning message');
        }
        this.lms.delete(subject.id);
    }
    verify(subject) {
        return this.lms.has(subject.id);
    }
    readAll() {
        if (arguments.length) {
            throw new Error('arguments was passed');
        }
        return [...this.lms.values()];
    }
}
const lms = new Lms();
lms.add(history);
console.log(history.id)
console.log(lms)
console.log(lms.readAll());
console.log(lms.verify(history))
console.log(lms)
lms.remove(history)
console.log(lms)
