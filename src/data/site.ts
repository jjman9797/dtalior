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

export const whatsappConsult = 'https://wa.me/message/UIXQYR6JNHJ7D1';
export const whatsappNumber = '233595665083';
export const facebook = 'https://www.facebook.com/p/Dtailor-61555808469871/';
export const instagram = 'https://www.instagram.com/d_tailor_45/';
export const phoneDisplay = '+233 59 566 5083';
export const phoneHref = 'tel:+233595665083';
export const email = 'olaiyaidowu45@gmail.com';
export const addressLine = 'Ecobank Spintex Road';
export const city = 'Accra, Ghana';

export const whatsappBuy = (look: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello D’TAILOR, I would like to buy this look: ${look}.`
  )}`;
