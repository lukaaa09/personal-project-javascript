// import { teacherId } from "./teacher.mjs"
export class GradeBooks {
    constructor(groups, teacher, lms) {
        this.groups = groups
        this.teacher = teacher
        this.lms = lms
    }
    map = new Map()
    add(groupId) {
        // const id = Math.floor(Math.random() * 12345678987654).toString()
        this.map.set(groupId, []);
        return groupId
    }
    addRecord(id, record) {
        // if(!record.hasOwnProperty('pupilId')){
        //     throw Error('pupilid field is required )
        // }
        // if(!record.hasOwnProperty('teacherId') ){
        //     throw Error('teacherid field is required )
        // }
        // if(!record.hasOwnProperty('subjectId') ){
        //     throw Error('subjectid field is required )
        // }
        // if(!record.hasOwnProperty('lesson') ){
        //     throw Error('lesson field is required )
        // }
        // if(!record.hasOwnProperty('mark') ){
        //     throw Error('mark field is required )
        // }
        let arr = this.map.get(id)
        if (arr) {
            this.map.set(id, [...arr, record]);
        } else {
            this.map.set(id, [record]);
        }
        return id
    }
    getRecord(data) {
        console.log(this.teacher)
        console.log(data)
        let teacherName;
        this.teacher.forEach((singleTeacher) => {
            if (singleTeacher.id === data.teacherId) {
                teacherName = singleTeacher.name.first + " " + singleTeacher.name.last;

            }
        })
        let subjectName = '';
        this.lms.forEach(value => {
            if (value.id === data.subjectId) {
                subjectName = value.title;
            }
        })
        return {
            teacher: teacherName,
            subject: subjectName,
            lesson: data.lesson,
            mark: data.mark
        }
    }
    getName(data) {
        let pupilName = '';
        console.log(this.groups)
        console.log(data)
        this.groups.forEach(value => {
            value.pupils.forEach(pupil => {
                if (data.pupilId === pupil.id && !pupilName) {
                    pupilName = `${pupil.name.first} ${pupil.name.last}`;
                }
            })
        })
        return pupilName;
    }
    read(gradeBookId, pupilId) {
        if (!this.map.has(gradeBookId)) {
            throw new Error('warning message');
        }
        const data = this.map.get(gradeBookId);
        let pupilName = '';
        let pupilArr = [];
        data.forEach(value => {
            if (value.pupilId === pupilId) {
                pupilArr.push(this.getRecord(value));
            }
            if (!pupilName) {
                pupilName = this.getName(value);
            }
        })
        return {
            name: pupilName,
            record: pupilArr
        }
    }
    readAll(gradeBookId) {
        if (!this.map.has(gradeBookId)) {
            throw new Error('warning message');
        }
        const data = this.map.get(gradeBookId);
        return [...data];
    }
    clear() {
        this.map.clear();
    }
}
// const gradebooks = new GradeBooks(groups.readAll(), teachers.readAll(), lms.readAll());
//  const gradeBooksId = gradebooks.add('0');
//  console.log(gradeBooksId);
//  const record_1 = {
//    pupilId: '0',
//    teacherId: '0',
//    subjectId: history.id,
//    lesson: 1,
//    mark: 9
//  };
//  const record_2 = {
//    pupilId: '1',
//    teacherId: '2',
//    subjectId: math.id,
//    lesson: 1,
//    mark: 9
//  };
//  gradebooks.addRecord(gradeBooksId, record_1);
//  gradebooks.addRecord(gradeBooksId, record_2);
//  console.log(gradebooks.read(gradeBooksId, pupil1));
//  console.log(gradebooks.readAll(gradeBooksId));


