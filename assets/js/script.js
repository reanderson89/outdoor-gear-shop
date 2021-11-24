// DOM variables
let gearList = document.getElementById("gearList");
let gearRows = document.getElementById("gearRows");


// API call to json placeholder. Will create items using this placeholder then switch out for database later.
const getGear = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            console.error(response)
        }
    }).then(json => {
        createGearList(json)
        return json;
    })
}

const createGearList = (json) => {
    let gear = json;
    console.log(gear)

    for (let i = 0; i < gear.length; i++){
        let newRow = document.createElement("tr")
        newRow.innerHTML = `<tr>
        <th scope="row">${gear[i].username}</th>
        <td>${gear[i].name}</td>
        <td>${gear[i].email}</td>
        <td>${gear[i].id}</td>
      </tr>`;
      gearRows.append(newRow);
    }
}

// uncomment the function call below to run the API and populate the list of gear... It is currently a list of people because I am using a jsonPlaceHolder API
// getGear();














