var preguntas = [];
var examen = [];
var count_preg_resp = 0;
var contador_buenas = 0;

function estructura_pregunta(pregunta, opcion_1, opcion_2, opcion_3, opcion_4,
	r_correcta) {
	this.pregunta = pregunta;
	this.respuestas = [];
	this.respuestas[0] = opcion_1;
	this.respuestas[1] = opcion_2;
	this.respuestas[2] = opcion_3;
	this.respuestas[3] = opcion_4;
	this.correcta = parseInt(r_correcta);
	this.ocupado = false;
}

function examen_aleatorio() {
	var contador = 0;
	var indice = 0;
	while (contador < 10) {
		indice = Math.floor(Math.random() * preguntas.length);
		if (!preguntas[indice].ocupado) {
			preguntas[indice].ocupado = true;
			examen[contador] = preguntas[indice];
			contador++;
		}
	}
}

function generar_pregunta() {
	document.getElementById("contador_preguntas").innerHTML = '<h4> Pregunta ' +
		(count_preg_resp + 1) + '</h4>';
	var txt_respuestas = "";
	for (i in examen[count_preg_resp].respuestas) {
		txt_respuestas += '<input type="radio" name="resp" value="r' + i +
			'" checked><label>' + examen[count_preg_resp].respuestas[i] + '</label><br>';
	}
	document.getElementById("pregunta").innerHTML = examen[count_preg_resp].pregunta;
	document.getElementById("respuestas").innerHTML = txt_respuestas;
	count_preg_resp++;
}

function comprobar() {
	var respuesta = checar_resp_selec(document.cuestionario.resp) + 1;
	if (examen[count_preg_resp - 1].correcta == respuesta) {
		document.getElementById("resultado").innerHTML =
			'<h4 id="bien">¡Correcto!</h4>';
		contador_buenas++;
	} else {
		document.getElementById("resultado").innerHTML =
			'<h4 id="mal">¡Incorrecto!</h4>';
	}
	if (count_preg_resp == 9) {
		document.getElementById("boton1").value = "Finalizar";
	}
	document.getElementById("boton").innerHTML =
		'<input class= "reveal boton" id="boton2" type="button" value="Siguiente" onclick="avanzar()">';
}

function avanzar() {
	var texto = "";
	if (count_preg_resp < 10) {
		generar_pregunta();
		document.getElementById("resultado").innerHTML = "";
		document.getElementById("boton").innerHTML =
			'<input class= "reveal boton" id="boton1" type="button" value="Checar" onclick="comprobar()">';
	} else {
		var calif = "La calificación es: " + contador_buenas + ". ";
		var texto = "";
		if (contador_buenas < 6) {
			texto += "Falta mejorar, de vuelta al estudio Doctor."
		} else if (contador_buenas < 9) {
			texto += "Casi perfecto, solo detalles son los que hay que afinar."
		} else {
			texto += "Es usted un Dios del tema doctor."
		}
		document.getElementById("resultado").innerHTML =
			'<span id="calificacion">' + calif + '</span>' +
			'<br><span id="mensaje">' + texto + '</span>';
		document.getElementById("boton").innerHTML =
			'<input class= "reveal boton"  id="boton3" type="button" value="Reiniciar" onclick="location.reload()">';
	}

}


function checar_resp_selec(radio_boton) {
	for (i = 0; i < radio_boton.length; i++) {
		if (radio_boton[i].checked) {
			return i;
		}
	}
	return 0;
}

preguntas[0] = new estructura_pregunta(
	"¿Cuál tema no fue descrito?",
	"Planeación", "Modelado", "Líneas Base", "Análisis de Requerimientos",
	4
);
preguntas[1] = new estructura_pregunta(
	"¿Después de qué fase sigue la implementación?",
	"Pruebas", "Mantenimiento", "Requerimientos", "Diseño",
	4
);
preguntas[2] = new estructura_pregunta(
	"¿Por qué no pueden cambiar las versiones de los componentes en una línea base?",
	"Sí pueden cambiar", "Para poder reconstruir la línea base",
	"Afecta al mantenimiento",
	"Altera los requerimientos",
	2
);
preguntas[3] = new estructura_pregunta(
	"Línea base es: una colección de versiones de _________ que construyen un sistema.",
	"componenetes", "sistema", "software",
	"código", 1
);
preguntas[4] = new estructura_pregunta(
	"El diseño de la construcción puede abordar la solución desde una perspectiva _______",
	"estática", "dinámica",
	"equilibrada", "abierta", 2
);
preguntas[5] = new estructura_pregunta(
	"El enfoque de perspectiva dinámica proporciona la descripción de: ",
	"objetos", "modelos", "variables",
	"comportamiento", 4
);
preguntas[6] = new estructura_pregunta(
	"¿Qué tipo de perspectiva proporciona la descripción de  las operaciones, detalles internos y lógica de la entidad de diseño",
	"dinámica", "estructural",
	"estática", "interna", 1
);
preguntas[7] = new estructura_pregunta(
	"Este enfoque involucra métodos gráficos, tabulares, entre otros.",
	"científico", "matemático", "superficial", "dinámico", 4
);
preguntas[8] = new estructura_pregunta(
	"El enfoque dinámico utiliza métodos: ", "gráficos y textuales",
	"gráficos y tabulares",
	"gráficos y científicos", "gráficos y matemáticos", 2
);
preguntas[9] = new estructura_pregunta(
	"El código poco legible provoca: ",
	"Más ganancias", "Tiempo de espera",
	"Gastos en hardware", "Mayor costo de mantenimiento", 4
);
preguntas[10] = new estructura_pregunta(
	"El código poco legible necesita mas esfuerzo para: ",
	"escribirlo", "entenderlo",
	"compilarlo", "ejecutarlo", 2
);
preguntas[11] = new estructura_pregunta(
	"¿Para qué usa el plan de proyecto el administrador?",
	"Tomar decisiones del proyecto", "Registrar los requisitos",
	"Solicitar mantenimiento", "Diseñar el sistema", 1
);
preguntas[12] = new estructura_pregunta(
	"¿Cuál es una forma de medir el progreso para el administrador del proyecto?",
	"Registrando el tiempo", "Registrando líneas de código",
	"Con el plan de proyecto", "Con el registro de pagos", 3
);
preguntas[13] = new estructura_pregunta(
	"Es un argumento a favor del enfoque dirigido por un plan: ",
	"Reduce el tiempo a la mitad", "Reduce los gastos a la mitad",
	"Mayor convivencia entre el equipo", "Permite detectar errores temprano", 4
);

preguntas[14] = new estructura_pregunta(
	"¿Qué permite descubrir los errores potenciales y dependencias antes de iniciar el proyecto?",
	"El Depurador que se use", "Enfoque dirigido por el diseño",
	"El enfoque dirigo por un modelo", "Un enfoque dirigido por un plan", 4
);

preguntas[15] = new estructura_pregunta(
	"En un plan de proyectos, esto no se establece: ",
	"Recursos disponibles", "División del dinero",
	"Calendario de trabajo", "Quién realiza cada trabajo", 2
);
preguntas[16] = new estructura_pregunta(
	"El plan también debe identificar: ",
	"Nuevos requisitos", "Nuevos casos de uso",
	"Los riesgos", "A los mejores programadores", 3
);
preguntas[17] = new estructura_pregunta(
	"¿Cuántas secciones incluyen por lo regular los planes?",
	"6", "5",
	"4", "7", 4
);

preguntas[18] = new estructura_pregunta(
	"En esta sección se describen brevemente los objetivos: ",
	"Organización del Proyecto", "Divisón del trabajo",
	"Desarrollo", "Introducción", 4
);

preguntas[19] = new estructura_pregunta(
	"En esta sección se describen brevemente los objetivos: ",
	"Organización del Proyecto", "Introducción",
	"Desarrollo", "Metas", 2
);

preguntas[20] = new estructura_pregunta(
	"En esta sección refiere a la forma que se organiza el equipo: ",
	"Organización del Proyecto", "Divisón del trabajo",
	"Desarrallo", "Objetivos", 1
);

preguntas[21] = new estructura_pregunta(
	"En esta sección se refiere a la forma que se organiza el equipo: ",
	"Calendario del proyecto", "Divisón del trabajo",
	"Desarrallo", "Organización del Proyecto", 4
);

preguntas[22] = new estructura_pregunta(
	"Detalla los posibles riesgos del sistema: ",
	"Calendario del proyecto", "Errores en el software",
	"Fallas de programación", "Análisis de riesgos", 4
);

preguntas[23] = new estructura_pregunta(
	"Detalla los posibles riesgos del sistema: ",
	"Análisis de factibilidad", "Errores en el software",
	"Análisis de riesgo", "Análisis de Errores", 3
);
