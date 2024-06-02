//Restricted Use License
//
//This code is provided under the following terms and conditions:
//
//1. You are not allowed to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this code in any form, modified or unmodified, without express written permission from the author.
//
//2. You are not allowed to use this code for any illegal or unethical purpose.
//
//3. This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
//
//4. This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
//
//By viewing this code, you agree to abide by these terms and conditions. Failure to comply with these terms may result in legal action.
//
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.

function sanitizeInput(value) {
  const tempDiv = document.createElement("div");
  tempDiv.textContent = value;
  return tempDiv.innerHTML;
}

function colorObject() {
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

function getPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new colorObject();

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
  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new colorObject();

  document.getElementById("background-picker").value = colorSet.background;
  document.getElementById("accent-picker").value = colorSet.accent;
  document.getElementById("shad1-picker").value = colorSet.shadow1;
  document.getElementById("shad2-picker").value = colorSet.shadow2;
  if (colorSet.username != null) {
    document.getElementById("userName").value = colorSet.username;
  }
  document.getElementById("nameGlow").value = colorSet.glow;
  document.getElementById("nameColor").value = colorSet.text;
  document.getElementById("outlineColor").value = colorSet.outline;
}

function setProperty() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new colorObject();

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

  if (colorSet.username != null) {
    document.getElementById("userName").value = colorSet.username;
    document.getElementById("glowDiv").innerHTML = sanitizeInput(colorSet.username);
  }
}

function setColor(colors) {
  const colorSet = new colorObject();
  switch (colors) {
    case "default":
      colorSet.background = "#324350";
      colorSet.accent = "#7C878F";
      colorSet.shadow1 = "#D4D7DA";
      colorSet.shadow2 = "#1A2229";
      colorSet.glow = "#ffffff";
      colorSet.text = "#000000";
      colorSet.outline = "#FFFFFF";
      colorSet.hover = "#7C878F32";
      colorSet.active = "#7C878F60";
      colorSet.light = "#ffffff";
      colorSet.medlight = "#c3cacf";
      colorSet.meddark = "#a4aaae";
      colorSet.dark = "#6d7174";
      colorSet.lightbackground = "#B6BDC1";
      break;
    case "grey":
      colorSet.background = "#4f4f4f";
      colorSet.accent = "#707070";
      colorSet.shadow1 = "#cecece";
      colorSet.shadow2 = "#141414";
      colorSet.glow = "#ffffff";
      colorSet.text = "#000000";
      colorSet.outline = "#ffffff";
      colorSet.hover = "#70707032";
      colorSet.active = "#70707060";
      colorSet.light = "#fafafa";
      colorSet.medlight = "#cccccc";
      colorSet.meddark = "#acacac";
      colorSet.dark = "#848484";
      colorSet.lightbackground = "#bfbfbf";
      break;
    case "red":
      colorSet.background = "#622823";
      colorSet.accent = "#81524E";
      colorSet.shadow1 = "#CFBEBD";
      colorSet.shadow2 = "#130807";
      colorSet.glow = "#ffffff";
      colorSet.text = "#000000";
      colorSet.outline = "#2f9844";
      colorSet.hover = "#81524E32";
      colorSet.active = "#81524E60";
      colorSet.light = "#fafafa";
      colorSet.medlight = "#cccccc";
      colorSet.meddark = "#acacac";
      colorSet.dark = "#848484";
      colorSet.lightbackground = "#bfbfbf";
      break;
    case "green":
      colorSet.background = "#2f9844";
      colorSet.accent = "#58ac69";
      colorSet.shadow1 = "#c0e0c6";
      colorSet.shadow2 = "#040f06";
      colorSet.glow = "#ffffff";
      colorSet.text = "#98422f";
      colorSet.outline = "#98422f";
      colorSet.hover = "#58ac6932";
      colorSet.active = "#58ac6960";
      colorSet.light = "#fafafa";
      colorSet.medlight = "#cccccc";
      colorSet.meddark = "#acacac";
      colorSet.dark = "#848484";
      colorSet.lightbackground = "#bfbfbf";
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
  if (localStorage.getItem("colorSet1") === null) {
    setColor("default");
  } else {
    const colorSet = JSON.parse(localStorage.getItem("colorSet1")) || new colorObject();
    setPicker();
    setProperty();
  }
}
