export const site = {
  name: 'Grupo HCN',
  tagline: 'Especialistas en solución y control de agua',
  description: 'Catálogo de productos de ferretería especializada en válvulas, conexiones, tuberías y accesorios para instalaciones hidráulicas y sanitarias.',
  url: 'https://grupohcn.com',
  phone: '+51900452663',
  phoneDisplay: '900 452 663',
  email: 'contacto@grupohcn.com',
  address: 'Lima, Perú',
  schedule: 'Lunes a Viernes: 8:00 - 18:00 | Sábados: 9:00 - 14:00',
  whatsapp: {
    number: '51900452663',
    defaultMessage: 'Hola, quisiera cotizar productos de su catálogo.',
  },
  social: {
    facebook: '#',
    instagram: '#',
  },
} as const;

/** Build a WhatsApp link with pre-filled message */
export function whatsappLink(message?: string): string {
  const msg = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${msg}`;
}

/** Build a WhatsApp link for a specific product, includes name + URL */
export function whatsappProductLink(productName: string, productUrl: string): string {
  const msg = `Hola, quisiera cotizar: ${productName}\n${productUrl}`;
  return whatsappLink(msg);
}
