export const getRandomDarkHexColor = () => {
  return `#${Math.floor(Math.random() * 0x5000) // generuje liczby od 0 do 0xFFFFFF (16777215)
    .toString(16)
    .padStart(6, '0')}`; // dopełnia zera z przodu, jeśli liczba jest zbyt mała
};
