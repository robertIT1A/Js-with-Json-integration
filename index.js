let jsonData;

window.addEventListener("load", ()=> {
    fetch("data.json")
        .then((res) => res.json()) // responce
        .then((data) => (jsonData = data)) // store the data in the json data varaible
        .catch((err) => console.log(err)); //catch (incase there's an error)
});

let inputEl = document.querySelector("input"); // get the input
let buttonEl = document.querySelector("button"); 
let headingEl = document.querySelector("h2"); // malalagyan

buttonEl.addEventListener("click", () => {

    let value = inputEl.value; // get the value of input
    let id = Number(value);
    let user = jsonData.find(item => item.id == id);

    if(user) headingEl.textContent = user.name;
    else headingEl.textContent = "Not Found";
})