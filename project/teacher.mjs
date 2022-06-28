export class Teachers {
    map = new Map()
    validateTeacher(teacher) {
        if (!teacher.hasOwnProperty("name") || typeof teacher.name.first !== "string") {
            throw new TypeError("name should be a string")
        }
        if (!teacher.hasOwnProperty("name") || typeof teacher.name.last !== "string") {
            throw new TypeError("surname should be a string")
        }
        if (!teacher.hasOwnProperty("dateOfBirth") && typeof teacher.dateOfBirth !== "string") {
            throw new TypeError("warning message")
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
        if (!pupils.hasOwnProperty("sex") || typeof teacher.sex !== "male") {
            throw new TypeError("sex should be a string which will be male or famle field")
        }
        if (!pupils.hasOwnProperty("sex") || typeof teacher.sex !== "female") {
            throw new TypeError("sex should be a string which will be male or famle field")
        }
        if (!teacher.hasOwnProperty("subjects") ) {
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
        this.map.set(id, {id, ...teacher});
        return id
    }
    read(id) {
        if (id === undefined) {
            throw new TypeError("error:parameter is required");
        }
        if (typeof id !== 'string') {
            throw new Error("id is reuired and should be a string")
        } else {
            return { id, ...this.map.get(id) }
        }
    }
    readAll(){
        if(arguments.length) throw new Error('argument was passed')
        console.log(this.map.values())
        return [...this.map.values()];
    }
    remove(id) {
        if (typeof id !== "string") {
            throw new TypeError("error: parameter is not string");
        }
        if (!this.map.has(id)) {
            throw new TypeError("id is not exist or invalid");
        }
        this.map.delete(id)
    }
    update(id, updatedProfile) {
        if (id === undefined || updatedProfile === undefined) {
            throw new TypeError("error: two parameters are required");
        }
        if (typeof id !== "string") {
            throw new TypeError("error: first parameter is not string");
        }
        if (typeof updatedProfile !== "object" || Array.isArray(updatedProfile)) {
            throw new TypeError("error: second parameter is not object");
          }
      
        const foundGroup = this.read(id);
        delete foundGroup.id;
        this.map.set(id, {
            id,
            ...foundGroup,
            ...updatedProfile
        });
        
    }
}
const teachers = new Teachers()
// console.log(teachers)
// const teacherId = teachers.add({ name: "njdcnkd", phone: 1234 });
// console.log(teachers)
// console.log(teachers.read(teacherId));
// const teacherId2 = teachers.update(teacherId, { name: "luka", age: 24 })
// console.log(teachers)
// teachers.remove(teacherId)
// console.log(teachers)

