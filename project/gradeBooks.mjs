import { teacherId } from "./teacher.mjs"
class GradeBooks {
    map = new Map()
    addRecord(id, record) {
        let arr = this.map.get(id)
        if (arr) {
            this.map.set(id, [...arr, record]);
        }else{
            this.map.set(id, [record]);

        }
        return id
    }
}
const gradebooks = new GradeBooks();
const record = {
    pupilId: '1000232',
    teacherId: teacherId,
    subjectId: "dkskdksd2",
    lesson: 1,
    mark: 9
};
const record2 = {
    pupilId: 90,
    teacherId: teacherId,
    subjectId: "dkskdksd2",
    lesson: "mgeli",
    mark: 9
    
};
console.log(gradebooks.addRecord("1234", record))
console.log(gradebooks.addRecord("1234", record2))
console.log(gradebooks)
