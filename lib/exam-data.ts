import type { SignId } from "@/components/traffic-sign-icon";

export interface TextQuizItem {
  type: "text";
  question: string;
  options: string[];
  correctIndex: number;
}

export interface SignQuizItem {
  type: "sign";
  sign: SignId;
  question: string;
  options: string[];
  correctIndex: number;
  category: "preventiva" | "restrictiva" | "informativa";
}

export type QuizItem = TextQuizItem | SignQuizItem;

const TEXT_QUESTIONS: TextQuizItem[] = [
  {
    type: "text",
    question:
      "¿Qué ocurre cuando el conductor no respeta el derecho de paso o preferencia?",
    options: [
      "Colisión en intersección o crucero vehicular",
      "Accidente por alcance trasero",
      "Pérdida de control del vehículo en curva",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Cuál es la velocidad máxima permitida en carreteras?",
    options: ["110 km/h", "80 km/h", "50 km/h"],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Cuál de las siguientes acciones está PROHIBIDA al conducir?",
    options: [
      "Manipular o sostener un teléfono móvil durante la conducción",
      "Circular con cinturón de seguridad ajustado",
      "Respetar las indicaciones viales y señalamientos",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Cuál es una conducta peligrosa al conducir?",
    options: [
      "Conducir bajo efectos de alcohol o sustancias que alteran la capacidad de reacción",
      "Uso correcto de direccionales en cambios de carril",
      "Mantener distancia adecuada entre vehículos en circulación",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question:
      "¿Qué deben hacer los conductores en zonas donde hay personas con discapacidad o peatones vulnerables?",
    options: [
      "Reducir la velocidad y ceder el paso",
      "Acelerar para evitar tráfico",
      "Usar el claxon constantemente",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question:
      "¿Qué tipo de infracciones suelen considerarse graves y pueden no tener descuentos o beneficios de pago?",
    options: [
      "Infracciones relacionadas con conducción bajo efectos de alcohol o sustancias que alteran la capacidad de manejo",
      "Infracciones por omitir el uso de señales luminosas en maniobras de cambio de carril o vuelta",
      "Infracciones por falta de uso de dispositivos de sujeción en el vehículo (cinturón de seguridad)",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Qué factor hace peligrosa la conducción?",
    options: ["El clima", "Los espejos", "El claxon"],
    correctIndex: 0,
  },
  {
    type: "text",
    question:
      "Facilitan detectar vehículos que se aproximan por detrás o laterales:",
    options: ["Limpiaparabrisas", "Luces direccionales", "Espejos retrovisores"],
    correctIndex: 2,
  },
  {
    type: "text",
    question:
      "¿Cuál es el nivel de alcohol en el cuerpo considerado como aliento alcohólico?",
    options: ["0.79 grados", "0.80 grados", "1.5 o más grados"],
    correctIndex: 1,
  },
  {
    type: "text",
    question:
      "El uso del cinturón de seguridad es obligatorio para todos los ocupantes del vehículo.",
    options: ["Cierto", "Falso"],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "Al derrapar el vehículo debes:",
    options: ["Evitar frenar bruscamente", "Aflojar el acelerador", "Ambas"],
    correctIndex: 2,
  },
  {
    type: "text",
    question:
      "Señal cuando el oficial de tránsito está de frente o de espalda a la circulación:",
    options: ["Alto", "Preventiva", "Siga"],
    correctIndex: 0,
  },
  {
    type: "text",
    question:
      "¿Qué significa la señal del oficial de tránsito cuando extiende un brazo en posición horizontal?",
    options: [
      "Indica que los vehículos deben detenerse",
      "Indica que el tránsito puede continuar con precaución",
      "Indica estacionamiento permitido",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Cuál es una causa de aseguramiento o decomiso del vehículo?",
    options: [
      "Circular con placas que no coinciden con la tarjeta de circulación",
      "Respetar límites de velocidad",
      "Usar cinturón de seguridad",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Qué es una infracción?",
    options: [
      "Es el incumplimiento de las normas de tránsito establecidas",
      "Es una recomendación de manejo",
      "Es una señal preventiva",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "Menciona un tipo de factor que interviene en los accidentes de tránsito:",
    options: ["Factor humano", "Factor recreativo", "Factor tecnológico"],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "Menciona dos tipos de accidentes viales:",
    options: [
      "Colisión por alcance y choque en intersección",
      "Accidentes sin impacto",
      "Solo volcaduras",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Qué debes hacer en caso de un alcance (choque)?",
    options: [
      "Detener el vehículo, encender intermitentes y llamar al seguro/autoridades",
      "Huir del lugar",
      "Acelerar para evitar problemas",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "Describe el accidente por alcance:",
    options: [
      "Es cuando un vehículo impacta la parte trasera de otro por falta de distancia o distracción",
      "Es un choque frontal entre dos vehículos",
      "Es cuando un vehículo se estaciona mal",
    ],
    correctIndex: 0,
  },
  {
    type: "text",
    question: "¿Cuál es la principal causa de accidentes de tránsito?",
    options: [
      "Distracción del conductor (uso del celular, cansancio, etc.)",
      "Mal estado del vehículo",
      "Señalización inadecuada",
    ],
    correctIndex: 0,
  },
];

const SIGN_QUESTIONS: SignQuizItem[] = [
  {
    type: "sign",
    sign: "alto",
    question: "¿Qué señal es esta?",
    options: ["Alto", "Ceda el paso", "Siga con precaución"],
    correctIndex: 0,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "ceda-paso",
    question: "¿Qué señal es esta?",
    options: ["Alto", "Ceda el paso", "Glorieta"],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "no-vuelta-derecha",
    question: "¿Qué señal es esta?",
    options: [
      "Prohibido vuelta a la izquierda",
      "Prohibido vuelta en U",
      "Prohibido vuelta a la derecha",
    ],
    correctIndex: 2,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "no-bicicletas",
    question: "¿Qué señal es esta?",
    options: [
      "Prohibido circular en bicicleta",
      "Ciclista adelante",
      "Carril para bicicletas",
    ],
    correctIndex: 0,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "no-vehiculos",
    question: "¿Qué señal es esta?",
    options: [
      "Prohibido rebasar",
      "Prohibido circular vehículos motorizados",
      "Zona de carga y descarga",
    ],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "estacionamiento-permitido",
    question: "¿Qué señal es esta?",
    options: ["Estacionamiento permitido", "Prohibido estacionarse", "Gasolinera"],
    correctIndex: 0,
    category: "informativa",
  },
  {
    type: "sign",
    sign: "no-estacionarse",
    question: "¿Qué señal es esta?",
    options: ["Estacionamiento permitido", "Prohibido estacionarse", "Zona escolar"],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "no-vuelta-u",
    question: "¿Qué señal es esta?",
    options: [
      "Prohibido vuelta en U",
      "Prohibido vuelta a la derecha",
      "Prohibido vuelta a la izquierda",
    ],
    correctIndex: 0,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "no-vuelta-izquierda",
    question: "¿Qué señal es esta?",
    options: [
      "Prohibido vuelta a la derecha",
      "Prohibido vuelta en U",
      "Prohibido vuelta a la izquierda",
    ],
    correctIndex: 2,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "no-peatones",
    question: "¿Qué señal es esta?",
    options: ["Cruce de peatones", "Prohibido el paso a peatones", "Zona escolar"],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "limite-altura",
    question: "¿Qué señal es esta?",
    options: [
      "Límite de velocidad",
      "Límite de peso",
      "Límite de altura",
    ],
    correctIndex: 2,
    category: "restrictiva",
  },
  {
    type: "sign",
    sign: "cruz-roja",
    question: "¿Qué señal es esta?",
    options: ["Hospital o servicio médico", "Gasolinera", "Sanitarios"],
    correctIndex: 0,
    category: "informativa",
  },
  {
    type: "sign",
    sign: "discapacidad",
    question: "¿Qué señal es esta?",
    options: ["Sanitarios", "Acceso para personas con discapacidad", "Hospital"],
    correctIndex: 1,
    category: "informativa",
  },
  {
    type: "sign",
    sign: "sanitarios",
    question: "¿Qué señal es esta?",
    options: ["Sanitarios", "Gasolinera", "Hospital o servicio médico"],
    correctIndex: 0,
    category: "informativa",
  },
  {
    type: "sign",
    sign: "gasolinera",
    question: "¿Qué señal es esta?",
    options: ["Hospital o servicio médico", "Sanitarios", "Gasolinera"],
    correctIndex: 2,
    category: "informativa",
  },
  {
    type: "sign",
    sign: "doble-circulacion",
    question: "¿Qué señal es esta?",
    options: ["Circulación en dos sentidos", "Camino sinuoso", "Glorieta"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "camino-sinuoso",
    question: "¿Qué señal es esta?",
    options: ["El camino se angosta", "Camino sinuoso", "Curva a la derecha"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "cruce-peatones",
    question: "¿Qué señal es esta?",
    options: ["Zona escolar", "Cruce de peatones", "Prohibido el paso a peatones"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "zona-escolar",
    question: "¿Qué señal es esta?",
    options: ["Cruce de peatones", "Glorieta", "Zona escolar"],
    correctIndex: 2,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "camino-se-angosta",
    question: "¿Qué señal es esta?",
    options: ["El camino se angosta", "Camino sinuoso", "Entronque o camino lateral"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "semaforo-adelante",
    question: "¿Qué señal es esta?",
    options: ["Glorieta", "Semáforo adelante", "Cruce de ferrocarril"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "glorieta",
    question: "¿Qué señal es esta?",
    options: ["Glorieta", "Semáforo adelante", "Circulación en dos sentidos"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "entronque-lateral",
    question: "¿Qué señal es esta?",
    options: ["Curva a la derecha", "Entronque o camino lateral", "El camino se angosta"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "cruce-ferrocarril",
    question: "¿Qué señal es esta?",
    options: ["Cruce de ferrocarril", "Semáforo adelante", "Glorieta"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    type: "sign",
    sign: "curva-derecha",
    question: "¿Qué señal es esta?",
    options: ["Entronque o camino lateral", "Camino sinuoso", "Curva a la derecha"],
    correctIndex: 2,
    category: "preventiva",
  },
];

export const QUIZ_ITEMS: QuizItem[] = [...TEXT_QUESTIONS, ...SIGN_QUESTIONS];

export const TEXT_SECTION_LENGTH = TEXT_QUESTIONS.length;

// 80% pass threshold, matching the school's real grading standard.
export const EXAM_PASSING_SCORE = Math.round(QUIZ_ITEMS.length * 0.8);
