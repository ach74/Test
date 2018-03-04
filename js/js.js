window.onload = function(){

	document.getElementById("BotonHome").onclick=function(){
		MostrarHome();
	}

	document.getElementById("BotonCircuito").onclick=function(){
		MostrarCircuito();
	}

	document.getElementById("BotonQuedadas").onclick=function(){
		MostrarQuedadas();
	}

	document.getElementById("BotonGaleria").onclick=function(){
		MostrarGaleria();
	}

	document.getElementById("BotonAcerca").onclick=function(){
		MostrarAcerca();
	}

}

function MostrarHome(){
	document.getElementById("home").style.display="block";
	document.getElementById("circuito").style.display="none";
	document.getElementById("quedadas").style.display="none";
	document.getElementById("galeria").style.display="none";
	document.getElementById("acerca").style.display="none";
}

function MostrarCircuito(){
	document.getElementById("circuito").style.display="block";
	document.getElementById("home").style.display="none";
	document.getElementById("quedadas").style.display="none";
	document.getElementById("galeria").style.display="none";
	document.getElementById("acerca").style.display="none";
}

function MostrarQuedadas(){
	document.getElementById("quedadas").style.display="block";
	document.getElementById("circuito").style.display="none";
	document.getElementById("home").style.display="none";
	document.getElementById("galeria").style.display="none";
	document.getElementById("localizacion").style.display="none";
	document.getElementById("acerca").style.display="none";
}

function MostrarGaleria(){
	document.getElementById("galeria").style.display="block";
	document.getElementById("home").style.display="none";
	document.getElementById("quedadas").style.display="none";
	document.getElementById("circuito").style.display="none";
	document.getElementById("acerca").style.display="none";
}

function MostrarAcerca(){
	document.getElementById("acerca").style.display="block";
	document.getElementById("home").style.display="none";
	document.getElementById("quedadas").style.display="none";
	document.getElementById("galeria").style.display="none";
	document.getElementById("circuito").style.display="none";
}

