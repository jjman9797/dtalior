import { whatsappBuy } from './site';

export type ShopCategory = {
  id: string;
  title: string;
  intro: string;
};

export type ShopLook = {
  id: string;
  category: string;
  title: string;
  alt: string;
  image: string;
  buy: string;
};

export const shopCategories: ShopCategory[] = [
  {
    id: 'kaftans',
    title: 'Kaftans',
    intro: 'Handmade kaftans for presence, comfort and a precise personal fit.',
  },
  {
    id: 'agbadas',
    title: 'Agbadas',
    intro: 'Statement agbadas and ceremonial dressing, made to commission.',
  },
  {
    id: 'womens',
    title: 'Women’s wear',
    intro: 'Tailored two-pieces and contemporary sets from the D’TAILOR studio.',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready to wear',
    intro: 'Shirts, trousers and complete looks you can request as seen.',
  },
];

export const shopLooks: ShopLook[] = [
  {
    id: 'founder-kaftan',
    category: 'kaftans',
    title: 'Purple embroidered kaftan',
    alt: 'D’TAILOR founder wearing a purple embroidered kaftan and matching trousers',
    image: '/images/looks/founder-purple.jpg',
    buy: whatsappBuy('Purple embroidered kaftan'),
  },
  {
    id: 'kaftan-brown',
    category: 'kaftans',
    title: 'Brown pinstripe kaftan',
    alt: 'Man wearing a brown pinstripe kaftan set with gold shoulder detail',
    image: '/images/looks/kaftan-brown.jpg',
    buy: whatsappBuy('Brown pinstripe kaftan'),
  },
  {
    id: 'kaftan-blue',
    category: 'kaftans',
    title: 'Blue patterned kaftan',
    alt: 'Man wearing a blue patterned kaftan set with contrast trim',
    image: '/images/looks/kaftan-blue-full.jpg',
    buy: whatsappBuy('Blue patterned kaftan'),
  },
  {
    id: 'kaftan-white',
    category: 'kaftans',
    title: 'Ivory long kaftan',
    alt: 'Man wearing a long ivory kaftan with buttoned placket and matching trousers',
    image: '/images/looks/kaftan-white.jpg',
    buy: whatsappBuy('Ivory long kaftan'),
  },
  {
    id: 'atelier-sky',
    category: 'kaftans',
    title: 'Sky kaftan with navy panel',
    alt: 'Light blue short-sleeve kaftan with a navy chest panel, displayed in the D’TAILOR atelier',
    image: '/images/looks/atelier-sky.jpg',
    buy: whatsappBuy('Sky kaftan with navy panel'),
  },
  {
    id: 'atelier-sand',
    category: 'kaftans',
    title: 'Sand embroidered kaftan',
    alt: 'Sand-coloured kaftan with dark embroidery, displayed in the D’TAILOR atelier',
    image: '/images/looks/atelier-sand.jpg',
    buy: whatsappBuy('Sand embroidered kaftan'),
  },
  {
    id: 'atelier-burgundy',
    category: 'kaftans',
    title: 'Burgundy embroidered kaftan',
    alt: 'Burgundy kaftan with gold embroidery, displayed in the D’TAILOR atelier',
    image: '/images/looks/atelier-burgundy.jpg',
    buy: whatsappBuy('Burgundy embroidered kaftan'),
  },
  {
    id: 'agbada-emerald',
    category: 'agbadas',
    title: 'Emerald ceremonial agbada',
    alt: 'Man wearing an emerald green embroidered agbada with matching cap and beads',
    image: '/images/looks/agbada-emerald.jpg',
    buy: whatsappBuy('Emerald ceremonial agbada'),
  },
  {
    id: 'agbada-ivory',
    category: 'agbadas',
    title: 'Ivory and gold agbada',
    alt: 'Man wearing an ivory agbada with gold embroidery, coral beads, red cap and staff',
    image: '/images/looks/agbada-ivory.jpg',
    buy: whatsappBuy('Ivory and gold agbada'),
  },
  {
    id: 'agbada-velvet',
    category: 'agbadas',
    title: 'Burgundy velvet agbada',
    alt: 'Man wearing a burgundy velvet agbada with beaded embroidery and coral beads',
    image: '/images/looks/agbada-velvet.jpg',
    buy: whatsappBuy('Burgundy velvet agbada'),
  },
  {
    id: 'agbada-gold',
    category: 'agbadas',
    title: 'Black and gold agbada',
    alt: 'Man wearing a black and gold patterned agbada with staff',
    image: '/images/looks/agbada-gold.jpg',
    buy: whatsappBuy('Black and gold agbada'),
  },
  {
    id: 'agbada-black',
    category: 'agbadas',
    title: 'Black embroidered agbada',
    alt: 'Man wearing a black embroidered agbada with beads and staff',
    image: '/images/looks/agbada-black.jpg',
    buy: whatsappBuy('Black embroidered agbada'),
  },
  {
    id: 'agbada-copper',
    category: 'agbadas',
    title: 'Copper patterned agbada',
    alt: 'Man wearing a copper and brown patterned agbada with beads and staff',
    image: '/images/looks/agbada-copper.jpg',
    buy: whatsappBuy('Copper patterned agbada'),
  },
  {
    id: 'agbada-cobalt',
    category: 'agbadas',
    title: 'Cobalt striped agbada',
    alt: 'Man wearing a cobalt and navy striped agbada with embroidered panel and staff',
    image: '/images/looks/agbada-cobalt.jpg',
    buy: whatsappBuy('Cobalt striped agbada'),
  },
  {
    id: 'womens-pink',
    category: 'womens',
    title: 'Blush tailored two-piece',
    alt: 'Woman wearing a pink buttoned two-piece with matching trousers',
    image: '/images/looks/womens-pink.jpg',
    buy: whatsappBuy('Blush tailored two-piece'),
  },
  {
    id: 'womens-print',
    category: 'womens',
    title: 'Blue print two-piece',
    alt: 'Woman wearing a bright blue geometric print shirt and matching trousers',
    image: '/images/looks/womens-print.jpg',
    buy: whatsappBuy('Blue print two-piece'),
  },
  {
    id: 'womens-white',
    category: 'womens',
    title: 'Ivory set with gold neckline',
    alt: 'Woman wearing an ivory short-sleeve set with gold neckline embroidery',
    image: '/images/looks/womens-white.jpg',
    buy: whatsappBuy('Ivory set with gold neckline'),
  },
  {
    id: 'ready-print',
    category: 'ready-to-wear',
    title: 'Black and white print set',
    alt: 'Man wearing a short-sleeve black and white print shirt with matching trousers',
    image: '/images/looks/ready-to-wear-print.jpg',
    buy: whatsappBuy('Black and white print set'),
  },
  {
    id: 'shirt-white',
    category: 'ready-to-wear',
    title: 'White tailored shirt look',
    alt: 'Man wearing a white tailored shirt with pink embroidered stripes and matching trousers',
    image: '/images/looks/shirt-white-event.jpg',
    buy: whatsappBuy('White tailored shirt look'),
  },
];

export const looksByCategory = (id: string) => shopLooks.filter((look) => look.category === id);
