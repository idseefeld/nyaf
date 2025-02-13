function RGB(r?: number, g?: number, b?: number) {
  this.r = r || 0;
  this.g = g || 0;
  this.g = b || 0;
}

function RGBA(r?: number, g?: number, b?: number, a?: number) {
  this.r = r || 0;
  this.g = g || 0;
  this.g = b || 0;
  this.a = a || 1;
}

function HSV(h?: number, s?: number, v?: number) {
  this.h = h || 0;
  this.s = s || 0;
  this.v = v || 0;
}

function HSL(h?: number, s?: number, l?: number) {
  this.h = h || 0;
  this.s = s || 0;
  this.l = l || 0;
}

function HSLA(h?: number, s?: number, l?: number, a?: number) {
  this.h = h || 0;
  this.s = s || 0;
  this.l = l || 0;
  this.a = a || 1;
}

function CMYK(c?: number, m?: number, y?: number, k?: number) {
  this.c = c || 0;
  this.m = m || 0;
  this.y = y || 0;
  this.k = k || 0;
}

const Color = {

  TYPES: {
    HEX: 'hex',
    RGB: 'rgb',
    RGBA: 'rgba',
    HSV: 'hsv',
    HSL: 'hsl',
    CMYK: 'cmyk',
    UNKNOWN: 'unknown'
  },

  PALETTES: {
    ALL: 'colorList',
    METRO: 'colorListMetro',
    STANDARD: 'colorListStandard'
  },

  colorListMetro: {
    lime: '#a4c400',
    green: '#60a917',
    emerald: '#008a00',
    blue: '#00AFF0',
    teal: '#00aba9',
    cyan: '#1ba1e2',
    cobalt: '#0050ef',
    indigo: '#6a00ff',
    violet: '#aa00ff',
    pink: '#dc4fad',
    magenta: '#d80073',
    crimson: '#a20025',
    red: '#CE352C',
    orange: '#fa6800',
    amber: '#f0a30a',
    yellow: '#fff000',
    brown: '#825a2c',
    olive: '#6d8764',
    steel: '#647687',
    mauve: '#76608a',
    taupe: '#87794e'
  },

  colorListStandard: {
    aliceBlue: '#f0f8ff',
    antiqueWhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedAlmond: '#ffebcd',
    blue: '#0000ff',
    blueViolet: '#8a2be2',
    brown: '#a52a2a',
    burlyWood: '#deb887',
    cadetBlue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerBlue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkBlue: '#00008b',
    darkCyan: '#008b8b',
    darkGoldenRod: '#b8860b',
    darkGray: '#a9a9a9',
    darkGreen: '#006400',
    darkKhaki: '#bdb76b',
    darkMagenta: '#8b008b',
    darkOliveGreen: '#556b2f',
    darkOrange: '#ff8c00',
    darkOrchid: '#9932cc',
    darkRed: '#8b0000',
    darkSalmon: '#e9967a',
    darkSeaGreen: '#8fbc8f',
    darkSlateBlue: '#483d8b',
    darkSlateGray: '#2f4f4f',
    darkTurquoise: '#00ced1',
    darkViolet: '#9400d3',
    deepPink: '#ff1493',
    deepSkyBlue: '#00bfff',
    dimGray: '#696969',
    dodgerBlue: '#1e90ff',
    fireBrick: '#b22222',
    floralWhite: '#fffaf0',
    forestGreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#DCDCDC',
    ghostWhite: '#F8F8FF',
    gold: '#ffd700',
    goldenRod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenYellow: '#adff2f',
    honeyDew: '#f0fff0',
    hotPink: '#ff69b4',
    indianRed: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderBlush: '#fff0f5',
    lawnGreen: '#7cfc00',
    lemonChiffon: '#fffacd',
    lightBlue: '#add8e6',
    lightCoral: '#f08080',
    lightCyan: '#e0ffff',
    lightGoldenRodYellow: '#fafad2',
    lightGray: '#d3d3d3',
    lightGreen: '#90ee90',
    lightPink: '#ffb6c1',
    lightSalmon: '#ffa07a',
    lightSeaGreen: '#20b2aa',
    lightSkyBlue: '#87cefa',
    lightSlateGray: '#778899',
    lightSteelBlue: '#b0c4de',
    lightYellow: '#ffffe0',
    lime: '#00ff00',
    limeGreen: '#32dc32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumAquaMarine: '#66cdaa',
    mediumBlue: '#0000cd',
    mediumOrchid: '#ba55d3',
    mediumPurple: '#9370db',
    mediumSeaGreen: '#3cb371',
    mediumSlateBlue: '#7b68ee',
    mediumSpringGreen: '#00fa9a',
    mediumTurquoise: '#48d1cc',
    mediumVioletRed: '#c71585',
    midnightBlue: '#191970',
    mintCream: '#f5fffa',
    mistyRose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajoWhite: '#ffdead',
    navy: '#000080',
    oldLace: '#fdd5e6',
    olive: '#808000',
    oliveDrab: '#6b8e23',
    orange: '#ffa500',
    orangeRed: '#ff4500',
    orchid: '#da70d6',
    paleGoldenRod: '#eee8aa',
    paleGreen: '#98fb98',
    paleTurquoise: '#afeeee',
    paleVioletRed: '#db7093',
    papayaWhip: '#ffefd5',
    peachPuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderBlue: '#b0e0e6',
    purple: '#800080',
    rebeccaPurple: '#663399',
    red: '#ff0000',
    rosyBrown: '#bc8f8f',
    royalBlue: '#4169e1',
    saddleBrown: '#8b4513',
    salmon: '#fa8072',
    sandyBrown: '#f4a460',
    seaGreen: '#2e8b57',
    seaShell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    slyBlue: '#87ceeb',
    slateBlue: '#6a5acd',
    slateGray: '#708090',
    snow: '#fffafa',
    springGreen: '#00ff7f',
    steelBlue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whiteSmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowGreen: '#9acd32'
  },

  colorList: {},

  options: {
    angle: 30,
    algorithm: 1,
    step: .1,
    distance: 5,
    tint1: .8,
    tint2: .4,
    shade1: .6,
    shade2: .3,
    alpha: 1
  },

  setup: function (options) {
    Color.options = Object.assign({}, Color.options, options);
  },

  color: function (name, palette) {
    palette = palette || Color.PALETTES.ALL;
    return this[palette][name] !== undefined ? this[palette][name] : false;
  },

  palette: function (palette) {
    palette = palette || Color.PALETTES.ALL;
    return Object.keys(this[palette]);
  },

  colors: function (palette) {
    const c = [];
    palette = palette || Color.PALETTES.ALL;
    for (const k in Color[palette]) {
      c.push(Color[palette][k]);
    }
    return c;
  },

  hex2rgb: function (hex) {
    const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(regex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  rgb2hex: function (rgb) {
    return '#' +
      ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b)
        .toString(16).slice(1);
  },

  rgb2hsv: function (rgb) {
    const hsv = new HSV();
    let h, s, v;
    const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    v = max;

    if (max === 0) {
      s = 0;
    } else {
      s = 1 - min / max;
    }

    if (max === min) {
      h = 0;
    } else if (max === r && g >= b) {
      h = 60 * ((g - b) / delta);
    } else if (max === r && g < b) {
      h = 60 * ((g - b) / delta) + 360;
    } else if (max === g) {
      h = 60 * ((b - r) / delta) + 120;
    } else if (max === b) {
      h = 60 * ((r - g) / delta) + 240;
    } else {
      h = 0;
    }

    hsv.h = h;
    hsv.s = s;
    hsv.v = v;

    return hsv;
  },

  hsv2rgb: function (hsv) {
    let r, g, b;
    const h = hsv.h, s = hsv.s * 100, v = hsv.v * 100;
    const Hi = Math.floor(h / 60);
    const Vmin = (100 - s) * v / 100;
    const alpha = (v - Vmin) * ((h % 60) / 60);
    const Vinc = Vmin + alpha;
    const Vdec = v - alpha;

    switch (Hi) {
      case 0: r = v; g = Vinc; b = Vmin; break;
      case 1: r = Vdec; g = v; b = Vmin; break;
      case 2: r = Vmin; g = v; b = Vinc; break;
      case 3: r = Vmin; g = Vdec; b = v; break;
      case 4: r = Vinc; g = Vmin; b = v; break;
      case 5: r = v; g = Vmin; b = Vdec; break;
    }

    return {
      r: Math.round(r * 255 / 100),
      g: Math.round(g * 255 / 100),
      b: Math.round(b * 255 / 100)
    };
  },

  hsv2hex: function (hsv) {
    return Color.rgb2hex(Color.hsv2rgb(hsv));
  },

  hex2hsv: function (hex) {
    return Color.rgb2hsv(Color.hex2rgb(hex));
  },

  rgb2cmyk: function (rgb) {
    const cmyk = new CMYK();

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    cmyk.k = Math.min(1 - r, 1 - g, 1 - b);
    cmyk.c = (1 - r - cmyk.k) / (1 - cmyk.k);
    cmyk.m = (1 - g - cmyk.k) / (1 - cmyk.k);
    cmyk.y = (1 - b - cmyk.k) / (1 - cmyk.k);

    cmyk.c = Math.round(cmyk.c * 100);
    cmyk.m = Math.round(cmyk.m * 100);
    cmyk.y = Math.round(cmyk.y * 100);
    cmyk.k = Math.round(cmyk.k * 100);

    return cmyk;
  },

  cmyk2rgb: function (cmyk) {
    const rgb = new RGB();

    const c = cmyk.c / 100;
    const m = cmyk.m / 100;
    const y = cmyk.y / 100;
    const k = cmyk.k / 100;

    rgb.r = 1 - Math.min(1, c * (1 - k) + k);
    rgb.g = 1 - Math.min(1, m * (1 - k) + k);
    rgb.b = 1 - Math.min(1, y * (1 - k) + k);

    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);

    return rgb;
  },

  hsv2hsl: function (hsv) {
    let h, s, l;
    h = hsv.h;
    l = (2 - hsv.s) * hsv.v;
    s = hsv.s * hsv.v;
    s /= (l <= 1) ? l : 2 - l;
    l /= 2;
    return { h: h, s: s, l: l, a: 0 };
  },

  hsl2hsv: function (hsl) {
    let h, s, v, l;
    h = hsl.h;
    l = hsl.l * 2;
    s = hsl.s * (l <= 1 ? l : 2 - l);
    v = (l + s) / 2;
    s = (2 * s) / (l + s);
    return { h: h, s: s, l: v };
  },

  rgb2websafe: function (rgb) {
    return {
      r: Math.round(rgb.r / 51) * 51,
      g: Math.round(rgb.g / 51) * 51,
      b: Math.round(rgb.b / 51) * 51
    };
  },

  rgba2websafe: function (rgba) {
    return {
      r: Math.round(rgba.r / 51) * 51,
      g: Math.round(rgba.g / 51) * 51,
      b: Math.round(rgba.b / 51) * 51,
      a: rgba.a
    };
  },

  hex2websafe: function (hex) {
    return Color.rgb2hex(Color.rgb2websafe(Color.toRGB(hex)));
  },

  hsv2websafe: function (hsv) {
    return Color.rgb2hsv(Color.rgb2websafe(Color.toRGB(hsv)));
  },

  hsl2websafe: function (hsl) {
    return Color.hsv2hsl(Color.rgb2hsv(Color.rgb2websafe(Color.toRGB(hsl))));
  },

  cmyk2websafe: function (cmyk) {
    return Color.rgb2cmyk(Color.rgb2websafe(Color.cmyk2rgb(cmyk)));
  },

  websafe: function (color) {
    if (Color.isHEX(color)) { return Color.hex2websafe(color); }
    if (Color.isRGB(color)) { return Color.rgb2websafe(color); }
    if (Color.isRGBA(color)) { return Color.rgba2websafe(color); }
    if (Color.isHSV(color)) { return Color.hsv2websafe(color); }
    if (Color.isHSL(color)) { return Color.hsl2websafe(color); }
    if (Color.isCMYK(color)) { return Color.cmyk2websafe(color); }

    return color;
  },

  is: function (color) {
    if (Color.isHEX(color)) { return Color.TYPES.HEX; }
    if (Color.isRGB(color)) { return Color.TYPES.RGB; }
    if (Color.isRGBA(color)) { return Color.TYPES.RGBA; }
    if (Color.isHSV(color)) { return Color.TYPES.HSV; }
    if (Color.isHSL(color)) { return Color.TYPES.HSL; }
    if (Color.isCMYK(color)) { return Color.TYPES.CMYK; }

    return Color.TYPES.UNKNOWN;
  },

  toRGB: function (color) {
    if (Color.isHSV(color)) { return Color.hsv2rgb(color); }
    if (Color.isHSL(color)) { return Color.hsv2rgb(Color.hsl2hsv(color)); }
    if (Color.isRGB(color)) { return color; }
    if (Color.isHEX(color)) { return Color.hex2rgb(color); }
    if (Color.isCMYK(color)) { return Color.cmyk2rgb(color); }

    throw new Error('Unknown color format!');
  },

  toRGBA: function (color, alpha?) {
    const result = Color.toRGB(color);
    result.a = alpha || 1;
    return result;
  },

  toHSV: function (color) {
    return Color.rgb2hsv(Color.toRGB(color));
  },

  toHSL: function (color) {
    return Color.hsv2hsl(Color.rgb2hsv(Color.toRGB(color)));
  },

  toHSLA: function (color, alpha?) {
    const hsla = Color.hsv2hsl(Color.rgb2hsv(Color.toRGB(color)));
    hsla.a = alpha || Color.options.alpha;
    return hsla;
  },

  toHEX: function (color) {
    return Color.rgb2hex(Color.toRGB(color));
  },

  toCMYK: function (color) {
    return Color.rgb2cmyk(Color.toRGB(color));
  },

  toHexString: function (color) {
    return Color.toHEX(color);
  },

  toHsvString: function (color) {
    const hsv = Color.isHSV(color) ? color : Color.toHSV(color);
    return 'hsv(' + [hsv.h, hsv.s, hsv.v].join(',') + ')';
  },

  toHslString: function (color) {
    const hsl = Color.isHSL(color) ? color : Color.toHSL(color);
    return 'hsl(' + [Math.round(hsl.h), Math.round(hsl.s * 100) + '%', Math.round(hsl.l * 100) + '%'].join(',') + ')';
  },

  toHslaString: function (color) {
    const hsl = Color.isHSLA(color) ? color : Color.toHSLA(color);
    return 'hsl(' + [Math.round(hsl.h), Math.round(hsl.s * 100) + '%', Math.round(hsl.l * 100) + '%', hsl.a].join(',') + ')';
  },

  toCmykString: function (color) {
    const cmyk = Color.isCMYK(color) ? color : Color.toCMYK(color);
    return 'cmyk(' + [cmyk.c, cmyk.m, cmyk.y, cmyk.k].join(',') + ')';
  },

  toRgbString: function (color) {
    const rgb = Color.isRGB(color) ? color : Color.toRGB(color);
    return 'rgb(' + [rgb.r, rgb.g, rgb.b].join(',') + ')';
  },

  toRgbaString: function (color) {
    const rgb = Color.isRGBA(color) ? color : Color.toRGBA(color);
    return 'rgba(' + [rgb.r, rgb.g, rgb.b, rgb.a].join(',') + ')';
  },

  toString: function (color) {
    if (Color.isHEX(color)) { return Color.toHexString(color); }
    if (Color.isRGB(color)) { return Color.toRgbString(color); }
    if (Color.isRGBA(color)) { return Color.toRgbaString(color); }
    if (Color.isHSV(color)) { return Color.toHsvString(color); }
    if (Color.isHSL(color)) { return Color.toHslString(color); }
    if (Color.isHSLA(color)) { return Color.toHslaString(color); }
    if (Color.isCMYK(color)) { return Color.toCmykString(color); }

    throw new Error('Unknown color format!');
  },

  grayscale: function (color, output) {
    output = output || 'hex';
    const rgb = Color.toRGB(color);
    const gray = Math.round(rgb.r * .2125 + rgb.g * .7154 + rgb.b * .0721);
    const mono = {
      r: gray,
      g: gray,
      b: gray
    };
    return this['rgb2' + output](mono);
  },

  darken: function (color, amount) {
    if (amount === undefined) {
      amount = 10;
    }
    return Color.lighten(color, -1 * Math.abs(amount));
  },

  lighten: function (color, amount) {
    let type, res, alpha = 1, ring = amount > 0;

    const calc = function (_color, _amount) {
      let r, g, b;
      const col = _color.slice(1);

      const num = parseInt(col, 16);
      r = (num >> 16) + _amount;

      if (r > 255) { r = 255; } else if (r < 0) { r = 0; }

      b = ((num >> 8) & 0x00FF) + _amount;

      if (b > 255) { b = 255; } else if (b < 0) { b = 0; }

      g = (num & 0x0000FF) + _amount;

      if (g > 255) { g = 255; } else if (g < 0) { g = 0; }

      return '#' + (g | (b << 8) | (r << 16)).toString(16);
    };

    if (amount === undefined) {
      amount = 10;
    }

    type = Color.is(color);

    if (type === Color.TYPES.RGBA) {
      alpha = color.a;
    }

    do {
      res = calc(Color.toHEX(color), amount);
      ring ? amount-- : amount++;
    } while (res.length < 7);

    switch (type) {
      case 'rgb': return Color.toRGB(res);
      case 'rgba': return Color.toRGBA(res, alpha);
      case 'hsv': return Color.toHSV(res);
      case 'hsl': return Color.toHSL(res);
      case 'cmyk': return Color.toCMYK(res);
      default: return res;
    }
  },

  isDark: function (color) {
    const rgb = Color.toRGB(color);
    const YIQ = (
      (rgb.r * 299) +
      (rgb.g * 587) +
      (rgb.b * 114)
    ) / 1000;
    return (YIQ < 128);
  },

  isLight: function (hex) {
    return !Color.isDark(hex);
  },

  isHSV: function (val) {
    return typeof val === 'object' && 'h' in val && 's' in val && 'v' in val;
  },

  isHSL: function (val) {
    return typeof val === 'object' && 'h' in val && 's' in val && 'l' in val;
  },

  isHSLA: function (val) {
    return typeof val === 'object' && 'h' in val && 's' in val && 'l' in val && 'a' in val;
  },

  isRGB: function (val) {
    return typeof val === 'object' && 'r' in val && 'g' in val && 'b' in val;
  },

  isRGBA: function (val) {
    return typeof val === 'object' && 'r' in val && 'g' in val && 'b' in val && 'a' in val;
  },

  isCMYK: function (val) {
    return typeof val === 'object' && 'c' in val && 'm' in val && 'y' in val && 'k' in val;
  },

  isHEX: function (val) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
  },

  isColor: function (color) {
    return !color ? false :
      Color.isHEX(color) ||
      Color.isRGB(color) ||
      Color.isRGBA(color) ||
      Color.isHSV(color) ||
      Color.isHSL(color) ||
      Color.isCMYK(color);
  },

  hueShift: function (h, s) {
    h += s;
    while (h >= 360.0) { h -= 360.0; }
    while (h < 0.0) { h += 360.0; }
    return h;
  },

  getScheme: function (color, name, format, options) {
    const opt = Object.assign({}, Color.options, options);

    let i;
    const scheme = [];
    let hsv;
    let rgb, h, s, v;

    hsv = Color.toHSV(color);
    h = hsv.h; s = hsv.s; v = hsv.v;

    if (Color.isHSV(hsv) === false) {
      console.log('The value is a not supported color format!');
      return false;
    }

    function convert(source, format) {
      let result = [];
      switch (format) {
        case 'hex': result = source.map(function (v) { return Color.toHEX(v); }); break;
        case 'rgb': result = source.map(function (v) { return Color.toRGB(v); }); break;
        case 'rgba': result = source.map(function (v) { return Color.toRGBA(v, opt.alpha); }); break;
        case 'hsl': result = source.map(function (v) { return Color.toHSL(v); }); break;
        case 'cmyk': result = source.map(function (v) { return Color.toCMYK(v); }); break;
        default: result = source;
      }

      return result;
    }

    function clamp(num, min, max) {
      return Math.max(min, Math.min(num, max));
    }

    function toRange(a, b, c) {
      return a < b ? b : (a > c ? c : a);
    }


    switch (name) {
      case 'monochromatic':
      case 'mono':
        if (opt.algorithm === 1) {

          rgb = Color.hsv2rgb(hsv);
          rgb.r = toRange(Math.round(rgb.r + (255 - rgb.r) * opt.tint1), 0, 255);
          rgb.g = toRange(Math.round(rgb.g + (255 - rgb.g) * opt.tint1), 0, 255);
          rgb.b = toRange(Math.round(rgb.b + (255 - rgb.b) * opt.tint1), 0, 255);
          scheme.push(Color.rgb2hsv(rgb));

          rgb = Color.hsv2rgb(hsv);
          rgb.r = toRange(Math.round(rgb.r + (255 - rgb.r) * opt.tint2), 0, 255);
          rgb.g = toRange(Math.round(rgb.g + (255 - rgb.g) * opt.tint2), 0, 255);
          rgb.b = toRange(Math.round(rgb.b + (255 - rgb.b) * opt.tint2), 0, 255);
          scheme.push(Color.rgb2hsv(rgb));

          scheme.push(hsv);

          rgb = Color.hsv2rgb(hsv);
          rgb.r = toRange(Math.round(rgb.r * opt.shade1), 0, 255);
          rgb.g = toRange(Math.round(rgb.g * opt.shade1), 0, 255);
          rgb.b = toRange(Math.round(rgb.b * opt.shade1), 0, 255);
          scheme.push(Color.rgb2hsv(rgb));

          rgb = Color.hsv2rgb(hsv);
          rgb.r = toRange(Math.round(rgb.r * opt.shade2), 0, 255);
          rgb.g = toRange(Math.round(rgb.g * opt.shade2), 0, 255);
          rgb.b = toRange(Math.round(rgb.b * opt.shade2), 0, 255);
          scheme.push(Color.rgb2hsv(rgb));
        } else if (opt.algorithm === 2) {
          scheme.push(hsv);
          for (i = 1; i <= opt.distance; i++) {
            v = clamp(v - opt.step, 0, 1);
            s = clamp(s - opt.step, 0, 1);
            scheme.push({ h: h, s: s, v: v });
          }
        } else if (opt.algorithm === 3) {
          scheme.push(hsv);
          for (i = 1; i <= opt.distance; i++) {
            v = clamp(v - opt.step, 0, 1);
            scheme.push({ h: h, s: s, v: v });
          }
        } else {
          v = clamp(hsv.v + opt.step * 2, 0, 1);
          scheme.push({ h: h, s: s, v: v });

          v = clamp(hsv.v + opt.step, 0, 1);
          scheme.push({ h: h, s: s, v: v });

          scheme.push(hsv); s = hsv.s; v = hsv.v;

          v = clamp(hsv.v - opt.step, 0, 1);
          scheme.push({ h: h, s: s, v: v });

          v = clamp(hsv.v - opt.step * 2, 0, 1);
          scheme.push({ h: h, s: s, v: v });
        }
        break;

      case 'complementary':
      case 'complement':
      case 'comp':
        scheme.push(hsv);

        h = Color.hueShift(hsv.h, 180.0);
        scheme.push({ h: h, s: s, v: v });
        break;

      case 'double-complementary':
      case 'double-complement':
      case 'double':
        scheme.push(hsv);

        h = Color.hueShift(h, 180.0);
        scheme.push({ h: h, s: s, v: v });

        h = Color.hueShift(h, opt.angle);
        scheme.push({ h: h, s: s, v: v });

        h = Color.hueShift(h, 180.0);
        scheme.push({ h: h, s: s, v: v });

        break;

      case 'analogous':
      case 'analog':

        h = Color.hueShift(h, opt.angle);
        scheme.push({ h: h, s: s, v: v });

        scheme.push(hsv);

        h = Color.hueShift(hsv.h, 0.0 - opt.angle);
        scheme.push({ h: h, s: s, v: v });

        break;

      case 'triadic':
      case 'triad':
        scheme.push(hsv);
        for (i = 1; i < 3; i++) {
          h = Color.hueShift(h, 120.0);
          scheme.push({ h: h, s: s, v: v });
        }
        break;

      case 'tetradic':
      case 'tetra':
        scheme.push(hsv);

        h = Color.hueShift(hsv.h, 180.0);
        scheme.push({ h: h, s: s, v: v });

        h = Color.hueShift(hsv.h, -1 * opt.angle);
        scheme.push({ h: h, s: s, v: v });

        h = Color.hueShift(h, 180.0);
        scheme.push({ h: h, s: s, v: v });

        break;

      case 'square':
        scheme.push(hsv);
        for (i = 1; i < 4; i++) {
          h = Color.hueShift(h, 90.0);
          scheme.push({ h: h, s: s, v: v });
        }
        break;

      case 'split-complementary':
      case 'split-complement':
      case 'split':
        h = Color.hueShift(h, 180.0 - opt.angle);
        scheme.push({ h: h, s: s, v: v });

        scheme.push(hsv);

        h = Color.hueShift(hsv.h, 180.0 + opt.angle);
        scheme.push({ h: h, s: s, v: v });
        break;

      default: console.log('Unknown scheme name');
    }

    return convert(scheme, format);
  }
};

Color.colorList = Object.assign({}, Color.colorListMetro, Color.colorListStandard);

export default Color;
