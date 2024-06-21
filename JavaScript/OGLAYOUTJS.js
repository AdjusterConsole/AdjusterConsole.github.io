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
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at adjusterconsole@gmail.com.

function swapPage(x) {
  if (x == '1') {
    window.location.href = "index.html";
  } else if (x == '2') {
    window.location.href = "index2.html";
  } else {
    return;
  }
}

function setVer(x) {
  if (x == '1') {
    localStorage.setItem('currentVer', '1');
  } else if (x == '2') {
    localStorage.setItem('currentVer', '2');
  } else {
    return;
  }
}

function shadMaker() {
  window.location.href = "shadowGen/shadIndex.html";
}

function checkOpen() {
  const elements = [
    document.getElementById("TPDiv"),
    document.getElementById("statNote"),
    document.getElementById("Snippings"),
    document.getElementById("RFIBDH"),
    document.getElementById("RFIBND"),
    document.getElementById("TGAFOBTN"),
    document.getElementById("TGAFOABTN"),
    document.getElementById("TGAFSABTN"),
    document.getElementById("TGAFOSABTN"),
    document.getElementById("auth_module"),
    document.getElementById("resrcDiv")
  ];
  return elements.some(el => el.style.display === "inline-block");
}

function getContact(whichInfo) {
  const whichOne = parseInt(whichInfo);
  const textarea = document.getElementById('textarea1');
  const lines = textarea.value.split('\n');
  const start = lines.slice(0, whichOne).reduce((acc, curr) => acc + curr.length + 1, 0);
  const end = start + lines[whichOne].length;
  textarea.focus();
  textarea.setSelectionRange(start, end);
  const tempStr = textarea.value.substring(start, end).trim();
  return tempStr.slice(9).trim();
}

function MENU() {
  const theMenu = document.getElementById("LOCK1");
  const BtnBuilder = document.getElementById("BtnBuilder");
  const appearance = document.getElementById("appearance");
  const menuOpen = localStorage.getItem("menuOpen");

  if (menuOpen === 'false') {
    theMenu.innerText = "\u2666 Close \u2666";
    appearance.style.top = "45px";
    appearance.style.opacity = '1';
    BtnBuilder.style.top = "70px";
    BtnBuilder.style.opacity = '1';
    localStorage.setItem("menuOpen", "true");
    return;
  } else if (menuOpen === 'true') {
    BtnBuilder.style.top = "20px";
    BtnBuilder.style.opacity = '0';
    appearance.style.top = "20px";
    appearance.style.opacity = '0';
    theMenu.innerText = "\u2666 Settings \u2666";
    localStorage.setItem("menuOpen", "false");
    return;
  }
  localStorage.setItem("menuOpen", "false");
  MENU();
}

function transAuth() {
  document.getElementById("module_trans_backing").classList.add("trsnActive");
  localStorage.setItem('transauthPage', '1');
  localStorage.removeItem("Diag");
}

function showtransOop() {
  document.getElementById("module_trans_8qdiv").classList.remove("invisible");
  document.getElementById("module_trans_8adiv").classList.remove("invisible");
}

function hidetransOop() {
  document.getElementById("module_trans_8qdiv").classList.add("invisible");
  document.getElementById("module_trans_8adiv").classList.add("invisible");
}

function requestorNo(x) {
  if (x === 'y') {
    if (document.getElementById("trans_ans3d").checked) {
      document.getElementById("trans_ans3d").checked = false;
    }
  }
  if (x === 'n') {
    if (document.getElementById("trans_ans3c").checked) {
      document.getElementById("trans_ans3c").checked = false;
    }
    if (document.getElementById("trans_ans3b").checked) {
      document.getElementById("trans_ans3b").checked = false;
    }
    if (document.getElementById("trans_ans3a").checked) {
      document.getElementById("trans_ans3a").checked = false;
    }
  }
}

function uncheck_All() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
    radio.checked = false;
  });

  const trans_ansNum = document.getElementsByName("ftrans_ansNum");
  trans_ansNum.forEach(function(inputNumber) {
    inputNumber.value = '';
  });
  const authMode = localStorage.getItem('authMode');
  if (authMode === 'newAuth') { 
    document.getElementById('newauthSelect').checked = true;
  }
  if (authMode === 'oldAuth' || authMode == null) { 
    document.getElementById('newauthSelect').checked = true;
  }

}

function noncovcomp(x) {
  if (x === 'y') {
    if (document.getElementById("trans_ans8g").checked) {
      document.getElementById("trans_ans8g").checked = false;
    }
  }
  if (x === 'n') {
    if (document.getElementById("trans_ans8e").checked) {
      document.getElementById("trans_ans8e").checked = false;
    }
    if (document.getElementById("trans_ans8f").checked) {
      document.getElementById("trans_ans8f").checked = false;
    }
  }
}

function saveDiag(property,id) {
  let Diag = JSON.parse(localStorage.getItem('Diag'));
  const totalspark = document.getElementById("totalspark");
  if (!Diag) {
    Diag = {
      trans: false,
      diag: false,
      flush: false,
      press: false,
      pan: false,
      pull: false,
      data: false,
      spark: 0,
      point: false
    };
  }
  if (property === 'sparkplus') {
    Diag.spark += 1;
    totalspark.innerHTML = Diag.spark;
  } else if (property === 'sparkminus' && Diag.spark > 0) {
    Diag.spark -= 1;
    totalspark.innerHTML = Diag.spark;
  } else if (property && property !== 'next') {
    if (Diag.hasOwnProperty(property) && Diag[property] === false) {
      Diag[property] = true;
      var elem = document.getElementById(id);
      elem.innerHTML = "Del";
      elem.classList.add("butswap");
    } else if (Diag.hasOwnProperty(property) && Diag[property] === true) {
      Diag[property] = false;
      var elem = document.getElementById(id);
      elem.innerHTML = "Add";
      elem.classList.remove("butswap");
    }
  }
  localStorage.setItem('Diag', JSON.stringify(Diag));
  if (property === 'next') {
    const transauthPage = localStorage.getItem('transauthPage');
    if (transauthPage === '1') {
      document.getElementById('module_trans_1').classList.remove('trsnActive');
      document.getElementById('module_trans_4').classList.add('trsnActive');
      localStorage.setItem('transauthPage', '2');
    } else if (transauthPage === '2') {
      document.getElementById('module_trans_4').classList.remove('trsnActive');
      document.getElementById('module_trans_7').classList.add('trsnActive');
      localStorage.setItem('transauthPage', '3');
    } else if (transauthPage === '3') {
      finishtransAuth();
      return;
    }
  }
  if (property === 'back') {
    const transauthPage = localStorage.getItem('transauthPage');
    if (transauthPage === '3') {
      document.getElementById('module_trans_7').classList.remove('trsnActive');
      document.getElementById('module_trans_4').classList.add('trsnActive');
      localStorage.setItem('transauthPage', '2');
    } else if (transauthPage === '2') {
      document.getElementById('module_trans_4').classList.remove('trsnActive');
      document.getElementById('module_trans_1').classList.add('trsnActive');
      localStorage.setItem('transauthPage', '1');
    } else if (transauthPage === '1') {
      return;
    }
  }
  if (property === 'cancel') {
    uncheck_All();
    document.getElementById('module_trans_7').classList.remove('trsnActive');
    document.getElementById('module_trans_4').classList.remove('trsnActive');
    document.getElementById('module_trans_1').classList.add('trsnActive');
    document.getElementById("module_trans_backing").classList.remove("trsnActive");
    return;
  }
}

function finishtransAuth() {
  const rfName = getContact('0');
  let isDiag = false;
  let isDiag2 = false;
  let addOn = false;
  let addOnrec = false;
  let Diag = JSON.parse(localStorage.getItem('Diag'));
  for (let property in Diag) {
    if (property !== 'trans' && property !== 'diag' && property !== 'flush') {
      if ((property !== 'spark' && Diag[property] === true) || (property === 'spark' && Diag[property] > 0)) {
        isDiag = true;
        isDiag2 = true;
      }
    }
  }
  const transLabor = document.getElementById("trans_ans4a").value;
  const diagLabor = document.getElementById("trans_ans4b").value;
  const flushLabor = document.getElementById("trans_ans4c").value;
  const trans_Ans_1 = document.querySelector('input[name="trans_ans1"]:checked');
  const trans_Ans_2 = document.querySelector('input[name="trans_ans2"]:checked');
  const cost = parseInt(document.getElementById("trans_ans4").value);
  const trans_ans7 = document.getElementById("trans_ans7").value;
  const testElec = .3 * Diag.spark;
  const propertyStrings = {
    trans: "Pro Demand shows " + transLabor + " hours to R/R transmission.\r",
    diag: "Pro Demand shows " +  diagLabor + " hours for diagnostics.\r",
    flush: "Pro Demand shows " +  flushLabor + " hours to the flush the cooler.\r",
    press: ".X for line pressure test ",
    pan: ".X for pan drop ",
    pull: ".3 for code pull ",
    data: ".2 for data monitoring ",
    spark: " Electrical tests: " + Diag.spark + " @ .3 each is " + Math.round(testElec) + " ",
    point: ".4 for pinpoint test. "
    };
  const transAuth1 = "No inspection needed as the Repair Facility diagnostic matches Contract Holder concern.\rThe repair Facility sent supporting photos showing excessive metal debris present.";
  const transAuth2 = "An inspection was sent to verify failures.\rI have reviewed report and inspection photos.\rThe inspection review note is completed.";
  const transAuth3 = "Requested and reviewed photos from Repair Facility.\rPhoto review note is completed.";
  const recordsTrans1 = "No records requested as history will not change claim decision.\rVehicle is not in waiting period. No prior related claims.\rNo recalls, TSBs, or unresolved mileage concerns.\rContract Holder is in sequence " + trans_ans7 + ".";
  const recordsTrans2 = "Requested and reviewed records and statement.\rRecord review note is completed.";
  const requestedTrans1 = "After reviewing all relevant documentation, we are moving forward with verified failures.";
  const beenVerified = "Verified labor, fluid type, and capacities in ProDemand.\r";
  const oopcsTrans1 = "Need to review OOPC of $";
  const oopcsTrans1a = "Need to review OOPC when OOPC is determined";
  const oopcsTrans2a = " with Contract Holder.";
  const oopcsTrans2b = " and shipping option with Contract Holder.";
  const oopcsTrans2c = "OOPC is due to differences in ";
  const oopcsTrans3 = "Need to review shipping option with Contract Holder.";
  const oopcsTrans3a = "Have not given authorization info to the Repair Facility at this time.";
  const oopcsTrans4 = "Contract Holder has no OOPC besides deductible.";
  const oopcsTrans4a = "Gave authorization info and payment instructions to ";
  const noncovTrans1 = "Will inform Contract Holder of non-covered components";
  const noncovTrans2 = "There were denied items on this claim.\rReview denial note for more details";
  let outputString = "Verified internal failure to the transmission using the Repair Facility supplied diagnostic and photos.\rThe transmission has coverage under the terms of the contract.\rVerified OEM parts using Forte and AM parts using PA.\rUsed in-house sourcing to determine the MCE option.\rThe MCE option is a ";

  if (trans_Ans_1.value === null) {
    uncheck_All();
    return;
  }
  outputString += trans_Ans_1.value + " unit from " + trans_Ans_2.value + " for $" + cost.toFixed(2) + ".\r" + beenVerified;
  for (let property in Diag) {
    if (Diag.hasOwnProperty(property)) {
      if ((property !== 'spark' && Diag[property] === true) || (property === 'spark' && Diag[property] > 0)) {
        outputString += propertyStrings[property];
        if (isDiag && property === 'flush') {
          outputString += "Diag completed: ";
          isDiag = false;
        }
      }
    }
  }
  if (isDiag2) {
    outputString += "\r";
  }
  if (document.getElementById("trans_ans3d").checked == true) {
    outputString += transAuth1 + "\r" + recordsTrans1 + "\r";
  } 
  if (document.getElementById("trans_ans3a").checked == true) {
    outputString += transAuth2 + "\r";
    addOn = true;
    addOnrec = true;
  } 
  if (document.getElementById("trans_ans3b").checked == true) {
    outputString += transAuth3 + "\r";
    addOn = true;
    addOnrec = true;
  } 
  if (document.getElementById("trans_ans3c").checked == true) {
    outputString += recordsTrans2 + "\r";
    addOn = true;
  } 
  if(addOnrec) {
    outputString += recordsTrans1 + "\r";
  }
  if(addOn) {
    outputString += requestedTrans1 + "\r";
  }
  const trans_ans9a = document.getElementById("trans_ans9a");
  if (!trans_ans9a.checked) {
    if (document.getElementById("trans_ans8d").checked) {
      outputString += oopcsTrans4 + "\r" + oopcsTrans4a + rfName + "\r";
    } else if (document.getElementById("trans_ans8b").checked) {
      outputString += oopcsTrans3 + "\r" + oopcsTrans3a + "\r";
    } else if (document.getElementById("trans_ans8a").checked || document.getElementById("trans_ans8c").checked) {
      const oopcCausep = document.getElementById("trans_ans8h");
      const oopcCausel = document.getElementById("trans_ans8i");
      const oopcCauseb = document.getElementById("trans_ans8j");
      const oopcAmt1 = document.getElementById("trans_ans8k").value;
      const num = parseFloat(oopcAmt1);
      if (isNaN(num)) {
        alert("Please enter a valid amount for OOPC");
        return;
      }
      const oopcAmt2 = num.toFixed(2);
      const oopcAmt = oopcAmt2.toString();
      let oopcCausedBy;
      if (oopcCauseb.checked) { oopcCausedBy = "parts and labor."; }
      if (oopcCausel.checked) { oopcCausedBy = "labor."; }
      if (oopcCausep.checked) { oopcCausedBy = "parts."; }
      outputString += oopcsTrans1 + oopcAmt;
      outputString += (document.getElementById("trans_ans8c").checked ? oopcsTrans2b : oopcsTrans2a) + "\r";
      outputString += oopcsTrans2c + oopcCausedBy + "\r" + oopcsTrans3a + "\r";
      document.getElementById("trans_ans8a").checked = false;
      document.getElementById("trans_ans8c").checked = false;
    }
  }
  if (document.getElementById("trans_ans8a").checked || document.getElementById("trans_ans8c").checked) {
    if (trans_ans9a.checked) {
      outputString += oopcsTrans1a;
    }
  }
  trans_ans9a.checked = false;
  document.getElementById("trans_ans8a").checked = false;
  document.getElementById("trans_ans8c").checked = false;
  const noncovComps = document.getElementById("trans_ans8e");
  if (noncovComps.checked) {
    outputString += noncovAuth1 + "\r";
    noncovComps.checked = false;     
  }
  const deniedComps = document.getElementById("trans_ans8f");
  if (deniedComps.checked) {
    outputString += noncovAuth2;
    deniedComps.checked = false;
  }
  copy(outputString);
  document.getElementById("module_trans_backing").classList.remove("trsnActive");
  uncheck_All();
  return;
}

function STMTTEMP() {
  const statement = document.getElementById("statement");
  if (statement.style.display == "none") {
    statement.style.display = "initial";
    localStorage.setItem("statePage", "1");
    let mode = localStorage.getItem("mode");
    if(checkOpen()) {
      ShowTemps();
    }
  } else {
    return;
  }
}

function cancelState() {
  const stmttempta = document.getElementsByClassName("stmt_temp_ta");
  for (i = 0; i < stmttempta.length; i++) {
    stmttempta[i].value = "";
  }
  const stmt_temp_rad = document.getElementsByClassName("stmt_temp_rad");
  for (i = 0; i < stmt_temp_rad.length; i++) {
    stmt_temp_rad[i].checked = false;
  }
  document.getElementById("time_owned").value = "";
  document.getElementById("time_unit").value = "";
  document.getElementById("approx_mile").value = "";
  document.getElementById("state13").style.display = "none";
  document.getElementById("state1").style.display = "inherit";
  document.getElementById("statement").style.display = "none";
  const chState_div = document.getElementsByClassName("chState_div");
  for (i = 0; i < chState_div.length; i++) {
    chState_div[i].style.display = "none";  
  }
  document.getElementById("state1").style.display = "inherit";
  document.getElementById("statement").style.display = "none";
}

function advanceState(btnId) {
  const page = parseInt(localStorage.getItem("statePage"));
  const pageId = "state" + page;
  let nextPage = page + 1;
  let nextPageId;
  
  if (btnId == "chno3" || btnId == "chno5" || btnId == "chno7" || btnId == "chno11") {
    nextPage = page + 2;
  }
  if (nextPage == "3" || nextPage == "5" || nextPage == "7" || nextPage == "11") {
    document.getElementById("advanceState").style.display = "none";
  }
  if (nextPage == "4" || nextPage == "6" || nextPage == "8" || nextPage == "9" || nextPage == "12" || nextPage == "13") {
    document.getElementById("advanceState").style.display = "inline-block";
  }
  console.log(page, nextPage);
  if (nextPage > 13) {
    stateFinish();
    return;
  }
  nextPageId = "state" + nextPage;
  console.log(nextPageId);
  document.getElementById(pageId).style.display = "none";
  document.getElementById(nextPageId).style.display = "inherit";
  localStorage.setItem("statePage", nextPage);
}

function backState() {
  const page = localStorage.getItem("statePage");
  if (page == "1") { return; }
  const pageId = "state" + page;
  let pageInt = parseInt(page);
  if (pageInt == 13 || pageInt == 9 || pageInt == 7 || pageInt == 5) {
    pageInt = pageInt - 2;
  } else {
    pageInt = pageInt - 1;
  }
  if (pageInt == "3" || pageInt == "5" || pageInt == "7" || pageInt == "11") {
    document.getElementById("advanceState").style.display = "none";
  }
  if (pageInt == "2" || pageInt == "4" || pageInt == "6" || pageInt == "8" || pageInt == "9" || pageInt == "10" || pageInt == "12" || pageInt == "13") {
    document.getElementById("advanceState").style.display = "inline-block";
  }
  const nextId = "state" + pageInt;
  localStorage.setItem("statePage", pageInt);
  document.getElementById("state12").style.display = "none";
  document.getElementById("state8").style.display = "none";
  document.getElementById("state6").style.display = "none";
  document.getElementById("state4").style.display = "none";
  document.getElementById(pageId).style.display = "none";
  document.getElementById(nextId).style.display = "block";
}

function stateFinish() {
  let text = '';
  const stateQ1 = "Can you describe what happened?";
  const stateQ2 = "When did the issue first occur?";
  const stateQ3 = "Were there any prior related issues?";
  const stateQ4 = "What were they and when did they occur?";
  const stateQ5 = "Were there any warning lights?";
  const stateQ6 = "Please describe:";
  const stateQ7 = "Was there any noise, smoke, or smell?";
  const stateQ8 = "Please describe:";
  const stateQ9 = "How long have you owned the vehicle?";
  const stateQ10 = "Do you know the approximate mileage when you purchased it?";
  const stateQ11= "Was the vehicle towed to the repair facility?";
  const stateQ12 = "Where was it towed from and what tow company did you use?";
  const stateQ13 = "Any additional comments or notes:";
  let state1ans = document.getElementById("state1ans").value;
  let state2ans = document.getElementById("state2ans").value;
  const state3ans = document.getElementById("chyes3").checked;
  let state4ans = document.getElementById("state4ans").value;
  const state5ans = document.getElementById("chyes5").checked;
  let state6ans = document.getElementById("state6ans").value;
  const state7ans = document.getElementById("chyes7").checked;
  let state8ans = document.getElementById("state8ans").value;
  let state9ansa = document.getElementById("time_owned").value;
  let state9ansb = document.getElementById("time_unit").value;
  let state10ans = document.getElementById("approx_mile").value;
  const state11ans = document.getElementById("chyes11").checked;
  let state12ans = document.getElementById("state12ans").value;
  let state13ans = document.getElementById("state13ans").value;
  text = stateQ1 + "\r" + state1ans + "\r\r" + stateQ2 + "\r" + state2ans + "\r\r" + stateQ3 + "\r";
  if (state3ans) {
    text += "Yes - " + state4ans + "\r\r" + stateQ5 + "\r";
  } else {
    text += "No\r\r" + stateQ5 + "\r";
  }
  if (state5ans) {
    text += "Yes - " + state6ans + "\r\r" + stateQ7 + "\r";
  } else {
    text += "No\r\r" + stateQ7 + "\r";
  }
  if (state7ans) {
    text += "Yes - " + state8ans + "\r\r" + stateQ9 + "\r";
  } else {
    text += "No\r\r" + stateQ9 + "\r";
  }
  text += state9ansa + " " + state9ansb + "\r\r" + stateQ10 + "\r";
  if (state10ans == "" || state10ans == null) {
    text += "No\r\r" + stateQ11 + "\r";
  } else {
    text += state10ans + "\r\r" + stateQ11 + "\r";
  }
  if (state11ans) {
    text += "Yes - " + state12ans + "\r\r" + stateQ13 + "\r";
  } else {
    text += "No\r\r" + stateQ13 + "\r";
  }
  text += state13ans;
  const stmttempta = document.getElementsByClassName("stmt_temp_ta");
  for (i = 0; i < stmttempta.length; i++) {
    stmttempta[i].value = "";
  }
  const stmt_temp_rad = document.getElementsByClassName("stmt_temp_rad");
  for (i = 0; i < stmt_temp_rad.length; i++) {
    stmt_temp_rad[i].checked = false;
  }
  document.getElementById("time_owned").value = "";
  document.getElementById("time_unit").value = "";
  document.getElementById("approx_mile").value = "";
  copy(text);
  document.getElementById("state13").style.display = "none";
  document.getElementById("state1").style.display = "inherit";
  document.getElementById("statement").style.display = "none";
}

function statNOTE() {
  const statNote = document.getElementById("statNote");
  const statNoteinner = document.getElementById("statNoteinner");
  if (statNote.style.display == "inline-block" || checkOpen()) {
    statNote.style.display = "none";
    return;
  }
  statNote.style.display = "inline-block";
}

function cancelStat() {
  uncheck_All();
  document.getElementById("optionalNote").value = "";
  const statNote = document.getElementById("statNote");
  const statNoteinner = document.getElementById("statNoteinner");
  statNote.style.display = "none";
}

function highlander(elemId) {
  document.getElementById(elemId).checked = false;
}

function submitStat() {
  const checkboxes = ['stat1', 'stat2', 'stat3', 'stat4', 'stat5', 'stat6', 'stat7', 'stat8', 'stat9'];
  const noteStrings = {
    'stat1note': 'We are waiting on the inspection to verify failure.\n',
    'stat2note': 'We are waiting on records from the Contract Holder to determine Pre-X.\n',
    'stat3note': 'We are waiting for the Contract Holders statement as it may influence the claim outcome.\n',
    'stat4note': 'verify failure.',
    'stat5note': 'correct VIN or mileage issue.',
    'stat6note': 'The Repair facility has been notified.\n',
    'stat7note': 'The Contract Holder has been notified.\n',
    'stat8note': 'I was unable to reach the Contract Holder but I left a VM and tasked callbacks.\n',
    'stat9note': 'Parts and labor are keyed in and verified.\n',
    'stat4and5CommonNote': 'We are waiting on photos from the Repair Facility to '
  };
  let output = '';
  checkboxes.slice(0, 3).forEach(id => {
    if (document.getElementById(id).checked) {
      output += noteStrings[id + 'note'];
    }
  });
  const stat4Checked = document.getElementById('stat4').checked;
  const stat5Checked = document.getElementById('stat5').checked;
  const stat9Checked = document.getElementById('stat9').checked;
  if (stat4Checked || stat5Checked) {
    output += noteStrings['stat4and5CommonNote'];
    if (stat4Checked && stat5Checked) {
      output += noteStrings['stat4note'] + ' and ' + noteStrings['stat5note'] + '\n';
    } else if (stat4Checked) {
      output += noteStrings['stat4note'] + '\n';
    } else if (stat5Checked) {
      output += noteStrings['stat5note'] + '\n';
    }
  }
  checkboxes.slice(6).forEach(id => {
    if (document.getElementById(id).checked) {
      output += noteStrings[id + 'note'];
    }
  });
  const optionalText = document.getElementById('optionalNote').value.trim();
  if (optionalText !== '') {
    output += optionalText + '\n';
  }
  copy(output);
  cancelStat();
}

document.getElementById("newAuthstarter").addEventListener('click', function(e) {
  if (document.getElementById("newauthSelect").checked) {
    auth_run();
  } else {
    showAuth();
  }
});

function saveAuth() {
  const newauthSelect = document.getElementById("newauthSelect");
  if (newauthSelect) { 
    localStorage.setItem('authMode', 'newAuth');
  }
  if (!newauthSelect) { 
    localStorage.setItem('authMode', 'oldAuth');
  }
}

function showAuth() {
  const newAuthstyle = document.getElementById("newAuthstyle");
  if (newAuthstyle.style.display == "inline-block" || checkOpen()) {
    newAuthstyle.style.display = "none";
    return;
  }
  newAuthstyle.style.display = "inline-block";
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
  const boxes = document.querySelectorAll(".FNA");
  for (i = 0; i < boxes.length; i++) {
    boxes[i].checked = false;
  }
}

function newAuth() {
  const newauthLine0 = "RF Contact name: ";
  const newauthLine1 = "Verified failures using RF diagnostic.";
  const newauthLine1a = "Verified failures using RF diagnostic and inspection report.";
  const newauthLine1b = "Verified failures using RF diagnostic and RF supplied photos.";
  const newauthLine2 = "Contract has coverage for failed components.";
  const newauthLine3 = "Verified OEM parts using Forte and AM parts using PA.";
  const newauthLine4 = "Verified labor using Pro Demand.";
  const newauthLine5 = "Verified payment info with RF contact at: ";
  document.getElementById("authParts").style.display = "inline-block";
  document.getElementById("authRequests").style.display = "none";
  document.getElementById("authOopcs").style.display = "none";
  document.getElementById("newAuthstyle").style.display = "none";
  let stage = '';
  const bananaMilkshake = getContact('1');
  const rfContact = getContact('0');
  stage = newauthLine0 + rfContact + "\r";
  let firstAuthline = newauthLine1;
  if (document.getElementById("auth6").checked) { firstAuthline = newauthLine1a; }
  if (document.getElementById("auth7").checked) { firstAuthline = newauthLine1b; }
  stage += firstAuthline + "\r" + newauthLine2 + "\r" + newauthLine3 + "\r" + newauthLine4  + "\r" + newauthLine5 + bananaMilkshake + "\r";
  partsOptions(stage);
}

function setValue() {
  document.getElementById("auth1").value = "Using Repair Facility OEM parts at or under $250.00.";
  document.getElementById("auth2").value = "Using Repair Facility parts at or under sourcing MCE.";
  document.getElementById("auth3").value = "Using sourcing MCE as a credit toward Repair Facility parts.";
  document.getElementById("auth4").value = "Using sourcing MCE as a credit toward Repair Facility parts or shipping in.";
  document.getElementById("auth5").value = "Adjusted price to reasonable amount near MCE.\rThis was done considering all factors including claim delays, shipping costs, liability for future failures, time and mileage in coverage, number of prior claims and their cost, etc.";
}

function partsOptions(stage) {
  setValue();
  const partOpts = document.getElementsByName("authparts");
  for (i = 0; i < partOpts.length; i++) {
    if (partOpts[i].checked == true) {
      stage += partOpts[i].value + "\r";
    }
  }
  requestOptions(stage);
}

function requestOptions(stage) {
  const inspAuth1 = "No inspection needed as RF diagnostic matches CH concern.";
  const inspAuth2 = "Sent inspection to verify failures.\rReviewed report and inspection photos.\rInspection review note is completed.";
  const inspAuth3 = "Requested and reviewed photos from Repair Facility.\rPhoto review note is completed.";
  const recordsAuth1 = "No records requested as history will not change claim decision.\rVehicle is not in waiting period.\rConcern is not maintenance related.\rNo prior related claims.\rNo recalls, TSBs, or mileage concerns.";
  const recordsAuth2 = "Requested and reviewed records and statement.\rRecord review note is completed.";
  const requestedAuth1 = "After reviewing all relevant documentation, we are moving forward with verified failures.";

  if (document.getElementById("auth9").checked == true) {
    stage += inspAuth1 + "\r" + recordsAuth1 + "\r";
    issuesOptions(stage);
    return;
  }
  if (document.getElementById("auth6").checked == true) {
    stage += inspAuth2 + "\r";
  }
  if (document.getElementById("auth7").checked == true) {
    stage += inspAuth3 + "\r";
  }
  if (document.getElementById("auth8").checked == true) {
    stage += recordsAuth2 + "\r";
  }
  stage += requestedAuth1 + "\r";
  issuesOptions(stage);
}

function issuesOptions(stage) {
  const oopcsAuth1 = "Need to review OOPC of $";
  const oopcsAuth2a = " with Contract Holder.";
  const oopcsAuth2b = " and shipping option with Contract Holder.";
  const oopcsAuth2c = "OOPC is due to differences in ";
  const oopcsAuth3 = "Need to review shipping option with Contract Holder.";
  const oopcsAuth3a = "Have not given authorization info to the Repair Facility at this time.";
  const oopcsAuth4 = "Contract Holder has no OOPC besides deductible.";
  const oopcsAuth4a = "Gave authorization info and payment instructions to ";

  const rfName = getContact('0');
  if (document.getElementById("auth13").checked) {
    stage += oopcsAuth4 + "\r" + oopcsAuth4a + rfName + "\r";
    finishAuth(stage);
    return;
  }
  if (document.getElementById("auth11").checked) {
    stage += oopcsAuth3 + "\r" + oopcsAuth3a + "\r";
    finishAuth(stage);
    return;
  }
  if (document.getElementById("auth10").checked || document.getElementById("auth12").checked) {
    const oopcCausep = document.getElementById("auth14");
    const oopcCausel = document.getElementById("auth15");
    const oopcCauseb = document.getElementById("auth16");
    const oopcAmt1 = document.getElementById("auth17").value;
    document.getElementById("auth17").value = "";
    const num = parseFloat(oopcAmt1);
    if (isNaN(num)) {
      alert("Please enter a valid amount for OOPC");
      return;
    }
    const oopcAmt2 = num.toFixed(2);
    const oopcAmt = oopcAmt2.toString();
    let oopcCausedBy;
    if (oopcCauseb.checked) { oopcCausedBy = "parts and labor."; }
    if (oopcCausel.checked) { oopcCausedBy = "labor."; }
    if (oopcCausep.checked) { oopcCausedBy = "parts."; }
    stage += oopcsAuth1 + oopcAmt;
    stage += (document.getElementById("auth12").checked ? oopcsAuth2b : oopcsAuth2a) + "\r";
    stage += oopcsAuth2c + oopcCausedBy + "\r" + oopcsAuth3a + "\r";
    finishAuth(stage);
    return;
  }
}

function showOOPopt() {
  document.getElementById("OOPoptDiv").style.display = "inline-block";
}

function finishAuth(stage) {
  const noncovAuth1 = "Will inform Contract Holder of non-covered components";
  const noncovAuth2 = "There were denied items on this claim.\rReview denial note for more details";
  document.getElementById("OOPoptDiv").style.display = "none";
  const noncovComps = document.getElementById("auth18");
  if (noncovComps.checked) {
    stage += noncovAuth1 + "\r";
  }
  const deniedComps = document.getElementById("auth18a");
  if (deniedComps.checked) {
    stage += noncovAuth2;
  }
  copy(stage);
  const boxes = document.querySelectorAll(".FNA");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].checked = false;
  }
}

function EVACRECH(btnID) {
  const EvacRechrge = "Evac and Recharge\rRF Asking:   \rPD Approved:   1.4\r\r";
  const Check = localStorage.getItem(btnID + "EDIT");
  const textarea = document.getElementById("textarea2");
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
  const Alignment = "Alignment\rRF Asking:   \rPD Approved:   \r\r";
  const Check = localStorage.getItem(btnID + "EDIT");
  const textarea = document.getElementById("textarea2");
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
  const textarea = document.getElementById("textarea2");
  textarea.value += "Diag\rRF Asking:   \rPD Approved:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function LABOR(boxNum) {
  const textarea = document.getElementById("textarea2");
  textarea.value += "R/R \rRF Asking:   \rPD Approved:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function BULK(btnID) {
  const Check = localStorage.getItem(btnID + "EDIT");
  const textarea = document.getElementById("textarea2");
  if (Check == null) {
    textarea.value += "BULK:   \rRF Price:   \rFPS Allows:   \r\r";
    document.getElementById("EDITarea").value = "BULK:   \rRF Price:   \rFPS Allows:   \r\r";
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function OEMOVER() {
  let textareaVal = document.getElementById("textarea2").value;
  const textarea = document.getElementById("textarea2");
  textareaVal = textareaVal.slice(0,-1);
  textarea.value = textareaVal;
  textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function NEWAM() {
  const textarea = document.getElementById("textarea2");
  textarea.value += "RF AM PN:   \rRF Price:   \rPA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function NEWOEM() {
  const textarea = document.getElementById("textarea2");
  textarea.value += "Verified OEM PN:   \rVerified MSRP:   \rRF Price:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function REVIEW(btnID) {
  const Rev = "Reviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = Rev;
    document.getElementById("EDITarea").value = Rev;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
  const mode = localStorage.getItem("mode");
  if(checkOpen()) {
    ShowTemps();
  }
}

function inspREVIEW() {
  const Rev = "Inspection Review\rReason for inspection:\rLabor rate:\rMileage:\rFluid condition:\rModifications/Collision/Commercial:\rInspector findings/photo review:";
  copy(Rev);
}

function carfaxREVIEW() {
  const Rev = "CARFAX Report Review:\r1.) What I was looking for:\r2.) Red flags or Mileage Discrepancy:\r3.) Does it relate to the claim:\r4.) What is needed now:";
  copy(Rev);
}

function RECREQ(btnID) {
  const RecReq = "Requesting Contract Holder statement regarding issues.\rRequesting past 12 months of service records from the Contract Holder.\rSent records request using SRS action button.\rWill call the Contract Holder to inform.";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = RecReq;
    document.getElementById("EDITarea").value = RecReq;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
}

function NOANSREC(btnID) {
  const NoAns = "Called Contract Holder to request records.\rCalled Contract Holder to request statement.\rNo answer – left voicemail.\rTasked to CS callbacks.";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = NoAns;
    document.getElementById("EDITarea").value = NoAns;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
}

function INSPTEMP(btnID) {
  let InsTemp = "Technician states:\r\rPart failure\rPart failure\rPart failure\r\rPlease have the technician demonstrate the failures listed above.\r\rNotate if rust, corrosion, or any outside influence is the cause of failure.\rNotate available fluid levels and conditions.\rFor electrical components, have technician verify power and ground.\r\rPlease take pictures of the following:\r";
  InsTemp += "All failures.\rAll 4 sides of vehicle, vin, and odometer.\rInspection stickers and oil change stickers.\rWheels, tires, and rotors.\rAny dash light that are on, current or history DTCs, and any freeze frame data available.\rAny signs of commercial use or modifications.\rAny rust, corrosion, or collision damage.\rAny other information relevant to the failures.\r\rIf the failure is related to drivability or verification is noise based, please provide video verification.\r\rPlease contact the Repair Facility 1-2 hours before arrival.\r\rContact Name:\rEmail:\rDirect Line:";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = InsTemp;
    document.getElementById("EDITarea").value = InsTemp;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
  if(checkOpen()) {
    ShowTemps();
  }
}

function PTXFER() {
  const showTemp = document.getElementById("transferTemplate");
  showTemp.style.display = "inline-block";
  const rfEmail = getContact('1');
  const rfName = getContact('0');
  document.getElementById("contact1").value = rfName;
  document.getElementById("contact2").value = rfEmail;
  localStorage.setItem("PTpage", "1");
  document.getElementById("quest1").style.display = "block";
  if(checkOpen()) {
    ShowTemps();
  }
}

function ShowTemps() {
  const TPDiv = document.getElementById("TPDiv");
  if (TPDiv.style.display == "inline-block" || checkOpen()) {
    TPDiv.style.display = "none";
    return;
  }
  TPDiv.style.display = "inline-block";
}

function advancePT(radioId) {
  const page = parseInt(localStorage.getItem("PTpage"));
  const num = radioId.match(/(\d+)/);
  const single = num[0];
  const curId = "quest" + single;
  const nextIdnum = parseInt(single) + 1;
  const nextId = "quest" + nextIdnum;
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
  const page = localStorage.getItem("PTpage");
  if (page == "1") { return; }
  const curId = "quest" + page;
  const newpage = parseInt(page) - 1;
  const nextId = "quest" + newpage;
  localStorage.setItem("PTpage", newpage);
  document.getElementById("q3ansN").style.display = "none";
  document.getElementById("q11ansY").style.display = "none";
  document.getElementById(curId).style.display = "none";
  document.getElementById(nextId).style.display = "block";
}

function submitTEMP() {
  const PtTransfer1 = "Is the Repair Facility able to diagnose to cause of failure and overhaul if needed?   ";
  const PtTransfer2 = "Has the Repair Facility ever serviced the vehicle before?   ";
  const PtTransfer3 = "Can a test drive be performed if needed?   ";
  const PtTransfer4 = "Did the Repair Facility tow the vehicle?   ";
  const PtTransfer5 = "Has the cause of failure been identified?   ";
  const PtTransfer6 = "Does the Repair Facility have an itemized estimate available?   ";
  const PtTransfer7 = "Has the Repair Facility's info and contact info been verified?   ";
  const PtTransfer8 = "What is the preferred method of contact?   ";
  const PtTransfer9  = "Have the PT claim expectations been reviewed with the Repair Facility contact?   ";
  const PtTransfer10 = "Have you provided the Repair Facility with the assigned adjusters name, direct extension, and e-mail?   ";
  const PtTransfer11 = "Is there any other relevant info that will assist the adjuster?   ";
  const q1 = document.getElementsByName("ans1");
  const q2 = document.getElementsByName("ans2");
  const q3 = document.getElementsByName("ans3");
  const q4 = document.getElementsByName("ans4");
  const q5 = document.getElementsByName("ans5");
  const q6 = document.getElementsByName("ans6");
  const q7 = document.getElementsByName("ans7");
  const q8 = document.getElementsByName("ans8");
  const q9 = document.getElementsByName("ans9");
  const q10 = document.getElementsByName("ans10");
  const q11 = document.getElementsByName("ans11");
  let ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11;
  let checkedArr = [];
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
  let q11ansExplain = document.getElementById("q11ansExplain").value;
  let q3ansExplain = document.getElementById("q3ansExplain").value;
  const contact1 = "Contact Name: " + document.getElementById("contact1").value;
  const contact2 = "Contact Info: " + document.getElementById("contact2").value;
  for (i = 0; i < checkedArr.length; i++) {
    checkedArr[i].checked = false;
  }
  document.getElementById("textarea5").value = PtTransfer1 + ans1 + "\r" +  PtTransfer2 + ans2 + "\r" + PtTransfer3 + ans3 + "\r";
  if (ans3 != "YES") {
    document.getElementById("textarea5").value += q3ansExplain + "\r";
  }
  document.getElementById("textarea5").value += PtTransfer4 + ans4 + "\r" +  PtTransfer5 + ans5 + "\r" +  PtTransfer6 + ans6 + "\r" +  PtTransfer7 + ans7 + "\r" +  PtTransfer8 + ans8 + "\r" + contact1 + "\r" + contact2 + "\r" + PtTransfer9 + ans9 + "\r" + PtTransfer10 + ans10 + "\r" + PtTransfer11 + ans11 + "\r";
  if (ans11 == "YES") {
    document.getElementById("textarea5").value += q11ansExplain;
  }
  let outputString = document.getElementById("textarea5").value;
  copy(outputString);
  document.getElementById("q3ansExplain").value = "";
  document.getElementById("q11ansExplain").value = "";
  document.getElementById("contact1").value = "";
  document.getElementById("contact2").value = "";
  const showTemp = document.getElementById("transferTemplate");
  showTemp.style.display = "none";
}

function cancelPT() {
  const showTemp = document.getElementById("transferTemplate");
  showTemp.style.display = "none";
  const questDivs = document.getElementsByClassName("ptQuest");
  for (const x of questDivs) {
    x.style.display = "none";
  }
  const questRadios = document.getElementsByClassName("ptRad");
  for (const x of questRadios) {
    x.checked = false;
  }
}

function PICREQ(btnID) {
  const PicReq = "Requesting photos from Repair Facility to verify failure and avoid inspection delay.\rInforming Repair Facility to include pics of all 4 corners of the vehicle, VIN plate, odometer, and pictures of the failure.\rSent request via SRS action button.";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = PicReq;
   document.getElementById("EDITarea").value = PicReq;
  } else {
    document.getElementById("textarea5").value = Check;
   document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
}

function FLUIDLEAK() {
  const fluids = document.getElementById("div6");
  if (fluids.style.display != "none") {
    fluids.style.display = "none";
    document.getElementById("fluid").textContent = "$";
  } else {
    fluids.style.display = "inline-block";
    document.getElementById("fluid").textContent = "X";
  }
}

function CopyIntakeForm(index) {
  const textarea = document.getElementById('textarea1');
  const lines = textarea.value.split('\n');
  const lineIndex = parseInt(index);
  const start = lines.slice(0, lineIndex).reduce((acc, curr) => acc + curr.length + 1, 0);
  const end = start + lines[lineIndex].length;
  textarea.focus();
  textarea.setSelectionRange(start, end);
  const tempStr = window.getSelection();
  document.getElementById("textarea4").value = tempStr;
  const fullString = document.getElementById("textarea4").value;
  const contactString = fullString.slice(9);
  document.getElementById("textarea4").value = contactString.trim();
  const outputString = document.getElementById("textarea4").value;
  copy(outputString);
}

function CopyForm(index){
  const textarea = document.getElementById(index);
  textarea.select();
  document.execCommand("copy");
}

function FormToTA() {
  const partname = document.getElementById('partname1').value;
  const partnum = document.getElementById('partnum').value;
  const rfprice = document.getElementById('rfprice').value;
  const msrp = document.getElementById('msrp').value;
  const textarea = document.getElementById("textarea2");
  if (msrp) {
    const overCheck = parseInt(msrp);
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
  const newpartcountStr = localStorage.getItem("newpartcount");
  let newpartcount = parseInt(newpartcountStr);
  if (newpartcount < 7){
    document.getElementById("partname" + newpartcount).style.display = "inline-block";
    newpartcount++;
    localStorage.setItem("newpartcount",newpartcount);
  }
}

function NextPart() {
  const newpartcountStr = localStorage.getItem("newpartcount");
  let newpartcount = parseInt(newpartcountStr);
  document.getElementById('partnum').value = "";
  document.getElementById('rfprice').value = "";
  document.getElementById('msrp').value = "";
  partMover = newpartcount - 1;
  for (let i = 1; i < partMover; i++) {
    let d = i + 1;
    let upper = document.getElementById("partname" + d);
    let lower = document.getElementById("partname" + i);
    lower.value = upper.value;
  }
  if (newpartcount > 2) {
    newpartcount = newpartcount - 1;
    document.getElementById("partname" + partMover).value = "";
    document.getElementById("partname" + partMover).style.display = "none";
    localStorage.setItem("newpartcount",newpartcount);
  }
}

function SENDLABOR1() {
  const Labor = "RF Asking:   \rPD Approved:   \r\r";
  const partname = document.getElementById('partname1').value;
  const textarea = document.getElementById("textarea2");
  textarea.value += "R/R ";
  textarea.value += partname + "\r";
  textarea.value += Labor;
  textarea.scrollTop = textarea.scrollHeight;
}

function SENDDIAG1() {
  const Labor = "RF Asking:   \rPD Approved:   \r\r";
  const partname = document.getElementById('partname1').value;
  const textarea = document.getElementById("textarea2");
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
  const outputString = document.getElementById("textarea2").value;
  copy(outputString);
}

function toggleConductor(boxId) {
  const showNode = document.querySelectorAll('[class$="dispStat"]');
  const showList = Array.from(showNode);
  const checkBox = document.getElementById(boxId);
  if (boxId == "s9") {
    for (i = 0; i < showList.length; i++) {
      const affectedElem = showList[i];
      const affectedId = showList[i].id;
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
    const displayElemNode = document.getElementsByClassName(boxId + "dispStat");
    const affectedElem = displayElemNode[0];
    const affectedId = displayElemNode[0].id;
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
  const authMode = localStorage.getItem('authMode');
  if (authMode === 'newAuth') {
    document.getElementById('newauthSelect').checked = true;
  } else if (authMode === 'oldAuth' || authMode == null) {
    document.getElementById('newauthSelect').checked = false;
  }
  localStorage.setItem("viewNum", "normal");
  const selected = "holder1";
  const selectedElem = document.getElementById(selected);
  const didItRun = localStorage.getItem("Im The Boss");
  localStorage.setItem("toldem", "false");
  localStorage.setItem("menuOpen", "false");
  localStorage.setItem("newpartcount","2");
  localStorage.setItem("menuState", 0);
  localStorage.setItem("colorState", 0);
  if (didItRun == null) {
    localStorage.setItem("Im The Boss", "It's Been Done");
    localStorage.setItem(selected + "STCB", '0');
    localStorage.setItem(selected + "PRIN", '0');
    localStorage.setItem(selected + "LINK", '0');
    localStorage.setItem(selected + "ENDN", '0');
    localStorage.setItem(selected + "SOLO", '0');
    localStorage.setItem(selected + "Count", '0');
  }
  const but = localStorage.getItem(selected + "Count");
  const buttonCount = parseInt(but);
  for (i = 0; i < buttonCount; i++) {
    const count = i.toString();
    const currID = "cust" + count;
    const newID = localStorage.getItem(currID);
    const currdivID = "custBtn" + count;
    const buttonX = document.getElementById(currID);
    buttonX.id = newID;
  }
  for (i = 0; i < 10; i++) {
    const count = i.toString();
    const curdivID = "custBtn" + count;
    const thsDisp = localStorage.getItem(curdivID + "SHOW");
    if (thsDisp == null) {
      localStorage.setItem(curdivID + "SHOW", "none");
    }
  }
  const idNode = document.querySelectorAll('*[id]');
  const idList =  Array.from(idNode);
  for (i = 0; i < idList.length; i++) {
    const selectedID = idList[i].id;
    const selectedElem = document.getElementById(selectedID);
    if (localStorage.getItem(selectedID + "Font") != null) {
      const fSize = localStorage.getItem(selectedID + "Font");
      selectedElem.style.fontSize = fSize;
    }
    if (localStorage.getItem(selectedID + "top") != null) {
      const top = localStorage.getItem(selectedID + "top");
      const left = localStorage.getItem(selectedID + "left");
      selectedElem.style.left = left;
      selectedElem.style.top = top;
    }
    if (localStorage.getItem(selectedID + "Width") != null) {
      const setWidth = localStorage.getItem(selectedID + "Width");
      const setHeight = localStorage.getItem(selectedID + "Height");
      selectedElem.style.width = setWidth;
      selectedElem.style.height = setHeight;
    }
    if (localStorage.getItem(selectedID + "Display") != null) {
      const setTEXT = localStorage.getItem(selectedID + "Display");
      selectedElem.innerHTML = setTEXT;
    }
  }
  const showNode = document.querySelectorAll('[class$="dispStat"]');
  const showList = Array.from(showNode);
  for (i = 0; i < showList.length; i++) {
    const selectedID = showList[i].id;
    const selectedElem = document.getElementById(selectedID);
    const elemClass = selectedElem.className;
    const boxId = elemClass.substr(-10, 2);
    const checkBox = document.getElementById(boxId);
    const currDisp = selectedElem.style.display;
    const setDisp = localStorage.getItem(selectedID + "SHOW");
    if (setDisp == null || setDisp == "inline-block") {
      checkBox.checked = true;
      selectedElem.style.display = "inline-block";
    } else {
      checkBox.checked = false;
      selectedElem.style.display = "none";
    }
  }
  const mainDisp = localStorage.getItem("allBTN");
  const checkbox = document.getElementById("s9");
  if (mainDisp == "inline-block" || mainDisp == null) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  localStorage.setItem("pageNum", "0");
  resetColors();
  trackerBlank();
  const Rev = "Reviewed inspection photos and report.\rReviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r";
  localStorage.setItem("Rev", Rev);
  localStorage.setItem("mode", '2');
  modePT();
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
  if (checkOpen()) { return; }
  document.getElementById("mySidenav").classList.add("open_nav");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open_nav");
}

function opentransAuth() {
  if (checkOpen()) { return; }
  document.getElementById("module_trans_backing").classList.add("trsnActive");
  document.getElementById("module_trans_1").classList.add("trsnActive");
}

function closetransAuth() {
  document.getElementById("module_trans_backing").classList.remove("trsnActive");
  document.getElementById("module_trans_7").classList.remove("trsnActive");
  document.getElementById("module_trans_4").classList.remove("trsnActive");
}

function closeUpdate() {
  document.getElementById("updated").style.display = "none";
  localStorage.setItem("updated", "yes");
}

function ringDeny() {
  let text = "After review of borescope provided photos, there are obvious signs of excessive carbon.\rThis carbon is a biproduct of a fuel/spark related issue.\r";
  text += "Per the leak-down test performed, we have air bypass from piston rings (air escaping to crank case).\rWe know the piston rings are stuck, and have made marks/scoring on the cylinder walls.\r";
  text += "The stuck piston rings can be attributed to the carbon.\rCarbon is an exclusion on this policy.\rThe engine portion of this claim will be denied.\r";
  text += "The following items and conditions are not covered by this CONTRACT:\r\r";
  text += "17. BREAKDOWNS resulting from engine sludge, carbon, pre-ignition, detonation, varnish, corrosion, foreign objects, dirt, dust, liquid, cracked rubber and/or neoprene parts, dry-rot, road chemicals, lack of proper fluids or use of additives or fuel grades not recommended by the manufacturer.";
  copy(text);
}

function cancel_auth() {
  uncheck_All();
  document.getElementById('nauth20').value = '';
  document.getElementById('oopc_option').style.display = "none";
  document.getElementById('nauth9').checked = true;
  document.getElementById('nauth16').checked = true;
  document.getElementById('nauth13').checked = true;
  document.getElementById('auth_module').classList.remove('show');
}

function concerned(x) {
  if (x === 'n') {
    document.getElementById('nauth6').checked = false;
    document.getElementById('nauth7').checked = false;
    document.getElementById('nauth8').checked = false;
    return;
  }
  if (x === 'y') {
    document.getElementById('nauth9').checked = false;
    return;
  }
  if (x === 'd') {
    document.getElementById('nauth16').checked = false;
    return;
  }
  if (x === 'c') {
    document.getElementById('nauth14').checked = false;
    document.getElementById('nauth15').checked = false;
    return;
  }
}

function show_oopc_option(x) {
  if (x === 'n') {
    document.getElementById('oopc_option').style.display = "none";
  }
  if (x === 'y') {
    document.getElementById('oopc_option').style.display = "block";
  }
}

function auth_run() {
  if (!checkOpen()) {
    document.getElementById('auth_module').classList.add('show');
  }
  document.getElementById('nauth9').checked = true;
  document.getElementById('nauth16').checked = true;
  document.getElementById('nauth13').checked = true;
}

function auth_initialize() {

  const contact_name = getContact('0');
  const contact_email = getContact('1');

  const auth1Note = "Repair Facility Contact name: ";
  const auth2Note = "Verified failures using Repair Facility diagnostic";
  const auth3Note = " and inspection report";
  const auth4Note = " and RF supplied photos";
  const auth5Note = "Contract has coverage for failed components.\r";
  const auth6Note = "Verified OEM parts using Forte and AM parts using PA.\r";
  const auth7Note = "Verified labor using Pro Demand.\r";
  const auth8Note = "Verified payment info with Repair Facility contact at: ";   
  const auth9Note = "Using Repair Facility OEM parts at or under $250.00.\r";
  const auth10Note = "Using Repair Facility parts at or under sourcing MCE.\r";
  const auth11Note = "Using sourcing MCE as a credit toward Repair Facility parts.\r";
  const auth12Note = "Using sourcing MCE as a credit toward Repair Facility parts or shipping in.\r";
  const auth13Note = "Using Repair Facility's parts. Adjusted price to reasonable amount near MCE.\rThis was done considering all factors including claim delays, shipping costs, liability for future failures, time and mileage in coverage, number of prior claims and their cost, etc.\r";
  const auth14Note = "No inspection needed as Repair Facility diagnostic matches CH concern.\r";
  const auth15Note = "Sent inspection to verify failures.\rReviewed report and inspection photos.\rInspection review note is completed.\r";
  const auth16Note = "Requested and reviewed photos from Repair Facility.\rPhoto review note is completed.\r";
  const auth17Note = "No records requested as history will not change claim decision.\rVehicle is not in waiting period.\rConcern is not maintenance related.\rNo prior related claims.\rNo recalls, TSBs, or mileage concerns.\r";
  const auth18Note = "Requested and reviewed records and statement.\rRecord review note is completed.\r";
  const auth19Note = "After reviewing all relevant documentation, we are moving forward with verified failures.\r";
  const auth20Note = "Need to review OOPC of $";
  const auth21Note = " with Contract Holder.\r";
  const auth22Note = " and shipping option with Contract Holder.\r";
  const auth23Note = "OOPC is due to differences in ";
  const auth24Note = "Need to review shipping option with Contract Holder.\r";
  const auth25Note = "Have not given authorization info to the Repair Facility at this time.\r";
  const auth26Note = "Contract Holder has no OOPC besides deductible.\r";
  const auth27Note = "Gave authorization info and payment instructions to ";
  const auth28Note = "Will inform Contract Holder of non-covered components.\r";
  const auth29Note = "There were denied items on this claim.\rReview denial note for more details.\r";
  const auth30Note = "Haven't determined OOPC at this time.\rWill review with RF prior to calling Contract Holder.\r";

  let output = '';

  output += auth1Note + contact_name + '\r' + auth2Note;

  const inspection = document.getElementById('nauth6').checked;
  const photos = document.getElementById('nauth7').checked;
  const records = document.getElementById('nauth8').checked;
  const notNeeded = document.getElementById('nauth9').checked;

  output += inspection ? auth3Note : '';
  output += photos ? auth4Note : '';
  output += '.\r' + auth5Note + auth6Note + auth7Note + auth8Note + contact_email + '.\r';

  const parts1 = document.getElementById('nauth1').checked;
  const parts2 = document.getElementById('nauth2').checked;
  const parts3 = document.getElementById('nauth3').checked;
  const parts4 = document.getElementById('nauth4').checked;
  const parts5 = document.getElementById('nauth5').checked;

  output += parts1 ? auth9Note : '';
  output += parts2 ? auth10Note : '';
  output += parts3 ? auth11Note : '';
  output += parts4 ? auth12Note : '';
  output += parts5 ? auth13Note : '';

  if (!notNeeded) {
    output += inspection ? auth15Note : auth14Note;
    output += photos ? auth16Note : '';
    output += records ? auth18Note : auth17Note;
    output += auth19Note;
  } else {
    output += auth14Note + auth17Note;
  }

  const oopc = document.getElementById('nauth10').checked;
  const shipping = document.getElementById('nauth11').checked;
  const both = document.getElementById('nauth12').checked;
  const none = document.getElementById('nauth13').checked;
  const oopcamount1 = document.getElementById('nauth20').value;
  const oopcamount = parseInt(oopcamount1);

  const noncovered = document.getElementById('nauth14').checked;
  const denied = document.getElementById('nauth15').checked;
  const neither = document.getElementById('nauth16').checked;

  if (oopc || both) {
    const partoop = document.getElementById('nauth17').checked;
    const laboroop = document.getElementById('nauth18').checked;
    const bothoop = document.getElementById('nauth19').checked;
    const amountUnknown = document.getElementById('nauth21').checked;
    if (amountUnknown) {
      output += auth30Note
      output += shipping ? auth24Note : '';
    } else {
      output += auth20Note + oopcamount.toFixed(2);
      output += shipping ? auth22Note : auth21Note;
      output += auth23Note;
      if (bothoop) output += "parts and labor.\r"
      if (partoop) output += "parts.\r"
      if (laboroop) output += "labor.\r"
    }
    output += auth25Note;
  }
  if (!oopc && shipping) output += auth24Note + auth26Note + auth25Note;

  const auth27NoteA = auth26Note + auth27Note + contact_name + '.\r';
  output += none ? auth27NoteA : '';
  output += noncovered ? auth28Note : '';
  output += denied ? auth29Note : '';
  copy(output);
  cancel_auth();
}