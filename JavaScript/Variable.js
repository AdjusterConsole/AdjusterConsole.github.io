
  var PicturesReuest = "Requesting photos from RF to verify failure and avoid inspection delay.\rInforming RF to include pics of all 4 corners of the vehicle, VIN plate, odometer, and pictures of the failure.\rSent request via SRS action button.";
  var RecordsRequested = "Requesting CH statement regarding issues.\rRequesting past 12 months of service records from CH.\rSent records request using SRS action button.\rWill call CH to inform.";
  var InspectionTemplate = "Please verify all failures.\rPlease contact 1-2 hours prior to arrival.\rContact:   \rPhone:   \rEmail:   ";
  var StatementTemplate = "What happened:   \rWhen did the issue first occur:   \rHad the issue occurred before:   \rIf yes, when:   \rAny warning lights:   \rAny noise, smoke, or smell:   \rHow long has the CH owned the vehicle:   \rApproximate mileage when CH purchased:   \rWas vehicle towed to RF:   \rFrom where and by whom:   \r";
  var ReviewNote = "Reviewed inspection photos and report.\rReviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r";

  var NoAnswerOOPC = "Called CH for OOPC auth.\rNo answer – left voicemail.\rTasked to CS callbacks.";
  var ChAuthedOOPC = "Called CH for OOPC and shipping auth.\rCH has approved OOPC.\rCH has approved shipping.";
  var NoAnsRecdsRqst = "Called CH to request records.\rCalled CH to request statement.\rNo answer – left voicemail.\rTasked to CS callbacks.";
  var NewOEMpart = "Verified OEM PN:   \rVerified MSRP:   \rRF Price:   \r\r";
  var OemOver250 = "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  var NewAMpart = "RF AM PN:   \rRF Price:   \rPA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  var BulkFluid = "BULK:   \rRF Price:   \rFPS Allows:   \r\r";
  var Labor = "RF Asking:   \rPD Approved:   \r\r";
  var Diag = "Diag\rRF Asking:   \rPD Approved:   \r\r";
  var EvacRechrge = "Evac and Recharge\rRF Asking:   \rPD Approved:   1.4\r\r";
  var Alignment = "Alignment\rRF Asking:   \rPD Approved:   \r\r";
  var NoPAIHSourcing = "Nothing available in PA.\rSent to in house sourcing.\r\r";
  var ToEdit;
  var ButDidYouDie = "no";
  var IDset = [];
  var imBusy = "false";

  var resizeNode = document.querySelectorAll(".R");
  var displayNode = document.querySelectorAll(".D");
  var moveNode = document.querySelectorAll(".P");
  var contentNode = document.querySelectorAll(".C");

  var buttonNode = document.querySelectorAll("button");
  var idNode = document.querySelectorAll('*[id]');
  var divNode = document.getElementsByTagName("div");
  var menuNode = document.querySelectorAll(".CMeditDIV");
  var showNode = document.querySelectorAll('[class$="dispStat"]');

  var menuList = Array.from(menuNode);
  var showList = Array.from(showNode);
  var divList = Array.from(divNode);
  var idList =  Array.from(idNode);
  var buttonList = Array.from(buttonNode);
  var moveList = Array.from(moveNode);
  var resizeList = Array.from(resizeNode);
  var displayList = Array.from(displayNode);
  var contentList = Array.from(contentNode);

  var theMenu = document.getElementById("LOCK1");
  var ETPHONEHOME = document.getElementById("PHONE");
  var BtnBuilder = document.getElementById("BtnBuilder");
  var buttonMaker = document.getElementById("buttonMaker");

  var DaddySaysSo = false;

function RESET(){
  document.getElementById("textarea3").value = document.getElementById("textarea1").value + "\r\r" + document.getElementById("textarea3").value;
  document.getElementById("textarea3").value += document.getElementById("textarea2").value;
  document.getElementById("textareadata").value = document.getElementById("textareadata").value + "\r\r" + document.getElementById("textarea3").value;
  let textarea = document.getElementById("textarea3");
  textarea.select();
  document.execCommand("copy");
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

function TGAFO(){
  document.getElementById("TGAFOABTN").style.display = "inline-block";
  document.getElementById("TGAFODBTN").style.display = "inline-block"; 
  document.getElementById("TGAFOCBTN").style.display = "inline-block";
  showVM();
  var VMREASON = "Called CH to get auth for OOPC.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFS(){
  document.getElementById("TGAFSABTN").style.display = "inline-block";
  document.getElementById("TGAFSDBTN").style.display = "inline-block";
  document.getElementById("TGAFSCBTN").style.display = "inline-block";
  showVM();
  authforOSB();
  var VMREASON = "Called CH to get auth for shipping.\r";
  localStorage.setItem("VMREASON",VMREASON);
}

function TGAFB(){
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

function TGAFOA(btnID){
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

function TGAFOD(btnID){
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

function TGAFOC(btnID){
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

function TGAFSA(btnID){
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

function TGAFSD(btnID){
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

function TGAFSC(btnID){
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

function TGAFOSA(btnID){
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

function TGAFOSDS(btnID){
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

function TGAFOSDB(btnID){
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

function TGAFOSC(btnID){
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

function RFIB(){
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

function RFIBND(btnID){
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

function RFIBNE(btnID){
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

function RFIBNF(btnID){
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

function RFIBNV(btnID){
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

function PNLC(btnID){
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

function TOTAL(btnID){
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

function GAR(btnID){
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

function NAV(){
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

function NAN(){
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

function RESETNOTE(){
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
  if (e.ctrlKey && e.shiftKey && e.which == 72) {
    hideParts();
  }
};

function hideParts() {
  var allParts = document.getElementById('allParts');
  var allBut = document.getElementById('allBut');
  var snipbox2 = document.getElementById('snipbox2');
  var textarea = document.getElementById('textarea2');
  var NUMBERS2 = document.getElementById('NUMBERS2');

  if (allParts.style.opacity == '1') {
    allParts.style.opacity = "0";
    allParts.style.width = "0%";
    allParts.style.height = "0%";
    allBut.style.left = "-350px";
    allBut.style.top = "230px";
    snipbox2.style.left = "-400px";
    snipbox2.style.top = "250px";
    textarea.style.display = "none";
    NUMBERS2.style.left = "-400px";
  } else {
    allParts.style.opacity = "1";
    allParts.style.width = "auto";
    allParts.style.height = "auto";
    allBut.style.left = "0px";
    allBut.style.top = "0px";
    snipbox2.style.left = "0px";
    snipbox2.style.top = "0px";
    textarea.style.display = "inline-block";
    NUMBERS2.style.left = "0px";
  }
}



