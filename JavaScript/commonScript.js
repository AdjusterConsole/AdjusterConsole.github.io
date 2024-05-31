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
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole.com.


function openInfo2(evt, cityName) {
  var i, diagcontent, tablinks2;
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
  const list = document.getElementById("mySidenav").classList;
  list.replace("open_nav", "closed_nav");
}                                                                     

function closeResource2() {
  var i, diagcontent, tablinks2;
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
  var diagDiv = document.getElementById("diagDiv");
  var isOpen = checkOpen();
  if (diagDiv.style.display == "none" && !isOpen) {
    diagDiv.style.display = "block";
    var widthpre = parseInt(window.getComputedStyle(diagDiv).width);
    var width1 = (widthpre / 4);
    var width = width1.toString() + "px";
    document.documentElement.style.setProperty('--div-width2', width);
    const list = document.getElementById("mySidenav").classList;
    list.replace("open_nav", "closed_nav");
  } else {
    diagDiv.style.display = "none";
  }
}

function magnify(image) {
  var lastImageId = localStorage.getItem("lastImageId");
  if (image == 'back') {
    document.getElementById(lastImageId).style.display = "none";
    document.getElementById('theDepot').style.display = "none";
    localStorage.removeItem("lastImageId");
  } else {
    var imageId = image + "Depot";
    localStorage.setItem("lastImageId", imageId);
    document.getElementById(imageId).style.display = "block";
    document.getElementById('theDepot').style.display = "inline-block";
  }
}
//                                                                      RESOURCE DIV
        
function openInfo(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  setDate();
}

function closeResource() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById('trackerMsg').innerText = "";
  document.getElementById('trackerMini').innerText = "";
  resetGuide();
  resrcCenter();
}

function resrcCenter(x,y) {
  var w = parseInt(x);
  var resrcDiv = document.getElementById("resrcDiv");
  var isOpen = checkOpen();
  if (resrcDiv.style.display == "none" && !isOpen) {
    resrcDiv.style.display = "inline-block";
    if (y == 'p') { document.getElementById("policyDiv").classList.remove("hide"); }
    if (y == 't') { document.getElementById("toolsDiv").classList.remove("hide"); }
    document.getElementById('trackerMsg').innerText = "";
    var widthpre = parseInt(window.getComputedStyle(resrcDiv).width);
    var width1 = (widthpre / w);
    var width = width1.toString() + "px";
    document.documentElement.style.setProperty('--div-width', width);
    const list = document.getElementById("mySidenav").classList;
    list.replace("open_nav", "closed_nav");
    return;
  }
  resrcDiv.style.display = "none";
  document.getElementById("policyDiv").classList.add("hide");
  document.getElementById("toolsDiv").classList.add("hide");
}

function Record() {
  this.date;
  this.mileage = 0;
  this.notes = "";
  this.isInception = false;
  this.correction = false;
  this.daysfrom = 0;
  this.milesfrom = 0;
  this.discrepancy = false;
  this.waitperiod = false;
  this.isService = false;
  this.isPrior = false;
}

function setDate() {
//  var date = new Date();
//  var day = date.getDate();
//  var month = date.getMonth() + 1;
//  var year = date.getFullYear();
//  if (month < 10) month = "0" + month;
//  if (day < 10) day = "0" + day;
//  var today = year + "-" + month + "-" + day;       
//  document.getElementById("serDate").value = today;
//  document.getElementById("incDate").value = today;
//  document.getElementById("rec0Date").value = today;

  document.getElementById("incDate").value = "2024-01-31";
  document.getElementById("serDate").value = "2024-03-01";
  document.getElementById("rec0Date").value = "2024-01-01";

  document.getElementById("incMile").value = "104000";
  document.getElementById("serMile").value = "110000";
  document.getElementById("rec0Mile").value = "100000";
}

function convertToDate(str) {
  var dateArr = str.split("-");
  return new Date(dateArr[0], dateArr[1], dateArr[2]);
}

function dayCalc(inceptDate, recordDate) {
  var incDate = convertToDate(inceptDate);
  var recDate = convertToDate(recordDate);
  return Math.round((recDate.getTime() - incDate.getTime()) / 86400000);
}

function addLine() {
  document.getElementById('trackerMsg').innerText = "";
  document.getElementById('trackerMini').innerText = "";
  var addLineCount = localStorage.getItem("addLineCount");
  var lineNum = parseInt(addLineCount) + 1;
  if (lineNum < 6) {
    var nextId = "recTab" + lineNum.toString();
    document.getElementById(nextId).style.visibility = "visible";
    localStorage.setItem("addLineCount", lineNum);
  } else { return;}
}

function isitOlder(isOlder, thanThis) {
  var isOlder1 = convertToDate(isOlder);
  var thanThis1 = convertToDate(thanThis);
  if (isOlder1.getTime() > thanThis1.getTime()) {
    return true;
  } else {
    return false;
  }
} 

function compare (rec1, rec2) {
  return rec1.mileage - rec2.mileage;
}

function isitWP(record) {
  if (record.isService) {
    if (record.daysfrom < 26) {
      return true;
    }
    if (record.milesfrom < 250) {
      return true;
    }
    if (record.daysfrom < 41 && record.milesfrom < 500) {
      return true;
    } 
  }
}

function hideTable() {
  var tableDiv = document.getElementById('tableDiv');
  tableDiv.style.opacity = "0";
}

function showTable() {
  var tableDiv = document.getElementById('tableDiv');
  tableDiv.style.opacity = "1";
}

function saveRecord(elemId) {
  var noteOpen = localStorage.getItem("noteOpen");
  if (noteOpen == "true") {
    document.getElementById('trackerMsg').innerHTML = "Close the note in order to proceed";
    return;
  }
  document.getElementById('trackerMsg').innerText = "";
  document.getElementById('trackerMini').innerText = "";
  var record = new Record();
  var indexF = elemId.length - 1;
  var newelemId = elemId.slice(0, indexF);
  var checkMileage = document.getElementById(newelemId + "Mile").value;
  var checkDate = document.getElementById(newelemId + "Date").value;
  if (checkDate == null || checkMileage == null) {
    alert("The minimum requirements are DATE and MILEAGE");
    return;
  }
  record.date = document.getElementById(newelemId + "Date").value;
  record.mileage = document.getElementById(newelemId + "Mile").value;
  record.notes = localStorage.getItem(newelemId + "Note");
  if (document.getElementById(newelemId + "C").checked && newelemId != "ser") {
    localStorage.setItem("IDforCor", newelemId);
    localStorage.setItem(newelemId + "mileage", record.mileage);
    localStorage.setItem(newelemId + "date", record.date);
  }
  if (newelemId == "ser") {
    record.isService = true;
    localStorage.setItem("sermileage", record.mileage);
    localStorage.setItem("serdate", record.date);
  }
  if (newelemId == "inc") {
    record.isInception = true;
    record.correction = false;
    record.daysfrom = 0;
    record.milesfrom = 0;
    localStorage.setItem("InceptionMiles", record.mileage);
    localStorage.setItem("InceptionDate", record.date);
  }
  if (newelemId != "inc") {
    var inceptStr = localStorage.getItem("InceptionMiles");
    if (inceptStr == null) { 
      document.getElementById('trackerMsg').innerHTML += "Need Inception info first to perform calculations.";
      return;
    }
    var inceptMiles = parseInt(inceptStr);
    var tempMil = record.mileage - inceptMiles;
    if (tempMil < 0) { tempMil = tempMil * -1; }
    record.milesfrom = tempMil;
    var inceptDate = localStorage.getItem("InceptionDate");
    tempdayfr = dayCalc(inceptDate, record.date);
    if (tempdayfr < 0) { tempdayfr = tempdayfr * -1; record.isPrior = true;}
    record.daysfrom = tempdayfr;
    if (isitWP(record)) {
      record.waitperiod = true;
    }
  }
  var recordArr = [];
  recordArr = JSON.parse(localStorage.getItem("recordArr"));
  var objectArr = [];
  objectArr = JSON.parse(localStorage.getItem("objectArr"));
  var savedRecs = localStorage.getItem("savedRecs");
  var recIndex = 0;
  if (objectArr.length != null) { 
    var recIndex = objectArr.length;
  }
  var recName = newelemId + "Rcrd";
  if (!recordArr.includes(recName)) { 
    if (!objectArr.includes("empty")) { 
      objectArr.push(record); 
    } else { 
      var indexA = objectArr.indexOf("empty");
      objectArr.splice(indexA, 1, record); 
      recIndex = indexA;
    } 
    recordArr.push(recName); 
    localStorage.setItem(recName + "spot", recIndex); 
    localStorage.setItem("objectArr", JSON.stringify(objectArr));
    localStorage.setItem("recordArr", JSON.stringify(recordArr));
    var newCount = parseInt(savedRecs) + 1; 
    localStorage.setItem("savedRecs", newCount);
  } else { 
    var indexSaved = localStorage.getItem(recName + "spot");
    objectArr.splice(indexSaved, 1, record);
    localStorage.setItem("objectArr", JSON.stringify(objectArr));
  }
}

function delRecord(elemId) {
  document.getElementById('trackerMsg').innerText = "";
  document.getElementById('trackerMini').innerText = "";
  var temp = elemId.length - 1;
  var newelemId = elemId.slice(0, temp);
  const recordArr = JSON.parse(localStorage.getItem("recordArr"));
  const objectArr = JSON.parse(localStorage.getItem("objectArr"));
  var recName = newelemId + "Rcrd";
  var objectIndex = localStorage.getItem(recName + "spot");
  if (recordArr.includes(recName)) { 
    if (recName == "incRcrd") { 
      localStorage.removeItem("InceptionMiles");
      localStorage.removeItem("InceptionDate");
    }
    localStorage.removeItem(newelemId + "Note");
    objectArr.splice(objectIndex, 1, "empty");
    localStorage.setItem("objectArr", JSON.stringify(objectArr));
    var savedRecs = localStorage.getItem("savedRecs");
    var newCount = parseInt(savedRecs) - 1;
    localStorage.setItem("savedRecs", newCount);
    localStorage.removeItem(recName); 
    const index = recordArr.indexOf(recName);
    document.getElementById(newelemId + "Date").value = "";
    document.getElementById(newelemId + "Mile").value = "";
    if (index > -1) { 
      recordArr.splice(index, 1); 
      localStorage.setItem("recordArr", JSON.stringify(recordArr));
    }
  }
}

function whichRep() {
  const whichA = document.getElementById('whichA').checked;
  const whichB = document.getElementById('whichB').checked;
  const whichC = document.getElementById('whichC').checked;
  if (whichA && !whichB && !whichC) { comsoCompan('0'); return; }
  if (whichB && !whichA && !whichC) { inceptEst(); return; }
  if (whichC && !whichA && !whichB) { comsoCompan('1'); return; }
  if (whichA && whichB && !whichC) {
    comsoCompan('0');
    inceptEst('both');
    return;
  }
  if (whichA && whichC && !whichB) {
    comsoCompan('2');
    return;
  }
  if (whichB && whichC && !whichA) {
    comsoCompan('1');
    inceptEst('note');
    return;
  }
  if (whichA && whichB && whichC) {
    inceptEst('all');
    comsoCompan('3');
    return;
  }
}

function comsoCompan(z) {
  var savedRecs = localStorage.getItem("savedRecs");
  var recCount = parseInt(savedRecs);
  if (recCount < 3) {
    document.getElementById('trackerMsg').innerHTML += "Enter at least 3 records to continue.";
    return;
  }
  const objectArr = JSON.parse(localStorage.getItem("objectArr"));
  objectArr.sort(compare);
  var looped = objectArr.length - 1;
  for (i = 0; i < looped; i++) {
    var x = i + 1;
    var firDate = objectArr[i].date;
    var secDate = objectArr[x].date;
    if (isitOlder(firDate, secDate)) {
      objectArr[i].discrepancy = true;
      objectArr[x].discrepancy = true;
      console.log(objectArr[i].mileage);
    }
  }
  localStorage.setItem("objectArr", JSON.stringify(objectArr));
  displayRecs(z);
}

function showNote(noteID) {
  var noteOpen = localStorage.getItem("noteOpen");
  var temp = noteID.length - 1;
  var elemId = noteID.slice(0, temp);
  var noteDivID = noteID + "otebin";
  var binElem = document.getElementById(noteDivID);
  if (binElem.style.height == "0px") {
    if (noteOpen == "true") {
      document.getElementById('trackerMsg').innerHTML = "Close the open note before opening another";
      return;
    }
    var curNote = localStorage.getItem(elemId + "Note");
    if (curNote != null) {
      binElem.innerText = curNote;
    }
    binElem.classList.toggle("arise");
    binElem.style.height = "150px"
    document.getElementById(noteID).innerText = "Finished";
    localStorage.setItem("noteOpen", "true");
  } else if (binElem.style.height != "0px") {
    document.getElementById('trackerMsg').innerHTML = "";
    var noteText = binElem.innerText;
    binElem.innerText = "";
    localStorage.setItem(elemId + "Note", noteText);
    document.getElementById(noteID).innerText = "Add Note";
    binElem.style.height = "0px";
    binElem.classList.toggle("arise");
    localStorage.setItem("noteOpen", "false");
  }
}

function displayRecs(z) {
  if (document.getElementById('reportTable') != null) {
    document.getElementById('outputDiv').removeChild(document.getElementById('reportTable'));
    document.getElementById('msgDiv').innerHTML = "";
  }
  const objectArr = JSON.parse(localStorage.getItem("objectArr"));
  const table = document.createElement('table');
  table.classList.add('TheOutputtable');
  table.id = "reportTable";
  const header = table.createTHead().insertRow();
  header.classList.add('headit');
  header.insertCell(0).innerText = "Date";
  header.insertCell(1).innerText = "Mileage";
  header.insertCell(2).innerText = "Miles";
  header.insertCell(3).innerText = "Days";
  header.insertCell(4).innerText = "M/D";
  header.insertCell(5).innerText = "WP";
  header.insertCell(6).innerText = "DIS";
  header.insertCell(7).innerText = "Notes";
  const body = document.createElement('tbody');
  table.appendChild(body);
  let EIC = false;
  let waitPeriod = false;
  let HMPD = false;
  let mileDis = false;
  for (i = 0; i < objectArr.length; i++) {
    const row = body.insertRow();
    row.classList.add('rowit');
    var tempRec = objectArr[i];
    var dateStr = tempRec.date;
    var year = dateStr.substr(0,4);
    var month = dateStr.substr(5,2);
    var day = dateStr.substr(8,2);
    var milesper;
    var distance;
    var overTime;
    var outputDate = month + "-" + day + "-" + year;
    tempRec.date = outputDate;
    if (!tempRec.isInception) {
      distance = parseInt(tempRec.milesfrom);
      overTime = parseInt(tempRec.daysfrom);
      milesper = Math.round(distance / overTime);
    } else {
      milesper = 0;
    }
    row.insertCell(0).innerText = outputDate;
    row.insertCell(1).innerText = tempRec.mileage;
    row.insertCell(2).innerText = tempRec.milesfrom;
    row.insertCell(3).innerText = tempRec.daysfrom;
    row.insertCell(4).innerText = milesper;
    if (tempRec.waitperiod) {
      row.insertCell(5).innerText = "\u26D4";
    } else { 
      row.insertCell(5).innerText = "\u2714";
    }
    if (tempRec.discrepancy) {
      row.insertCell(6).innerText = "\u26D4";
    } else {
      row.insertCell(6).innerText = "\u2714";
    }
    row.insertCell(7).innerText = tempRec.notes;
    document.getElementById('outputDiv').appendChild(table);
    var hasMessage = false;
    if (tempRec.isService) {
      if (overTime < 90 || distance < 700) {
        if (overTime < 90 && !EIC) {
          document.getElementById('msgDiv').innerHTML += "This vehicle has less than 90 days in coverage<br><br>"; 
        }
        if (distance < 700) {
          document.getElementById('msgDiv').innerHTML += "This vehicle is within 700 miles of the inception mileage<br><br>";
        }
        document.getElementById('alertDiv').innerHTML += "\u2757 ALERT: EARLY IN COVERAGE \u2757<br>";
        hasMessage = true;
        EIC = true;
      }
    }
    if (tempRec.waitperiod && !waitPeriod) {
      document.getElementById('msgDiv').innerHTML += "The failure dated " + outputDate + " was on day " + overTime + " of coverage.<br>The vehicle travelled " + distance + " since inception before failure.<br><br>";
      document.getElementById('alertDiv').innerHTML += "\u2757 ALERT: WAITING PERIOD \u2757<br>";
      hasMessage = true;
      waitPeriod = true;
    }
    if (tempRec.discrepancy && !mileDis) {
      document.getElementById('msgDiv').innerHTML += "Review The dates and mileages of the surrounding records for any discrepancies.<br><br>";
      document.getElementById('alertDiv').innerHTML += "\u2757 ALERT: MILEAGE DISCREPANCY \u2757<br>";
      hasMessage = true;
      mileDis = true;
    }
    if (milesper > 200 && !HMPD) {
      document.getElementById('msgDiv').innerHTML += "This vehicle has travelled " + milesper + " miles per day.<br>"; 
      document.getElementById('alertDiv').innerHTML += "\u2757 ALERT: HMPD \u2757<br>"; 
      hasMessage = true;
      HMPD = true;
      if (overTime < 90) {
        document.getElementById('msgDiv').innerHTML += "Since they are on day " + overTime + " of coverage, please review the HMPD SOP.<br><br>";         
      } else if (overTime > 89) {
        document.getElementById('msgDiv').innerHTML += "Since they are on day " + overTime + " of coverage, Continue the claim as normal.<br><br>";
      }
    }
    if (z == '0' || z == '2' || z == '3') { 
      displayOutput();
      if (hasMessage) {
        document.getElementById('alertDiv').innerHTML += "\u2757 CLICK TO SHOW MESSAGES \u2757<br>";
      }  
    }
  }
  var allCells = document.getElementsByTagName("td");
  for (i = 0; i < allCells.length; i++) {
    if (allCells[i].innerText == "\u2714") {
      allCells[i].style.color = "green";
    }
  }
  priorMileage();
  if (z == '1' || z == '2' || z == '3') { 
    noteOutput(z, EIC, waitPeriod, HMPD, mileDis);
    return;
  }
}

function priorMileage() {
  const table = document.querySelector(".TheOutputtable");
  const objectArr = JSON.parse(localStorage.getItem("objectArr"));
  for (i = 0; i < objectArr.length; i++) {
    if(objectArr[i].isPrior) {
      var x = i + 1;
      table.rows[x].cells[2].style.color = "red";
      table.rows[x].cells[3].style.color = "red";
    }
  }
}

function showMsg() {
  document.getElementById('msgDiv').style.opacity = 1;
}

function inceptEst(spot) {
  document.getElementById('trackerMsg').innerHTML = "";
  document.getElementById('trackerMini').innerHTML = "";
  var elemId = localStorage.getItem("IDforCor");
  var recMileage1 = localStorage.getItem(elemId + "mileage");
  var recDate = localStorage.getItem(elemId + "date");
  var serMileage1 = localStorage.getItem("sermileage");
  var serDate = localStorage.getItem("serdate");
  var incMileage1 = localStorage.getItem("InceptionMiles");
  var incDate = localStorage.getItem("InceptionDate");
  if (elemId == null || recMileage1 == null || recDate == null || serMileage1 == null || serDate == null || incMileage1 == null || incDate == null) {
    document.getElementById('trackerMsg').innerHTML += "Information is incomplete. Try Again";
    return;
  } 
  var recMileage = parseInt(recMileage1);
  var serMileage = parseInt(serMileage1);
  var incMileage = parseInt(incMileage1);
  var daysBtwnRecs = dayCalc(recDate, serDate);
  var milesBtwnRecs = serMileage - recMileage;
  var milesperday = milesBtwnRecs / daysBtwnRecs;
  var daysBtwnMaintSale = dayCalc(recDate, incDate);
  var estimatedInception = (milesperday * daysBtwnMaintSale) + recMileage;

  if (spot == 'both') {
    document.getElementById('msgDiv').style.opacity = 1;
    document.getElementById('msgDiv').innerHTML += "<b>The estimated inception mileage is " + estimatedInception + "</b><br>";
  } else if (spot == 'all') {
    document.getElementById('splitL').style.display = "inline-block";
    document.getElementById('splitR').style.display = "inline-block";
    document.getElementById('msgDiv').innerHTML += "<b>The estimated inception mileage is " + estimatedInception + "</b><br>";
  } else {
    outputDiv2.classList.toggle("arise");
    outputDiv2.style.height = "700px";
    document.getElementById('outputDiv3').innerHTML += "<b>The estimated inception mileage is " + estimatedInception + "</b><br>";
  }
}

function noteOutput(z, EIC, waitPeriod, HMPD, mileDis) {
  var msgDiv = document.getElementById('msgDiv');
  var outputDiv3 = document.getElementById('outputDiv3'); 
  var splitL = document.getElementById('splitL');
  var whereOut;
  if (z == '1') {
    whereOut = outputDiv3;
  } else if (z == '2') {
    whereOut = msgDiv;
  } else if (z == '3') {
    whereOut = splitL;
  }
  const objectArr = JSON.parse(localStorage.getItem("objectArr"));
  for (i = 0; i < objectArr.length; i++) {
    if (i != 0) { whereOut.innerHTML += "<br>"; }
    whereOut.innerHTML += "Date: " + objectArr[i].date;
    if (objectArr[i].isInception) {
      whereOut.innerHTML += " Inception<br>";
    } else if (objectArr[i].isService) {
      whereOut.innerHTML += " Claim<br>";
    } else {
      whereOut.innerHTML += "<br>";
    }
    whereOut.innerHTML += "Mileage: " + objectArr[i].mileage + "<br>";
    if (objectArr[i].notes == null) { objectArr[i].notes = "None"; }
    whereOut.innerHTML += "Notes: " + objectArr[i].notes + "<br>";
  }
  whereOut.innerHTML += "<br>";
  if (EIC) { 
    whereOut.innerHTML += "This contract is early into coverage.<br>";
  }
  if (waitPeriod) { 
    whereOut.innerHTML += "This Claim date is in the waiting period.<br>";
  }
  if (HMPD) { 
    whereOut.innerHTML += "This vehicle exhibited HMPD.<br>";
  }
  if (mileDis) { 
    whereOut.innerHTML += "There is a mileage discrepancy within the records.<br>";
  }
  whereOut.innerHTML += "<br>";
  hideTable();
  if (z == '1') {
    outputDiv2.classList.toggle("arise");
    outputDiv2.style.height = "700px";
  } else if (z == '2') {
    whereOut.style.opacity = '1';
  }
  if (z == '3') {
    document.getElementById('outputDiv').style.top = "25px";
    document.getElementById('outputDiv').style.left = "25px";
    document.getElementById('outputDiv').style.height = "90%";
    document.getElementById('outputDiv').style.width = "90%";
  }
}

function displayOutput() {
  hideTable();
  var outputDiv = document.getElementById('outputDiv'); 
  outputDiv.classList.add("arise");
  outputDiv.style.height = "700px";
}

function closeOutput() {
  document.getElementById('splitL').innerHTML = "";
  document.getElementById('splitR').innerHTML = "";
  document.getElementById('msgDiv').innerHTML = "";
  document.getElementById('alertDiv').innerHTML = "";
  document.getElementById('msgDiv').style.opacity = 0;
  var outputDiv = document.getElementById('outputDiv'); 
  outputDiv.classList.remove("arise");
  outputDiv.style.height = "0px";
  outputDiv.style.width = "800px";
  outputDiv.style.top = "130px";
  outputDiv.style.left = "50px";
  showTable();
}

function closeOutput2() {
  var outputDiv2 = document.getElementById('outputDiv2'); 
  outputDiv3.innerHTML = "";
  outputDiv2.classList.remove("arise");
  outputDiv2.style.height = "0px";
  showTable();
}

function resetReport() {
  document.getElementById('trackerMsg').innerText = "";
  document.getElementById('trackerMini').innerText = "";
  document.getElementById('splitL').innerHTML = "";
  document.getElementById('splitR').innerHTML = "";
  var addLineCount = localStorage.getItem("addLineCount");
  var LineCount = parseInt(addLineCount);
  var inputElems = document.querySelectorAll(".tracker");
  var elemArr = Array.from(inputElems);
  for (i = 0; i < elemArr.length; i++) {
    if(elemArr[i].value != null) {
      if(elemArr[i].checked) {
        elemArr[i].checked = false;
      } else {
        elemArr[i].value = "";
      }
    }
  }
  for (; LineCount > 0; LineCount--) {
    var rowId = "recTab" + LineCount;
    document.getElementById(rowId).style.visibility = "hidden";
  }
  const recordArr = JSON.parse(localStorage.getItem("recordArr"));
  for (i = 0; i < recordArr.length; i++) {
    var recName = recordArr[i];
    localStorage.removeItem(recName + "spot");
  }
  localStorage.removeItem("serdate");
  localStorage.removeItem("sermileage");
  localStorage.removeItem("IDforCor");
  localStorage.removeItem("InceptionMiles");
  localStorage.removeItem("InceptionDate");
  localStorage.removeItem("incNote");
  localStorage.removeItem("serNote");
  for (i = 0; i < 6; i++) {
    var elemId = "rec" + i.toString;
    localStorage.removeItem(elemId + "Note");
  }
  const blankArr = [];
  localStorage.setItem("objectArr", JSON.stringify(blankArr));
  localStorage.setItem("recordArr", JSON.stringify(blankArr));
  localStorage.setItem("addLineCount", "0");
  localStorage.setItem("savedRecs", "0");
  setDate();
}
//                                                                         AUTH GUIDE

function goGuide(option,name) {
  var usedBtn = document.getElementsByName(name);
  for (i = 0; i < usedBtn.length; i++) {
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
    const textNode43 = document.createTextNode("Auth MSRP. CH will have OOPC.");
    var div = document.getElementById("authGuideOE");
    pElem43.appendChild(textNode43);
    div.appendChild(pElem43);
    break;
  case "mayship3":
    const pElem8 = document.createElement("p");
    pElem8.classList.add("bodyTab2");
    const textNode8 = document.createTextNode("Ship part with permision from CH.");
    var div = document.getElementById("rfovrmsrp");
    pElem8.appendChild(textNode8);
    div.appendChild(pElem8);
    break;
  case "rfundmsrp":
    const pElem9 = document.createElement("p");
    pElem9.classList.add("bodyTab2");
    const textNode9 = document.createTextNode("Auth MSRP.");
    var div = document.getElementById("authGuideOE");
    pElem9.appendChild(textNode9);
    div.appendChild(pElem9);
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
    const textNode1 = document.createTextNode("Auth RF price as its MCE");
    var div = document.getElementById("listUnder");
    pElem1.appendChild(textNode1);
    div.appendChild(pElem1);
    break;
  case "mayship":
    const pElem2 = document.createElement("p");
    pElem2.classList.add("bodyTab2");
    const textNode2 = document.createTextNode("Ship part with permision from CH.");
    var div = document.getElementById("rfovrlist");
    pElem2.appendChild(textNode2);
    div.appendChild(pElem2);
    break;
  case "noship":
    const pElem3 = document.createElement("p");
    pElem3.classList.add("bodyTab2");
    const textNode3 = document.createTextNode("Auth PA List under $250.00 and the remaining balance is OOPC.");
    var div = document.getElementById("rfovrlist");
    pElem3.appendChild(textNode3);
    div.appendChild(pElem3);
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
    const textNode4 = document.createTextNode("Auth RF price as its MCE.");
    var div = document.getElementById("costund");
    pElem4.appendChild(textNode4);
    div.appendChild(pElem4);
    break;
  case "rfovrcost":
    document.getElementById('rfovrcost').style.display = "inline-block";
    break;
  case "mayship2":
    const pElem5 = document.createElement("p");
    pElem5.classList.add("bodyTab2");
    const textNode5 = document.createTextNode("Ship part with permission from CH.");
    var div = document.getElementById("rfovrcost");
    pElem5.appendChild(textNode5);
    div.appendChild(pElem5);
    break;
  case "noship2":
    const pElem6 = document.createElement("p");
    pElem6.classList.add("bodyTab2");
    const textNode6 = document.createTextNode("Auth PA Cost under $250.00 and the remaining balance is OOP.");
    var div = document.getElementById("rfovrcost");
    pElem6.appendChild(textNode6);
    div.appendChild(pElem6);
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
  var isTerm = document.getElementById('md1').checked;
  var isM2m = document.getElementById('md2').checked;
  var over90 = document.getElementById('md3').checked;
  var under90 = document.getElementById('md4').checked;
  var negMile = document.getElementById('md5').checked;
  var inaccMile = document.getElementById('md6').checked;
  var rollBack = document.getElementById('md7').checked;
  var hasHmpd = document.getElementById('md8').checked;
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
  for (i = 0; i < mileRadios.length; i++) {
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
  for (i = 0; i < radioBtns.length; i++) {
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
  var answerDivID = "ansto" + questID;
  var answerDiv = document.getElementById(answerDivID);
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
//                                                                       LABOR RATE SCRIPT

function openScript() {
  var laborscriptDiv = document.getElementById("laborscriptDiv");
  var isOpen = checkOpen();
  if (laborscriptDiv.style.display == "none" && !isOpen) {
    laborscriptDiv.style.display = "block";
    document.getElementById("mySidenav").classList.remove("open_nav");
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
  var askingstr = document.getElementById("asking").value;
  var currentstr = document.getElementById("current").value;
  var asking = parseInt(askingstr);
  var current = parseInt(currentstr);
  if (current < 1) { current = asking; }
  var radius = document.getElementById("radius").value;
  var type = document.getElementById("type").value;
  var quant = document.getElementById("quant").value;
  var aveRate = document.getElementById("aveRate").value;
  var custom = document.getElementById("custom").value;
  localStorage.setItem("asking", asking);
  localStorage.setItem("radius", radius);
  localStorage.setItem("type", type);
  localStorage.setItem("quant", quant);
  localStorage.setItem("aveRate", aveRate);
  localStorage.setItem("current", current);
  localStorage.setItem("custom", custom);
}

function laborScript() {
  var radius = document.getElementById("radius").value;
  var type = document.getElementById("type").value;
  var quant = document.getElementById("quant").value;
  if (radius == "" || type == "" || quant == "") { return; }
  var askingstr = document.getElementById("asking").value;
  var aveRate = document.getElementById("aveRate").value;
  var currentstr = document.getElementById("current").value;
  var current = parseInt(currentstr);
  var asking = parseInt(askingstr);
  if (current < 1) { current = asking; }
  var whatDo = laborReview(asking, current, aveRate);
  document.getElementById("myScript").style.display = "none";
  document.getElementById("responseDiv").style.display = "block";
  localStorage.setItem("weTried", "notYet");
  if (whatDo == "allow") {
    document.getElementById("responseDiv_text").innerHTML = "Your Response is:<br>I have updated your repair facility profile and set the labor rate at that amount.";
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
  var askingElem = document.getElementById("asking");
  var asking = sanitizeInput(document.getElementById("asking").value);
  var aveRateElem = document.getElementById("aveRate");
  var aveRate =  sanitizeInput(document.getElementById("aveRate").value);
  var currentElem = document.getElementById("current");
  var current =  sanitizeInput(document.getElementById("current").value);
  var responseDiv_text = document.getElementById("responseDiv_text");
  var responseDiv = document.getElementById("responseDiv");
  document.getElementById("noScript").style.display = "initial";
  document.getElementById("yesScript").style.display = "initial";
  var whatDo = laborReview(asking, current, aveRate);
  var tryHarder = localStorage.getItem("weTried");
  if (x == 'y') {
    var agreed; 
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
    var customstr = document.getElementById("custom").value;
    var custom = parseInt(customstr);
    if (custom < 1) { return; }
    responseDiv_text.innerHTML = "Your Response is:<br>Thank you. I have updated your repair facility profile and set the labor rate at $" + custom + ".";
    document.getElementById("noScript").style.display = "none";
    document.getElementById("yesScript").style.display = "none";
    buildLaborNote('custom');
    return;
  }
  if (x == 'n' &&  tryHarder == "notYet") {
    var pleaseD = (parseInt(asking) + parseInt(aveRate)) / 2;
    var please = pleaseD.toFixed(2);
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
  var asking = parseInt(askingStr);
  var current = parseInt(currentStr);
  var average = parseInt(averageStr);
  if (current == 0) {
    current = asking;
  }
  var normal = "normal";
  var alt = "alt";
  var allow = "allow";
  var diffInRate = asking - current;
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
  var textarea = document.getElementById("textarea5");
  var please = localStorage.getItem("weTried");
  var asking = localStorage.getItem("asking");
  var radius = localStorage.getItem("radius");
  var type = localStorage.getItem("type");
  var quant = localStorage.getItem("quant");
  var aveRate = localStorage.getItem("aveRate");
  var current = localStorage.getItem("current");
  var custom = localStorage.getItem("custom");

  textarea.value = "Search Parameters:\rRadius: " + radius + "\rFacility Type: " + type + "\rNumber of Facilities: " + quant + "\r\r";
  textarea.value += "Average Labor Rate: $" + aveRate;
  if (asking != current) {
    textarea.value += "\rRepair Facility Previous Labor Rate: $" + current;
  }
  textarea.value += "\rRepair Facility Posted Labor Rate: $" + asking;
  if (result == "underAve") {
    textarea.value += "\r\rThe Repair Facility posted labor rate is under the average labor rate for comparable shops in the vicinity."
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + asking;
  }
  if (result == "declined") {
    textarea.value += "\r\rThe Repair Facility is unwilling to negotiate the labor rate."
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + asking;
  }
  if (result == "atAve") {
    textarea.value += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed to the average rate for the area."
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + aveRate;
  }
  if (result == "halfway") {
    textarea.value += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed on midway between average and asking."
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + please;
  }
  if (result == "custom") {
    textarea.value += "\r\rThe Repair Facility is willing to negotiate.\rThey made an offer under the current posted labor rate which we accepted";
    textarea.value += "\rUpdated Repair Facility labor rate at: $" + custom;
  }
  textarea.select();
  document.execCommand("copy");
}
function closePDFmenu() {
  document.getElementById("navtag").style.display = "initial";
  document.getElementById("sopnav").classList.remove("open_sop");
  document.getElementById("sopnav2").classList.remove("open_sop");
  document.getElementById("sopnav3").classList.remove("open_sop");
}

function openSOPnav() {
  document.getElementById("navtag").style.display = "none";
  document.getElementById("sopnav").classList.add("open_sop");
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
    "./SOP/Info/State_Tax.pdf"
        ];
  console.log(sources);
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











