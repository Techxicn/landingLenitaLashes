/**
 * Utilidades para construir enlaces de WhatsApp.
 * La validación del número ocurre en build time para detectar errores temprano.
 */

import { business } from '../data/business';

/** Valida que el número de WhatsApp contenga solo dígitos. Lanza error en build time. */
function validateWhatsAppNumber(number: string): void {
  // Permite el placeholder para poder hacer build durante desarrollo
  if (number === 'PLACEHOLDER_NUMERO_WHATSAPP') {
    console.warn(
      '\n[whatsapp.ts] ⚠️  PLACEHOLDER: El número de WhatsApp aún no está configurado.\n' +
        '  → Edita src/data/business.ts y reemplaza PLACEHOLDER_NUMERO_WHATSAPP\n' +
        '    con el número real (solo dígitos, sin "+"). Ej: "521234567890"\n'
    );
    return;
  }
  if (!/^\d+$/.test(number)) {
    throw new Error(
      `[whatsapp.ts] El número de WhatsApp "${number}" contiene caracteres inválidos. ` +
        'Debe contener solo dígitos, sin "+", espacios ni guiones. ' +
        'Ejemplo válido: "521234567890".'
    );
  }
}

// Validación ejecutada en build time al importar este módulo
validateWhatsAppNumber(business.whatsapp);

/**
 * Construye un enlace de WhatsApp con mensaje codificado.
 *
 * @param message - Texto del mensaje. Si se omite, usa el mensaje por defecto de business.ts.
 * @returns URL completa de wa.me con el mensaje codificado.
 */
export function buildWhatsAppLink(message?: string): string {
  const text = message ?? business.mensajeDefault;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Construye el mensaje de WhatsApp para una tarjeta del catálogo.
 *
 * @param nombreEstilo - Nombre del estilo de pestaña seleccionado.
 * @returns URL de WhatsApp con mensaje personalizado para ese estilo.
 */
export function buildCatalogWhatsAppLink(nombreEstilo: string): string {
  const message = `Hola, me interesa el estilo *${nombreEstilo}*. ¿Me podrías dar información sobre disponibilidad y precio? 😊`;
  return buildWhatsAppLink(message);
}
