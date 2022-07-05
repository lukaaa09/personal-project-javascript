interface  SubjectInt {
    tittle: string;
    lessons: number;
    description?: string;
    id?: string;
}
export class Subject implements SubjectInt {
    tittle: string;
    lessons: number;
    description?: string;
    id: string;
    constructor(obj: SubjectInt){
        this.tittle = obj.tittle
        this.lessons = obj.lessons
        if(obj.description){
            this.description = obj.description
        }
        this.id = Math.floor(Math.random() * Date.now()).toString()
    }
}
{const history = new Subject({
    tittle: 'History',
    lessons: 24
})};
export class Lms {
    lms = new Map()
    private validateSub(subject: { hasOwnProperty?: any; title?: any; lessons?: any; description?: any; }){
        if(Object.keys(subject).length < 2 || Object.keys(subject).length > 3){
            throw new Error('1');
        }
        if(!subject.hasOwnProperty("lessons") || typeof subject.lessons !== 'number'){
            throw new Error("3");
        }
        if(subject.hasOwnProperty("description") && typeof subject.description !== 'string'){
            throw new Error("4");
        }
    }

    add(subject: SubjectInt): void{
        this.validateSub(subject)
        this.lms.set(subject.id, subject);        
    }
    remove(subject: SubjectInt): void{
        if (!this.lms.has(subject.id)){
            throw new TypeError('warning message')
        }
        this.lms.delete(subject.id)
    }
    verify(subject: SubjectInt){
        return this.lms.has(subject.id)
    }
    readAll(){
        if(arguments.length){
            throw new Error('arguments was passed')
        }
        return [...this.lms.values()];
    }
}
const lms = new Lms();
// lms.add(history);
// console.log(history.id)
// console.log(lms)
// console.log(lms.readAll());
// console.log(lms.verify(history))
// console.log(lms)
// lms.remove(history)
// console.log(lms)
