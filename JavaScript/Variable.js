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
//By using this code, you agree to abide by these terms and conditions. Failure to comply with these terms may result in legal action.
//
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole.com.

var ButDidYouDie = "no";
var IDset = [];
var imBusy = "false";
var DaddySaysSo = false;
const menu = document.getElementById("context-menu");
var menuState = 0;
var colorState = "0";
var contextMenuActive = "block";

function RESET() {
  document.getElementById("textarea3").value = "";
  document.getElementById("textarea2").value = "";
  document.getElementById("textarea1").value = "CONTACT:   \rPAYMENT:   \rZIPCODE:   \rMILEAGE:   \rDISTANCE:   \rTIME:   ";
  document.getElementById("partname1").value = "";
  document.getElementById("partname2").value = "";
  document.getElementById("partname3").value = "";
  document.getElementById("partname4").value = "";
  document.getElementById("partname5").value = "";
  document.getElementById("partname6").value = "";
  document.getElementById("partname7").value = "";
  document.getElementById("partnum").value = "";
  document.getElementById("rfprice").value = "";
  document.getElementById("msrp").value = "";
  document.getElementById("partname2").style.display = "none";
  document.getElementById("partname3").style.display = "none";
  document.getElementById("partname4").style.display = "none";
  document.getElementById("partname5").style.display = "none";
  document.getElementById("partname6").style.display = "none";
  document.getElementById("partname7").style.display = "none";
  document.getElementById("RFIBBTN").style.display = "inline-block";
  document.getElementById("TGAFBTN").style.display = "inline-block";
  didntHave();
  rfbaseFour();
  authforOSB();
  OOPADCB();
  shipADCB();
  bothADDCB();
  hideSnip();
  ClearText();
  newpartcount = 2;
  document.getElementById("transferTemplate").style.display = "none";
  document.getElementById("statNote").style.display = "none";
  document.getElementById("newAuthstyle").style.display = "none";
  document.getElementById("TPDiv").style.display = "none";
}

function CloseIt(){
  document.getElementById("snipbox").style.display = "none";
}

function ClearText(){
  document.getElementById("Snippings").value = "";
}

function COPYIt(){
  let textarea = document.getElementById("Snippings");
  textarea.select();
  document.execCommand("copy");
}

function authforOSB(){
  document.getElementById("TGAFOBTN").style.display = "none";
  document.getElementById("TGAFSBTN").style.display = "none";
  document.getElementById("TGAFBBTN").style.display = "none";
}

function OOPADCB() {
  document.getElementById("TGAFOABTN").style.display = "none";
  document.getElementById("TGAFODBTN").style.display = "none";
  document.getElementById("TGAFOCBTN").style.display = "none";
}

function shipADCB() {
  document.getElementById("TGAFSABTN").style.display = "none";
  document.getElementById("TGAFSDBTN").style.display = "none";
  document.getElementById("TGAFSCBTN").style.display = "none";
}

function bothADDCB() {
  document.getElementById("TGAFOSABTN").style.display = "none";
  document.getElementById("TGAFOSDSBTN").style.display = "none";
  document.getElementById("TGAFOSDBBTN").style.display = "none";
  document.getElementById("TGAFOSCBTN").style.display = "none";
}

function TGAF(){
  if (checkOpen()) { return; }
  ClearText();
  hideSnip();
  document.getElementById("TGAFBTN").style.display = "inline-block";
  document.getElementById("TGAFOBTN").style.display = "inline-block";
  document.getElementById("TGAFSBTN").style.display = "inline-block";
  document.getElementById("TGAFBBTN").style.display = "inline-block";
}

function showVM() {
  document.getElementById("NALVM").style.display = "inline-block";
  document.getElementById("NANVM").style.display = "inline-block";
}

function hideVM() {
  document.getElementById("NALVM").style.display = "none";
  document.getElementById("NANVM").style.display = "none";
}

function setVMpos() {
  document.getElementById("NALVM").style.left = "270px";
  document.getElementById("NANVM").style.left = "270px";
}

function changeVMpos() {
  document.getElementById("NALVM").style.left = "400px";
  document.getElementById("NANVM").style.left = "400px";
}

function rfbaseFour() {
  document.getElementById("RFIBDH").style.display = "none";
  document.getElementById("PNLCBTN").style.display = "none";
  document.getElementById("TOTALBTN").style.display = "none";
  document.getElementById("RFAUTHBTN").style.display = "none";
}

function didntHave() {
  document.getElementById("RFIBND").style.display = "none";
  document.getElementById("RFIBNE").style.display = "none";
  document.getElementById("RFIBNF").style.display = "none";
  document.getElementById("RFIBNV").style.display = "none";
}

function TGAFO() {
  document.getElementById("TGAFOABTN").style.display = "inline-block";
  document.getElementById("TGAFODBTN").style.display = "inline-block"; 
  document.getElementById("TGAFOCBTN").style.display = "inline-block";
  showVM();
  var VMREASON = "Called CH to get auth for OOPC.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFS() {
  document.getElementById("TGAFSABTN").style.display = "inline-block";
  document.getElementById("TGAFSDBTN").style.display = "inline-block";
  document.getElementById("TGAFSCBTN").style.display = "inline-block";
  showVM();
  authforOSB();
  var VMREASON = "Called CH to get auth for shipping.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFB() {
  changeVMpos();
  document.getElementById("TGAFOSABTN").style.display = "inline-block";
  document.getElementById("TGAFOSDSBTN").style.display = "inline-block";
  document.getElementById("TGAFOSDBBTN").style.display = "inline-block";
  document.getElementById("TGAFOSCBTN").style.display = "inline-block";
  showVM();
  authforOSB();
  var VMREASON = "Called CH to get auth for OOPC and shipping.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFOA(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC.\rCH approved OOPC.\rWill call RF to give auth info\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  OOPADCB(); 
  authforOSB();
  hideVM();
}

function TGAFOD(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC.\rCH declined repairs at this time.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  OOPADCB();
  authforOSB();
  hideVM();
}

function TGAFOC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC.\rCH will call back with decision.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  OOPADCB();
  authforOSB();
  hideVM();
}

function TGAFSA(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for shipping.\rCH approved shipping.\rWill call RF to inform and order part\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  shipADCB();
  hideVM();
}

function TGAFSD(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for shipping.\rCH declined shipping and will use RF parts.\rCH has agreed to the OOPC.\rWill call RF to inform and give auth";
  } else {
  document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  shipADCB();
  hideVM();
}

function TGAFSC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for shipping.\rCH will call back with decision\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  shipADCB();
  hideVM();
}

function TGAFOSA(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH approved OOPC and shipping.\rWill call RF to inform and order parts.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function TGAFOSDS(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH declined shipping and will use RF parts.\rCH has agreed to the OOPC.\rWill call RF to inform and give auth";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function TGAFOSDB(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH declined repairs at  this time.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function TGAFOSC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH will call back with decision.\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  bothADDCB();
  hideVM();
  setVMpos();
}

function RFIB() {
  if (checkOpen()) { return; }
  ClearText();
  hideSnip();
  document.getElementById("RFIBDH").style.display = "inline-block";
  document.getElementById("PNLCBTN").style.display = "inline-block";
  document.getElementById("TOTALBTN").style.display = "inline-block";
  document.getElementById("RFAUTHBTN").style.display = "inline-block";
}


function RFIBDH(){ 
  document.getElementById("RFIBND").style.display = "inline-block";
  document.getElementById("RFIBNE").style.display = "inline-block";
  document.getElementById("RFIBNF").style.display = "inline-block";
  document.getElementById("RFIBNV").style.display = "inline-block";
  rfbaseFour();
}

function RFIBND(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check === null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rRF doesn't have a complete diagnostic\rADV RF of requirements to open claim\rRF understood and will call back when diag is complete\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function RFIBNE(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rRF doesn't have estimate ready\rADV RF of requirements to open claim\rRF understood and will call back with estimate\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function RFIBNF(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rRF doesn't have verified cause of failure\rADV RF of requirements to open claim\rRF understood and will call back when ready\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function RFIBNV(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to start a claim.\rCH vehicle is not at RF\rADV RF of requirements to open claim\rRF understood and will call back when vehicle has returned\r";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  didntHave();
}

function PNLC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  document.getElementById("Snippings").style.visibility = "visible";
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in with the following concerns:\r\rADV PNLC";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  rfbaseFour();
}

function TOTAL(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to go over totals.\rADV RF of totals. RF understood.";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  rfbaseFour();
}

function GAR(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  showSnip();
  if (Check == null) {
    document.getElementById("Snippings").value = "RF called in to get auth info.\rVerified OOPC was authed via notes.\rGave RF auth and payment details.";
  } else {
    document.getElementById("Snippings").value = Check;
  }
  document.getElementById("EDITarea").value = document.getElementById("Snippings").value;
  COPYIt();
  rfbaseFour();
}

function NAV() {
  showSnip();
  document.getElementById("Snippings").value = localStorage.getItem("VMREASON");
  document.getElementById("Snippings").value += "No answer - Left voicemail\rTasked to CS callbacks\r";
  COPYIt();
  OOPADCB();
  authforOSB();
  shipADCB();
  bothADDCB();
  hideVM();
  setVMpos();
}

function NAN() {
  showSnip();
  document.getElementById("Snippings").value = localStorage.getItem("VMREASON");
  document.getElementById("Snippings").value += "No answer - No voicemail available\rTasked to CS callbacks\r";
  COPYIt();
  OOPADCB();
  authforOSB();
  shipADCB();
  bothADDCB();
  hideVM();
  setVMpos();
}

function RESETNOTE() {
  document.getElementById("RFIBBTN").style.display = "inline-block";
  document.getElementById("TGAFBTN").style.display = "inline-block";
  rfbaseFour();
  didntHave();
  authforOSB();
  OOPADCB();
  shipADCB();
  bothADDCB();
  hideSnip();
  hideVM();
  localStorage.removeItem("VMREASON");
  ClearText();
  setVMpos();
}

function showSnip() {
  document.getElementById("Snippings").style.display = "inline-block";
}

function hideSnip() {
  document.getElementById("Snippings").style.display = "none";
}

function customMenu(sentID, event) {
  event.preventDefault();
  var menuNode = document.querySelectorAll(".CMeditDIV");
  var menuList = Array.from(menuNode);
  for (i = 0; i < menuList.length; i++) {
    if (menuList[i].style.display != "none") {
      console.log("issue");
      return;
    }
  }
  toggleMenuOn();
  positionMenu(event);
  localStorage.setItem("lastCalled", sentID);
}

function toggleMenuOn() {
  if (menuState !== 1) {
    menuState = 1;
    menu.classList.add("visible");
  }
}

function toggleMenuOff() {
  if (menuState !== 0) {
    menuState = 0;
    menu.classList.remove("visible");
  }
}

function getPosition(e) {
  var posx = 0;
  var posy = 0;
  if (!e) var e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  };
}

function positionMenu(e) {
  let clickCoords = getPosition(e);
  let clickCoordsX = clickCoords.x;
  let clickCoordsY = clickCoords.y;

  let menuWidth = menu.offsetWidth + 4;
  let menuHeight = menu.offsetHeight + 4;

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  if (windowWidth - clickCoordsX < menuWidth) {
    menu.style.left = windowWidth - menuWidth + "px";
  } else {
    menu.style.left = clickCoordsX + "px";
  }
  if (windowHeight - clickCoordsY < menuHeight) {
    menu.style.top = windowHeight - menuHeight + "px";
  } else {
    menu.style.top = clickCoordsY + "px";
  }
}

document.addEventListener("click", (e) => {
  var button = e.which || e.button;
  if (button === 1) {
    toggleMenuOff();
  }
});

window.onkeyup = function (e) {
  if (e.keyCode === 27) {
    toggleMenuOff();
  }
};

function editDisplay() {
  var lastID = localStorage.getItem("lastCalled");
  var selectedButton = document.getElementById(lastID);
  if (!selectedButton.classList.contains('D')) {
    alert("That function is not available on this button");
    localStorage.setItem("lastCalled", "noError");
    return;
  }
  localStorage.setItem("verifyCalled", lastID);
  var disEdit = document.getElementById("disEdit");
  disEdit.style.display = "inline-block";
  var mimic = document.getElementById("mimic");
  var styleGive = window.getComputedStyle(selectedButton);

  mimic.style.lineHeight = styleGive.lineHeight;

  var currentDisplay = localStorage.getItem(lastID + "Display");
  if (currentDisplay == null) {
    mimic.innerHTML = document.getElementById(lastID).innerHTML;
  } else {
    mimic.innerHTML = currentDisplay;
  }
  var fontSize = styleGive.fontSize;
  document.getElementById("fontSizer").innerText = "Font Size: " + fontSize;
  selectedButton.style.fontSize = fontSize;
  mimic.style.fontSize = styleGive.fontSize;
  mimic.style.width = styleGive.width;
  mimic.style.height = styleGive.height;
  mimic.style.textShadow = styleGive.textShadow;
  mimic.style.boxShadow = styleGive.boxShadow;
  mimic.style.color = styleGive.color;
  mimic.style.padding = styleGive.padding;
  mimic.style.borderRadius = styleGive.borderRadius;
  mimic.style.border = styleGive.border;
  mimic.style.margin = styleGive.margin;
  mimic.style.background = styleGive.background;
  divWidth = disEdit.offsetWidth;
  disWidth = parseInt(divWidth);
  cisWidth = parseInt(styleGive.width);
  mimic.style.left = (((disWidth - cisWidth) / 2) - 20) + "px";

  localStorage.setItem(lastID + "color", styleGive.color);
}

function submitDisp(x) {
  var mimic = document.getElementById("mimic");
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  if (x == 'd') {
    mimic.innerHTML = "";
    localStorage.removeItem(verifiedID + "Display");
    localStorage.removeItem(verifiedID + "Font");
    var disEdit = document.getElementById("disEdit");
    disEdit.style.display = "none";
    location.reload();
    return;
  }
  if (x == 'b') {
    document.execCommand('bold',false,null);
  }
  if (x == 'c') {
    if (colorState == "0") {
      document.execCommand('foreColor', false, '#FF0000');
      colorState = "1";
    } else {
      var colorChange = localStorage.getItem(verifiedID + "color");
      document.execCommand('foreColor', false, colorChange);
      colorState = "0";
    } 
  }

  var newDisplay = mimic.innerHTML;
  var selectedButton = document.getElementById(verifiedID);
  selectedButton.innerHTML = newDisplay;
  localStorage.setItem(verifiedID + "Display", newDisplay);

  if (x == "s") {
    var disEdit = document.getElementById("disEdit");
    disEdit.style.display = "none";
    mimic.innerHTML = "";
  localStorage.setItem("verifyCalled", "noError");
  localStorage.setItem("lastCalled", "noError");
  }
}

function editContent() {
  var lastID = localStorage.getItem("lastCalled");
  var selectedButton = document.getElementById(lastID);
  if (!selectedButton.classList.contains('C')) {
    alert("That function is not available on this button");
    localStorage.setItem("lastCalled", "noError");
    return;
  }
  localStorage.setItem("verifyCalled", lastID);
  var contEdit = document.getElementById("contEdit");
  contEdit.style.display = "inline-block";
  var currentNote = localStorage.getItem(lastID + "EDIT");
  if (currentNote != null) {
    document.getElementById("ContentEditor").innerText = currentNote;
  } else {
    selectedButton.onclick();
    var text = document.getElementById("EDITarea").value;
    document.getElementById("ContentEditor").innerText = text;
  }
}

function cancelCont() {
  var contEdit = document.getElementById("contEdit");
  document.getElementById("ContentEditor").innerText = "";
  contEdit.style.display = "none";
}

function submitCont() {
  var contEdit = document.getElementById("contEdit");
  var verifiedID = localStorage.getItem("verifyCalled");
  var newContent = document.getElementById("ContentEditor").innerText;
  localStorage.setItem(verifiedID + "EDIT", newContent);
  contEdit.style.display = "none";
  localStorage.setItem("verifyCalled", "noError");
  localStorage.setItem("lastCalled", "noError");
}

function defaultCont() {
  var contEdit = document.getElementById("contEdit");
  var verifiedID = localStorage.getItem("verifyCalled");
  document.getElementById("ContentEditor").innerText = "";
  localStorage.removeItem(verifiedID + "EDIT");
  contEdit.style.display = "none";
  location.reload();
}

function fontChange(x) {
  var bigorSmoll = parseInt(x);
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var mimic = document.getElementById("mimic");
  var fontS = window.getComputedStyle(selectedButton).fontSize;
  var fontInt = parseInt(fontS);
  fontInt = fontInt + bigorSmoll;
  var tempFont = fontInt.toString(); 
  var newFont = tempFont + "px";
  selectedButton.style.fontSize = newFont;
  mimic.style.fontSize = newFont;
  selectedButton.innerHTML = mimic.innerHTML;
  document.getElementById("fontSizer").innerText = "Font Size: " + newFont;
  localStorage.setItem(verifiedID + "Font", newFont);
}

function editSize() {
  var lastID = localStorage.getItem("lastCalled");
  var selectedButton = document.getElementById(lastID);
  if (!selectedButton.classList.contains('R')) {
    alert("That function is not available on this button");
    localStorage.setItem("lastCalled", "noError");
    return;
  }
  localStorage.setItem("verifyCalled", lastID);
  var sizeEdit = document.getElementById("sizeEdit");
  sizeEdit.style.display = "inline-block";
  var sizeShow = document.getElementById("sizeShow");
  var styleGive = window.getComputedStyle(selectedButton);
  sizeShow.style.lineHeight = styleGive.lineHeight;
  sizeShow.style.fontSize = styleGive.fontSize;
  sizeShow.style.color = styleGive.color;
  sizeShow.style.margin = styleGive.margin;
  sizeShow.style.textShadow = styleGive.textShadow;
  sizeShow.style.boxShadow = styleGive.boxShadow;
  sizeShow.style.padding = styleGive.padding;
  sizeShow.style.borderRadius = styleGive.borderRadius;
  sizeShow.style.border = styleGive.border;
  sizeShow.style.background = styleGive.background;
  var currentDisplay = localStorage.getItem(lastID + "Display");
  if (currentDisplay == null) {
    sizeShow.innerHTML = document.getElementById(lastID).innerHTML;
  } else {
    sizeShow.innerHTML = currentDisplay;
  }
  var curWidth = selectedButton.offsetWidth;
  var curHeight = selectedButton.offsetHeight;
  sizeShow.style.height = curHeight + "px";
  sizeShow.style.width = curWidth + "px";
  var showLeft = (475 - curWidth) / 2;
  var showTop = (270 - curHeight) / 2;
  sizeShow.style.top = showTop + "px";
  sizeShow.style.left = showLeft + "px";
}

function heightChange(x) {
  var bigorSmoll = parseInt(x);
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var sizeShow = document.getElementById("sizeShow");
  var curHeight = selectedButton.offsetHeight;
  var newHeight = curHeight + bigorSmoll; 
  selectedButton.style.height = newHeight + "px";
  sizeShow.style.height = newHeight + "px";
  localStorage.setItem(verifiedID + "Height", newHeight + "px");
  var showTop = (270 - newHeight) / 2;
  sizeShow.style.top = showTop + "px";
}

function widthChange(x) {
  var bigorSmoll = parseInt(x);
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var sizeShow = document.getElementById("sizeShow");
  var curWidth = selectedButton.offsetWidth;
  newWidth = curWidth + bigorSmoll; 
  selectedButton.style.width = newWidth + "px";
  sizeShow.style.width = newWidth + "px";
  localStorage.setItem(verifiedID + "Width", newWidth + "px");
  var showLeft = (475 - newWidth) / 2;
  sizeShow.style.left = showLeft + "px";
}

function sizeSubmit(x) {
  var sizeEdit = document.getElementById("sizeEdit");
  var verifiedID = localStorage.getItem("verifyCalled");
  localStorage.setItem("verifyCalled", "noError");
  localStorage.setItem("lastCalled", "noError");
  sizeEdit.style.display = "none";
  if (x == "d") {
    localStorage.removeItem(verifiedID + "Width");
    localStorage.removeItem(verifiedID + "Height");
    location.reload();
  }
}

function editPos() {
  var lastID = localStorage.getItem("lastCalled");
  var selectedButton = document.getElementById(lastID);
  if (!selectedButton.classList.contains('P')) {
    alert("That function is not available on this button");
    localStorage.setItem("lastCalled", "noError");
    return;
  }
  localStorage.setItem("verifyCalled", lastID);
  var cacheIndex = window.getComputedStyle(selectedButton).getPropertyValue("z-index");
  localStorage.setItem(lastID + "zIndex", cacheIndex);
  selectedButton.style.zIndex = "99";
  selectedButton.classList.add("shiny");
  var upBTN = document.getElementById("upBTN");
  var downBTN = document.getElementById("downBTN");
  var leftBTN = document.getElementById("leftBTN");
  var rightBTN = document.getElementById("rightBTN");
  var posSubmit = document.getElementById("posSubmit");
  var posEdit = document.getElementById("posEdit");

  upBTN.style.display = "inline-block";
  downBTN.style.display = "inline-block";
  leftBTN.style.display = "inline-block";
  rightBTN.style.display = "inline-block";
  posSubmit.style.display = "inline-block";
  posEdit.style.display = "inline-block";
}

function lMove() {
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var currentLeft = selectedButton.offsetLeft;
  var leftInt = parseInt(currentLeft);
  var newLeft = leftInt + 5;
  selectedButton.style.left = newLeft + "px";
  localStorage.setItem(verifiedID + "left", newLeft + "px");
}

function lrMove(x) {
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var currentLeft = selectedButton.offsetLeft;
  var leftInt = parseInt(currentLeft);
  var direction = parseInt(x);
  var newLeft = leftInt + direction;
  selectedButton.style.left = newLeft + "px";
  localStorage.setItem(verifiedID + "left", newLeft + "px");
}

function udMove(x) {
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var currentTop = selectedButton.offsetTop;
  var topInt = parseInt(currentTop);
  var direction = parseInt(x);
  var newTop = topInt + direction;
  selectedButton.style.top = newTop + "px";
  localStorage.setItem(verifiedID + "top", newTop + "px");
}

function dMove() {
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var currentTop = selectedButton.offsetTop;
  var topInt = parseInt(currentTop);
  var newTop = topInt + 5;
  selectedButton.style.top = newTop + "px";
  localStorage.setItem(verifiedID + "top", newTop + "px");
}

function posSubmit(x) {
  var upBTN = document.getElementById("upBTN");
  var downBTN = document.getElementById("downBTN");
  var leftBTN = document.getElementById("leftBTN");
  var rightBTN = document.getElementById("rightBTN");
  var posSubmit = document.getElementById("posSubmit");
  var posEdit = document.getElementById("posEdit");
  var verifiedID = localStorage.getItem("verifyCalled");
  var selectedButton = document.getElementById(verifiedID);
  var returnZindex = localStorage.getItem(verifiedID + "zIndex");
  selectedButton.style.zIndex = returnZindex;
  selectedButton.classList.remove("shiny");
  upBTN.style.display = "none";
  downBTN.style.display = "none";
  leftBTN.style.display = "none";
  rightBTN.style.display = "none";
  posEdit.style.display = "none";
  localStorage.setItem("verifyCalled", "noError");
  localStorage.setItem("lastCalled", "noError");
  if (x == "d") {
    localStorage.removeItem(verifiedID + "top");
    localStorage.removeItem(verifiedID + "left");
    location.reload();
  }
}

function BuilderShow() {
  var menuOpen = localStorage.getItem("menuOpen");
  var toggleMaster = document.getElementById("toggleMaster");
  var BtnBuilder = document.getElementById("BtnBuilder");
  if (toggleMaster.style.display == "none") {
    toggleMaster.style.display = "inline-block";
    BtnBuilder.innerText = "\u2666 Hide Toggle \u2666";
  } else {
    toggleMaster.style.display = "none";
    BtnBuilder.innerText = "\u2666 Toggle On/Off \u2666";
    if (menuOpen == 'true'){
      MENU();
    }
  }
}

function infoCancel() {
  var infoDiv1 = document.getElementById("infoDiv1");
  infoDiv1.style.display = "none";
}

function infoCancel2() {
  var infoDiv2 = document.getElementById("infoDiv2");
  infoDiv2.style.display = "none";
}

function showCustom() {
  var infoDiv1 = document.getElementById("infoDiv1");
  infoDiv1.style.display = "inline-block";
}

function infoDone() {
  infoDiv1.style.display = "none";
  infoDiv2.style.display = "inline-block";
}

function infoDone1() {
  var typeFinder = document.getElementsByName('buttonType');
  var btnType;
  for(i = 0; i < typeFinder.length; i++){
    if(typeFinder[i].checked){
      btnType = typeFinder[i].value;
      localStorage.setItem("type", btnType);
    }
  }
  infoDiv2.style.display = "none";
  infoDiv3.style.display = "inline-block";
}

var customIDs = [];
function infoDone2() {
  infoDiv2.style.display = "none";
  var typeFinder = document.getElementsByName('buttonType');
  var btnType;
  for(i = 0; i < typeFinder.length; i++){
    if(typeFinder[i].checked){
      btnType = typeFinder[i].value;
      localStorage.setItem("type", btnType);
    }
  }
  var selectedID = "holder1";
  var baseKey;
  var STt = localStorage.getItem(selectedID + "STCB");
  var PRt = localStorage.getItem(selectedID + "PRIN");
  var LIt = localStorage.getItem(selectedID + "LINK");
  var ENt = localStorage.getItem(selectedID + "ENDN");
  var SOt = localStorage.getItem(selectedID + "SOLO");
  var but = localStorage.getItem(selectedID + "Count");
  var STCBCount = parseInt(STt);
  var PRINCount = parseInt(PRt);
  var LINKCount = parseInt(LIt);
  var ENDNCount = parseInt(ENt);
  var SOLOCount = parseInt(SOt);
  var buttonCount = parseInt(but);
  var currID = "cust" + but;
  var newButton = document.getElementById(currID);
  var BtnDisplay = document.getElementById("BtnDisplay").value;
  var BtnContent = document.getElementById("BtnContent").value;
  if (BtnDisplay == null || BtnContent == null) {
  alert("You must pick a button display and content value");
  return;
  }
  switch(btnType) {
  case "STCB":
    baseKey = "STCB" + STCBCount;
    STCBCount = STCBCount + 1;
    localStorage.setItem(selectedID + "STCB", STCBCount);
    break;
  case "PRIN":
    baseKey = "PRIN" + PRINCount;
    PRINCount = PRINCount + 1;
    localStorage.setItem(selectedID + "PRIN", PRINCount);
    break;
  case "LINK":
    baseKey = "LINK" + LINKCount;
    LINKCount = LINKCount + 1;
    localStorage.setItem(selectedID + "LINK", LINKCount);
    break;
  case "ENDN":
    baseKey = "ENDN" + ENDNCount;
    ENDNCount = ENDNCount + 1;
    localStorage.setItem(selectedID + "ENDN", ENDNCount);
    break;
  case "SOLO":
    baseKey = "SOLO" + SOLOCount;
    SOLOCount = SOLOCount + 1;
    localStorage.setItem(selectedID + "SOLO", SOLOCount);
    break;
  default:
    alert("You must pick a button type");
    return;
  }
  newButton.innerHTML = BtnDisplay;
  newButton.id = baseKey;
  var currdivID = "custBtn" + but;
  var newButtonDiv = document.getElementById(currdivID);
  newButtonDiv.style.display = "inline-block";
  var curWidth = newButton.offsetWidth;
  var curHeight = newButton.offsetHeight;
  newButtonDiv.style.left = "20px";
  newButtonDiv.style.top = "200px";
  localStorage.setItem(currdivID + "SHOW", "inline-block");
  localStorage.setItem(currID, baseKey);
  localStorage.setItem(baseKey + "Display", BtnDisplay);
  localStorage.setItem(baseKey + "EDIT", BtnContent);
  localStorage.setItem(baseKey + "Height", curHeight);
  localStorage.setItem(baseKey + "Width", curWidth);
  localStorage.setItem(currdivID + "top", "200px");
  localStorage.setItem(currdivID + "left", "20px");
  buttonCount = buttonCount + 1;
  localStorage.setItem(selectedID + "Count", buttonCount);
  SALTANDPEPA('0');
}

function conjunctionJunction(buttonID) {
  var funct = buttonID.slice(0, 4);
  var note = localStorage.getItem(buttonID + "EDIT");
  if (note == null) {
    alert("No note currently defined");
    return false;
  }
  document.getElementById("EDITarea").value = note;
  switch(funct) {
  case "STCB":
    document.getElementById("textarea5").value = note;
    let textareaFive = document.getElementById("textarea5");
    textareaFive.select();
    document.execCommand("copy");
    break;
  case "PRIN":
    document.getElementById("textarea2").value = note;
    document.getElementById("textarea2").value =  "\r";
    break;
  case "LINK":
    document.getElementById("textarea2").value += note;
    document.getElementById("textarea2").value += "\r";
    break;
  case "ENDN":
    document.getElementById("textarea2").value += note;
    let textarea = document.getElementById("textarea2");
    textarea.select();
    document.execCommand("copy");
    break;
  case "SOLO":
    document.getElementById("textarea2").value += note;
    document.getElementById("textarea2").value += "\r\r";
    break;
  }
}

document.onkeydown = function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    document.getElementById('myInfo').style.display = "inline-block";
  }
};

document.onkeyup = function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    document.getElementById('myInfo').style.display = "none";
  }
};

document.onkeydown = function(e) {
  if (e.ctrlKey && e.shiftKey && e.which == 70) {
    anotherView();
  }
};

function anotherView() {
  var hlc = document.getElementById('hlc');
  var ITSBRITTNEY = document.getElementById('ITSBRITTNEY');

  var allBut = document.getElementById('allBut');
  var snipbox2 = document.getElementById('snipbox2');
  var textarea = document.getElementById('textarea2');
  var NUMBERS2 = document.getElementById('NUMBERS2');

  if (ITSBRITTNEY.style.display == 'inline-block') {
    ITSBRITTNEY.style.display = "none";
    textarea.style.display = "none";

  } else {

    hlc.style.display = "inline-block";
    ITSBRITTNEY.style.display = "inline-block";
    textarea.style.display = "inline-block";
  }
}