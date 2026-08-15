

const groceries = [];




const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const count = document.querySelector("#count");
const list = document.querySelector("#list");




function render() {
    
    list.innerHTML = "";

    
    groceries.forEach(item => {
        const li = document.createElement("li");

       
        li.dataset.id = item.id;

        li.textContent = item.name;

       
        if (item.bought) {
            li.classList.add("done");
        }

        
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Remove";

        li.appendChild(button);

        
        list.appendChild(li);
    });

   
    const word = groceries.length === 1 ? "item" : "items";
    count.textContent = `${groceries.length} ${word}`;
}



form.addEventListener("submit", function (event) {
   
    event.preventDefault();

    
    const name = nameInput.value.trim();

    
    if (name === "") {
        return;
    }

   
    groceries.push({
        id: Date.now(),
        name: name,
        bought: false
    });

   
    nameInput.value = "";

   
    render();
});


list.addEventListener("click", function (event) {
    
    const li = event.target.closest("li");

    if (!li) {
        return;
    }

 
    const id = Number(li.dataset.id);

   

    if (event.target.matches("button")) {
        const index = groceries.findIndex(item => item.id === id);

        if (index !== -1) {
            groceries.splice(index, 1);
        }

        render();
        return;
    }


    const item = groceries.find(item => item.id === id);

    if (!item) {
        return;
    }

    item.bought = !item.bought;

    render();
});



render();