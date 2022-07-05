interface RecordInt{
    pupilId: string,
    teacherId: string,
    subjectId: string,
    lessons: number,
    mark: number
}
export class GradeBooks{
    public map = new Map()
    public groups;
    public teacher;
    public lms;
    public constructor(groups, teacher, lms) {
        this.groups = groups
        this.teacher = teacher
        this.lms = lms
    }
    public add(groupId: string){
        this.map.set(groupId, [])
        return groupId
    }
    public addRecord(id: any, record: RecordInt) {
        let arr = this.map.get(id)
        if (arr) {
            this.map.set(id, [...arr, record]);
        } else {
            this.map.set(id, [record]);
        }
        return id
    }
    public getRecord(data) {
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
    public getName(data) {
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
    public read(gradeBookId, pupilId) {
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
    public readAll(gradeBookId) {
        if (!this.map.has(gradeBookId)) {
            throw new Error('warning message');
        }
        const data = this.map.get(gradeBookId);
        return [...data];
    }
    public clear() {
        this.map.clear();
    }

}


