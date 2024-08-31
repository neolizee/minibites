/* HEX в RGB --------------------------------------------------------------------------------------------------------------------------- */

export const useHEXToRGB = (hex: string) => {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

/* RGB в HEX --------------------------------------------------------------------------------------------------------------------------- */

export const useRGBToHEX = (r: number, g: number, b: number) => {
  return "#"
    .concat(r.toString(16).padStart(2, "0"))
    .concat(g.toString(16).padStart(2, "0"))
    .concat(b.toString(16).padStart(2, "0"));
};
