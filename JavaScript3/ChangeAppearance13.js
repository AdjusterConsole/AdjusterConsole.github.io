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

function sanitizeInput(value) {
  const tempDiv = document.createElement("div");
  tempDiv.textContent = value;
  return tempDiv.innerHTML;
}

class ColorObject {
  constructor() {
    this.background = "#324350";
    this.accent = "#7C878F";
    this.shadow1 = "#D4D7DA";
    this.shadow2 = "#1A2229";
    this.username = '';
    this.glow = "#ffffff";
    this.text = "#000000";
    this.outline = "#ffffff";
    this.hover = "#7C878F32";
    this.active = "#7C878F60";
    this.light = "#ffffff";
    this.medlight = "#c3cacf";
    this.meddark = "#a4aaae";
    this.dark = "#6d7174";
    this.lightbackground = "#B6BDC1";
  }
}

function getPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new ColorObject();

  colorSet.background = sanitizeInput(document.getElementById("background-picker").value);
  colorSet.accent = sanitizeInput(document.getElementById("accent-picker").value);
  colorSet.shadow1 = sanitizeInput(document.getElementById("shad1-picker").value);
  colorSet.shadow2 = sanitizeInput(document.getElementById("shad2-picker").value);
  colorSet.username = sanitizeInput(document.getElementById("userName").value);
  colorSet.glow = sanitizeInput(document.getElementById("nameGlow").value);
  colorSet.text = sanitizeInput(document.getElementById("nameColor").value);
  colorSet.outline = sanitizeInput(document.getElementById("outlineColor").value);

  localStorage.setItem("colorSet1", JSON.stringify(colorSet));
}

function setPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new ColorObject();

  document.getElementById("background-picker").value = colorSet.background;
  document.getElementById("accent-picker").value = colorSet.accent;
  document.getElementById("shad1-picker").value = colorSet.shadow1;
  document.getElementById("shad2-picker").value = colorSet.shadow2;
  document.getElementById("userName").value = colorSet.username || '';
  document.getElementById("nameGlow").value = colorSet.glow;
  document.getElementById("nameColor").value = colorSet.text;
  document.getElementById("outlineColor").value = colorSet.outline;
}

function setProperty() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new ColorObject();

  document.documentElement.style.setProperty('--my-background-color', colorSet.background);
  document.documentElement.style.setProperty('--my-accent-color', colorSet.accent);
  document.documentElement.style.setProperty('--my-shadow-color1', colorSet.shadow1);
  document.documentElement.style.setProperty('--my-shadow-color2', colorSet.shadow2);
  document.documentElement.style.setProperty('--my-glow-color', colorSet.glow);
  document.documentElement.style.setProperty('--glow-txt-color', colorSet.text);
  document.documentElement.style.setProperty('--glow-outline-color', colorSet.outline);
  document.documentElement.style.setProperty('--hover-color', colorSet.hover);
  document.documentElement.style.setProperty('--active-color', colorSet.active);
  document.documentElement.style.setProperty('--fancy-light', colorSet.light);
  document.documentElement.style.setProperty('--fancy-medlight', colorSet.medlight);
  document.documentElement.style.setProperty('--fancy-meddark', colorSet.meddark);
  document.documentElement.style.setProperty('--fancy-dark', colorSet.dark);
  document.documentElement.style.setProperty('--fancy-background', colorSet.lightbackground);

  if (colorSet.username) {
    document.getElementById("userName").value = colorSet.username;
    document.getElementById("glowDiv").innerHTML = sanitizeInput(colorSet.username);
  }
}

function setColor(colors) {
  const colorSet = new ColorObject();
  switch (colors) {
    case "default":
      Object.assign(colorSet, {
        background: "#324350",
        accent: "#7C878F",
        shadow1: "#D4D7DA",
        shadow2: "#1A2229",
        glow: "#ffffff",
        text: "#000000",
        outline: "#FFFFFF",
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
        shadow1: "#cecece",
        shadow2: "#141414",
        glow: "#ffffff",
        text: "#000000",
        outline: "#ffffff",
        hover: "#70707032",
        active: "#70707060",
        light: "#fafafa",
        medlight: "#cccccc",
        meddark: "#acacac",
        dark: "#848484",
        lightbackground: "#bfbfbf"
      });
      break;
    case "red":
      Object.assign(colorSet, {
        background: "#622823",
        accent: "#81524E",
        shadow1: "#CFBEBD",
        shadow2: "#130807",
        glow: "#ffffff",
        text: "#000000",
        outline: "#2f9844",
        hover: "#81524E32",
        active: "#81524E60",
        light: "#fafafa",
        medlight: "#cccccc",
        meddark: "#acacac",
        dark: "#848484",
        lightbackground: "#bfbfbf"
      });
      break;
    case "green":
      Object.assign(colorSet, {
        background: "#2f9844",
        accent: "#58ac69",
        shadow1: "#c0e0c6",
        shadow2: "#040f06",
        glow: "#ffffff",
        text: "#98422f",
        outline: "#98422f",
        hover: "#58ac6932",
        active: "#58ac6960",
        light: "#fafafa",
        medlight: "#cccccc",
        meddark: "#acacac",
        dark: "#848484",
        lightbackground: "#bfbfbf"
      });
      break;
  }
  localStorage.setItem("colorSet1", JSON.stringify(colorSet));
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
  if (!localStorage.getItem("colorSet1")) {
    setColor("default");
  } else {
    const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new ColorObject();
    setPicker();
    setProperty();
  }
}
