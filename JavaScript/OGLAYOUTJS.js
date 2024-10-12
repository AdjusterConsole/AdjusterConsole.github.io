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

function removeBlankLines(text) { 
   return text.replace(/^\s*$/gm, ''); 
}

function checkOpen() {
  if (!document.getElementById("fileUploaderDiv").classList.contains('slideFilein')) return true;
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
    document.getElementById("resrcDiv"),
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
  const ptcon = document.getElementById("ptcon");
  const tutorials = document.getElementById("tutorials");
  const menuOpen = localStorage.getItem("menuOpen");

  if (menuOpen === 'false') {
    theMenu.innerText = "\u2666 Close \u2666";
    appearance.style.top = "45px";
    appearance.style.opacity = '1';
    BtnBuilder.style.top = "70px";
    BtnBuilder.style.opacity = '1';
    ptcon.style.top = "95px";
    ptcon.style.opacity = '1';
	tutorials.style.top = "120px";
    tutorials.style.opacity = '1';
    localStorage.setItem("menuOpen", "true");
    return;
  } else if (menuOpen === 'true') {
    BtnBuilder.style.top = "20px";
    BtnBuilder.style.opacity = '0';
    appearance.style.top = "20px";
    appearance.style.opacity = '0';
    ptcon.style.top = "20px";
    ptcon.style.opacity = '0';
	tutorials.style.top = "20px";
    tutorials.style.opacity = '0';
    theMenu.innerText = "\u2666 Settings \u2666";
    localStorage.setItem("menuOpen", "false");
    return;
  }
  localStorage.setItem("menuOpen", "false");
  MENU();
}

function uncheck_All() {
  const butswapBtns1 = document.getElementsByClassName('butswap');
  const butswapBtns = Array.from(butswapBtns1);
  if(butswapBtns) {
    for (i = 0; i < butswapBtns.length; i++) {
      butswapBtns[i].classList.remove('butswap');
      butswapBtns[i].innerHTML = 'Add';
    }
  }
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
  var splashImage = document.getElementById('splashImage');
  setTimeout(function() {
    splashImage.classList.add("exit-effect");
  }, 1000);
  splashImage.addEventListener('transitionend', function() {
    document.body.removeChild(splashImage);
  });
  const agreed = localStorage.getItem('agreed');
  if (agreed !== 'agreed') {
    showDisclaimer();
  }
  setStorage();
  const customIDs = JSON.parse(localStorage.getItem('customIDs')) || [];
  customIDs.forEach(buttonID => {
    createButtonElement(buttonID);
  });
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
  resetColors();
  trackerBlank();
  
  let mode = localStorage.getItem("mode");
  if (!mode) {
	localStorage.setItem('mode', '2');
    mode = '2';
  }
  modePT();
}

function setStorage() {
  localStorage.setItem("viewNum", "normal");
  localStorage.setItem("menuOpen", "false");
  localStorage.setItem("newpartcount","2");
  localStorage.setItem("menuState", 0);
  localStorage.setItem("colorState", 0);
  localStorage.setItem("pageNum", "0");
  localStorage.removeItem('Diag');
  localStorage.setItem("countLefts", '0');
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

function showInstructions() {
  document.getElementById('helpDiv').classList.add('show');
  
}

function closeHelp() {
    document.querySelectorAll('.helpPage, #helpDiv').forEach(element => {
        element.classList.remove('show');
    });
    const page1 = document.getElementById('page1');
    if (page1) {
        page1.classList.add('show');
    }
}

function helpNext() {
	const helpPages = document.querySelectorAll('.helpPage');
    const currentPage = Array.from(helpPages).find(page => page.classList.contains('show'));
    if (currentPage) {
        const currentId = currentPage.id;
        currentPage.classList.remove('show');
        currentPage.classList.add('hide');
        const lastChar = currentId.slice(-1);
        const nextPageNum = parseInt(lastChar) + 1;
        const nextId = 'page' + nextPageNum;
        const nextPage = document.getElementById(nextId);
        if (nextPage) {
            nextPage.classList.remove('hide');
            nextPage.classList.add('show');
            document.getElementById("helpPrev").disabled = false;
            if (!document.getElementById(`page${nextPageNum + 1}`)) {
                document.getElementById("helpNext").disabled = true;
            }
        }
    }
}

function helpPrev() {
	const helpPages = document.querySelectorAll('.helpPage');
    const currentPage = Array.from(helpPages).find(page => page.classList.contains('show'));
    if (currentPage) {
        const currentId = currentPage.id;
        currentPage.classList.remove('show');
        currentPage.classList.add('hide');
        const lastChar = currentId.slice(-1);
        const prevPageNum = parseInt(lastChar) - 1;
        if (prevPageNum >= 1) {
            const prevId = 'page' + prevPageNum;
            const prevPage = document.getElementById(prevId);

            if (prevPage) {
                prevPage.classList.remove('hide');
                prevPage.classList.add('show');
                document.getElementById("helpNext").disabled = false;
                if (prevPageNum === 1) {
                    document.getElementById("helpPrev").disabled = true;
                }
            }
        }
    }
}