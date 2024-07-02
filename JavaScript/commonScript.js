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

function openInfo2(evt, cityName) {
  let i, diagcontent, tablinks2;
  diagcontent = document.getElementsByClassName("diagcontent");
  for (i = 0; i < diagcontent.length; i++) {
    diagcontent[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function closeResource2() {
  let i, diagcontent, tablinks2;
  diagcontent = document.getElementsByClassName("diagcontent");
  for (i = 0; i < diagcontent.length; i++) {
    diagcontent[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
 document.getElementById('diagDiv').style.display = "none";
}

function diagCenter() {
  let diagDiv = document.getElementById("diagDiv");
  if (diagDiv.style.display == "none" && !checkOpen()) {
    diagDiv.style.display = "block";
    let widthpre = parseInt(window.getComputedStyle(diagDiv).width);
    let width1 = (widthpre / 4);
    let width = width1.toString() + "px";
    document.documentElement.style.setProperty('--div-width2', width);
  } else {
    diagDiv.style.display = "none";
  }
}

function magnify(image) {
  let lastImageId = localStorage.getItem("lastImageId");
  if (image == 'back') {
    document.getElementById(lastImageId).style.display = "none";
    document.getElementById('theDepot').style.display = "none";
    localStorage.removeItem("lastImageId");
  } else {
    let imageId = image + "Depot";
    localStorage.setItem("lastImageId", imageId);
    document.getElementById(imageId).style.display = "block";
    document.getElementById('theDepot').style.display = "inline-block";
  }
}

function diagAction(action) {
  let textarea = "";
  let diagcontent, whichDivId, whichIptclass, textAreaid, notetextArea, i, tableTHs, tableTDs, table;
  diagcontent = document.getElementsByClassName("diagcontent");
  for (let i = 0; i < diagcontent.length; i++) {
    if (diagcontent[i].style.display === "block") {
      whichDivId = diagcontent[i].id;
    }
  }
  whichTblid = whichDivId + "in";
  table = document.getElementById(whichTblid);
  tableTDs = table.getElementsByTagName("td");
  tableTHs = table.getElementsByTagName("th");

  for (let i = 0; i < tableTDs.length; i++) {
    if (action == 'clear') {
      tableTDs[i].innerText = "";
    }
    if (action == 'copy') {
      textarea += tableTHs[i].innerText + ": " + tableTDs[i].innerText + "\r";
    }
  }
  textAreaid = whichDivId + "TA";
  notetextArea = document.getElementById(textAreaid);
  if (action == 'clear') {
    notetextArea.value = "";
  }
  if (action == 'copy') {
    textarea += "\rNotes:\r" + notetextArea.value;
    copy(textarea);
  }
}

//                                                                         AUTH GUIDE

function goGuide(option,name) {
  let usedBtn = document.getElementsByName(name);
  for (let i = 0; i < usedBtn.length; i++) {
    usedBtn[i].disabled = true;
  }
  switch(option) {
  case "oeover":
  case "am":
    document.getElementById('authGuide1').style.display = "none";
    document.getElementById('authGuideAM').style.display = "inline-block";
    break;
  case "oe":
    document.getElementById('authGuideOE').style.display = "inline-block";
    break;
  case "oeunder":
    document.getElementById('oeunder').style.display = "inline-block";
    break;
  case "rfovrmsrp":
    document.getElementById('rfovrmsrp').style.display = "inline-block";
    break;
  case "noship3":
    const pElem43 = document.createElement("p");
    pElem43.classList.add("bodyTab2");
    const textNode43 = document.createTextNode("Authorize MSRP. Contract Holder will have OOPC.");
    let div = document.getElementById("authGuideOE");
    pElem43.appendChild(textNode43);
    div.appendChild(pElem43);
    break;
  case "mayship3":
    const pElem8 = document.createElement("p");
    pElem8.classList.add("bodyTab2");
    const textNode8 = document.createTextNode("Ship part with permision from the Contract Holder.");
    let div8 = document.getElementById("rfovrmsrp");
    pElem8.appendChild(textNode8);
    div8.appendChild(pElem8);
    break;
  case "rfundmsrp":
    const pElem9 = document.createElement("p");
    pElem9.classList.add("bodyTab2");
    const textNode9 = document.createTextNode("Authorize MSRP.");
    let div9 = document.getElementById("authGuideOE");
    pElem9.appendChild(textNode9);
    div9.appendChild(pElem9);
    break;
  case "pricing":
    document.getElementById('authGuideAM').style.display = "none";
    document.getElementById('paGuide').style.display = "inline-block";
    break;
  case "listunder":
    document.getElementById('listUnder').style.display = "inline-block";
    break;
  case "rfovrlist":
    document.getElementById('rfovrlist').style.display = "inline-block";
    break;
  case "rfundlist":
    const pElem1 = document.createElement("p");
    pElem1.classList.add("bodyTab2");
    const textNode1 = document.createTextNode("Authorize Repair Facility price as it's MCE");
    let div10 = document.getElementById("listUnder");
    pElem1.appendChild(textNode1);
    div10.appendChild(pElem1);
    break;
  case "mayship":
    const pElem2 = document.createElement("p");
    pElem2.classList.add("bodyTab2");
    const textNode2 = document.createTextNode("Ship part with permision from the Contract Holder.");
    let div11 = document.getElementById("rfovrlist");
    pElem2.appendChild(textNode2);
    div11.appendChild(pElem2);
    break;
  case "noship":
    const pElem3 = document.createElement("p");
    pElem3.classList.add("bodyTab2");
    const textNode3 = document.createTextNode("Authorize PA list price under $250.00 and the remaining balance will be OOPC.");
    let div12 = document.getElementById("rfovrlist");
    pElem3.appendChild(textNode3);
    div12.appendChild(pElem3);
    break;
  case "listover":
    document.getElementById('listOver').style.display = "inline-block";
    break;
  case "costund":
    document.getElementById('costund').style.display = "inline-block";
    break;
  case "rfundcost":
    const pElem4 = document.createElement("p");
    pElem4.classList.add("bodyTab2");
    const textNode4 = document.createTextNode("Authorize Repair Facility price as it's MCE");
    let div13 = document.getElementById("costund");
    pElem4.appendChild(textNode4);
    div13.appendChild(pElem4);
    break;
  case "rfovrcost":
    document.getElementById('rfovrcost').style.display = "inline-block";
    break;
  case "mayship2":
    const pElem5 = document.createElement("p");
    pElem5.classList.add("bodyTab2");
    const textNode5 = document.createTextNode("Ship part with permission from the Contract Holder.");
    let div15 = document.getElementById("rfovrcost");
    pElem5.appendChild(textNode5);
    div15.appendChild(pElem5);
    break;
  case "noship2":
    const pElem6 = document.createElement("p");
    pElem6.classList.add("bodyTab2");
    const textNode6 = document.createTextNode("Authorize PA cost price under $250.00 and the remaining balance will be OOPC.");
    let div16 = document.getElementById("rfovrcost");
    pElem6.appendChild(textNode6);
    div16.appendChild(pElem6);
    break;
  case "sourcing":
    document.getElementById('authGuide1').style.display = "none";
    document.getElementById('authGuideOE').style.display = "none";
    document.getElementById('authGuideAM').style.display = "none";
    document.getElementById('paGuide').style.display = "none";
    document.getElementById('IHSourcing').style.display = "inline-block";
    break;
  }
}

//                                                                    MILEAGE DISCREP

function mileDiscrep() {
  let isTerm = document.getElementById('md1').checked;
  let isM2m = document.getElementById('md2').checked;
  let over90 = document.getElementById('md3').checked;
  let under90 = document.getElementById('md4').checked;
  let negMile = document.getElementById('md5').checked;
  let inaccMile = document.getElementById('md6').checked;
  let rollBack = document.getElementById('md7').checked;
  let hasHmpd = document.getElementById('md8').checked;
  if (isTerm) {
    if (negMile || inaccMile || rollBack) {
      crReview();
    }
  }
  if (isM2m) {
    if (under90) {
      if (rollBack) {
        crReview();
      }
    }
  }
  if (isM2m) {
    if (negMile || inaccMile) {
      mileageCalc();
    }
  }
  if (isM2m) {
    if (over90) {
      if (rollBack || hasHmpd) {
        proceed();
      }
    }
  }
  if (isTerm) {
    if (over90) {
      if (hasHmpd) {
        proceed();
      }
    }
  }
  if (isM2m) {
    if (under90) {
      if (hasHmpd) {
        document.getElementById('under90hmpd').style.display = "block";
      }
    }
  }
}

function proceed() {
  if (document.getElementById('proceed').style.display == "none") {
    document.getElementById('proceed').style.display = "block";
  } else {
    document.getElementById('proceed').style.display = "none";
  }
}

function noride() {
  if (document.getElementById('norideshare').style.display == "none") {
    document.getElementById('norideshare').style.display = "block";
  } else {
    document.getElementById('norideshare').style.display = "none";
  }
}

function crReview() {
  if (document.getElementById('crReview').style.display == "none") {
    document.getElementById('crReview').style.display = "block";
  } else {
    document.getElementById('crReview').style.display = "none";
  }
}

function mileageCalc() {
  if (document.getElementById('mileageCalc').style.display == "none") {
    document.getElementById('under90hmpd').style.display = "none";
    document.getElementById('MileDiscrep1').style.display = "none";
    document.getElementById('norideshare').style.display = "none";
    document.getElementById('mileageCalc').style.display = "block";
  } else {
    document.getElementById('mileageCalc').style.display = "none";
  }
}

function resetMD() {
  const mileRadios = document.getElementsByClassName("mdguide");
  for (let i = 0; i < mileRadios.length; i++) {
    mileRadios[i].checked = false;
  }
  document.getElementById('mileageCalc').style.display = "none";
  document.getElementById('crReview').style.display = "none";
  document.getElementById('norideshare').style.display = "none";
  document.getElementById('proceed').style.display = "none";
  document.getElementById('under90hmpd').style.display = "none";
  document.getElementById('MileDiscrep1').style.display = "block";
}

function resetGuide() {
  const radioBtns = document.getElementsByClassName("authGuideradio");
  for (let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].checked = false;
    radioBtns[i].disabled = false;
  }
  document.getElementById('authGuide1').style.display = "inline-block";
  document.getElementById('authGuideAM').style.display = "none";
  document.getElementById('rfovrmsrp').style.display = "none";
  document.getElementById('oeunder').style.display = "none";
  document.getElementById('authGuideOE').style.display = "none";
  document.getElementById('paGuide').style.display = "none";
  document.getElementById('listUnder').style.display = "none";
  document.getElementById('rfovrlist').style.display = "none";
  document.getElementById('listOver').style.display = "none";
  document.getElementById('costund').style.display = "none";
  document.getElementById('rfovrcost').style.display = "none";
  document.getElementById('IHSourcing').style.display = "none";
}

//                                                                        Q AND A

function questAnswered(answerDiv) {
  if (answerDiv.style.opacity == "1") {
    return true;
  }
}

function questOpen() {
  if (document.getElementById("anstoquest1").classList.contains('active')) {
    return true;
  } else if (document.getElementById("anstoquest2").classList.contains('active')) {
    return true;
  } else if (document.getElementById("anstoquest3").classList.contains('active')) {
    return true;
  } else if (document.getElementById("anstoquest4").classList.contains('active')) {
    return true;
  } else if (document.getElementById("anstoquest5").classList.contains('active')) {
    return true;
  } else {
    return false;
  }
}

function showAnswer(questID) {
  let answerDivID = "ansto" + questID;
  let answerDiv = document.getElementById(answerDivID);
  if (answerDiv.classList.contains('active')) {
    answerDiv.classList.remove('active');
    return;
  } else if (!questOpen()) {
    answerDiv.classList.add('active');
    return;
  } else {
    return;
  }
}

document.addEventListener('click', function(e) {
  let swap1 = document.getElementById('swap1');
  let mySidenav = document.getElementById('mySidenav');
  let sopnav2 = document.getElementById('sopnav2');
  let navtag = document.getElementById('navtag');
  let LOCK1 = document.getElementById("LOCK1");

  if (!mySidenav.contains(e.target) && !swap1.contains(e.target)) {
    closeNav();
  }
  if (!navtag.contains(e.target) && !sopnav2.contains(e.target)) {
    closePDFmenu();
  }
  if (!LOCK1.contains(e.target)) {
   localStorage.setItem("menuOpen", "true");
   MENU();
  }
});

function closePDFmenu() {
  document.getElementById("navtag").style.display = "initial";
  document.getElementById("sopnav2").classList.remove("open_sop");
  document.getElementById("sopnav3").classList.remove("open_sop");
}

function openSOPnav() {
  if (checkOpen()) { return; }
  document.getElementById("navtag").style.display = "none";
  document.getElementById("sopnav2").classList.add("open_sop");
  document.getElementById("sopnav3").classList.add("open_sop");
}

function showSOP(id) {
  closePDFmenu();
  const sources = [
    "./SOP/ClaimsBasic/Start_a_Claim.pdf",
    "./SOP/ClaimsBasic/Search_For_Claims.pdf",
    "./SOP/ClaimsBasic/Contract_Holder_Verification.pdf",
    "./SOP/ClaimsBasic/Parts_Verification.pdf",
    "./SOP/ClaimsBasic/Labor_Verification.pdf",
    "./SOP/ClaimsBasic/Assign_A_Task.pdf",
    "./SOP/ClaimsBasic/Set_An_Inspection.pdf",
    "./SOP/ClaimsBasic/Request_Records.pdf",
    "./SOP/ClaimsBasic/Upload_Documents.pdf",
    "./SOP/ClaimsBasic/Add_Or_Update_Repair_Facilites.pdf",
    "./SOP/ClaimsBasic/Finalizing_Claims.pdf",
    "./SOP/ClaimsBasic/Claim_Notes.pdf",
    "./SOP/ClaimsIssues/Handling_Escalations.pdf",
    "./SOP/ClaimsIssues/Parts_Resolution.pdf",
    "./SOP/ClaimsIssues/Part_Returns_and_Freight.pdf",
    "./SOP/ClaimsIssues/Close_Or_Set_Inactive.pdf",
    "./SOP/ClaimsIssues/Warranties_Recalls_TSBs.pdf",
    "./SOP/ClaimsIssues/Recognizing_Altered_Records.pdf",
    "./SOP/ClaimsIssues/Escalating_Misrepresentation_to_Legal.pdf",
    "./SOP/ClaimsIssues/RF_Management_Case.pdf",
    "./SOP/ClaimsIssues/TL_Request_Support_Regarding_Network_RF.pdf",
    "./SOP/ClaimsIssues/TL_Help_Request_Vendor_Network.pdf",
    "./SOP/Reviewing/Reviewing_Branded_Title.pdf",
    "./SOP/Reviewing/Reviewing_Commerical_Usage.pdf",
    "./SOP/Reviewing/Reviewing_Mileage_Discrepancies.pdf",
    "./SOP/Reviewing/Reviewing_Modifications.pdf",
    "./SOP/Reviewing/Reviewing_Oversized_Tires.pdf",
    "./SOP/Reviewing/Reviewing_Suspension_Modification.pdf",
    "./SOP/HowTo/Handle_MBI_Claims.pdf",
    "./SOP/HowTo/Handle_Preferred_Customers.pdf",
    "./SOP/HowTo/Key_And_Authorize_Tow.pdf",
    "./SOP/HowTo/Key_Rental_Reimbursement.pdf",
    "./SOP/HowTo/Key_Roadside_Reimbursement.pdf",
    "./SOP/HowTo/Request_Tracking.pdf",
    "./SOP/HowTo/Make_A_3Way_Call.pdf",
    "./SOP/HowTo/Reach_Out_To_DataManagement.pdf",
    "./SOP/Info/Terms_And_Abbreviations.pdf",
    "./SOP/Info/Enhanced_Deductible.pdf",
    "./SOP/Info/Fluid_Pricing_Sheet.pdf",
    "./SOP/Info/PT_Or_General_Claim.pdf",
    "./SOP/Info/Repair_Facility_Types.pdf",
    "./SOP/Info/PRF_Location.pdf",
    "./SOP/Info/CMS_Emails.pdf",
    "./SOP/Info/Text_Notifications.pdf",
    "./SOP/Info/PT_First_Contact.pdf",
    "./SOP/Info/State_Tax.pdf",
    "./SOP/Info/Employee_Handbook.pdf"
        ];
  const index = parseInt(id.substring(3)) - 1;
  const src = sources[index];
  const iframe = document.createElement('iframe');
  iframe.src = src;
  const PDFdepot = document.getElementById('PDFdepot');
  const existingIframe = PDFdepot.querySelector('iframe');
  if (existingIframe) {
    PDFdepot.removeChild(existingIframe);
  }
  PDFdepot.appendChild(iframe);
  PDFdepot.style.display = 'block';
}

function closeSOP() {
  const PDFdepot = document.getElementById('PDFdepot');
  const iframe = PDFdepot.querySelector('iframe');
  if (iframe) {
    PDFdepot.removeChild(iframe);
  }
  PDFdepot.style.display = 'none';
}