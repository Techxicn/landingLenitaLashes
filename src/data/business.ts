/**
 * Fuente única de verdad para los datos del negocio.
 * Edita este archivo para actualizar toda la landing page.
 *
 * ⚠️ PLACEHOLDERS: Reemplaza todos los valores marcados con ⚠️
 */

export interface BusinessData {
  nombre: string;
  eslogan: string;
  descripcion: string;
  ubicacion: string;
  horario: string;
  /** Solo dígitos, sin "+". Ej: "521234567890" */
  whatsapp: string;
  mensajeDefault: string;
  redes: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const business: BusinessData = {
  // ⚠️ PLACEHOLDER: Nombre del negocio
  nombre: 'Lenita Lashes',

  // ⚠️ PLACEHOLDER: Eslogan
  eslogan: 'Realza tu mirada, expresa tu esencia',

  // ⚠️ PLACEHOLDER: Descripción breve del negocio (2-3 oraciones)
  descripcion:
    'Somos especialistas en extensiones y tratamientos de pestañas que realzan tu belleza natural. Trabajamos con productos de primera calidad y técnicas certificadas para garantizar resultados duraderos y seguros. Tu comodidad y satisfacción son nuestra prioridad.',

  // ⚠️ PLACEHOLDER: Ubicación o zona de atención
  ubicacion: 'PLACEHOLDER_CIUDAD, PLACEHOLDER_ESTADO',

  // ⚠️ PLACEHOLDER: Horario de atención
  horario: 'Lunes a Sábado · 9:00 am – 7:00 pm',

  // ⚠️ PLACEHOLDER: Número de WhatsApp en formato internacional, solo dígitos (sin "+")
  // Ejemplo válido: "521234567890" (México), "573001234567" (Colombia)
  whatsapp: '529991234567',

  // ⚠️ PLACEHOLDER: Mensaje que se envía por defecto cuando alguien hace clic en "Agendar"
  mensajeDefault:
    'Hola, me gustaría agendar una cita. ¿Me podrías dar información sobre disponibilidad y precios?',

  redes: {
    // ⚠️ PLACEHOLDER: URL completa de Instagram (o elimina la propiedad si no aplica)
    instagram: 'https://instagram.com/PLACEHOLDER_INSTAGRAM',
    // facebook: 'https://facebook.com/PLACEHOLDER_FACEBOOK',
    // tiktok: 'https://tiktok.com/@PLACEHOLDER_TIKTOK',
  },

  seo: {
    // ⚠️ PLACEHOLDER: Título para SEO (max ~60 caracteres)
    title: 'Lenita Lashes · Extensiones de Pestañas',

    // ⚠️ PLACEHOLDER: Meta description (max ~160 caracteres)
    description:
      'Especialistas en extensiones de pestañas clásicas, híbridas y volumen ruso. Agenda tu cita por WhatsApp. Atención personalizada.',

    // ⚠️ PLACEHOLDER: Ruta a imagen OG (1200×630px) en /public/
    ogImage: '/og-image.jpg',
  },
};
