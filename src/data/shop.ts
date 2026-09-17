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

export type ShopGroupId = 'mens' | 'womens' | 'kids' | 'accessories';

export type ShopCategory = {
  id: string;
  title: string;
  eyebrow: string;
  intro: string;
  image?: string;
  group: ShopGroupId;
  featured?: boolean;
  navTitle?: string;
  enquiryCards?: { title: string; href: string; text: string }[];
  related?: { title: string; href: string; text: string }[];
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

export const shopGroups: { id: ShopGroupId; title: string; intro: string }[] = [
  { id: 'mens', title: 'Men’s clothing', intro: 'Kaftans, agbadas, suits, shirts, trousers and making to measure.' },
  { id: 'womens', title: 'Women’s clothing', intro: 'Kaftans, bubu and straight gowns, shirts, trousers and custom-made outfits.' },
  { id: 'kids', title: 'Kids', intro: 'Kids’ kaftans, vest and trouser sets, and custom making.' },
  { id: 'accessories', title: 'Accessories', intro: 'Caps, cufflinks, traditional beads, palm slippers and styling.' },
];

export const shopCategories: ShopCategory[] = [
  {
    id: 'kaftans',
    title: 'Kaftans',
    eyebrow: '01',
    intro: 'Short sleeve and long sleeve kaftans, cut for presence, comfort and a precise personal fit.',
    image: '/images/looks/kaftan-brown.jpg',
    group: 'mens',
    featured: true,
  },
  {
    id: 'agbadas',
    title: 'Agbadas',
    eyebrow: '02',
    intro: 'Ceremonial 3-piece agbada sets in cloth, embroidery and presence. Made to commission.',
    image: '/images/looks/agbada-ivory.jpg',
    group: 'mens',
    featured: true,
  },
  {
    id: 'suits',
    title: 'Suits',
    eyebrow: '03',
    intro: 'Political suits and business or formal suits, made to your measurements. Tuxedos by enquiry.',
    image: '/images/navy-shirt-set.jpg',
    group: 'mens',
    featured: true,
    enquiryCards: [
      {
        title: 'Tuxedos',
        href: 'shop/tuxedos',
        text: 'Evening making, requested on WhatsApp. No tuxedo photograph is on the site yet.',
      },
    ],
  },
  {
    id: 'tuxedos',
    title: 'Tuxedos',
    eyebrow: '04',
    intro: 'Tuxedos made to your measurements for the occasion. Message the house with the date and the image you want to carry.',
    group: 'mens',
  },
  {
    id: 'safari',
    title: 'Safari sets',
    eyebrow: '05',
    intro: 'Safari sets made to your measurements. Message the house with cloth, colour and fit.',
    group: 'mens',
  },
  {
    id: 'shirts',
    title: 'Shirts',
    eyebrow: '06',
    intro: 'Formal, linen and African-inspired shirts. A photographed tailored shirt look also lives in ready to wear.',
    group: 'mens',
    related: [
      {
        title: 'White tailored shirt look',
        href: 'shop/ready-to-wear/shirt-white',
        text: 'Photographed in ready to wear. Request as seen, or as a starting point for a shirt.',
      },
    ],
  },
  {
    id: 'trousers',
    title: 'Trousers',
    eyebrow: '07',
    intro: 'Office, beltless, palazzo and regular trousers. Message the house with the cut you need.',
    group: 'mens',
  },
  {
    id: 'jackets',
    title: 'Jackets and vests',
    eyebrow: '08',
    intro: 'Jackets and vests made to your measurements. Cloth and colour are chosen with you.',
    group: 'mens',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready to wear',
    eyebrow: '09',
    intro: 'Complete looks you can request as seen, including shirts, trousers and sets.',
    image: '/images/looks/ready-to-wear-print.jpg',
    group: 'mens',
    featured: true,
  },
  {
    id: 'bespoke',
    title: 'Bespoke and custom-made',
    eyebrow: '10',
    intro: 'Custom-made outfits from an idea, a photograph, or a cloth. Kaftans, agbadas and suits can also be requested in those departments.',
    group: 'mens',
    related: [
      { title: 'Kaftans', href: 'shop/kaftans', text: 'Short sleeve and long sleeve kaftans.' },
      { title: 'Agbadas', href: 'shop/agbadas', text: '3-piece ceremonial sets.' },
      { title: 'Suits', href: 'shop/suits', text: 'Political and business or formal suits.' },
    ],
  },
  {
    id: 'womens',
    title: 'Women’s',
    navTitle: 'Women’s',
    eyebrow: '01',
    intro: 'Tailored two-pieces and contemporary sets from the Accra studio. Kaftans, bubu, shirts, trousers and custom making are listed beside these looks.',
    image: '/images/looks/womens-white.jpg',
    group: 'womens',
    featured: true,
    enquiryCards: [
      { title: 'Women’s kaftans', href: 'shop/womens-kaftans', text: 'Request a kaftan made to her measurements.' },
      { title: 'Bubu and straight gowns', href: 'shop/bubu', text: 'Request a gown. No gown photograph is on the site yet.' },
      { title: 'Shirts', href: 'shop/womens-shirts', text: 'Women’s shirts, made to measure or as discussed.' },
      { title: 'Trousers and palazzo', href: 'shop/womens-trousers', text: 'Trousers and palazzo trousers, requested on WhatsApp.' },
      { title: 'Custom-made outfits', href: 'shop/womens-custom', text: 'Bring an idea. The house will confirm cloth and making.' },
    ],
  },
  {
    id: 'womens-kaftans',
    title: 'Women’s kaftans',
    eyebrow: '02',
    intro: 'Women’s kaftans made to your measurements. Message the house with cloth, colour and the occasion.',
    group: 'womens',
  },
  {
    id: 'bubu',
    title: 'Bubu and straight gowns',
    eyebrow: '03',
    intro: 'Bubu and straight gowns, made to commission. No gown photograph is on the site yet.',
    group: 'womens',
  },
  {
    id: 'womens-shirts',
    title: 'Women’s shirts',
    eyebrow: '04',
    intro: 'Women’s shirts, requested as discussed with the house.',
    group: 'womens',
  },
  {
    id: 'womens-trousers',
    title: 'Women’s trousers',
    eyebrow: '05',
    intro: 'Trousers and palazzo trousers. Message the house with the cut you need.',
    group: 'womens',
  },
  {
    id: 'womens-custom',
    title: 'Women’s custom-made',
    eyebrow: '06',
    intro: 'Custom-made women’s outfits from an idea or a photograph.',
    group: 'womens',
  },
  {
    id: 'kids-kaftans',
    title: 'Kids’ kaftans',
    eyebrow: '01',
    intro: 'Kids’ kaftans, made to measurements. No children’s photographs are on the site.',
    group: 'kids',
  },
  {
    id: 'kids-sets',
    title: 'Kids’ vest and trouser sets',
    eyebrow: '02',
    intro: 'Vest and trouser sets for children, made to measurements.',
    group: 'kids',
  },
  {
    id: 'kids-custom',
    title: 'Kids’ custom',
    eyebrow: '03',
    intro: 'Custom children’s outfits. Message the house with age, occasion and the look you have in mind.',
    group: 'kids',
  },
  {
    id: 'caps',
    title: 'Caps',
    eyebrow: '01',
    intro: 'Plain and designed caps to complete a look. Message the house to request.',
    group: 'accessories',
  },
  {
    id: 'cufflinks',
    title: 'Cufflinks',
    eyebrow: '02',
    intro: 'Cufflinks as part of styling. Message the house to request.',
    group: 'accessories',
  },
  {
    id: 'beads',
    title: 'Traditional beads',
    eyebrow: '03',
    intro: 'Traditional beads for agbada. Message the house to complete a ceremonial set.',
    group: 'accessories',
  },
  {
    id: 'slippers',
    title: 'Palm slippers',
    eyebrow: '04',
    intro: 'Palm slippers and traditional footwear. Message the house to request.',
    group: 'accessories',
  },
  {
    id: 'styling-accessories',
    title: 'Other styling accessories',
    eyebrow: '05',
    intro: 'Other styling accessories for a finished look. Message the house with what you need.',
    group: 'accessories',
  },
];

export const featuredCategories = (['kaftans', 'agbadas', 'suits', 'womens', 'ready-to-wear'] as const).map(
  (id) => shopCategories.find((category) => category.id === id) ?? shopCategories[0]
);
export const categoriesByGroup = (group: ShopGroupId) => shopCategories.filter((category) => category.group === group);
export const groupTitle = (id: ShopGroupId) => shopGroups.find((group) => group.id === id)?.title ?? id;

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
    title: 'Business and formal suit',
    alt: 'Navy tailored shirt and trousers displayed in the D’TAILOR atelier',
    image: '/images/navy-shirt-set.jpg',
    colors: ['navy', 'black', 'ivory'],
    sleeve: 'long',
    sizes: suitSizes,
    description: 'A business or formal suit made to your measurements. Message the house with the occasion, cloth and the image you want to carry. The photograph shows work from the Accra atelier.',
    buy: whatsappBuy('a business or formal suit'),
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
