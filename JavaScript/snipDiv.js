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

function TGAF(){
  if (checkOpen()) { return; }
  setElementValue(["Snippings"], "");
  setButtonDisplay(["TGAFBTN", "TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "inline-block");
  setButtonDisplay(["Snippings"], "none");
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