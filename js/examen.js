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
function gestionarJson(dadesJson){
	var object = JSON.parse(dadesJson);

  	//Poner titulos
  	for(a=0; a<10;a++){
  		document.getElementsByTagName("span")[a].innerHTML = object.question[a].title;
  	}
	//Rellenar Select
	for (a = 2; a < 6; a++) {
		var opciones = object.question[a].option.length;
		var select = document.getElementsByTagName("select")[a - 2];
		for (b= 0; b< opciones; b++) {
			var option = document.createElement("option");
			option.text = object.question[a].option[b];
			option.value = b+ 1;
			select.options.add(option);
		}
	}

	for (a = 6; a < 8; a++) {
		var opciones = object.question[a].option.length;
		var checkbox = document.getElementsByClassName("checkbox")[a-6];
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
		}
	}    

	for (a = 8; a <=10; a++ ){
		var opciones = object.question[a].option.length;
		var radio = document.getElementsByClassName("radio")[a-8];

		if (a == 8) {
			Name = "Pregunta 9";
		}else{
			Name = "Pregunta 10";
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

