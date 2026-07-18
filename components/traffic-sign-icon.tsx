"use client";

import * as React from "react";

export type SignId =
  | "alto"
  | "ceda-paso"
  | "no-vuelta-derecha"
  | "no-bicicletas"
  | "no-vehiculos"
  | "estacionamiento-permitido"
  | "no-estacionarse"
  | "no-vuelta-u"
  | "no-vuelta-izquierda"
  | "no-peatones"
  | "limite-altura"
  | "cruz-roja"
  | "discapacidad"
  | "sanitarios"
  | "gasolinera"
  | "doble-circulacion"
  | "camino-sinuoso"
  | "cruce-peatones"
  | "zona-escolar"
  | "camino-se-angosta"
  | "semaforo-adelante"
  | "glorieta"
  | "entronque-lateral"
  | "cruce-ferrocarril"
  | "curva-derecha";

const RED = "#E4292E";
const YELLOW = "#F5C518";
const BLUE = "#1857A4";
const WHITE = "#FFFFFF";
const DARK = "#141414";

function Prohibition({ children }: { children: React.ReactNode }) {
  return (
    <>
      <circle cx="50" cy="50" r="44" fill={WHITE} />
      <circle cx="50" cy="50" r="44" fill="none" stroke={RED} strokeWidth="9" />
      {children}
      <line
        x1="16"
        y1="84"
        x2="84"
        y2="16"
        stroke={RED}
        strokeWidth="9"
        strokeLinecap="round"
      />
    </>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect
        x="14"
        y="14"
        width="72"
        height="72"
        rx="10"
        fill={YELLOW}
        stroke={DARK}
        strokeWidth="4"
        transform="rotate(45 50 50)"
      />
      {children}
    </>
  );
}

function Info({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="8" y="8" width="84" height="84" rx="12" fill={BLUE} />
      {children}
    </>
  );
}

function Person({
  cx,
  cy,
  scale = 1,
  color = DARK,
}: {
  cx: number;
  cy: number;
  scale?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <circle cx="0" cy="-14" r="5" fill={color} />
      <path
        d="M0 -8 L0 8 M-7 0 L7 0 M0 8 L-6 20 M0 8 L6 20"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Car({ x, y, color = DARK }: { x: number; y: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-26 8 Q-26 -2 -16 -4 L-10 -14 Q-7 -18 0 -18 H10 Q17 -18 20 -12 L24 -4 Q30 -2 30 8 Z"
        fill={color}
      />
      <rect x="-11" y="-15" width="22" height="10" rx="2" fill={WHITE} />
      <circle cx="-14" cy="10" r="7" fill={color} />
      <circle cx="-14" cy="10" r="3" fill={WHITE} />
      <circle cx="16" cy="10" r="7" fill={color} />
      <circle cx="16" cy="10" r="3" fill={WHITE} />
    </g>
  );
}

export function TrafficSignIcon({
  sign,
  className,
}: {
  sign: SignId;
  className?: string;
}) {
  const content = (() => {
    switch (sign) {
      case "alto":
        return (
          <>
            <path
              d="M32 6 H68 L94 32 V68 L68 94 H32 L6 68 V32 Z"
              fill={RED}
              stroke={WHITE}
              strokeWidth="3"
            />
            <text
              x="50"
              y="60"
              textAnchor="middle"
              fontSize="22"
              fontWeight="800"
              fill={WHITE}
              fontFamily="Arial, sans-serif"
            >
              ALTO
            </text>
          </>
        );
      case "ceda-paso":
        return (
          <>
            <path d="M50 8 L94 88 H6 Z" fill={WHITE} stroke={RED} strokeWidth="9" />
          </>
        );
      case "no-vuelta-derecha":
        return (
          <Prohibition>
            <path
              d="M32 76 V46 Q32 26 52 26 H60"
              fill="none"
              stroke={DARK}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path d="M58 14 L58 38 L80 26 Z" fill={DARK} />
          </Prohibition>
        );
      case "no-bicicletas":
        return (
          <Prohibition>
            <circle cx="30" cy="66" r="10" fill="none" stroke={DARK} strokeWidth="5" />
            <circle cx="66" cy="66" r="10" fill="none" stroke={DARK} strokeWidth="5" />
            <path
              d="M30 66 L46 40 H60 M46 40 L58 66 M46 40 L38 30 H30 M58 66 H66"
              fill="none"
              stroke={DARK}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </Prohibition>
        );
      case "no-vehiculos":
        return (
          <Prohibition>
            <Car x={50} y={54} />
          </Prohibition>
        );
      case "estacionamiento-permitido":
        return (
          <>
            <rect x="8" y="8" width="84" height="84" rx="12" fill={BLUE} />
            <text
              x="50"
              y="68"
              textAnchor="middle"
              fontSize="52"
              fontWeight="800"
              fill={WHITE}
              fontFamily="Arial, sans-serif"
            >
              E
            </text>
          </>
        );
      case "no-estacionarse":
        return (
          <Prohibition>
            <text
              x="50"
              y="66"
              textAnchor="middle"
              fontSize="48"
              fontWeight="800"
              fill={DARK}
              fontFamily="Arial, sans-serif"
            >
              E
            </text>
          </Prohibition>
        );
      case "no-vuelta-u":
        return (
          <Prohibition>
            <path
              d="M35 70 V42 Q35 24 50 24 Q65 24 65 42 V60"
              fill="none"
              stroke={DARK}
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path d="M65 50 L65 70 L82 60 Z" fill={DARK} />
          </Prohibition>
        );
      case "no-vuelta-izquierda":
        return (
          <Prohibition>
            <path
              d="M70 70 V45 Q70 30 55 30 H40"
              fill="none"
              stroke={DARK}
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path d="M40 20 L40 40 L22 30 Z" fill={DARK} />
          </Prohibition>
        );
      case "no-peatones":
        return (
          <Prohibition>
            <Person cx={50} cy={58} scale={1.5} />
          </Prohibition>
        );
      case "limite-altura":
        return (
          <>
            <circle cx="50" cy="50" r="44" fill={WHITE} />
            <circle cx="50" cy="50" r="44" fill="none" stroke={RED} strokeWidth="9" />
            <path
              d="M28 30 V70 M72 30 V70 M28 30 H72 M28 70 H72"
              stroke={DARK}
              strokeWidth="5"
              fill="none"
            />
            <text
              x="50"
              y="56"
              textAnchor="middle"
              fontSize="20"
              fontWeight="800"
              fill={DARK}
              fontFamily="Arial, sans-serif"
            >
              5.50
            </text>
          </>
        );
      case "cruz-roja":
        return (
          <Info>
            <rect x="42" y="24" width="16" height="52" fill={WHITE} />
            <rect x="24" y="42" width="52" height="16" fill={WHITE} />
          </Info>
        );
      case "discapacidad":
        return (
          <Info>
            <circle cx="46" cy="30" r="7" fill={WHITE} />
            <path
              d="M46 40 V56 M46 56 L34 70 M46 56 H62 M58 44 L70 60"
              stroke={WHITE}
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="52" cy="66" r="16" fill="none" stroke={WHITE} strokeWidth="5" />
          </Info>
        );
      case "sanitarios":
        return (
          <Info>
            <Person cx={35} cy={58} scale={1.3} color={WHITE} />
            <Person cx={65} cy={58} scale={1.3} color={WHITE} />
          </Info>
        );
      case "gasolinera":
        return (
          <Info>
            <rect x="24" y="28" width="32" height="48" rx="5" fill={WHITE} />
            <rect x="30" y="36" width="20" height="14" rx="2" fill={BLUE} />
            <line x1="30" y1="58" x2="50" y2="58" stroke={BLUE} strokeWidth="3" />
            <line x1="30" y1="66" x2="50" y2="66" stroke={BLUE} strokeWidth="3" />
            <path
              d="M56 40 H64 Q70 40 70 46 V62 Q70 66 66 66 H62"
              stroke={WHITE}
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Info>
        );
      case "doble-circulacion":
        return (
          <Warning>
            <path
              d="M50 26 V74 M50 26 L42 36 M50 26 L58 36 M50 74 L42 64 M50 74 L58 64"
              stroke={DARK}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </Warning>
        );
      case "camino-sinuoso":
        return (
          <Warning>
            <path
              d="M30 26 C 62 26, 62 50, 50 50 C 38 50, 38 74, 70 74"
              stroke={DARK}
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </Warning>
        );
      case "cruce-peatones":
        return (
          <Warning>
            <Person cx={50} cy={52} scale={1.15} />
          </Warning>
        );
      case "zona-escolar":
        return (
          <Warning>
            <Person cx={40} cy={54} scale={0.95} />
            <Person cx={60} cy={54} scale={0.95} />
          </Warning>
        );
      case "camino-se-angosta":
        return (
          <Warning>
            <path
              d="M22 26 L38 50 L22 74 M78 26 L62 50 L78 74"
              stroke={DARK}
              strokeWidth="5"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="none"
            />
          </Warning>
        );
      case "semaforo-adelante":
        return (
          <Warning>
            <rect x="42" y="26" width="16" height="40" rx="4" fill={DARK} />
            <circle cx="50" cy="34" r="4" fill={RED} />
            <circle cx="50" cy="46" r="4" fill={YELLOW} stroke={DARK} strokeWidth="0.5" />
            <circle cx="50" cy="58" r="4" fill="#2FA84F" />
            <line x1="50" y1="66" x2="50" y2="74" stroke={DARK} strokeWidth="4" />
          </Warning>
        );
      case "glorieta":
        return (
          <Warning>
            <circle cx="50" cy="50" r="16" fill="none" stroke={DARK} strokeWidth="6" />
            <path
              d="M50 34 L56 40 M66 50 L60 56 M50 66 L44 60 M34 50 L40 44"
              stroke={DARK}
              strokeWidth="6"
              strokeLinecap="round"
            />
          </Warning>
        );
      case "entronque-lateral":
        return (
          <Warning>
            <path
              d="M50 30 V70 M50 50 L72 34"
              stroke={DARK}
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </Warning>
        );
      case "cruce-ferrocarril":
        return (
          <Warning>
            <path
              d="M26 26 L74 74 M74 26 L26 74"
              stroke={DARK}
              strokeWidth="4"
              strokeLinecap="butt"
            />
            <circle cx="50" cy="50" r="4" fill={YELLOW} />
          </Warning>
        );
      case "curva-derecha":
        return (
          <Warning>
            <path
              d="M32 70 Q32 34 68 34 L60 26 M68 34 L60 42"
              stroke={DARK}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </Warning>
        );
      default:
        return null;
    }
  })();

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
