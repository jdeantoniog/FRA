/* =============================================================
   CONFIGURACIÓN · INICIO PARÍS
   España (Madrid, Montecarmelo) frente a Francia (París),
   con el tiempo de Somo (Ribamontán al Mar, Cantabria).
   Edita solo este archivo para cambiar lugares, fechas o textos.
   - Fechas siempre "AAAA-MM-DD" (o "MM-DD" si se repite cada año).
   - Respeta comas y comillas: un error aquí deja la página en blanco.
   ============================================================= */

window.CONFIG = {
  titulo: "Inicio",
  version: "es-fr",              // identificador de esta web: separa su caché de otras páginas del mismo dominio
  idiomaAprender: "fr",          // frase del día y expresiones útiles en francés (con traducción al español)
  zonaPrincipal: "pais",         // Madrid y París tienen la misma hora

  /* ---------- Francia (bandera de la derecha) ---------- */
  usa: {
    nombre: "Francia",
    nombreCorto: "Francia",
    bandera: "FR",
    ciudadReloj: "París",
    zonaHoraria: "Europe/Paris",
    tiempo: { nombre: "París", lat: 48.8566, lon: 2.3522 },
    // Festivos franceses online (fijos por ley salvo los que dependen de Pascua: se dan por confirmados)
    festivosOnline: { pais: "FR", ambitoNacional: "Nacional", confirmados: true },
    nombresFestivos: {
      "Jour de l'an": "Año Nuevo", "New Year's Day": "Año Nuevo",
      "Lundi de Pâques": "Lunes de Pascua", "Easter Monday": "Lunes de Pascua",
      "Fête du Travail": "Fiesta del Trabajo", "Labour Day": "Fiesta del Trabajo",
      "Victoire 1945": "Victoria de 1945", "Victory in Europe Day": "Victoria de 1945",
      "Ascension": "Ascensión", "Ascension Day": "Ascensión",
      "Lundi de Pentecôte": "Lunes de Pentecostés", "Whit Monday": "Lunes de Pentecostés",
      "Fête nationale": "Fiesta Nacional (14 de julio)", "Bastille Day": "Fiesta Nacional (14 de julio)",
      "Assomption": "Asunción", "Assumption Day": "Asunción",
      "Toussaint": "Todos los Santos", "All Saints' Day": "Todos los Santos",
      "Armistice 1918": "Armisticio de 1918", "Armistice Day": "Armisticio de 1918",
      "Noël": "Navidad", "Christmas Day": "Navidad"
    },
    festivosHabituales: [
      { fecha: "01-01", nombre: "Año Nuevo", ambito: "Nacional" },
      { pascua: 1, nombre: "Lunes de Pascua", ambito: "Nacional" },
      { fecha: "05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
      { fecha: "05-08", nombre: "Victoria de 1945", ambito: "Nacional" },
      { pascua: 39, nombre: "Ascensión", ambito: "Nacional" },
      { pascua: 50, nombre: "Lunes de Pentecostés", ambito: "Nacional" },
      { fecha: "07-14", nombre: "Fiesta Nacional (14 de julio)", ambito: "Nacional" },
      { fecha: "08-15", nombre: "Asunción", ambito: "Nacional" },
      { fecha: "11-01", nombre: "Todos los Santos", ambito: "Nacional" },
      { fecha: "11-11", nombre: "Armisticio de 1918", ambito: "Nacional" },
      { fecha: "12-25", nombre: "Navidad", ambito: "Nacional" }
    ],
    senalados: [
      { fecha: "01-06", nombre: "Galette des rois" },
      { fecha: "02-02", nombre: "La Chandeleur (día de las crêpes)" },
      { fecha: "02-14", nombre: "San Valentín" },
      { fecha: "04-01", nombre: "Poisson d'avril (inocentada francesa)" },
      { regla: { mes: 5, diaSemana: 0, orden: -1 }, nombre: "Día de la Madre en Francia", nota: "se pasa a junio si coincide con Pentecostés" },
      { regla: { mes: 6, diaSemana: 0, orden: 3 }, nombre: "Día del Padre en Francia" },
      { fecha: "06-21", nombre: "Fête de la musique", nota: "conciertos gratis por toda la ciudad" },
      { regla: { mes: 9, diaSemana: 6, orden: 3 }, nombre: "Jornadas Europeas del Patrimonio", nota: "sábado y domingo, monumentos abiertos" },
      { regla: { mes: 11, diaSemana: 4, orden: 3 }, nombre: "Llega el Beaujolais nouveau" },
      { fecha: "12-31", nombre: "Nochevieja" }
    ]
  },

  /* ---------- España (bandera de la izquierda) ---------- */
  pais: {
    nombre: "España",
    bandera: "ES",
    ciudadReloj: "Madrid",
    zonaHoraria: "Europe/Madrid",
    tiempo: { nombre: "Madrid (Montecarmelo)", lat: 40.5050, lon: -3.6920 },
    moneda: { codigo: "EUR", simbolo: "€", nombre: "Euros", tasaRespaldo: 0.87 },
    festivosOnline: { pais: "ES", region: "ES-MD", ambitoNacional: "Nacional", ambitoRegion: "Comunidad de Madrid", confirmados: false },
    fuenteOficial: "BOCM y BOC",
    // Madrid (Comunidad y capital; Montecarmelo es Madrid capital) + Cantabria + Ribamontán al Mar (Somo)
    festivos: {
      "2026": [
        { fecha: "2026-01-01", nombre: "Año Nuevo", ambito: "Nacional" },
        { fecha: "2026-01-06", nombre: "Epifanía del Señor (Reyes)", ambito: "Nacional" },
        { fecha: "2026-04-02", nombre: "Jueves Santo", ambito: "Madrid y Cantabria" },
        { fecha: "2026-04-03", nombre: "Viernes Santo", ambito: "Nacional" },
        { fecha: "2026-05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
        { fecha: "2026-05-02", nombre: "Fiesta de la Comunidad de Madrid", ambito: "Comunidad de Madrid" },
        { fecha: "2026-05-15", nombre: "San Isidro Labrador", ambito: "Madrid capital y Ribamontán al Mar (este último por confirmar)" },
        { fecha: "2026-07-28", nombre: "Día de las Instituciones de Cantabria", ambito: "Cantabria" },
        { fecha: "2026-08-15", nombre: "Asunción de la Virgen", ambito: "Nacional" },
        { fecha: "2026-09-08", nombre: "Nuestra Señora de Latas", ambito: "Ribamontán al Mar", provisional: true },
        { fecha: "2026-09-15", nombre: "La Bien Aparecida", ambito: "Cantabria" },
        { fecha: "2026-10-12", nombre: "Fiesta Nacional de España", ambito: "Nacional" },
        { fecha: "2026-11-02", nombre: "Todos los Santos (traslado)", ambito: "Comunidad de Madrid" },
        { fecha: "2026-11-09", nombre: "Nuestra Señora de la Almudena", ambito: "Madrid capital" },
        { fecha: "2026-12-07", nombre: "Día de la Constitución (traslado)", ambito: "Madrid y Cantabria" },
        { fecha: "2026-12-08", nombre: "Inmaculada Concepción", ambito: "Nacional" },
        { fecha: "2026-12-25", nombre: "Navidad", ambito: "Nacional" }
      ],
      "2027": [
        { fecha: "2027-01-01", nombre: "Año Nuevo", ambito: "Nacional" },
        { fecha: "2027-01-06", nombre: "Epifanía del Señor (Reyes)", ambito: "Nacional" },
        { fecha: "2027-03-19", nombre: "San José", ambito: "Comunidad de Madrid" },
        { fecha: "2027-03-25", nombre: "Jueves Santo", ambito: "Madrid y Cantabria" },
        { fecha: "2027-03-26", nombre: "Viernes Santo", ambito: "Nacional" },
        { fecha: "2027-05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
        { fecha: "2027-05-15", nombre: "San Isidro Labrador", ambito: "Madrid capital y Ribamontán al Mar", provisional: true },
        { fecha: "2027-07-28", nombre: "Día de las Instituciones de Cantabria", ambito: "Cantabria" },
        { fecha: "2027-08-16", nombre: "Asunción de la Virgen (traslado)", ambito: "Comunidad de Madrid" },
        { fecha: "2027-09-08", nombre: "Nuestra Señora de Latas", ambito: "Ribamontán al Mar", provisional: true },
        { fecha: "2027-09-15", nombre: "La Bien Aparecida (sustituye a la Asunción)", ambito: "Cantabria" },
        { fecha: "2027-10-12", nombre: "Fiesta Nacional de España", ambito: "Nacional" },
        { fecha: "2027-11-01", nombre: "Todos los Santos", ambito: "Nacional" },
        { fecha: "2027-11-09", nombre: "Nuestra Señora de la Almudena", ambito: "Madrid capital", provisional: true },
        { fecha: "2027-12-06", nombre: "Día de la Constitución", ambito: "Nacional" },
        { fecha: "2027-12-08", nombre: "Inmaculada Concepción", ambito: "Nacional" },
        { fecha: "2027-12-25", nombre: "Navidad", ambito: "Nacional" }
      ]
    },
    festivosHabituales: [
      { fecha: "01-01", nombre: "Año Nuevo", ambito: "Nacional" },
      { fecha: "01-06", nombre: "Epifanía del Señor (Reyes)", ambito: "Nacional" },
      { pascua: -3, nombre: "Jueves Santo", ambito: "Madrid y Cantabria" },
      { pascua: -2, nombre: "Viernes Santo", ambito: "Nacional" },
      { fecha: "05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
      { fecha: "05-02", nombre: "Fiesta de la Comunidad de Madrid", ambito: "Comunidad de Madrid" },
      { fecha: "05-15", nombre: "San Isidro Labrador", ambito: "Madrid capital y Ribamontán al Mar", soloConfig: true },
      { fecha: "07-28", nombre: "Día de las Instituciones de Cantabria", ambito: "Cantabria", soloConfig: true },
      { fecha: "08-15", nombre: "Asunción de la Virgen", ambito: "Nacional" },
      { fecha: "09-08", nombre: "Nuestra Señora de Latas", ambito: "Ribamontán al Mar", soloConfig: true },
      { fecha: "09-15", nombre: "La Bien Aparecida", ambito: "Cantabria", soloConfig: true },
      { fecha: "10-12", nombre: "Fiesta Nacional de España", ambito: "Nacional" },
      { fecha: "11-01", nombre: "Todos los Santos", ambito: "Nacional" },
      { fecha: "11-09", nombre: "Nuestra Señora de la Almudena", ambito: "Madrid capital", soloConfig: true },
      { fecha: "12-06", nombre: "Día de la Constitución", ambito: "Nacional" },
      { fecha: "12-08", nombre: "Inmaculada Concepción", ambito: "Nacional" },
      { fecha: "12-25", nombre: "Navidad", ambito: "Nacional" }
    ],
    senalados: [
      { fecha: "01-05", nombre: "Cabalgata de Reyes" },
      { fecha: "01-06", nombre: "Sorteo de la Lotería del Niño" },
      { fecha: "01-07", nombre: "Empiezan las rebajas de invierno" },
      { fecha: "02-14", nombre: "San Valentín" },
      { pascua: -47, nombre: "Martes de Carnaval" },
      { pascua: -46, nombre: "Miércoles de Ceniza" },
      { fecha: "03-08", nombre: "Día Internacional de la Mujer" },
      { fecha: "03-19", nombre: "Día del Padre en España" },
      { pascua: -7, nombre: "Domingo de Ramos" },
      { pascua: 0, nombre: "Domingo de Resurrección" },
      { fecha: "04-23", nombre: "Día del Libro" },
      { regla: { mes: 5, diaSemana: 0, orden: 1 }, nombre: "Día de la Madre en España" },
      { pascua: 60, nombre: "Corpus Christi" },
      { fecha: "06-23", nombre: "Noche de San Juan" },
      { fecha: "07-01", nombre: "Empiezan las rebajas de verano" },
      { fecha: "08-07", nombre: "Verbena de San Cayetano" },
      { fecha: "08-10", nombre: "Verbena de San Lorenzo" },
      { fecha: "08-15", nombre: "Fiestas de la Virgen de la Paloma" },
      { fecha: "10-31", nombre: "Halloween" },
      { regla: { mes: 11, diaSemana: 4, orden: 4, desplazamiento: 1 }, nombre: "Black Friday" },
      { fecha: "12-22", nombre: "Sorteo de la Lotería de Navidad" },
      { fecha: "12-24", nombre: "Nochebuena" },
      { fecha: "12-28", nombre: "Día de los Santos Inocentes" },
      { fecha: "12-31", nombre: "Nochevieja" },
      { fecha: "12-31", nombre: "San Silvestre Vallecana" },
      // Cantabria y Somo
      { fecha: "07-25", nombre: "Semana Grande de Santander", nota: "en torno a Santiago; el programa sale en julio" },
      { fecha: "08-06", nombre: "Fiestas de El Salvador en Castanedo (Ribamontán al Mar)", nota: "varios días a principios de agosto" },
      { regla: { mes: 8, diaSemana: 5, orden: -1 }, nombre: "Batalla de Flores de Laredo" },
      { fecha: "09-09", nombre: "Día de Latucas: fiestas de Latas (Somo)" },
      { fecha: "10-05", nombre: "Recordatorio: añadir los festivos del año siguiente (BOCM, BOC y Ribamontán al Mar)" }
    ]
  },

  // Tercer lugar con tiempo y "Sol y aire" (sin bandera ni reloj)
  lugaresExtra: [
    { nombre: "Somo (Ribamontán al Mar)", lat: 43.4545, lon: -3.7370, zonaHoraria: "Europe/Madrid" }
  ],
  ordenTiempo: ["pais", "usa"],
  diasTiempo: 6,

  /* ---------- Mensajes especiales (sustituyen a la frase del día). Cumpleaños en cumples.js ---------- */
  avisoPrevioDias: 3,
  aviso: { activo: true, segundos: 5 },
  mensajesEspeciales: [
    { fecha: "01-01", texto: "¡Feliz Año Nuevo! Bonne année !" },
    { fecha: "01-06", texto: "¡Felices Reyes! Y que te toque la fève en la galette." },
    { fecha: "07-14", texto: "Bonne fête nationale ! Hoy hay fuegos artificiales en la torre Eiffel." },
    { fecha: "12-25", texto: "¡Feliz Navidad! Joyeux Noël !" }
  ],

  ordenSecciones: ["calendario", "proximasFechas", "conversor", "solAire", "expresiones"],
  palabrasPorDia: 20,
  proximasFechasDias: 31,
  mostrarFechas: 12,
  proximasFechasExcluir: [],

  online: { festivos: true, deportes: { activo: false } },

  /* ---------- Calendario ---------- */
  calendario: {
    // Cada entrada lleva su etiqueta: "Cole Madrid" o "Cole París"
    escolar: [
      // Comunidad de Madrid, curso 2026-2027
      { fecha: "2026-12-23", hasta: "2027-01-10", nombre: "Vacaciones de Navidad", etiqueta: "Cole Madrid", nota: "vuelta a clase el lunes 11 de enero" },
      { fecha: "2027-02-12", nombre: "Día no lectivo", etiqueta: "Cole Madrid" },
      { fecha: "2027-02-15", nombre: "Día no lectivo", etiqueta: "Cole Madrid" },
      { fecha: "2027-03-19", hasta: "2027-03-29", nombre: "Vacaciones de Semana Santa", etiqueta: "Cole Madrid", nota: "vuelta a clase el martes 30 de marzo" },
      { fecha: "2027-06-18", nombre: "Último día de clase", etiqueta: "Cole Madrid" },
      // París (zona C), curso 2026-2027 (arrêté del 22/10/2025). Días sin clase; se vuelve el día siguiente al último.
      { fecha: "2026-09-01", nombre: "Vuelta al cole (rentrée)", etiqueta: "Cole París" },
      { fecha: "2026-10-17", hasta: "2026-11-01", nombre: "Vacaciones de Todos los Santos (Toussaint)", etiqueta: "Cole París" },
      { fecha: "2026-12-19", hasta: "2027-01-03", nombre: "Vacaciones de Navidad", etiqueta: "Cole París" },
      { fecha: "2027-02-06", hasta: "2027-02-21", nombre: "Vacaciones de invierno", etiqueta: "Cole París" },
      { fecha: "2027-04-03", hasta: "2027-04-18", nombre: "Vacaciones de primavera", etiqueta: "Cole París" },
      { fecha: "2027-05-07", nombre: "Puente de la Ascensión: sin clase", etiqueta: "Cole París" },
      { fecha: "2027-07-03", nombre: "Empiezan las vacaciones de verano", etiqueta: "Cole París" }
    ],
    // Eventos de París (y de Cantabria cuando tengan fecha). hora: "HH:MM" opcional.
    eventos: [
      { fecha: "2026-10-25", nombre: "NFL en París: New Orleans Saints - Pittsburgh Steelers", categoria: "París", nota: "Stade de France" },
      { fecha: "2026-10-26", hasta: "2026-11-01", nombre: "Rolex Paris Masters (tenis)", categoria: "París", nota: "La Défense Arena" },
      { fecha: "2027-03-07", nombre: "Semimaratón de París", categoria: "París" },
      { fecha: "2027-04-04", nombre: "Maratón de París (50.ª edición)", categoria: "París", nota: "fecha anunciada el 08/09/2026" },
      { fecha: "2027-05-17", hasta: "2027-06-06", nombre: "Roland-Garros", categoria: "París", nota: "cuadro principal desde el 23 de mayo; finales el 5 y 6 de junio" },
      { fecha: "2027-07-25", nombre: "Llegada del Tour de Francia a París", categoria: "París" }
    ]
  }
};
