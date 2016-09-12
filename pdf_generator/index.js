// You'll need to make your image into a Data URL
// Use http://dataurl.net/#dataurlmaker
var imgData = 'data:pony.jpg';
var doc = new jsPDF();

doc.setFontSize(40);
doc.text(35, 25, "Paranyan loves jsPDF");
doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
