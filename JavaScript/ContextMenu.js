//COPYRIGHT © Jesse Williams 2024 – ALL RIGHTS RESERVED WORLDWIDE
//This website and its content, including but not limited to the 'A' logo and 'AdjusterConsole', are protected by copyright law.
//You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the materials on this website solely for personal use.
//By accessing or using this website, you agree to the following terms and conditions:
//Restrictions on Use
//You may not, without the express written permission of the author, Jesse Williams:
//Copy, download, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or otherwise exploit any part of this website or its content, in whole or in part.
//Use this website or its content for any illegal, unethical, or unauthorized purposes.
//Access or use any proprietary information, documents, or content not owned by Jesse Williams in a way that is not expressly authorized.
//This license applies to all versions of the code and content previously released, as well as all future versions.
//Any prior statements made regarding permission to use are hereby revoked.
//Third-Party Trademarks and Proprietary Information
//All trademarks, service marks, proprietary information, and/or documents not owned by Jesse Williams that appear on this website are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Jesse Williams. Such proprietary information, documents, and content should be treated as confidential and used solely for their intended and expressly authorized purposes.
//Unauthorized use, distribution, or disclosure of such proprietary information is strictly prohibited.
//Disclaimer of Warranties
//This website, its content, and the code provided are offered "as is", without any warranty of any kind, either express or implied.
//The author makes no representations or warranties regarding the accuracy, completeness, or suitability of the website or its content for any particular purpose.
//Limitation of Liability
//To the fullest extent permitted by law, Jesse Williams shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use the website or its content, even if advised of the possibility of such damages.IndemnificationYou agree to indemnify, defend, and hold harmless Jesse Williams from any claims, liabilities, damages, losses, or expenses (including reasonable attorney's fees) arising from your use of the website or its content, or your violation of these terms and conditions.Amendments to the TermsThese terms and conditions may be updated or modified at any time without prior notice. It is your responsibility to review these terms regularly. By continuing to use this website, you agree to any changes.
//Governing Law and Jurisdiction
//These terms and conditions are governed by and construed in accordance with the laws of the United States of America.
//Any disputes arising under or related to these terms and conditions shall be resolved exclusively in the courts of United States of America.
//Contact Information for Licensing Inquiries
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.
//By using this website or its content, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
//Failure to comply with these terms may result in legal action.

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

function deleteCustom() {
  var buttonID = localStorage.getItem("lastCalled");
  var selectedButton = document.getElementById(buttonID);
  if (!selectedButton.classList.contains('X')) {
    alert("That function is not available on this button");
    localStorage.setItem("lastCalled", "noError");
    return;
  }
  const userConfirmed = confirm('Delete this custom button?');
  if (userConfirmed) {
    localStorage.removeItem(buttonID + 'Type');
    localStorage.removeItem(buttonID + 'SHOW');
    localStorage.removeItem(buttonID + 'Display');
    localStorage.removeItem(buttonID + 'EDIT');
    localStorage.removeItem(buttonID + 'Height');
    localStorage.removeItem(buttonID + 'Width');
    localStorage.removeItem(buttonID + 'top');
    localStorage.removeItem(buttonID + 'left');
    let customIDs = JSON.parse(localStorage.getItem('customIDs')) || [];
    const index = customIDs.indexOf(buttonID);
    customIDs.splice(index, 1);
    localStorage.setItem('customIDs', JSON.stringify(customIDs));
    selectedButton.remove();
  }
}

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

let lrInterval;
let udInterval;

function startLrMove(x) {
  clearInterval(lrInterval);
  lrInterval = setInterval(function () {
    lrMove(x);
  }, 50); 
}

function startUdMove(x) {
  clearInterval(udInterval);
  udInterval = setInterval(function () {
    udMove(x);
  }, 50); 
}

function stopMove() {
  clearInterval(lrInterval);
  clearInterval(udInterval);
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
  }
}