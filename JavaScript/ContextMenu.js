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