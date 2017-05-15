var preguntas = [];
var examen = [];
var count_preg_resp = 0;
var buenas = 0;
var indice_list = [];
var values_list = [];

function estructura_pregunta(pregunta, opcion_1, opcion_2, opcion_3, opcion_4,
	r_correcta) {
	this.pregunta = pregunta;
	this.respuestas = [];
	this.respuestas[0] = opcion_1;
	this.respuestas[1] = opcion_2;
	this.respuestas[2] = opcion_3;
	this.respuestas[3] = opcion_4;
	this.correcta = parseInt(r_correcta);
}

preguntas[0] = new estructura_pregunta(
	"¿Qué tema se abordó en el tutorial?",
	"Programación lineal", 
	"Estándares Básicos", 
	"UML", 
	"Análisis de Requerimientos",
	1
);
preguntas[1] = new estructura_pregunta(
	"¿Cuál fue el enfoque del tutorial?",
	"Investigación", 
	"Ensayo", 
	"Introductorio", 
	"Tesis",
	2
);
preguntas[2] = new estructura_pregunta(
	"Propósito del SWEBOK",
	"Delimitar el alcance de la Ingeniería de software", "Concentrar conocimientos sobre computación",
	"Estandarizar metodologías",
	"Albergar todo lo que se sabe sobre procesos",
	"Vender libros",
	0
);
preguntas[3] = new estructura_pregunta(
	"¿Cuantos años de conocimientos se recaudan en el SWEBOK?",
	"15 años", 
	"100 años", 
	"56 años", 
	"40 años", 
	3
);
preguntas[4] = new estructura_pregunta(
	"El cuerpo del conocimiento está dividido en _____________",
	"procesos",
	"lenguajes de programación",
	"áreas de conocimiento", 
	"disciplinas",
	2
);
preguntas[5] = new estructura_pregunta(
	"Asociación que comienza con el SWEBOK.",
	"SWECC",
	"IEEE", 
	"Intel", 
	"IBM", 
	0
);
preguntas[6] = new estructura_pregunta(
	"El crecimiento del SWEBOK hizo necesaria la _____________",
	"gestión formal", 
	"normalización de procesos",
	"inversión de capital", 
	"participación altruista", 
	0
);
preguntas[7] = new estructura_pregunta(
	"¿Cuáles son las fases en las que se divide el SWEBOK?",
	"Hombre de Paja, Hombre de Piedra y Hombre de Hierro", 
	"Hombre ancestral, Hombre moderno y Hombre del ahora", 
	"Fase primaria, fase de madurez y fase final", 
	"Fase altruista, Fase de formalización y fase de afinación",
	0
);
preguntas[8] = new estructura_pregunta(
	"¿En que año publica la versión aceptada actualmente del SWEBOK?", 
	"2010", 
	"2000", 
	"2004", 
	"2006",
	2
);
preguntas[9] = new estructura_pregunta(
	"¿Cuál es el propósito del SWEBOK?",
	"Normalizar el conocimiento", 
	"Describir que parte del conocimiento es generalmente aceptado, organizar esa parte y proporcionar acceso a la información de interés",
	"Vender libros", 
	"No divagar en cuanto a investigación ingenieril", 
	1
);
preguntas[10] = new estructura_pregunta(
	"De los cinco objetivos del SWEBOK ¿Cuál 'Promueve una visión consistente de la ingeniería del software del mundo'?",
	"4° objetivo", 
	"5° objetivo",
	"2° objetivo", 
	"1° objetivo", 
	3
);
preguntas[11] = new estructura_pregunta(
	"De los cinco objetivos del SWEBOK ¿Cuál busca 'Caracterizar los contenidos de la disciplina de la ingeniería del software'?",
	"1° objetivo", 
	"2° objetivo",
	"3° objetivo", 
	"4° objetivo", 
	2
);
preguntas[12] = new estructura_pregunta(
	"De los cinco objetivos del SWEBOK ¿Cuál busca 'Clarificar la situación – y definir fronteras – de la ingeniería del software'?",
	"3° objetivo", 
	"2° objetivo",
	"1° objetivo", 
	"5° objetivo", 
	1
);
preguntas[13] = new estructura_pregunta(
	"De los cinco objetivos del SWEBOK ¿Cuál busca 'Proporcionar al cuerpo de conocimiento de la ingeniería del software con los temas de interés'?",
	"5° objetivo", 
	"4° objetivo",
	"3° objetivo", 
	"1° objetivo", 
	1
);

preguntas[14] = new estructura_pregunta(
	"¿De los cinco objetivos del SWEBOK ¿Cuál busca 'Proporcionar una base para el desarrollo planes de estudio, certificaciones individuales y materiales para licencias'?",
	"2° objetivo", 
	"3° objetivo",
	"1° objetivo", 
	"5° objetivo", 
	3
);

preguntas[15] = new estructura_pregunta(
	"¿En cuántas áreas del conocimiento esta dividido el material perteneciente a la ingeniería de software?",
	"Quince", 
	"Cien",
	"Diez", 
	"Dos",
	2
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


function generar_examen(){
	var head_pregunta = "";
	var aux_pregunta = "";
	var respuestas = "";
	var indice = Math.floor(Math.random() * preguntas.length);
	for(i = 0; i < 10; i++){
		head_pregunta += '<h3>Pregunta ' + (i+1) + ': ';		
		while(indice_list.indexOf(indice) != -1)
			indice = Math.floor(Math.random() * preguntas.length);
			indice_list.push(indice);
		aux_pregunta += preguntas[indice]["pregunta"] + '</h3><br>';
		for (resp in preguntas[indice]["respuestas"]){
			respuestas += '<input class="answers" type="radio" name="resp'+i+'" value="'+resp+'"><label>' + preguntas[indice]["respuestas"][resp] + '</label><br>';	
		}
		pregunta_to_html = head_pregunta + aux_pregunta + respuestas;
		document.getElementById("pregunta"+i).innerHTML = pregunta_to_html;
		head_pregunta = "";
		aux_pregunta = "";
		respuestas = "";
	}
	
}

function comprobar(){
	var inputElements = document.getElementsByClassName('answers');
	for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){      	
     	values_list.push(inputElements[i].value);             
		}
	}
	if(values_list.length != indice_list.length){
		document.getElementById("resultado").innerHTML = '<h2>¡Debes contestar todas las preguntas! Recarga la página por favor</h2>'
		document.getElementById("boton").innerHTML ='<button type="button" class="btn btn-danger" id="boton3" type="button" onclick="location.reload()">Reiniciar</button>';
	}
	else{
		for (i = 0; i < values_list.length; i++){
			if (values_list[i] == preguntas[indice_list[i]]["correcta"])
				buenas ++;
		}

		var calif = "<br><h2 class=\"cali\">La calificación es: " + buenas + "</h2>";
		var texto = "";
		if (buenas < 6)
			texto += '<p class="bajo">A estudiar más, Doctor, vamos poco a poco.</p>';
		else if (buenas < 9)
			texto += '<p class="medio">Va muy bien, Doctor, pero falta todavía.</p>';
		else
			texto += '<p class="alto">El mejor, Doctor. Es un genio :)</p>';

		document.getElementById("resultado").innerHTML ='<span id="calificacion">' + calif + '</span>' +
														'<br><span id="mensaje">' + texto + '</span>';
		document.getElementById("boton").innerHTML ='<button type="button" class="btn btn-warning" id="boton3" type="button" onclick="location.reload()">Reiniciar</button>';
	}
}
