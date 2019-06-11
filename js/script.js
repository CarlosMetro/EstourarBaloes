function addBola() {
	var bola = document.createElement("div");
	bola.setAttribute("class","bola");
	// == <div class="bola"></div>

	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);	
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
	//<div style="left:0129;top:12903"></div>
	bola.setAttribute("onclick", "estourar(this)");  

	document.body.appendChild(bola);
	//inserindo o elemento na tela.
}
function estourar(elemento) {
	document.body.removeChild(elemento);
//aqui está removendo o elemento da tela.

}
function iniciar() {
	setInterval(addBola, 1000);
}