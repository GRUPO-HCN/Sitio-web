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
    description: 'Válvulas mariposa, cuchilla, reductoras de presión, llaves de paso y válvulas de aire para control de flujo en instalaciones industriales.',
    icon: '🔧',
    productCount: 0,
  },
  {
    id: 'conexiones',
    slug: 'conexiones',
    name: 'Conexiones',
    description: 'Codos, tees, juntas flexibles, acoples y adaptadores para todo tipo de tuberías y sistemas de conducción.',
    icon: '🔗',
    productCount: 0,
  },
  {
    id: 'bridas',
    slug: 'bridas',
    name: 'Bridas',
    description: 'Bridas de acero inoxidable, acero al carbono, hierro dúctil y PVC en diversas especificaciones y normas.',
    icon: '⚙️',
    productCount: 0,
  },
  {
    id: 'filtros',
    slug: 'filtros',
    name: 'Filtros y Canastillas',
    description: 'Filtros tipo Y, canastillas inoxidables y sistemas de filtración bridados para uso industrial.',
    icon: '🔬',
    productCount: 0,
  },
  {
    id: 'medidores',
    slug: 'medidores',
    name: 'Medidores',
    description: 'Medidores de agua tipo Wolman bridados para medición de caudal en redes de distribución.',
    icon: '📏',
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
  'Hierro Dúctil',
  'Acero Inoxidable',
  'Acero al Carbón',
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
      img('placeholder-1.svg'),
      img('placeholder-2.svg'),
      img('placeholder-3.svg'),
    ],
    featured: opts.featured ?? false,
    new: opts.new ?? false,
    sku: `HCN-${String(id).padStart(4, '0')}`,
  };
}

// ── Image path helper (includes base URL for GitHub Pages) ──
const base = import.meta.env.BASE_URL ?? '/Sitio-web/';
const img = (filename: string) => `${base}images/products/${filename}`;

// ── Products ──
export const products: Product[] = [
  // ── Válvulas (8) ──
  makeProduct(1, 'Válvula Mariposa con Actuador Neumático', 'valvulas', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    featured: true,
    images: [img('valvula-mariposa-actuador-neumatico.png')],
    description: 'Válvula mariposa tipo wafer con actuador neumático de doble efecto. Cuerpo en hierro dúctil con disco de acero inoxidable y asiento de EPDM. Ideal para automatización de procesos industriales y control remoto de flujo.',
    specs: { Material: 'Hierro Dúctil / Disco Inox', Tipo: 'Wafer con actuador neumático', Presión: 'PN10 / PN16', Disco: 'Acero Inoxidable 304', Asiento: 'EPDM', Norma: 'ANSI / ISO 5211' },
  }),
  makeProduct(2, 'Válvula Mariposa con Palanca', 'valvulas', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    featured: true,
    images: [img('valvula-mariposa-palanca.png')],
    description: 'Válvula mariposa tipo wafer con palanca de accionamiento manual. Cuerpo de hierro dúctil con disco de acero inoxidable y asiento de EPDM. Diseño compacto para instalación entre bridas ANSI 150.',
    specs: { Material: 'Hierro Dúctil / Disco Inox', Tipo: 'Wafer con palanca', Presión: 'ANSI 150 LBS', Disco: 'Acero Inoxidable 304', Asiento: 'EPDM', Norma: 'ANSI B16.5' },
  }),
  makeProduct(3, 'Válvula Tipo Cuchilla en HD', 'valvulas', 'fmc', 'Hierro Dúctil', '2" - 24"', {
    featured: true, new: true,
    images: [img('valvula-tipo-cuchilla-hd.png')],
    description: 'Válvula de compuerta tipo cuchilla en hierro dúctil con volante de operación manual. Diseñada para aplicaciones de corte y seccionamiento en líneas de agua, aguas residuales y lodos. Cuchilla en acero inoxidable.',
    specs: { Material: 'Hierro Dúctil', Cuchilla: 'Acero Inoxidable', Presión: 'PN10 / PN16', Operación: 'Volante manual', Conexión: 'Bridada', Norma: 'DIN / ANSI' },
  }),
  makeProduct(4, 'Válvula Reductora de Presión Inox Bridado', 'valvulas', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    featured: true, new: true,
    images: [img('valvula-reductora-presion-inox.png')],
    description: 'Válvula reductora de presión con cuerpo de hierro dúctil y componentes internos de acero inoxidable. Incluye dos manómetros para monitoreo de presión de entrada y salida. Conexión bridada para redes de distribución de agua.',
    specs: { Material: 'Hierro Dúctil / Inox', Tipo: 'Reductora de presión', Presión: 'PN10 / PN16', Manómetros: 'Incluidos (entrada y salida)', Conexión: 'Bridada', Norma: 'EN 1567 / ANSI' },
  }),
  makeProduct(5, 'Válvula de Aire Triple Efecto PVC', 'valvulas', 'fmc', 'PVC', '2" - 4"', {
    images: [img('valvula-aire-triple-efecto-pvc.png')],
    description: 'Válvula de aire de triple efecto en PVC para evacuación y admisión de aire en tuberías a presión. Funciones: purgado de grandes volúmenes, purgado de pequeños volúmenes y admisión de aire ante vacío. Conexión roscada.',
    specs: { Material: 'PVC reforzado', Tipo: 'Triple efecto', Funciones: 'Purgado + admisión + cinético', Presión: 'PN10 / PN16', Conexión: 'Roscada NPT', Norma: 'AWWA C512' },
  }),
  makeProduct(6, 'Válvula de Aire Doble Efecto Roscada', 'valvulas', 'fmc', 'Hierro Dúctil', '1" - 4"', {
    images: [img('valvula-aire-doble-efecto-roscada.png')],
    description: 'Válvula de aire de doble efecto en hierro dúctil con conexión roscada. Permite la evacuación de aire durante el llenado de la tubería y la admisión de aire durante el vaciado. Acabado epóxico interior y exterior.',
    specs: { Material: 'Hierro Dúctil', Tipo: 'Doble efecto', Presión: 'PN10 / PN16', Acabado: 'Epóxico azul', Conexión: 'Roscada NPT', Norma: 'AWWA C512' },
  }),
  makeProduct(7, 'Llave de Paso Roscada PVC ERA', 'valvulas', 'amanco', 'PVC', '1/2" - 4"', {
    images: [img('llave-paso-roscada-pvc.png')],
    description: 'Llave de paso de bola en PVC marca ERA con conexión roscada. Cuerpo compacto con manija de operación tipo palanca. Ideal para instalaciones de agua potable y riego. Resistente a químicos y corrosión.',
    specs: { Material: 'PVC', Marca: 'ERA', Tipo: 'Bola roscada', Presión: 'PN16', Manija: 'Palanca', Norma: 'NSF / ASTM' },
  }),
  makeProduct(8, 'Llave de Paso Doble Universal PVC ERA', 'valvulas', 'amanco', 'PVC', '1/2" - 4"', {
    new: true,
    images: [img('llave-paso-doble-universal-pvc.png')],
    description: 'Llave de paso de bola doble universal en PVC marca ERA. Conexión tipo unión universal en ambos extremos para fácil instalación y desmontaje. Manija tipo palanca roja para operación rápida.',
    specs: { Material: 'PVC', Marca: 'ERA', Tipo: 'Bola doble universal', Presión: 'PN16', Conexión: 'Unión universal', Norma: 'NSF / ASTM' },
  }),

  // ── Conexiones (7) ──
  makeProduct(9, 'Codo SCH40 Acero al Carbono', 'conexiones', 'helbert', 'Acero al Carbón', '1/2" - 12"', {
    featured: true,
    images: [img('codo-sch40-acero-carbono.png')],
    description: 'Codo 90° Schedule 40 en acero al carbono para soldadura a tope. Fabricado bajo norma ASTM A234 WPB. Apto para sistemas de alta presión y temperatura en aplicaciones industriales.',
    specs: { Material: 'Acero al Carbono ASTM A234 WPB', Tipo: 'Codo 90° soldable', Schedule: 'SCH40', Conexión: 'Soldable (BW)', Norma: 'ASTM A234 / ANSI B16.9' },
  }),
  makeProduct(10, 'Codo Bridado x 45° HD', 'conexiones', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    featured: true,
    images: [img('codo-bridado-45-hd.png')],
    description: 'Codo bridado a 45° en hierro dúctil con acabado epóxico azul. Bridas perforadas según norma ISO. Ideal para cambios de dirección en redes de distribución de agua potable y sistemas de bombeo.',
    specs: { Material: 'Hierro Dúctil', Ángulo: '45°', Conexión: 'Bridada ISO', Presión: 'PN10 / PN16', Acabado: 'Epóxico azul', Norma: 'ISO 2531 / EN 545' },
  }),
  makeProduct(11, 'Tee Luflex Embone', 'conexiones', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    images: [img('tee-luflex-embone.png')],
    description: 'Tee de hierro dúctil sistema Luflex con conexión tipo embone (enchufe). Acabado epóxico azul para protección anticorrosiva. Diseñada para derivaciones en redes de agua potable con junta elástica.',
    specs: { Material: 'Hierro Dúctil', Sistema: 'Luflex embone', Presión: 'PN16', Acabado: 'Epóxico azul', Junta: 'Elástica incluida', Norma: 'ISO 2531 / EN 545' },
  }),
  makeProduct(12, 'Junta Flexible ANSI Bridas de Acero al Carbono', 'conexiones', 'fmc', 'Acero al Carbón', '2" - 12"', {
    featured: true, new: true,
    images: [img('junta-flexible-ansi-acero-carbono.png')],
    description: 'Junta de expansión flexible con cuerpo de caucho EPDM y bridas de acero al carbono. Absorbe vibraciones, movimientos axiales y desalineamientos en tuberías. Clasificación DN80 PN16.',
    specs: { Material: 'Caucho EPDM + Bridas Acero al Carbono', Tipo: 'Junta flexible esférica', Presión: 'PN16', Movimiento: 'Axial, lateral y angular', Bridas: 'ANSI B16.5 / DIN', Norma: 'ANSI / DIN' },
  }),
  makeProduct(13, 'Adaptador Rápido para HDPE PN16', 'conexiones', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    images: [img('adaptador-rapido-hdpe-pn16.png')],
    description: 'Adaptador rápido de hierro dúctil para conexión de tuberías de polietileno de alta densidad (HDPE). Sistema de agarre mecánico con anillo de bronce para sello hermético. Presión nominal PN16.',
    specs: { Material: 'Hierro Dúctil', 'Para tubería': 'HDPE', Presión: 'PN16', Sello: 'Anillo de bronce + O-ring', Acabado: 'Epóxico azul', Norma: 'ISO 2531' },
  }),
  makeProduct(14, 'Acople Dresser Gran Rango', 'conexiones', 'fmc', 'Hierro Dúctil', '2" - 24"', {
    new: true,
    images: [img('acople-dreser-gran-rango.png')],
    description: 'Acople tipo Dresser de gran rango en hierro dúctil para unión de tuberías de distintos materiales y diámetros. Permite compensar desalineamientos y facilita reparaciones sin cortar la tubería.',
    specs: { Material: 'Hierro Dúctil', Tipo: 'Dresser gran rango', Presión: 'PN10 / PN16', Pernos: 'Acero galvanizado', Empaque: 'EPDM', Norma: 'AWWA C219' },
  }),
  makeProduct(15, 'Adaptador Brida Universal', 'conexiones', 'fmc', 'Hierro Dúctil', '2" - 24"', {
    images: [img('adaptador-brida-universal.png')],
    description: 'Adaptador de brida universal en hierro dúctil con pernos de sujeción. Permite conectar tuberías lisas de distintos materiales a sistemas bridados. Diseño versátil con amplio rango de agarre.',
    specs: { Material: 'Hierro Dúctil', Tipo: 'Brida universal autoblocante', Presión: 'PN10 / PN16', Pernos: 'Acero galvanizado', Empaque: 'EPDM / NBR', Norma: 'ISO 2531 / EN 14525' },
  }),

  // ── Bridas (3) ──
  makeProduct(16, 'Brida Inoxidable Slip On ASTM 150 LBS', 'bridas', 'helbert', 'Acero Inoxidable', '1/2" - 12"', {
    featured: true,
    images: [img('brida-inoxidable-slip-on.png')],
    description: 'Brida slip on (deslizable) en acero inoxidable ASTM A182 F304/304L. Clasificación 150 LBS con acabado mecanizado. Para conexiones soldables en sistemas que requieren resistencia a la corrosión.',
    specs: { Material: 'Acero Inoxidable TP304/304L', Tipo: 'Slip On', Clase: '150 LBS', Norma: 'ASTM A182 / ANSI B16.5', Cara: 'Raised Face (RF)', Perforación: 'ANSI B16.5' },
  }),
  makeProduct(17, 'Brida ISO Soldable Acero PN16', 'bridas', 'helbert', 'Acero al Carbón', '2" - 12"', {
    images: [img('brida-iso-soldable-acero-pn16.png')],
    description: 'Brida soldable en acero al carbono con norma ISO PN16. Cara plana con acabado SAE para sello con empaque. Fabricada bajo estándares DIN para sistemas de distribución de agua y aplicaciones industriales.',
    specs: { Material: 'Acero al Carbono SAE 1010', Tipo: 'Soldable (SORF)', Presión: 'PN16', Norma: 'DIN 2576 / ISO', Cara: 'Plana (FF)', Perforación: 'DIN' },
  }),
  makeProduct(18, 'Brida Loca SP PVC ERA', 'bridas', 'amanco', 'PVC', '2" - 6"', {
    new: true,
    images: [img('brida-loca-sp-pvc.png')],
    description: 'Brida loca (Van Stone) en PVC marca ERA con conexión SP (socket). Diseño de dos piezas: anillo de respaldo y cuello soldable. Ideal para instalaciones de PVC donde se requiere conexión bridada desmontable.',
    specs: { Material: 'PVC', Marca: 'ERA', Tipo: 'Brida loca (Van Stone)', Presión: 'PN10', Conexión: 'Socket (SP)', Norma: 'ASTM D2467 / NSF' },
  }),

  // ── Filtros y Canastillas (2) ──
  makeProduct(19, 'Filtro Tipo Yee Bridado HD', 'filtros', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    featured: true,
    images: [img('filtro-tipo-yee-bridado-hd.png')],
    description: 'Filtro tipo Y en hierro dúctil con conexión bridada y tapa de inspección desmontable. Malla filtrante de acero inoxidable para retención de partículas sólidas. Acabado epóxico interior y exterior.',
    specs: { Material: 'Hierro Dúctil', Malla: 'Acero Inoxidable', Tipo: 'Y bridado', Presión: 'PN10 / PN16', Acabado: 'Epóxico azul', Norma: 'DIN / ISO 2531' },
  }),
  makeProduct(20, 'Canastilla Inoxidable Bridado', 'filtros', 'fmc', 'Acero Inoxidable', '2" - 12"', {
    new: true,
    images: [img('canastilla-inoxidable-bridado.png')],
    description: 'Canastilla de succión en acero inoxidable perforado con base bridada en hierro dúctil. Diseñada para proteger bombas e impedir el ingreso de sólidos. Instalación en extremo de succión de tuberías.',
    specs: { Material: 'Acero Inoxidable perforado', Base: 'Hierro Dúctil bridada', Tipo: 'Canastilla de succión', Presión: 'PN10 / PN16', Acabado: 'Base epóxica azul', Norma: 'ISO 2531' },
  }),

  // ── Medidores (1) ──
  makeProduct(21, 'Medidor Tipo Woltman Bridado', 'medidores', 'fmc', 'Hierro Dúctil', '2" - 12"', {
    featured: true, new: true,
    images: [img('medidor-tipo-wolman-bridado.png')],
    description: 'Medidor de agua tipo Woltman con cuerpo de hierro dúctil y conexión bridada. Diseñado para medición de grandes caudales en redes de distribución de agua potable. Registro seco con totalizador protegido.',
    specs: { Material: 'Hierro Dúctil', Tipo: 'Woltman horizontal', Conexión: 'Bridada', Presión: 'PN16', Registro: 'Seco, totalizador', Norma: 'ISO 4064 / AWWA' },
  }),
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
