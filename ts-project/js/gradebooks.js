"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeBooks = void 0;
class GradeBooks {
    constructor(groups, teacher, lms) {
        this.map = new Map();
        this.groups = groups;
        this.teacher = teacher;
        this.lms = lms;
    }
    add(groupId) {
        this.map.set(groupId, []);
        return groupId;
    }
    addRecord(id, record) {
        let arr = this.map.get(id);
        if (arr) {
            this.map.set(id, [...arr, record]);
        }
        else {
            this.map.set(id, [record]);
        }
        return id;
    }
    getRecord(data) {
        console.log(this.teacher);
        console.log(data);
        let teacherName;
        this.teacher.forEach((singleTeacher) => {
            if (singleTeacher.id === data.teacherId) {
                teacherName = singleTeacher.name.first + " " + singleTeacher.name.last;
            }
        });
        let subjectName = '';
        this.lms.forEach(value => {
            if (value.id === data.subjectId) {
                subjectName = value.title;
            }
        });
        return {
            teacher: teacherName,
            subject: subjectName,
            lesson: data.lesson,
            mark: data.mark
        };
    }
    getName(data) {
        let pupilName = '';
        console.log(this.groups);
        console.log(data);
        this.groups.forEach(value => {
            value.pupils.forEach(pupil => {
                if (data.pupilId === pupil.id && !pupilName) {
                    pupilName = `${pupil.name.first} ${pupil.name.last}`;
                }
            });
        });
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
        });
        return {
            name: pupilName,
            record: pupilArr
        };
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
exports.GradeBooks = GradeBooks;
