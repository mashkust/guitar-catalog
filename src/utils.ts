export const stopScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const startScroll = () => {
  document.body.style.overflow = 'auto';
};

//https://javascript.ru/forum/jquery/15988-preobrazovanie-chisla-k-vidu-s-probelami.html
export const pasrePrice= (pric: number) => {
  let price = String(pric);
  price += '';
  price = new Array(4 - price.length % 3).join('U') + price;
  return price.replace(/([0-9U]{3})/g, '$1 ').replace(/U/g, '');
};

