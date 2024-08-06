// Restricted Use License
//
// This code is provided under the following terms and conditions:
//
// 1. You are not allowed to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this code in any form, modified or unmodified, without express written permission from the author.
//
// 2. You are not allowed to use this code for any illegal or unethical purpose.
//
// 3. This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
//
// 4. This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
//
// By viewing this code, you agree to abide by these terms and conditions. Failure to comply with these terms may result in legal action.
//
// For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.

function colorObject() {
  this.background = "#0d274a";
  this.accent = "#1d4d8b";
  this.shadow1 = "#1d4d8b";
  this.shadow2 = "#153e75";
  this.shadow3 = "#08172b";
  this.shadow4 = "#030912";
  this.username = '';
  this.glow = "#ffffff";
  this.text = "#ffffff";
  this.outline = "#000000";
  this.hover = "#1D4D8B32";
  this.active = "#1D4D8B60";
  this.light = "#b8def5";
  this.medlight = "#aed1e5";
  this.meddark = "#86a1b1";
  this.dark = "#728d9d";
  this.lightbackground = "#92b1c3";
  this.btnBackground = "linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))";
  this.boxShadow1 = '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px 0px var(--my-shadow-color1)';
  this.btnBackgroundx = "linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))";
  this.boxShadow1x = 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)';
  this.btnBackground2 = 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))';
  this.boxShadow2 = '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)';
}

function sanitizeInput(value) {
  const tempDiv = document.createElement("div");
  tempDiv.textContent = value;
  return tempDiv.innerHTML;
}

function getPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet2")) || {};

  colorSet.background = sanitizeInput(document.getElementById("background-picker").value);
  colorSet.accent = sanitizeInput(document.getElementById("accent-picker").value);
  colorSet.shadow1 = sanitizeInput(document.getElementById("shad1-picker").value);
  colorSet.shadow2 = sanitizeInput(document.getElementById("shad2-picker").value);
  colorSet.shadow3 = sanitizeInput(document.getElementById("shad3-picker").value);
  colorSet.shadow4 = sanitizeInput(document.getElementById("shad4-picker").value);
  colorSet.username = sanitizeInput(document.getElementById("userName").value);
  colorSet.glow = sanitizeInput(document.getElementById("nameGlow").value);
  colorSet.text = sanitizeInput(document.getElementById("nameColor").value);
  colorSet.outline = sanitizeInput(document.getElementById("outlineColor").value);
  colorSet.light = sanitizeInput(document.getElementById("fl-picker").value);
  colorSet.medlight = sanitizeInput(document.getElementById("ml-picker").value);
  colorSet.meddark = sanitizeInput(document.getElementById("md-picker").value);
  colorSet.dark = sanitizeInput(document.getElementById("fd-picker").value);
  colorSet.lightbackground = sanitizeInput(document.getElementById("bg2-picker").value);

  const xOffset = sanitizeInput(document.getElementById("x-offset").value);
  const yOffset = sanitizeInput(document.getElementById("y-offset").value);
  const blur = sanitizeInput(document.getElementById("blur").value);
  const spread = sanitizeInput(document.getElementById("spread").value);
  const shadDouble = document.getElementById("shadDouble");

  colorSet.btnBackground = `linear-gradient(145deg, ${colorSet.shadow3}, ${colorSet.shadow2})`;
  colorSet.btnBackgroundx = `linear-gradient(145deg, ${colorSet.shadow2}, ${colorSet.shadow3})`;
  colorSet.btnBackground2 = `linear-gradient(315deg, ${colorSet.meddark}, ${colorSet.medlight})`;

  colorSet.boxShadow1 = `${xOffset}px ${yOffset}px ${blur}px ${spread}px ${colorSet.shadow4}`; 
  if(shadDouble.checked) {
    colorSet.boxShadow1 += `, ${-xOffset}px ${-yOffset}px ${blur}px ${spread}px ${colorSet.shadow1}`;
  }

  colorSet.boxShadow1x = `inset ${-xOffset}px ${-yOffset}px ${blur}px ${spread}px ${colorSet.shadow1}`; 
  if(shadDouble.checked) {
    colorSet.boxShadow1x += `, inset ${xOffset}px ${yOffset}px ${blur}px ${spread}px ${colorSet.shadow4}`;
  }

  const xOffset2 = sanitizeInput(document.getElementById("x-offset2").value);
  const yOffset2 = sanitizeInput(document.getElementById("y-offset2").value);
  const blur2 = sanitizeInput(document.getElementById("blur2").value);
  const spread2 = sanitizeInput(document.getElementById("spread2").value);

  colorSet.boxShadow2 = `${xOffset2}px ${yOffset2}px ${blur2}px ${spread2}px ${colorSet.dark}, ${-xOffset2}px ${-yOffset2}px ${blur2}px ${spread2}px ${colorSet.light}`;

  const previewBtn = document.getElementById('previewBtn');
  previewBtn.style.background = colorSet.btnBackground;
  previewBtn.style.boxShadow = colorSet.boxShadow1;
  document.getElementById('displayPreviewDiv').style.background = colorSet.background;

  const previewDiv = document.getElementById('previewDiv');
  previewDiv.style.background = colorSet.btnBackground2;
  previewDiv.style.boxShadow = colorSet.boxShadow2;
  document.getElementById('previewBtn2').style.borderColor = colorSet.accent;

  localStorage.setItem("colorSet2", JSON.stringify(colorSet)); 
}

function setPicker() {

  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || {};

  document.getElementById("background-picker").value = colorSet.background || '';
  document.getElementById("accent-picker").value = colorSet.accent || '';
  document.getElementById("shad1-picker").value = colorSet.shadow1 || '';
  document.getElementById("shad2-picker").value = colorSet.shadow2 || '';
  document.getElementById("shad3-picker").value = colorSet.shadow3 || '';
  document.getElementById("shad4-picker").value = colorSet.shadow4 || '';
  if (colorSet.username != null) {
    document.getElementById("userName").value = colorSet.username;
  }
  document.getElementById("nameGlow").value = colorSet.glow || '';
  document.getElementById("nameColor").value = colorSet.text || '';
  document.getElementById("outlineColor").value = colorSet.outline || '';
  document.getElementById("fl-picker").value = colorSet.light || '';
  document.getElementById("ml-picker").value = colorSet.medlight || '';
  document.getElementById("md-picker").value = colorSet.meddark || '';
  document.getElementById("fd-picker").value = colorSet.dark || '';
  document.getElementById("bg2-picker").value = colorSet.lightbackground || '';

  if (colorSet.boxShadow1) {
    const boxShadow1Parts = colorSet.boxShadow1.split(' ');
    document.getElementById("x-offset").value = parseInt(boxShadow1Parts[0]);
    document.getElementById("y-offset").value = parseInt(boxShadow1Parts[1]);
    document.getElementById("blur").value = parseInt(boxShadow1Parts[2]);
    document.getElementById("spread").value = parseInt(boxShadow1Parts[3]);
  }

  if (colorSet.boxShadow2) {
    const boxShadow2Parts = colorSet.boxShadow2.split(' ');
    document.getElementById("x-offset2").value = parseInt(boxShadow2Parts[0]);
    document.getElementById("y-offset2").value = parseInt(boxShadow2Parts[1]);
    document.getElementById("blur2").value = parseInt(boxShadow2Parts[2]);
    document.getElementById("spread2").value = parseInt(boxShadow2Parts[3]);
  }
}

function setProperty() {

  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || {};

  document.documentElement.style.setProperty('--my-background-color', colorSet.background || '');
  document.documentElement.style.setProperty('--my-accent-color', colorSet.accent || '');
  document.documentElement.style.setProperty('--my-shadow-color1', colorSet.shadow1 || '');
  document.documentElement.style.setProperty('--my-shadow-color2', colorSet.shadow2 || '');
  document.documentElement.style.setProperty('--my-shadow-color3', colorSet.shadow3 || '');
  document.documentElement.style.setProperty('--my-shadow-color4', colorSet.shadow4 || '');
  document.documentElement.style.setProperty('--my-glow-color', colorSet.glow || '');
  document.documentElement.style.setProperty('--glow-txt-color', colorSet.text || '');
  document.documentElement.style.setProperty('--glow-outline-color', colorSet.outline || '');
  document.documentElement.style.setProperty('--hover-color', colorSet.hover || '');
  document.documentElement.style.setProperty('--active-color', colorSet.active || '');
  document.documentElement.style.setProperty('--fancy-light', colorSet.light || '');
  document.documentElement.style.setProperty('--fancy-medlight', colorSet.medlight || '');
  document.documentElement.style.setProperty('--fancy-meddark', colorSet.meddark || '');
  document.documentElement.style.setProperty('--fancy-dark', colorSet.dark || '');
  document.documentElement.style.setProperty('--fancy-background', colorSet.lightbackground || '');

  document.documentElement.style.setProperty('--box-shadow1', colorSet.boxShadow1 || '');
  document.documentElement.style.setProperty('--btn-background', colorSet.btnBackground || '');

  document.documentElement.style.setProperty('--box-shadow1x', colorSet.boxShadow1x || '');
  document.documentElement.style.setProperty('--btn-backgroundx', colorSet.btnBackgroundx || '');

  document.documentElement.style.setProperty('--box-shadow2', colorSet.boxShadow2 || '');
  document.documentElement.style.setProperty('--btn-background2', colorSet.btnBackground2 || '');

  if (colorSet.username != null) {
    document.getElementById("userName").value = colorSet.username;
    document.getElementById("glowDiv").innerHTML = sanitizeInput(colorSet.username);
  }
}

function setColor(colors) {
  const colorSet = new colorObject();

  switch (colors) {
    case "default":
      Object.assign(colorSet, {
        background: "#2d4252",
        accent: "#7c878f",
        shadow1: "#68869c",
        shadow2: "#1c2a35",
        shadow3: "#425e70",
        shadow4: "#0e1315",
        glow: "#ffffff",
        text: "#ffffff",
        outline: "#000000",
        hover: "#7C878F32",
        active: "#7C878F60",
        light: "#ffffff",
        medlight: "#c3cacf",
        meddark: "#a4aaae",
        dark: "#6d7174",
        lightbackground: "#B6BDC1",
        btnBackground: 'linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))',
        boxShadow1: '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px 0px var(--my-shadow-color1)',
        btnBackgroundx: "linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))",
        boxShadow1x: 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)',
        btnBackground2: 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))',
        boxShadow2: '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)'
      });
      break;
    case "grey":
      Object.assign(colorSet, {
        background: "#4f4f4f",
        accent: "#707070",
        shadow1: "#7e7e7e",
        shadow2: "#555555",
        shadow3: "#474747",
        shadow4: "#202020",
        glow: "#ffffff",
        text: "#000000",
        outline: "#ffffff",
        hover: "#70707032",
        active: "#70707060",
        light: "#ffffff",
        medlight: "#cccccc",
        meddark: "#acacac",
        dark: "#737373",
        lightbackground: "#bfbfbf",
        btnBackground: 'linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))',
        boxShadow1: '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px 0px var(--my-shadow-color1)',
        btnBackgroundx: "linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))",
        boxShadow1x: 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)',
        btnBackground2: 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))',
        boxShadow2: '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)'
      });
      break;
    case "red":
      Object.assign(colorSet, {
        background: "#622823",
        accent: "#81524E",
        shadow1: "#9d4038",
        shadow2: "#692b25",
        shadow3: "#582420",
        shadow4: "#27100e",
        glow: "#ffffff",
        text: "#000000",
        outline: "#ffffff",
        hover: "#81524E32",
        active: "#81524E60",
        light: "#ffffff",
        medlight: "#ffdada",
        meddark: "#e6b8b8",
        dark: "#997a7a",
        lightbackground: "#ffcccc",
        btnBackground: 'linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))',
        boxShadow1: '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px 0px var(--my-shadow-color1)',
        btnBackgroundx: "linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))",
        boxShadow1x: 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)',
        btnBackground2: 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))',
        boxShadow2: '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)'
      });
      break;
    case "green":
      Object.assign(colorSet, {
        background: "#2f9844",
        accent: "#58ac69",
        shadow1: "#4bf36d",
        shadow2: "#32a349",
        shadow3: "#2a893d",
        shadow4: "#133d1b",
        glow: "#E3FFE4",
        text: "#000000",
        outline: "#FFFFFF",
        hover: "#58ac6932",
        active: "#58ac6960",
        light: "#ffffff",
        medlight: "#e3ffe4",
        meddark: "#bfdac0",
        dark: "#7f9180",
        lightbackground: "#c5edc6",
        btnBackground: 'linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))',
        boxShadow1: '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px var(--my-shadow-color1)',
        btnBackgroundx: "linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))",
        boxShadow1x: 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)',
        btnBackground2: 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))',
        boxShadow2: '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)'
      });
      break;
    case "pink":
      Object.assign(colorSet, {
        background: "#fbc1fa",
        accent: "#FF52FC",
        shadow1: "#FFE5FF",
        shadow2: "#FFDBFE",
        shadow3: "#DEABDD",
        shadow4: "#C392C2",
        glow: "#FFFFFF",
        text: "#FFFFFF",
        outline: "#000000",
        hover: "#FFDBFE32",
        active: "#FFDBFE60",
        light: "#FFE5FF",
        medlight: "#FFDBFE",
        meddark: "#DEABDD",
        dark: "#C392C2",
        lightbackground: "#fbc1fa",
        btnBackground: 'linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))',
        boxShadow1: '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px 0px var(--my-shadow-color1)',
        btnBackgroundx: "linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))",
        boxShadow1x: 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)',
        btnBackground2: 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))',
        boxShadow2: '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)'
      });
      break;
   case "ACDF":
      Object.assign(colorSet, {
        background: "#0D274A",
        accent: "#1D4D8B",
        shadow1: "#1D4D8B",
        shadow2: "#153E75",
        shadow3: "#08172B",
        shadow4: "#030912",
        username: '',
        glow: "#ffffff",
        text: "#ffffff",
        outline: "#000000",
        hover: "#1D4D8B32",
        active: "#1D4D8B60",
        light: "#b8def5",
        medlight: "#aed1e5",
        meddark: "#86a1b1",
        dark: "#728d9d",
        lightbackground: "#92b1c3",
        btnBackground: 'linear-gradient(145deg, var(--my-shadow-color3), var(--my-shadow-color2))',
        boxShadow1: '2px 2px 6px 0px var(--my-shadow-color4), -2px -2px 6px 0px var(--my-shadow-color1)',
        btnBackgroundx: 'linear-gradient(145deg, var(--my-shadow-color2), var(--my-shadow-color3))',
        boxShadow1x: 'inset -2px -2px 6px 0px var(--my-shadow-color1), inset 2px 2px 6px 0px var(--my-shadow-color4)',
        btnBackground2: 'linear-gradient(315deg, var(--fancy-meddark), var(--fancy-medlight))',
        boxShadow2: '-5px -5px 16px 0px var(--fancy-dark), 5px 5px 16px 0px var(--fancy-light)'
      });
      break;
  }

  localStorage.setItem("colorSet1", JSON.stringify(colorSet));
  localStorage.setItem("colorSet2", JSON.stringify(colorSet));
  setPicker();
  setProperty();
  getPicker();
}

function adjustValue(input, increment) {
  let value = parseInt(input.value) + increment;
  input.value = value;
  getPicker();
}

function personalize() {
  MENU();
  startListening();
  document.getElementById("appearDiv").style.display = "inline-block";
}

function exitColor() {
  document.getElementById("appearDiv").style.display = "none";
  location.reload();
  stopListening();
}

function saveColors() {
  getPicker();
  const colorSet = JSON.parse(localStorage.getItem("colorSet2"));
  localStorage.setItem("colorSet1", JSON.stringify(colorSet));
  setProperty();
  exitColor();
}

function resetColors() {
  if (localStorage.getItem("colorSet1") === null) {
    setColor("ACDF");
  } else {
    setPicker();
    setProperty();
  }
  const shadDouble = document.getElementById("shadDouble");
  const doubleBubble = localStorage.getItem("doubleBubble");
  if (doubleBubble === 'true' || doubleBubble === null) {
    shadDouble.checked = true;
  } else {
    shadDouble.checked = false;
  }
}

function startListening() {
const xOffsetInput = document.getElementById('x-offset');
const yOffsetInput = document.getElementById('y-offset');
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

const xOffsetInput2 = document.getElementById('x-offset2');
const yOffsetInput2 = document.getElementById('y-offset2');
const blurInput2 = document.getElementById('blur2');
const spreadInput2 = document.getElementById('spread2');
const xOffsetDecrementBtn2 = document.getElementById('xOffsetDecrement2');
const xOffsetIncrementBtn2 = document.getElementById('xOffsetIncrement2');
const yOffsetDecrementBtn2 = document.getElementById('yOffsetDecrement2');
const yOffsetIncrementBtn2 = document.getElementById('yOffsetIncrement2');
const blurDecrementBtn2 = document.getElementById('blurDecrement2');
const blurIncrementBtn2 = document.getElementById('blurIncrement2');
const spreadDecrementBtn2 = document.getElementById('spreadDecrement2');
const spreadIncrementBtn2 = document.getElementById('spreadIncrement2');


document.getElementById("background-picker").addEventListener('input', getPicker);
document.getElementById("accent-picker").addEventListener('input', getPicker);
document.getElementById("shad1-picker").addEventListener('input', getPicker);
document.getElementById("shad2-picker").addEventListener('input', getPicker);
document.getElementById("shad3-picker").addEventListener('input', getPicker);
document.getElementById("shad4-picker").addEventListener('input', getPicker);

document.getElementById("fl-picker").addEventListener('input', getPicker);
document.getElementById("ml-picker").addEventListener('input', getPicker);
document.getElementById("md-picker").addEventListener('input', getPicker);
document.getElementById("fd-picker").addEventListener('input', getPicker);
document.getElementById("bg2-picker").addEventListener('input', getPicker);

xOffsetInput.addEventListener('input', getPicker);
yOffsetInput.addEventListener('input', getPicker);
blurInput.addEventListener('input', getPicker);
spreadInput.addEventListener('input', getPicker);
xOffsetDecrementBtn.addEventListener('click', () => adjustValue(xOffsetInput, -1));
xOffsetIncrementBtn.addEventListener('click', () => adjustValue(xOffsetInput, 1));
yOffsetDecrementBtn.addEventListener('click', () => adjustValue(yOffsetInput, -1));
yOffsetIncrementBtn.addEventListener('click', () => adjustValue(yOffsetInput, 1));
blurDecrementBtn.addEventListener('click', () => adjustValue(blurInput, -1));
blurIncrementBtn.addEventListener('click', () => adjustValue(blurInput, 1));
spreadDecrementBtn.addEventListener('click', () => adjustValue(spreadInput, -1));
spreadIncrementBtn.addEventListener('click', () => adjustValue(spreadInput, 1));

xOffsetInput2.addEventListener('input', getPicker);
yOffsetInput2.addEventListener('input', getPicker);
blurInput2.addEventListener('input', getPicker);
spreadInput2.addEventListener('input', getPicker);
xOffsetDecrementBtn2.addEventListener('click', () => adjustValue(xOffsetInput2, -1));
xOffsetIncrementBtn2.addEventListener('click', () => adjustValue(xOffsetInput2, 1));
yOffsetDecrementBtn2.addEventListener('click', () => adjustValue(yOffsetInput2, -1));
yOffsetIncrementBtn2.addEventListener('click', () => adjustValue(yOffsetInput2, 1));
blurDecrementBtn2.addEventListener('click', () => adjustValue(blurInput2, -1));
blurIncrementBtn2.addEventListener('click', () => adjustValue(blurInput2, 1));
spreadDecrementBtn2.addEventListener('click', () => adjustValue(spreadInput2, -1));
spreadIncrementBtn2.addEventListener('click', () => adjustValue(spreadInput2, 1));
}

function stopListening() {
const xOffsetInput = document.getElementById('x-offset');
const yOffsetInput = document.getElementById('y-offset');
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

const xOffsetInput2 = document.getElementById('x-offset2');
const yOffsetInput2 = document.getElementById('y-offset2');
const blurInput2 = document.getElementById('blur2');
const spreadInput2 = document.getElementById('spread2');
const xOffsetDecrementBtn2 = document.getElementById('xOffsetDecrement2');
const xOffsetIncrementBtn2 = document.getElementById('xOffsetIncrement2');
const yOffsetDecrementBtn2 = document.getElementById('yOffsetDecrement2');
const yOffsetIncrementBtn2 = document.getElementById('yOffsetIncrement2');
const blurDecrementBtn2 = document.getElementById('blurDecrement2');
const blurIncrementBtn2 = document.getElementById('blurIncrement2');
const spreadDecrementBtn2 = document.getElementById('spreadDecrement2');
const spreadIncrementBtn2 = document.getElementById('spreadIncrement2');


document.getElementById("background-picker").removeEventListener('input', getPicker);
document.getElementById("accent-picker").removeEventListener('input', getPicker);
document.getElementById("shad1-picker").removeEventListener('input', getPicker);
document.getElementById("shad2-picker").removeEventListener('input', getPicker);
document.getElementById("shad3-picker").removeEventListener('input', getPicker);
document.getElementById("shad4-picker").removeEventListener('input', getPicker);

document.getElementById("fl-picker").removeEventListener('input', getPicker);
document.getElementById("ml-picker").removeEventListener('input', getPicker);
document.getElementById("md-picker").removeEventListener('input', getPicker);
document.getElementById("fd-picker").removeEventListener('input', getPicker);
document.getElementById("bg2-picker").removeEventListener('input', getPicker);

xOffsetInput.removeEventListener('input', getPicker);
yOffsetInput.removeEventListener('input', getPicker);
blurInput.removeEventListener('input', getPicker);
spreadInput.removeEventListener('input', getPicker);
xOffsetDecrementBtn.removeEventListener('click', () => adjustValue(xOffsetInput, -1));
xOffsetIncrementBtn.removeEventListener('click', () => adjustValue(xOffsetInput, 1));
yOffsetDecrementBtn.removeEventListener('click', () => adjustValue(yOffsetInput, -1));
yOffsetIncrementBtn.removeEventListener('click', () => adjustValue(yOffsetInput, 1));
blurDecrementBtn.removeEventListener('click', () => adjustValue(blurInput, -1));
blurIncrementBtn.removeEventListener('click', () => adjustValue(blurInput, 1));
spreadDecrementBtn.removeEventListener('click', () => adjustValue(spreadInput, -1));
spreadIncrementBtn.removeEventListener('click', () => adjustValue(spreadInput, 1));

xOffsetInput2.removeEventListener('input', getPicker);
yOffsetInput2.removeEventListener('input', getPicker);
blurInput2.removeEventListener('input', getPicker);
spreadInput2.removeEventListener('input', getPicker);
xOffsetDecrementBtn2.removeEventListener('click', () => adjustValue(xOffsetInput2, -1));
xOffsetIncrementBtn2.removeEventListener('click', () => adjustValue(xOffsetInput2, 1));
yOffsetDecrementBtn2.removeEventListener('click', () => adjustValue(yOffsetInput2, -1));
yOffsetIncrementBtn2.removeEventListener('click', () => adjustValue(yOffsetInput2, 1));
blurDecrementBtn2.removeEventListener('click', () => adjustValue(blurInput2, -1));
blurIncrementBtn2.removeEventListener('click', () => adjustValue(blurInput2, 1));
spreadDecrementBtn2.removeEventListener('click', () => adjustValue(spreadInput2, -1));
spreadIncrementBtn2.removeEventListener('click', () => adjustValue(spreadInput2, 1));
}