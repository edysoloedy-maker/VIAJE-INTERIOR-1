// ===============================
// VARIABLES GLOBALES
// ===============================
let indicePregunta = 0;
let respuestasUsuario = [];
let nombrePacienteGlobal = "";

// ===============================
// BLOQUE DE PREGUNTAS
// ===============================
// 🔴 PEGA AQUÍ tu bloque COMPLETO de 99 preguntas (tal cual lo tienes)
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

// ===============================
// ELEMENTOS DOM
// ===============================
const pantallaUmbral = document.getElementById("umbral");
const pantallaInicio = document.getElementById("inicio");
const contenedor = document.getElementById("contenedorPreguntas");
const btnIniciar = document.getElementById("btnIniciar");
const btnCruzar = document.getElementById("btnCruzar");
const btnSalir = document.getElementById("btnSalir");

// ===============================
// UMBRAL
// ===============================
btnCruzar.addEventListener("click", () => {
  iniciarMusicaAmbiente();
  pantallaUmbral.classList.add("oculto");
  pantallaInicio.classList.remove("oculto");
});

btnSalir.addEventListener("click", () => {
  alert("Te retiras. No hay juicio. Pero recuerda: lo que no enfrentas, te dirige.");
  location.reload();
});

// ===============================
// INICIO
// ===============================
btnIniciar.addEventListener("click", () => {
  const nombre = prompt("Ingresa tu nombre:");
  if (!nombre || !nombre.trim()) return;
  nombrePacienteGlobal = nombre.trim();
  pantallaInicio.classList.add("oculto");
  iniciarMusicaAmbiente();
  mostrarPregunta();
});

iniciarMusicaAmbiente();

// ===============================
// MOSTRAR PREGUNTA
// ===============================
function mostrarPregunta() {
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

// ===============================
// RESULTADO
// ===============================
function mostrarResultado() {
  contenedor.innerHTML = `
    <div class="resultado">
      <h2>Has completado el Viaje</h2>
      <p style="opacity:.9; line-height:1.6; margin-top:10px">
        Has cruzado el umbral y completado el recorrido.<br>
        Ahora puedes emitir tu certificado ceremonial.
      </p>
      <button id="btnPDF" style="margin-top:16px">Generar Certificado (PDF)</button>
      <button id="btnReset" class="secundario" style="margin-top:12px">Reiniciar</button>
    </div>
  `;

  document.getElementById("btnPDF").addEventListener("click", generarPDFMedievalConQR);
  document.getElementById("btnReset").addEventListener("click", () => location.reload());
}
// ===============================
// CONFIG: URL de verificación (QR) + Registro oficial (Apps Script)
// ===============================
// Esto apunta a verificar.html en la misma carpeta/sitio:
const URL_VERIFICACION_BASE = `${location.origin}${location.pathname.replace(/\/[^/]*$/, "")}/verificar.html`;

// ✅ Tu Web App URL (Apps Script) — guarda PDF en Drive y registra en Sheets
const REGISTRY_API_URL = "https://script.google.com/macros/s/AKfycbxD9kBjPPCBqs3YgBIcoKnOQsv2zTW4a-x2DC8OCepLYFhiFhTPME2D-8iYUaWU4LRh/exec";

// ✅ Tu API KEY real (la misma que está en Code.gs)
const REGISTRY_API_KEY = "VI_2026_REGISTRO_f8Q2mZ7pK1xV4nH9rT3cL6aP0sY5dG";

// ===============================  
// PDF MEDIEVAL DEFINITIVO + QR VERIFICADOR
// ===============================
async function generarPDFMedievalConQR() {
  // Librerías (no rompas el flujo si no cargaron)
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("No se cargó jsPDF (revisa internet o CDN). El cuestionario está bien.");
    return;
  }
  if (typeof QRCode === "undefined") {
    alert("No se cargó QRCode (revisa internet o CDN). El cuestionario está bien.");
    return;
  }

  // Helpers locales (para que no tengas que “buscar dónde van”)
  function generarTokenSeguro() {
    try {
      const arr = new Uint8Array(16);
      crypto.getRandomValues(arr);
      return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
    } catch {
      return (Date.now().toString(16) + Math.random().toString(16).slice(2)).padEnd(32, "0").slice(0, 32);
    }
  }

  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result).split(",")[1]);
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
  }

  async function safeJsonFromResponse(res) {
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Respuesta del servidor no es JSON.");
    }
  }

  async function registrarCertificadoOficial({ certId, nombre, fechaISO, tipo, token, pdfBlob }) {
    if (typeof REGISTRY_API_URL === "undefined" || !REGISTRY_API_URL) {
      throw new Error("Falta REGISTRY_API_URL.");
    }
    if (typeof REGISTRY_API_KEY === "undefined" || !REGISTRY_API_KEY) {
      throw new Error("Falta REGISTRY_API_KEY.");
    }

    const pdfBase64 = await blobToBase64(pdfBlob);

    const payload = {
      apiKey: REGISTRY_API_KEY,
      certId,
      nombre,
      fechaISO,
      tipo,
      token,
      pdfBase64
    };

    // Importante: text/plain evita CORS preflight
    const res = await fetch(REGISTRY_API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });

    const data = await safeJsonFromResponse(res);
    if (!data || !data.ok) throw new Error((data && data.error) ? data.error : "Error registrando/subiendo PDF");
    return data; // { ok:true, certId, pdfUrl }
  }

  function descargarBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();

  // ID certificado
  const certId =
    "VI-" +
    Date.now().toString(36).toUpperCase() +
    "-" +
    Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  // ✅ Token (NUEVO): evita falsificación
  const token = generarTokenSeguro();

  // URL QR (✅ ahora incluye cert + token)
  if (typeof URL_VERIFICACION_BASE === "undefined" || !URL_VERIFICACION_BASE) {
    alert("Falta URL_VERIFICACION_BASE (debe apuntar a verificar.html).");
    return;
  }
  const urlVerificacion = `${URL_VERIFICACION_BASE}?cert=${encodeURIComponent(certId)}&t=${encodeURIComponent(token)}`;

  // Guardado demo para verificación local
  registrarCertificadoLocal(certId, nombrePacienteGlobal);

  // Genera QR base64
  const qrDataURL = await generarQRBase64(urlVerificacion, 240);

  // ===== 1) Fondo pergamino (procedural) =====
  doc.setFillColor(246, 236, 216);
  doc.rect(0, 0, W, H, "F");

  // manchas suaves
  aplicarOpacidad(doc, 0.06, () => {
    doc.setFillColor(120, 85, 35);
    for (let i = 0; i < 240; i++) {
      doc.circle(Math.random() * W, Math.random() * H, 0.6 + Math.random() * 2.8, "F");
    }
  });

  // veladuras grandes
  aplicarOpacidad(doc, 0.045, () => {
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

  aplicarOpacidad(doc, 0.35, () => {
    doc.setDrawColor(120, 85, 35);
    doc.setLineWidth(0.45);
    adornarEsquina(doc, 18, 18, 1);
    adornarEsquina(doc, W - 18, 18, 2);
    adornarEsquina(doc, 18, H - 18, 3);
    adornarEsquina(doc, W - 18, H - 18, 4);
  });

  // ===== 3) Marca de agua (Ojo de Horus vector) =====
  aplicarOpacidad(doc, 0.13, () => {
    dibujarOjoHorusVector(doc, W / 2, 156, 92);
  });

  // ===== 4) Texto ceremonial =====
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
  doc.text(nombrePacienteGlobal, W / 2, 94, { align: "center" });

  doc.setFont("times", "normal");
  doc.setFontSize(12.5);

  const texto =
    "Por haber cruzado el Umbral con sinceridad, responder con valentía, y completar el recorrido de introspección. Que este documento sea testimonio de presencia, consciencia y voluntad de transformación.";
  textoEnBloqueCentrado(doc, texto, W / 2, 122, 156, 6.3);

  doc.setFontSize(10.5);
  doc.setTextColor(65, 45, 25);
  doc.text(`No. Certificado: ${certId}`, 24, 220);
  doc.text(`Fecha: ${new Date().toLocaleDateString("es-MX")}`, 24, 228);

  // ===== 5) Firma / sello =====
  doc.setDrawColor(60, 40, 20);
  doc.setLineWidth(0.35);

  doc.line(24, 252, 94, 252);
  doc.setFont("times", "italic");
  doc.setFontSize(10);
  doc.text("Firma del Emisor", 59, 258, { align: "center" });

  doc.line(W - 94, 252, W - 24, 252);
  doc.text("Sello", W - 59, 258, { align: "center" });

  // ===== 6) QR auto-arriba-del-sello (bajado 5 cm y centrado) =====
  if (qrDataURL) {
    const size = 40;
    const selloLineY = 252;
    const gap = 58;

    const x = (W / 2) - (size / 2);
    let y = selloLineY - gap - size;

    const marcoMinY = 20;
    if (y < marcoMinY) y = marcoMinY;

    doc.setDrawColor(120, 85, 35);
    doc.setLineWidth(0.55);
    doc.setFillColor(255, 248, 232);
    doc.roundedRect(x, y, size, size, 2.2, 2.2, "FD");

    aplicarOpacidad(doc, 0.10, () => {
      doc.setFillColor(120, 85, 35);
      for (let i = 0; i < 55; i++) {
        doc.circle(
          x + 1 + Math.random() * (size - 2),
          y + 1 + Math.random() * (size - 2),
          0.25 + Math.random() * 0.45,
          "F"
        );
      }
    });

    doc.addImage(qrDataURL, "PNG", x + 3, y + 3, size - 6, size - 6);

    doc.setFont("times", "normal");
    doc.setFontSize(8);
    doc.setTextColor(70, 50, 25);
    doc.text("Verificación", W / 2, y + size + 6, { align: "center" });
  }

  // ===== Guardar =====
  // Antes:
  // doc.save(`Certificado_Viaje_Interior_${nombrePacienteGlobal}.pdf`);

  // Ahora: registramos/subimos y luego descargamos (sin romper el PDF)
  const pdfBlob = doc.output("blob");
  const fechaISO = new Date().toISOString();
  const tipo = "Premium";

  try {
    const r = await registrarCertificadoOficial({
      certId,
      nombre: nombrePacienteGlobal,
      fechaISO,
      tipo,
      token,
      pdfBlob
    });

    console.log("✅ Registrado y PDF oficial:", r.pdfUrl);
    descargarBlob(pdfBlob, `Certificado_Viaje_Interior_${nombrePacienteGlobal}.pdf`);
  } catch (e) {
    console.warn("⛔ No se pudo registrar/subir:", e);

    alert(
      "Se generó el PDF, pero NO se pudo registrar en la página oficial.\n\n" +
      "Revisa:\n" +
      "- API_KEY en Code.gs (debe ser igual)\n" +
      "- Apps Script publicado como Aplicación web\n\n" +
      "Se descargará el certificado local."
    );

    descargarBlob(pdfBlob, `Certificado_Viaje_Interior_${nombrePacienteGlobal}.pdf`);
  }
}

// ===============================
// MÚSICA AMBIENTE – COMPATIBLE (PC + FUTURO MÓVIL)
// ===============================
let musicaAmbiente = null;

function crearAudioAmbiente() {
  if (musicaAmbiente) return musicaAmbiente;

  const a = document.createElement("audio");
  a.loop = true;
  a.preload = "auto";
  a.volume = 0.32;

  // Fallback: primero OGG (PC), si no, MP3 (iPhone/Safari)
  const canOgg = a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"') !== "";
  const canMp3 = a.canPlayType && a.canPlayType("audio/mpeg") !== "";

  a.src = canOgg ? "gregoriano.ogg" : (canMp3 ? "gregoriano.mp3" : "gregoriano.ogg");

  document.body.appendChild(a);
  musicaAmbiente = a;
  return musicaAmbiente;
}

async function iniciarMusicaAmbiente() {
  const a = crearAudioAmbiente();
  try {
    await a.play();
    console.log("✅ Música ON:", a.src);
  } catch (e) {
    console.warn("⛔ El navegador bloqueó autoplay. Intenta con otro click.", e);
  }
}
