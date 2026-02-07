/** Prefix an internal path with the configured base URL so links work on GitHub Pages */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. '/Sitio-web/'
  if (path === '/' || path === '') return base;
  return base + path.replace(/^\//, '');
}

export const site = {
  name: 'Grupo HCN',
  tagline: 'Especialistas en solución y control de agua',
  description: 'Catálogo de productos de ferretería especializada en válvulas, conexiones, tuberías y accesorios para instalaciones hidráulicas y sanitarias.',
  url: 'https://GRUPO-HCN.github.io/Sitio-web',
  phone: '+51900452663',
  phoneDisplay: '900 452 663',
  phone2: '+51906002585',
  phone2Display: '906 002 585',
  email: 'inoxhcnresistenciaenecero20@gmail.com',
  address: 'Av. Argentina 778 "Centro comercial el Reloj" Int. 1048 Lima - Lima',
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
