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
  var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder has approved shipping.\rI will call the Repair Facility to inform and order part.";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFSD(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder has declined shipping and will use the Repair Facility parts.\rThe Contract Holder has agreed to the OOPC.\rI will call the Repair Facility to inform and give authorization.";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFSC(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder will call back with a decision.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOSA(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has approved the OOPC and shipping.\rI will call Repair Facility to inform and order parts.\r";
  commonFunctionality(btnID, defaultText);
  common_hide();
}

function TGAFOSDS(btnID) {
  var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has declined shipping and will use the Repair Facility parts.\rThe Contract Holder has agreed to the OOPC.\rI will call Repair Facility to inform and give authorization.";
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
  const notification = document.getElementById('copy-notification');
  let text = document.getElementById("Snippings").value;
  try {
    await navigator.clipboard.writeText(text);

    setTimeout(function(){ setButtonDisplay(["Snippings"], "none"); }, 5000);
      notification.style.top = '0';
      setTimeout(() => {
      notification.style.top = '-50px';
    }, 800);

  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

async function copy(text) {
  const notification = document.getElementById('copy-notification');
  try {
    await navigator.clipboard.writeText(text);
    notification.style.top = '0';
    setTimeout(() => {
      notification.style.top = '-50px';
    }, 800);
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
  var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have a complete diagnostic.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back when the diagnostic is complete.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNE(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have an estimate ready.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back with an estimate.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNF(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have a verified cause of failure.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back when they are ready.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNV(btnID) {
  var defaultText = "A Repair Facility called in to start a claim.\rThe Contract Holder's vehicle is not at Repair Facility.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back when the vehicle has returned.\r";
  commonFunctionality(btnID, defaultText);
  setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function PNLC(btnID) {
  var defaultText = "A Repair Facility called in with the following concerns:\r\rI advised the Repair Facility that the parts were not listed for coverage - PNLC\rI will call the Contract Holder to inform of coverage.";
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

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  openNav();
});

document.onkeydown = function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    document.getElementById('myInfo').style.display = "itnline-block";
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
     "div6", "resrcDiv", "diagDiv", "laborscriptDiv" ], "none");
  RESETNOTE();
  localStorage.setItem("menuOpen", "true");
  MENU();
}

document.onkeyup = function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 80) {
    let mode = localStorage.getItem("mode");
  if (mode === '2') {
    localStorage.setItem('mode', '1');
    modePT();
    return;   
  } else {
    localStorage.setItem('mode', '2');
    modePT();
    return;
  }
 }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 76) {
    document.location.href = 'https://theadjusterconsole.github.io/',true;
 }
};



function modePT() {
  let mode = localStorage.getItem("mode");
  if (mode === '1') {
    document.getElementById("ITSBRITTNEY").style.display = "none";
    document.getElementById("openScript").style.display = "none";
    document.getElementById("PTModeDiv").style.display = "inline-block";
    document.getElementById("newauthSelect").style.top = "200px";
    document.getElementById("newauthSelect").style.left = "50px";
    document.getElementById("newauthLabel").style.top = "200px";
    document.getElementById("newauthLabel").style.left = "70px";
    document.getElementById("newAuthstarter").style.top = "230px";
    document.getElementById("newAuthstarter").style.left = "20px";
    document.getElementById("statusNote").style.left = "200px";
    document.getElementById("statusNote").style.top = "230px";
    document.getElementById("snipbox").style.left = "-135px";
    document.getElementById("snipbox").style.top = "325px";
    document.getElementById("SOPs").style.display = "none";
    document.getElementById("tools").style.display = "none";
    document.getElementById("T0").style.display = "none";
    document.getElementById("Request").style.left = "400px";
    document.getElementById("Request").style.top = "50px";
    return;
  } 
  if (mode === '2') {
    document.getElementById("ITSBRITTNEY").style.display = "inline-block";
    document.getElementById("openScript").style.display = "inline-block";
    document.getElementById("PTModeDiv").style.display = "none";
    document.getElementById("newAuthstarter").style.top = "";
    document.getElementById("newAuthstarter").style.left = "";
    document.getElementById("newauthSelect").style.top = "";
    document.getElementById("newauthSelect").style.left = "";
    document.getElementById("newauthLabel").style.top = "";
    document.getElementById("newauthLabel").style.left = "";
    document.getElementById("statusNote").style.left = "";
    document.getElementById("statusNote").style.top = "";
    document.getElementById("snipbox").style.left = "";
    document.getElementById("snipbox").style.top = "";
    document.getElementById("SOPs").style.display = "";
    document.getElementById("tools").style.display = "";
    document.getElementById("T0").style.display = "";
    document.getElementById("Request").style.left = "";
    document.getElementById("Request").style.top = "";
    return;
  }
 alert("You Broke It.");
}

//    "Notify your Team Lead that your call is ongoing, how much time\ryou have left, and if there are any issues with the call."



let start_call = document.getElementById('start_call');
start_call.innerText = '00 : 00 : 00'; 
let timer = false;
let start_stop_button = document.getElementById('start_stop_button');
let reset_button = document.getElementById('reset_button');

let hour = 00; 
let minute = 00; 
let second = 00; 

start_call.addEventListener('click', function () {
  if (timer) {
    timer = false;
//    start_stop_button.innerText = "Start Call";
  } else if (!timer) {
    timer = true;
//    start_stop_button.innerText = "End Call";
    setTimeout(stopWatch, 1000);
  }
}); 

start_call.addEventListener('dblclick', function () { 
  timer = false; 
  hour = 00; 
  minute = 00; 
  second = 00; 
  start_call.innerText = '00 : 00 : 00';
  start_call.style.color = '';
  start_call.classList.remove('glowing');
//  start_stop_button.innerText = "Start Call";
}); 

function stopWatch() {
  if (minute > 12 && minute < 16) {
    start_call.style.color = 'yellow';
  } else if (minute > 15) {
    start_call.style.color = 'red';
  } else {
    start_call.style.color = 'var(--glow-txt-color)';
  }
  if (minute > 24) {
    start_call.classList.add('glowing');
  }
  if (timer) { 
      second++; 
    if (second == 60) { 
      minute++; 
      second = 0; 
    } 
    if (minute == 60) { 
      hour++; 
      minute = 0; 
      second = 0; 
    } 
    let hrString = hour; 
    let minString = minute; 
    let secString = second;  
    if (hour < 10) { 
      hrString = "0" + hrString; 
    } 
    if (minute < 10) { 
      minString = "0" + minString; 
    } 
    if (second < 10) { 
      secString = "0" + secString; 
    } 
    start_call.innerText = hrString + ' : ' + minString + ' : ' + secString; 
    setTimeout(stopWatch, 1000); 
  } 
}