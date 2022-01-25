// start by creating an instance of your class
const gearManager = new GearController();


let gearRows = document.getElementById("gearRows");
let addGearBtn = document.getElementById("addGearButton");

gearManager.loadLocalStorage();



const renderListFromLocal = () => {
    // we want to loop through our array and display each item by adding it to our last
    let gear = gearManager.gearArray;
    console.log(gear);

    for (let i = 0; i < gear.length; i++){
  
        let newRow = document.createElement("tr");
        newRow.setAttribute("data-id", gear[i].id);
        newRow.innerHTML = `
        <th scope="row">${gear[i].name}</th>
        <td>${gear[i].age}</td>
        <td>${gear[i].height}</td>
        <td>${gear[i].weight}</td>`;
      gearRows.append(newRow); 
    }
}




addGearBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    let athleteName = document.getElementById("gearURL");
    let athleteWeight = document.getElementById("gearType");
    let athleteHeight = document.getElementById("gearPrice");
    let athleteAge = document.getElementById("gearUsedFor");
    
    gearManager.addGear(athleteName.value, athleteAge.value, athleteWeight.value, athleteHeight.value);
    gearRows.innerHTML = '';
    
    athleteHeight.value = "";
    athleteAge.value = "";
    athleteWeight.value = "";
    athleteName.value = "";
    })





