// ============================================================
// EDITA ESTE ARCHIVO PRIMERO — todos tus datos viven aquí.
// ============================================================

export const SITE = {
  nombre: "Moises",
  apellido: "", // opcional, se muestra junto al nombre en el hero
  marca: "MOISES JR. DE LA ROSA", // nombre corto que aparece en la barra de navegación
  rol: "Desarrollador Full Stack · Python · DevOps · IA · IoT",
  ubicacion: "Medellín, Colombia",
  zonaHoraria: "UTC−5",
  disponible: true,

  // Contacto
  whatsapp: "573105015859", // solo números, con indicativo de país (57 = Colombia)
  email: "mjdelarosayemail@proton.me",
  github: "https://github.com/soric91", // tu perfil, SIN slash al final
  linkedin: "https://www.linkedin.com/in/moisesdlry/", // deja "" para ocultar

  // Mensaje precargado al abrir WhatsApp
  whatsappMensaje:
    "Hola Moises, vi tu portafolio y me interesa hablar sobre un proyecto.",
};

export const whatsappUrl = () =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMensaje)}`;

// Teléfono formateado para mostrar: +57 300 000 0000
export const whatsappDisplay = () => {
  const n = SITE.whatsapp.replace(/[^0-9]/g, "");
  return `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}`;
};

// URL de un repositorio a partir del nombre: repoUrl("mi-proyecto")
export const repoUrl = (repo: string) => `${SITE.github}/${repo}`;
