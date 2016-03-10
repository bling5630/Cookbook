function addColour(colour) {
    var rainbowEl = document.getElementById('rainbow');
    var div = document.createElement('div');
    div.style.paddingTop = '10px';
    div.style.backgroundColour = colour;
    rainbowEl.appendChild(div);
}

var colours = [
    'red', 'orange', 'yellow',
    'green', 'blue', 'purple'
];

colours.forEach(addColour);
