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

function transAuth() {
  document.getElementById("module_trans_backing").classList.add("trsnActive");
  localStorage.setItem('transauthPage', '1');
  localStorage.removeItem("Diag");
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
  document.getElementById('module_trans_1').classList.add('trsnActive');
  document.getElementById('trans_ans4').value = '';
  document.getElementById('trans_ans4a').value = '';
  document.getElementById('trans_ans4b').value = '';
  document.getElementById('trans_ans4c').value = '';
  document.getElementById('trans_ans7').value = '';
  localStorage.removeItem('Diag');
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
    closetransAuth();
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
      outputString += oopcsTrans1a + "\r";;
    }
  }
  trans_ans9a.checked = false;
  document.getElementById("trans_ans8a").checked = false;
  document.getElementById("trans_ans8c").checked = false;
  const noncovComps = document.getElementById("trans_ans8e");
  if (noncovComps.checked) {
    outputString += noncovTrans1 + "\r";
    noncovComps.checked = false;     
  }
  const deniedComps = document.getElementById("trans_ans8f");
  if (deniedComps.checked) {
    outputString += noncovTrans2 + "\r";;
    deniedComps.checked = false;
  }
  copy(outputString);

  uncheck_All();
  closetransAuth();
  return;
}
