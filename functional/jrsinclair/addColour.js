function addColour(colour) {
    var rainbowEl = document.getElementById('rainbow');
    var div = document.createElement('div');
    div.style.paddingTop = '10px';
    div.style.backgroundColour = colour;
    rainbowEl.appendChild(div);
}

addColour('red');
addColour('orange');
addColour('yellow');
addColour('green');
addColour('blue');
addColour('purple');
