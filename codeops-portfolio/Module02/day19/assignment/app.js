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

render();