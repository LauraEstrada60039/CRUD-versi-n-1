let carsList = [
	{
	  	id: 1,
	    name: "Estacas",
	    model: "1980",
	    color: "red",
	    doors: 4,
	    brand: "Nissan"
	  },
	  {
	  	id: 2,
	    name: "Jetta",
	    model: "2019",
	    doors: 4,
	    color: "red",
	    brand: "Volkswagen"
	  },
	  {
	  	id: 3,
	    name: "Mazda 1",
	    model: "2019",
	    doors: 4,
	    color: "red",
	    brand: "mazda"
	  },
	  {
	  	id: 4,
	    name: "Mazda 2",
	    model: "2019",
	    doors: 4,
	    color: "red",
	    brand: "mazda"
	  }
];

//Comprueba si está disponible
if (typeof(localStorage) !== "undefined") {
    // LocalStorage disponible
    console.log("Disponible");
    //Inicializamos el localstorage
    localStorage.setItem("Arreglo de carros", JSON.stringify(carsList));
} else {
    // LocalStorage no soportado en este navegador
}

/************ Local storage **************/
function guardarDatosStorage(carsList, nuevoArreglo) {
    localStorage.carsList = Array.prototype.push.apply(carsList, nuevoArreglo);
    localStorage.setItem("Arreglo de carros", JSON.stringify(carsList));
    return carsList;
}

function recuperarDatos(carsList) {
    if ((localStorage.carsList != undefined || localStorage.carsList != null)) {
        let datosGuardados = JSON.parse(localStorage.getItem("Arreglo de carros"));
  		return datosGuardados;
    } else {
        datosGuardados = [];
        return datosGuardados;
    }
}


//Creo yuna función para mostrar en el crud
const Read = carsList => {
	carsList = recuperarDatos(carsList);
	console.log("Funcion read");
	console.log("arreglo obtenido: "+carsList.length);
	//1. Creamos la tabla donde vamos a mostrar
	//creamos el div donde se va a encontrar la tabla
	let contenedorPrincipal = document.createElement("div");
	contenedorPrincipal.setAttribute("id", "contenedor-tabla");
	var referencia = document.getElementById("contenedor-tabla");
	document.body.insertBefore(contenedorPrincipal, referencia);
	//Creamos la tabla
	let tabla = document.createElement("div");
	tabla.setAttribute("id", "tabla");
	contenedorPrincipal.appendChild(tabla);
	//Creamos la cabecera de la tabla
	let cabeceraTabla = document.createElement("div");
	cabeceraTabla.setAttribute("id", "cabecera-tabla");
	tabla.appendChild(cabeceraTabla);
	//Creamos el cuerpo de la tabla
	let cuerpoTabla = document.createElement("div");
	cuerpoTabla.setAttribute("id", "cuerpo-tabla");
	tabla.appendChild(cuerpoTabla);
	if (carsList.length === 0) 
	{
		//Sino hay datos vamos a decirle al usuario que registre
		cuerpoTabla.innerText = "No se encontraron datos, por favor registra un carro :)";
	} 
	else 
	{
		//Si hay datos, los mostramos
		//Ya con eso, procederemos a crear cada una de las celdas
		//2. Obtengo los datos del arreglo

		//Primero. Agrego los elementos de la cabeza
		// console.log(element.name);
		// cuerpoTabla.innerText = element.name;
		let celdaCabeceraTabla1 = document.createElement("div");
		celdaCabeceraTabla1.setAttribute("class", "celda-cabecera-tabla");
		celdaCabeceraTabla1.innerText = "ID";
		cabeceraTabla.appendChild(celdaCabeceraTabla1);
		let celdaCabeceraTabla2 = document.createElement("div");
		celdaCabeceraTabla2.setAttribute("class", "celda-cabecera-tabla");
		celdaCabeceraTabla2.innerText = "Marca";
		cabeceraTabla.appendChild(celdaCabeceraTabla2);
		let celdaCabeceraTabla3 = document.createElement("div");
		celdaCabeceraTabla3.setAttribute("class", "celda-cabecera-tabla");
		celdaCabeceraTabla3.innerText = "Modelo";
		cabeceraTabla.appendChild(celdaCabeceraTabla3);
		let celdaCabeceraTabla4 = document.createElement("div");
		celdaCabeceraTabla4.setAttribute("class", "celda-cabecera-tabla");
		celdaCabeceraTabla4.innerText = "Color";
		cabeceraTabla.appendChild(celdaCabeceraTabla4);
		let celdaCabeceraTabla5 = document.createElement("div");
		celdaCabeceraTabla5.setAttribute("class", "celda-cabecera-tabla");
		celdaCabeceraTabla5.innerText = "Puertas";
		cabeceraTabla.appendChild(celdaCabeceraTabla5);
		let celdaCabeceraTabla6 = document.createElement("div");
		celdaCabeceraTabla6.setAttribute("class", "celda-cabecera-tabla");
		celdaCabeceraTabla6.innerText = "Brand";
		cabeceraTabla.appendChild(celdaCabeceraTabla6);

		//Segundo.Vaciamos los datos
		carsList = recuperarDatos(carsList);
		console.log("aaa: " + carsList);
		carsList.forEach((element, index, array) => {
			let celdaCuerpoTabla1 = document.createElement("div");
			celdaCuerpoTabla1.setAttribute("class", "celda-cuerpo-tabla");
			let celdaCuerpoTabla2 = document.createElement("div");
			celdaCuerpoTabla2.setAttribute("class", "celda-cuerpo-tabla");
			let celdaCuerpoTabla3 = document.createElement("div");
			celdaCuerpoTabla3.setAttribute("class", "celda-cuerpo-tabla");
			let celdaCuerpoTabla4 = document.createElement("div");
			celdaCuerpoTabla4.setAttribute("class", "celda-cuerpo-tabla");
			let celdaCuerpoTabla5 = document.createElement("div");
			celdaCuerpoTabla5.setAttribute("class", "celda-cuerpo-tabla");
			let celdaCuerpoTabla6 = document.createElement("div");
			celdaCuerpoTabla6.setAttribute("class", "celda-cuerpo-tabla");
			celdaCuerpoTabla1.innerText = element.id;
			celdaCuerpoTabla2.innerText = element.name;
			celdaCuerpoTabla3.innerText = element.model;
			celdaCuerpoTabla4.innerText = element.color;
			celdaCuerpoTabla5.innerText = element.doors;
			celdaCuerpoTabla6.innerText = element.brand;
			cabeceraTabla.appendChild(celdaCuerpoTabla1);
			cabeceraTabla.appendChild(celdaCuerpoTabla2);
			cabeceraTabla.appendChild(celdaCuerpoTabla3);
			cabeceraTabla.appendChild(celdaCuerpoTabla4);
			cabeceraTabla.appendChild(celdaCuerpoTabla5);
			cabeceraTabla.appendChild(celdaCuerpoTabla6);
		});
	}

}


function Create(carsList,id, marca, modelo, color, puertas, brand) {
	alert("Entramos a la funcion create");
	//Vamos a crear un elemento
	carsList = recuperarDatos(carsList);
	let longitudCarsList = carsList.length;

	// function verificar(carsList, identificador) {
	function verificar(carsList, identificador) {
		let respuesta = 0;
		for (let i = 0; i < carsList.length; i++) {
			if (identificador === carsList[i].id) {
				respuesta=1;
			}
		}
		return respuesta;
	}

	let algo = verificar(carsList, id);
	if (algo === 0) {
		let arregloNuevo = [
			{
				id: id,
				name: marca, 
				model: modelo,
				doors: puertas,
				color: color, 
				brand: brand
			}
		];
		//Unimos dos arreglos
		carsList = guardarDatosStorage(carsList, arregloNuevo);
		recuperarDatos(carsList);
		Read(carsList);
	} 
	else 
	{
		alert("El carro existe");
	}
}

let botonFormulario = document.getElementById("submitBtn");
botonFormulario.onclick = ()=> {
	//Variables de create
		
	let id=0, marca="", modelo="", color="", puertas=0, brand="";
	id = document.getElementById("id-carro").value;
	id = parseInt(id);
	marca = document.getElementById("marca").value;
	modelo = document.getElementById("modelo").value;
	color = document.getElementById("color").value;
	puertas = document.getElementById("puertas").value;
	puertas = parseInt(puertas);
	brand = document.getElementById("brand").value;
	if (id != null || id>0) {
		Create(carsList,id, marca, modelo, color, puertas, brand); 
	}
	else {
		alert("Se ha llenado mal el formulario");
	}
};

const Update = carsList =>{
	let marca="Gran Coupé", modelo="2021", puertas=4, color="negro", brand="BMW";
	carsList.forEach((element, index, array)=>{	
		if (element.id===4) {
			alert("Se encontró el carro, vamos a actualizar");
			element.name = marca;
			element.model = modelo;
			element.doors = puertas;
			element.color = color;
			element.brand = brand;
		}
	});
	guardarDatosStorage(carsList);
	recuperarDatos(carsList);
};

Update(carsList);

const Delete = carsList => {
	alert("borrando");
	carsList.forEach((element, index, array)=>{	
		if (element.id===1) { //Aqui ando borrando referente a la posicion
			carsList.splice(1, 1);
		}
		guardarDatosStorage(carsList);
		recuperarDatos(carsList);
	});
}

Delete(carsList);

//Al recargar mostrar la información 
document.addEventListener("DOMContentLoaded", Read(carsList));

