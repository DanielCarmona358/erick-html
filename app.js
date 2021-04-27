(function () {
  var lista = document.getElementById("lista");
  var tareaInput = document.getElementById("tareaInput");
  var btnNuevaTarea = document.getElementById("btn-agregar");

  //
  // Funciones
  const agregarTarea = function () {
    var tarea = tareaInput.value;
    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
      tareaInput.className = "error";
      console.log("tarea vacia");
      return false;
    }
    var nuevaTarea = document.createElement("li");
    var enlace = document.createElement("button");
    var contenido = document.createTextNode(tarea);
    enlace.appendChild(contenido);
nuevaTarea.parentNode = this.lista;
    nuevaTarea.appendChild(enlace);
    lista.appendChild(nuevaTarea);
    tareaInput.value = "";
agregarFuncionBotones();
    
  };

  const agregarFuncionBotones =function(){console.log("agregarFuncionBotones");
	var lista = document.getElementById("lista");
for (var i = 0; i <= lista.children.length -1 ; i++) {
	if (lista.children[i] == null){
		console.log(i +" null");
		continue;
	}
	
      lista.children[i].addEventListener("click", eliminarTarea);
    }
  };

  var comprobarInput = function () {
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega Tu Tarea");
  };
  var eliminarTarea = function () {
	  console.log("borrar");
    this.parentNode.removeChild(this);
  };

  // Eventos

  // Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  // Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
})();
