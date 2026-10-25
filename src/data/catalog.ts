/**
 * Catálogo de estilos/servicios de pestañas.
 * Edita este archivo para agregar, quitar o modificar servicios.
 *
 * Imágenes pendientes por reemplazar (ver sección de placeholders abajo):
 * - src/assets/placeholders/clasicas.jpg
 * - src/assets/placeholders/hibridas.jpg
 * - src/assets/placeholders/volumen-ruso.jpg
 * - src/assets/placeholders/wispy.jpg
 * - src/assets/placeholders/lifting.jpg
 * - src/assets/placeholders/retoque.jpg
 */

import clasicasImg from '../assets/placeholders/clasicas.jpg';
import hibridasImg from '../assets/placeholders/hibridas.jpg';
import volumenRusoImg from '../assets/placeholders/volumen-ruso.jpg';
import wispyImg from '../assets/placeholders/wispy.jpg';
import liftingImg from '../assets/placeholders/lifting.jpg';
import retoqueImg from '../assets/placeholders/retoque.jpg';
import type { ImageMetadata } from 'astro';

export interface LashStyle {
  /** Identificador único (slug) */
  id: string;
  nombre: string;
  descripcion: string;
  imagen: ImageMetadata;
  /** Alt text descriptivo para accesibilidad */
  imagenAlt: string;
  /** Precio opcional. Ej: "desde $500" */
  precio?: string;
  /** Duración estimada del servicio */
  duracion?: string;
  /** Etiqueta destacada. Ej: "Más pedido", "Nuevo", "Oferta" */
  etiqueta?: string;
}

export const catalog: LashStyle[] = [
  {
    id: 'clasicas',
    nombre: 'Clásicas',
    descripcion:
      'Una extensión por pestaña natural. Resultado natural y elegante, ideal para uso diario.',
    imagen: clasicasImg,
    imagenAlt: 'Extensiones de pestañas clásicas — resultado natural y elegante',
    // ⚠️ PLACEHOLDER: precio: 'desde $XXX',
    duracion: '90 – 120 min',
  },
  {
    id: 'hibridas',
    nombre: 'Híbridas',
    descripcion:
      'Combinación de técnica clásica y volumen. Más densidad con un acabado natural y sofisticado.',
    imagen: hibridasImg,
    imagenAlt: 'Extensiones de pestañas híbridas — mezcla de clásica y volumen',
    // ⚠️ PLACEHOLDER: precio: 'desde $XXX',
    duracion: '2 – 2.5 hrs',
    etiqueta: 'Más pedido',
  },
  {
    id: 'volumen-ruso',
    nombre: 'Volumen ruso',
    descripcion:
      'Múltiples extensiones ultrafinas por pestaña natural. Efecto dramático, voluminoso y de larga duración.',
    imagen: volumenRusoImg,
    imagenAlt: 'Extensiones de pestañas volumen ruso — efecto dramático y voluminoso',
    // ⚠️ PLACEHOLDER: precio: 'desde $XXX',
    duracion: '2.5 – 3 hrs',
  },
  {
    id: 'wispy',
    nombre: 'Efecto Wispy',
    descripcion:
      'Combinación de largos irregulares que imitan las pestañas naturales con un toque glamoroso.',
    imagen: wispyImg,
    imagenAlt: 'Extensiones estilo wispy — largos irregulares con efecto glamoroso',
    // ⚠️ PLACEHOLDER: precio: 'desde $XXX',
    duracion: '2 – 2.5 hrs',
    etiqueta: 'Tendencia',
  },
  {
    id: 'lifting',
    nombre: 'Lifting de pestañas',
    descripcion:
      'Tratamiento que ondula y levanta tus pestañas naturales sin extensiones. Dura hasta 6-8 semanas.',
    imagen: liftingImg,
    imagenAlt: 'Lifting de pestañas naturales — ondulación y levantamiento sin extensiones',
    // ⚠️ PLACEHOLDER: precio: 'desde $XXX',
    duracion: '60 – 75 min',
  },
  {
    id: 'retoque',
    nombre: 'Retoque',
    descripcion:
      'Mantenimiento para conservar tus extensiones en perfecto estado. Se realiza cada 2-4 semanas.',
    imagen: retoqueImg,
    imagenAlt: 'Retoque de extensiones de pestañas — mantenimiento cada 2-4 semanas',
    // ⚠️ PLACEHOLDER: precio: 'desde $XXX',
    duracion: '45 – 75 min',
  },
];
