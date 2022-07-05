"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_1 = require("./lms");
const lms_2 = require("./lms");
const teachers_1 = require("./teachers");
const pupils_1 = require("./pupils");
const groups_1 = require("./groups");
const gradebooks_1 = require("./gradebooks");
const history = new lms_1.Subject({
    tittle: 'History',
    lessons: 24
});
const lms = new lms_2.Lms();
lms.add(history);
console.log(history.id);
console.log(lms);
console.log(lms.readAll());
console.log(lms.verify(history));
console.log(lms);
lms.remove(history);
console.log(lms);
const teachers = new teachers_1.Teachers();
console.log(teachers);
const teacherId = teachers.add({
    name: { first: 'luka', last: "kurtanidze" }, dateOfBirth: "'09.05.2002'", phones: [{ phone: '577239116', primary: true }],
    emails: [{ email: "kurtanidzeluka@gmail.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
});
console.log(teachers);
const teacherId3 = teachers.add({
    name: { first: 'bacho', last: "kurtanidze" }, dateOfBirth: "20.10.18", phones: [{ phone: '5563434316', primary: true }],
    emails: [{ email: "kurtanimil.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
});
console.log(teachers);
console.log(teachers.read(teacherId));
const teacherId2 = teachers.update(teacherId, {
    name: { first: 'mgeli', last: "random" }, dateOfBirth: "09.21.21", phones: [{ phone: '88999999', primary: true }],
    emails: [{ email: "kurtanimdaddsadadsil.com", primary: true }], sex: "male", subjects: [{ subject: 'history' }]
});
console.log(teachers);
teachers.remove(teacherId);
console.log(teachers);
const pupil_1 = {
    "name": {
        "first": "mgelkaca turashauli",
        "last": "maglakelidze"
    },
    "dateOfBirth": "09/05/2002",
    "phones": [
        {
            "phone": "577 23 91 16",
            "primary": true
        }
    ],
    "sex": "male",
    "description": ""
};
const pupil_2 = {
    "name": {
        "first": "mohamed",
        "last": "Salah"
    },
    "dateOfBirth": "02/03/9002",
    "phones": [
        {
            "phone": "511 11 11 00",
            "primary": true
        }
    ],
    "sex": "male",
    "description": "male"
};
const pupils = new pupils_1.Pupils();
const pupil1 = pupils.add(pupil_1);
console.log(pupils.read('0'));
const pupil2 = pupils.add(pupil_2);
const groups = new groups_1.Groups();
const groupID = groups.add(224);
//  groups.removePupil(groupID, pupilId4)
console.log(groups.read(groupID));
console.log(groups.readAll());
groups.update(groupID, {
    room: 237
});
console.log(groups);
const gradebooks = new gradebooks_1.GradeBooks(groups.readAll(), teachers.readAll(), lms.readAll());
const gradeBooksId = gradebooks.add('0');
console.log(gradeBooksId);
const record_1 = {
    pupilId: '0',
    teacherId: teacherId,
    subjectId: history.id,
    lessons: 1,
    mark: 9
};
gradebooks.addRecord(gradeBooksId, record_1);
console.log(gradebooks.read(gradeBooksId, pupil_1));
console.log(gradebooks.readAll(gradeBooksId));
