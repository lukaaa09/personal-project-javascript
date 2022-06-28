// import { LMS } from "./project/lms.mjs";
// import { Subject } from "./project/lms.mjs";
// import { Teachers } from "./project/teacher.mjs";
// import { Pupils } from "./project/pupils.mjs";
// import { Groups } from "./project/groups.mjs";

// const history = new Subject({
//     title: 'History',
//     lessons: 24
// });
// const lms = new LMS();
// lms.add(history);
// console.log(history.id)
// console.log(lms)
// console.log(lms.readAll());
// console.log(lms.verify(history))
// console.log(lms)
// lms.remove(history)
// console.log(lms)

// const teachers = new Teachers()
// console.log(teachers)
// const teacherId = teachers.add({ name: "njdcnkd", phone: 1234 });
// console.log(teachers)
// console.log(teachers.read(teacherId));
// const teacherId2 = teachers.update(teacherId, { name: "luka", age: 24 })
// console.log(teachers)
// teachers.remove(teacherId)
// console.log(teachers)

// const pupils = new Pupils();
// const pupilId = pupils.add({name: "luka", age: 19, country: "GE"});
// console.log(pupils)
// const pupilId2 = pupils.update(pupilId, {name: "mgeli", age: 30, sex: "male"})
// console.log(pupils)
// console.log(pupils.read(pupilId));
// pupils.remove(pupilId)
// console.log(pupils)

// const groups = new Groups();
//  const groupID = groups.add(224);
//  groups.addPupil(groupID, pupils.read('0'));
//  groups.addPupil(groupID, pupils.read('1'));
//  groups.update('0', {
//      room: 237
//    });