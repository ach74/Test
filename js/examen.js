
var formElement=null;
var respuestaSelect = [];
var respuestasMultiple = [];
var respuestaText = [];
var respuestaRadio = [];
var respuestasCheckbox = [];
var notaFinal = 10;

window.onload = function(){
	formElement=document.getElementById("formulario");
	document.getElementById("corregir").onclick=function(){
		
		corregirText();
		MostrarNota();
		
	};
}

// fichoro xml que está en el servidor rawgit
var url="https://cdn.rawgit.com/ach74/PaginaWeb/f8b5ff0c/json/json.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarJson(this.responseText); 

}
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarJson(DatosJSon){
	var object = JSON.parse(DatosJSon);
  	//Poner titulos
  	for(a=0; a<10;a++){
  		document.getElementsByTagName("span")[a].innerHTML = (a+1)+"-"+object.question[a].title;
  	}
	//Guardar respuestas
	for(a=0;a<2;a++){
		respuestaText[a]=object.question[a].answer;
	}
	//Rellenar Select
	for (a = 2; a < 4; a++) {
		var opciones = object.question[a].option.length;
		var select = document.getElementsByTagName("select")[a - 2];
		respuestaSelect[a]=object.question[a].answer;
		for (b= 0; b< opciones; b++) {
			var option = document.createElement("option");
			option.text = object.question[a].option[b];
			option.value = b+ 1;
			select.options.add(option);
		}
	}

	for (a = 4; a < 6; a++) {
		var opciones = object.question[a].option.length;
		var select = document.getElementsByTagName("select")[a - 2];
		respuestasMultiple[a]=[];
		for (b= 0; b< opciones; b++) {
			var option = document.createElement("option");
			option.text = object.question[a].option[b];
			option.value = b+ 1;
			select.options.add(option);
			respuestasMultiple[a][b]=object.question[a].answer[b];

		}
	}

	for (a = 6; a < 8; a++) {
		var opciones = object.question[a].option.length;
		var checkbox = document.getElementsByClassName("checkbox")[a-6];
		respuestasCheckbox[a]=[];
		if (a==6) {
			checkboxName="seis";
		}else{
			checkboxName="siete"
		}
		for (b = 0; b < opciones; b++) {
			var label = document.createElement("label");
			var input = document.createElement("input");
			var span = document.createElement("span");
			var br = document.createElement("br");
			checkbox.appendChild(label);
			label.innerText = object.question[a].option[b];
			label.appendChild(input);
			label.appendChild(span);
			label.className = "containerBox";
			input.type = "checkbox";
			input.value = b + 1;
			span.className = "checkMarckBox";
			checkbox.appendChild(br);
			input.name=checkboxName;
			respuestasCheckbox[a][b]=object.question[a].answer[b];
		}
	}    

	for (a = 8; a <10; a++ ){
		var opciones = object.question[a].option.length;
		var radio = document.getElementsByClassName("radio")[a-8];
		respuestaRadio[a]=object.question[a].answer;
		if (a == 8) {
			Name = "nueve";
		}else{
			Name = "diez";
		}

		for ( b = 0 ; b < opciones; b++){

			var label = document.createElement("label");
			var input = document.createElement("input");
			var span = document.createElement("span");
			var br = document.createElement("br");

			radio.appendChild(label);

			label.innerText = object.question[a].option[b];
			label.appendChild(input);
			label.appendChild(span);
			label.className = "containerRadio";
			input.type = "radio";
			input.name = Name;
			input.value = b +1;
			span.className = "checkMarckRadio";
			radio.appendChild(br);
		}
	}

	
}

// Comprobar que esta todo marcado
function comprobar(){
	//Comprobacion Text
	for(a=0;a<2;a++){
		if (formElement.elements[a].value=="") {
			formElement.elements[a].focus();
			alert("Responde la pregunta: " + (a+1));
			return false;
		}
	}
	//Comprobacion Select
	for (a=2;a<4;a++){
		if (formElement.elements[a].selectedIndex==0){
			formElement.elements[a].focus();
			alert("Responde la pregunta: "+(a+1));
			return false;
		}
	}
	//Comprobacion Multiple
	for (a = 4; a < 6; a++){
		var respondidoMultiple=false;
		for (b = 1; b <(formElement.elements[a].length);b++){
			var ops=formElement.elements[a].options[b];
			if (ops.selected) {
				respondidoMultiple=true;
			}
		}
		if (!respondidoMultiple) {
			formElement.elements[a].focus();
			alert("Responde la pregunta: "+(a+1));
			return false;
		}
	}
	


	for (a = 6; a < 8; a++){
		var ck=false;
		var nombre;
		if (a==6) {
			nombre=formElement.seis;
		}else{
			nombre=formElement.siete;
		}
		for(b=0;b<nombre.length;b++){
			if (nombre[b].checked) {
				ck=true;
			}
		}
		if(!ck){
			nombre[0].focus();
			alert("Responde la pregunta: "+(a+1));
			return false;
		}
	}
	for ( a = 8;a<10;a++){

		var nombreRadio=null;
		if (a==8){
			nombreRadio=formElement.nueve;

		} else {
			nombreRadio=formElement.diez;
		}
		if (nombreRadio.value=="") {
			formElement.elements[a].focus();
			alert("Por favor, responde la pregunta "+(a+1));
			return false;
		}   
	}

}

function corregirText(){
	/*for(a=0;a<2;a++){
		var text = formElement.elements[a].value;
		if (text.toLowerCase()==respuestaText[a]) {
			notaFinal=notaFinal;
		}else{
			notaFinal=notaFinal-1;
		}
	}

	for(a=2;a<4;a++){
		var sel = formElement.elements[a];
		if ((sel.selectedIndex-1)==respuestaSelect[a]) {
			notaFinal=notaFinal;
		}else{
			notaFinal=notaFinal-1;
		}
	}

	for(a=4;a<6;a++){
		var sel = formElement.elements[a];
		var escorrecta=[];
		for(i=1;i<(sel.length);i++){
			var opt=sel.options[i];
			if(opt.selected==true){
				escorrecta[i]=false; 
				for (j = 0; j < respuestasMultiple[a].length; j++) {
					if ((i)==respuestasMultiple[a][j]) escorrecta[i]=true;
				}
				if (escorrecta[i]==true) {
					notaFinal = notaFinal;
				} else {
					notaFinal = notaFinal - (1/respuestasMultiple[a].length);
				}
			}
		} 
	}*/

	for(a=6;a<8;a++){
		var escorrecta=[];
		var nombreCheckbox;
		var mal=false;

		if (a==6) {
			nombreCheckbox=formElement.seis;
		}else{
			nombreCheckbox=formElement.siete;
		}
		for(b=0;b<nombreCheckbox.length;b++){
			if (nombreCheckbox[b].checked) {
				escorrecta[b]=false;
				for(c=0;c<respuestasCheckbox[a].length;c++){
					if (b==respuestasCheckbox[a][c]) {
						escorrecta[b]=true;
					}
				}
				if(escorrecta[b]==true){
					alert("bien");
				}else{
					alert("mal");
				}
			}
		}
	}




}


//Mostrar pregunta corecion

function MostrarNota(){
	alert("Tu nota final es "+notaFinal.toFixed(2));
}