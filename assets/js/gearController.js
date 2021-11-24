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
        this.setLocalStorage()
    }

    setLocalStorage(){
        let storeGear = JSON.stringify(this.gear);
        localStorage.setItem("gear", storeGear);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem("currentId", currentId);

    }

    loadLocalStorage(){
        if(localStorage.getItem("gear")){
            let gearArrayJson = localStorage.getItem("gear");
            console.log(gearArrayJson)
            console.log(JSON.parse(gearArrayJson))
            this.gear = JSON.parse(gearArrayJson);
        }
        if(localStorage.getItem("currentId")){
            let currentIdString = localStorage.getItem("currentId");
            this.currentId = Number(currentIdString);
        }
 
     }
}