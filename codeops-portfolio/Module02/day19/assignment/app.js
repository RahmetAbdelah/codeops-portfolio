const groceries = [];

const groceries = [
    { id: 1, name: "Teff", bought: false },
    { id: 2, name: "Milk", bought: false }
];

const list = document.querySelector("#list");

function render() {
    list.innerHTML = "";

    groceries.forEach(item => {
        const li = document.createElement("li");

        li.textContent = item.name;

        list.appendChild(li);
    });
}


const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");


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


const count = document.querySelector("#count");


count.textContent = `${groceries.length} items`;