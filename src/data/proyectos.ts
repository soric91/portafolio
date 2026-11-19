// ============================================================
// PROYECTOS — fuente única del contenido de la sección Proyectos.
//  - cat:  categoría para el filtro (ver CATEGORIAS)
//  - anim: animación de vista previa mientras no hay foto
//  - img:  captura real en /public (ej. "/proyectos/x.webp", 1600×1000)
//  - repo: nombre del repo en GitHub; "" si el código es privado
//  - demo: URL en vivo, opcional
// ============================================================

export const CATEGORIAS = {
  energia: "IoT · Energía",
  negocio: "Software de negocio",
  ia: "IA · Datos",
  web: "Web",
} as const;

export type Categoria = keyof typeof CATEGORIAS;

export type Anim =
  | "energia"
  | "chat"
  | "inventario"
  | "solar"
  | "catalogo"
  | "datos"
  | "factura"
  | "ocr"
  | "forecast";

export interface Proyecto {
  code: string;
  cat: Categoria;
  tipo: string;
  nombre: string;
  desc: string;
  stack: readonly string[];
  anim: Anim;
  img?: string;
  repo?: string;
  demo?: string;
  estado?: "PRODUCCIÓN" | "EN USO" | "PROTOTIPO";
}

export const proyectos: readonly Proyecto[] = [
  {
    code: "PRJ-02",
    cat: "negocio",
    tipo: "SALUD · RETAIL",
    nombre: "OpenPharma — inventario para droguerías",
    desc: "Lee las facturas electrónicas de la DIAN (XML UBL y PDF), cuadra cada línea contra el total, captura lotes, vencimientos e INVIMA y exporta al software de facturación. Corre en la red local de la droguería, con versión de escritorio que funciona sin internet.",
    stack: ["FastAPI", "PostgreSQL", "React 19", "Docker", "Tkinter"],
    anim: "factura",
    estado: "EN USO",
  },
  {
    code: "PRJ-03",
    cat: "negocio",
    tipo: "CATÁLOGO · WHATSAPP",
    nombre: "Catálogo de droguería conectado al inventario",
    desc: "Catálogo web que se sincroniza con el inventario cada cinco minutos y cierra cada pedido por WhatsApp. Aplica descuentos automáticos a productos próximos a vencer, limitados al lote vigente.",
    stack: ["React 19", "Rsbuild", "Tailwind 4", "Biome"],
    anim: "catalogo",
    estado: "EN USO",
  },
  {
    code: "PRJ-04",
    cat: "ia",
    tipo: "VISIÓN ARTIFICIAL",
    nombre: "Auto-Fill — mediciones eléctricas por foto",
    desc: "El técnico fotografía el multímetro; un modelo YOLO ubica el display, PaddleOCR lee el valor y la API llena el formato Excel de medidas eléctricas. Incluye app web, CLI y autenticación por token.",
    stack: ["FastAPI", "YOLO", "PaddleOCR", "openpyxl", "React"],
    anim: "ocr",
    estado: "PROTOTIPO",
  },
  {
    code: "PRJ-05",
    cat: "ia",
    tipo: "MACHINE LEARNING",
    nombre: "energyML — pronóstico de consumo",
    desc: "Predice hora a hora la potencia neta de un medidor bidireccional (importación y excedente solar) a partir del histórico en InfluxDB. Pipeline extract → features → train → evaluate con Random Forest.",
    stack: ["Python", "scikit-learn", "Polars", "InfluxDB"],
    anim: "forecast",
    estado: "PROTOTIPO",
  },
  {
    code: "PRJ-06",
    cat: "energia",
    tipo: "PWA · CAMPO",
    nombre: "ReportSolar — mantenimiento fotovoltaico",
    desc: "Los técnicos reportan en campo con checklist y fotos, aun sin señal: PWA offline-first que sincroniza al volver la conexión y genera el informe en PDF desde plantillas.",
    stack: ["FastAPI", "React", "IndexedDB", "PostgreSQL", "Redis"],
    anim: "solar",
    repo: "ReportSolar",
  },
  {
    code: "PRJ-07",
    cat: "ia",
    tipo: "IA · WHATSAPP",
    nombre: "Bot de citas para spa",
    desc: "Asistente conversacional que agenda citas, informa servicios y confirma por WhatsApp. El LLM conduce el diálogo; las reglas de agenda viven en el backend.",
    stack: ["FastAPI", "Gemini", "SQLAlchemy", "WhatsApp API"],
    anim: "chat",
  },
  {
    code: "PRJ-08",
    cat: "web",
    tipo: "SITIO CORPORATIVO",
    nombre: "Sitio para empresa de energía solar",
    desc: "Sitio de servicios solares con mini catálogo de equipos y dimensionador. Arquitectura limpia: catálogo validado con Zod, encabezados de seguridad y pruebas.",
    stack: ["React 19", "Rsbuild", "Tailwind 4", "Zod"],
    anim: "energia",
    estado: "PRODUCCIÓN",
  },
  {
    code: "PRJ-09",
    cat: "negocio",
    tipo: "SAAS · B2B",
    nombre: "StockControl — SaaS de inventario",
    desc: "Gestión de inventario industrial multiusuario: catálogo por categorías, movimientos y reportes.",
    stack: ["FastAPI", "PostgreSQL", "React", "Docker"],
    anim: "inventario",
    repo: "stockcontrolsaas",
  },
  {
    code: "PRJ-10",
    cat: "web",
    tipo: "E-COMMERCE LIGERO",
    nombre: "Catálogo con pedidos por correo",
    desc: "Catálogo sin pasarela de pagos: el cliente arma su carrito y el vendedor recibe el pedido detallado por correo.",
    stack: ["Astro", "Tailwind", "React islands"],
    anim: "datos",
    repo: "catalagoweb",
  },
];

// Herramientas pequeñas: se muestran como lista compacta
export const laboratorio = [
  {
    nombre: "DataStop",
    desc: "Scraper de resultados de fútbol a base relacional, con API y tablero.",
    stack: "Python · FastAPI · React",
  },
  {
    nombre: "Portapapeles para GNOME",
    desc: "Historial tipo Win+V en Wayland: anclar, buscar y pegar directo.",
    stack: "Python · GTK · systemd",
  },
  {
    nombre: "Social Video Downloader",
    desc: "Descarga videos de Facebook y X desde una interfaz web en Docker.",
    stack: "FastAPI · yt-dlp · React",
  },
  {
    nombre: "FastAPI en el edge",
    desc: "CRUD serverless sobre Cloudflare Workers con base D1.",
    stack: "Python · Workers · D1",
  },
] as const;
