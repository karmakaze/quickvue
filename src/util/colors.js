// colors.js

function colorHash(a, b, c) {
  let h = a ? (isFinite(a) && 0 <= a && a <= 1 ? a : hueHash(a)) : 0.5
  let s = b ? (isFinite(b) && 0 <= b && b <= 1 ? b : saturationHash(b)) : 0.15
  let v = c ? (isFinite(c) && 0 <= c && c <= 1 ? c : valueHash(c)) : 1
  let rgb = hsvToRgb(h, s, v)
  return '#' + hexByte(rgb[0]) + hexByte(rgb[1]) + hexByte(rgb[2])
}

function hueHash(value) {
  let hh = hashReal('h' + value)
  if (0.08333333333 < hh && hh <= 0.58333333333) {
    let v = 1.0 - (0.58333333333 - hh)
    v = v * v
    return 0.08333333333 + (v - 0.25) / 1.5
  } else {
    if (hh <= 0.08333333333) {
      hh += 1.0
    }
    let v = 0.5 + (1.08333333333 - hh)
    v = v * v
    v = 0.58333333333 + (v - 0.25) / 1.5
    return v >= 1.0 ? v - 1.0 : v
  }
}

function saturationHash(value) {
  return hashReal('s' + value)
}

function valueHash(value) {
  return hashReal('v' + value)
}

function hexByte(value) {
  let h = Math.floor(value).toString(16)
  return h.length < 2 ? '0' + h : h
}

function hashReal(value) {
  let hash = stringHash(value)
  return (hash % 104729) / 104729
}

function stringHash(value) {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash *= 31
    hash += value.charCodeAt(i)
    if (hash >= 2147483648) {
      hash -= 2147483648
    }
  }
  return hash
}

// The following source code up to and excluding the 'export' taken from
//   https://gist.github.com/mjackson/5311256
// which is an adaption of algorithms in Wikipedia.
// The texts under Wikipedia are covered by Creative Commons Attribution-ShareAlike 3.0
// which give you the right to distribute adaptations only under the same license
// so this code must be under it too.

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
// function rgbToHsl(r, g, b) {
//   r /= 255, g /= 255, b /= 255

//   var max = Math.max(r, g, b), min = Math.min(r, g, b)
//   var h, s, l = (max + min) / 2

//   if (max === min) {
//     h = s = 0 // achromatic
//   } else {
//     var d = max - min
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

//     switch (max) {
//       case r: h = (g - b) / d + (g < b ? 6 : 0); break
//       case g: h = (b - r) / d + 2; break
//       case b: h = (r - g) / d + 4; break
//     }

//     h /= 6
//   }

//   return [ h, s, l ]
// }

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
// function hslToRgb(h, s, l) {
//   var r, g, b

//   if (s === 0) {
//     r = g = b = l // achromatic
//   } else {
//     function hue2rgb(p, q, t) {
//       if (t < 0) t += 1
//       if (t > 1) t -= 1
//       if (t < 1/6) return p + (q - p) * 6 * t
//       if (t < 1/2) return q
//       if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
//       return p;
//     }

//     var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//     var p = 2 * l - q;

//     r = hue2rgb(p, q, h + 1/3)
//     g = hue2rgb(p, q, h)
//     b = hue2rgb(p, q, h - 1/3)
//   }

//   return [ r * 255, g * 255, b * 255 ]
// }

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
// function rgbToHsv(r, g, b) {
//   r /= 255
//   g /= 255
//   b /= 255

//   let max = Math.max(r, g, b)
//   let min = Math.min(r, g, b)
//   var h, s
//   let v = max

//   var d = max - min
//   s = max === 0 ? 0 : d / max

//   if (max === min) {
//     h = 0 // achromatic
//   } else {
//     switch (max) {
//       case r: h = (g - b) / d + (g < b ? 6 : 0); break
//       case g: h = (b - r) / d + 2; break
//       case b: h = (r - g) / d + 4; break
//     }

//     h /= 6
//   }

//   return [ h, s, v ]
// }

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsvToRgb(h, s, v) {
  var r, g, b

  var i = Math.floor(h * 6)
  var f = h * 6 - i
  var p = v * (1 - s)
  var q = v * (1 - f * s)
  var t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      r = v; g = t; b = p; break
    case 1:
      r = q; g = v; b = p; break
    case 2:
      r = p; g = v; b = t; break
    case 3:
      r = p; g = q; b = v; break
    case 4:
      r = t; g = p; b = v; break
    case 5:
      r = v; g = p; b = q; break
  }

  return [ r * 255, g * 255, b * 255 ]
}

export {
  colorHash, hueHash, saturationHash, valueHash
}
