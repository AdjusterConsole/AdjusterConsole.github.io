const menu = document.getElementById("context-menu");
var menuState = 0;
var colorState = "0";
var contextMenuActive = "block";

function customMenu(sentID, event) {
  event.preventDefault();
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
  var lHeight = window.getComputedStyle(selectedButton).lineHeight;
  mimic.style.lineHeight = lHeight
  if (displayList.includes(selectedButton)) {
    var currentDisplay = localStorage.getItem(lastID + "Display");
    if (currentDisplay == null) {
      mimic.innerHTML = document.getElementById(lastID).innerHTML;
    } else {
      mimic.innerHTML = currentDisplay;
    }
  }
  var fontSize = window.getComputedStyle(selectedButton).fontSize;
  document.getElementById("fontSizer").innerText = "Font Size: " + fontSize;
  selectedButton.style.fontSize = fontSize;
  mimic.style.fontSize = fontSize;
  var cHeight = window.getComputedStyle(selectedButton).height;
  var cWidth = window.getComputedStyle(selectedButton).width;
  mimic.style.width = cWidth;
  mimic.style.height = cHeight;
  divWidth = disEdit.offsetWidth;
  disWidth = parseInt(divWidth);
  cisWidth = parseInt(cWidth);
  mimic.style.left = (((disWidth - cisWidth) / 2) - 20) + "px";
}

function submitDisp(x) {
  var mimic = document.getElementById("mimic");
  var verifiedID = localStorage.getItem("verifyCalled");
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
      document.execCommand('foreColor', false, '#000000');
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
console.log(lastID);
  if (!selectedButton.classList.contains('C')) {
    alert("That function is not available on this button");
    localStorage.setItem("lastCalled", "noError");
    return;
  }
  localStorage.setItem("verifyCalled", lastID);
  var contEdit = document.getElementById("contEdit");
  contEdit.style.display = "inline-block";

  var currentNote = localStorage.getItem(lastID + "EDIT");
  console.log(currentNote);
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
  contEdit.style.display = "none"
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
  var lHeight = window.getComputedStyle(selectedButton).lineHeight;
  sizeShow.style.lineHeight = lHeight
  var fontSize = window.getComputedStyle(selectedButton).fontSize;
  sizeShow.style.fontSize = fontSize;
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
  var toggleMaster = document.getElementById("toggleMaster");
  var BtnBuilder = document.getElementById("BtnBuilder");
  if (toggleMaster.style.display == "none") {
    toggleMaster.style.display = "inline-block";
    BtnBuilder.innerText = "\u2666 Hide Toggle \u2666";
  } else {
    toggleMaster.style.display = "none";
    BtnBuilder.innerText = "\u2666 Toggle On/Off \u2666";
    if (menuOpen){
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
  idList.push(newButton);
  idList.push(newButtonDiv);
  contentList.push(newButton);
  moveList.push(newButtonDiv);
  resizeList.push(newButton);
  displayList.push(newButton);
  showList.push(newButtonDiv);
  buttonList.push(newButton);
  divList.push(newButtonDiv);
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
