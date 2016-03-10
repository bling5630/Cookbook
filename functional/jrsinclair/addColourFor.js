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

for (var i = 0; i < colours.length; i++) {
    addColour(colours[i]);
}
