let head = document.getElementById('container');
let vertical = document.createElement('div');
vertical.className = 'vertical';
let str = "<div class='horizontal'></div>";
for (let i = 0; i < 16; i++) {
    vertical.innerHTML += str;
}
str = '<div class="vertical">'+vertical.innerHTML+'</div>';
for (let j = 0; j < 16; j++) {
    head.innerHTML += str;
}

// Changing color of the squares on hover
let squares = document.getElementsByClassName('horizontal');
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function () {
        squares[i].style.backgroundColor = 'red';
    });
}