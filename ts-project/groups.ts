export class Groups{
    groups = new Map();
    public add(room: number): string{
        const id = Math.floor(Math.random() * 123456788987654).toString()
        const pupils = [];
        this.groups.set(id , {id, room, pupils});
        return id;
    }
    public addPupil(roomId, pupil): number{
        if(!this.groups.has(roomId)){
            throw new Error("warning message");
        }
        console.log(pupil)
        const room = this.groups.get(roomId);
        room.pupils.push(pupil);
        return room;
    }
    public removePupil(roomId, pupilId): number{
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
    public read(id: string){
        if (id === undefined) {
            throw new TypeError("error:parameter is required");
        }
        if(typeof id !== 'string'){
            throw new Error("id is reuired and should be a string")
        }else{
            return {id, ...this.groups.get(id)}
        }
    }
    public update(groupId, data){
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
    public readAll(){
        if(arguments.length) throw new Error('argument was passed')
        return [...this.groups.values()];
    }
}