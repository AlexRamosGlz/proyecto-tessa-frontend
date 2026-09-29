export type TextControl = {
  type: "text";
  id: string;
  label?: string;
  unit?: string;
  multiline?: boolean;
};

export type ChecksControl = {
  type: "checks";
  id: string;
  label?: string;
  options: string[];
};

export type ChoiceControl = {
  type: "choice";
  id: string;
  options: string[];
};

export type DimensionsControl = {
  type: "dimensions";
  id: string;
  count: number;
  unit?: string;
};

export type Control = TextControl | ChecksControl | ChoiceControl | DimensionsControl;

export type Question = {
  id: string;
  label: string;
  controls: Control[];
};

export type Group = {
  id: string;
  title: string;
  note?: string;
  kind?: "samples";
  columns?: string[];
  questions: Question[];
};

export type Chapter = {
  id: string;
  title: string;
  note?: string;
  groups: Group[];
};

export const necropsiaIntro =
  "Registrar de lo general a lo particular: identificación → localización/lateralidad → tamaño/peso → forma → superficie/serosa/cápsula → color → consistencia → corte → contenido → lesión y distribución → profundidad → relación con estructuras vecinas → muestras.";

export const necropsiaChapters: Chapter[] = [
  {
    "id": "identificacion",
    "title": "Identificación",
    "groups": [
      {
        "id": "identificacion-2",
        "title": "Identificación",
        "questions": [
          {
            "label": "Especie / raza",
            "controls": [
              {
                "type": "text",
                "id": "especie-raza-0"
              }
            ],
            "id": "especie-raza"
          },
          {
            "label": "Edad / sexo / estado reproductivo",
            "controls": [
              {
                "type": "text",
                "id": "edad-sexo-estado-reproductivo-0"
              }
            ],
            "id": "edad-sexo-estado-reproductivo"
          },
          {
            "label": "Identificación / peso",
            "controls": [
              {
                "type": "text",
                "id": "identificacion-peso-0"
              }
            ],
            "id": "identificacion-peso"
          },
          {
            "label": "Fecha y hora",
            "controls": [
              {
                "type": "text",
                "id": "fecha-y-hora-0"
              }
            ],
            "id": "fecha-y-hora"
          },
          {
            "label": "Historia clínica / motivo",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "historia-clinica-motivo-0"
              }
            ],
            "id": "historia-clinica-motivo"
          },
          {
            "label": "Tiempo post mortem estimado",
            "controls": [
              {
                "type": "text",
                "id": "tiempo-post-mortem-estimado-0"
              }
            ],
            "id": "tiempo-post-mortem-estimado"
          },
          {
            "label": "Responsable",
            "controls": [
              {
                "type": "text",
                "id": "responsable-0"
              }
            ],
            "id": "responsable"
          }
        ]
      }
    ],
    "note": "Registrar de lo general a lo particular: identificación → localización/lateralidad → tamaño/peso → forma → superficie/serosa/cápsula → color → consistencia → corte → contenido → lesión y distribución → profundidad → relación con estructuras vecinas → muestras."
  },
  {
    "id": "i-cavidades-corporales",
    "title": "I. CAVIDADES CORPORALES",
    "groups": [
      {
        "id": "cavidad-toracica",
        "title": "Cavidad torácica",
        "questions": [
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Trasudado",
                  "Trasudado modificado",
                  "Exudado seroso",
                  "Fibrinoso",
                  "Purulento",
                  "Hemorrágico",
                  "Quiloso",
                  "Bilioso",
                  "Urinoso",
                  "Otro"
                ],
                "id": "contenido-0"
              }
            ],
            "id": "contenido"
          },
          {
            "label": "Cantidad",
            "controls": [
              {
                "type": "text",
                "unit": "mL / L",
                "id": "cantidad-0"
              }
            ],
            "id": "cantidad"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "id": "color-0"
              },
              {
                "type": "checks",
                "options": [
                  "Clara",
                  "Turbia",
                  "Opaca"
                ],
                "label": "Transparencia",
                "id": "color-1"
              }
            ],
            "id": "color"
          },
          {
            "label": "Viscosidad",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Acuosa",
                  "Ligeramente viscosa",
                  "Viscosa",
                  "Gelatinosa",
                  "Espesa"
                ],
                "id": "viscosidad-0"
              }
            ],
            "id": "viscosidad"
          },
          {
            "label": "Olor",
            "controls": [
              {
                "type": "text",
                "id": "olor-0"
              }
            ],
            "id": "olor"
          },
          {
            "label": "Serosa / revestimiento",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Brillante",
                  "Opaca",
                  "Hiperémica",
                  "Engrosada",
                  "Edematosa",
                  "Fibrinosa",
                  "Nodular",
                  "Hemorrágica"
                ],
                "id": "serosa-revestimiento-0"
              }
            ],
            "id": "serosa-revestimiento"
          },
          {
            "label": "Adherencias",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausentes",
                  "Focales",
                  "Multifocales",
                  "Firmes",
                  "Difusas"
                ],
                "id": "adherencias-0"
              }
            ],
            "id": "adherencias"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "lesiones-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-3"
              }
            ],
            "id": "lesiones"
          }
        ]
      },
      {
        "id": "cavidad-abdominal",
        "title": "Cavidad abdominal",
        "questions": [
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Trasudado",
                  "Trasudado modificado",
                  "Exudado seroso",
                  "Fibrinoso",
                  "Purulento",
                  "Hemorrágico",
                  "Quiloso",
                  "Bilioso",
                  "Urinoso",
                  "Otro"
                ],
                "id": "contenido-2-0"
              }
            ],
            "id": "contenido-2"
          },
          {
            "label": "Cantidad",
            "controls": [
              {
                "type": "text",
                "unit": "mL / L",
                "id": "cantidad-2-0"
              }
            ],
            "id": "cantidad-2"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "id": "color-2-0"
              },
              {
                "type": "checks",
                "options": [
                  "Clara",
                  "Turbia",
                  "Opaca"
                ],
                "label": "Transparencia",
                "id": "color-2-1"
              }
            ],
            "id": "color-2"
          },
          {
            "label": "Viscosidad",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Acuosa",
                  "Ligeramente viscosa",
                  "Viscosa",
                  "Gelatinosa",
                  "Espesa"
                ],
                "id": "viscosidad-2-0"
              }
            ],
            "id": "viscosidad-2"
          },
          {
            "label": "Olor",
            "controls": [
              {
                "type": "text",
                "id": "olor-2-0"
              }
            ],
            "id": "olor-2"
          },
          {
            "label": "Serosa / revestimiento",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Brillante",
                  "Opaca",
                  "Hiperémica",
                  "Engrosada",
                  "Edematosa",
                  "Fibrinosa",
                  "Nodular",
                  "Hemorrágica"
                ],
                "id": "serosa-revestimiento-2-0"
              }
            ],
            "id": "serosa-revestimiento-2"
          },
          {
            "label": "Adherencias",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausentes",
                  "Focales",
                  "Multifocales",
                  "Firmes",
                  "Difusas"
                ],
                "id": "adherencias-2-0"
              }
            ],
            "id": "adherencias-2"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "lesiones-2-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-2-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-2-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-2-3"
              }
            ],
            "id": "lesiones-2"
          }
        ]
      },
      {
        "id": "cavidad-pelvica",
        "title": "Cavidad pélvica",
        "questions": [
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Trasudado",
                  "Trasudado modificado",
                  "Exudado seroso",
                  "Fibrinoso",
                  "Purulento",
                  "Hemorrágico",
                  "Quiloso",
                  "Bilioso",
                  "Urinoso",
                  "Otro"
                ],
                "id": "contenido-3-0"
              }
            ],
            "id": "contenido-3"
          },
          {
            "label": "Cantidad",
            "controls": [
              {
                "type": "text",
                "unit": "mL / L",
                "id": "cantidad-3-0"
              }
            ],
            "id": "cantidad-3"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "id": "color-3-0"
              },
              {
                "type": "checks",
                "options": [
                  "Clara",
                  "Turbia",
                  "Opaca"
                ],
                "label": "Transparencia",
                "id": "color-3-1"
              }
            ],
            "id": "color-3"
          },
          {
            "label": "Viscosidad",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Acuosa",
                  "Ligeramente viscosa",
                  "Viscosa",
                  "Gelatinosa",
                  "Espesa"
                ],
                "id": "viscosidad-3-0"
              }
            ],
            "id": "viscosidad-3"
          },
          {
            "label": "Olor",
            "controls": [
              {
                "type": "text",
                "id": "olor-3-0"
              }
            ],
            "id": "olor-3"
          },
          {
            "label": "Serosa / revestimiento",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Brillante",
                  "Opaca",
                  "Hiperémica",
                  "Engrosada",
                  "Edematosa",
                  "Fibrinosa",
                  "Nodular",
                  "Hemorrágica"
                ],
                "id": "serosa-revestimiento-3-0"
              }
            ],
            "id": "serosa-revestimiento-3"
          },
          {
            "label": "Adherencias",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausentes",
                  "Focales",
                  "Multifocales",
                  "Firmes",
                  "Difusas"
                ],
                "id": "adherencias-3-0"
              }
            ],
            "id": "adherencias-3"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "lesiones-3-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-3-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-3-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-3-3"
              }
            ],
            "id": "lesiones-3"
          }
        ]
      },
      {
        "id": "cavidad-pericardica",
        "title": "Cavidad pericárdica",
        "questions": [
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Trasudado",
                  "Trasudado modificado",
                  "Exudado seroso",
                  "Fibrinoso",
                  "Purulento",
                  "Hemorrágico",
                  "Quiloso",
                  "Bilioso",
                  "Urinoso",
                  "Otro"
                ],
                "id": "contenido-4-0"
              }
            ],
            "id": "contenido-4"
          },
          {
            "label": "Cantidad",
            "controls": [
              {
                "type": "text",
                "unit": "mL / L",
                "id": "cantidad-4-0"
              }
            ],
            "id": "cantidad-4"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "id": "color-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Clara",
                  "Turbia",
                  "Opaca"
                ],
                "label": "Transparencia",
                "id": "color-4-1"
              }
            ],
            "id": "color-4"
          },
          {
            "label": "Viscosidad",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Acuosa",
                  "Ligeramente viscosa",
                  "Viscosa",
                  "Gelatinosa",
                  "Espesa"
                ],
                "id": "viscosidad-4-0"
              }
            ],
            "id": "viscosidad-4"
          },
          {
            "label": "Olor",
            "controls": [
              {
                "type": "text",
                "id": "olor-4-0"
              }
            ],
            "id": "olor-4"
          },
          {
            "label": "Serosa / revestimiento",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Brillante",
                  "Opaca",
                  "Hiperémica",
                  "Engrosada",
                  "Edematosa",
                  "Fibrinosa",
                  "Nodular",
                  "Hemorrágica"
                ],
                "id": "serosa-revestimiento-4-0"
              }
            ],
            "id": "serosa-revestimiento-4"
          },
          {
            "label": "Adherencias",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausentes",
                  "Focales",
                  "Multifocales",
                  "Firmes",
                  "Difusas"
                ],
                "id": "adherencias-4-0"
              }
            ],
            "id": "adherencias-4"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "lesiones-4-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-4-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-4-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-4-3"
              }
            ],
            "id": "lesiones-4"
          }
        ]
      }
    ]
  },
  {
    "id": "ii-sistema-respiratorio",
    "title": "II. SISTEMA RESPIRATORIO",
    "groups": [
      {
        "id": "cavidad-nasal-cornetes-y-senos",
        "title": "Cavidad nasal, cornetes y senos",
        "questions": [
          {
            "label": "Simetría y permeabilidad",
            "controls": [
              {
                "type": "text",
                "label": "Derecha",
                "id": "simetria-y-permeabilidad-0"
              },
              {
                "type": "text",
                "label": "Izquierda",
                "id": "simetria-y-permeabilidad-1"
              },
              {
                "type": "checks",
                "options": [
                  "Permeable",
                  "Parcial",
                  "Obstruida"
                ],
                "id": "simetria-y-permeabilidad-2"
              }
            ],
            "id": "simetria-y-permeabilidad"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-0"
              },
              {
                "type": "text",
                "label": "Humedad",
                "id": "mucosa-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-2"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Edematosa",
                  "Ulcerada",
                  "Necrosada"
                ],
                "id": "mucosa-3"
              }
            ],
            "id": "mucosa"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-5-0"
              },
              {
                "type": "checks",
                "options": [
                  "Seroso",
                  "Mucoso",
                  "Mucopurulento",
                  "Purulento",
                  "Hemorrágico",
                  "Fibrinoso"
                ],
                "id": "contenido-5-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-5-2"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "contenido-5-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-5-4"
              }
            ],
            "id": "contenido-5"
          },
          {
            "label": "Cornetes",
            "controls": [
              {
                "type": "text",
                "label": "Integridad",
                "id": "cornetes-0"
              },
              {
                "type": "checks",
                "options": [
                  "Turbidez",
                  "Atrofia",
                  "Destrucción",
                  "Engrosamiento",
                  "Necrosis"
                ],
                "id": "cornetes-1"
              }
            ],
            "id": "cornetes"
          },
          {
            "label": "Senos",
            "controls": [
              {
                "type": "text",
                "label": "Contenido",
                "id": "senos-0"
              },
              {
                "type": "text",
                "label": "Mucosa",
                "id": "senos-1"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "senos-2"
              }
            ],
            "id": "senos"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada"
          }
        ]
      },
      {
        "id": "faringe-y-laringe",
        "title": "Faringe y laringe",
        "questions": [
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-2-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-2-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Edematosa",
                  "Ulcerada",
                  "Hemorrágica",
                  "Necrosada"
                ],
                "id": "mucosa-2-2"
              }
            ],
            "id": "mucosa-2"
          },
          {
            "label": "Laringe / glotis",
            "controls": [
              {
                "type": "text",
                "label": "Simetría",
                "id": "laringe-glotis-0"
              },
              {
                "type": "text",
                "label": "Edema",
                "id": "laringe-glotis-1"
              },
              {
                "type": "text",
                "label": "Luz",
                "id": "laringe-glotis-2"
              },
              {
                "type": "checks",
                "options": [
                  "Estenosis",
                  "Obstrucción",
                  "Masa",
                  "Cuerpo extraño"
                ],
                "id": "laringe-glotis-3"
              }
            ],
            "id": "laringe-glotis"
          },
          {
            "label": "Epiglotis y cartílagos",
            "controls": [
              {
                "type": "text",
                "label": "Aspecto",
                "id": "epiglotis-y-cartilagos-0"
              }
            ],
            "id": "epiglotis-y-cartilagos"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-6-0"
              },
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-6-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-6-2"
              }
            ],
            "id": "contenido-6"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-2-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-2"
          }
        ]
      },
      {
        "id": "traquea",
        "title": "Tráquea",
        "questions": [
          {
            "label": "Serosa / adventicia",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-adventicia-0"
              },
              {
                "type": "text",
                "label": "Superficie",
                "id": "serosa-adventicia-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "serosa-adventicia-2"
              },
              {
                "type": "checks",
                "options": [
                  "Hemorragia",
                  "Edema",
                  "Nódulos"
                ],
                "id": "serosa-adventicia-3"
              }
            ],
            "id": "serosa-adventicia"
          },
          {
            "label": "Luz",
            "controls": [
              {
                "type": "text",
                "label": "Diámetro",
                "id": "luz-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Dilatada",
                  "Estenosada",
                  "Obstruida"
                ],
                "id": "luz-1"
              }
            ],
            "id": "luz"
          },
          {
            "label": "Contenido luminal",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-luminal-0"
              },
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Mucoso",
                  "Seroso",
                  "Espumoso",
                  "Mucopurulento",
                  "Purulento",
                  "Hemorrágico",
                  "Fibrinoso",
                  "Parasitario"
                ],
                "label": "Tipo",
                "id": "contenido-luminal-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-luminal-2"
              },
              {
                "type": "text",
                "label": "Viscosidad",
                "id": "contenido-luminal-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-luminal-4"
              }
            ],
            "id": "contenido-luminal"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-3-0"
              },
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Rugosa",
                  "Hiperémica",
                  "Edematosa",
                  "Petequias",
                  "Equimosis",
                  "Erosiones",
                  "Úlceras",
                  "Placas",
                  "Necrosis"
                ],
                "id": "mucosa-3-1"
              }
            ],
            "id": "mucosa-3"
          },
          {
            "label": "Pared",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Engrosada",
                  "Adelgazada",
                  "Friable"
                ],
                "id": "pared-1"
              }
            ],
            "id": "pared"
          },
          {
            "label": "Distribución de lesiones",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Focal",
                  "Multifocal",
                  "Segmentaria",
                  "Difusa"
                ],
                "id": "distribucion-de-lesiones-0"
              }
            ],
            "id": "distribucion-de-lesiones"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-3-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-3"
          }
        ]
      },
      {
        "id": "bronquios",
        "title": "Bronquios",
        "questions": [
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-7-0"
              },
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-7-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-7-2"
              },
              {
                "type": "text",
                "label": "Viscosidad",
                "id": "contenido-7-3"
              }
            ],
            "id": "contenido-7"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Edematosa",
                  "Erosiones",
                  "Úlceras",
                  "Hemorragias",
                  "Necrosis"
                ],
                "id": "mucosa-4-1"
              }
            ],
            "id": "mucosa-4"
          },
          {
            "label": "Pared",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-2-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Engrosada",
                  "Adelgazada"
                ],
                "id": "pared-2-1"
              }
            ],
            "id": "pared-2"
          },
          {
            "label": "Distribución",
            "controls": [
              {
                "type": "text",
                "label": "Bronquio(s) afectado(s)",
                "id": "distribucion-0"
              }
            ],
            "id": "distribucion"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-4-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-4"
          }
        ]
      },
      {
        "id": "pulmones",
        "title": "Pulmones",
        "questions": [
          {
            "label": "Identificación de lóbulos",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "craneal",
                  "medio",
                  "accesorio",
                  "caudal"
                ],
                "label": "Derecho",
                "id": "identificacion-de-lobulos-0"
              },
              {
                "type": "checks",
                "options": [
                  "craneal",
                  "caudal"
                ],
                "label": "Izquierdo",
                "id": "identificacion-de-lobulos-1"
              }
            ],
            "id": "identificacion-de-lobulos"
          },
          {
            "label": "Tamaño y peso",
            "controls": [
              {
                "type": "text",
                "label": "Peso total",
                "unit": "g",
                "id": "tamano-y-peso-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Aumentado",
                  "Disminuido"
                ],
                "id": "tamano-y-peso-1"
              },
              {
                "type": "text",
                "label": "Simetría",
                "id": "tamano-y-peso-2"
              }
            ],
            "id": "tamano-y-peso"
          },
          {
            "label": "Superficie pleural",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Brillante",
                  "Opaca",
                  "Hiperémica",
                  "Fibrinosa",
                  "Adherida",
                  "Nodular",
                  "Hemorrágica"
                ],
                "id": "superficie-pleural-0"
              }
            ],
            "id": "superficie-pleural"
          },
          {
            "label": "Color por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "Craneal der.",
                "id": "color-por-lobulo-0"
              },
              {
                "type": "text",
                "label": "Medio der.",
                "id": "color-por-lobulo-1"
              },
              {
                "type": "text",
                "label": "Accesorio",
                "id": "color-por-lobulo-2"
              },
              {
                "type": "text",
                "label": "Caudal der.",
                "id": "color-por-lobulo-3"
              },
              {
                "type": "text",
                "label": "Craneal izq.",
                "id": "color-por-lobulo-4"
              },
              {
                "type": "text",
                "label": "Caudal izq.",
                "id": "color-por-lobulo-5"
              }
            ],
            "id": "color-por-lobulo"
          },
          {
            "label": "Consistencia por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "Craneal der.",
                "id": "consistencia-por-lobulo-0"
              },
              {
                "type": "text",
                "label": "Medio der.",
                "id": "consistencia-por-lobulo-1"
              },
              {
                "type": "text",
                "label": "Accesorio",
                "id": "consistencia-por-lobulo-2"
              },
              {
                "type": "text",
                "label": "Caudal der.",
                "id": "consistencia-por-lobulo-3"
              },
              {
                "type": "text",
                "label": "Craneal izq.",
                "id": "consistencia-por-lobulo-4"
              },
              {
                "type": "text",
                "label": "Caudal izq.",
                "id": "consistencia-por-lobulo-5"
              }
            ],
            "id": "consistencia-por-lobulo"
          },
          {
            "label": "Colapso",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Adecuado",
                  "Parcial",
                  "Ausente"
                ],
                "id": "colapso-0"
              },
              {
                "type": "text",
                "label": "Lóbulo(s) que no colapsan",
                "id": "colapso-1"
              }
            ],
            "id": "colapso"
          },
          {
            "label": "Crepitación",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Aumentada",
                  "Disminuida",
                  "Ausente"
                ],
                "id": "crepitacion-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "crepitacion-1"
              }
            ],
            "id": "crepitacion"
          },
          {
            "label": "Edema / espuma",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Presente"
                ],
                "id": "edema-espuma-0"
              },
              {
                "type": "text",
                "label": "Cantidad",
                "id": "edema-espuma-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "edema-espuma-2"
              },
              {
                "type": "text",
                "label": "Localización",
                "id": "edema-espuma-3"
              }
            ],
            "id": "edema-espuma"
          },
          {
            "label": "Lesiones por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "Lóbulo",
                "id": "lesiones-por-lobulo-0"
              },
              {
                "type": "text",
                "label": "Tipo",
                "id": "lesiones-por-lobulo-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-por-lobulo-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-por-lobulo-3"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "lesiones-por-lobulo-4"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-por-lobulo-5"
              },
              {
                "type": "text",
                "label": "Porcentaje aproximado afectado",
                "unit": "%",
                "id": "lesiones-por-lobulo-6"
              }
            ],
            "id": "lesiones-por-lobulo"
          },
          {
            "label": "Superficie de corte",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Seca",
                  "Húmeda",
                  "Congestionada",
                  "Consolidada",
                  "Nodular",
                  "Cavitada",
                  "Necrótica"
                ],
                "id": "superficie-de-corte-0"
              }
            ],
            "id": "superficie-de-corte"
          },
          {
            "label": "Prueba de flotación (si aplica)",
            "controls": [
              {
                "type": "text",
                "label": "Lóbulo / fragmento",
                "id": "prueba-de-flotacion-si-aplica-0"
              },
              {
                "type": "checks",
                "options": [
                  "Flota",
                  "No flota"
                ],
                "label": "Resultado",
                "id": "prueba-de-flotacion-si-aplica-1"
              },
              {
                "type": "text",
                "label": "Observaciones",
                "id": "prueba-de-flotacion-si-aplica-2"
              }
            ],
            "id": "prueba-de-flotacion-si-aplica"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-5-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-5"
          }
        ]
      }
    ]
  },
  {
    "id": "iii-sistema-gastrointestinal",
    "title": "III. SISTEMA GASTROINTESTINAL",
    "groups": [
      {
        "id": "cavidad-oral-lengua-y-dientes",
        "title": "Cavidad oral, lengua y dientes",
        "questions": [
          {
            "label": "Mucosa oral",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-oral-0"
              },
              {
                "type": "text",
                "label": "Humedad",
                "id": "mucosa-oral-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Pálida",
                  "Ictérica",
                  "Cianótica",
                  "Ulcerada",
                  "Erosionada",
                  "Hemorrágica"
                ],
                "id": "mucosa-oral-2"
              }
            ],
            "id": "mucosa-oral"
          },
          {
            "label": "Lengua",
            "controls": [
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lengua-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lengua-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "lengua-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "lengua-3"
              }
            ],
            "id": "lengua"
          },
          {
            "label": "Dientes / encías",
            "controls": [
              {
                "type": "text",
                "label": "Fórmula / piezas alteradas",
                "id": "dientes-encias-0"
              },
              {
                "type": "checks",
                "options": [
                  "Sarro",
                  "Gingivitis",
                  "Periodontitis",
                  "Fracturas",
                  "Pérdida dental"
                ],
                "id": "dientes-encias-1"
              }
            ],
            "id": "dientes-encias"
          },
          {
            "label": "Paladar / faringe",
            "controls": [
              {
                "type": "text",
                "label": "Lesiones",
                "id": "paladar-faringe-0"
              }
            ],
            "id": "paladar-faringe"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-6-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-6"
          }
        ]
      },
      {
        "id": "esofago",
        "title": "Esófago",
        "questions": [
          {
            "label": "Serosa / adventicia",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-adventicia-2-0"
              },
              {
                "type": "text",
                "label": "Superficie",
                "id": "serosa-adventicia-2-1"
              },
              {
                "type": "text",
                "label": "Adherencias",
                "id": "serosa-adventicia-2-2"
              }
            ],
            "id": "serosa-adventicia-2"
          },
          {
            "label": "Luz y contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "luz-y-contenido-0"
              },
              {
                "type": "text",
                "label": "Tipo",
                "id": "luz-y-contenido-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "luz-y-contenido-2"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "luz-y-contenido-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "luz-y-contenido-4"
              }
            ],
            "id": "luz-y-contenido"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-5-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-5-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Petequias",
                  "Erosiones",
                  "Úlceras",
                  "Necrosis",
                  "Placas"
                ],
                "id": "mucosa-5-2"
              }
            ],
            "id": "mucosa-5"
          },
          {
            "label": "Pared",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-3-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Engrosada",
                  "Adelgazada",
                  "Dilatada",
                  "Estenosada"
                ],
                "id": "pared-3-1"
              }
            ],
            "id": "pared-3"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Localización y longitud",
                "id": "lesiones-5-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-5-1"
              },
              {
                "type": "text",
                "label": "Profundidad",
                "id": "lesiones-5-2"
              }
            ],
            "id": "lesiones-5"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-7-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-7"
          }
        ]
      },
      {
        "id": "estomago",
        "title": "Estómago",
        "questions": [
          {
            "label": "Serosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-0"
              },
              {
                "type": "text",
                "label": "Brillo",
                "id": "serosa-1"
              },
              {
                "type": "text",
                "label": "Congestión",
                "id": "serosa-2"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "serosa-3"
              },
              {
                "type": "text",
                "label": "Adherencias",
                "id": "serosa-4"
              }
            ],
            "id": "serosa"
          },
          {
            "label": "Distensión",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "No",
                  "Leve",
                  "Moderada",
                  "Marcada"
                ],
                "id": "distension-0"
              },
              {
                "type": "text",
                "label": "Gas",
                "id": "distension-1"
              },
              {
                "type": "text",
                "label": "Líquido",
                "id": "distension-2"
              }
            ],
            "id": "distension"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad/peso",
                "id": "contenido-8-0"
              },
              {
                "type": "checks",
                "options": [
                  "Alimenticio",
                  "Líquido",
                  "Sangre",
                  "Moco",
                  "Bilioso",
                  "Fibrinoso",
                  "Parasitológico",
                  "Cuerpo extraño"
                ],
                "label": "Tipo",
                "id": "contenido-8-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-8-2"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-8-3"
              },
              {
                "type": "text",
                "label": "pH si se mide",
                "id": "contenido-8-4"
              }
            ],
            "id": "contenido-8"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-6-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-6-1"
              },
              {
                "type": "text",
                "label": "Pliegues",
                "id": "mucosa-6-2"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hiperemia",
                  "Hemorragia",
                  "Erosiones",
                  "Úlceras",
                  "Necrosis"
                ],
                "id": "mucosa-6-3"
              }
            ],
            "id": "mucosa-6"
          },
          {
            "label": "Submucosa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "submucosa-0"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hemorragia",
                  "Engrosamiento",
                  "Nódulos",
                  "Fibrosis"
                ],
                "id": "submucosa-1"
              }
            ],
            "id": "submucosa"
          },
          {
            "label": "Muscular",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "muscular-0"
              },
              {
                "type": "checks",
                "options": [
                  "Hipertrofia",
                  "Atrofia",
                  "Hemorragia",
                  "Necrosis",
                  "Fibrosis"
                ],
                "id": "muscular-1"
              }
            ],
            "id": "muscular"
          },
          {
            "label": "Pared completa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-completa-0"
              },
              {
                "type": "checks",
                "options": [
                  "Conservada",
                  "Perforada",
                  "Rota",
                  "Estenosada"
                ],
                "label": "Integridad",
                "id": "pared-completa-1"
              }
            ],
            "id": "pared-completa"
          },
          {
            "label": "Distribución de lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Cardias",
                "id": "distribucion-de-lesiones-2-0"
              },
              {
                "type": "text",
                "label": "Fondo/cuerpo",
                "id": "distribucion-de-lesiones-2-1"
              },
              {
                "type": "text",
                "label": "Antro",
                "id": "distribucion-de-lesiones-2-2"
              },
              {
                "type": "text",
                "label": "Píloro",
                "id": "distribucion-de-lesiones-2-3"
              }
            ],
            "id": "distribucion-de-lesiones-2"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-8-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-8"
          }
        ]
      },
      {
        "id": "duodeno",
        "title": "Duodeno",
        "questions": [
          {
            "label": "Serosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-2-0"
              },
              {
                "type": "text",
                "label": "Brillo",
                "id": "serosa-2-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Fibrinosa",
                  "Adherencias"
                ],
                "id": "serosa-2-2"
              }
            ],
            "id": "serosa-2"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-9-0"
              },
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-9-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-9-2"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "contenido-9-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-9-4"
              }
            ],
            "id": "contenido-9"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-7-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-7-1"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hiperemia",
                  "Hemorragia",
                  "Erosiones",
                  "Úlceras",
                  "Necrosis",
                  "Parásitos"
                ],
                "id": "mucosa-7-2"
              }
            ],
            "id": "mucosa-7"
          },
          {
            "label": "Submucosa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "submucosa-2-0"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hemorragia",
                  "Engrosamiento",
                  "Nódulos"
                ],
                "id": "submucosa-2-1"
              }
            ],
            "id": "submucosa-2"
          },
          {
            "label": "Muscular",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "muscular-2-0"
              },
              {
                "type": "checks",
                "options": [
                  "Engrosada",
                  "Adelgazada",
                  "Hemorrágica",
                  "Necrosada"
                ],
                "id": "muscular-2-1"
              }
            ],
            "id": "muscular-2"
          },
          {
            "label": "Pared / mesenterio",
            "controls": [
              {
                "type": "text",
                "label": "Pared",
                "id": "pared-mesenterio-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Edematoso",
                  "Hemorrágico",
                  "Nodular",
                  "Con adherencias"
                ],
                "label": "Mesenterio",
                "id": "pared-mesenterio-1"
              }
            ],
            "id": "pared-mesenterio"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-9-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-9"
          }
        ]
      },
      {
        "id": "yeyuno-e-ileon",
        "title": "Yeyuno e íleon",
        "questions": [
          {
            "label": "Segmento afectado",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Yeyuno",
                  "Íleon"
                ],
                "id": "segmento-afectado-0"
              },
              {
                "type": "text",
                "label": "Longitud aproximada",
                "unit": "cm",
                "id": "segmento-afectado-1"
              }
            ],
            "id": "segmento-afectado"
          },
          {
            "label": "Serosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-3-0"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Opaca",
                  "Fibrinosa",
                  "Hemorrágica",
                  "Adherencias"
                ],
                "id": "serosa-3-1"
              }
            ],
            "id": "serosa-3"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-10-0"
              },
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-10-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-10-2"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-10-3"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "contenido-10-4"
              },
              {
                "type": "text",
                "label": "Gas",
                "id": "contenido-10-5"
              }
            ],
            "id": "contenido-10"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-8-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-8-1"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hiperemia",
                  "Petequias",
                  "Hemorragia",
                  "Erosiones",
                  "Úlceras",
                  "Necrosis",
                  "Parásitos"
                ],
                "id": "mucosa-8-2"
              }
            ],
            "id": "mucosa-8"
          },
          {
            "label": "Submucosa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "submucosa-3-0"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hemorragia",
                  "Engrosamiento",
                  "Nódulos"
                ],
                "id": "submucosa-3-1"
              }
            ],
            "id": "submucosa-3"
          },
          {
            "label": "Muscular",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "muscular-3-0"
              },
              {
                "type": "checks",
                "options": [
                  "Hipertrofia",
                  "Atrofia",
                  "Hemorragia",
                  "Necrosis"
                ],
                "id": "muscular-3-1"
              }
            ],
            "id": "muscular-3"
          },
          {
            "label": "Pared completa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-completa-2-0"
              },
              {
                "type": "checks",
                "options": [
                  "Conservada",
                  "Perforada",
                  "Rota",
                  "Invaginada"
                ],
                "label": "Integridad",
                "id": "pared-completa-2-1"
              }
            ],
            "id": "pared-completa-2"
          },
          {
            "label": "Mesenterio / linfonodos",
            "controls": [
              {
                "type": "text",
                "label": "Mesenterio",
                "id": "mesenterio-linfonodos-0"
              },
              {
                "type": "text",
                "label": "Linfonodos: Tamaño",
                "id": "mesenterio-linfonodos-1"
              },
              {
                "type": "text",
                "label": "Linfonodos: Color",
                "id": "mesenterio-linfonodos-2"
              },
              {
                "type": "text",
                "label": "Linfonodos: Consistencia",
                "id": "mesenterio-linfonodos-3"
              }
            ],
            "id": "mesenterio-linfonodos"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-10-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-10"
          }
        ]
      },
      {
        "id": "ciego-y-colon",
        "title": "Ciego y colon",
        "questions": [
          {
            "label": "Serosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Fibrinosa",
                  "Hemorrágica",
                  "Adherencias"
                ],
                "id": "serosa-4-1"
              }
            ],
            "id": "serosa-4"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-11-0"
              },
              {
                "type": "checks",
                "options": [
                  "Fecal",
                  "Líquido",
                  "Mucoso",
                  "Hemorrágico",
                  "Parasitológico"
                ],
                "label": "Tipo",
                "id": "contenido-11-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-11-2"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "contenido-11-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-11-4"
              },
              {
                "type": "text",
                "label": "Gas",
                "id": "contenido-11-5"
              }
            ],
            "id": "contenido-11"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-9-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-9-1"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hiperemia",
                  "Hemorragia",
                  "Erosiones",
                  "Úlceras",
                  "Necrosis",
                  "Pseudomembranas"
                ],
                "id": "mucosa-9-2"
              }
            ],
            "id": "mucosa-9"
          },
          {
            "label": "Submucosa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "submucosa-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hemorragia",
                  "Nódulos",
                  "Fibrosis"
                ],
                "id": "submucosa-4-1"
              }
            ],
            "id": "submucosa-4"
          },
          {
            "label": "Muscular",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "muscular-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Engrosada",
                  "Adelgazada",
                  "Hemorrágica",
                  "Necrosada"
                ],
                "id": "muscular-4-1"
              }
            ],
            "id": "muscular-4"
          },
          {
            "label": "Pared / luz",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Dilatada",
                  "Estenosada",
                  "Obstruida",
                  "Torsionada",
                  "Perforada"
                ],
                "id": "pared-luz-0"
              }
            ],
            "id": "pared-luz"
          },
          {
            "label": "Distribución",
            "controls": [
              {
                "type": "text",
                "label": "Ciego",
                "id": "distribucion-2-0"
              },
              {
                "type": "text",
                "label": "Colon ascendente",
                "id": "distribucion-2-1"
              },
              {
                "type": "text",
                "label": "Transverso",
                "id": "distribucion-2-2"
              },
              {
                "type": "text",
                "label": "Descendente",
                "id": "distribucion-2-3"
              }
            ],
            "id": "distribucion-2"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-11-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-11"
          }
        ]
      },
      {
        "id": "recto-y-ano",
        "title": "Recto y ano",
        "questions": [
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-12-0"
              },
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-12-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-12-2"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "contenido-12-3"
              },
              {
                "type": "checks",
                "options": [
                  "No",
                  "Sí"
                ],
                "label": "Sangre",
                "id": "contenido-12-4"
              }
            ],
            "id": "contenido-12"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-10-0"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hiperemia",
                  "Hemorragia",
                  "Erosiones",
                  "Úlceras",
                  "Prolapso"
                ],
                "id": "mucosa-10-1"
              }
            ],
            "id": "mucosa-10"
          },
          {
            "label": "Pared",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Engrosada",
                  "Adelgazada"
                ],
                "id": "pared-4-1"
              }
            ],
            "id": "pared-4"
          },
          {
            "label": "Región perianal",
            "controls": [
              {
                "type": "text",
                "label": "Lesiones",
                "id": "region-perianal-0"
              },
              {
                "type": "text",
                "label": "Sacos anales si aplica",
                "id": "region-perianal-1"
              }
            ],
            "id": "region-perianal"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-12-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-12"
          }
        ]
      }
    ]
  },
  {
    "id": "iv-sistema-hepatobiliar-y-linfoide",
    "title": "IV. SISTEMA HEPATOBILIAR Y LINFOIDE",
    "groups": [
      {
        "id": "higado",
        "title": "Hígado",
        "questions": [
          {
            "label": "Lóbulos anatómicos",
            "controls": [
              {
                "type": "text",
                "label": "Lateral izq.",
                "id": "lobulos-anatomicos-0"
              },
              {
                "type": "text",
                "label": "Medial izq.",
                "id": "lobulos-anatomicos-1"
              },
              {
                "type": "text",
                "label": "Cuadrado",
                "id": "lobulos-anatomicos-2"
              },
              {
                "type": "text",
                "label": "Derecho medial",
                "id": "lobulos-anatomicos-3"
              },
              {
                "type": "text",
                "label": "Derecho lateral",
                "id": "lobulos-anatomicos-4"
              },
              {
                "type": "text",
                "label": "Caudado",
                "id": "lobulos-anatomicos-5"
              }
            ],
            "id": "lobulos-anatomicos"
          },
          {
            "label": "Peso / tamaño",
            "controls": [
              {
                "type": "text",
                "label": "Peso",
                "unit": "g",
                "id": "peso-tamano-0"
              },
              {
                "type": "text",
                "label": "Largo",
                "unit": "cm",
                "id": "peso-tamano-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "peso-tamano-2"
              },
              {
                "type": "checks",
                "options": [
                  "Aumentado",
                  "Normal",
                  "Disminuido"
                ],
                "id": "peso-tamano-3"
              }
            ],
            "id": "peso-tamano"
          },
          {
            "label": "Bordes por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "LI",
                "id": "bordes-por-lobulo-0"
              },
              {
                "type": "text",
                "label": "MI",
                "id": "bordes-por-lobulo-1"
              },
              {
                "type": "text",
                "label": "Cuadrado",
                "id": "bordes-por-lobulo-2"
              },
              {
                "type": "text",
                "label": "DM",
                "id": "bordes-por-lobulo-3"
              },
              {
                "type": "text",
                "label": "DL",
                "id": "bordes-por-lobulo-4"
              },
              {
                "type": "text",
                "label": "Caudado",
                "id": "bordes-por-lobulo-5"
              }
            ],
            "id": "bordes-por-lobulo"
          },
          {
            "label": "Cápsula / superficie",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Brillante",
                  "Opaca",
                  "Engrosada",
                  "Fibrosa",
                  "Nodular",
                  "Retráctil"
                ],
                "id": "capsula-superficie-0"
              },
              {
                "type": "text",
                "label": "Adherencias",
                "id": "capsula-superficie-1"
              }
            ],
            "id": "capsula-superficie"
          },
          {
            "label": "Color por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "LI",
                "id": "color-por-lobulo-2-0"
              },
              {
                "type": "text",
                "label": "MI",
                "id": "color-por-lobulo-2-1"
              },
              {
                "type": "text",
                "label": "Cuadrado",
                "id": "color-por-lobulo-2-2"
              },
              {
                "type": "text",
                "label": "DM",
                "id": "color-por-lobulo-2-3"
              },
              {
                "type": "text",
                "label": "DL",
                "id": "color-por-lobulo-2-4"
              },
              {
                "type": "text",
                "label": "Caudado",
                "id": "color-por-lobulo-2-5"
              }
            ],
            "id": "color-por-lobulo-2"
          },
          {
            "label": "Consistencia por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "LI",
                "id": "consistencia-por-lobulo-2-0"
              },
              {
                "type": "text",
                "label": "MI",
                "id": "consistencia-por-lobulo-2-1"
              },
              {
                "type": "text",
                "label": "Cuadrado",
                "id": "consistencia-por-lobulo-2-2"
              },
              {
                "type": "text",
                "label": "DM",
                "id": "consistencia-por-lobulo-2-3"
              },
              {
                "type": "text",
                "label": "DL",
                "id": "consistencia-por-lobulo-2-4"
              },
              {
                "type": "text",
                "label": "Caudado",
                "id": "consistencia-por-lobulo-2-5"
              }
            ],
            "id": "consistencia-por-lobulo-2"
          },
          {
            "label": "Superficie de corte",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Homogénea",
                  "Lobulillar prominente",
                  "Congestionada",
                  "Friable",
                  "Nodular",
                  "Fibrosa",
                  "Quística",
                  "Necrosada"
                ],
                "id": "superficie-de-corte-2-0"
              }
            ],
            "id": "superficie-de-corte-2"
          },
          {
            "label": "Lesiones por lóbulo",
            "controls": [
              {
                "type": "text",
                "label": "Lóbulo",
                "id": "lesiones-por-lobulo-2-0"
              },
              {
                "type": "text",
                "label": "Lesión",
                "id": "lesiones-por-lobulo-2-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-por-lobulo-2-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-por-lobulo-2-3"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-por-lobulo-2-4"
              },
              {
                "type": "text",
                "label": "Profundidad",
                "id": "lesiones-por-lobulo-2-5"
              }
            ],
            "id": "lesiones-por-lobulo-2"
          },
          {
            "label": "Vasos hepáticos",
            "controls": [
              {
                "type": "text",
                "label": "Vena porta",
                "id": "vasos-hepaticos-0"
              },
              {
                "type": "text",
                "label": "Venas hepáticas",
                "id": "vasos-hepaticos-1"
              },
              {
                "type": "text",
                "label": "Trombos",
                "id": "vasos-hepaticos-2"
              }
            ],
            "id": "vasos-hepaticos"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-13-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-13"
          }
        ]
      },
      {
        "id": "vesicula-biliar-y-conductos",
        "title": "Vesícula biliar y conductos",
        "questions": [
          {
            "label": "Vesícula",
            "controls": [
              {
                "type": "text",
                "label": "Tamaño",
                "id": "vesicula-0"
              },
              {
                "type": "text",
                "label": "Forma",
                "id": "vesicula-1"
              },
              {
                "type": "text",
                "label": "Pared",
                "id": "vesicula-2"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "vesicula-3"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "vesicula-4"
              }
            ],
            "id": "vesicula"
          },
          {
            "label": "Contenido biliar",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-biliar-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-biliar-1"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "contenido-biliar-2"
              },
              {
                "type": "text",
                "label": "Viscosidad",
                "id": "contenido-biliar-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-biliar-4"
              },
              {
                "type": "checks",
                "options": [
                  "Bilis normal",
                  "Lodo",
                  "Espesa",
                  "Hemorrágica",
                  "Purulenta"
                ],
                "id": "contenido-biliar-5"
              }
            ],
            "id": "contenido-biliar"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-11-0"
              },
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Edematosa",
                  "Hiperémica",
                  "Hemorrágica",
                  "Ulcerada",
                  "Necrosada"
                ],
                "id": "mucosa-11-1"
              }
            ],
            "id": "mucosa-11"
          },
          {
            "label": "Cálculos / obstrucción",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Ausentes",
                  "Presentes"
                ],
                "id": "calculos-obstruccion-0"
              },
              {
                "type": "text",
                "label": "Número",
                "id": "calculos-obstruccion-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "calculos-obstruccion-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "calculos-obstruccion-3"
              },
              {
                "type": "text",
                "label": "Localización",
                "id": "calculos-obstruccion-4"
              }
            ],
            "id": "calculos-obstruccion"
          },
          {
            "label": "Conductos",
            "controls": [
              {
                "type": "text",
                "label": "Permeabilidad",
                "id": "conductos-0"
              },
              {
                "type": "text",
                "label": "Diámetro",
                "id": "conductos-1"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "conductos-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "conductos-3"
              }
            ],
            "id": "conductos"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-14-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-14"
          }
        ]
      },
      {
        "id": "bazo",
        "title": "Bazo",
        "questions": [
          {
            "label": "Tamaño por eje",
            "controls": [
              {
                "type": "text",
                "label": "Longitud",
                "id": "tamano-por-eje-0"
              },
              {
                "type": "text",
                "label": "Ancho",
                "id": "tamano-por-eje-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "tamano-por-eje-2"
              },
              {
                "type": "text",
                "label": "Peso",
                "id": "tamano-por-eje-3"
              }
            ],
            "id": "tamano-por-eje"
          },
          {
            "label": "Bordes / cápsula",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Agudos",
                  "Redondeados",
                  "Lisa",
                  "Engrosada",
                  "Arrugada",
                  "Rota"
                ],
                "id": "bordes-capsula-0"
              }
            ],
            "id": "bordes-capsula"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "label": "Pulpa",
                "id": "color-5-0"
              },
              {
                "type": "text",
                "label": "Cápsula",
                "id": "color-5-1"
              }
            ],
            "id": "color-5"
          },
          {
            "label": "Consistencia / corte",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Friable",
                  "Firme",
                  "Nodular"
                ],
                "id": "consistencia-corte-0"
              },
              {
                "type": "text",
                "label": "Pulpa",
                "id": "consistencia-corte-1"
              }
            ],
            "id": "consistencia-corte"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Infartos",
                "id": "lesiones-6-0"
              },
              {
                "type": "text",
                "label": "Hemorragias",
                "id": "lesiones-6-1"
              },
              {
                "type": "text",
                "label": "Nódulos",
                "id": "lesiones-6-2"
              },
              {
                "type": "text",
                "label": "Masas",
                "id": "lesiones-6-3"
              }
            ],
            "id": "lesiones-6"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-15-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-15"
          }
        ]
      }
    ]
  },
  {
    "id": "v-sistema-urinario-y-endocrino",
    "title": "V. SISTEMA URINARIO Y ENDOCRINO",
    "groups": [
      {
        "id": "rinon-derecho",
        "title": "Riñón derecho",
        "questions": [
          {
            "label": "Tamaño / peso",
            "controls": [
              {
                "type": "text",
                "label": "Largo",
                "id": "tamano-peso-0"
              },
              {
                "type": "text",
                "label": "Ancho",
                "id": "tamano-peso-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "tamano-peso-2"
              },
              {
                "type": "text",
                "label": "Peso",
                "id": "tamano-peso-3"
              },
              {
                "type": "checks",
                "options": [
                  "Aumentado",
                  "Normal",
                  "Disminuido"
                ],
                "id": "tamano-peso-4"
              }
            ],
            "id": "tamano-peso"
          },
          {
            "label": "Cápsula",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Fácil",
                  "Difícil",
                  "Adherida"
                ],
                "label": "Facilidad de desprendimiento",
                "id": "capsula-0"
              },
              {
                "type": "text",
                "label": "Superficie",
                "id": "capsula-1"
              }
            ],
            "id": "capsula"
          },
          {
            "label": "Superficie",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "superficie-0"
              },
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Irregular",
                  "Granular",
                  "Quística",
                  "Cicatricial",
                  "Nodular"
                ],
                "id": "superficie-1"
              }
            ],
            "id": "superficie"
          },
          {
            "label": "Corteza",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "corteza-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "corteza-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "corteza-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "corteza-3"
              }
            ],
            "id": "corteza"
          },
          {
            "label": "Médula",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "medula-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "medula-1"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "medula-2"
              }
            ],
            "id": "medula"
          },
          {
            "label": "Unión corticomedular",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Conservada",
                  "Poco evidente",
                  "Ausente"
                ],
                "id": "union-corticomedular-0"
              },
              {
                "type": "text",
                "label": "Descripción",
                "id": "union-corticomedular-1"
              }
            ],
            "id": "union-corticomedular"
          },
          {
            "label": "Pelvis renal",
            "controls": [
              {
                "type": "text",
                "label": "Dilatación",
                "id": "pelvis-renal-0"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "pelvis-renal-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "pelvis-renal-2"
              },
              {
                "type": "text",
                "label": "Cálculos",
                "id": "pelvis-renal-3"
              },
              {
                "type": "text",
                "label": "Mucosa",
                "id": "pelvis-renal-4"
              }
            ],
            "id": "pelvis-renal"
          },
          {
            "label": "Lesiones focales",
            "controls": [
              {
                "type": "text",
                "label": "Número",
                "id": "lesiones-focales-0"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-focales-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-focales-2"
              },
              {
                "type": "text",
                "label": "Forma",
                "id": "lesiones-focales-3"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-focales-4"
              },
              {
                "type": "text",
                "label": "Profundidad",
                "id": "lesiones-focales-5"
              }
            ],
            "id": "lesiones-focales"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-16-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-16"
          }
        ]
      },
      {
        "id": "rinon-izquierdo",
        "title": "Riñón izquierdo",
        "questions": [
          {
            "label": "Tamaño / peso",
            "controls": [
              {
                "type": "text",
                "label": "Largo",
                "id": "tamano-peso-2-0"
              },
              {
                "type": "text",
                "label": "Ancho",
                "id": "tamano-peso-2-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "tamano-peso-2-2"
              },
              {
                "type": "text",
                "label": "Peso",
                "id": "tamano-peso-2-3"
              },
              {
                "type": "checks",
                "options": [
                  "Aumentado",
                  "Normal",
                  "Disminuido"
                ],
                "id": "tamano-peso-2-4"
              }
            ],
            "id": "tamano-peso-2"
          },
          {
            "label": "Cápsula",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Fácil",
                  "Difícil",
                  "Adherida"
                ],
                "label": "Facilidad de desprendimiento",
                "id": "capsula-2-0"
              },
              {
                "type": "text",
                "label": "Superficie",
                "id": "capsula-2-1"
              }
            ],
            "id": "capsula-2"
          },
          {
            "label": "Superficie",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "superficie-2-0"
              },
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Irregular",
                  "Granular",
                  "Quística",
                  "Cicatricial",
                  "Nodular"
                ],
                "id": "superficie-2-1"
              }
            ],
            "id": "superficie-2"
          },
          {
            "label": "Corteza",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "corteza-2-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "corteza-2-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "corteza-2-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "corteza-2-3"
              }
            ],
            "id": "corteza-2"
          },
          {
            "label": "Médula",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "medula-2-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "medula-2-1"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "medula-2-2"
              }
            ],
            "id": "medula-2"
          },
          {
            "label": "Unión corticomedular",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Conservada",
                  "Poco evidente",
                  "Ausente"
                ],
                "id": "union-corticomedular-2-0"
              },
              {
                "type": "text",
                "label": "Descripción",
                "id": "union-corticomedular-2-1"
              }
            ],
            "id": "union-corticomedular-2"
          },
          {
            "label": "Pelvis renal",
            "controls": [
              {
                "type": "text",
                "label": "Dilatación",
                "id": "pelvis-renal-2-0"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "pelvis-renal-2-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "pelvis-renal-2-2"
              },
              {
                "type": "text",
                "label": "Cálculos",
                "id": "pelvis-renal-2-3"
              },
              {
                "type": "text",
                "label": "Mucosa",
                "id": "pelvis-renal-2-4"
              }
            ],
            "id": "pelvis-renal-2"
          },
          {
            "label": "Lesiones focales",
            "controls": [
              {
                "type": "text",
                "label": "Número",
                "id": "lesiones-focales-2-0"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-focales-2-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "lesiones-focales-2-2"
              },
              {
                "type": "text",
                "label": "Forma",
                "id": "lesiones-focales-2-3"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-focales-2-4"
              },
              {
                "type": "text",
                "label": "Profundidad",
                "id": "lesiones-focales-2-5"
              }
            ],
            "id": "lesiones-focales-2"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-17-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-17"
          }
        ]
      },
      {
        "id": "ureteres",
        "title": "Uréteres",
        "questions": [
          {
            "label": "Luz / permeabilidad",
            "controls": [
              {
                "type": "text",
                "label": "Derecho",
                "id": "luz-permeabilidad-0"
              },
              {
                "type": "text",
                "label": "Izquierdo",
                "id": "luz-permeabilidad-1"
              },
              {
                "type": "checks",
                "options": [
                  "Permeable",
                  "Estenosado",
                  "Obstruido"
                ],
                "id": "luz-permeabilidad-2"
              }
            ],
            "id": "luz-permeabilidad"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-13-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-13-1"
              },
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-13-2"
              }
            ],
            "id": "contenido-13"
          },
          {
            "label": "Pared / mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-mucosa-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "pared-mucosa-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperemia",
                  "Hemorragia",
                  "Ulceración",
                  "Necrosis"
                ],
                "id": "pared-mucosa-2"
              }
            ],
            "id": "pared-mucosa"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-18-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-18"
          }
        ]
      },
      {
        "id": "vejiga-urinaria",
        "title": "Vejiga urinaria",
        "questions": [
          {
            "label": "Serosa / distensión",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Vacía",
                  "Leve",
                  "Moderada",
                  "Marcada"
                ],
                "label": "Distensión",
                "id": "serosa-distension-0"
              },
              {
                "type": "text",
                "label": "Serosa",
                "id": "serosa-distension-1"
              }
            ],
            "id": "serosa-distension"
          },
          {
            "label": "Orina / contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "orina-contenido-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "orina-contenido-1"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "orina-contenido-2"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "orina-contenido-3"
              },
              {
                "type": "text",
                "label": "Sedimento",
                "id": "orina-contenido-4"
              },
              {
                "type": "text",
                "label": "Sangre",
                "id": "orina-contenido-5"
              }
            ],
            "id": "orina-contenido"
          },
          {
            "label": "Mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "mucosa-12-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "mucosa-12-1"
              },
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Hiperémica",
                  "Edematosa",
                  "Petequias",
                  "Hemorragias",
                  "Úlceras",
                  "Necrosis"
                ],
                "id": "mucosa-12-2"
              }
            ],
            "id": "mucosa-12"
          },
          {
            "label": "Pared",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "pared-5-0"
              },
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Engrosada",
                  "Adelgazada"
                ],
                "id": "pared-5-1"
              }
            ],
            "id": "pared-5"
          },
          {
            "label": "Cálculos",
            "controls": [
              {
                "type": "text",
                "label": "Número",
                "id": "calculos-0"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "calculos-1"
              },
              {
                "type": "text",
                "label": "Forma",
                "id": "calculos-2"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "calculos-3"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "calculos-4"
              },
              {
                "type": "text",
                "label": "Localización",
                "id": "calculos-5"
              }
            ],
            "id": "calculos"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-19-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-19"
          }
        ]
      },
      {
        "id": "glandulas-adrenales",
        "title": "Glándulas adrenales",
        "questions": [
          {
            "label": "Derecha / izquierda",
            "controls": [
              {
                "type": "text",
                "label": "Derecha: Largo",
                "id": "derecha-izquierda-0"
              },
              {
                "type": "text",
                "label": "Derecha: Ancho",
                "id": "derecha-izquierda-1"
              },
              {
                "type": "text",
                "label": "Derecha: Grosor",
                "id": "derecha-izquierda-2"
              },
              {
                "type": "text",
                "label": "Izquierda: Largo",
                "id": "derecha-izquierda-3"
              },
              {
                "type": "text",
                "label": "Izquierda: Ancho",
                "id": "derecha-izquierda-4"
              },
              {
                "type": "text",
                "label": "Izquierda: Grosor",
                "id": "derecha-izquierda-5"
              }
            ],
            "id": "derecha-izquierda"
          },
          {
            "label": "Cápsula / superficie",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Nodular",
                  "Hemorrágica",
                  "Adherida"
                ],
                "id": "capsula-superficie-2-0"
              }
            ],
            "id": "capsula-superficie-2"
          },
          {
            "label": "Corteza",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "corteza-3-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "corteza-3-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "corteza-3-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "corteza-3-3"
              }
            ],
            "id": "corteza-3"
          },
          {
            "label": "Médula",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "medula-3-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "medula-3-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "medula-3-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "medula-3-3"
              }
            ],
            "id": "medula-3"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-20-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-20"
          }
        ]
      },
      {
        "id": "tiroides-paratiroides",
        "title": "Tiroides / paratiroides",
        "questions": [
          {
            "label": "Lateralidad y tamaño",
            "controls": [
              {
                "type": "text",
                "label": "Derecha",
                "id": "lateralidad-y-tamano-0"
              },
              {
                "type": "text",
                "label": "Izquierda",
                "id": "lateralidad-y-tamano-1"
              },
              {
                "type": "text",
                "label": "Simetría",
                "id": "lateralidad-y-tamano-2"
              }
            ],
            "id": "lateralidad-y-tamano"
          },
          {
            "label": "Color / consistencia",
            "controls": [
              {
                "type": "text",
                "label": "Derecha",
                "id": "color-consistencia-0"
              },
              {
                "type": "text",
                "label": "Izquierda",
                "id": "color-consistencia-1"
              }
            ],
            "id": "color-consistencia"
          },
          {
            "label": "Corte",
            "controls": [
              {
                "type": "text",
                "label": "Arquitectura",
                "id": "corte-0"
              },
              {
                "type": "text",
                "label": "Quistes",
                "id": "corte-1"
              },
              {
                "type": "text",
                "label": "Nódulos",
                "id": "corte-2"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "corte-3"
              },
              {
                "type": "text",
                "label": "Mineralización",
                "id": "corte-4"
              }
            ],
            "id": "corte"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-21-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-21"
          }
        ]
      }
    ]
  },
  {
    "id": "vi-sistema-cardiovascular",
    "title": "VI. SISTEMA CARDIOVASCULAR",
    "groups": [
      {
        "id": "pericardio-y-corazon",
        "title": "Pericardio y corazón",
        "questions": [
          {
            "label": "Pericardio",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad de líquido",
                "id": "pericardio-0"
              },
              {
                "type": "text",
                "label": "Tipo",
                "id": "pericardio-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "pericardio-2"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "pericardio-3"
              },
              {
                "type": "text",
                "label": "Fibrina",
                "id": "pericardio-4"
              },
              {
                "type": "text",
                "label": "Adherencias",
                "id": "pericardio-5"
              }
            ],
            "id": "pericardio"
          },
          {
            "label": "Tamaño / forma cardíaca",
            "controls": [
              {
                "type": "text",
                "label": "Peso",
                "unit": "g",
                "id": "tamano-forma-cardiaca-0"
              },
              {
                "type": "text",
                "label": "Forma",
                "id": "tamano-forma-cardiaca-1"
              },
              {
                "type": "checks",
                "options": [
                  "Cardiomegalia",
                  "Dilatación",
                  "Hipertrofia"
                ],
                "id": "tamano-forma-cardiaca-2"
              }
            ],
            "id": "tamano-forma-cardiaca"
          },
          {
            "label": "Epicardio",
            "controls": [
              {
                "type": "text",
                "label": "Grasa",
                "id": "epicardio-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "epicardio-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hemorragias",
                  "Petequias",
                  "Placas",
                  "Adherencias"
                ],
                "id": "epicardio-2"
              }
            ],
            "id": "epicardio"
          },
          {
            "label": "Aurícula derecha / izquierda",
            "controls": [
              {
                "type": "text",
                "label": "Tamaño",
                "id": "auricula-derecha-izquierda-0"
              },
              {
                "type": "text",
                "label": "Pared",
                "id": "auricula-derecha-izquierda-1"
              },
              {
                "type": "text",
                "label": "Endocardio",
                "id": "auricula-derecha-izquierda-2"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "auricula-derecha-izquierda-3"
              },
              {
                "type": "text",
                "label": "Trombos",
                "id": "auricula-derecha-izquierda-4"
              }
            ],
            "id": "auricula-derecha-izquierda"
          },
          {
            "label": "Ventrículo derecho",
            "controls": [
              {
                "type": "text",
                "label": "Grosor pared",
                "id": "ventriculo-derecho-0"
              },
              {
                "type": "text",
                "label": "Color miocardio",
                "id": "ventriculo-derecho-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "ventriculo-derecho-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "ventriculo-derecho-3"
              }
            ],
            "id": "ventriculo-derecho"
          },
          {
            "label": "Ventrículo izquierdo",
            "controls": [
              {
                "type": "text",
                "label": "Grosor pared",
                "id": "ventriculo-izquierdo-0"
              },
              {
                "type": "text",
                "label": "Color miocardio",
                "id": "ventriculo-izquierdo-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "ventriculo-izquierdo-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "ventriculo-izquierdo-3"
              }
            ],
            "id": "ventriculo-izquierdo"
          },
          {
            "label": "Tabique interventricular",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "tabique-interventricular-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "tabique-interventricular-1"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "tabique-interventricular-2"
              }
            ],
            "id": "tabique-interventricular"
          },
          {
            "label": "Miocardio al corte",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Uniforme",
                  "Pálido",
                  "Rojo oscuro",
                  "Friable",
                  "Fibroso",
                  "Hemorrágico",
                  "Necrótico"
                ],
                "id": "miocardio-al-corte-0"
              }
            ],
            "id": "miocardio-al-corte"
          },
          {
            "label": "Endocardio",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Liso",
                  "Opaco",
                  "Engrosado",
                  "Hemorrágico"
                ],
                "id": "endocardio-0"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "endocardio-1"
              }
            ],
            "id": "endocardio"
          },
          {
            "label": "Válvulas",
            "controls": [
              {
                "type": "text",
                "label": "Tricúspide",
                "id": "valvulas-0"
              },
              {
                "type": "text",
                "label": "Pulmonar",
                "id": "valvulas-1"
              },
              {
                "type": "text",
                "label": "Mitral",
                "id": "valvulas-2"
              },
              {
                "type": "text",
                "label": "Aórtica",
                "id": "valvulas-3"
              },
              {
                "type": "text",
                "label": "Espesor, nódulos, vegetaciones, mineralización, deformación",
                "id": "valvulas-4"
              }
            ],
            "id": "valvulas"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-22-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-22"
          }
        ]
      },
      {
        "id": "grandes-vasos",
        "title": "Grandes vasos",
        "questions": [
          {
            "label": "Aorta",
            "controls": [
              {
                "type": "text",
                "label": "Luz",
                "id": "aorta-0"
              },
              {
                "type": "text",
                "label": "Pared",
                "id": "aorta-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "aorta-2"
              },
              {
                "type": "text",
                "label": "Trombos",
                "id": "aorta-3"
              },
              {
                "type": "text",
                "label": "Aneurisma",
                "id": "aorta-4"
              }
            ],
            "id": "aorta"
          },
          {
            "label": "Arterias pulmonares",
            "controls": [
              {
                "type": "text",
                "label": "Luz",
                "id": "arterias-pulmonares-0"
              },
              {
                "type": "text",
                "label": "Trombos",
                "id": "arterias-pulmonares-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "arterias-pulmonares-2"
              },
              {
                "type": "text",
                "label": "Pared",
                "id": "arterias-pulmonares-3"
              }
            ],
            "id": "arterias-pulmonares"
          },
          {
            "label": "Venas cavas / principales",
            "controls": [
              {
                "type": "text",
                "label": "Luz",
                "id": "venas-cavas-principales-0"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "venas-cavas-principales-1"
              },
              {
                "type": "text",
                "label": "Trombos",
                "id": "venas-cavas-principales-2"
              },
              {
                "type": "text",
                "label": "Pared",
                "id": "venas-cavas-principales-3"
              }
            ],
            "id": "venas-cavas-principales"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-23-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-23"
          }
        ]
      }
    ]
  },
  {
    "id": "vii-sistema-nervioso",
    "title": "VII. SISTEMA NERVIOSO",
    "groups": [
      {
        "id": "encefalo",
        "title": "Encéfalo",
        "questions": [
          {
            "label": "Peso / simetría",
            "controls": [
              {
                "type": "text",
                "label": "Peso",
                "unit": "g",
                "id": "peso-simetria-0"
              },
              {
                "type": "checks",
                "options": [
                  "Conservada",
                  "Alterada"
                ],
                "label": "Simetría",
                "id": "peso-simetria-1"
              }
            ],
            "id": "peso-simetria"
          },
          {
            "label": "Meninges",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "meninges-0"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "meninges-1"
              },
              {
                "type": "checks",
                "options": [
                  "Opacas",
                  "Engrosadas",
                  "Hiperémicas",
                  "Hemorrágicas",
                  "Exudado",
                  "Adherencias"
                ],
                "id": "meninges-2"
              }
            ],
            "id": "meninges"
          },
          {
            "label": "Hemisferios / lóbulos",
            "controls": [
              {
                "type": "text",
                "label": "Frontal",
                "id": "hemisferios-lobulos-0"
              },
              {
                "type": "text",
                "label": "Parietal",
                "id": "hemisferios-lobulos-1"
              },
              {
                "type": "text",
                "label": "Temporal",
                "id": "hemisferios-lobulos-2"
              },
              {
                "type": "text",
                "label": "Occipital",
                "id": "hemisferios-lobulos-3"
              },
              {
                "type": "text",
                "label": "Cerebelo",
                "id": "hemisferios-lobulos-4"
              },
              {
                "type": "text",
                "label": "Tronco",
                "id": "hemisferios-lobulos-5"
              }
            ],
            "id": "hemisferios-lobulos"
          },
          {
            "label": "Corteza",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "corteza-4-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "corteza-4-1"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "corteza-4-2"
              },
              {
                "type": "text",
                "label": "Surcos",
                "id": "corteza-4-3"
              },
              {
                "type": "text",
                "label": "Circunvoluciones",
                "id": "corteza-4-4"
              }
            ],
            "id": "corteza-4"
          },
          {
            "label": "Sustancia blanca",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "sustancia-blanca-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "sustancia-blanca-1"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "sustancia-blanca-2"
              }
            ],
            "id": "sustancia-blanca"
          },
          {
            "label": "Ventrículos",
            "controls": [
              {
                "type": "text",
                "label": "Tamaño",
                "id": "ventriculos-0"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "ventriculos-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "ventriculos-2"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "ventriculos-3"
              }
            ],
            "id": "ventriculos"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Edema",
                "id": "lesiones-7-0"
              },
              {
                "type": "text",
                "label": "Herniación",
                "id": "lesiones-7-1"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "lesiones-7-2"
              },
              {
                "type": "text",
                "label": "Malacia",
                "id": "lesiones-7-3"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "lesiones-7-4"
              },
              {
                "type": "text",
                "label": "Masas",
                "id": "lesiones-7-5"
              }
            ],
            "id": "lesiones-7"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-24-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-24"
          }
        ]
      },
      {
        "id": "medula-espinal",
        "title": "Médula espinal",
        "questions": [
          {
            "label": "Segmentos",
            "controls": [
              {
                "type": "text",
                "label": "Cervical",
                "id": "segmentos-0"
              },
              {
                "type": "text",
                "label": "Torácico",
                "id": "segmentos-1"
              },
              {
                "type": "text",
                "label": "Lumbar",
                "id": "segmentos-2"
              },
              {
                "type": "text",
                "label": "Sacro",
                "id": "segmentos-3"
              }
            ],
            "id": "segmentos"
          },
          {
            "label": "Meninges",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "meninges-2-0"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "meninges-2-1"
              },
              {
                "type": "text",
                "label": "Exudado",
                "id": "meninges-2-2"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "meninges-2-3"
              }
            ],
            "id": "meninges-2"
          },
          {
            "label": "Corte transversal",
            "controls": [
              {
                "type": "text",
                "label": "Sustancia gris",
                "id": "corte-transversal-0"
              },
              {
                "type": "text",
                "label": "Sustancia blanca",
                "id": "corte-transversal-1"
              },
              {
                "type": "text",
                "label": "Simetría",
                "id": "corte-transversal-2"
              }
            ],
            "id": "corte-transversal"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Compresión",
                "id": "lesiones-8-0"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "lesiones-8-1"
              },
              {
                "type": "text",
                "label": "Malacia",
                "id": "lesiones-8-2"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "lesiones-8-3"
              },
              {
                "type": "text",
                "label": "Fractura/luxación",
                "id": "lesiones-8-4"
              }
            ],
            "id": "lesiones-8"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-25-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-25"
          }
        ]
      }
    ]
  },
  {
    "id": "viii-sistema-reproductor",
    "title": "VIII. SISTEMA REPRODUCTOR",
    "groups": [
      {
        "id": "testiculos-y-epididimos",
        "title": "Testículos y epidídimos",
        "questions": [
          {
            "label": "Lateralidad / tamaño",
            "controls": [
              {
                "type": "text",
                "label": "Der.",
                "id": "lateralidad-tamano-0"
              },
              {
                "type": "text",
                "label": "Izq.",
                "id": "lateralidad-tamano-1"
              },
              {
                "type": "text",
                "label": "Largo × ancho × grosor",
                "id": "lateralidad-tamano-2"
              }
            ],
            "id": "lateralidad-tamano"
          },
          {
            "label": "Túnicas / superficie",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "tunicas-superficie-0"
              },
              {
                "type": "text",
                "label": "Líquido",
                "id": "tunicas-superficie-1"
              },
              {
                "type": "text",
                "label": "Adherencias",
                "id": "tunicas-superficie-2"
              }
            ],
            "id": "tunicas-superficie"
          },
          {
            "label": "Parénquima al corte",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "parenquima-al-corte-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "parenquima-al-corte-1"
              },
              {
                "type": "text",
                "label": "Arquitectura",
                "id": "parenquima-al-corte-2"
              }
            ],
            "id": "parenquima-al-corte"
          },
          {
            "label": "Epidídimo",
            "controls": [
              {
                "type": "text",
                "label": "Cabeza",
                "id": "epididimo-0"
              },
              {
                "type": "text",
                "label": "Cuerpo",
                "id": "epididimo-1"
              },
              {
                "type": "text",
                "label": "Cola",
                "id": "epididimo-2"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "epididimo-3"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "epididimo-4"
              }
            ],
            "id": "epididimo"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Atrofia",
                "id": "lesiones-9-0"
              },
              {
                "type": "text",
                "label": "Degeneración",
                "id": "lesiones-9-1"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "lesiones-9-2"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "lesiones-9-3"
              },
              {
                "type": "text",
                "label": "Fibrosis",
                "id": "lesiones-9-4"
              },
              {
                "type": "text",
                "label": "Quistes",
                "id": "lesiones-9-5"
              },
              {
                "type": "text",
                "label": "Masas",
                "id": "lesiones-9-6"
              }
            ],
            "id": "lesiones-9"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-26-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-26"
          }
        ]
      },
      {
        "id": "prostata",
        "title": "Próstata",
        "questions": [
          {
            "label": "Tamaño / simetría",
            "controls": [
              {
                "type": "text",
                "label": "Largo",
                "id": "tamano-simetria-0"
              },
              {
                "type": "text",
                "label": "Ancho",
                "id": "tamano-simetria-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "tamano-simetria-2"
              },
              {
                "type": "checks",
                "options": [
                  "Simétrica",
                  "Asimétrica"
                ],
                "id": "tamano-simetria-3"
              }
            ],
            "id": "tamano-simetria"
          },
          {
            "label": "Superficie / consistencia",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "superficie-consistencia-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "superficie-consistencia-1"
              },
              {
                "type": "text",
                "label": "Nodularidad",
                "id": "superficie-consistencia-2"
              }
            ],
            "id": "superficie-consistencia"
          },
          {
            "label": "Corte",
            "controls": [
              {
                "type": "text",
                "label": "Arquitectura",
                "id": "corte-2-0"
              },
              {
                "type": "text",
                "label": "Quistes",
                "id": "corte-2-1"
              },
              {
                "type": "text",
                "label": "Secreción",
                "id": "corte-2-2"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "corte-2-3"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "corte-2-4"
              }
            ],
            "id": "corte-2"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-27-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-27"
          }
        ]
      },
      {
        "id": "ovarios",
        "title": "Ovarios",
        "questions": [
          {
            "label": "Derecho / izquierdo",
            "controls": [
              {
                "type": "text",
                "label": "Derecho",
                "id": "derecho-izquierdo-0"
              },
              {
                "type": "text",
                "label": "Izquierdo",
                "id": "derecho-izquierdo-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "derecho-izquierdo-2"
              }
            ],
            "id": "derecho-izquierdo"
          },
          {
            "label": "Superficie",
            "controls": [
              {
                "type": "text",
                "label": "Folículos: Número",
                "id": "superficie-3-0"
              },
              {
                "type": "text",
                "label": "Folículos: Tamaño",
                "id": "superficie-3-1"
              },
              {
                "type": "text",
                "label": "Folículos: Color",
                "id": "superficie-3-2"
              },
              {
                "type": "text",
                "label": "Cuerpos lúteos: Número",
                "id": "superficie-3-3"
              },
              {
                "type": "text",
                "label": "Cuerpos lúteos: Tamaño",
                "id": "superficie-3-4"
              },
              {
                "type": "text",
                "label": "Cuerpos lúteos: Color",
                "id": "superficie-3-5"
              }
            ],
            "id": "superficie-3"
          },
          {
            "label": "Corte",
            "controls": [
              {
                "type": "text",
                "label": "Corteza",
                "id": "corte-3-0"
              },
              {
                "type": "text",
                "label": "Médula",
                "id": "corte-3-1"
              },
              {
                "type": "text",
                "label": "Quistes",
                "id": "corte-3-2"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "corte-3-3"
              }
            ],
            "id": "corte-3"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "lesiones-10-0"
              },
              {
                "type": "text",
                "label": "Distribución",
                "id": "lesiones-10-1"
              },
              {
                "type": "text",
                "label": "Tamaño",
                "id": "lesiones-10-2"
              }
            ],
            "id": "lesiones-10"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-28-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-28"
          }
        ]
      },
      {
        "id": "utero-cuernos-y-cervix",
        "title": "Útero, cuernos y cérvix",
        "questions": [
          {
            "label": "Cuernos uterinos",
            "controls": [
              {
                "type": "text",
                "label": "Derecho diámetro",
                "id": "cuernos-uterinos-0"
              },
              {
                "type": "text",
                "label": "Izquierdo diámetro",
                "id": "cuernos-uterinos-1"
              },
              {
                "type": "text",
                "label": "Longitud",
                "id": "cuernos-uterinos-2"
              }
            ],
            "id": "cuernos-uterinos"
          },
          {
            "label": "Serosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "serosa-5-0"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Fibrinosa",
                  "Hemorrágica",
                  "Adherencias"
                ],
                "id": "serosa-5-1"
              }
            ],
            "id": "serosa-5"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-14-0"
              },
              {
                "type": "checks",
                "options": [
                  "Ausente",
                  "Mucoso",
                  "Seroso",
                  "Purulento",
                  "Hemorrágico",
                  "Fibrinoso"
                ],
                "label": "Tipo",
                "id": "contenido-14-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-14-2"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-14-3"
              }
            ],
            "id": "contenido-14"
          },
          {
            "label": "Endometrio / mucosa",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "endometrio-mucosa-0"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "endometrio-mucosa-1"
              },
              {
                "type": "checks",
                "options": [
                  "Edema",
                  "Hiperemia",
                  "Hemorragia",
                  "Ulceración",
                  "Necrosis"
                ],
                "id": "endometrio-mucosa-2"
              }
            ],
            "id": "endometrio-mucosa"
          },
          {
            "label": "Miometrio",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "miometrio-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "miometrio-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "miometrio-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "miometrio-3"
              }
            ],
            "id": "miometrio"
          },
          {
            "label": "Gestación",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "No",
                  "Sí"
                ],
                "id": "gestacion-0"
              },
              {
                "type": "text",
                "label": "Cuerno",
                "id": "gestacion-1"
              },
              {
                "type": "text",
                "label": "Número de fetos",
                "id": "gestacion-2"
              },
              {
                "type": "text",
                "label": "Edad gestacional estimada",
                "id": "gestacion-3"
              },
              {
                "type": "text",
                "label": "Placenta",
                "id": "gestacion-4"
              }
            ],
            "id": "gestacion"
          },
          {
            "label": "Cérvix / vagina",
            "controls": [
              {
                "type": "text",
                "label": "Permeabilidad",
                "id": "cervix-vagina-0"
              },
              {
                "type": "text",
                "label": "Mucosa",
                "id": "cervix-vagina-1"
              },
              {
                "type": "text",
                "label": "Contenido",
                "id": "cervix-vagina-2"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "cervix-vagina-3"
              }
            ],
            "id": "cervix-vagina"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-29-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-29"
          }
        ]
      },
      {
        "id": "glandula-mamaria",
        "title": "Glándula mamaria",
        "questions": [
          {
            "label": "Distribución",
            "controls": [
              {
                "type": "text",
                "label": "Glándulas afectadas",
                "id": "distribucion-3-0"
              }
            ],
            "id": "distribucion-3"
          },
          {
            "label": "Exterior",
            "controls": [
              {
                "type": "text",
                "label": "Piel",
                "id": "exterior-0"
              },
              {
                "type": "text",
                "label": "Pezón",
                "id": "exterior-1"
              },
              {
                "type": "text",
                "label": "Edema",
                "id": "exterior-2"
              },
              {
                "type": "text",
                "label": "Nódulos",
                "id": "exterior-3"
              }
            ],
            "id": "exterior"
          },
          {
            "label": "Secreción",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "secrecion-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "secrecion-1"
              },
              {
                "type": "text",
                "label": "Viscosidad",
                "id": "secrecion-2"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "secrecion-3"
              },
              {
                "type": "text",
                "label": "Aspecto",
                "id": "secrecion-4"
              }
            ],
            "id": "secrecion"
          },
          {
            "label": "Parénquima al corte",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "parenquima-al-corte-2-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "parenquima-al-corte-2-1"
              },
              {
                "type": "text",
                "label": "Fibrosis",
                "id": "parenquima-al-corte-2-2"
              },
              {
                "type": "text",
                "label": "Abscesos",
                "id": "parenquima-al-corte-2-3"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "parenquima-al-corte-2-4"
              },
              {
                "type": "text",
                "label": "Masas",
                "id": "parenquima-al-corte-2-5"
              }
            ],
            "id": "parenquima-al-corte-2"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-30-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-30"
          }
        ]
      }
    ]
  },
  {
    "id": "ix-sistema-musculoesqueletico-y-tegumentario",
    "title": "IX. SISTEMA MUSCULOESQUELÉTICO Y TEGUMENTARIO",
    "groups": [
      {
        "id": "musculo-esqueletico",
        "title": "Músculo esquelético",
        "questions": [
          {
            "label": "Grupo / lado",
            "controls": [
              {
                "type": "text",
                "label": "Músculo",
                "id": "grupo-lado-0"
              },
              {
                "type": "text",
                "label": "Lado",
                "id": "grupo-lado-1"
              }
            ],
            "id": "grupo-lado"
          },
          {
            "label": "Volumen / simetría",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Atrofia",
                  "Hipertrofia"
                ],
                "id": "volumen-simetria-0"
              },
              {
                "type": "text",
                "label": "Comparación",
                "id": "volumen-simetria-1"
              }
            ],
            "id": "volumen-simetria"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "id": "color-6-0"
              },
              {
                "type": "checks",
                "options": [
                  "Uniforme",
                  "Focal",
                  "Multifocal",
                  "Difusa"
                ],
                "label": "Distribución",
                "id": "color-6-1"
              }
            ],
            "id": "color-6"
          },
          {
            "label": "Consistencia",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Flácida",
                  "Firme",
                  "Friable",
                  "Gelatinosa"
                ],
                "id": "consistencia-0"
              }
            ],
            "id": "consistencia"
          },
          {
            "label": "Corte",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Húmedo",
                  "Seco",
                  "Fibroso",
                  "Hemorrágico",
                  "Necrótico",
                  "Mineralizado"
                ],
                "id": "corte-4-0"
              }
            ],
            "id": "corte-4"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-31-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-31"
          }
        ]
      },
      {
        "id": "huesos",
        "title": "Huesos",
        "questions": [
          {
            "label": "Hueso / segmento",
            "controls": [
              {
                "type": "text",
                "id": "hueso-segmento-0"
              }
            ],
            "id": "hueso-segmento"
          },
          {
            "label": "Integridad",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Conservada",
                  "Fractura",
                  "Fisura",
                  "Luxación",
                  "Deformidad"
                ],
                "id": "integridad-0"
              }
            ],
            "id": "integridad"
          },
          {
            "label": "Superficie / periostio",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Proliferación",
                  "Engrosamiento",
                  "Desprendimiento",
                  "Hemorragia"
                ],
                "id": "superficie-periostio-0"
              }
            ],
            "id": "superficie-periostio"
          },
          {
            "label": "Corte / médula",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "corte-medula-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "corte-medula-1"
              },
              {
                "type": "text",
                "label": "Arquitectura",
                "id": "corte-medula-2"
              }
            ],
            "id": "corte-medula"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Osteólisis",
                "id": "lesiones-11-0"
              },
              {
                "type": "text",
                "label": "Proliferación",
                "id": "lesiones-11-1"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "lesiones-11-2"
              },
              {
                "type": "text",
                "label": "Mineralización",
                "id": "lesiones-11-3"
              },
              {
                "type": "text",
                "label": "Masa",
                "id": "lesiones-11-4"
              }
            ],
            "id": "lesiones-11"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-32-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-32"
          }
        ]
      },
      {
        "id": "articulacion",
        "title": "Articulación",
        "questions": [
          {
            "label": "Articulación / lado",
            "controls": [
              {
                "type": "text",
                "id": "articulacion-lado-0"
              }
            ],
            "id": "articulacion-lado"
          },
          {
            "label": "Líquido sinovial",
            "controls": [
              {
                "type": "text",
                "label": "Cantidad",
                "id": "liquido-sinovial-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "liquido-sinovial-1"
              },
              {
                "type": "text",
                "label": "Transparencia",
                "id": "liquido-sinovial-2"
              },
              {
                "type": "text",
                "label": "Viscosidad",
                "id": "liquido-sinovial-3"
              },
              {
                "type": "text",
                "label": "Tipo",
                "id": "liquido-sinovial-4"
              }
            ],
            "id": "liquido-sinovial"
          },
          {
            "label": "Cápsula / membrana sinovial",
            "controls": [
              {
                "type": "text",
                "label": "Grosor",
                "id": "capsula-membrana-sinovial-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "capsula-membrana-sinovial-1"
              },
              {
                "type": "checks",
                "options": [
                  "Hiperémica",
                  "Engrosada",
                  "Proliferativa",
                  "Fibrinosa",
                  "Hemorrágica"
                ],
                "id": "capsula-membrana-sinovial-2"
              }
            ],
            "id": "capsula-membrana-sinovial"
          },
          {
            "label": "Cartílago articular",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "cartilago-articular-0"
              },
              {
                "type": "text",
                "label": "Superficie",
                "id": "cartilago-articular-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "cartilago-articular-2"
              },
              {
                "type": "checks",
                "options": [
                  "Erosión",
                  "Fibrilación",
                  "Ulceración",
                  "Necrosis"
                ],
                "id": "cartilago-articular-3"
              }
            ],
            "id": "cartilago-articular"
          },
          {
            "label": "Hueso subcondral",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "hueso-subcondral-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "hueso-subcondral-1"
              },
              {
                "type": "text",
                "label": "Lesiones",
                "id": "hueso-subcondral-2"
              }
            ],
            "id": "hueso-subcondral"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-33-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-33"
          }
        ]
      },
      {
        "id": "piel-y-tejido-subcutaneo",
        "title": "Piel y tejido subcutáneo",
        "questions": [
          {
            "label": "Distribución",
            "controls": [
              {
                "type": "text",
                "label": "Región",
                "id": "distribucion-4-0"
              },
              {
                "type": "checks",
                "options": [
                  "Focal",
                  "Multifocal",
                  "Coalescente",
                  "Generalizado"
                ],
                "label": "Patrón",
                "id": "distribucion-4-1"
              }
            ],
            "id": "distribucion-4"
          },
          {
            "label": "Pelo",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Normal",
                  "Alopecia",
                  "Quebradizo",
                  "Húmedo",
                  "Seborréico"
                ],
                "id": "pelo-0"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "pelo-1"
              }
            ],
            "id": "pelo"
          },
          {
            "label": "Lesiones primarias",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Mácula",
                  "Pápula",
                  "Pústula",
                  "Vesícula",
                  "Nódulo",
                  "Placa",
                  "Tumor"
                ],
                "id": "lesiones-primarias-0"
              }
            ],
            "id": "lesiones-primarias"
          },
          {
            "label": "Lesiones secundarias",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Escama",
                  "Costra",
                  "Erosión",
                  "Úlcera",
                  "Fisura",
                  "Cicatriz",
                  "Necrosis"
                ],
                "id": "lesiones-secundarias-0"
              }
            ],
            "id": "lesiones-secundarias"
          },
          {
            "label": "Tejido subcutáneo",
            "controls": [
              {
                "type": "text",
                "label": "Grasa",
                "id": "tejido-subcutaneo-0"
              },
              {
                "type": "text",
                "label": "Edema",
                "id": "tejido-subcutaneo-1"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "tejido-subcutaneo-2"
              },
              {
                "type": "text",
                "label": "Absceso",
                "id": "tejido-subcutaneo-3"
              },
              {
                "type": "text",
                "label": "Fibrosis",
                "id": "tejido-subcutaneo-4"
              },
              {
                "type": "text",
                "label": "Ictericia",
                "id": "tejido-subcutaneo-5"
              }
            ],
            "id": "tejido-subcutaneo"
          },
          {
            "label": "Ectoparásitos",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "ectoparasitos-0"
              },
              {
                "type": "text",
                "label": "Número aproximado",
                "id": "ectoparasitos-1"
              },
              {
                "type": "text",
                "label": "Localización",
                "id": "ectoparasitos-2"
              }
            ],
            "id": "ectoparasitos"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-34-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-34"
          }
        ]
      },
      {
        "id": "ganglios-linfaticos",
        "title": "Ganglios linfáticos",
        "questions": [
          {
            "label": "Grupo anatómico",
            "controls": [
              {
                "type": "text",
                "id": "grupo-anatomico-0"
              }
            ],
            "id": "grupo-anatomico"
          },
          {
            "label": "Tamaño",
            "controls": [
              {
                "type": "text",
                "label": "Largo",
                "id": "tamano-0"
              },
              {
                "type": "text",
                "label": "Ancho",
                "id": "tamano-1"
              },
              {
                "type": "text",
                "label": "Grosor",
                "id": "tamano-2"
              }
            ],
            "id": "tamano"
          },
          {
            "label": "Cápsula / forma",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Engrosada",
                  "Adherida",
                  "Rota"
                ],
                "id": "capsula-forma-0"
              },
              {
                "type": "text",
                "label": "Forma",
                "id": "capsula-forma-1"
              }
            ],
            "id": "capsula-forma"
          },
          {
            "label": "Color / consistencia",
            "controls": [
              {
                "type": "text",
                "label": "Color",
                "id": "color-consistencia-2-0"
              },
              {
                "type": "text",
                "label": "Consistencia",
                "id": "color-consistencia-2-1"
              }
            ],
            "id": "color-consistencia-2"
          },
          {
            "label": "Corte",
            "controls": [
              {
                "type": "text",
                "label": "Corteza",
                "id": "corte-5-0"
              },
              {
                "type": "text",
                "label": "Médula",
                "id": "corte-5-1"
              },
              {
                "type": "text",
                "label": "Relación corticomedular",
                "id": "corte-5-2"
              }
            ],
            "id": "corte-5"
          },
          {
            "label": "Lesiones",
            "controls": [
              {
                "type": "text",
                "label": "Hiperplasia",
                "id": "lesiones-12-0"
              },
              {
                "type": "text",
                "label": "Hemorragia",
                "id": "lesiones-12-1"
              },
              {
                "type": "text",
                "label": "Necrosis",
                "id": "lesiones-12-2"
              },
              {
                "type": "text",
                "label": "Abscesos",
                "id": "lesiones-12-3"
              },
              {
                "type": "text",
                "label": "Mineralización",
                "id": "lesiones-12-4"
              },
              {
                "type": "text",
                "label": "Nódulos",
                "id": "lesiones-12-5"
              }
            ],
            "id": "lesiones-12"
          },
          {
            "label": "Descripción macroscópica integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-macroscopica-integrada-35-0"
              }
            ],
            "id": "descripcion-macroscopica-integrada-35"
          }
        ]
      }
    ]
  },
  {
    "id": "x-ficha-de-lesion-macroscopica",
    "title": "X. FICHA DE LESIÓN MACROSCÓPICA",
    "groups": [
      {
        "id": "x-ficha-de-lesion-macroscopica-2",
        "title": "X. FICHA DE LESIÓN MACROSCÓPICA",
        "questions": [
          {
            "label": "Órgano / región / lado",
            "controls": [
              {
                "type": "text",
                "id": "organo-region-lado-0"
              }
            ],
            "id": "organo-region-lado"
          },
          {
            "label": "Tipo de lesión",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Cambio de color",
                  "Hemorragia",
                  "Edema",
                  "Necrosis",
                  "Úlcera",
                  "Erosión",
                  "Nódulo",
                  "Masa",
                  "Fibrosis",
                  "Dilatación",
                  "Atrofia",
                  "Hipertrofia",
                  "Otro"
                ],
                "id": "tipo-de-lesion-0"
              }
            ],
            "id": "tipo-de-lesion"
          },
          {
            "label": "Distribución",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Focal",
                  "Multifocal",
                  "Multifocal coalescente",
                  "Segmentaria",
                  "Regional",
                  "Difusa",
                  "Generalizada"
                ],
                "id": "distribucion-5-0"
              }
            ],
            "id": "distribucion-5"
          },
          {
            "label": "Número",
            "controls": [
              {
                "type": "text",
                "id": "numero-0"
              }
            ],
            "id": "numero"
          },
          {
            "label": "Tamaño",
            "controls": [
              {
                "type": "dimensions",
                "count": 3,
                "unit": "cm",
                "id": "tamano-2-0"
              }
            ],
            "id": "tamano-2"
          },
          {
            "label": "Forma",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Circular",
                  "Oval",
                  "Irregular",
                  "Lineal",
                  "Nodular",
                  "Cavitada"
                ],
                "id": "forma-0"
              }
            ],
            "id": "forma"
          },
          {
            "label": "Color",
            "controls": [
              {
                "type": "text",
                "id": "color-7-0"
              }
            ],
            "id": "color-7"
          },
          {
            "label": "Bordes",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Bien delimitados",
                  "Mal delimitados",
                  "Regulares",
                  "Irregulares"
                ],
                "id": "bordes-0"
              }
            ],
            "id": "bordes"
          },
          {
            "label": "Superficie",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Lisa",
                  "Rugosa",
                  "Granular",
                  "Nodular",
                  "Ulcerada",
                  "Costrosa",
                  "Fibrinosa"
                ],
                "id": "superficie-4-0"
              }
            ],
            "id": "superficie-4"
          },
          {
            "label": "Consistencia",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Blanda",
                  "Firme",
                  "Dura",
                  "Friable",
                  "Gelatinosa",
                  "Fluctuante"
                ],
                "id": "consistencia-2-0"
              }
            ],
            "id": "consistencia-2"
          },
          {
            "label": "Profundidad",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Superficial",
                  "Submucosa",
                  "Subcapsular",
                  "Cortical",
                  "Medular",
                  "Muscular",
                  "Transmural"
                ],
                "id": "profundidad-0"
              }
            ],
            "id": "profundidad"
          },
          {
            "label": "Contenido",
            "controls": [
              {
                "type": "text",
                "label": "Tipo",
                "id": "contenido-15-0"
              },
              {
                "type": "text",
                "label": "Cantidad",
                "id": "contenido-15-1"
              },
              {
                "type": "text",
                "label": "Color",
                "id": "contenido-15-2"
              },
              {
                "type": "text",
                "label": "Viscosidad",
                "id": "contenido-15-3"
              },
              {
                "type": "text",
                "label": "Olor",
                "id": "contenido-15-4"
              }
            ],
            "id": "contenido-15"
          },
          {
            "label": "Estructuras vecinas",
            "controls": [
              {
                "type": "checks",
                "options": [
                  "Sin afectación",
                  "Compresión",
                  "Invasión",
                  "Adherencia",
                  "Perforación"
                ],
                "id": "estructuras-vecinas-0"
              }
            ],
            "id": "estructuras-vecinas"
          },
          {
            "label": "Descripción integrada",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "descripcion-integrada-0"
              }
            ],
            "id": "descripcion-integrada"
          }
        ]
      }
    ]
  },
  {
    "id": "xi-muestras",
    "title": "XI. MUESTRAS",
    "groups": [
      {
        "id": "registro-de-muestras",
        "title": "Registro de muestras",
        "kind": "samples",
        "columns": [
          "No.",
          "Órgano / lesión",
          "Tipo de muestra",
          "Fijador / medio",
          "Estudio",
          "Observaciones"
        ],
        "questions": []
      }
    ]
  },
  {
    "id": "xii-diagnostico-morfologico",
    "title": "XII. DIAGNÓSTICO MORFOLÓGICO",
    "groups": [
      {
        "id": "xii-diagnostico-morfologico-2",
        "title": "XII. DIAGNÓSTICO MORFOLÓGICO",
        "questions": [
          {
            "label": "Diagnóstico morfológico 1",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-1-0"
              }
            ],
            "id": "diagnostico-morfologico-1"
          },
          {
            "label": "Diagnóstico morfológico 2",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-2-0"
              }
            ],
            "id": "diagnostico-morfologico-2"
          },
          {
            "label": "Diagnóstico morfológico 3",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-3-0"
              }
            ],
            "id": "diagnostico-morfologico-3"
          },
          {
            "label": "Diagnóstico morfológico 4",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-4-0"
              }
            ],
            "id": "diagnostico-morfologico-4"
          },
          {
            "label": "Diagnóstico morfológico 5",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-5-0"
              }
            ],
            "id": "diagnostico-morfologico-5"
          },
          {
            "label": "Diagnóstico morfológico 6",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-6-0"
              }
            ],
            "id": "diagnostico-morfologico-6"
          },
          {
            "label": "Diagnóstico morfológico 7",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-morfologico-7-0"
              }
            ],
            "id": "diagnostico-morfologico-7"
          },
          {
            "label": "Diagnóstico etiológico presuntivo",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnostico-etiologico-presuntivo-0"
              }
            ],
            "id": "diagnostico-etiologico-presuntivo"
          },
          {
            "label": "Diagnósticos diferenciales",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "diagnosticos-diferenciales-0"
              }
            ],
            "id": "diagnosticos-diferenciales"
          },
          {
            "label": "Estudios complementarios recomendados",
            "controls": [
              {
                "type": "text",
                "multiline": true,
                "id": "estudios-complementarios-recomendados-0"
              }
            ],
            "id": "estudios-complementarios-recomendados"
          }
        ],
        "note": "Redactar como: órgano + proceso/lesión + distribución + severidad + característica relevante."
      }
    ]
  },
  {
    "id": "xiii-escala-de-severidad",
    "title": "XIII. ESCALA DE SEVERIDAD",
    "groups": [
      {
        "id": "xiii-escala-de-severidad-2",
        "title": "XIII. ESCALA DE SEVERIDAD",
        "questions": [
          {
            "label": "Seleccione la severidad",
            "controls": [
              {
                "type": "choice",
                "options": [
                  "Leve: alteración discreta, limitada y sin compromiso estructural importante",
                  "Moderada: lesión evidente con afectación estructural funcional relevante",
                  "Severa: lesión extensa, profunda, destructiva o con compromiso importante del órgano",
                  "Marcada/generalizada: afecta gran parte o prácticamente todo el órgano/tejido"
                ],
                "id": "seleccione-la-severidad-0"
              }
            ],
            "id": "seleccione-la-severidad"
          }
        ]
      }
    ]
  }
];
