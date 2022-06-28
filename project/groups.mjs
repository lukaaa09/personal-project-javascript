export class Groups {
    groups = new Map();
    add(room){
        if(typeof room !== 'number') throw new TypeError("parameter should be a number");
        const id = Math.floor(Math.random() * 123456788987654).toString()
        const pupils = [];
        this.groups.set(id , {id, room, pupils});
        return id;
    }
    addPupil(roomId, pupil){
        if(!this.groups.has(roomId)){
            throw new Error("warning message");
        }
        const room = this.groups.get(roomId);
        room.pupils.push(pupil);
        return room;
    }
    removePupil(roomId, pupilId){
        if(!this.groups.has(roomId)){
            throw new Error("warning message");
        }
        const room = this.groups.get(roomId);
        room.pupils.forEach((pupil,index) => {
            if(pupil.id === pupilId){
                room.pupils.splice(index, 1);
            }
        });
        return room;
    }
    update(groupId, data){
        if(Object.keys(data).length !== 1 || !data.hasOwnProperty("room")
            || typeof data.room !== 'number'){
            throw new Error('warning message');
        }
        const foundGroup = this.read(groupId);
        delete foundGroup.groupId;
        this.groups.set(groupId, {
            ...foundGroup,
            ...data
        });
    }
    read(id){
        if (id === undefined) {
            throw new TypeError("error:parameter is required");
        }
        if(typeof id !== 'string'){
            throw new Error("id is reuired and should be a string")
        }else{
            return {id, ...this.groups.get(id)}
        }
    }
    readAll(){
        if(arguments.length) throw new Error('argument was passed')
        return [...this.groups.values()];
    }
}
const groups = new Groups();
 const groupID = groups.add(224);
 groups.addPupil(groupID, pupils.read('0'));
 groups.addPupil(groupID, pupils.read('1'));
 groups.update('0', {
     room: 237
   });