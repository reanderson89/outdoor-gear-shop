// start by creating an instance of your class
const gearManager = new GearController();


let gearRows = document.getElementById("gearRows");
let addGearBtn = document.getElementById("addGearButton");

gearManager.loadLocalStorage();



const renderListFromLocal = () => {
    // we want to loop through our array and display each item by adding it to our last
    let gear = gearManager.gearArray;

    for (let i = 0; i < gear.length; i++){
        let newRow = document.createElement("tr");
        newRow.setAttribute("data-id", gear[i].id);
        newRow.innerHTML = `
        <th scope="row"><img class="img-thumbnail" src="${gear[i].url}"></th>
        <td>${gear[i].name}</td>
        <td>${gear[i].use}</td>
        <td>${gear[i].price}</td>`;
      gearRows.append(newRow); 
    }
}
renderListFromLocal();



addGearBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    let gearUrl = document.getElementById("gearURL");
    let gearType = document.getElementById("gearType");
    let gearPrice = document.getElementById("gearPrice");
    let gearUsedFor = document.getElementById("gearUsedFor");
    
    gearManager.addGear(gearUrl.value, gearType.value, gearPrice.value, gearUsedFor.value);
    gearRows.innerHTML = '';
    renderListFromLocal();
    
    gearUrl.value = "";
    gearType.value = "";
    gearPrice.value = "";
    gearUsedFor.value = "";
    })





