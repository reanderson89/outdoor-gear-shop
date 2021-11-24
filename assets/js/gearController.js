class GearController {
    constructor(currentId = 0, ){
        this.currentId = currentId;
        this.gear = [];
    }

    addGear(picUrl, name, usedFor, price){
        let newGear = {
            id: this.currentId++,
            picUrl,
            name,
            usedFor,
            price
        }
        this.gear.push(newGear);
    }
}