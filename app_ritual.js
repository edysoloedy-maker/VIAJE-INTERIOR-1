// ===============================
// VIAJE INTERIOR — app_ritual.js (UNIFICADO / ESTABLE / PREMIUM)
// ✅ SIN QR
// ✅ SIN OJO DE HORUS
// ✅ SELLO GRÁFICO (VECTOR) + FIRMA CALIGRÁFICA (MEJORADA)
// ✅ SELLO SUBIDO (YA NO SE AMONTONA CON “Sello ceremonial”)
// ✅ TEXTO INTERNO DEL SELLO LIMPIO (SIN AMONTONARSE)
// ✅ AUDIO GREGORIANO FUNCIONA EN PC + MÓVIL (UNLOCK)
// ✅ BOTONES (Cruzar Umbral / Iniciar) SIEMPRE RESPONDEN
// 👉 Solo pega tus 99 preguntas en: const todasLasPreguntas = [ ... ];
// ===============================
const todasLasPreguntas = [
   { id: 1, pregunta: "Cuando surge un conflicto inesperado, mi primera reacción es:", opciones: ["Buscar la armonía a toda costa","Defender mis principios sin miedo","Evitarlo y esperar que se resuelva solo","Analizarlo cuidadosamente antes de actuar","Actuar impulsivamente según mi intuición"] },
  { id: 2, pregunta: "Siento que mis emociones me dominan cuando:", opciones: ["Estoy solo y reflexiono sobre mi vida","Me critican o ignoran mi opinión","No logro cumplir con mis responsabilidades","Estoy frente a situaciones injustas","Todo me afecta y pierdo el control fácilmente"] },
  { id: 3, pregunta: "En la soledad, descubro que mi alma:", opciones: ["Busca entender y perdonar","Anhela reconocimiento y amor","Se refugia en pensamientos ordenados","Siente miedo de la vulnerabilidad","Quiere experimentar libertad y creatividad"] },
  { id: 4, pregunta: "La crítica hacia mí despierta en mi interior:", opciones: ["La necesidad de mejorar y corregir errores","Ira o resentimiento","Tristeza y deseo de aislamiento","Reflexión profunda y autocomprensión","Deseo de romper límites y demostrar quién soy"] },
  { id: 5, pregunta: "Cuando enfrento decisiones difíciles, mi guía principal es:", opciones: ["La lógica y la razón","Mis valores y ética","Lo que me dicta mi corazón","La intuición profunda","La necesidad de sentirme seguro"] },
  { id: 6, pregunta: "Mi mayor temor en la vida diaria es:", opciones: ["Ser imperfecto o cometer errores","No ser amado o valorado","Perder estabilidad o control","No encontrar sentido a mi existencia","Sentirme atrapado o limitado"] },
  { id: 7, pregunta: "Cuando algo no sale como esperaba, suelo:", opciones: ["Culparme internamente","Sentirme frustrado y molesto","Adaptarme y seguir adelante","Retirarme a pensar y analizar","Cambiar de rumbo sin mirar atrás"] },
  { id: 8, pregunta: "La felicidad, en lo profundo de mi ser, significa:", opciones: ["Paz interior y equilibrio","Éxito y reconocimiento","Libertad emocional","Comprensión y sabiduría","Intensidad y experiencia"] },
  { id: 9, pregunta: "Cuando ayudo a los demás, lo hago porque:", opciones: ["Es mi deber moral","Necesito sentirme necesario","Me nace de manera natural","Quiero entender y guiar","Me inspira conectar con otros"] },
  { id: 10, pregunta: "Mi diálogo interno suele ser:", opciones: ["Exigente y crítico","Emocional y sensible","Práctico y resolutivo","Analítico y profundo","Inquieto y cambiante"] },
  { id: 11, pregunta: "Cuando pienso en el futuro, siento principalmente:", opciones: ["Responsabilidad","Esperanza","Ansiedad","Curiosidad","Entusiasmo"] },
  { id: 12, pregunta: "Las reglas y normas para mí son:", opciones: ["Necesarias para el orden","Guías flexibles","Limitaciones incómodas","Objetos de análisis","Algo que se puede romper"] },
  { id: 13, pregunta: "Cuando alguien me decepciona:", opciones: ["Me lo guardo y sigo","Me duele profundamente","Me adapto y continúo","Reflexiono y tomo distancia","Me desconecto emocionalmente"] },
  { id: 14, pregunta: "En una crisis emocional, tiendo a:", opciones: ["Buscar control","Buscar afecto","Buscar estabilidad","Buscar comprensión","Buscar escape"] },
  { id: 15, pregunta: "Mi energía diaria se enfoca más en:", opciones: ["Hacer lo correcto","Sentir intensamente","Mantener seguridad","Entender profundamente","Experimentar la vida"] },
  { id: 16, pregunta: "Cuando me siento juzgado:", opciones: ["Intento mejorar","Me hiere profundamente","Me cierro emocionalmente","Analizo al otro","Rechazo la opinión"] },
  { id: 17, pregunta: "Mi relación con el control es:", opciones: ["Necesario","Emocional","Prudente","Mental","Rebelde"] },
  { id: 18, pregunta: "El silencio para mí representa:", opciones: ["Orden interno","Conexión emocional","Seguridad","Refugio","Aburrimiento"] },
  { id: 19, pregunta: "Cuando pierdo algo importante:", opciones: ["Me culpo","Me duele intensamente","Me adapto","Lo analizo","Sigo adelante rápido"] },
  { id: 20, pregunta: "Mi mayor fortaleza interna es:", opciones: ["Disciplina","Empatía","Resiliencia","Sabiduría","Creatividad"] },
  { id: 21, pregunta: "Cuando todo va bien, suelo:", opciones: ["Mantener el orden","Disfrutar emocionalmente","Relajarme","Observar","Buscar más"] },
  { id: 22, pregunta: "Mi relación con el pasado es:", opciones: ["Lecciones","Heridas","Base","Objeto de análisis","Algo que dejo atrás"] },
  { id: 23, pregunta: "Cuando me siento incomprendido:", opciones: ["Me esfuerzo más","Me duele profundamente","Me adapto","Me aíslo","Me libero"] },
  { id: 24, pregunta: "La autoridad para mí es:", opciones: ["Necesaria","Emocional","Funcional","Cuestionable","Limitante"] },
  { id: 25, pregunta: "Cuando tomo riesgos:", opciones: ["Evalúo consecuencias","Sigo emociones","Busco seguridad","Analizo escenarios","Me lanzo"] },
  { id: 26, pregunta: "Mi intuición suele decirme que:", opciones: ["Corrija","Sienta","Proteja","Observe","Explore"] },
  { id: 27, pregunta: "El éxito personal para mí es:", opciones: ["Ser íntegro","Ser valorado","Estar en paz","Comprender la vida","Vivir plenamente"] },
  { id: 28, pregunta: "Cuando estoy bajo presión:", opciones: ["Me vuelvo rígido","Me vuelvo sensible","Me vuelvo cauteloso","Me vuelvo distante","Me vuelvo impulsivo"] },
  { id: 29, pregunta: "La incertidumbre me genera:", opciones: ["Deseo de control","Ansiedad emocional","Inseguridad","Curiosidad","Excitación"] },
  { id: 30, pregunta: "Mi mayor motor interno es:", opciones: ["La corrección","El amor","La seguridad","El conocimiento","La libertad"] },
  { id: 31, pregunta: "Cuando fallo:", opciones: ["Me castigo","Me duele","Me recompongo","Aprendo","Cambio de rumbo"] },
  { id: 32, pregunta: "Mi esencia interna se siente más cercana a:", opciones: ["La rectitud","La sensibilidad","La estabilidad","La observación","La expansión"] },
  { id: 33, pregunta: "Al responder este cuestionario, siento que:", opciones: ["Estoy enfrentando mi verdad","Estoy tocando fibras profundas","Estoy buscando claridad","Estoy analizando mi mente","Estoy explorando mi espíritu"] },
  {
    id: 34,
    pregunta: "Cuando siento que pierdo el control de una situación:",
    opciones: ["Intento imponer orden inmediatamente","Me altero emocionalmente","Busco refugio en lo conocido","Me desconecto y observo","Rompo con todo y sigo adelante"]
  },
  {
    id: 35,
    pregunta: "El rechazo de los demás despierta en mí:",
    opciones: ["Autocrítica","Dolor emocional profundo","Inseguridad","Distancia mental","Indiferencia aparente"]
  },
  {
    id: 36,
    pregunta: "Cuando alguien depende de mí emocionalmente:",
    opciones: ["Asumo la responsabilidad","Me involucro intensamente","Me siento presionado","Analizo la situación","Intento liberarme"]
  },
  {
    id: 37,
    pregunta: "Mi mayor herida emocional tiene que ver con:",
    opciones: ["La injusticia","El abandono","La inseguridad","La incomprensión","La limitación"]
  },
  {
    id: 38,
    pregunta: "Cuando me siento atrapado:",
    opciones: ["Me vuelvo rígido","Me vuelvo dramático","Me lleno de miedo","Me desconecto mentalmente","Busco escapar"]
  },
  {
    id: 39,
    pregunta: "El enojo en mí suele aparecer cuando:",
    opciones: ["Las cosas no son correctas","No me valoran","Me siento amenazado","Invaden mi espacio","Me quitan libertad"]
  },
  {
    id: 40,
    pregunta: "Cuando alguien me confronta directamente:",
    opciones: ["Defiendo mi postura","Me afecta emocionalmente","Me pongo a la defensiva","Escucho y analizo","Ataco o huyo"]
  },
  {
    id: 41,
    pregunta: "La culpa en mi vida aparece cuando:",
    opciones: ["No cumplo mis estándares","Lastimo emocionalmente","Fallo en proteger","No entiendo lo que pasa","Siento que me detuve"]
  },
  {
    id: 42,
    pregunta: "Cuando todo se vuelve incierto:",
    opciones: ["Busco reglas","Busco contención emocional","Busco seguridad","Busco información","Busco nuevas experiencias"]
  },
  {
    id: 43,
    pregunta: "Mi relación con el miedo es:",
    opciones: ["Lo enfrento con disciplina","Me atraviesa emocionalmente","Me paraliza a veces","Lo observo desde fuera","Lo evito cambiando de foco"]
  },
  {
    id: 44,
    pregunta: "Cuando alguien me necesita demasiado:",
    opciones: ["Cumplo con responsabilidad","Me involucro hasta perderme","Me siento cargado","Me retiro un poco","Me escapo"]
  },
  {
    id: 45,
    pregunta: "En situaciones límite, mi instinto es:",
    opciones: ["Hacer lo correcto","Sentir intensamente","Protegerme","Pensar con frialdad","Actuar sin pensar"]
  },
  {
    id: 46,
    pregunta: "La soledad prolongada en mí genera:",
    opciones: ["Reflexión moral","Nostalgia emocional","Ansiedad","Claridad mental","Inquietud"]
  },
  {
    id: 47,
    pregunta: "Cuando alguien no cumple lo que promete:",
    opciones: ["Me molesta profundamente","Me duele emocionalmente","Me genera desconfianza","Lo analizo fríamente","Paso a otra cosa"]
  },
  {
    id: 48,
    pregunta: "Mi necesidad más inconsciente es:",
    opciones: ["Ser correcto","Ser amado","Sentirme seguro","Comprender","Ser libre"]
  },
  {
    id: 49,
    pregunta: "Cuando pierdo estabilidad:",
    opciones: ["Me vuelvo rígido","Me desbordo emocionalmente","Me lleno de miedo","Me disocio","Cambio radicalmente"]
  },
  {
    id: 50,
    pregunta: "La traición para mí es:",
    opciones: ["Imperdonable","Devastadora","Aterradora","Objeto de análisis","Motivo de ruptura"]
  },
  {
    id: 51,
    pregunta: "Cuando siento vacío interior:",
    opciones: ["Busco orden","Busco conexión","Busco estabilidad","Busco conocimiento","Busco estímulos"]
  },
  {
    id: 52,
    pregunta: "Mi relación con el poder es:",
    opciones: ["Responsable","Emocional","Cautelosa","Distante","Desafiante"]
  },
  {
    id: 53,
    pregunta: "Cuando siento que no encajo:",
    opciones: ["Intento mejorar","Me siento herido","Me adapto","Me aíslo","Me voy"]
  },
  {
    id: 54,
    pregunta: "Mi mayor lucha interna ocurre entre:",
    opciones: ["Lo correcto y lo imperfecto","Lo que siento y lo que pierdo","La seguridad y el miedo","La mente y la emoción","El deseo y el límite"]
  },
  {
    id: 55,
    pregunta: "Cuando me siento observado:",
    opciones: ["Me esfuerzo más","Me siento vulnerable","Me pongo tenso","Me distancio","Me rebelo"]
  },
  {
    id: 56,
    pregunta: "Mi forma de protegerme emocionalmente es:",
    opciones: ["El control","La intensidad emocional","La cautela","La racionalización","La evasión"]
  },
  {
    id: 57,
    pregunta: "Cuando algo me duele profundamente:",
    opciones: ["Me lo guardo","Lo siento intensamente","Me preocupo","Lo analizo","Lo evito"]
  },
  {
    id: 58,
    pregunta: "La frustración en mí genera:",
    opciones: ["Rigidez","Tristeza","Ansiedad","Distancia","Impulsividad"]
  },
  {
    id: 59,
    pregunta: "Mi mayor miedo oculto es:",
    opciones: ["Ser corrupto o incorrecto","No ser amado","No sobrevivir","No entender la vida","Quedar atrapado"]
  },
  {
    id: 60,
    pregunta: "Cuando alguien invade mis límites:",
    opciones: ["Corrijo","Me hiero","Me cierro","Me retiro","Reacciono fuerte"]
  },
  {
    id: 61,
    pregunta: "Mi relación con la autoridad interna es:",
    opciones: ["Muy fuerte","Emocional","Insegura","Intelectual","Rebelde"]
  },
  {
    id: 62,
    pregunta: "Cuando no tengo respuestas:",
    opciones: ["Busco reglas","Busco consuelo","Busco protección","Busco información","Busco escape"]
  },
  {
    id: 63,
    pregunta: "Mi sombra más frecuente es:",
    opciones: ["La rigidez","La dependencia emocional","El miedo constante","El aislamiento","La impulsividad"]
  },
  {
    id: 64,
    pregunta: "Cuando me siento vulnerable:",
    opciones: ["Me controlo","Me expreso","Me protejo","Me escondo","Huyo"]
  },
  {
    id: 65,
    pregunta: "La intensidad emocional en mi vida es:",
    opciones: ["Moderada y controlada","Muy alta","Variable","Baja","Explosiva"]
  },
  {
    id: 66,
    pregunta: "Al mirar mis sombras, siento que:",
    opciones: ["Debo corregirme","Debo aceptarme","Debo protegerme","Debo comprenderme","Debo liberarme"]
  },
  {
    id: 67,
    pregunta: "Cuando siento que mi vida pierde sentido:",
    opciones: ["Intento corregir mi rumbo","Me sumerjo en la emoción","Busco seguridad","Busco respuestas profundas","Busco una nueva experiencia"]
  },
  {
    id: 68,
    pregunta: "Mi reacción más honesta ante el fracaso es:",
    opciones: ["Autoexigencia","Dolor emocional","Miedo","Análisis","Desapego rápido"]
  },
  {
    id: 69,
    pregunta: "Cuando nadie me observa, yo soy:",
    opciones: ["Exigente conmigo","Emocionalmente intenso","Cauteloso","Reflexivo","Libre e impulsivo"]
  },
  {
    id: 70,
    pregunta: "Mi mayor punto de quiebre aparece cuando:",
    opciones: ["Siento injusticia","Siento abandono","Siento amenaza","Siento incomprensión","Siento encierro"]
  },
  {
    id: 71,
    pregunta: "Si todo colapsa, mi instinto más primario es:",
    opciones: ["Restablecer orden","Buscar vínculo","Protegerme","Retirarme","Huir hacia algo nuevo"]
  },
  {
    id: 72,
    pregunta: "La verdad incómoda sobre mí es que:",
    opciones: ["Soy muy duro conmigo","Siento más de lo que muestro","Vivo en alerta","Me escondo en la mente","Evito el dolor"]
  },
  {
    id: 73,
    pregunta: "Cuando alguien ve mi fragilidad:",
    opciones: ["Me incomoda","Me expone","Me asusta","Me incomprende","Me impulsa a huir"]
  },
  {
    id: 74,
    pregunta: "Mi relación con el vacío interior es:",
    opciones: ["Lo lleno con deber","Lo lleno con emoción","Lo lleno con estabilidad","Lo observo","Lo evito"]
  },
  {
    id: 75,
    pregunta: "Cuando me detengo a sentir profundamente:",
    opciones: ["Surge culpa","Surge tristeza","Surge miedo","Surge claridad","Surge inquietud"]
  },
  {
    id: 76,
    pregunta: "El patrón que más se repite en mi vida es:",
    opciones: ["Autoexigencia","Búsqueda de amor","Búsqueda de seguridad","Búsqueda de comprensión","Búsqueda de libertad"]
  },
  {
    id: 77,
    pregunta: "Cuando alguien depende de mí por completo:",
    opciones: ["Asumo responsabilidad","Me involucro demasiado","Me siento cargado","Me distancio","Me libero"]
  },
  {
    id: 78,
    pregunta: "Mi mayor autoengaño ha sido creer que:",
    opciones: ["Debo ser perfecto","El amor me salvará","La seguridad es suficiente","Pensar es sentir","Escapar es vivir"]
  },
  {
    id: 79,
    pregunta: "Cuando miro mi historia personal:",
    opciones: ["Veo errores que corregir","Veo heridas emocionales","Veo momentos de miedo","Veo patrones mentales","Veo caminos inconclusos"]
  },
  {
    id: 80,
    pregunta: "Mi forma más frecuente de sabotearme es:",
    opciones: ["La rigidez","La dependencia","La desconfianza","El aislamiento","La dispersión"]
  },
  {
    id: 81,
    pregunta: "Cuando alguien me ama profundamente:",
    opciones: ["Me esfuerzo más","Me apego","Me preocupo","Lo observo con distancia","Me siento atrapado"]
  },
  {
    id: 82,
    pregunta: "Mi relación con el presente es:",
    opciones: ["Exigente","Intensa","Ansiosa","Observadora","Inquieta"]
  },
  {
    id: 83,
    pregunta: "Cuando no puedo huir de mí mismo:",
    opciones: ["Me juzgo","Me siento","Me asusto","Me analizo","Me distraigo"]
  },
  {
    id: 84,
    pregunta: "Mi mayor resistencia al cambio es:",
    opciones: ["Perder control","Perder conexión","Perder seguridad","Perder claridad","Perder libertad"]
  },
  {
    id: 85,
    pregunta: "Cuando algo termina definitivamente:",
    opciones: ["Lo evalúo","Lo lloro","Me preocupo","Lo comprendo","Paso a otra cosa"]
  },
  {
    id: 86,
    pregunta: "Mi miedo más silencioso es:",
    opciones: ["Ser incorrecto","No ser amado","No estar a salvo","No entender","No vivir plenamente"]
  },
  {
    id: 87,
    pregunta: "Cuando siento paz verdadera:",
    opciones: ["Hay orden","Hay conexión","Hay estabilidad","Hay silencio","Hay expansión"]
  },
  {
    id: 88,
    pregunta: "La parte de mí que más oculto es:",
    opciones: ["Mi rigidez","Mi necesidad","Mi miedo","Mi distancia","Mi impulsividad"]
  },
  {
    id: 89,
    pregunta: "Cuando pienso en crecer interiormente:",
    opciones: ["Pienso en corregir","Pienso en sanar","Pienso en confiar","Pienso en comprender","Pienso en soltar"]
  },
  {
    id: 90,
    pregunta: "Mi mayor aprendizaje pendiente es:",
    opciones: ["Aceptar imperfección","Aceptar pérdida","Aceptar incertidumbre","Aceptar emoción","Aceptar límite"]
  },
  {
    id: 91,
    pregunta: "Cuando me siento completo:",
    opciones: ["Actúo con ética","Siento conexión","Siento calma","Siento claridad","Siento libertad"]
  },
  {
    id: 92,
    pregunta: "Mi reacción ante la verdad profunda es:",
    opciones: ["Corrección","Emoción","Precaución","Comprensión","Liberación"]
  },
  {
    id: 93,
    pregunta: "Cuando me observo sin juicio:",
    opciones: ["Reconozco exigencia","Reconozco herida","Reconozco miedo","Reconozco patrón","Reconozco deseo"]
  },
  {
    id: 94,
    pregunta: "El mayor llamado de mi alma es:",
    opciones: ["Integridad","Amor auténtico","Confianza","Sabiduría","Expansión"]
  },
  {
    id: 95,
    pregunta: "Cuando dejo de resistirme:",
    opciones: ["Me relajo","Siento alivio","Siento calma","Entiendo","Fluyo"]
  },
  {
    id: 96,
    pregunta: "Mi conciencia me pide ahora:",
    opciones: ["Flexibilidad","Autoaceptación","Confianza","Presencia","Enraizamiento"]
  },
  {
    id: 97,
    pregunta: "Al responder con total honestidad, siento que:",
    opciones: ["Me confronté","Me expuse","Me protegí menos","Me comprendí","Me liberé"]
  },
  {
    id: 98,
    pregunta: "Este cuestionario ha tocado en mí:",
    opciones: ["Mi ética","Mi herida","Mi miedo","Mi mente","Mi espíritu"]
  },
  {
    id: 99,
    pregunta: "Estoy listo para avanzar al siguiente nivel porque:",
    opciones: ["Reconozco mis patrones","Acepto mis emociones","Entiendo mis miedos","Comprendo mi estructura","Deseo transformarme"]
  }

];

/* ===============================
   VARIABLES GLOBALES
=============================== */
let indicePregunta = 0;
let respuestasUsuario = [];
let nombrePacienteGlobal = "";

/* ===============================
   BLOQUE DE PREGUNTAS
   🔴 PEGA AQUÍ tu bloque COMPLETO de 99 preguntas
   Estructura:
   { id: 1, pregunta: "Texto", opciones: ["A","B","C","D"] }
=============================== */

/* ===============================
   ELEMENTOS DOM
=============================== */
const pantallaUmbral = document.getElementById("umbral");
const pantallaInicio = document.getElementById("inicio");
const contenedor = document.getElementById("contenedorPreguntas");
const btnIniciar = document.getElementById("btnIniciar");
const btnCruzar = document.getElementById("btnCruzar");
const btnSalir = document.getElementById("btnSalir");

/* ===============================
   UMBRAL
=============================== */
if (btnCruzar) {
  btnCruzar.addEventListener("click", () => {
    iniciarMusicaAmbiente(); // ✅ gesto real: móvil OK
    pantallaUmbral?.classList.add("oculto");
    pantallaInicio?.classList.remove("oculto");
  });
}

if (btnSalir) {
  btnSalir.addEventListener("click", () => {
    alert("Te retiras. No hay juicio. Pero recuerda: lo que no enfrentas, te dirige.");
    location.reload();
  });
}

/* ===============================
   INICIO
=============================== */
if (btnIniciar) {
  btnIniciar.addEventListener("click", () => {
    const nombre = prompt("Ingresa tu nombre:");
    if (!nombre || !nombre.trim()) return;

    nombrePacienteGlobal = nombre.trim();
    pantallaInicio?.classList.add("oculto");

    iniciarMusicaAmbiente(); // ✅ gesto real: móvil OK
    mostrarPregunta();
  });
}

/* ===============================
   MOSTRAR PREGUNTA
=============================== */
function mostrarPregunta() {
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (indicePregunta >= todasLasPreguntas.length) {
    mostrarResultado();
    return;
  }

  const p = todasLasPreguntas[indicePregunta];

  const preguntaDiv = document.createElement("div");
  preguntaDiv.className = "pregunta";

  const titulo = document.createElement("h2");
  titulo.textContent = `Pregunta ${p.id}: ${p.pregunta}`;
  preguntaDiv.appendChild(titulo);

  const opcionesDiv = document.createElement("div");
  opcionesDiv.className = "opciones";

  p.opciones.forEach((opcion) => {
    const btn = document.createElement("button");
    btn.className = "opcion-btn";
    btn.textContent = opcion;
    btn.type = "button";
    btn.onclick = () => {
      respuestasUsuario.push({ id: p.id, respuesta: opcion });
      indicePregunta++;
      mostrarPregunta();
    };
    opcionesDiv.appendChild(btn);
  });

  preguntaDiv.appendChild(opcionesDiv);
  contenedor.appendChild(preguntaDiv);
}

/* ===============================
   RESULTADO
=============================== */
function mostrarResultado() {
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="resultado">
      <h2>Has completado el Viaje</h2>
      <p style="opacity:.9; line-height:1.6; margin-top:10px">
        Has cruzado el umbral y completado el recorrido.<br>
        Ahora puedes emitir tu certificado ceremonial.
      </p>
      <button id="btnPDF" style="margin-top:16px" type="button">Generar Certificado (PDF)</button>
      <button id="btnReset" class="secundario" style="margin-top:12px" type="button">Reiniciar</button>
    </div>
  `;

  document.getElementById("btnPDF")?.addEventListener("click", generarPDFMedievalSINQR_Premium);
  document.getElementById("btnReset")?.addEventListener("click", () => location.reload());
}

/* ===============================
   CONFIG (se deja por si luego reactivas verificación)
=============================== */
const URL_VERIFICACION_BASE = `${location.origin}${location.pathname.replace(/\/[^/]*$/, "")}/verificar.html`;
const REGISTRY_API_URL =
  "https://script.google.com/macros/s/AKfycbxD9kBjPPCBqs3YgBIcoKnOQsv2zTW4a-x2DC8OCepLYFhiFhTPME2D-8iYUaWU4LRh/exec";
const REGISTRY_API_KEY = "VI_2026_REGISTRO_f8Q2mZ7pK1xV4nH9rT3cL6aP0sY5dG";

/* =========================================================
   BLOQUE BLINDADO (UTILS + PDF PREMIUM SIN QR + BINDINGS)
========================================================= */
(() => {
  "use strict";

  const VI_DEBUG = true;
  const log = (...args) => VI_DEBUG && console.log("[VI]", ...args);
  const warn = (...args) => console.warn("[VI]", ...args);
  const err = (...args) => console.error("[VI]", ...args);

  window.addEventListener("error", (e) => err("Error global:", e?.message || e));
  window.addEventListener("unhandledrejection", (e) => err("Promise rechazada:", e?.reason || e));

  if (typeof window.nombrePacienteGlobal === "undefined") window.nombrePacienteGlobal = "";

  function getNombrePaciente() {
    if (window.nombrePacienteGlobal && String(window.nombrePacienteGlobal).trim()) {
      return String(window.nombrePacienteGlobal).trim();
    }
    if (nombrePacienteGlobal && String(nombrePacienteGlobal).trim()) {
      window.nombrePacienteGlobal = String(nombrePacienteGlobal).trim();
      return window.nombrePacienteGlobal;
    }
    const ls = localStorage.getItem("VI_NOMBRE");
    if (ls && ls.trim()) {
      window.nombrePacienteGlobal = ls.trim();
      return window.nombrePacienteGlobal;
    }
    const p = prompt("Escribe el nombre para el certificado:");
    if (p && p.trim()) {
      window.nombrePacienteGlobal = p.trim();
      localStorage.setItem("VI_NOMBRE", window.nombrePacienteGlobal);
      return window.nombrePacienteGlobal;
    }
    return "Paciente";
  }

  // Guardado local “demo”
  window.registrarCertificadoLocal =
    window.registrarCertificadoLocal ||
    function registrarCertificadoLocal(certId, nombre) {
      try {
        const key = "VI_REGISTRO_LOCAL";
        const arr = JSON.parse(localStorage.getItem(key) || "[]");
        arr.push({ certId, nombre, ts: Date.now() });
        localStorage.setItem(key, JSON.stringify(arr));
      } catch (e) {
        warn("No se pudo registrar localmente:", e);
      }
    };

  // Opacidad segura
  window.aplicarOpacidad =
    window.aplicarOpacidad ||
    function aplicarOpacidad(doc, alpha, drawFn) {
      try {
        if (doc && typeof doc.setGState === "function" && doc.GState) {
          const gs = new doc.GState({ opacity: alpha });
          doc.setGState(gs);
          drawFn();
          doc.setGState(new doc.GState({ opacity: 1 }));
          return;
        }
      } catch {}
      drawFn();
    };

  // Esquinas
  window.adornarEsquina =
    window.adornarEsquina ||
    function adornarEsquina(doc, x, y, corner) {
      const len = 10;
      try {
        if (corner === 1) {
          doc.line(x, y, x + len, y);
          doc.line(x, y, x, y + len);
          doc.line(x + 2, y + 2, x + len - 2, y + 2);
          doc.line(x + 2, y + 2, x + 2, y + len - 2);
        } else if (corner === 2) {
          doc.line(x, y, x - len, y);
          doc.line(x, y, x, y + len);
          doc.line(x - 2, y + 2, x - len + 2, y + 2);
          doc.line(x - 2, y + 2, x - 2, y + len - 2);
        } else if (corner === 3) {
          doc.line(x, y, x + len, y);
          doc.line(x, y, x, y - len);
          doc.line(x + 2, y - 2, x + len - 2, y - 2);
          doc.line(x + 2, y - 2, x + 2, y - len + 2);
        } else if (corner === 4) {
          doc.line(x, y, x - len, y);
          doc.line(x, y, x, y - len);
          doc.line(x - 2, y - 2, x - len + 2, y - 2);
          doc.line(x - 2, y - 2, x - 2, y - len + 2);
        }
      } catch {}
    };

  // Texto centrado con wrap
  window.textoEnBloqueCentrado =
    window.textoEnBloqueCentrado ||
    function textoEnBloqueCentrado(doc, text, centerX, startY, maxWidth, lineHeight) {
      const words = String(text).split(/\s+/);
      let line = "";
      let y = startY;

      const pushLine = (ln) => {
        doc.text(ln, centerX, y, { align: "center", maxWidth });
        y += lineHeight;
      };

      for (const w of words) {
        const test = (line ? line + " " : "") + w;
        const width = doc.getTextWidth(test);
        if (width > maxWidth && line) {
          pushLine(line);
          line = w;
        } else {
          line = test;
        }
      }
      if (line) pushLine(line);
    };

  // Descarga segura
  function descargarBlob(blob, filename) {
    try {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    } catch (e) {
      err("No se pudo descargar blob:", e);
      alert("No se pudo descargar el PDF. Revisa consola (F12).");
    }
  }

  /* ===============================
     SELLO + FIRMA (VECTOR) — MEJORADOS
  =============================== */
  function dibujarSelloPremium(doc, cx, cy, r) {
    // Sello limpio: texto arriba/abajo (legible), monograma, dientes tipo lacre.
    doc.setDrawColor(92, 65, 30);
    doc.setLineWidth(0.9);

    doc.circle(cx, cy, r, "S");
    doc.setLineWidth(0.35);
    doc.circle(cx, cy, r - 2.2, "S");
    doc.circle(cx, cy, r - 5.0, "S");

    doc.setLineWidth(0.25);
    const spikes = 26;
    for (let i = 0; i < spikes; i++) {
      const a = (Math.PI * 2 * i) / spikes;
      const x1 = cx + Math.cos(a) * (r - 0.5);
      const y1 = cy + Math.sin(a) * (r - 0.5);
      const x2 = cx + Math.cos(a) * (r + 1.4);
      const y2 = cy + Math.sin(a) * (r + 1.4);
      doc.line(x1, y1, x2, y2);
    }

    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("VI", cx, cy + 2, { align: "center" });

    doc.setLineWidth(0.35);
    doc.line(cx - r * 0.22, cy, cx + r * 0.22, cy);
    doc.line(cx, cy - r * 0.22, cx, cy + r * 0.22);

    doc.setFont("times", "bold");
    doc.setFontSize(7.6);
    doc.text("VIAJE INTERIOR", cx, cy - r * 0.62, { align: "center" });
    doc.text("CERTIFICADO", cx, cy + r * 0.74, { align: "center" });

    doc.setFontSize(10);
    doc.text("•", cx - r * 0.65, cy + 1.2, { align: "center" });
    doc.text("•", cx + r * 0.65, cy + 1.2, { align: "center" });
  }

  function dibujarFirmaCaligrafica(doc, x, y, w) {
    // Firma realista: texto elegante + flourish de pluma.
    doc.setTextColor(45, 28, 14);
    doc.setDrawColor(45, 28, 14);

    // Nombre “firma”
    doc.setFont("times", "italic");
    doc.setFontSize(20);
    doc.text("A. Arcano", x + 6, y + 1.5);

    // Flourish debajo
    if (typeof doc.curve !== "function") {
      doc.setLineWidth(0.45);
      doc.line(x, y + 5, x + w * 0.40, y + 2);
      doc.line(x + w * 0.40, y + 2, x + w * 0.78, y + 6);
      doc.setLineWidth(0.30);
      doc.line(x + w * 0.55, y + 6, x + w * 1.05, y + 6);
      return;
    }

    doc.setLineWidth(0.55);
    const y0 = y + 6.0;
    const h = w * 0.12;

    doc.curve(
      x, y0,
      x + w * 0.18, y0 - h,
      x + w * 0.35, y0 + h * 0.9,
      x + w * 0.52, y0 + h * 0.1
    );

    doc.curve(
      x + w * 0.52, y0 + h * 0.1,
      x + w * 0.66, y0 - h * 0.9,
      x + w * 0.78, y0 + h * 0.8,
      x + w * 0.92, y0 + h * 0.2
    );

    doc.setLineWidth(0.35);
    doc.curve(
      x + w * 0.70, y0 + h * 0.4,
      x + w * 0.82, y0 + h * 1.2,
      x + w * 1.03, y0 + h * 1.0,
      x + w * 1.12, y0 + h * 0.35
    );
  }

  /* =========================================================
     PDF MEDIEVAL PREMIUM (SIN QR / SIN OJO HORUS)
     ========================================================= */
  window.generarPDFMedievalSINQR_Premium = async function generarPDFMedievalSINQR_Premium() {
    try {
      if (!window.jspdf || !window.jspdf.jsPDF) {
        alert("No se cargó jsPDF. Revisa el CDN / conexión.");
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF("p", "mm", "a4");
      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();

      const nombrePaciente = getNombrePaciente();

      const certId =
        "VI-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        Math.floor(Math.random() * 1000).toString().padStart(3, "0");

      window.registrarCertificadoLocal(certId, nombrePaciente);

      // ===== 1) Fondo pergamino =====
      doc.setFillColor(246, 236, 216);
      doc.rect(0, 0, W, H, "F");

      window.aplicarOpacidad(doc, 0.06, () => {
        doc.setFillColor(120, 85, 35);
        for (let i = 0; i < 240; i++) {
          doc.circle(Math.random() * W, Math.random() * H, 0.6 + Math.random() * 2.8, "F");
        }
      });

      window.aplicarOpacidad(doc, 0.045, () => {
        doc.setFillColor(90, 60, 25);
        for (let i = 0; i < 14; i++) {
          doc.ellipse(
            Math.random() * W,
            Math.random() * H,
            12 + Math.random() * 38,
            10 + Math.random() * 30,
            "F"
          );
        }
      });

      // ===== 2) Marco medieval =====
      doc.setDrawColor(92, 65, 30);
      doc.setLineWidth(0.9);
      doc.roundedRect(12, 12, W - 24, H - 24, 3.2, 3.2, "S");

      doc.setDrawColor(58, 40, 18);
      doc.setLineWidth(0.25);
      doc.roundedRect(15, 15, W - 30, H - 30, 2.6, 2.6, "S");
      doc.roundedRect(18, 18, W - 36, H - 36, 2.2, 2.2, "S");

      window.aplicarOpacidad(doc, 0.35, () => {
        doc.setDrawColor(120, 85, 35);
        doc.setLineWidth(0.45);
        window.adornarEsquina(doc, 18, 18, 1);
        window.adornarEsquina(doc, W - 18, 18, 2);
        window.adornarEsquina(doc, 18, H - 18, 3);
        window.adornarEsquina(doc, W - 18, H - 18, 4);
      });

      // ✅ OJO DE HORUS ELIMINADO (no hay marca de agua)

      // ===== 3) Texto ceremonial =====
      doc.setTextColor(45, 28, 14);

      doc.setFont("times", "bold");
      doc.setFontSize(22);
      doc.text("CERTIFICADO", W / 2, 46, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(13);
      doc.text("VIAJE INTERIOR", W / 2, 56, { align: "center" });

      doc.setDrawColor(120, 85, 35);
      doc.setLineWidth(0.35);
      doc.line(44, 62, W - 44, 62);

      doc.setFont("times", "italic");
      doc.setFontSize(12);
      doc.text("Se concede a", W / 2, 78, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(26);
      doc.text(nombrePaciente, W / 2, 94, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(12.5);

      const texto =
        "Por haber cruzado el Umbral con sinceridad, responder con valentía, y completar el recorrido de introspección. Que este documento sea testimonio de presencia, consciencia y voluntad de transformación.";
      window.textoEnBloqueCentrado(doc, texto, W / 2, 122, 156, 6.3);

      doc.setFontSize(10.5);
      doc.setTextColor(65, 45, 25);
      doc.text(`No. Certificado: ${certId}`, 24, 220);
      doc.text(`Fecha: ${new Date().toLocaleDateString("es-MX")}`, 24, 228);

      // ===== 4) Firma + Sello PREMIUM (AJUSTADO) =====
      doc.setDrawColor(60, 40, 20);
      doc.setLineWidth(0.35);

      // Línea de firma (izquierda)
      doc.line(24, 252, 110, 252);
      doc.setFont("times", "italic");
      doc.setFontSize(10);
      doc.setTextColor(65, 45, 25);
      doc.text("Firma del Emisor", 67, 258, { align: "center" });

      // Firma caligráfica convincente
      dibujarFirmaCaligrafica(doc, 28, 241, 72);

      // ✅ Sello MÁS ARRIBA + texto MÁS ABAJO (ya no se amontona)
      dibujarSelloPremium(doc, W - 58, 242, 16);
      doc.setFont("times", "italic");
      doc.setFontSize(9);
      doc.setTextColor(65, 45, 25);
      doc.text("Sello ceremonial", W - 58, 270, { align: "center" });

      // ===== 5) Guardar =====
      const pdfBlob = doc.output("blob");
      descargarBlob(pdfBlob, `Certificado_Viaje_Interior_${nombrePaciente}.pdf`);
      alert("Certificado generado ✅");
    } catch (e) {
      err("Fallo general en generarPDFMedievalSINQR_Premium:", e);
      alert("Error generando certificado. Abre consola (F12) para ver el detalle.");
    }
  };

  /* =========================================================
     BLINDA SUBMITS (por si hay forms)
     ========================================================= */
  document.addEventListener(
    "submit",
    (ev) => {
      ev.preventDefault();
      warn("Se previno submit de form (posible causa de que no pase nada).");
      return false;
    },
    true
  );

  document.addEventListener("DOMContentLoaded", () => {
    log("app_ritual.js cargó ✅", location.href);
  });
})();

/* =========================================================
   MÚSICA AMBIENTE — PC + MÓVIL (UNLOCK)
========================================================= */
let musicaAmbiente = null;
let audioDesbloqueado = false;

function crearAudioAmbiente() {
  if (musicaAmbiente) return musicaAmbiente;

  const a = document.createElement("audio");
  a.loop = true;
  a.preload = "auto";
  a.volume = 0.32;
  a.setAttribute("playsinline", "");

  const canOgg = a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"') !== "";
  const canMp3 = a.canPlayType && a.canPlayType("audio/mpeg") !== "";

  a.src = canOgg ? "gregoriano.ogg" : canMp3 ? "gregoriano.mp3" : "gregoriano.ogg";

  document.body.appendChild(a);
  musicaAmbiente = a;
  return musicaAmbiente;
}

async function desbloquearAudioEnMovil() {
  if (audioDesbloqueado) return true;

  const a = crearAudioAmbiente();
  try {
    a.muted = true;
    await a.play();
    a.pause();
    a.currentTime = 0;
    a.muted = false;

    audioDesbloqueado = true;
    console.log("✅ Audio desbloqueado (móvil).");
    return true;
  } catch {
    return false;
  }
}

["pointerdown", "touchstart", "click"].forEach((evt) => {
  window.addEventListener(
    evt,
    () => {
      desbloquearAudioEnMovil();
    },
    { passive: true }
  );
});

async function iniciarMusicaAmbiente() {
  const a = crearAudioAmbiente();

  if (!audioDesbloqueado) {
    await desbloquearAudioEnMovil();
  }

  try {
    await a.play();
    console.log("✅ Música ON:", a.src);
  } catch (e) {
    console.warn("⛔ El navegador bloqueó autoplay. Da otro toque en pantalla.", e);
  }
}
