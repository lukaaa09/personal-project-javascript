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
const lms = new LMS();
lms.add(history);
console.log(history.id)
console.log(lms)
console.log(lms.readAll());
console.log(lms.verify(history))
console.log(lms)
// lms.remove(history)
console.log(lms)

const teachers = new Teachers()
console.log(teachers)
const teacherId = teachers.add({ name: "njdcnkd", phone: 1234 });
console.log(teachers)
console.log(teachers.read(teacherId));
const teacherId2 = teachers.update(teacherId, { name:{first: 'luka', last: "kurtanidze"} , age: 24 })
console.log(teachers)
// teachers.remove(teacherId)
console.log(teachers)

const pupils = new Pupils();
const pupilId = pupils.add({name:{first: 'luka', last: "kurtanidze"}, age: 80, country: "eu"});
const pupilId4 = pupils.add({name: {first: 'gurami', last: "kurtanidze"}, age: 10, country: "dwdw"});
console.log(pupils)
const pupilId2 = pupils.update(pupilId, {name: {first: 'mgeli', last: "kurtanidze"}, age: 30, sex: "male"})
console.log(pupils)
// pupils.remove(pupilId)
console.log(pupils)

const groups = new Groups();
 const groupID = groups.add(224);
 groups.addPupil(groupID, pupils.read(pupilId));
 groups.addPupil(groupID, pupils.read(pupilId4));
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
     pupilId: '0',
     teacherId: '0',
     subjectId: history.id,
     lesson: 1,
     mark: 9
   };
   const record_2 = {
     pupilId: '0',
     teacherId: '0',
     subjectId: "12222",
     lesson: 4,
     mark: 6
   };
   gradebooks.addRecord(gradeBooksId, record_1);
   gradebooks.addRecord(gradeBooksId, record_2);
   console.log(gradebooks)
   console.log(gradebooks.read(gradeBooksId, '0'));
   console.log(gradebooks.readAll(gradeBooksId));
   console.log(gradebooks)

  