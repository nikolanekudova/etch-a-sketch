let numberOfDivs = 16;
let grid = document.getElementById("grid");

function sketch(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
        const row = document.createElement("div");

        for (let j = 0; j < numberOfDivs; j++) {
            const divInRow = document.createElement("div");
            divInRow.className = "divInRow";

            row.appendChild(divInRow);

            divInRow.addEventListener("mouseover", function(event) {
                event.target.classList.add("blackDivInRow")
            });
        }
        grid.appendChild(row);
    }
}

sketch(numberOfDivs)

document.getElementById("btn").onclick = function () {
    let numberOfDivs = prompt("How big a grid do you want?");

    if (numberOfDivs > 99) {
        alert("The number must be less than 99!")
    } else {
        grid.innerHTML = "";

        sketch(numberOfDivs)
    }
}
