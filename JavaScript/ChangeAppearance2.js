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
  this.background = "#2d4252";
  this.accent = "#7c878f";
  this.shadow1 = "#688da6";
  this.shadow2 = "#1c2a35";
  this.shadow3 = "#425e70";
  this.shadow4 = "#0e1315";
  this.username = '';
  this.glow = "#ffffff";
  this.text = "#ffffff";
  this.outline = "#000000";
  this.hover = "#7C878F32";
  this.active = "#7C878F60";
  this.light = "#ffffff";
  this.medlight = "#c3cacf";
  this.meddark = "#a4aaae";
  this.dark = "#6d7174";
  this.lightbackground = "#B6BDC1";
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

  localStorage.setItem("colorSet2", JSON.stringify(colorSet));
}

function setPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet2")) || {};

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
}

function setProperty() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet2")) || {};

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
        lightbackground: "#B6BDC1"
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
        lightbackground: "#bfbfbf"
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
        lightbackground: "#ffcccc"
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
        lightbackground: "#c5edc6"
      });
      break;
  }

  localStorage.setItem("colorSet2", JSON.stringify(colorSet));
  setPicker();
  setProperty();
}

function personalize() {
  MENU();
  document.getElementById("appearDiv").style.display = "inline-block";
}

function exitColor() {
  document.getElementById("appearDiv").style.display = "none";
  location.reload();
}

function saveColors() {
  getPicker();
  setProperty();
  exitColor();
}

function resetColors() {
  if (localStorage.getItem("colorSet2") === null) {
    setColor("default");
  } else {
    const colorSet = JSON.parse(localStorage.getItem("colorSet2"));
    setPicker();
    setProperty();
  }
}
