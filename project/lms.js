class Subject {
    validateSub(subject) {
        if (!subject.hasOwnProperty("title") || typeof subject.title !== 'string') {
            throw new Error("objects dosen't have a tittle or isn't a string");
        }
        if (!subject.hasOwnProperty("lessons") || typeof subject.lessons !== 'number') {
            throw new Error("objects dosen't have a name or isn't a number");
        }
        if (subject.hasOwnProperty("description") && typeof subject.description !== 'string') {
            throw new Error("description should be a string");
        }
    }
    constructor(subject) {
        this.validateSub(subject);
        this.id = Math.floor(Math.random() * 100932842945000).toString();
        this.title = subject.title
        this.lessons = subject.lessons
        if (subject.description) (this.description = subject.description);
    }
}
const history = new Subject({
    title: 'History',
    lessons: 24
});
 class LMS {
    lms = new Map();
    add(data) {
        this.lms.set(data.id, data);
    }
    remove(data) {
        this.lms.delete(data.id);
    }
    verify(data) {
         return this.lms.has(data.id) 
        
    }
    readAll() {
        return [...this.lms.values()];
    }
}
const lms = new LMS();
lms.add(history);
// console.log(lms)
// console.log(lms.readAll());
// console.log(lms.verify(history))
// console.log(lms)
// lms.remove(history)
// console.log(lms)