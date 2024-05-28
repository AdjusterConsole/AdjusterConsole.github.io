  let newpartcount = 2;

function swapPage(x) {
  switch(x) {
  case '1':
    window.location.href = "index.html";
    break;
  case '2':
    window.location.href = "index2.html";
    break;
  case '3':
    window.location.href = "index3.html";
    break;
  }
}

function setVer(x) {
   switch(x) {
  case '1':
    localStorage.setItem('currentVer', '1');
    break;
  case '2':
    localStorage.setItem('currentVer', '2');
    break;
  case '3':
    localStorage.setItem('currentVer', '3');
    break;
  }
}

function checkOpen() {
  var TPDiv = document.getElementById("TPDiv");
  var statNote = document.getElementById("statNote");
  var Snippings = document.getElementById("Snippings");
  var RFIBDH = document.getElementById("RFIBDH");
  var RFIBND = document.getElementById("RFIBND");
  var TGAFOBTN = document.getElementById("TGAFOBTN");
  var TGAFOABTN = document.getElementById("TGAFOABTN");
  var TGAFSABTN = document.getElementById("TGAFSABTN");
  var TGAFOSABTN = document.getElementById("TGAFOSABTN");
  var newAuthstyle = document.getElementById("newAuthstyle");
  var resrcDiv = document.getElementById("resrcDiv");

  if (Snippings.style.display == "inline-block") {
    return true;
  } else if (RFIBDH.style.display == "inline-block") {
    return true;
  } else if (TGAFOSABTN.style.display == "inline-block") {
    return true;
  } else if (RFIBND.style.display == "inline-block") {
    return true;
  } else if (TGAFOBTN.style.display == "inline-block") {
    return true;
  } else if (TGAFOABTN.style.display == "inline-block") {
    return true;
  } else if (TGAFSABTN.style.display == "inline-block") {
    return true;
  } else if (statNote.style.display == "inline-block") {
    return true;
  } else if (newAuthstyle.style.display == "inline-block") {
    return true;
  } else if (TPDiv.style.display == "inline-block") {
    return true;
  } else if (resrcDiv.style.display == "inline-block") {
    return true;
  } else {
  return false;
  }
}

function getContact(whichInfo) {
  var whichOne = parseInt(whichInfo);
  var textarea = document.getElementById('textarea1');
  var lines = textarea.value.split('\n');
  var start = lines.slice(0, whichOne).reduce((acc, curr) => acc + curr.length + 1, 0);
  var end = start + lines[whichOne].length;
  textarea.focus();
  textarea.setSelectionRange(start, end);
  var tempStr = window.getSelection();
  document.getElementById("textarea4").value = tempStr;
  var fullString = document.getElementById("textarea4").value;
  var contactString = fullString.slice(9);
  var bananaMilkshake = contactString.trim();
  return bananaMilkshake;
}

function ShowTemps() {
  var TPDiv = document.getElementById("TPDiv");
  var isOpen = checkOpen();
  if (TPDiv.style.display == "inline-block" || isOpen) {
    TPDiv.style.display = "none";
    return;
  }
  TPDiv.style.display = "inline-block";
  const list = document.getElementById("mySidenav").classList;
  list.replace("open_nav", "closed_nav");
}

function MENU() {
  var theMenu = document.getElementById("LOCK1");
  var BtnBuilder = document.getElementById("BtnBuilder");
  var buttonMaker = document.getElementById("buttonMaker");
  var menuOpen = localStorage.getItem("menuOpen");
  document.getElementById("EDITarea").value = "";
  if (menuOpen == 'false') {
    theMenu.innerText = "\u2666 Close \u2666";
    appearance.style.top = "45px";
    appearance.style.opacity = '1';
    BtnBuilder.style.top = "70px";
    BtnBuilder.style.opacity = '1';
    buttonMaker.style.top = "95px";
    buttonMaker.style.opacity = '1';
    tutorialSel.style.top = "120px";
    tutorialSel.style.opacity = '1';
    const list = document.getElementById("mySidenav").classList;
    list.replace("open_nav", "closed_nav");
    localStorage.setItem("menuOpen", "true");
  } else {
    BtnBuilder.style.top = "20px";
    BtnBuilder.style.opacity = '0';
    appearance.style.top = "20px";    
    appearance.style.opacity = '0';
    buttonMaker.style.top = "20px";
    buttonMaker.style.opacity = '0';
    tutorialSel.style.top = "20px";
    tutorialSel.style.opacity = '0';
    var page = localStorage.getItem('currentVer');
    theMenu.innerText = "\u2666 Settings \u2666"; 
    localStorage.setItem("menuOpen", "false");
  }
}

function statNOTE() {
  var statNote = document.getElementById("statNote");
  var statNoteinner = document.getElementById("statNoteinner");
  var isOpen = checkOpen();
  if (statNote.style.display == "inline-block" || isOpen) {
    statNote.style.display = "none";
    statNoteinner.style.height = "0%";
    return;
  }
  statNote.style.display = "inline-block";
  statNoteinner.style.height = "90%";
  const list = document.getElementById("mySidenav").classList;
  list.replace("open_nav", "closed_nav");
}

function cancelStat() {
  var statNote = document.getElementById("statNote");
  var statNoteinner = document.getElementById("statNoteinner");
  statNote.style.display = "none";
  statNoteinner.style.height = "0%";
}

function submitStat(again) {
  var optionalNote = document.getElementById("optionalNote").value;
  var statNote = document.getElementById("statNote");
  var q1 = document.getElementsByName("waitfor");
  var q2 = document.getElementsByName("onwho");
  var q3 = document.getElementsByName("butYtho");
  var stat6text = document.getElementById("stat6text").value;
  var stat10text = document.getElementById("stat10text").value;
  var stat14text = document.getElementById("stat14text").value;
  var isInformed = document.getElementById("informed");
  var isPandlin = document.getElementById("pandlin");
  var isTaskset = document.getElementById("taskset");
  var ans1;
  var ans2;
  var ans3;
  localStorage.removeItem("num0");
  localStorage.removeItem("num1");
  localStorage.removeItem("num2");
  localStorage.removeItem("num3");
  var checkedArr = [];
  for (i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      if(q1[i].id == "stat6") {
        ans1 = stat6text;
        checkedArr.push(q1[i]);
      } else {
        ans1 = q1[i].value;
        checkedArr.push(q1[i]);
      }
    }
  }
  for (i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      if(q2[i].id == "stat10") {
        ans2 = stat10text;
        checkedArr.push(q2[i]);
      } else {
        ans2 = q2[i].value;
        checkedArr.push(q2[i]);
      }
    }
  }
  for (i = 0; i < q3.length; i++) {
    if (q3[i].checked) {
      if(q3[i].id == "stat14") {
        ans3 = stat14text;
        localStorage.setItem("num" + i, ans3);
        checkedArr.push(q3[i]);
      } else {
        ans3 = q3[i].value;
        localStorage.setItem("num" + i, ans3);
        checkedArr.push(q3[i]);
      }
    }
  }
  for (i = 0; i < checkedArr.length; i++) {
    checkedArr[i].checked = false;
  }
  document.getElementById("stat6text").value = "";
  document.getElementById("stat10text").value = "";
  document.getElementById("stat14text").value = "";
  document.getElementById("textarea5").value += "Waiting on " + ans1 + " from " + ans2 + " in order to ";
  var addon = 0;
  if (document.getElementById("stat15").checked) {
    localStorage.setItem("toldem", "true");
  }
  for (i = 0; i < 4; i++) {
    var ans3 = localStorage.getItem("num" + i);
    if (ans3 != null) {
      if (addon != '0') {
        if (i == '3') {
          document.getElementById("textarea5").value += " as well as " + ans3;
        } else {
          document.getElementById("textarea5").value += " and " + ans3;
          addon = addon + 1; 
        }
      } else {
        document.getElementById("textarea5").value += ans3;
        addon = addon + 1;
      }
    }
  localStorage.removeItem("num" + i);
  }
  document.getElementById("textarea5").value += ".\r"
  document.getElementById("stat15").checked = false;
  document.getElementById("stat16").innerHTML = false;
  if (again == '1') {
    return;
  }
  if (again == '0') {
    var toldem = localStorage.getItem("toldem");
    if (toldem == "true") {
      document.getElementById("textarea5").value += "They have been informed of the request and given instructions on how to submit.\r";
      localStorage.setItem("toldem", "false");
    }
    if (optionalNote != null) {
      document.getElementById("textarea5").value += "\r" + optionalNote + "\r\r";
    } 
    if (isPandlin.checked){
      document.getElementById("textarea5").value += "Parts and labor are verified and keyed in.\r";
      isPandlin.checked = false;
    } 
    if (isInformed.checked){
      document.getElementById("textarea5").value += "RF and CH are informed of claim status.\r";
      isInformed.checked = false;
    } 
    if (isTaskset.checked){
      document.getElementById("textarea5").value += "A task has been set for follow-up.\r\r";
      isTaskset.checked = false;
    } 
    let textarea = document.getElementById("textarea5");
    textarea.select();
    document.execCommand("copy");
    statNote.style.display = "none";
    statNoteinner.style.height = "0%";
  }
}

function showAuth() {
  var newAuthstyle = document.getElementById("newAuthstyle");
  var isOpen = checkOpen();
  if (newAuthstyle.style.display == "inline-block" || isOpen) {
    newAuthstyle.style.display = "none";
    return;
  }
  newAuthstyle.style.display = "inline-block";
  const list = document.getElementById("mySidenav").classList;
  list.replace("open_nav", "closed_nav");
}

function moveAuth() {
  document.getElementById("authParts").style.display = "none";
  document.getElementById("authRequests").style.display = "inline-block";
}

function moveAuth2() {
  document.getElementById("authRequests").style.display = "none";
  document.getElementById("authOopcs").style.display = "inline-block";
}

function cancelNewauth() {
  document.getElementById("authParts").style.display = "inline-block";
  document.getElementById("authRequests").style.display = "none";
  document.getElementById("authOopcs").style.display = "none";
  document.getElementById("newAuthstyle").style.display = "none";
  document.getElementById("OOPoptDiv").style.display = "none";
  var boxes = document.querySelectorAll(".FNA");
  for (i = 0; i < boxes.length; i++) {
    boxes[i].checked = false;
  }
}

function newAuth() {
  var newauthLine0 = "RF Contact name: ";
  var newauthLine1 = "Verified failures using RF diagnostic.";
  var newauthLine1a = "Verified failures using RF diagnostic and inspection report.";
  var newauthLine1b = "Verified failures using RF diagnostic and RF supplied photos.";
  var newauthLine2 = "Contract has coverage for failed components.";
  var newauthLine3 = "Verified OEM parts using Forte and AM parts using PA.";
  var newauthLine4 = "Verified labor using Pro Demand.";
  var newauthLine5 = "Verified payment info with RF contact at: ";
  document.getElementById("authParts").style.display = "inline-block";
  document.getElementById("authRequests").style.display = "none";
  document.getElementById("authOopcs").style.display = "none";
  document.getElementById("newAuthstyle").style.display = "none";
  var stage = document.getElementById("textarea2");
  var bananaMilkshake = getContact('1');
  var rfContact = getContact('0');
  stage.value = newauthLine0 + rfContact + "\r";
  var firstAuthline = newauthLine1;
  if (document.getElementById("auth6").checked) { firstAuthline = newauthLine1a; }
  if (document.getElementById("auth7").checked) { firstAuthline = newauthLine1b; }
  stage.value += firstAuthline + "\r" + newauthLine2 + "\r" + newauthLine3 + "\r" + newauthLine4  + "\r" + newauthLine5 + bananaMilkshake + "\r";
  partsOptions(stage);
}

function setValue() {
  document.getElementById("auth1").value = "Using repair facility OEM parts at or under $250.00.";
  document.getElementById("auth2").value = "Using repair facility parts at or under sourcing MCE.";
  document.getElementById("auth3").value = "Using sourcing MCE as a credit toward repair facility parts.";
  document.getElementById("auth4").value = "Using sourcing MCE as a credit toward repair facility parts or shipping in.";
  document.getElementById("auth5").value = "Adjusted price to reasonable amount near MCE.\rThis was done considering all factors including claim delays,\rshipping costs, liability for future failures, time and mileage\rin coverage, number of prior claims and their cost, etc.";
}

function partsOptions(stage) {
  setValue();
  var partOpts = document.getElementsByName("authparts");
  for (i = 0; i < partOpts.length; i++) {
    if (partOpts[i].checked == true) {
      stage.value += partOpts[i].value + "\r";
    }
  }
  requestOptions(stage);
}
    
function requestOptions(stage) {
  var inspAuth1 = "No inspection needed as RF diagnostic matches CH concern.";
  var inspAuth2 = "Sent inspection to verify failures.\rReviewed report and inspection photos.\rInspection review note is completed.";
  var inspAuth3 = "Requested and reviewed photos from repair facility.\rPhoto review note is completed.";
  var recordsAuth1 = "No records requested as history will not change claim decision.\rVehicle is not in waiting period.\rConcern is not maintenance related.\rNo prior related claims.\rNo recalls, TSBs, or mileage concerns.";
  var recordsAuth2 = "Requested and reviewed records and statement.\rRecord review note is completed.";
  var requestedAuth1 = "After reviewing all relevant documentation, we are moving forward with verified failures.";

  if (document.getElementById("auth9").checked == true) {
    stage.value += inspAuth1 + "\r" + recordsAuth1 + "\r";
    issuesOptions(stage);
    return;
  }
  if (document.getElementById("auth6").checked == true) {
    stage.value += inspAuth2 + "\r";
  }
  if (document.getElementById("auth7").checked == true) {
    stage.value += inspAuth3 + "\r";
  }
  if (document.getElementById("auth8").checked == true) {
    stage.value += recordsAuth2 + "\r";
  }
  stage.value += requestedAuth1 + "\r";
  issuesOptions(stage);
}
  
function issuesOptions(stage) {
  var oopcsAuth1 = "Need to review OOPC of $";
  var oopcsAuth2a = " with contract holder.";
  var oopcsAuth2b = " and shipping option with contract holder.";
  var oopcsAuth2c = "OOPC is due to differences in ";
  var oopcsAuth3 = "Need to review shipping option with contract holder.";
  var oopcsAuth3a = "Have not given authorization info to RF at this time.";
  var oopcsAuth4 = "Contract holder has no OOPC besides deductible.";
  var oopcsAuth4a = "Gave authorization info and payment instructions to ";

  var rfName = getContact('0');
  if (document.getElementById("auth13").checked == true) {
    stage.value += oopcsAuth4 + "\r" + oopcsAuth4a + rfName + "\r";
    finishAuth(stage);
    return;
  }
  if (document.getElementById("auth11").checked == true) {
    stage.value += oopcsAuth3 + "\r" + oopcsAuth3a + "\r";
    finishAuth(stage);
    return;
  }
  if (document.getElementById("auth10").checked == true || document.getElementById("auth12").checked == true) {
    var oopcCausep = document.getElementById("auth14");
    var oopcCausel = document.getElementById("auth15");
    var oopcCauseb = document.getElementById("auth16");
    var oopcAmt1 = document.getElementById("auth17").value;
    document.getElementById("auth17").value = "";
    var num = parseInt(oopcAmt1);
    var oopcAmt2 = num.toFixed(2);
    var oopcAmt = oopcAmt2.toString();
    var oopcCausedBy;
    if (oopcCauseb.checked == true) { oopcCausedBy = "parts and labor."; } 
    if (oopcCausel.checked == true) { oopcCausedBy = "labor."; } 
    if (oopcCausep.checked == true) { oopcCausedBy = "parts."; } 
    if (oopcAmt == null) { alert("Please enter the amount of OOPC"); return; }
    stage.value += oopcsAuth1 + oopcAmt;
    if (document.getElementById("auth12").checked == true) {
      stage.value += oopcsAuth2b + "\r" + oopcsAuth2c + oopcCausedBy + "\r" + oopcsAuth3a + "\r";
    } else {
      stage.value += oopcsAuth2a + "\r" + oopcsAuth2c + oopcCausedBy + "\r" + oopcsAuth3a + "\r";
    }
    finishAuth(stage);
    return;
  }
}
  
function showOOPopt() {
  document.getElementById("OOPoptDiv").style.display = "inline-block";
}

function finishAuth(stage) {
  var noncovAuth1 = "Will inform CH of non-covered components";
  var noncovAuth2 = "There were denied items on this claim.\rReview denial note for more details";
  document.getElementById("OOPoptDiv").style.display = "none";
  var noncovComps = document.getElementById("auth18");
  if (noncovComps.checked) { stage.value += noncovAuth1 + "\r"; }
  var deniedComps = document.getElementById("auth18a");
  if (deniedComps.checked) { stage.value += noncovAuth2; }
  stage.select();
  document.execCommand("copy");
  var boxes = document.querySelectorAll(".FNA");
  for (i = 0; i < boxes.length; i++) {
    boxes[i].checked = false;
  }
}

function EVACRECH(btnID) {
  var EvacRechrge = "Evac and Recharge\rRF Asking:   \rPD Approved:   1.4\r\r";
  var Check = localStorage.getItem(btnID + "EDIT");
  var textarea = document.getElementById("textarea2");
  if (Check == null) {
    textarea.value += EvacRechrge;
    document.getElementById("EDITarea").value = EvacRechrge;
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function ALIGNMENT(btnID) {
  var Alignment = "Alignment\rRF Asking:   \rPD Approved:   \r\r";
  var Check = localStorage.getItem(btnID + "EDIT");
  var textarea = document.getElementById("textarea2");
  if (Check == null) {
   textarea.value += Alignment;
   document.getElementById("EDITarea").value = Alignment;
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function DIAG() {
  var textarea = document.getElementById("textarea2");
  textarea.value += "Diag\rRF Asking:   \rPD Approved:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function LABOR(boxNum) {
  var textarea = document.getElementById("textarea2");
  textarea.value += "R/R \rRF Asking:   \rPD Approved:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function BULK(btnID) {
  var BulkFluid = "BULK:   \rRF Price:   \rFPS Allows:   \r\r";
  var Check = localStorage.getItem(btnID + "EDIT");
  var textarea = document.getElementById("textarea2");
  if (Check == null) {
    textarea.value += BulkFluid;
    document.getElementById("EDITarea").value = BulkFluid;
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function OEMOVER() {
  var textareaVal = document.getElementById("textarea2").value;
  var textarea = document.getElementById("textarea2");
  textareaVal = textareaVal.slice(0,-1);
  textarea.value = textareaVal;
  textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function NEWAM() {
  var textarea = document.getElementById("textarea2");
  textarea.value += "RF AM PN:   \rRF Price:   \rPA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function NEWOEM() {
  var textarea = document.getElementById("textarea2");
  textarea.value += "Verified OEM PN:   \rVerified MSRP:   \rRF Price:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function CALLNOANS(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = NoAnswerOOPC;
    document.getElementById("EDITarea").value = NoAnswerOOPC;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
}

function AUTHOOPC(btnID) {
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = ChAuthedOOPC;
    document.getElementById("EDITarea").value = ChAuthedOOPC;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
}

function STMTTEMP(btnID) {
  var StTemp = "What happened:   \rWhen did the issue first occur:   \rHad the issue occurred before:   \rIf yes, when:   \rAny warning lights:   \rAny noise, smoke, or smell:   \rHow long has the CH owned the vehicle:   \rApproximate mileage when CH purchased:   \rWas vehicle towed to RF:   \rFrom where and by whom:   \r";
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = StTemp;
    document.getElementById("EDITarea").value = StTemp;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
  ShowTemps();
  imBusy = "false";
}

function REVIEW(btnID) {
  var Rev = "Reviewed inspection photos and report.\rReviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r";
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = Rev;
    document.getElementById("EDITarea").value = Rev;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
  ShowTemps();
  imBusy = "false";
}

function RECREQ(btnID) {
  var RecReq = "Requesting CH statement regarding issues.\rRequesting past 12 months of service records from CH.\rSent records request using SRS action button.\rWill call CH to inform.";
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = RecReq;
    document.getElementById("EDITarea").value = RecReq;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
}

function NOANSREC(btnID) {
  var NoAns = "Called CH to request records.\rCalled CH to request statement.\rNo answer – left voicemail.\rTasked to CS callbacks.";
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = NoAns;
    document.getElementById("EDITarea").value = NoAns;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
}

function INSPTEMP(btnID) {
  var InsTemp = "Please verify all failures.\rPlease contact 1-2 hours prior to arrival.\rContact:   \rPhone:   \rEmail:   ";
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = InsTemp;
    document.getElementById("EDITarea").value = InsTemp;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
  ShowTemps();
  imBusy = "false";
}

function PTXFER() {
  var showTemp = document.getElementById("transferTemplate");
  showTemp.style.display = "inline-block";
  var rfEmail = getContact('1');
  var rfName = getContact('0');
  document.getElementById("contact1").value = rfName;
  document.getElementById("contact2").value = rfEmail;
  localStorage.setItem("PTpage", "1");
  document.getElementById("quest1").style.display = "block";
  ShowTemps();
}

function advancePT(radioId) {
  var page = parseInt(localStorage.getItem("PTpage"));
  var num = radioId.match(/(\d+)/);
  var single = num[0];
  var curId = "quest" + single;
  var nextIdnum = parseInt(single) + 1;
  var nextId = "quest" + nextIdnum;

  if (radioId == "no3" || radioId == "nr3") {
    document.getElementById("q3ansN").style.display = "block";
    document.getElementById("quest3").style.display = "none";
    return;
  }
  if (radioId == "done3") {
    document.getElementById("q3ansN").style.display = "none";
  }
  if (radioId == "yes11") {
    document.getElementById("q11ansY").style.display = "block";
    document.getElementById("quest11").style.display = "none";
    return;
  }
  if (radioId == "no11" || radioId == "done11") {
    document.getElementById("q11ansY").style.display = "none";
    submitTEMP();
    return;
  }
  localStorage.setItem("PTpage", nextIdnum);
  document.getElementById(curId).style.display = "none";
  document.getElementById(nextId).style.display = "block";
}

function backTEMP() {
  var page = localStorage.getItem("PTpage");
  if (page == "1") { return; }
  var curId = "quest" + page;
  var newpage = parseInt(page) - 1;
  var nextId = "quest" + newpage;
  localStorage.setItem("PTpage", newpage);
  document.getElementById("q3ansN").style.display = "none";
  document.getElementById("q11ansY").style.display = "none";
  document.getElementById(curId).style.display = "none";
  document.getElementById(nextId).style.display = "block";
}

function submitTEMP() {
  var PtTransfer1 = "Is the repair facility able to diagnose to cause of failure and overhaul if needed?   ";
  var PtTransfer2 = "Has the repair facility ever serviced the vehicle before?   ";
  var PtTransfer3 = "Can a test drive be performed if needed?   ";
  var PtTransfer4 = "Did the repair facility tow the vehicle?   ";
  var PtTransfer5 = "Has the cause of failure been identified?   ";
  var PtTransfer6 = "Does the repair facility have an itemized estimate available?   ";
  var PtTransfer7 = "Has the repair facility's info and contact info been verified?   ";
  var PtTransfer8 = "What is the preferred method of contact?   ";
  var PtTransfer9  = "Have the PT claim expectations been reviewed with the repair facility contact?   ";
  var PtTransfer10 = "Have you provided the repair facility with the assigned adjusters name, direct extension, and e-mail?   ";
  var PtTransfer11 = "Is there any other relevant info that will assist the adjuster?   ";
  var q1 = document.getElementsByName("ans1");
  var q2 = document.getElementsByName("ans2");
  var q3 = document.getElementsByName("ans3");
  var q4 = document.getElementsByName("ans4");
  var q5 = document.getElementsByName("ans5");
  var q6 = document.getElementsByName("ans6");
  var q7 = document.getElementsByName("ans7");
  var q8 = document.getElementsByName("ans8");
  var q9 = document.getElementsByName("ans9");
  var q10 = document.getElementsByName("ans10");
  var q11 = document.getElementsByName("ans11");
  var ans1;
  var ans2;
  var ans3;
  var ans4;
  var ans5;
  var ans6;
  var ans7;
  var ans8;
  var ans9;
  var ans10;
  var ans11;

  var checkedArr = [];
  for (i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      ans1 = q1[i].value;
      checkedArr.push(q1[i]);
    }
  }
  for (i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      ans2 = q2[i].value;
      checkedArr.push(q2[i]);
    }
  }
  for (i = 0; i < q3.length; i++) {
    if (q3[i].checked) {
      ans3 = q3[i].value;
      checkedArr.push(q3[i]);
    }
  }
  for (i = 0; i < q4.length; i++) {
    if (q4[i].checked) {
      ans4 = q4[i].value;
      checkedArr.push(q4[i]);
    }
  }
  for (i = 0; i < q5.length; i++) {
    if (q5[i].checked) {
      ans5 = q5[i].value;
      checkedArr.push(q5[i]);
    }
  }
  for (i = 0; i < q6.length; i++) {
    if (q6[i].checked) {
      ans6 = q6[i].value;
      checkedArr.push(q6[i]);
    }
  }
  for (i = 0; i < q7.length; i++) {
    if (q7[i].checked) {
      ans7 = q7[i].value;
      checkedArr.push(q7[i]);
    }
  }
  for (i = 0; i < q8.length; i++) {
    if (q8[i].checked) {
      ans8 = q8[i].value;
      checkedArr.push(q8[i]);
    }
  }
  for (i = 0; i < q9.length; i++) {
    if (q9[i].checked) {
      ans9 = q9[i].value;
      checkedArr.push(q9[i]);
    }
  }
  for (i = 0; i < q10.length; i++) {
    if (q10[i].checked) {
      ans10 = q10[i].value;
      checkedArr.push(q10[i]);
    }
  }
  for (i = 0; i < q11.length; i++) {
    if (q11[i].checked) {
      ans11 = q11[i].value;
      checkedArr.push(q11[i]);
    }
  }
  var q11ansExplain = document.getElementById("q11ansExplain").value;
  var q3ansExplain = document.getElementById("q3ansExplain").value;
  var contact1 = "Contact Name: " + document.getElementById("contact1").value;
  var contact2 = "Contact Info: " + document.getElementById("contact2").value;

  for (i = 0; i < checkedArr.length; i++) {
    checkedArr[i].checked = false;
  }
  document.getElementById("textarea5").value = PtTransfer1 + ans1 + "\r\r" +  PtTransfer2 + ans2 + "\r\r" + PtTransfer3 + ans3 + "\r";  
  if (ans3 != "YES") {
    document.getElementById("textarea5").value += q3ansExplain + "\r\r";
  } else {
    document.getElementById("textarea5").value +=  "\r";
  }
  document.getElementById("textarea5").value += PtTransfer4 + ans4 + "\r\r" +  PtTransfer5 + ans5 + "\r\r" +  PtTransfer6 + ans6 + "\r\r" +  PtTransfer7 + ans7 + "\r\r" +  PtTransfer8 + ans8 + "\r" + contact1 + "\r" + contact2 + "\r\r" + PtTransfer9 + ans9 + "\r\r" + PtTransfer10 + ans10 + "\r\r" + PtTransfer11 + ans11 + "\r";
  if (ans11 == "YES") {
    document.getElementById("textarea5").value += q11ansExplain;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
  document.getElementById("q3ansExplain").value = "";
  document.getElementById("q11ansExplain").value = "";
  document.getElementById("contact1").value = "";
  document.getElementById("contact2").value = "";
  var showTemp = document.getElementById("transferTemplate");
  showTemp.style.display = "none";
}

function cancelPT() {
  var showTemp = document.getElementById("transferTemplate");
  showTemp.style.display = "none";
  var questDivs = document.getElementsByClassName("ptQuest");
  for (const x of questDivs) {
    x.style.display = "none";
  }
  var questRadios = document.getElementsByClassName("ptRad");
  for (const x of questRadios) {
    x.checked = false;
  }
}

function PICREQ(btnID) {
  var PicReq = "Requesting photos from RF to verify failure and avoid inspection delay.\rInforming RF to include pics of all 4 corners of the vehicle, VIN plate, odometer, and pictures of the failure.\rSent request via SRS action button.";
  var Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = PicReq;
   document.getElementById("EDITarea").value = PicReq;
  } else {
    document.getElementById("textarea5").value = Check;
   document.getElementById("EDITarea").value = Check;
  }
  let textarea = document.getElementById("textarea5");
  textarea.select();
  document.execCommand("copy");
}

function FLUIDLEAK() {
  var fluids = document.getElementById("div6");
  if (fluids.style.display != "none") {
    fluids.style.display = "none";
    document.getElementById("fluid").textContent = "$";
  } else {
    fluids.style.display = "inline-block";
    document.getElementById("fluid").textContent = "X";
  }
}

function CopyIntakeForm(index) {
  var textarea = document.getElementById('textarea1');
  var lines = textarea.value.split('\n');
  var lineIndex = parseInt(index);
  var start = lines.slice(0, lineIndex).reduce((acc, curr) => acc + curr.length + 1, 0);
  var end = start + lines[lineIndex].length;
  textarea.focus();
  textarea.setSelectionRange(start, end);
  var tempStr = window.getSelection();
  document.getElementById("textarea4").value = tempStr;
  var fullString = document.getElementById("textarea4").value;
  var contactString = fullString.slice(9);
  document.getElementById("textarea4").value = contactString.trim();
  let extra = document.getElementById("textarea4");
  extra.select();
  document.execCommand("copy");
}

function CopyForm(index){
  let textarea = document.getElementById(index);
  textarea.select();
  document.execCommand("copy");
}

function FormToTA() {
  var partname = document.getElementById('partname1').value;
  var partnum = document.getElementById('partnum').value;
  var rfprice = document.getElementById('rfprice').value;
  var msrp = document.getElementById('msrp').value;
  var textarea = document.getElementById("textarea2");
  if (msrp) {
    var overCheck = parseInt(msrp);
    textarea.value += "Part: ";
    textarea.value += partname + "\r";
    textarea.value += "Verified OEM PN: ";
    textarea.value += partnum + "\r";
    textarea.value += "Verified MSRP: ";
    textarea.value += msrp + "\r";
    textarea.value += "RF Price: ";
    textarea.value += rfprice + "\r";
    if (overCheck > 250) {
      textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
      textarea.scrollTop = textarea.scrollHeight;
      } else {
        textarea.value += "\r";
        textarea.scrollTop = textarea.scrollHeight;
      }
  } else {
    textarea.value += "Part: ";
    textarea.value += partname + "\r";
    textarea.value += "RF AM PN:  ";
    textarea.value += partnum + "\r";
    textarea.value += "RF Price: ";
    textarea.value += rfprice + "\r";
    textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
    textarea.scrollTop = textarea.scrollHeight;
  }
}

function AnotherOne() {
  if (newpartcount < 7){
    document.getElementById("partname" + newpartcount).style.display = "inline-block";
    newpartcount++;
  }
}

function NextPart() {  
  document.getElementById('partnum').value = "";
  document.getElementById('rfprice').value = "";
  document.getElementById('msrp').value = "";
  partMover = newpartcount - 1;
  for (var i = 1; i < partMover; i++) {
    var d = i + 1;
    var upper = document.getElementById("partname" + d);
    var lower = document.getElementById("partname" + i);
    lower.value = upper.value;
  }
  if (newpartcount > 2) {
    newpartcount = newpartcount - 1;
    document.getElementById("partname" + partMover).value = "";
    document.getElementById("partname" + partMover).style.display = "none";
  }
}

function SENDLABOR1() {
  var Labor = "RF Asking:   \rPD Approved:   \r\r";
  var partname = document.getElementById('partname1').value;
  var textarea = document.getElementById("textarea2");
  textarea.value += "R/R ";
  textarea.value += partname + "\r";
  textarea.value += Labor;
  textarea.scrollTop = textarea.scrollHeight;
}

function SENDDIAG1() {
  var Labor = "RF Asking:   \rPD Approved:   \r\r";
  var partname = document.getElementById('partname1').value;
  var textarea = document.getElementById("textarea2");
  textarea.value += "Diag on ";
  textarea.value += partname + "\r";
  textarea.value += Labor;
  textarea.scrollTop = textarea.scrollHeight;
}

function ClearIntake() {
  document.getElementById("partname1").value = "";
  document.getElementById("partnum").value = "";
  document.getElementById("rfprice").value = "";
  document.getElementById("msrp").value = "";
}

function COPYNOTE() {
  let textarea = document.getElementById("textarea2");
  textarea.select();
  document.execCommand("copy");
}

const downloadFile = () => {
  const date = new Date();
  var stamp = date.toDateString();
  const link = document.createElement("a");
  const content = document.getElementById("textareadata").value;
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = stamp + ".txt";
  link.click();
  URL.revokeObjectURL(link.href);
};

function toggleConductor(boxId) {
  var checkBox = document.getElementById(boxId);
  if (boxId == "s9") {
    for (i = 0; i < showList.length; i++) {
      var affectedElem = showList[i];
      var affectedId = showList[i].id;
      if (checkBox.checked == true) {
        affectedElem.style.display = "inline-block";
        localStorage.setItem(affectedId + "SHOW", "inline-block");
        localStorage.setItem("allBTN", "inline-block");
      } else {
        affectedElem.style.display = "none";
        localStorage.setItem(affectedId + "SHOW", "none");
        localStorage.setItem("allBTN", "none");
      }
    }
  return;
  } else {
    var displayElemNode = document.getElementsByClassName(boxId + "dispStat"); 
    var affectedElem = displayElemNode[0];
    var affectedId = displayElemNode[0].id; 
    if (checkBox.checked == true){
      affectedElem.style.display = "inline-block";
      localStorage.setItem(affectedId + "SHOW", "inline-block");
    } else {
      affectedElem.style.display = "none";
      localStorage.setItem(affectedId + "SHOW", "none");
    }
  }
}

window.onload = function PutItBack() { 
  var selected = "holder1";
  var selectedElem = document.getElementById(selected);
  var didItRun = localStorage.getItem("Im The Boss");
  localStorage.setItem("toldem", "false");
  localStorage.setItem("menuOpen", "false");
  if (didItRun == null) {
    localStorage.setItem("Im The Boss", "It's Been Done");
    localStorage.setItem(selected + "STCB", '0');
    localStorage.setItem(selected + "PRIN", '0');
    localStorage.setItem(selected + "LINK", '0');
    localStorage.setItem(selected + "ENDN", '0');
    localStorage.setItem(selected + "SOLO", '0');
    localStorage.setItem(selected + "Count", '0');
  }
  var but = localStorage.getItem(selected + "Count");
  var buttonCount = parseInt(but);
  for (i = 0; i < buttonCount; i++) {
    var count = i.toString();
    var currID = "cust" + count;
    var newID = localStorage.getItem(currID);
    var currdivID = "custBtn" + count;
    var buttonX = document.getElementById(currID)
    buttonX.id = newID;
  }
  for (i = 0; i < 10; i++) {
    var count = i.toString();
    var curdivID = "custBtn" + count;
    var thsDisp = localStorage.getItem(curdivID + "SHOW");
    if (thsDisp == null) {
      localStorage.setItem(curdivID + "SHOW", "none");
    }
  }
  var idNode = document.querySelectorAll('*[id]');
  var idList =  Array.from(idNode);
  for (i = 0; i < idList.length; i++) {
    var selectedID = idList[i].id;
    var selectedElem = document.getElementById(selectedID);
    if (localStorage.getItem(selectedID + "Font") != null) {
      var fSize = localStorage.getItem(selectedID + "Font");
      selectedElem.style.fontSize = fSize;
    }
    if (localStorage.getItem(selectedID + "top") != null) {
      var top = localStorage.getItem(selectedID + "top");
      var left = localStorage.getItem(selectedID + "left");
      selectedElem.style.left = left;
      selectedElem.style.top = top;
    }
    if (localStorage.getItem(selectedID + "Width") != null) {
      var setWidth = localStorage.getItem(selectedID + "Width");
      var setHeight = localStorage.getItem(selectedID + "Height");
      selectedElem.style.width = setWidth;
      selectedElem.style.height = setHeight;
    }
    if (localStorage.getItem(selectedID + "Display") != null) {
      var setTEXT = localStorage.getItem(selectedID + "Display");
      selectedElem.innerHTML = setTEXT;
    }
  }
  var showNode = document.querySelectorAll('[class$="dispStat"]');
  var showList = Array.from(showNode);
  for (i = 0; i < showList.length; i++) {
    var selectedID = showList[i].id;
    var selectedElem = document.getElementById(selectedID);
    var elemClass = selectedElem.className;
    var boxId = elemClass.substr(-10, 2);
    var checkBox = document.getElementById(boxId);
    var currDisp = selectedElem.style.display;
    var setDisp = localStorage.getItem(selectedID + "SHOW");
    if (setDisp == null || setDisp == "inline-block") { 
      checkBox.checked = true;
      selectedElem.style.display = "inline-block";
    } else {
      checkBox.checked = false;
      selectedElem.style.display = "none";
    }
  }
  var mainDisp = localStorage.getItem("allBTN");
  var checkbox = document.getElementById("s9")
  if (mainDisp == "inline-block" || mainDisp == null) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  localStorage.setItem("pageNum", "0");
  resetColors();
  trackerBlank();
}

function trackerBlank() {
  const recordArr = [];
  localStorage.setItem("recordArr", JSON.stringify(recordArr));
  const objectArr = [];
  localStorage.setItem("objectArr", JSON.stringify(objectArr));
  localStorage.setItem("addLineCount", "0"); 
  localStorage.setItem("savedRecs", "0");
  localStorage.removeItem("serRcrdspot");
  localStorage.removeItem("incRcrdspot");
  localStorage.removeItem("rec0Rcrdspot");
  localStorage.removeItem("rec1Rcrdspot");
  localStorage.removeItem("rec2Rcrdspot");
  localStorage.removeItem("rec3Rcrdspot");
  localStorage.removeItem("rec4Rcrdspot");
  localStorage.removeItem("rec5Rcrdspot");
  localStorage.removeItem("InceptionMiles");
  localStorage.removeItem("InceptionDate");
  localStorage.removeItem("sermileage");
  localStorage.removeItem("serdate");
  localStorage.removeItem("rec0mileage");
  localStorage.removeItem("rec0date");
  localStorage.setItem("noteOpen", "false");
}

function openNav() {
  const list = document.getElementById("mySidenav").classList;
  list.replace("closed_nav", "open_nav");
}

function closeNav() {
  const list = document.getElementById("mySidenav").classList;
  list.replace("open_nav", "closed_nav");
}