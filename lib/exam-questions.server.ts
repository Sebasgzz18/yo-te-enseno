import "server-only";
import type { SignId } from "@/components/traffic-sign-icon";

/**
 * Authoritative bank for the OFFICIAL graded exam. Content mirrors the
 * public practice simulator (lib/exam-data.ts) at the client's explicit
 * request ("igualito, todas las preguntas"), but correctIndex here must
 * never reach the browser — only toPublicQuestion() output does.
 */

export interface ServerTextQuestion {
  id: string;
  type: "text";
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ServerSignQuestion {
  id: string;
  type: "sign";
  sign: SignId;
  question: string;
  options: string[];
  correctIndex: number;
  category: "preventiva" | "restrictiva" | "informativa";
}

export type ServerQuizItem = ServerTextQuestion | ServerSignQuestion;

export type PublicQuizItem =
  | Omit<ServerTextQuestion, "correctIndex">
  | Omit<ServerSignQuestion, "correctIndex">;

const TEXT_QUESTIONS: ServerTextQuestion[] = [
  {
    id: "text-01",
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
    id: "text-02",
    type: "text",
    question: "¿Cuál es la velocidad máxima permitida en carreteras?",
    options: ["110 km/h", "80 km/h", "50 km/h"],
    correctIndex: 0,
  },
  {
    id: "text-03",
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
    id: "text-04",
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
    id: "text-05",
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
    id: "text-06",
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
    id: "text-07",
    type: "text",
    question: "¿Qué factor hace peligrosa la conducción?",
    options: ["El clima", "Los espejos", "El claxon"],
    correctIndex: 0,
  },
  {
    id: "text-08",
    type: "text",
    question:
      "Facilitan detectar vehículos que se aproximan por detrás o laterales:",
    options: ["Limpiaparabrisas", "Luces direccionales", "Espejos retrovisores"],
    correctIndex: 2,
  },
  {
    id: "text-09",
    type: "text",
    question:
      "¿Cuál es el nivel de alcohol en el cuerpo considerado como aliento alcohólico?",
    options: ["0.79 grados", "0.80 grados", "1.5 o más grados"],
    correctIndex: 1,
  },
  {
    id: "text-10",
    type: "text",
    question:
      "El uso del cinturón de seguridad es obligatorio para todos los ocupantes del vehículo.",
    options: ["Cierto", "Falso"],
    correctIndex: 0,
  },
  {
    id: "text-11",
    type: "text",
    question: "Al derrapar el vehículo debes:",
    options: ["Evitar frenar bruscamente", "Aflojar el acelerador", "Ambas"],
    correctIndex: 2,
  },
  {
    id: "text-12",
    type: "text",
    question:
      "Señal cuando el oficial de tránsito está de frente o de espalda a la circulación:",
    options: ["Alto", "Preventiva", "Siga"],
    correctIndex: 0,
  },
  {
    id: "text-13",
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
    id: "text-14",
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
    id: "text-15",
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
    id: "text-16",
    type: "text",
    question: "Menciona un tipo de factor que interviene en los accidentes de tránsito:",
    options: ["Factor humano", "Factor recreativo", "Factor tecnológico"],
    correctIndex: 0,
  },
  {
    id: "text-17",
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
    id: "text-18",
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
    id: "text-19",
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
    id: "text-20",
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

const SIGN_QUESTIONS: ServerSignQuestion[] = [
  {
    id: "sign-alto",
    type: "sign",
    sign: "alto",
    question: "¿Qué señal es esta?",
    options: ["Alto", "Ceda el paso", "Siga con precaución"],
    correctIndex: 0,
    category: "restrictiva",
  },
  {
    id: "sign-ceda-paso",
    type: "sign",
    sign: "ceda-paso",
    question: "¿Qué señal es esta?",
    options: ["Alto", "Ceda el paso", "Glorieta"],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    id: "sign-no-vuelta-derecha",
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
    id: "sign-no-bicicletas",
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
    id: "sign-no-vehiculos",
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
    id: "sign-estacionamiento-permitido",
    type: "sign",
    sign: "estacionamiento-permitido",
    question: "¿Qué señal es esta?",
    options: ["Estacionamiento permitido", "Prohibido estacionarse", "Gasolinera"],
    correctIndex: 0,
    category: "informativa",
  },
  {
    id: "sign-no-estacionarse",
    type: "sign",
    sign: "no-estacionarse",
    question: "¿Qué señal es esta?",
    options: ["Estacionamiento permitido", "Prohibido estacionarse", "Zona escolar"],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    id: "sign-no-vuelta-u",
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
    id: "sign-no-vuelta-izquierda",
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
    id: "sign-no-peatones",
    type: "sign",
    sign: "no-peatones",
    question: "¿Qué señal es esta?",
    options: ["Cruce de peatones", "Prohibido el paso a peatones", "Zona escolar"],
    correctIndex: 1,
    category: "restrictiva",
  },
  {
    id: "sign-limite-altura",
    type: "sign",
    sign: "limite-altura",
    question: "¿Qué señal es esta?",
    options: ["Límite de velocidad", "Límite de peso", "Límite de altura"],
    correctIndex: 2,
    category: "restrictiva",
  },
  {
    id: "sign-cruz-roja",
    type: "sign",
    sign: "cruz-roja",
    question: "¿Qué señal es esta?",
    options: ["Hospital o servicio médico", "Gasolinera", "Sanitarios"],
    correctIndex: 0,
    category: "informativa",
  },
  {
    id: "sign-discapacidad",
    type: "sign",
    sign: "discapacidad",
    question: "¿Qué señal es esta?",
    options: ["Sanitarios", "Acceso para personas con discapacidad", "Hospital"],
    correctIndex: 1,
    category: "informativa",
  },
  {
    id: "sign-sanitarios",
    type: "sign",
    sign: "sanitarios",
    question: "¿Qué señal es esta?",
    options: ["Sanitarios", "Gasolinera", "Hospital o servicio médico"],
    correctIndex: 0,
    category: "informativa",
  },
  {
    id: "sign-gasolinera",
    type: "sign",
    sign: "gasolinera",
    question: "¿Qué señal es esta?",
    options: ["Hospital o servicio médico", "Sanitarios", "Gasolinera"],
    correctIndex: 2,
    category: "informativa",
  },
  {
    id: "sign-doble-circulacion",
    type: "sign",
    sign: "doble-circulacion",
    question: "¿Qué señal es esta?",
    options: ["Circulación en dos sentidos", "Camino sinuoso", "Glorieta"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    id: "sign-camino-sinuoso",
    type: "sign",
    sign: "camino-sinuoso",
    question: "¿Qué señal es esta?",
    options: ["El camino se angosta", "Camino sinuoso", "Curva a la derecha"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    id: "sign-cruce-peatones",
    type: "sign",
    sign: "cruce-peatones",
    question: "¿Qué señal es esta?",
    options: ["Zona escolar", "Cruce de peatones", "Prohibido el paso a peatones"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    id: "sign-zona-escolar",
    type: "sign",
    sign: "zona-escolar",
    question: "¿Qué señal es esta?",
    options: ["Cruce de peatones", "Glorieta", "Zona escolar"],
    correctIndex: 2,
    category: "preventiva",
  },
  {
    id: "sign-camino-se-angosta",
    type: "sign",
    sign: "camino-se-angosta",
    question: "¿Qué señal es esta?",
    options: ["El camino se angosta", "Camino sinuoso", "Entronque o camino lateral"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    id: "sign-semaforo-adelante",
    type: "sign",
    sign: "semaforo-adelante",
    question: "¿Qué señal es esta?",
    options: ["Glorieta", "Semáforo adelante", "Cruce de ferrocarril"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    id: "sign-glorieta",
    type: "sign",
    sign: "glorieta",
    question: "¿Qué señal es esta?",
    options: ["Glorieta", "Semáforo adelante", "Circulación en dos sentidos"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    id: "sign-entronque-lateral",
    type: "sign",
    sign: "entronque-lateral",
    question: "¿Qué señal es esta?",
    options: ["Curva a la derecha", "Entronque o camino lateral", "El camino se angosta"],
    correctIndex: 1,
    category: "preventiva",
  },
  {
    id: "sign-cruce-ferrocarril",
    type: "sign",
    sign: "cruce-ferrocarril",
    question: "¿Qué señal es esta?",
    options: ["Cruce de ferrocarril", "Semáforo adelante", "Glorieta"],
    correctIndex: 0,
    category: "preventiva",
  },
  {
    id: "sign-curva-derecha",
    type: "sign",
    sign: "curva-derecha",
    question: "¿Qué señal es esta?",
    options: ["Entronque o camino lateral", "Camino sinuoso", "Curva a la derecha"],
    correctIndex: 2,
    category: "preventiva",
  },
];

export const OFFICIAL_EXAM_QUESTIONS: ServerQuizItem[] = [
  ...TEXT_QUESTIONS,
  ...SIGN_QUESTIONS,
];

export const OFFICIAL_EXAM_PASSING_SCORE = Math.round(
  OFFICIAL_EXAM_QUESTIONS.length * 0.8
);

const QUESTIONS_BY_ID = new Map(
  OFFICIAL_EXAM_QUESTIONS.map((item) => [item.id, item])
);

export function getQuestionById(id: string): ServerQuizItem | undefined {
  return QUESTIONS_BY_ID.get(id);
}

/** Fisher-Yates shuffle. */
function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export interface QuestionPlacement {
  questionId: string;
  optionOrder: number[]; // maps displayed position -> original option index
}

/** Builds a per-attempt question order with per-question option shuffling. */
export function buildAttemptQuestionOrder(): QuestionPlacement[] {
  return shuffle(OFFICIAL_EXAM_QUESTIONS).map((item) => ({
    questionId: item.id,
    optionOrder: shuffle(item.options.map((_, i) => i)),
  }));
}

export function toPublicQuestion(
  item: ServerQuizItem,
  optionOrder: number[]
): PublicQuizItem {
  const shuffledOptions = optionOrder.map((originalIndex) => item.options[originalIndex]);
  const { correctIndex: _correctIndex, ...rest } = item;
  return { ...rest, options: shuffledOptions } as PublicQuizItem;
}

/** Given the student's selected DISPLAY index, determines correctness using the stored option order. */
export function isAnswerCorrect(
  item: ServerQuizItem,
  optionOrder: number[],
  selectedDisplayIndex: number
): boolean {
  const originalIndex = optionOrder[selectedDisplayIndex];
  return originalIndex === item.correctIndex;
}
