class Teachers {
    map = new Map()
    validateTeacher(teacher) {
        if (!teacher.hasOwnProperty("name") || typeof teacher.name.first !== "string") {
            throw new TypeError("name should be a string")
        }
        if (!teacher.hasOwnProperty("name") || typeof teacher.name.last !== "string") {
            throw new TypeError("surname should be a string")
        }
        if (!teacher.hasOwnProperty("dateOfBirth") && typeof teacher.dateOfBirth !== "string") {
            throw new TypeError("name should be a string")
        }
        if (!teacher.hasOwnProperty("emails") || typeof teacher.emails[0].email !== "string") {
            throw new TypeError("emails should be a string")
        }
        if (!teacher.hasOwnProperty("emails") || typeof teacher.emails[0].primary !== "boolean") {
            throw new TypeError("primary should be a boolean")
        }
        if (!teacher.hasOwnProperty("phones") || typeof teacher.phones[0].phone !== "string") {
            throw new TypeError("phone should be a string")
        }
        if (!teacher.hasOwnProperty("phones") || typeof teacher.phones[0].primary !== "boolean") {
            throw new TypeError("primary should be a boolean")
        }
        if (!teacher.hasOwnProperty("sex") || typeof teacher.sex !== "string") {
            throw new TypeError("name should be a string")
        }
        if (!teacher.hasOwnProperty("subjects") || typeof teacher.subject[0].subjects !== "string") {
            throw new TypeError("subject should be a string")
        }
        if (teacher.hasOwnProperty("description") && typeof teacher.description !== 'string') {
            throw new Error("description shpuld be a string");
        }
    }
    constructor() {
    }
    add(teacher) {
        // this.validateTeacher(teacher)
        const id = Math.floor(Math.random() * 12345678987654).toString()
        this.map.set(id, teacher);
        return id
    }
    read(id){
        if(typeof id !== 'string'){
            throw new Error("id is reuired and should be a string")
        }else{
            return {id, ...this.map.get(id)}
        }
    }
    remove(id){
        this.map.delete(id)
    }
    update(id, updatedProfile){
        if(!this.map.has(id)){
            throw new Error("warnnig message")
        }
        this.map.set(id, updatedProfile)
        return id

    }
}
const teachers = new Teachers()
// console.log(teachers)
const teacherId = teachers.add({name: "njdcnkd", phone: 1234});
const teacherId3 = teachers.add({name: "lukaaa", phone: 1234});
console.log(teachers)
console.log(teachers.read(teacherId));
// teachers.remove(teacherId)
console.log(teachers)
const teacherId2 = teachers.update(teacherId, {name: "luka", age: 24})
console.log(teachers)


