export const withBase = (path = '') => {
  const origin = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

  if (!path || path === '/') {
    return `${origin}/`;
  }

  if (path.startsWith('#')) {
    return `${origin}/${path}`;
  }

  const clean = path.replace(/^\/+/, '');
  const joined = `${origin}/${clean}`;
  const filename = clean.split('?')[0] ?? clean;

  if (/\.[a-z0-9]+$/i.test(filename)) {
    return joined;
  }

  return joined.endsWith('/') ? joined : `${joined}/`;
};

export const siteOrigin = 'https://jjman9797.github.io';

export const absoluteUrl = (path = '') => {
  const site = (import.meta.env.SITE || siteOrigin).replace(/\/+$/, '');
  return `${site}${withBase(path)}`;
};

export const ogImagePath = 'images/og-logo.jpg';
export const faviconPath = 'images/favicon.svg';

export const whatsappConsult = 'https://wa.me/message/UIXQYR6JNHJ7D1';
export const whatsappNumber = '233595665083';
export const facebook = 'https://www.facebook.com/p/Dtailor-61555808469871/';
export const instagram = 'https://www.instagram.com/d_tailor_45/';
export const phoneDisplay = '+233 59 566 5083';
export const phoneHref = 'tel:+233595665083';
export const email = 'olaiyaidowu45@gmail.com';
export const addressLine = 'Ecobank Spintex Road';
export const city = 'Accra, Ghana';
export const tagline = 'Designed for your fit and comfort';
export const statement = 'Your personality, our craftsmanship. One unique creation.';

export type WhatsAppBuyOptions = {
  size?: string;
  color?: string;
  sleeve?: string;
};

export const whatsappBuy = (look: string, options: WhatsAppBuyOptions = {}) => {
  const details = [
    `Hello D’TAILOR, I would like to buy: ${look}.`,
    options.size ? `Size: ${options.size}.` : '',
    options.color ? `Colour: ${options.color}.` : '',
    options.sleeve ? `Sleeve: ${options.sleeve}.` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details)}`;
};

export const whatsappBook = (options: { day: string; time: string; garment: string }) => {
  const details = [
    'Hello D’TAILOR, I would like to book a fitting.',
    `Date: ${options.day}.`,
    `Time of day: ${options.time}.`,
    `What we are fitting: ${options.garment}.`,
  ].join(' ');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details)}`;
};
