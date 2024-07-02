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

//                                                                       LABOR RATE SCRIPT

function openScript() {
  let laborscriptDiv = document.getElementById("laborscriptDiv");
  let isOpen = checkOpen();
  if (laborscriptDiv.style.display == "none" && !isOpen) {
    laborscriptDiv.style.display = "block";
  } else {
    laborscriptDiv.style.display = "none";
  }
}

function setZero() {
  document.getElementById("asking").value = "";
  document.getElementById("radius").value = "";
  document.getElementById("type").value = "";
  document.getElementById("quant").value = "";
  document.getElementById("aveRate").value = "";
  document.getElementById("responseDiv_text").innerHTML = "";
  document.getElementById("current").value = "";
  document.getElementById("myScript").style.display = "inline";
  document.getElementById("noScript").style.display = "none";
  document.getElementById("yesScript").style.display = "none";
  document.getElementById("responseDiv").style.display = "none";
}

function scriptInfo() {
  let askingstr = document.getElementById("asking").value;
  let currentstr = document.getElementById("current").value;
  let asking = parseInt(askingstr);
  let current = parseInt(currentstr);
  if (current < 1) { current = asking; }
  let radius = document.getElementById("radius").value;
  let type = document.getElementById("type").value;
  let quant = document.getElementById("quant").value;
  let aveRate = document.getElementById("aveRate").value;
  let custom = document.getElementById("custom").value;
  localStorage.setItem("asking", asking);
  localStorage.setItem("radius", radius);
  localStorage.setItem("type", type);
  localStorage.setItem("quant", quant);
  localStorage.setItem("aveRate", aveRate);
  localStorage.setItem("current", current);
  localStorage.setItem("custom", custom);
}

function instructScript() {
  let instructL = document.getElementById("instructL");
  let instructScript = document.getElementById("instructScript");
  if (!instructL.classList.contains("showing")) {
    instructL.classList.add("showing") ;
    instructScript.innerText = "Hide";
  } else {
    instructL.classList.remove("showing") ;
    instructScript.innerText = "Instructions";
  }
}

function laborScript() {
  let radius = document.getElementById("radius").value;
  let type = document.getElementById("type").value;
  let quant = document.getElementById("quant").value;
  if (radius == "" || type == "" || quant == "") { return; }
  let askingstr = document.getElementById("asking").value;
  let aveRate = document.getElementById("aveRate").value;
  let currentstr = document.getElementById("current").value;
  let current = parseInt(currentstr);
  let asking = parseInt(askingstr);
  if (current < 1) { current = asking; }
  let whatDo = laborReview(asking, current, aveRate);
  document.getElementById("myScript").style.display = "none";
  document.getElementById("responseDiv").style.display = "block";
  localStorage.setItem("weTried", "notYet");
  if (whatDo == "allow") {
    document.getElementById("responseDiv_text").innerHTML = "Your Response is:<br>I have updated your repair facility profile and set the labor rate at that amount.";
    document.getElementById("noScript").style.display = "none";
    document.getElementById("yesScript").style.display = "none";
    buildLaborNote('underAve');
    return;
  } else {
    negotiateScript('f');
  }
}

function negotiateScript(x) {
  if (x == 'r') {
    setZero();
    return;
  }
  let askingElem = document.getElementById("asking");
  let asking = sanitizeInput(document.getElementById("asking").value);
  let aveRateElem = document.getElementById("aveRate");
  let aveRate =  sanitizeInput(document.getElementById("aveRate").value);
  let currentElem = document.getElementById("current");
  let current =  sanitizeInput(document.getElementById("current").value);
  let responseDiv_text = document.getElementById("responseDiv_text");
  let responseDiv = document.getElementById("responseDiv");
  document.getElementById("noScript").style.display = "initial";
  document.getElementById("yesScript").style.display = "initial";
  let whatDo = laborReview(asking, current, aveRate);
  let tryHarder = localStorage.getItem("weTried");
  if (x == 'y') {
    let agreed;
    if (tryHarder != "notYet") {
      agreed = tryHarder;
      buildLaborNote('halfway');
    } else {
      agreed = aveRate;
      buildLaborNote('atAve');
      agreed = parseInt(agreed).toFixed(2);
    }
    responseDiv_text.innerHTML = "Your Response is:<br>Thank you. I have updated your repair facility profile and set the labor rate at $" + agreed + ".";
    document.getElementById("noScript").style.display = "none";
    document.getElementById("yesScript").style.display = "none";
    return;
  }
  if (x == 'a') {
    let customstr = document.getElementById("custom").value;
    let custom = parseInt(customstr);
    if (custom < 1) { return; }
    responseDiv_text.innerHTML = "Your Response is:<br>Thank you. I have updated your repair facility profile and set the labor rate at $" + custom + ".";
    document.getElementById("noScript").style.display = "none";
    document.getElementById("yesScript").style.display = "none";
    buildLaborNote('custom');
    return;
  }
  if (x == 'n' &&  tryHarder == "notYet") {
    let pleaseD = (parseInt(asking) + parseInt(aveRate)) / 2;
    let please = pleaseD.toFixed(2);
    responseDiv_text.innerHTML =  "Your Response is:<br>Are you able to match us at $" + please + "?";
    localStorage.setItem("weTried", please);
    return;
  }
  if (x == 'n' && whatDo == "normal") {
    responseDiv_text.innerHTML = "Your Response is:<br>No problem. Thank you for considering it.<br>I will update your repair facility profile to $" + asking + ".<br>Please keep in mind there could be other times during the claims process that we may ask you to negotiate pricing";
    document.getElementById("noScript").style.display = "none";
    document.getElementById("yesScript").style.display = "none";
    buildLaborNote('declined');
  }
  if (x == 'n' && whatDo == "alt") {
    responseDiv_text.innerHTML = "Your Response is either:<br>No problem. Thank you for considering it.<br>I will update your repair facility profile to $" + asking + ".<br>Please keep in mind there could be other times during the claims process that we may ask you to negotiate pricing";
    responseDiv_text.innerHTML += "<br>OR: I have your current labor rate set at $" + current + ".<br>In order to increase the labor rate, we would request that verification be sent in.<br>I can start that process for you once we have finished.";
    responseDiv_text.innerHTML += "<br>Follow the most recent directives from AAS or discuss with your TL/DRG/Team Chat if needed.";
    document.getElementById("noScript").style.display = "none";
    document.getElementById("yesScript").style.display = "none";
    buildLaborNote('declined');
    return;
  }
  if (x == 'f') {
    responseDiv_text.innerHTML = "Your Response is:<br>The average labor rate in your area is $" + aveRate + ".<br>Are you able to match that?";
    return;
  }
}

function laborReview(askingStr, currentStr = 0, averageStr) {
  let asking = parseInt(askingStr);
  let current = parseInt(currentStr);
  let average = parseInt(averageStr);
  if (current == 0) {
    current = asking;
  }
  let normal = "normal";
  let alt = "alt";
  let allow = "allow";
  let diffInRate = asking - current;
  if (asking <= average) {
    return allow;
  } else if (asking <= current) {
    return normal;
  } else if (asking > 250 || diffInRate > 49.99) {
    return alt;
  } else {
    return normal;
  }
}

function buildLaborNote(result) {
  scriptInfo();
  let textarea = document.getElementById("textarea5");
  let please = localStorage.getItem("weTried");
  let asking = localStorage.getItem("asking");
  let radius = localStorage.getItem("radius");
  let type = localStorage.getItem("type");
  let quant = localStorage.getItem("quant");
  let aveRate = localStorage.getItem("aveRate");
  let current = localStorage.getItem("current");
  let custom = localStorage.getItem("custom");
  textarea.value = "Search Parameters:\rRadius: " + radius + "\rFacility Type: " + type + "\rNumber of Facilities: " + quant + "\r\r";
  textarea.value += "Average Labor Rate: $" + aveRate;
  if (asking != current) {
    textarea.value += "\rRepair Facility Previous Labor Rate: $" + current;
  }
  textarea.value += "\rRepair Facility Posted Labor Rate: $" + asking;
  if (result == "underAve") {
    textarea.value += "\r\rThe Repair Facility posted labor rate is under the average labor rate for comparable shops in the vicinity.";
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + asking;
  }
  if (result == "declined") {
    textarea.value += "\r\rThe Repair Facility is unwilling to negotiate the labor rate.";
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + asking;
  }
  if (result == "atAve") {
    textarea.value += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed to the average rate for the area.";
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + aveRate;
  }
  if (result == "halfway") {
    textarea.value += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed on midway between average and asking.";
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + please;
  }
  if (result == "custom") {
    textarea.value += "\r\rThe Repair Facility is willing to negotiate.\rThey made an offer under the current posted labor rate which we accepted";
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + custom;
  }
  textarea.select();
  document.execCommand("copy");
}