import { Guitar, SortByParamsProps } from './types/types';

export const stopScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const startScroll = () => {
  document.body.style.overflow = 'auto';
};

export const inputProhibition = (evt: React.ClipboardEvent<HTMLInputElement>) => {
  evt.preventDefault();
  return false;
};

export const insertProhibition = (evt:React.KeyboardEvent<HTMLInputElement>) => {
  const { key } = evt;
  if (key === '-' || key === '.' || key === 'e' || key === ',') {
    evt.preventDefault();
  }
};

export const closeEsc = (evt:React.KeyboardEvent<HTMLInputElement>) => {
  const { key } = evt;
  if (key === '-' || key === '.' || key === 'e' || key === ',') {
    evt.preventDefault();
  }
};

//https://javascript.ru/forum/jquery/15988-preobrazovanie-chisla-k-vidu-s-probelami.html
export const pasrePrice = (pric: number) => {
  let price = String(pric);
  price += '';
  price = new Array(4 - price.length % 3).join('U') + price;
  return price.replace(/([0-9U]{3})/g, '$1 ').replace(/U/g, '');
};

export const sortByParams = ({ guitars, isSorting, isSortInc }: SortByParamsProps): Guitar[] => guitars.slice(0).sort((a, b) => (b[isSorting] - a[isSorting]) * (isSortInc ? 1 : -1));
