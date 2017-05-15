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
	"¿Qué es común en cuanto a desarrollo de productor entre compañias actuales?",
	"Desarrollar todos sus productos desde cero",
	"Adquirir algunos productos para integrarlos a los propios",
	"Invertir grandes cantidades de dinero en contratación de personal",
	"Contratar a los mejores programadores de las universidades",
	1
);
preguntas[17] = new estructura_pregunta(
	"¿Por qué no es eficaz utilizar modelos de madurez o estándares con problemas específicos del negocio?",
	"Mantienen barreas para enforcase",
	"Son caros",
	"Funcionan solo en grandes compañias",
	"No tienen fundamento científico",
	 0
);

preguntas[18] = new estructura_pregunta(
	"¿Cuanto abarca del ciclo de vida del software la metodología de CMMI-DEV?",
	"El prototipado",
	"El mantenimiento",
	"Inicio y entrega",
	"Concepción, entrega y mantenimiento",
	3
);

preguntas[19] = new estructura_pregunta(
	"¿Cuál es el número de áreas del CCMI-DEV que se enfocan al proceso de desarrollo específico?",
	"5",
	"22",
	"16",
	"2",
	 0
);

preguntas[20] = new estructura_pregunta(
	"Menciona las cinco áreas que comprenden los procesos de desarrollo específico del CMMI-DEV",
	"Organización del Proyecto, División de requerimientos, Soluciones Técnicas, Entrega y Mantenimiento",
	"Prototipado, Levantamiento de requerimientos, Divisón del trabajo, Desarrollo y Entrega",
	"Direccionamiento, Desarrollo de requerimientos, Soluciones Técnicas, Integración del producto, Verificación y validación",
	"Introducción, Desarrollo, Objetivos, Conclusión y Mantenimiento",
	2
);

preguntas[21] = new estructura_pregunta(
	"¿Quienes desarrollaron Trillium (metodología derivada de CMM)?",
	"Compañías de telecomunicaciones Canadienses",
	"Sector salud de India",
	"Empresarios Japoneces",
	"Gobierno Estadounidense",
	0
);

preguntas[22] = new estructura_pregunta(
	"¿Quienes desarrollaron BOOTSTRAP (metodología derivada de CMM)?",
	"Empresarios Japoneces",
	"Comunidad Europea de ESPRIT",
	"Compañias de telecomunicaciones Canadienses",
	"Agencias de seguridad del Reino Unido",
	 1
);

preguntas[23] = new estructura_pregunta(
	"Año en el que se propone SPICE como estándar internacional",
	"2000",
	"1990",
	"1995",
	"2010",
	2
);

preguntas[24] = new estructura_pregunta(
	"¿Cual es el enfoque de SPICE?",
	"Procesos y capabilidad",
	"Desarrollo de personal",
	"Contratación de buenos desarrolladores",
	"Mantenimiento de software propietario",
	0
);

preguntas[25] = new estructura_pregunta(
	"¿De que constan las prácticas base en SPICE?",
	"Son las más sencillas de realizar",
	"Al ser básicas se espera perfección",
	"Son escenciales para un proceso específico",
	"No son importantes por que son sencillas",
	2
);

preguntas[26] = new estructura_pregunta(
	"¿En que consisten las prácticas genéricas de SPICE?",
	"Institucionalización o implementación de un proceso",
	"Interfaces para el usuario",
	"Replanteamiento de los procesos para adaptarlos",
	"Hacer los procesos colaborativos para entornos generales",
	0
);

preguntas[27] = new estructura_pregunta(
	"¿Cuantas son las actividades consideradas en la forma funcional de SPICE?",
	"10",
	"3",
	"9",
	"5",
	3
);

preguntas[28] = new estructura_pregunta(
	"¿Cuál es el nombre de la actividad funcional que 'se asegura de la correcta operación y uso' en SPICE?",
	"Ingeniería",
	"Proyecto",
	"Suministrando al cliente",
	"Soporte",
	2
);

preguntas[29] = new estructura_pregunta(
	"¿Cuál es el nombre de la actividad funcional que 'especifíca, implementa y mantiene el sistema' en SPICE?",
	"Proyecto",
	"Ingeniería",
	"Organización",
	"Soporte",
	1
);

preguntas[30] = new estructura_pregunta(
	"¿Cuál es el nombre de la actividad funcional que 'establece, coordina o maneja los recursos y provee servicios al cliente' en SPICE?",
	"Soporte",
	"Organización",
	"Proyecto",
	"Ingeniería",
	2
);

preguntas[31] = new estructura_pregunta(
	"¿Cuál es el nombre de la actividad funcional que 'habilita o apoya en el rendimiento de los otros procesos' en SPICE?",
	"Ingeniería",
	"Soporte",
	"Proyecto",
	"Suministrado al cliente",
	1
);

preguntas[32] = new estructura_pregunta(
	"¿Cuál es el nombre de la actividad funcional que 'establece las metas del negocia y desarrolla recursos para alcanzar las mestas' en SPICE?",
	"Soporte",
	"Ingeniería",
	"Proyecto",
	"Organización",
	3
);

preguntas[33] = new estructura_pregunta(
	"Las prácticas genéricas de SPICES son ________________",
	"Difíciles",
	"Aplicables a todos los procesos",
	"Innecesarias",
	"De uso obligatorio",
	1
);

preguntas[34] = new estructura_pregunta(
	"¿Cuántos niveles de capabilidad tienen las prácticas genéricas de SPICE?",
	"10",
	"5",
	"2",
	"6",
	3
);

preguntas[35] = new estructura_pregunta(
	"Nivel de capabilidad de SPICES que 'falla en la realización'",
	"Mejoramiento continuo",
	"Sin realizar",
	"Planeado y seguido",
	"Realizado informalmente",
	1
);

preguntas[36] = new estructura_pregunta(
	"Nivel de capabilidad de SPICES que está 'sin planeación ni seguimiento, dependiente del conocimiento individual y de los productos de trabajo identificables'",
	"Realizado informalmente",
	"Controlado cualitativamente",
	"Sin realizar",
	"Planeado y seguido",
	0
);

preguntas[37] = new estructura_pregunta(
	"Nivel de capabilidad de SPICES que a sido 'verificado acorde con procedimientos específicos, productos de trabajo con forme a estándares y requerimientos específicos'",
	"Planeado y seguido",
	"Sin realizar",
	"Mejoramiento continuo",
	"Controlado cualitativamente",
	0
);

preguntas[38] = new estructura_pregunta(
	"Nivel de capabilidad de SPICES en el existen 'procesos bien definidos utilizando una versión aprobada'",
	"Sin realizar",
	"Bien definido",
	"Planeado y seguido",
	"Controlado cualitativamente",
	1
);

preguntas[39] = new estructura_pregunta(
	"Nivel de capabilidad de SPICES que poseé 'medidas detalladas del rendimiento, predicción de capabilidad, administración de objetivos y productos de trabajo evaluados cualitativamente'",
	"Bien definido",
	"Controlado cualitativamente",
	"Realizado informalmente",
	"Mejoramiento continuo",
	1
);

preguntas[40] = new estructura_pregunta(
	"Nivel de capabilidad de SPICES que poseé 'metas cualitativas de eficacia y eficiencia basados en los objetivos del negocio, re-alimentación cuantitativa para definir procesos y probar nuevas ideas'",
	"Planeado y seguido",
	"Mejoramiento continuo",
	"Controlado cualitativamente",
	"Bien definido",
	1
);

preguntas[41] = new estructura_pregunta(
	"¿Con que fin es evaluada cada área de procesos en SPICES?",
	"Pasar los test",
	"Ser categorizada en algunos de los niveles de capabilidad",
	"Sin motivo",
	"Ganar más dinero",
	1
);

preguntas[42] = new estructura_pregunta(
	"¿Mientras CMM está orientado a organizaciones SPICE esta orientado a _____________",
	"Académicos",
	"Gobiernos",
	"Procesos",
	"Software",
	2
);

preguntas[43] = new estructura_pregunta(
	"¿Con qué objetivo se describe cuidadosamente la evaluación en SPICES?",
	"Evitar subjetividad en los reportes",
	"Profesionalismo",
	"Tener siempre los mejores programadores",
	"No tener que repetir los procesos de evaluación",
	0
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
