// ── Types ──
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  brandId: string;
  material: string;
  size: string;
  specs: Record<string, string>;
  images: string[];       // placeholder paths
  featured: boolean;
  new: boolean;
  sku: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;           // SVG inline or emoji placeholder
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;           // placeholder path
}

// ── Categories ──
export const categories: Category[] = [
  {
    id: 'valvulas',
    slug: 'valvulas',
    name: 'Válvulas',
    description: 'Válvulas de bola, compuerta, check, mariposa y más para control de flujo en instalaciones industriales y residenciales.',
    icon: '🔧',
    productCount: 0,
  },
  {
    id: 'conexiones',
    slug: 'conexiones',
    name: 'Conexiones',
    description: 'Codos, tees, reducciones, uniones y acoples para todo tipo de tuberías y sistemas de conducción.',
    icon: '🔗',
    productCount: 0,
  },
  {
    id: 'tuberias',
    slug: 'tuberias',
    name: 'Tuberías',
    description: 'Tuberías de PVC, CPVC, acero, cobre y polietileno en diversas medidas y especificaciones.',
    icon: '🏗️',
    productCount: 0,
  },
  {
    id: 'accesorios',
    slug: 'accesorios',
    name: 'Accesorios',
    description: 'Abrazaderas, selladores, cintas teflón, soportes y herramientas complementarias para instalaciones.',
    icon: '⚙️',
    productCount: 0,
  },
  {
    id: 'bombas',
    slug: 'bombas',
    name: 'Bombas',
    description: 'Bombas centrífugas, sumergibles y de presión para agua y fluidos industriales.',
    icon: '💧',
    productCount: 0,
  },
  {
    id: 'filtros',
    slug: 'filtros',
    name: 'Filtros',
    description: 'Filtros de agua, sedimentos y sistemas de purificación para uso residencial e industrial.',
    icon: '🔬',
    productCount: 0,
  },
];

// ── Brands ──
export const brands: Brand[] = [
  { id: 'amanco', name: 'Amanco', logo: '/images/brands/amanco.svg' },
  { id: 'pavco', name: 'Pavco', logo: '/images/brands/pavco.svg' },
  { id: 'nibco', name: 'NIBCO', logo: '/images/brands/nibco.svg' },
  { id: 'fmc', name: 'FMC', logo: '/images/brands/fmc.svg' },
  { id: 'helbert', name: 'Helbert', logo: '/images/brands/helbert.svg' },
  { id: 'truper', name: 'Truper', logo: '/images/brands/truper.svg' },
  { id: 'rotoplas', name: 'Rotoplas', logo: '/images/brands/rotoplas.svg' },
  { id: 'urrea', name: 'Urrea', logo: '/images/brands/urrea.svg' },
];

// ── Materials ──
export const materials = [
  'PVC',
  'CPVC',
  'Bronce',
  'Acero Inoxidable',
  'Acero al Carbón',
  'Hierro Galvanizado',
  'Polietileno',
  'Cobre',
  'PPR',
] as const;

// ── Sizes ──
export const sizes = [
  '1/4"', '3/8"', '1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"', '2"',
  '2-1/2"', '3"', '4"', '6"', '8"',
] as const;

// ── Helper to generate products ──
function makeProduct(
  id: number,
  name: string,
  categoryId: string,
  brandId: string,
  material: string,
  size: string,
  opts: Partial<Product> = {},
): Product {
  const slugBase = `${name} ${material} ${size}`.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const slug = `${slugBase}-${String(id).padStart(3, '0')}`;
  return {
    id: `prod-${String(id).padStart(3, '0')}`,
    slug,
    name,
    description: opts.description ?? `${name} de ${material} marca ${brands.find(b => b.id === brandId)?.name ?? brandId}, medida ${size}. Ideal para instalaciones residenciales e industriales. Cumple con estándares de calidad y normativas vigentes.`,
    shortDescription: opts.shortDescription ?? `${name} ${material} ${size}`,
    categoryId,
    brandId,
    material,
    size,
    specs: opts.specs ?? {
      Material: material,
      Medida: size,
      'Presión máx.': '150 PSI',
      Conexión: 'Roscada',
      Norma: 'ASTM / NSF',
    },
    images: opts.images ?? [
      '/images/products/placeholder-1.svg',
      '/images/products/placeholder-2.svg',
      '/images/products/placeholder-3.svg',
    ],
    featured: opts.featured ?? false,
    new: opts.new ?? false,
    sku: `HCN-${String(id).padStart(4, '0')}`,
  };
}

// ── Products (mock 120 items) ──
export const products: Product[] = [
  // ── Válvulas (30) ──
  makeProduct(1, 'Válvula de Bola', 'valvulas', 'nibco', 'Bronce', '1/2"', { featured: true }),
  makeProduct(2, 'Válvula de Bola', 'valvulas', 'nibco', 'Bronce', '3/4"', { featured: true }),
  makeProduct(3, 'Válvula de Bola', 'valvulas', 'nibco', 'Bronce', '1"'),
  makeProduct(4, 'Válvula de Bola', 'valvulas', 'nibco', 'Bronce', '1-1/2"'),
  makeProduct(5, 'Válvula de Bola', 'valvulas', 'nibco', 'Bronce', '2"'),
  makeProduct(6, 'Válvula de Bola', 'valvulas', 'urrea', 'Acero Inoxidable', '1/2"', { new: true }),
  makeProduct(7, 'Válvula de Bola', 'valvulas', 'urrea', 'Acero Inoxidable', '3/4"'),
  makeProduct(8, 'Válvula de Bola', 'valvulas', 'urrea', 'Acero Inoxidable', '1"'),
  makeProduct(9, 'Válvula de Compuerta', 'valvulas', 'nibco', 'Bronce', '1/2"'),
  makeProduct(10, 'Válvula de Compuerta', 'valvulas', 'nibco', 'Bronce', '3/4"', { featured: true }),
  makeProduct(11, 'Válvula de Compuerta', 'valvulas', 'nibco', 'Bronce', '1"'),
  makeProduct(12, 'Válvula de Compuerta', 'valvulas', 'nibco', 'Bronce', '2"'),
  makeProduct(13, 'Válvula de Compuerta', 'valvulas', 'fmc', 'Hierro Galvanizado', '2"'),
  makeProduct(14, 'Válvula de Compuerta', 'valvulas', 'fmc', 'Hierro Galvanizado', '3"'),
  makeProduct(15, 'Válvula de Compuerta', 'valvulas', 'fmc', 'Hierro Galvanizado', '4"'),
  makeProduct(16, 'Válvula Check', 'valvulas', 'nibco', 'Bronce', '1/2"'),
  makeProduct(17, 'Válvula Check', 'valvulas', 'nibco', 'Bronce', '3/4"'),
  makeProduct(18, 'Válvula Check', 'valvulas', 'nibco', 'Bronce', '1"'),
  makeProduct(19, 'Válvula Check', 'valvulas', 'nibco', 'Bronce', '2"', { featured: true }),
  makeProduct(20, 'Válvula Check Vertical', 'valvulas', 'urrea', 'Bronce', '1/2"', { new: true }),
  makeProduct(21, 'Válvula Check Vertical', 'valvulas', 'urrea', 'Bronce', '3/4"'),
  makeProduct(22, 'Válvula Mariposa', 'valvulas', 'fmc', 'Hierro Galvanizado', '2"'),
  makeProduct(23, 'Válvula Mariposa', 'valvulas', 'fmc', 'Hierro Galvanizado', '3"'),
  makeProduct(24, 'Válvula Mariposa', 'valvulas', 'fmc', 'Hierro Galvanizado', '4"'),
  makeProduct(25, 'Válvula Mariposa', 'valvulas', 'fmc', 'Hierro Galvanizado', '6"'),
  makeProduct(26, 'Válvula de Globo', 'valvulas', 'nibco', 'Bronce', '1/2"'),
  makeProduct(27, 'Válvula de Globo', 'valvulas', 'nibco', 'Bronce', '3/4"'),
  makeProduct(28, 'Válvula de Globo', 'valvulas', 'nibco', 'Bronce', '1"'),
  makeProduct(29, 'Válvula Reguladora de Presión', 'valvulas', 'urrea', 'Bronce', '3/4"', { featured: true, new: true }),
  makeProduct(30, 'Válvula Reguladora de Presión', 'valvulas', 'urrea', 'Bronce', '1"'),

  // ── Conexiones (30) ──
  makeProduct(31, 'Codo 90° PVC', 'conexiones', 'amanco', 'PVC', '1/2"'),
  makeProduct(32, 'Codo 90° PVC', 'conexiones', 'amanco', 'PVC', '3/4"'),
  makeProduct(33, 'Codo 90° PVC', 'conexiones', 'amanco', 'PVC', '1"'),
  makeProduct(34, 'Codo 90° PVC', 'conexiones', 'amanco', 'PVC', '2"'),
  makeProduct(35, 'Codo 90° PVC', 'conexiones', 'pavco', 'PVC', '1/2"', { featured: true }),
  makeProduct(36, 'Codo 45° PVC', 'conexiones', 'amanco', 'PVC', '1/2"'),
  makeProduct(37, 'Codo 45° PVC', 'conexiones', 'amanco', 'PVC', '3/4"'),
  makeProduct(38, 'Codo 45° PVC', 'conexiones', 'amanco', 'PVC', '1"'),
  makeProduct(39, 'Tee PVC', 'conexiones', 'amanco', 'PVC', '1/2"'),
  makeProduct(40, 'Tee PVC', 'conexiones', 'amanco', 'PVC', '3/4"'),
  makeProduct(41, 'Tee PVC', 'conexiones', 'amanco', 'PVC', '1"'),
  makeProduct(42, 'Tee PVC', 'conexiones', 'amanco', 'PVC', '2"', { featured: true }),
  makeProduct(43, 'Unión Universal PVC', 'conexiones', 'pavco', 'PVC', '1/2"'),
  makeProduct(44, 'Unión Universal PVC', 'conexiones', 'pavco', 'PVC', '3/4"'),
  makeProduct(45, 'Unión Universal PVC', 'conexiones', 'pavco', 'PVC', '1"'),
  makeProduct(46, 'Reducción PVC', 'conexiones', 'amanco', 'PVC', '3/4" x 1/2"'),
  makeProduct(47, 'Reducción PVC', 'conexiones', 'amanco', 'PVC', '1" x 3/4"'),
  makeProduct(48, 'Reducción PVC', 'conexiones', 'amanco', 'PVC', '2" x 1"'),
  makeProduct(49, 'Codo 90° CPVC', 'conexiones', 'amanco', 'CPVC', '1/2"', { new: true }),
  makeProduct(50, 'Codo 90° CPVC', 'conexiones', 'amanco', 'CPVC', '3/4"'),
  makeProduct(51, 'Tee CPVC', 'conexiones', 'amanco', 'CPVC', '1/2"'),
  makeProduct(52, 'Tee CPVC', 'conexiones', 'amanco', 'CPVC', '3/4"'),
  makeProduct(53, 'Unión Galvanizada', 'conexiones', 'helbert', 'Hierro Galvanizado', '1/2"'),
  makeProduct(54, 'Unión Galvanizada', 'conexiones', 'helbert', 'Hierro Galvanizado', '3/4"'),
  makeProduct(55, 'Unión Galvanizada', 'conexiones', 'helbert', 'Hierro Galvanizado', '1"'),
  makeProduct(56, 'Codo 90° Galvanizado', 'conexiones', 'helbert', 'Hierro Galvanizado', '1/2"'),
  makeProduct(57, 'Codo 90° Galvanizado', 'conexiones', 'helbert', 'Hierro Galvanizado', '3/4"'),
  makeProduct(58, 'Codo 90° Galvanizado', 'conexiones', 'helbert', 'Hierro Galvanizado', '1"'),
  makeProduct(59, 'Niple Galvanizado', 'conexiones', 'helbert', 'Hierro Galvanizado', '1/2"'),
  makeProduct(60, 'Niple Galvanizado', 'conexiones', 'helbert', 'Hierro Galvanizado', '3/4"'),

  // ── Tuberías (20) ──
  makeProduct(61, 'Tubo PVC Presión', 'tuberias', 'amanco', 'PVC', '1/2"'),
  makeProduct(62, 'Tubo PVC Presión', 'tuberias', 'amanco', 'PVC', '3/4"'),
  makeProduct(63, 'Tubo PVC Presión', 'tuberias', 'amanco', 'PVC', '1"'),
  makeProduct(64, 'Tubo PVC Presión', 'tuberias', 'amanco', 'PVC', '2"', { featured: true }),
  makeProduct(65, 'Tubo PVC Presión', 'tuberias', 'pavco', 'PVC', '3"'),
  makeProduct(66, 'Tubo PVC Presión', 'tuberias', 'pavco', 'PVC', '4"'),
  makeProduct(67, 'Tubo CPVC', 'tuberias', 'amanco', 'CPVC', '1/2"'),
  makeProduct(68, 'Tubo CPVC', 'tuberias', 'amanco', 'CPVC', '3/4"'),
  makeProduct(69, 'Tubo CPVC', 'tuberias', 'amanco', 'CPVC', '1"', { new: true }),
  makeProduct(70, 'Tubo Galvanizado', 'tuberias', 'helbert', 'Hierro Galvanizado', '1/2"'),
  makeProduct(71, 'Tubo Galvanizado', 'tuberias', 'helbert', 'Hierro Galvanizado', '3/4"'),
  makeProduct(72, 'Tubo Galvanizado', 'tuberias', 'helbert', 'Hierro Galvanizado', '1"'),
  makeProduct(73, 'Tubo Galvanizado', 'tuberias', 'helbert', 'Hierro Galvanizado', '2"'),
  makeProduct(74, 'Tubo Polietileno', 'tuberias', 'pavco', 'Polietileno', '1/2"'),
  makeProduct(75, 'Tubo Polietileno', 'tuberias', 'pavco', 'Polietileno', '3/4"'),
  makeProduct(76, 'Tubo Polietileno', 'tuberias', 'pavco', 'Polietileno', '1"'),
  makeProduct(77, 'Tubo Cobre Tipo L', 'tuberias', 'nibco', 'Cobre', '1/2"', { featured: true }),
  makeProduct(78, 'Tubo Cobre Tipo L', 'tuberias', 'nibco', 'Cobre', '3/4"'),
  makeProduct(79, 'Tubo PPR', 'tuberias', 'amanco', 'PPR', '1/2"', { new: true }),
  makeProduct(80, 'Tubo PPR', 'tuberias', 'amanco', 'PPR', '3/4"'),

  // ── Accesorios (20) ──
  makeProduct(81, 'Cinta Teflón', 'accesorios', 'truper', 'Polietileno', '1/2"'),
  makeProduct(82, 'Cinta Teflón Industrial', 'accesorios', 'truper', 'Polietileno', '3/4"', { featured: true }),
  makeProduct(83, 'Pegamento PVC', 'accesorios', 'amanco', 'PVC', '250ml', { specs: { Contenido: '250 ml', Tipo: 'Cemento solvente', Uso: 'PVC presión', 'Tiempo de secado': '24 horas' }}),
  makeProduct(84, 'Pegamento PVC', 'accesorios', 'amanco', 'PVC', '500ml', { specs: { Contenido: '500 ml', Tipo: 'Cemento solvente', Uso: 'PVC presión', 'Tiempo de secado': '24 horas' }}),
  makeProduct(85, 'Pegamento CPVC', 'accesorios', 'amanco', 'CPVC', '250ml'),
  makeProduct(86, 'Llave Stillson', 'accesorios', 'truper', 'Acero al Carbón', '12"', { specs: { Largo: '12"', Material: 'Acero al carbón', 'Apertura máx.': '1-1/2"', Tipo: 'Stillson' }}),
  makeProduct(87, 'Llave Stillson', 'accesorios', 'truper', 'Acero al Carbón', '18"'),
  makeProduct(88, 'Llave Stillson', 'accesorios', 'truper', 'Acero al Carbón', '24"'),
  makeProduct(89, 'Abrazadera de Acero', 'accesorios', 'helbert', 'Acero Inoxidable', '1/2"'),
  makeProduct(90, 'Abrazadera de Acero', 'accesorios', 'helbert', 'Acero Inoxidable', '3/4"'),
  makeProduct(91, 'Abrazadera de Acero', 'accesorios', 'helbert', 'Acero Inoxidable', '1"'),
  makeProduct(92, 'Abrazadera de Acero', 'accesorios', 'helbert', 'Acero Inoxidable', '2"'),
  makeProduct(93, 'Empaque de Hule', 'accesorios', 'truper', 'Polietileno', '1/2"'),
  makeProduct(94, 'Empaque de Hule', 'accesorios', 'truper', 'Polietileno', '3/4"'),
  makeProduct(95, 'Soporte para Tubo', 'accesorios', 'helbert', 'Hierro Galvanizado', '1/2"'),
  makeProduct(96, 'Soporte para Tubo', 'accesorios', 'helbert', 'Hierro Galvanizado', '3/4"'),
  makeProduct(97, 'Soporte para Tubo', 'accesorios', 'helbert', 'Hierro Galvanizado', '1"'),
  makeProduct(98, 'Manómetro', 'accesorios', 'fmc', 'Acero Inoxidable', '2-1/2"', { featured: true, new: true, specs: { Diámetro: '2-1/2"', Rango: '0-200 PSI', Conexión: '1/4" NPT', Precisión: '±1.5%' }}),
  makeProduct(99, 'Termómetro Bimetálico', 'accesorios', 'fmc', 'Acero Inoxidable', '3"', { new: true }),
  makeProduct(100, 'Llave de Paso Angular', 'accesorios', 'urrea', 'Bronce', '1/2"'),

  // ── Bombas (10) ──
  makeProduct(101, 'Bomba Centrífuga 0.5HP', 'bombas', 'truper', 'Acero Inoxidable', '1"', { featured: true, specs: { Potencia: '0.5 HP', 'Flujo máx.': '60 L/min', 'Altura máx.': '35 m', Voltaje: '127V', Succión: '1"' }}),
  makeProduct(102, 'Bomba Centrífuga 1HP', 'bombas', 'truper', 'Acero Inoxidable', '1"', { specs: { Potencia: '1 HP', 'Flujo máx.': '100 L/min', 'Altura máx.': '45 m', Voltaje: '127V', Succión: '1"' }}),
  makeProduct(103, 'Bomba Centrífuga 1.5HP', 'bombas', 'truper', 'Acero Inoxidable', '1-1/2"'),
  makeProduct(104, 'Bomba Sumergible', 'bombas', 'truper', 'Acero Inoxidable', '1"', { new: true }),
  makeProduct(105, 'Bomba Sumergible', 'bombas', 'truper', 'Acero Inoxidable', '1-1/2"'),
  makeProduct(106, 'Bomba Periférica 0.5HP', 'bombas', 'urrea', 'Acero al Carbón', '1"'),
  makeProduct(107, 'Bomba Periférica 1HP', 'bombas', 'urrea', 'Acero al Carbón', '1"'),
  makeProduct(108, 'Bomba Presurizadora', 'bombas', 'rotoplas', 'Acero Inoxidable', '3/4"', { featured: true }),
  makeProduct(109, 'Hidroneumático 20L', 'bombas', 'rotoplas', 'Acero al Carbón', '1"'),
  makeProduct(110, 'Hidroneumático 50L', 'bombas', 'rotoplas', 'Acero al Carbón', '1"'),

  // ── Filtros (10) ──
  makeProduct(111, 'Filtro de Sedimentos 10"', 'filtros', 'rotoplas', 'Polietileno', '3/4"', { featured: true }),
  makeProduct(112, 'Filtro de Sedimentos 20"', 'filtros', 'rotoplas', 'Polietileno', '1"'),
  makeProduct(113, 'Filtro de Carbón Activado', 'filtros', 'rotoplas', 'Polietileno', '3/4"'),
  makeProduct(114, 'Portafiltro 10"', 'filtros', 'rotoplas', 'Polietileno', '3/4"'),
  makeProduct(115, 'Portafiltro 20"', 'filtros', 'rotoplas', 'Polietileno', '1"'),
  makeProduct(116, 'Filtro Y de Bronce', 'filtros', 'nibco', 'Bronce', '1/2"', { new: true }),
  makeProduct(117, 'Filtro Y de Bronce', 'filtros', 'nibco', 'Bronce', '3/4"'),
  makeProduct(118, 'Filtro Y de Bronce', 'filtros', 'nibco', 'Bronce', '1"'),
  makeProduct(119, 'Sistema de Filtración Triple', 'filtros', 'rotoplas', 'Polietileno', '3/4"', { featured: true, specs: { Etapas: '3', 'Capacidad filtrado': '10,000 litros', Conexión: '3/4"', Incluye: 'Cartuchos sedimento + carbón + pulidora' }}),
  makeProduct(120, 'Cartucho de Repuesto', 'filtros', 'rotoplas', 'Polietileno', '10"'),
];

// Update category product counts
categories.forEach(cat => {
  cat.productCount = products.filter(p => p.categoryId === cat.id).length;
});

// ── Helper functions ──
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.new);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, limit);
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find(b => b.id === id);
}

export function getUniqueMaterials(): string[] {
  return [...new Set(products.map(p => p.material))].sort();
}

export function getUniqueSizes(): string[] {
  return [...new Set(products.map(p => p.size))].sort();
}
