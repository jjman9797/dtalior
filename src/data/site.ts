export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL || '/';
  if (!path || path === '/') return base;
  if (path.startsWith('#')) return `${base}${path}`;
  return `${base}${path.replace(/^\//, '')}`;
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
