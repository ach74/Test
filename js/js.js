window.onload = function(){
	document.getElementById("Opc1").onclick=function(){
		Opc1();
	}
	document.getElementById("Opc2").onclick=function(){
		Opc2();
	}
	document.getElementById("Opc3").onclick=function(){
		Opc3();
	}
	document.getElementById("Opc4").onclick=function(){
		Opc4();
	}

	document.getElementById("StartExamen").onclick=function(){
		direccion();
	}



}

function Opc1(){
	document.getElementById("Informacion").style.display="block";
	document.getElementById("Ubicacion").style.display="none";
	document.getElementById("test").style.display="none";
	document.getElementById("fotos").style.display="none";
}

function Opc2(){
	document.getElementById("Ubicacion").style.display="block";
	document.getElementById("Informacion").style.display="none";
	document.getElementById("test").style.display="none";
	document.getElementById("fotos").style.display="none";

}

function Opc3(){
	document.getElementById("test").style.display="block";
	document.getElementById("Informacion").style.display="none";
	document.getElementById("Ubicacion").style.display="none";
	document.getElementById("fotos").style.display="none";
}

function Opc4(){
	document.getElementById("fotos").style.display="block";
	document.getElementById("Informacion").style.display="none";
	document.getElementById("Ubicacion").style.display="none";
	document.getElementById("test").style.display="none";
}



function direccion(){
	location.href='exam.html';
}