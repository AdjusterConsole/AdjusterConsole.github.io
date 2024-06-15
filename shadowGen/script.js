const baseColorInput2 = document.getElementById('baseColor2');
const redInput2 = document.getElementById('redInput2');
const greenInput2 = document.getElementById('greenInput2');
const blueInput2 = document.getElementById('blueInput2');
const color1aDisplay = document.getElementById('color1a');
const color2aDisplay = document.getElementById('color2a');
const color3aDisplay = document.getElementById('color3a');
const color4aDisplay = document.getElementById('color4a');
const colorName1aDisplay = document.getElementById('colorName1a');
const colorName2aDisplay = document.getElementById('colorName2a');
const colorName3aDisplay = document.getElementById('colorName3a');
const colorName4aDisplay = document.getElementById('colorName4a');
const baseColorInput = document.getElementById('baseColor');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const intensitySlider = document.getElementById('intensitySlider');
const secondaryIntensitySlider = document.getElementById('secondaryIntensitySlider'); // New slider
const color1Display = document.getElementById('color1');
const color2Display = document.getElementById('color2');
const color3Display = document.getElementById('color3');
const color4Display = document.getElementById('color4');
const colorName1Display = document.getElementById('colorName1');
const colorName2Display = document.getElementById('colorName2');
const colorName3Display = document.getElementById('colorName3');
const colorName4Display = document.getElementById('colorName4');
const colorName5Display = document.getElementById('colorName5');
const color5Display = document.getElementById('color5');
const colorPicker = document.getElementById('colorPicker');
const xOffsetInput = document.getElementById('xOffset');
const yOffsetInput = document.getElementById('yOffset');
const blurInput = document.getElementById('blur');
const spreadInput = document.getElementById('spread');
const xOffsetDecrementBtn = document.getElementById('xOffsetDecrement');
const xOffsetIncrementBtn = document.getElementById('xOffsetIncrement');
const yOffsetDecrementBtn = document.getElementById('yOffsetDecrement');
const yOffsetIncrementBtn = document.getElementById('yOffsetIncrement');
const blurDecrementBtn = document.getElementById('blurDecrement');
const blurIncrementBtn = document.getElementById('blurIncrement');
const spreadDecrementBtn = document.getElementById('spreadDecrement');
const spreadIncrementBtn = document.getElementById('spreadIncrement');
const cssOutput = document.getElementById('cssOutput');
const OutputInner = document.getElementById('OutputInner');
const sizeInput = document.getElementById('size');
const sizeDecrementBtn = document.getElementById('sizeDecrement');
const sizeIncrementBtn = document.getElementById('sizeIncrement');
const radiusInput = document.getElementById('radius');
const radiusDecrementBtn = document.getElementById('radiusDecrement');
const radiusIncrementBtn = document.getElementById('radiusIncrement');
let swapOrNot = false;
let intensityBoost = false;

xOffsetInput.addEventListener('input', updateCSS);
yOffsetInput.addEventListener('input', updateCSS);
blurInput.addEventListener('input', updateCSS);
spreadInput.addEventListener('input', updateCSS);
sizeInput.addEventListener('input', updateSizeDisplay);

redInput2.addEventListener('input', updateHexInput2);
greenInput2.addEventListener('input', updateHexInput2);
blueInput2.addEventListener('input', updateHexInput2);
radiusInput.addEventListener('input', updateRadiusDisplay);
redInput.addEventListener('input', updateHexInput);
greenInput.addEventListener('input', updateHexInput);
blueInput.addEventListener('input', updateHexInput);
intensitySlider.addEventListener('input', updateColorPair);
secondaryIntensitySlider.addEventListener('input', updateColorPair);
color5Display.addEventListener('click', toggleColorPicker);
colorPicker.addEventListener('input', handleColorPickerChange);
shadowToggle.addEventListener('change', updateCSS);
backgroundToggle.addEventListener('change', updateCSS);

xOffsetDecrementBtn.addEventListener('click', () => adjustValue(xOffsetInput, -1));
xOffsetIncrementBtn.addEventListener('click', () => adjustValue(xOffsetInput, 1));
yOffsetDecrementBtn.addEventListener('click', () => adjustValue(yOffsetInput, -1));
yOffsetIncrementBtn.addEventListener('click', () => adjustValue(yOffsetInput, 1));
blurDecrementBtn.addEventListener('click', () => adjustValue(blurInput, -1));
blurIncrementBtn.addEventListener('click', () => adjustValue(blurInput, 1));
spreadDecrementBtn.addEventListener('click', () => adjustValue(spreadInput, -1));
spreadIncrementBtn.addEventListener('click', () => adjustValue(spreadInput, 1));
radiusDecrementBtn.addEventListener('click', () => adjustRadius(-1));
radiusIncrementBtn.addEventListener('click', () => adjustRadius(1));
sizeDecrementBtn.addEventListener('click', () => adjustSize(-1));
sizeIncrementBtn.addEventListener('click', () => adjustSize(1));

function updateCSS(sortedShadows = []) {
  const xOffset = parseInt(xOffsetInput.value);
  const yOffset = parseInt(yOffsetInput.value);
  const xOffset2 = xOffset * -1;
  const yOffset2 = yOffset * -1;

  const blur = parseInt(blurInput.value);
  const spread = parseInt(spreadInput.value);
  const baseColorInput = document.getElementById('baseColor');



  const boxShadow = shadowToggle.checked ?
    `\n${xOffset}px ${yOffset}px ${blur}px ${spread}px ${color2Display.style.backgroundColor},\n${xOffset2}px ${yOffset2}px ${blur}px ${spread}px ${color1Display.style.backgroundColor}` :
    `\n${xOffset}px ${yOffset}px ${blur}px ${spread}px ${color2Display.style.backgroundColor}`;



  let background;
  if (backgroundToggle.checked) {
    background = `linear-gradient(145deg, ${color4Display.style.backgroundColor}, ${color3Display.style.backgroundColor})`;
  } else {
    background = baseColorInput.value;
  }  

  const cssFormula = `box-shadow: ${boxShadow};\nbackground: \n${background};`;
  cssOutput.textContent = cssFormula;
  OutputInner.style.boxShadow = boxShadow;
  OutputInner.style.background = background;
}

function adjustValue(input, increment) {
  let value = parseInt(input.value) + increment;
  input.value = value; // Allow negative values
  updateCSS();
}

const END_INTENSITY = 80;

baseColorInput.addEventListener('input', () => {
  updateRGBInputs2();
  updateColorPair2();
  updateRGBInputs();
  updateColorPair();
  updateCSS();
});

baseColorInput2.addEventListener('input', () => {
  updateRGBInputs2();
  updateColorPair2();
  updateRGBInputs();
  updateColorPair();
  updateCSS();
});

initializeInputs();
updateRGBInputs();
generatePair();
updateRGBInputs2();
generatePair2();
updateCSS();

function generatePair2() {
    const baseColor2 = baseColorInput2.value.trim();
  if (!isValidHexColor(baseColor2)) {
    return;
  }
  const intensity = intensitySlider.value;
  const secondaryIntensity = secondaryIntensitySlider.value;
  const [color1a, color2a, color3a, color4a] = generateColorPair(baseColor2, intensity, secondaryIntensity);

  color1aDisplay.style.backgroundColor = color1a;
  color2aDisplay.style.backgroundColor = color2a;
  color3aDisplay.style.backgroundColor = color3a;
  color4aDisplay.style.backgroundColor = color4a;

  const color1aRGB = hexToRgb(color1a);
  const color2aRGB = hexToRgb(color2a);
  const color3aRGB = hexToRgb(color3a);
  const color4aRGB = hexToRgb(color4a);


  colorName1aDisplay.innerHTML = `${color1a.toUpperCase()}<br>rgb(${color1aRGB.r}, ${color1aRGB.g}, ${color1aRGB.b})`;
  colorName2aDisplay.innerHTML = `${color2a.toUpperCase()}<br>rgb(${color2aRGB.r}, ${color2aRGB.g}, ${color2aRGB.b})`;
  colorName3aDisplay.innerHTML = `${color3a.toUpperCase()}<br>rgb(${color3aRGB.r}, ${color3aRGB.g}, ${color3aRGB.b})`;
  colorName4aDisplay.innerHTML = `${color4a.toUpperCase()}<br>rgb(${color4aRGB.r}, ${color4aRGB.g}, ${color4aRGB.b})`;
}

function generatePair() {
  const baseColor = baseColorInput.value.trim();
  if (!isValidHexColor(baseColor)) {
    return;
  }

  const intensity = intensitySlider.value;
  const secondaryIntensity = secondaryIntensitySlider.value;
  const [color1, color2, color3, color4] = generateColorPair(baseColor, intensity, secondaryIntensity);
  color1Display.style.backgroundColor = color1;
  color2Display.style.backgroundColor = color2;
  color3Display.style.backgroundColor = color3;
  color4Display.style.backgroundColor = color4;
  color5Display.style.backgroundColor = baseColor;
  OutputOuter.style.backgroundColor = baseColor;

  colorName5Display.innerText = baseColor.toUpperCase();

  const color1RGB = hexToRgb(color1);
  const color2RGB = hexToRgb(color2);
  const color3RGB = hexToRgb(color3);
  const color4RGB = hexToRgb(color4);

  colorName1Display.innerHTML = `${color1.toUpperCase()}<br>rgb(${color1RGB.r}, ${color1RGB.g}, ${color1RGB.b})`;
  colorName2Display.innerHTML = `${color2.toUpperCase()}<br>rgb(${color2RGB.r}, ${color2RGB.g}, ${color2RGB.b})`;
  colorName3Display.innerHTML = `${color3.toUpperCase()}<br>rgb(${color3RGB.r}, ${color3RGB.g}, ${color3RGB.b})`;
  colorName4Display.innerHTML = `${color4.toUpperCase()}<br>rgb(${color4RGB.r}, ${color4RGB.g}, ${color4RGB.b})`;
  color5Display.style.backgroundColor = baseColor;

  updateCSS();
}

function updateColorPair() {
  generatePair();
  generatePair2();
  updateCSS();
}

function updateColorPair2() {
  generatePair2();
  generatePair();
  updateCSS();
}

function generateColorPair(baseColor, intensity, secondaryIntensity) {
  let adjustment = calculateAdjustment(intensity);
  let color1RGB = adjustColor(hexToRgb(baseColor), adjustment);
  let color2RGB = adjustColor(hexToRgb(baseColor), -adjustment);

  let color1 = rgbToHex(color1RGB);
  let color2 = rgbToHex(color2RGB);
  let color3RGB = adjustColor(hexToRgb(baseColor), adjustment / 2);
  let color4RGB = adjustColor(hexToRgb(baseColor), -adjustment / 2);

  let [adjustedColor3, adjustedColor4] = adjustSecondLayer(color3RGB, color4RGB, color1RGB, color2RGB, secondaryIntensity);

  let color3 = rgbToHex(adjustedColor3);
  let color4 = rgbToHex(adjustedColor4);

  if (swapOrNot) {
    return [color1, color2, color4, color3];
  } else {
    return [color1, color2, color3, color4];
  }
}

function adjustSecondLayer(color3RGB, color4RGB, color1RGB, color2RGB, secondaryIntensity) {
  const factor = (secondaryIntensity - 50) / 50; // Range from -1 to 1
  let adjustedColor3, adjustedColor4;

  if (factor < 0) {
    adjustedColor3 = interpolateColor(color3RGB, color1RGB, -factor); // Towards color1
    adjustedColor4 = interpolateColor(color4RGB, color2RGB, -factor); // Towards color2
  } else {
    adjustedColor3 = interpolateColor(color3RGB, color4RGB, factor); // Towards color4
    adjustedColor4 = interpolateColor(color4RGB, color3RGB, factor); // Towards color3
  }
  return [adjustedColor3, adjustedColor4];
}

function interpolateColor(colorA, colorB, factor) {
  let interpolatedColor = {
    r: Math.round(colorA.r + (colorB.r - colorA.r) * factor),
    g: Math.round(colorA.g + (colorB.g - colorA.g) * factor),
    b: Math.round(colorA.b + (colorB.b - colorA.b) * factor)
  };
  return interpolatedColor;
}

function calculateAdjustment(intensity) {
  let END_INTENSITY_VAL = END_INTENSITY;
  if (intensityBoost) { END_INTENSITY_VAL = END_INTENSITY * 2; }

  return Math.round((intensity / 100) * END_INTENSITY_VAL);
}

function isValidHexColor(hex) {
  return /^#[0-9A-F]{6}$/i.test(hex);
}

function hexToRgb(hex) {
  hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function adjustColor(rgb, adjustment) {
  let adjusted = {
    r: clamp(rgb.r + adjustment),
    g: clamp(rgb.g + adjustment),
    b: clamp(rgb.b + adjustment)
  };
  return adjusted;
}

function clamp(value) {
  return Math.min(Math.max(0, value), 255);
}

function rgbToHex(rgb) {
  return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
}

function updateRGBInputs() {
  const baseColor = baseColorInput.value.trim();
  if (isValidHexColor(baseColor)) {
    const { r, g, b } = hexToRgb(baseColor);
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
  }
}

function updateRGBInputs2() {
  const baseColor2 = baseColorInput2.value.trim();
  if (isValidHexColor(baseColor2)) {
    const { r, g, b } = hexToRgb(baseColor2);
    redInput2.value = r;
    greenInput2.value = g;
    blueInput2.value = b;
  }
}


function updateHexInput() {
  const r = parseInt(redInput.value);
  const g = parseInt(greenInput.value);
  const b = parseInt(blueInput.value);
  if (isValidRGBValue(r) && isValidRGBValue(g) && isValidRGBValue(b)) {
    const hex = rgbToHex({ r, g, b });
    baseColorInput.value = hex;
    generatePair();
  }
}

function updateHexInput2() {
  const r = parseInt(redInput2.value);
  const g = parseInt(greenInput2.value);
  const b = parseInt(blueInput2.value);
  if (isValidRGBValue(r) && isValidRGBValue(g) && isValidRGBValue(b)) {
    const hex = rgbToHex({ r, g, b });
    baseColorInput2.value = hex;
    generatePair2();
  }
}

function isValidRGBValue(value) {
  return !isNaN(value) && value >= 0 && value <= 255;
}

function toggleColorPicker() {
  colorPicker.click();
}

function swapInners() {
  if (swapOrNot) {
    swapOrNot = false;
  } else {
    swapOrNot = true;
  }
  updateColorPair();
  updateColorPair2();
  updateCSS();
}

function intensityMod() {
  if (intensityBoost) {
    intensityBoost = false;
  } else {
    intensityBoost = true;
  }
}

function handleColorPickerChange() {
  const selectedColor = colorPicker.value;
  baseColorInput.value = selectedColor.toUpperCase();
  updateRGBInputs(); 
  generatePair(); 
}

function resetToDefaults() {
  const defaultBaseColor = '#2D4252';
  const defaultRed = 45;
  const defaultGreen = 82;
  const defaultBlue = 66;
  const defaultIntensity = 60;
  const defaultSecondaryIntensity = 50;
  const defaultXOffset = 5;
  const defaultYOffset = 5;
  const defaultBlur = 18;
  const defaultSpread = 2;
  swapOrNot = false;
  intensityBoost = false;
  baseColorInput.value = defaultBaseColor;
  redInput.value = defaultRed;
  greenInput.value = defaultGreen;
  blueInput.value = defaultBlue;
  intensitySlider.value = defaultIntensity;
  secondaryIntensitySlider.value = defaultSecondaryIntensity;
  xOffsetInput.value = defaultXOffset;
  yOffsetInput.value = defaultYOffset;
  blurInput.value = defaultBlur;
  spreadInput.value = defaultSpread;
  updateRGBInputs();
  generatePair();
  updateCSS();
}

function saveToLocalStorage() {
  const values = {
    baseColor: baseColorInput.value,
    red: redInput.value,
    green: greenInput.value,
    blue: blueInput.value,
    intensity: intensitySlider.value,
    secondaryIntensity: secondaryIntensitySlider.value,
    xOffset: xOffsetInput.value,
    yOffset: yOffsetInput.value,
    blur: blurInput.value,
    spread: spreadInput.value,
  };
  localStorage.setItem('colorValues', JSON.stringify(values));
}

function loadFromLocalStorage() {
  const savedValues = JSON.parse(localStorage.getItem('colorValues'));

  if (savedValues) {
    baseColorInput.value = savedValues.baseColor;
    redInput.value = savedValues.red;
    greenInput.value = savedValues.green;
    blueInput.value = savedValues.blue;
    intensitySlider.value = savedValues.intensity;
    secondaryIntensitySlider.value = savedValues.secondaryIntensity;
    xOffsetInput.value = savedValues.xOffset;
    yOffsetInput.value = savedValues.yOffset;
    blurInput.value = savedValues.blur;
    spreadInput.value = savedValues.spread;
    updateRGBInputs();
    generatePair();
    updateCSS();
  }
}

function clearLocalStorage() {
  localStorage.removeItem('colorValues');
}

const switchButton = document.getElementById('switchButton');
switchButton.addEventListener('click', switchBase);

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetToDefaults);

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearLocalStorage);

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveToLocalStorage);

const loadButton = document.getElementById('loadButton');
loadButton.addEventListener('click', loadFromLocalStorage);

const swapButton = document.getElementById('swapButton');
swapButton.addEventListener('click', swapInners);

const boostButton = document.getElementById('boostButton');
boostButton.addEventListener('click', intensityMod);

function initializeInputs() {
    let width = parseInt(getComputedStyle(OutputInner).width);
    let height = parseInt(getComputedStyle(OutputInner).height);
    let radius = parseInt(getComputedStyle(OutputInner).borderRadius);
    sizeInput.value = width / 4;
    radiusInput.value = radius;
}

function adjustSize(increment) {
    let value = parseInt(sizeInput.value) + increment;
    sizeInput.value = value >= 0 ? value : 0;
    updateSizeDisplay();
}

function updateSizeDisplay() {
    let sizeValue = parseInt(sizeInput.value);
    OutputInner.style.width = `${sizeValue * 4}px`;
    OutputInner.style.height = `${sizeValue * 2}px`;
}

function adjustRadius(increment) {
    let value = parseInt(radiusInput.value) + increment;
    radiusInput.value = value >= 0 ? value : 0;
    updateRadiusDisplay();
}

function updateRadiusDisplay() {
    let radiusValue = parseInt(radiusInput.value);
    OutputInner.style.borderRadius = `${radiusValue}px`;
}

function switchBase() {
  let currentBaseColor = baseColorInput.value.trim();
  let currentBaseColor2 = baseColorInput2.value.trim();
  baseColorInput.value = currentBaseColor2.toUpperCase();
  baseColorInput2.value = currentBaseColor.toUpperCase();
  updateRGBInputs();
  updateRGBInputs2();
  generatePair();
  generatePair2();
}

window.addEventListener('DOMContentLoaded', () => {
  resetToDefaults();
});