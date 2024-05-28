function colorObject() {
  this.background = "#324350";
  this.accent = "#7C878F";
  this.shadow1 = "#506b7f";
  this.shadow2 = "#2d3c48";
  this.shadow3 = "#364856";
  this.shadow4 = "#151b21";
  this.username;
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

function getPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet2"));

  colorSet.background = document.getElementById("background-picker").value;
  colorSet.accent = document.getElementById("accent-picker").value;
  colorSet.shadow1 = document.getElementById("shad1-picker").value;
  colorSet.shadow2 = document.getElementById("shad2-picker").value;
  colorSet.shadow3 = document.getElementById("shad3-picker").value;
  colorSet.shadow4 = document.getElementById("shad4-picker").value;
  colorSet.username = document.getElementById("userName").value;
  colorSet.glow = document.getElementById("nameGlow").value;
  colorSet.text = document.getElementById("nameColor").value;
  colorSet.outline = document.getElementById("outlineColor").value;
  colorSet.light = document.getElementById("fl-picker").value;
  colorSet.medlight = document.getElementById("ml-picker").value;
  colorSet.meddark = document.getElementById("md-picker").value;
  colorSet.dark = document.getElementById("fd-picker").value;
  colorSet.lightbackground = document.getElementById("bg2-picker").value;

  localStorage.setItem("colorSet2", JSON.stringify(colorSet));
}

function setPicker() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet2"));
  document.getElementById("background-picker").value = colorSet.background;
  document.getElementById("accent-picker").value = colorSet.accent;
  document.getElementById("shad1-picker").value = colorSet.shadow1;
  document.getElementById("shad2-picker").value = colorSet.shadow2;
  document.getElementById("shad3-picker").value = colorSet.shadow3;
  document.getElementById("shad4-picker").value = colorSet.shadow4;
  if (colorSet.username != null){
  document.getElementById("userName").value = colorSet.username; }
  document.getElementById("nameGlow").value = colorSet.glow;
  document.getElementById("nameColor").value = colorSet.text;
  document.getElementById("outlineColor").value = colorSet.outline;
  document.getElementById("fl-picker").value = colorSet.light;
  document.getElementById("ml-picker").value = colorSet.medlight;
  document.getElementById("md-picker").value = colorSet.meddark;
  document.getElementById("fd-picker").value = colorSet.dark;
  document.getElementById("bg2-picker").value = colorSet.lightbackground;
}

function setProperty() {
  const colorSet = JSON.parse(localStorage.getItem("colorSet2"));

  document.documentElement.style.setProperty('--my-background-color', colorSet.background);
  document.documentElement.style.setProperty('--my-accent-color', colorSet.accent);
  document.documentElement.style.setProperty('--my-shadow-color1', colorSet.shadow1);
  document.documentElement.style.setProperty('--my-shadow-color2', colorSet.shadow2);
  document.documentElement.style.setProperty('--my-shadow-color3', colorSet.shadow3);
  document.documentElement.style.setProperty('--my-shadow-color4', colorSet.shadow4);
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
    document.getElementById("glowDiv").innerHTML = colorSet.username;
  }
}

function setColor(colors) {
  const colorSet = new colorObject();
  switch(colors) {
  case "default":
    colorSet.background = "#324350";
    colorSet.accent = "#7C878F";
    colorSet.shadow1 = "#506b7f";
    colorSet.shadow2 = "#2d3c48";
    colorSet.shadow3 = "#364856";
    colorSet.shadow4 = "#151b21";
    colorSet.glow = "#ffffff";
    colorSet.text = "#ffffff";
    colorSet.outline = "#000000";
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
    colorSet.shadow1 = "#7e7e7e";
    colorSet.shadow2 = "#555555";
    colorSet.shadow3 = "#474747";
    colorSet.shadow4 = "#202020";
    colorSet.glow = "#ffffff";
    colorSet.text = "#000000";
    colorSet.outline = "#ffffff";
    colorSet.hover = "#70707032";
    colorSet.active = "#70707060";
    colorSet.light = "#ffffff";
    colorSet.medlight = "#cccccc";
    colorSet.meddark = "#acacac";
    colorSet.dark = "#737373";
    colorSet.lightbackground = "#bfbfbf";
    break;
  case "red":
    colorSet.background = "#622823";
    colorSet.accent = "#81524E";
    colorSet.shadow1 = "#9d4038";
    colorSet.shadow2 = "#692b25";
    colorSet.shadow3 = "#582420";
    colorSet.shadow4 = "#27100e";
    colorSet.glow = "#ffffff";
    colorSet.text = "#000000";
    colorSet.outline = "#ffffff";
    colorSet.hover = "#81524E32";
    colorSet.active = "#81524E60";
    colorSet.light = "#ffffff";
    colorSet.medlight = "#ffdada";
    colorSet.meddark = "#e6b8b8";
    colorSet.dark = "#997a7a";
    colorSet.lightbackground = "#ffcccc";
    break;
  case "green":
    colorSet.background = "#2f9844";
    colorSet.accent = "#58ac69";
    colorSet.shadow1 = "#4bf36d";
    colorSet.shadow2 = "#32a349";
    colorSet.shadow3 = "#2a893d";
    colorSet.shadow4 = "#133d1b";
    colorSet.glow = "#E3FFE4";
    colorSet.text = "#000000";
    colorSet.outline = "#FFFFFF";
    colorSet.hover = "#58ac6932";
    colorSet.active = "#58ac6960";
    colorSet.light = "#ffffff";
    colorSet.medlight = "#e3ffe4";
    colorSet.meddark = "#bfdac0";
    colorSet.dark = "#7f9180";
    colorSet.lightbackground = "#c5edc6";
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