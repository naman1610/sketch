function createGrid() {
    let size = prompt("Enter number of squares in a row");
    if (size > 100 || size < 0) {
        size = 100;
    }
    let head = document.getElementById("container");
    head.innerHTML = "";
    let vertical = document.createElement("div");
    vertical.className = "vertical";
    let str = "<div class='horizontal'></div>";
    for (let i = 0; i < size; i++) {
        vertical.innerHTML += str;
    }
    str = '<div class="vertical">' + vertical.innerHTML + "</div>";
    for (let j = 0; j < size; j++) {
        head.innerHTML += str;
    }
    let squares = document.getElementsByClassName("horizontal");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function () {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            squares[i].style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    }
}

createGrid()