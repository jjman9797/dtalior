import { whatsappBuy } from './site';

export const sizeOptions = ['S', 'M', 'L', 'XL', '2X', '3X', '4X', 'Made to measure'] as const;
export type SizeOption = (typeof sizeOptions)[number];
export type Sleeve = 'short' | 'long';

const rtwSizes: SizeOption[] = ['S', 'M', 'L', 'XL', '2X', '3X', '4X'];
const womensSizes: SizeOption[] = ['S', 'M', 'L', 'XL', '2X', '3X', 'Made to measure'];
const kaftanSizes: SizeOption[] = ['M', 'L', 'XL', '2X', '3X', '4X', 'Made to measure'];
const atelierSizes: SizeOption[] = ['S', 'M', 'L', 'XL', '2X', '3X', '4X', 'Made to measure'];
const ceremonialSizes: SizeOption[] = ['L', 'XL', '2X', '3X', '4X', 'Made to measure'];
const suitSizes: SizeOption[] = ['Made to measure'];

export const colourSwatches = [
  { id: 'ivory', label: 'Ivory', hex: '#efe9df' },
  { id: 'white', label: 'White', hex: '#ffffff' },
  { id: 'sand', label: 'Sand', hex: '#cbb392' },
  { id: 'gold', label: 'Gold', hex: '#b5903f' },
  { id: 'copper', label: 'Copper', hex: '#a65a2e' },
  { id: 'brown', label: 'Brown', hex: '#6b4a33' },
  { id: 'burgundy', label: 'Burgundy', hex: '#5e1f2a' },
  { id: 'purple', label: 'Purple', hex: '#6b4a8a' },
  { id: 'pink', label: 'Pink', hex: '#e8c4c8' },
  { id: 'blue', label: 'Blue', hex: '#2f5fa8' },
  { id: 'navy', label: 'Navy', hex: '#1f2d4d' },
  { id: 'green', label: 'Green', hex: '#14563f' },
  { id: 'black', label: 'Black', hex: '#1a1a1a' },
] as const;

export type ColourId = (typeof colourSwatches)[number]['id'];

export const colourById = Object.fromEntries(colourSwatches.map((colour) => [colour.id, colour])) as Record<
  ColourId,
  (typeof colourSwatches)[number]
>;

export type ShopCategory = {
  id: string;
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
};

export type ShopLook = {
  id: string;
  category: string;
  title: string;
  alt: string;
  image: string;
  colors: ColourId[];
  sleeve: Sleeve;
  sizes: SizeOption[];
  description: string;
  buy: string;
  objectPosition?: string;
};

export const shopCategories: ShopCategory[] = [
  {
    id: 'kaftans',
    title: 'Kaftans',
    eyebrow: '01',
    intro: 'Handmade kaftans, cut for presence, comfort and a precise personal fit.',
    image: '/images/looks/kaftan-brown.jpg',
  },
  {
    id: 'agbadas',
    title: 'Agbadas',
    eyebrow: '02',
    intro: 'Ceremonial dressing in cloth, embroidery and presence. Made to commission.',
    image: '/images/looks/agbada-ivory.jpg',
  },
  {
    id: 'womens',
    title: 'Women’s wear',
    eyebrow: '03',
    intro: 'Tailored two-pieces and contemporary sets from the Accra studio.',
    image: '/images/looks/womens-white.jpg',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready to wear',
    eyebrow: '04',
    intro: 'Shirts, trousers and complete looks you can request as seen.',
    image: '/images/looks/ready-to-wear-print.jpg',
  },
  {
    id: 'suits',
    title: 'Suits',
    eyebrow: '05',
    intro: 'Suits and political suits, made to your measurements for the occasion ahead.',
    image: '/images/navy-shirt-set.jpg',
  },
];

export const shopLooks: ShopLook[] = [
  {
    id: 'founder-kaftan',
    category: 'kaftans',
    title: 'Purple embroidered kaftan',
    alt: 'D’TAILOR founder wearing a purple embroidered kaftan and matching trousers',
    image: '/images/looks/founder-purple.jpg',
    colors: ['purple'],
    sleeve: 'short',
    sizes: kaftanSizes,
    description: 'A purple embroidered kaftan set with matching trousers. Requested as seen, or remade in another cloth.',
    buy: whatsappBuy('Purple embroidered kaftan'),
    objectPosition: '50% 12%',
  },
  {
    id: 'kaftan-brown',
    category: 'kaftans',
    title: 'Brown pinstripe kaftan',
    alt: 'Man wearing a brown pinstripe kaftan set with gold shoulder detail',
    image: '/images/looks/kaftan-brown.jpg',
    colors: ['brown', 'gold'],
    sleeve: 'long',
    sizes: kaftanSizes,
    description: 'A brown pinstripe kaftan with gold shoulder detail. Long sleeve, cut as a complete set.',
    buy: whatsappBuy('Brown pinstripe kaftan'),
    objectPosition: '50% 12%',
  },
  {
    id: 'kaftan-blue',
    category: 'kaftans',
    title: 'Blue patterned kaftan',
    alt: 'Man wearing a blue patterned kaftan set with contrast trim',
    image: '/images/looks/kaftan-blue-full.jpg',
    colors: ['blue'],
    sleeve: 'long',
    sizes: kaftanSizes,
    description: 'A blue patterned kaftan set with contrast trim. Long sleeve, made for presence.',
    buy: whatsappBuy('Blue patterned kaftan'),
    objectPosition: '50% 10%',
  },
  {
    id: 'kaftan-white',
    category: 'kaftans',
    title: 'Ivory long kaftan',
    alt: 'Man wearing a long ivory kaftan with buttoned placket and matching trousers',
    image: '/images/looks/kaftan-white.jpg',
    colors: ['ivory'],
    sleeve: 'long',
    sizes: kaftanSizes,
    description: 'A long ivory kaftan with a buttoned placket and matching trousers.',
    buy: whatsappBuy('Ivory long kaftan'),
    objectPosition: '50% 10%',
  },
  {
    id: 'atelier-sky',
    category: 'kaftans',
    title: 'Sky kaftan with navy panel',
    alt: 'Light blue short-sleeve kaftan with a navy chest panel, displayed in the D’TAILOR atelier',
    image: '/images/looks/atelier-sky.jpg',
    colors: ['blue', 'navy'],
    sleeve: 'short',
    sizes: atelierSizes,
    description: 'Short-sleeve sky kaftan with a navy chest panel, shown in the Accra atelier.',
    buy: whatsappBuy('Sky kaftan with navy panel'),
    objectPosition: '50% 20%',
  },
  {
    id: 'atelier-sand',
    category: 'kaftans',
    title: 'Sand embroidered kaftan',
    alt: 'Sand-coloured kaftan with dark embroidery, displayed in the D’TAILOR atelier',
    image: '/images/looks/atelier-sand.jpg',
    colors: ['sand'],
    sleeve: 'short',
    sizes: atelierSizes,
    description: 'A sand-coloured kaftan with dark embroidery, displayed in the house.',
    buy: whatsappBuy('Sand embroidered kaftan'),
    objectPosition: '50% 18%',
  },
  {
    id: 'atelier-burgundy',
    category: 'kaftans',
    title: 'Burgundy embroidered kaftan',
    alt: 'Burgundy kaftan with gold embroidery, displayed in the D’TAILOR atelier',
    image: '/images/looks/atelier-burgundy.jpg',
    colors: ['burgundy', 'gold'],
    sleeve: 'short',
    sizes: atelierSizes,
    description: 'Burgundy cloth with gold embroidery. Short sleeve, made to your size.',
    buy: whatsappBuy('Burgundy embroidered kaftan'),
    objectPosition: '50% 18%',
  },
  {
    id: 'agbada-emerald',
    category: 'agbadas',
    title: 'Emerald ceremonial agbada',
    alt: 'Man wearing an emerald green embroidered agbada with matching cap and beads',
    image: '/images/looks/agbada-emerald.jpg',
    colors: ['green'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'An emerald ceremonial agbada with embroidery, cap and beads. Made to commission.',
    buy: whatsappBuy('Emerald ceremonial agbada'),
    objectPosition: '50% 10%',
  },
  {
    id: 'agbada-ivory',
    category: 'agbadas',
    title: 'Ivory and gold agbada',
    alt: 'Man wearing an ivory agbada with gold embroidery, coral beads, red cap and staff',
    image: '/images/looks/agbada-ivory.jpg',
    colors: ['ivory', 'gold'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'Ivory cloth, gold embroidery, coral beads. A ceremonial look from the house.',
    buy: whatsappBuy('Ivory and gold agbada'),
    objectPosition: '50% 8%',
  },
  {
    id: 'agbada-velvet',
    category: 'agbadas',
    title: 'Burgundy velvet agbada',
    alt: 'Man wearing a burgundy velvet agbada with beaded embroidery and coral beads',
    image: '/images/looks/agbada-velvet.jpg',
    colors: ['burgundy'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'Burgundy velvet with beaded embroidery. Made for ceremony.',
    buy: whatsappBuy('Burgundy velvet agbada'),
    objectPosition: '50% 10%',
  },
  {
    id: 'agbada-gold',
    category: 'agbadas',
    title: 'Black and gold agbada',
    alt: 'Man wearing a black and gold patterned agbada with staff',
    image: '/images/looks/agbada-gold.jpg',
    colors: ['black', 'gold'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'Black and gold patterned agbada, cut with presence.',
    buy: whatsappBuy('Black and gold agbada'),
    objectPosition: '50% 10%',
  },
  {
    id: 'agbada-black',
    category: 'agbadas',
    title: 'Black embroidered agbada',
    alt: 'Man wearing a black embroidered agbada with beads and staff',
    image: '/images/looks/agbada-black.jpg',
    colors: ['black'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'A black embroidered agbada with beads. Made to your measurements.',
    buy: whatsappBuy('Black embroidered agbada'),
    objectPosition: '50% 10%',
  },
  {
    id: 'agbada-copper',
    category: 'agbadas',
    title: 'Copper patterned agbada',
    alt: 'Man wearing a copper and brown patterned agbada with beads and staff',
    image: '/images/looks/agbada-copper.jpg',
    colors: ['copper', 'brown'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'Copper and brown pattern, cut as a full ceremonial set.',
    buy: whatsappBuy('Copper patterned agbada'),
    objectPosition: '50% 10%',
  },
  {
    id: 'agbada-cobalt',
    category: 'agbadas',
    title: 'Cobalt striped agbada',
    alt: 'Man wearing a cobalt and navy striped agbada with embroidered panel and staff',
    image: '/images/looks/agbada-cobalt.jpg',
    colors: ['blue', 'navy'],
    sleeve: 'long',
    sizes: ceremonialSizes,
    description: 'Cobalt and navy stripes with an embroidered panel.',
    buy: whatsappBuy('Cobalt striped agbada'),
    objectPosition: '50% 10%',
  },
  {
    id: 'womens-pink',
    category: 'womens',
    title: 'Blush tailored two-piece',
    alt: 'Woman wearing a pink buttoned two-piece with matching trousers',
    image: '/images/looks/womens-pink.jpg',
    colors: ['pink'],
    sleeve: 'short',
    sizes: womensSizes,
    description: 'A blush buttoned two-piece with matching trousers.',
    buy: whatsappBuy('Blush tailored two-piece'),
    objectPosition: '50% 12%',
  },
  {
    id: 'womens-print',
    category: 'womens',
    title: 'Blue print two-piece',
    alt: 'Woman wearing a bright blue geometric print shirt and matching trousers',
    image: '/images/looks/womens-print.jpg',
    colors: ['blue'],
    sleeve: 'short',
    sizes: womensSizes,
    description: 'Bright blue geometric print, cut as a matching set.',
    buy: whatsappBuy('Blue print two-piece'),
    objectPosition: '50% 12%',
  },
  {
    id: 'womens-white',
    category: 'womens',
    title: 'Ivory set with gold neckline',
    alt: 'Woman wearing an ivory short-sleeve set with gold neckline embroidery',
    image: '/images/looks/womens-white.jpg',
    colors: ['ivory', 'gold'],
    sleeve: 'short',
    sizes: womensSizes,
    description: 'Ivory short-sleeve set with gold neckline embroidery.',
    buy: whatsappBuy('Ivory set with gold neckline'),
    objectPosition: '50% 12%',
  },
  {
    id: 'ready-print',
    category: 'ready-to-wear',
    title: 'Black and white print set',
    alt: 'Man wearing a short-sleeve black and white print shirt with matching trousers',
    image: '/images/looks/ready-to-wear-print.jpg',
    colors: ['black', 'white'],
    sleeve: 'short',
    sizes: rtwSizes,
    description: 'Short-sleeve black and white print shirt with matching trousers.',
    buy: whatsappBuy('Black and white print set'),
    objectPosition: '50% 10%',
  },
  {
    id: 'shirt-white',
    category: 'ready-to-wear',
    title: 'White tailored shirt look',
    alt: 'Man wearing a white tailored shirt with pink embroidered stripes and matching trousers',
    image: '/images/looks/shirt-white-event.jpg',
    colors: ['white', 'pink'],
    sleeve: 'long',
    sizes: rtwSizes,
    description: 'White long-sleeve shirt with pink embroidered stripes and matching trousers.',
    buy: whatsappBuy('White tailored shirt look'),
    objectPosition: '50% 10%',
  },
  {
    id: 'suit-bespoke',
    category: 'suits',
    title: 'Bespoke suit',
    alt: 'Navy tailored shirt and trousers displayed in the D’TAILOR atelier',
    image: '/images/navy-shirt-set.jpg',
    colors: ['navy', 'black', 'ivory'],
    sleeve: 'long',
    sizes: suitSizes,
    description: 'A suit made to your measurements. Message the house with the occasion, cloth and the image you want to carry. The photograph shows work from the Accra atelier.',
    buy: whatsappBuy('a bespoke suit'),
    objectPosition: '50% 20%',
  },
  {
    id: 'suit-political',
    category: 'suits',
    title: 'Political suit',
    alt: 'Fabric selection with D’TAILOR tags in the atelier',
    image: '/images/fabric-selection.jpg',
    colors: ['black', 'navy', 'ivory', 'brown'],
    sleeve: 'long',
    sizes: suitSizes,
    description: 'Political suits cut to your measurements. Cloth and colour are chosen with you before making begins.',
    buy: whatsappBuy('a political suit'),
    objectPosition: '50% 40%',
  },
];

export const collectionImages = [
  { src: '/images/looks/agbada-ivory.jpg', alt: 'Ivory and gold agbada', caption: 'Ivory and gold agbada', objectPosition: '50% 8%' },
  { src: '/images/looks/founder-purple.jpg', alt: 'Purple embroidered kaftan', caption: 'The house', objectPosition: '50% 12%' },
  { src: '/images/looks/kaftan-brown.jpg', alt: 'Brown pinstripe kaftan', caption: 'Brown pinstripe', objectPosition: '50% 12%' },
  { src: '/images/looks/agbada-emerald.jpg', alt: 'Emerald ceremonial agbada', caption: 'Emerald agbada', objectPosition: '50% 10%' },
  { src: '/images/looks/atelier-sky.jpg', alt: 'Sky kaftan in the Accra atelier', caption: 'The Accra atelier', objectPosition: '50% 20%' },
  { src: '/images/looks/womens-white.jpg', alt: 'Ivory women’s set', caption: 'Women’s wear', objectPosition: '50% 12%' },
  { src: '/images/looks/kaftan-blue-full.jpg', alt: 'Blue patterned kaftan', caption: 'Blue kaftan', objectPosition: '50% 10%' },
  { src: '/images/looks/agbada-velvet.jpg', alt: 'Burgundy velvet agbada', caption: 'Velvet agbada', objectPosition: '50% 10%' },
  { src: '/images/signature-kaftan.jpg', alt: 'Handmade kaftan in the atelier', caption: 'Handmade kaftan', objectPosition: '50% 18%' },
  { src: '/images/looks/womens-print.jpg', alt: 'Blue print two-piece', caption: 'Print set', objectPosition: '50% 12%' },
  { src: '/images/gold-collection.jpg', alt: 'Gold embroidered garments on dress forms', caption: 'Atelier forms', objectPosition: '50% 20%' },
  { src: '/images/looks/ready-to-wear-print.jpg', alt: 'Black and white print set', caption: 'Ready to wear', objectPosition: '50% 10%' },
  { src: '/images/looks/atelier-burgundy.jpg', alt: 'Burgundy embroidered kaftan', caption: 'Burgundy kaftan', objectPosition: '50% 18%' },
  { src: '/images/looks/agbada-cobalt.jpg', alt: 'Cobalt striped agbada', caption: 'Cobalt agbada', objectPosition: '50% 10%' },
  { src: '/images/navy-shirt-set.jpg', alt: 'Navy tailored set', caption: 'Tailoring', objectPosition: '50% 20%' },
  { src: '/images/looks/shirt-white-event.jpg', alt: 'White tailored shirt look', caption: 'Evening white', objectPosition: '50% 10%' },
];

export const looksByCategory = (id: string) => shopLooks.filter((look) => look.category === id);
export const lookById = (id: string) => shopLooks.find((look) => look.id === id);
export const categoryById = (id: string) => shopCategories.find((category) => category.id === id);

export const uniqueColors = (looks: ShopLook[]) =>
  [...new Set(looks.flatMap((look) => look.colors))];

export const uniqueSleeves = (looks: ShopLook[]) =>
  [...new Set(looks.map((look) => look.sleeve))];

export const productHref = (look: ShopLook) => `shop/${look.category}/${look.id}`;
export const categoryHref = (id: string) => `shop/${id}`;

export const colourLabel = (id: string) => colourById[id as ColourId]?.label ?? id;
export const sleeveLabel = (sleeve: Sleeve) => (sleeve === 'short' ? 'Short sleeve' : 'Long sleeve');
