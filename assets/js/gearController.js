class GearController {
    constructor(currentID = 0){
        this.currentID = currentID;
        this.gearArray = [];
    }

    addGear(name, weight, height, age){
        let newAthlete = {
            name,
            weight,
            height,
            age
        }
        
        fetch("https://trakfyt-api.herokuapp.com/api/athlete", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(newAthlete) // body data type must match "Content-Type" header
          }).then(response => {
              console.log(response)
              this.loadLocalStorage();
            })
    }

    setLocalStorage(){
        let storeGear = JSON.stringify(this.gearArray);
        localStorage.setItem("gear", storeGear);
        let currentID = JSON.stringify(this.currentID);
        localStorage.setItem("currentID", currentID);
    }

    loadLocalStorage(){
       fetch("https://trakfyt-api.herokuapp.com/api/athlete")
       .then(response => response.json())
       .then(data => {
        this.gearArray = data;   
        console.log(data)
        renderListFromLocal();
    })
     }
}