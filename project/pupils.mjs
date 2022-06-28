export class Pupils{
    pupilsDB = new Map()
    validatePupil(pupils){
        if (!pupils.hasOwnProperty("name") || typeof pupils.name.first !== "string") {
            throw new TypeError("pupil hasn't property name or Firstname isn't a string")
        }
        if (!pupils.hasOwnProperty("name") || typeof pupils.name.last !== "string") {
            throw new TypeError("pupil hasn't property name or surname isn't a string")
        }    
        if(!pupils.hasOwnProperty("dateOfBirth") || typeof pupils.dateOfBirt !== 'string'){
            throw new TypeError("dateofBirth should be a string")
        }
        if (!pupils.hasOwnProperty("emails") || typeof pupils.emails[0].email !== "string") {
            throw new TypeError("emails should be a string")
        }
        if (!pupils.hasOwnProperty("emails") || typeof pupils.emails[0].primary !== "boolean") {
            throw new TypeError("primary should be a boolean")
        }
        if (!pupils.hasOwnProperty("sex") || typeof pupils.sex !== "string") {
            throw new TypeError("sex should be a string which will be male or famle field")
        }
        if (!pupils.hasOwnProperty("sex") || typeof pupils.sex !== "male") {
            throw new TypeError("sex should be a string which will be male or famle field")
        }
        if (!pupils.hasOwnProperty("sex") || typeof pupils.sex !== "female") {
            throw new TypeError("sex should be a string which will be male or famle field")
        }
        
    }
    constructor(){
    }      
    add(pupils){
        // this.validatePupil(pupils)
        const id = Math.floor(Math.random() * 12345678987654).toString()
        this.pupilsDB.set(id, pupils);
        return {id, ...this.pupilsDB.get(id)}
        
    }     
    read(id){
        if (id === undefined) {
            throw new TypeError("error:parameter is required");
        }
         if(typeof id !== 'string'){
            throw new Error("id is reuired and should be a string")
        }else{
            return {id, ...this.pupilsDB.get(id)}
        }
    }
    readAll(){
        if(arguments.length) throw new Error('argument was passed')
        return [...this.pupilsDB.values()];
    }
    remove(id){
        if(!arguments.length) throw new Error('no argument in read method')
        if (typeof id !== "string") {
            throw new TypeError("error: parameter is not string");
          }
        this.pupilsDB.delete(id)
    }
    update(id, updatedProfile) {
        if (id === undefined || updatedProfile === undefined) {
            throw new TypeError("error: two parameters are required");
        }
        if (typeof id !== "string") {
            throw new TypeError("error: first parameter is not string");
        }
        if (!this.pupilsDB.has(id)) {
            throw new Error("warnnig message")
        }
        if (typeof updatedProfile !== "object" || Array.isArray(updatedProfile)) {
            throw new TypeError("error: second parameter is not object");
          }
      
        const foundGroup = this.read(id);
        delete foundGroup.id;
        this.pupilsDB.set(id, {
            id,
            ...foundGroup,
            ...updatedProfile
        });
    }
}
const pupils = new Pupils();
// const pupilId = pupils.add({name: "luka", age: 19, country: "GE"});
// console.log(pupils)
// const pupilId2 = pupils.update(pupilId, {name: "mgeli", age: 30, sex: "male"})
// console.log(pupils)
// console.log(pupils.read(pupilId));
// pupils.remove(pupilId)
// console.log(pupils)