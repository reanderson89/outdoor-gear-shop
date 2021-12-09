class GearController {
    constructor(currentID = 0){
        this.currentID = currentID;
        this.gearArray = [];
    }

    addGear(url, name, use, price){
        let newGear = {
            id: this.currentID++,
            url,
            name,
            use,
            price
        }
        
        this.gearArray.push(newGear);
        this.setLocalStorage();
    }

    setLocalStorage(){
        let storeGear = JSON.stringify(this.gearArray);
        localStorage.setItem("gear", storeGear);
        let currentID = JSON.stringify(this.currentID);
        localStorage.setItem("currentID", currentID);
    }

    loadLocalStorage(){
        if(localStorage.getItem("gear")){
            let gearArrayJson = localStorage.getItem("gear");
            this.gearArray = JSON.parse(gearArrayJson);
        }
        if(localStorage.getItem("currentID")){
            let currentIdString = localStorage.getItem("currentID");
            this.currentID = JSON.parse(currentIdString);
        }
 
     }
}