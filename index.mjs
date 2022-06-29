import { LMS } from "./project/lms.mjs";
import { Subject } from "./project/lms.mjs";
import { Teachers } from "./project/teacher.mjs";
import { Pupils } from "./project/pupils.mjs";
import { Groups } from "./project/groups.mjs";
import { GradeBooks } from "./project/gradeBooks.mjs";

const history = new Subject({
    title: 'History',
    lessons: 24
});
const math = new Subject({
    title: 'Math',
    lessons: 1
});
const lms = new LMS();
lms.add(history);
lms.add(math)
console.log(history.id)
console.log(lms)
console.log(lms.readAll());
console.log(lms.verify(history))
console.log(lms)
// lms.remove(history)
console.log(lms)

const teachers = new Teachers()
console.log(teachers)
const teacherId = teachers.add({
    name: { first: 'luka', last: "kurtanidze" }, dateOfBirth: "'09.05.2002'", phones: [{ phone: '577239116', primary: true }],
    emails: [{ email: "kurtanidzeluka@gmail.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
});
console.log(teachers)
const teacherId3 = teachers.add({
    name: { first: 'bacho', last: "kurtanidze" }, dateOfBirth: "20.10.18", phones: [{ phone: '5563434316', primary: true }],
    emails: [{ email: "kurtanimil.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
});
console.log(teachers)
console.log(teachers.read(teacherId));
const teacherId2 = teachers.update(teacherId, {
    name: { first: 'mgeli', last: "random" }, dateOfBirth: "09.21.21", age: "tooo old for wolf", phones: [{ phone: '88999999', primary: true }],
    emails: [{ email: "kurtanimdaddsadadsil.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
})
console.log(teachers)
// teachers.remove(teacherId)
// console.log(teachers)

const pupils = new Pupils();
const pupil = pupils.add({
    name: { first: 'luka', last: "kurtanidze" }, dateOfBirth: '09.09.02', phones: [{
        phone: "4749848347287",
        primary: true
    }], sex: "male", age: 80, country: "eu"
});
const pupil4 = pupils.add({
    name: { first: 'TAA', last: "alexander-arnold" }, dateOfBirth: '09.12.31', phones: [{
        phone: "111122222",
        primary: true
    }], sex: "male", age: 23, country: "dssssssu"
});
console.log(pupils)
const pupil2 = pupils.update(pupil.id, { name: { first: 'lukachoo', last: "kurtanidze" }, age: 30, sex: "male" })
console.log(pupils)
// pupils.remove(pupilId)
// console.log(pupils)

const groups = new Groups();
const groupID = groups.add(224);
groups.addPupil(groupID, pupils.read(pupil.id));
groups.addPupil(groupID, pupils.read(pupil4.id));
//  groups.removePupil(groupID, pupilId4)
console.log(groups.read(groupID))
console.log(groups.readAll())
groups.update(groupID, {
    room: 237
});
console.log(groups)

const gradebooks = new GradeBooks(groups.readAll(), teachers.readAll(), lms.readAll());
const gradeBooksId = gradebooks.add(groupID);
console.log(gradeBooksId);
const record_1 = {
    pupilId: pupil.id,
    teacherId: teacherId3,
    subjectId: history.id,
    lesson: 1,
    mark: 9
};
const record_2 = {
    pupilId: pupil.id,
    teacherId: teacherId,
    subjectId: math.id,
    lesson: 4,
    mark: 6
};
gradebooks.addRecord(gradeBooksId, record_1);
gradebooks.addRecord(gradeBooksId, record_2);
console.log(gradebooks)
console.log(gradebooks.read(gradeBooksId, pupil.id));
console.log(gradebooks.readAll(gradeBooksId));
console.log(gradebooks)

