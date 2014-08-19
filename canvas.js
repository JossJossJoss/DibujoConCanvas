var dibujo, lienzo;
function inicio()
{
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	dibujarGrilla(lienzo);

	lienzo.beginPath();
	lienzo.strokeStyle = "#17DBDB";
	lienzo.arc(150,150,105, (Math.PI * 2), false);
	lienzo.fillStyle="#17DBDB";
	lienzo.fill()
	lienzo.closePath();
	lienzo.stroke();

}
function dibujarGrilla (pony) {
	var ancho = 300, alto = 300;
	var linea;
	var lineas = 15;
	var limiteX = ancho / lineas;
	var limiteY = alto / lineas;
	var x = 0, y = 300;

	for(linea = 0; linea <= limiteX; linea++)
	{
		
		pony.beginPath();
		pony.strokeStyle = "#AAA";
		pony.moveTo(x, 0);
		pony.lineTo(0, x);
		pony.stroke();
		pony.closePath();
		
		x += 30;
		y -= 30;
	}
	x = 0;
	y = 300;
	for(linea = 0; linea <= limiteY; linea++)
	{
		pony.beginPath();
		pony.strokeStyle = "#AAA";
		pony.moveTo(x, 300);
		pony.lineTo(0,y);
		pony.stroke();
		pony.closePath();
		x += 30;
		y -= 30;
	}

}
