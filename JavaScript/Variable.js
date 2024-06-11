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
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.

function setButtonDisplay(buttonIds, displayStyle) {
  buttonIds.forEach(function(btnId) {
    document.getElementById(btnId).style.display = displayStyle;
  });
}

function setVMReason(reason) {
  localStorage.setItem("VMREASON", reason);
}

function showSnipAndUpdateEditArea(value) {
  document.getElementById("Snippings").value = value;
  document.getElementById("EDITarea").value = value;
}

function setLocalStorageItem(key, value) {
  localStorage.setItem(key, value);
}

function getElementValue(id) {
  return document.getElementById(id).value;
}

function setElementValue(buttonId, value) {
  buttonId.forEach(function(btnIds) {
    document.getElementById(btnIds).value = value;
  });
}

function commonFunctionality(btnID, defaultText) {
  var Check = localStorage.getItem(btnID + "EDIT") || defaultText;
  setElementValue(["Snippings", "EDITarea"], Check);
  copyText();
  setButtonDisplay(["Snippings"], "inline-block");
}

function TGAFO() {
  setButtonDisplay(["TGAFOABTN", "TGAFODBTN", "TGAFOCBTN", "NALVM", "NANVM"], "inline-block");
  setButtonDisplay(["TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "none");
  setVMReason("I called the Contract Holder to get authorization for the OOPC.\r");
}

function TGAFS() {
  setButtonDisplay(["TGAFSABTN", "TGAFSDBTN", "TGAFSCBTN", "NALVM", "NANVM"], "inline-block");
  setButtonDisplay(["TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "none");
  setVMReason("I called the Contract Holder to get authorization for shipping.\r");
}

function TGAFB() {
  changeVMpos();
  setButtonDisplay(["TGAFOSABTN", "TGAFOSDSBTN", "TGAFOSDBBTN", "TGAFOSCBTN", "NALVM", "NANVM"], "inline-block");
  setButtonDisplay(["TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "none");
  setVMReason("I called the Contract Holder to get authorization for the OOPC and shipping.\r");
}

function TGAFOA(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC.\rThe Contract Holder has approved the OOPC.\rI will call the Repair Facility to give authorization and payment info.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
  setVMpos();
}

function TGAFOD(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC.\rThe Contract Holder has declined repairs at this time.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOC(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC.\rThe Contract Holder will call back with a decision.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFSA(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder has approved shipping.\rI will call the Repair Facility to inform and order part";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFSD(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder has declined shipping and will use the Repair Facility parts.\rThe Contract Holder has agreed to the OOPC.\rI will call the Repair Facility to inform and give authorization.";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFSC(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder will call back with a decision\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOSA(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has approved the OOPC and shipping.\rI will call Repair Facility to inform and order parts.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOSDS(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has declined shipping and will use the Repair Facility parts.\rThe Contract Holder has agreed to the OOPC.\rI will call Repair Facility to inform and give authorization";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOSDB(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has declined repairs at this time.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOSC(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder will call back with a decision.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

async function copyText() {
  let text = document.getElementById("Snippings").value;
  try {
    await navigator.clipboard.writeText(text);
    setTimeout(function(){ setButtonDisplay(["Snippings"], "none"); }, 5000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

function common_hide() {
  setButtonDisplay(["TGAFOSABTN", "TGAFOSDSBTN", "TGAFOSDBBTN", "TGAFOSCBTN", "TGAFOABTN", "TGAFODBTN", "TGAFOCBTN", "TGAFSABTN", "TGAFSDBTN", "TGAFSCBTN", "NALVM", "NANVM"], "none");
}

function TGAF(){
  if (checkOpen()) { return; }
  setElementValue(["Snippings"], "");
  setButtonDisplay(["TGAFBTN", "TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "inline-block");
  setButtonDisplay(["Snippings"], "none");
}

function setVMpos() {
  document.getElementById("NALVM").style.left = "270px";
  document.getElementById("NANVM").style.left = "270px";
}

function changeVMpos() {
  document.getElementById("NALVM").style.left = "400px";
  document.getElementById("NANVM").style.left = "400px";
}

function RFIB() {
  if (checkOpen()) { return; }
  setElementValue(["Snippings"], "");
  setButtonDisplay(["Snippings"], "none");
  setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "inline-block");
}

function RFIBDH(){
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "inline-block");
  setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function RFIBND(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have a complete diagnostic.\rI advised the Repair Facility of the requirements to open a claim\rThe Repair Facility understood and will call back when the diagnostic is complete.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNE(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have an estimate ready.\rI advised the Repair Facility of the requirements to open a claim\rThe Repair Facility understood and will call back with an estimate.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNF(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have a verified cause of failure.\rI advised the Repair Facility of the requirements to a open claim\rThe Repair Facility understood and will call back when they are ready.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNV(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Contract Holder's vehicle is not at Repair Facility.\rI advised the Repair Facility of the requirements to open a claim\rThe Repair Facility understood and will call back when the vehicle has returned.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function PNLC(btnID) {
  var defaultText = "A Repair Facility called in with the following concerns:\r\rI advised the Repair Faility the parts were not listed for coverage - PNLC\rI will call the Contract Holder to inform of coverage.";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function TOTAL(btnID) {
  var defaultText = "A Repair Facility called in to go over totals.\rI advised the Repair Facility of totals.\rThe Repair Facility understood.";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function GAR(btnID) {
  var defaultText = "A Repair Facility called in to get authorization info.\rI verified the Contract Holder has authorized the OOPC via the notes.\rI gave the Repair Facility authorization and payment details.";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function NAV() {
  setButtonDisplay(["Snippings"], "inline-block");
  setElementValue(["Snippings"], localStorage.getItem("VMREASON") + "There was no answer.\rI left a voicemail and tasked Customer Service to callback.\r");
  copyText();
  auth_Close();
  setVMpos();
}

function NAN() {
  setButtonDisplay(["Snippings"], "inline-block");
  setElementValue(["Snippings"], localStorage.getItem("VMREASON") + "There was no answer.\r There was no voicemail available\rI have tasked Customer Service to callback.\r");
  copyText();
  auth_Close();
  setVMpos();
}

function RESETNOTE() {
  setButtonDisplay(["RFIBBTN", "TGAFBTN"], "inline-block");
  setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN", "RFIBND", "RFIBNE", "RFIBNF", "RFIBNV", "Snippings"], "none");
  auth_Close();
  localStorage.removeItem("VMREASON");
  setElementValue(["Snippings"], "");
  setVMpos();
}

function auth_Close() {
  setButtonDisplay( [
  "TGAFOBTN",
  "TGAFSBTN",
  "TGAFBBTN",
  "TGAFOABTN",
  "TGAFODBTN",
  "TGAFOCBTN",
  "TGAFSABTN",
  "TGAFSDBTN",
  "TGAFSCBTN",
  "TGAFOSABTN",
  "TGAFOSDSBTN",
  "TGAFOSDBBTN",
  "TGAFOSCBTN",
  "NALVM", 
  "NANVM"],
  "none");
}

//function customMenu(sentID, event) {
//  event.preventDefault();
//  var menuNode = document.querySelectorAll(".CMeditDIV");
//  var menuList = Array.from(menuNode);
//  for (i = 0; i < menuList.length; i++) {
//  if (menuList[i].style.display != "none") {
//    console.log("issue");
//   return;
//   }
//  }
//  toggleMenuOn();
//  positionMenu(event);
//  localStorage.setItem("lastCalled", sentID);
//}

function toggleMenuOn() {
  var menuState = parseInt(localStorage.getItem("menuState"));
  const menu = document.getElementById("context-menu");
  if (menuState !== 1) {
    menuState = 1;
    menu.classList.add("visible");
    localStorage.setItem("menuState", menuState);
  }
}

function toggleMenuOff() {
  var menuState = parseInt(localStorage.getItem("menuState"));
  const menu = document.getElementById("context-menu");
  if (menuState !== 0) {
    menuState = 0;
    menu.classList.remove("visible");
    localStorage.setItem("menuState", menuState);
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
  const menu = document.getElementById("context-menu");
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
  var colorState = localStorage.getItem("colorState");
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
      localStorage.setItem("colorState",colorState);
    } else {
      var colorChange = localStorage.getItem(verifiedID + "color");
      document.execCommand('foreColor', false, colorChange);
      colorState = "0";
      localStorage.setItem("colorState",colorState);
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
//alert("This function has been disabled");
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
  var BtnDisplay = sanitizeInput(document.getElementById("BtnDisplay").value);
  var BtnContent = sanitizeInput(document.getElementById("BtnContent").value);
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

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  openNav();
});

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


function RESET() {
  localStorage.setItem("newpartcount","2");
  document.getElementById("textarea1").value = "CONTACT:   \rPAYMENT:   \rZIPCODE:   \rMILEAGE:   \rDISTANCE:   \rTIME:   ";
  setElementValue(["partname1","partname2","partname3","partname4", "partname5", "partname6", "partname7", "partnum", "rfprice", "msrp", "textarea2", "textarea3"], "");
  setButtonDisplay(["partname2", "partname3", "partname4", "partname5", "partname6", "partname7", "transferTemplate", "statNote", "newAuthstyle", "TPDiv"], "none");
  RESETNOTE();
  cancelState();
  cancelStat();
  cancelNewauth();
  cancelPT();
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    whiteRabbit();
  }
});

function whiteRabbit() {
  closeResource2();
  closeResource();
  setZero();
  openScript('close');
  cancelState();
  cancelNewauth();
  cancelPT();
  closeNav();
  closeSOP();
  closePDFmenu();
  setButtonDisplay( [ 
    "transferTemplate", "statNote", "newAuthstyle", "TPDiv", "toggleMaster",
     "infoDiv1", "infoDiv2", "div6", "resrcDiv", "diagDiv", "laborscriptDiv" ], "none");
  const editMenus = document.getElementsByClassName("CMeditDIV");
  for(i = 0; i < editMenus.length; i++) {
    var tempId = editMenus[i].id;
    document.getElementById(tempId).style.display = "none";
  }
  RESETNOTE();
}


