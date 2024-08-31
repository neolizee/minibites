/* HEX в RGB --------------------------------------------------------------------------------------------------------------------------- */
var useHEXToRGB = function (hex) {
    var bigint = parseInt(hex.substring(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return { r: r, g: g, b: b };
};
/* RGB в HEX --------------------------------------------------------------------------------------------------------------------------- */
var useRGBToHEX = function (r, g, b) {
    return "#".concat(r.toString(16).padStart(2, "0")).concat(g
        .toString(16)
        .padStart(2, "0")).concat(b.toString(16).padStart(2, "0"));
};

export { useHEXToRGB, useRGBToHEX };
