function tutorial() {
  if (menuOpen) { MENU(); }
  localStorage.setItem("pageNum", "0");
  document.getElementById("myNav0").style.width = "100%";
}

function swapClassNav1a(page,mod) {
  var id = "nav1in" + page;
  var elem = document.getElementById(id);
  elem.style.display = "inherit";
  var pagenum = parseInt(page) + 1;
  localStorage.setItem("pageNum", pagenum);
}

function nextNav(inner) {
  var pageStr = localStorage.getItem("pageNum");
  if (inner == "myNav1") {
    switch(pageStr) {
  case "0":
    document.getElementById("myNav0").style.display = "none";
    document.getElementById("myNav1").style.width = "100%";
    saveIndex("areaOne");
    document.getElementById("textarea1").value = "CONTACT:  The RF service advisor name.\rPAYMENT:  Where RF payment will be sent.\rZIPCODE:  The RF zip code.\rMILEAGE:  Current CH mileage\rDISTANCE:  CH miles in coverage.\rTIME:  CH days in coverage";
    swapClassNav1a(pageStr);
    break;   
  case "1":
    saveIndex("ITSBRITTNEY");
    swapClassNav1a(pageStr);
    break;
  case "2":
    AnotherOne();
    AnotherOne();
    AnotherOne();
    document.getElementById("partname3").value = "Blower Motor";
    document.getElementById("partname2").value = "Starter";
    document.getElementById("partname1").value = "Window Motor";
    swapClassNav1a(pageStr);
    break;
  case "3":
    saveIndex("textarea2");
    document.getElementById("rfprice").value = "199.99";
    document.getElementById("partnum").value = "123456";
    FormToTA();
    swapClassNav1a(pageStr);
    break;
  case "4":
    document.getElementById("msrp").value = "199.99";
    FormToTA();
    swapClassNav1a(pageStr);
    break;
  case "5":
    document.getElementById("textarea2").value = "";
    document.getElementById("msrp").value = "279.99";
   FormToTA();
    swapClassNav1a(pageStr);
    break;
  case "6":
    SENDLABOR1();
    SENDDIAG1();
    swapClassNav1a(pageStr);
    break;
  case "7":
    NextPart();
    swapClassNav1a(pageStr);
    break;
  case "8":
    saveIndex("hlc");
    recallIndex("ITSBRITTNEY");
    document.getElementById("nav1in0").style.display = "inherit";
    document.getElementById("nav1in0").style.visibility = "hidden";
    document.getElementById("nav1in1").style.display = "none";
    document.getElementById("nav1in2").style.display = "none";
    document.getElementById("nav1in3").style.display = "none";
    document.getElementById("nav1in4").style.display = "none";
    document.getElementById("nav1in5").style.display = "none";
    document.getElementById("nav1in6").style.display = "none";
    document.getElementById("nav1in7").style.display = "none";
    swapClassNav1a(pageStr);
    break; 
  case "9":
    RESET();
    document.getElementById("div6").style.zIndex = 10000;
    swapClassNav1a(pageStr);
    break;
  case "10":
    recallIndex("areaOne");
    recallIndex("hlc");
    recallIndex("textarea2");
    document.getElementById("myNav0").style.display = "initial";
    document.getElementById("myNav0").style.width = "100%";
    document.getElementById("myNav1").style.display = "none";
    localStorage.setItem("pageNum", "0");
    }
  }
  if (inner == "myNav2") {
    switch(pageStr) {
  case "0":
    myNav0 = document.getElementById("myNav0");
    myNav0.style.display = "none";
    document.getElementById("myNav2").style.width = "100%";
    saveIndex("newAuthstarter");
    swapClassNav2(pageStr);
    break;
  case "1":
    recallIndex("newAuthstarter");
    showAuth();
    document.getElementById("auth4").checked = true;
    saveIndex("newAuthstyle");
    swapClassNav2(pageStr);
    break;
  case "2":
    moveAuth();
    document.getElementById("auth7").checked = true;
    swapClassNav2(pageStr);
    break;
  case "3":
    moveAuth2();
    document.getElementById("auth10").checked = true;
    document.getElementById("auth18").checked = true;
    swapClassNav2(pageStr);
    break;
  case "4":
    showOOPopt();
    document.getElementById("auth14").checked = true;
    document.getElementById("auth17").value = "159.34";
    swapClassNav2(pageStr);
    break;
  case "5":
    document.getElementById("textarea1").value = "CONTACT:\rPAYMENT: some_Guy@shop-email.com\rZIPCODE:\rMILEAGE:\rDISTANCE:\rTIME:";
    newAuth();
    recallIndex("newAuthstyle");
    saveIndex("textarea2");
    swapClassNav2(pageStr);
    document.getElementById("textarea1").value = "CONTACT:\rPAYMENT:\rZIPCODE:\rMILEAGE:\rDISTANCE:\rTIME:";
    break;
  case "6":
    recallIndex("textarea2");
    RESET();
    saveIndex("statusNote");
    swapClassNav2(pageStr);
    break;
  case "7":
    recallIndex("statusNote");
    document.getElementById("statNote").style.display = "inline-block";
    saveIndex("statNote");
    document.getElementById("yes1a").checked = true;
    document.getElementById("stat1explain").value = "12 months srs from CH";
    document.getElementById("yes2a").checked = true;
    document.getElementById("stat3explain").value = "Review srs to determine prex. Make claim decision";
    document.getElementById("no4a").checked = true;
    swapClassNav2(pageStr);
    break;
  case "8":
    cancelStat();
    recallIndex("statNote");
    document.getElementById("statNote").style.display = "none";
    saveIndex("textarea2");
    saveIndex("picR");
    saveIndex("recR");
    saveIndex("noansR");
    saveIndex("R7");
    saveIndex("R6");
    swapClassNav2(pageStr);
    break;
  case "9":
    saveIndex("T0");
    ShowTemps();
    saveIndex("TPDiv");
    recallIndex("picR");
    recallIndex("recR");
    recallIndex("noansR");
    recallIndex("R7");
    recallIndex("R6");
    recallIndex("textarea2");
    swapClassNav2(pageStr);
    break;
  case "10":
    recallIndex("T0");
    recallIndex("TPDiv");
    document.getElementById("TPDiv").style.display = "none";
    document.getElementById("transferTemplate").style.display = "inline-block";
    saveIndex("transferTemplate");
    document.getElementById("textarea2").style.zIndex = 16;
    document.getElementById("yes1").checked = true;
    document.getElementById("no2").checked = true;
    document.getElementById("yes3").checked = true;
    document.getElementById("no4").checked = true;
    document.getElementById("yes5").checked = true;
    document.getElementById("yes6").checked = true;
    document.getElementById("yes7").checked = true;
    document.getElementById("email").checked = true;
    document.getElementById("contact1").value = "Guy Shopworker";
    document.getElementById("contact2").value = "some_Guy@shop-email.com";
    document.getElementById("yes9").checked = true;
    document.getElementById("yes10").checked = true;
    document.getElementById("no11").checked = true;
    swapClassNav2(pageStr);
    break;
  case "11":
    RESET();
    saveIndex("transferTemplate");
    document.getElementById("textarea2").style.zIndex = 5;
    saveIndex("snipbox");
    swapClassNav2(pageStr);
    break;
  case "12":
    recallIndex("transferTemplate");
    RESET();
    saveIndex("TGAFBTN");
    document.getElementById("TGAFOBTN").style.display = "inline-block";
    document.getElementById("TGAFSBTN").style.display = "inline-block";
    document.getElementById("TGAFBBTN").style.display = "inline-block";
    swapClassNav2(pageStr);
    break;
  case "13":
    document.getElementById("nav2in12").innerText += " OOPC and shipping";
    document.getElementById("TGAFOBTN").style.display = "none";
    document.getElementById("TGAFSBTN").style.display = "none";
    document.getElementById("TGAFBBTN").style.display = "none";
    document.getElementById("TGAFOSABTN").style.display = "inline-block";
    document.getElementById("TGAFOSDSBTN").style.display = "inline-block";
    document.getElementById("TGAFOSDBBTN").style.display = "inline-block";
    document.getElementById("TGAFOSCBTN").style.display = "inline-block";
    document.getElementById("NALVM").style.display = "inline-block";
    document.getElementById("NANVM").style.display = "inline-block";
    document.getElementById("NANVM").style.left = "400px";
    document.getElementById("NALVM").style.left = "400px";
    swapClassNav13(pageStr);
    break;
  case "14":
    document.getElementById("nav2in12").innerText += " and the CH approved both,\rthe note is built and copied for you.";
    document.getElementById("TGAFOSABTN").style.display = "none";
    document.getElementById("TGAFOSDSBTN").style.display = "none";
    document.getElementById("TGAFOSDBBTN").style.display = "none";
    document.getElementById("TGAFOSCBTN").style.display = "none";
    document.getElementById("NALVM").style.display = "none";
    document.getElementById("NANVM").style.display = "none";
    document.getElementById("Snippings").style.display = "inline-block";
    document.getElementById("Snippings").value = "Called CH to get auth for OOPC and shipping.\rCH approved OOPC and shipping.\rWill call RF to inform and order parts.\r";
    let textarea = document.getElementById("Snippings");
    textarea.select();
    document.execCommand("copy");
    swapClassNav13(pageStr);
    break;
  case "15":
    document.getElementById("NANVM").style.left = "270px";
    document.getElementById("NALVM").style.left = "270px";
    document.getElementById("TGAFOSABTN").style.display = "none";
    document.getElementById("TGAFOSDSBTN").style.display = "none";
    document.getElementById("TGAFOSDBBTN").style.display = "none";
    document.getElementById("TGAFOSCBTN").style.display = "none";
    document.getElementById("NALVM").style.display = "none";
    document.getElementById("NANVM").style.display = "none";
    swapClassNav2(pageStr);
    break;
  case "16":
    RESETNOTE();
    console.log("here");
    recallIndex("snipbox");
    recallIndex("TGAFBTN");
    document.getElementById("myNav2").style.display = "none";
    document.getElementById("myNav0").style.display = "inherit";
    document.getElementById("myNav0").style.width = "100%";
    localStorage.setItem("pageNum", "0");
    break;
    }
  }
  if (inner == "myNav3") {
    switch(pageStr) {
  case "0":
    document.getElementById("myNav0").style.display = "none";
    document.getElementById("myNav3").style.width = "100%";
    swapClassNav3(pageStr);
    break;
  case "1":
    localStorage.setItem("lastCalled", "picR");
    editDisplay();
    saveIndex("disEdit");
    swapClassNav3(pageStr);
    break;
  case "2":
    recallIndex("disEdit");
    document.getElementById("disEdit").style.display = "none";
    localStorage.setItem("lastCalled", "picR");
    editContent();
    saveIndex("contEdit");
    swapClassNav3(pageStr);
    break;
  case "3":
    cancelCont();
    recallIndex("contEdit");
    localStorage.setItem("lastCalled", "picR");
    editSize();
    saveIndex("sizeEdit");
    swapClassNav3(pageStr);
    break;  
  case "4":
    sizeSubmit();
    recallIndex("sizeEdit");
    localStorage.setItem("lastCalled", "picR");
    editPos();
    saveIndex("posEdit");
    swapClassNav3(pageStr);
    break;
  case "5":
    posSubmit('s');
    recallIndex("sizeEdit");
    showCustom();
    saveIndex("infoDiv1");
    swapClassNav3(pageStr);
    break;
  case "6":
    swapClassNav3(pageStr);
    break;
  case "7":
    infoDone();
    saveIndex("infoDiv2");
    swapClassNav3(pageStr);
    break;
  case "8":
    infoCancel2();
    recallIndex("infoDiv1");
    recallIndex("infoDiv2");
    BuilderShow();
    saveIndex("toggleMaster");
    swapClassNav3(pageStr);
    break;
  case "9":
    BuilderShow();
    recallIndex("toggleMaster");
    swapClassNav3(pageStr);
    break;
  case "10":
    personalize();
    saveIndex("appearDiv")
    swapClassNav3(pageStr);
    break;
  case "11":
    recallIndex("appearDiv")
    exitColor();
    document.getElementById("myNav0").style.display = "inherit";
    document.getElementById("myNav1").style.display = "0%";
    document.getElementById("myNav2").style.display = "0%";
    document.getElementById("myNav3").style.width = "0%";
    localStorage.setItem("pageNum", "0");
    break;
    }
  }
}

function swapClassNav3(page) {
  if (page != "0") {
    var prevPage = parseInt(page) - 1;
    var previd = "nav3in" + prevPage;
    var prevelem = document.getElementById(previd);
    prevelem.style.display = "none";
  }
  var id = "nav3in" + page;
  var elem = document.getElementById(id);
  elem.style.display = "inherit";
  if (page == "7") {
    document.getElementById("nav3in7a").style.display = "inherit";
  }
  var pagenum = parseInt(page) + 1;
  localStorage.setItem("pageNum", pagenum);
}

function swapClassNav13(page) {
  var pagenum = parseInt(page) + 1;
  localStorage.setItem("pageNum", pagenum);
}

function swapClassNav2(page) {
  if (page == "15") {
  document.getElementById("nav2in12").style.display = "none";
  document.getElementById("nav2in15").style.display = "inherit";
  var pagenum = parseInt(page) + 1;
  localStorage.setItem("pageNum", pagenum);
  return;
  }
  if (page != "0") {
    var prevPage = parseInt(page) - 1;
    var previd = "nav2in" + prevPage;
    var prevelem = document.getElementById(previd);
    prevelem.style.display = "none";
  }
  var id = "nav2in" + page;
  var elem = document.getElementById(id);
  elem.style.display = "inherit";
  var pagenum = parseInt(page) + 1;
  localStorage.setItem("pageNum", pagenum);
}

function saveIndex(elementID) {
  var element = document.getElementById(elementID);
  var x = window.getComputedStyle(element).zIndex;
  if (!Number.isInteger(x)) {
    x = 5;
  }
  localStorage.setItem(elementID + "saveIndex", x);
  element.style.zIndex = 110;
}

function recallIndex(elementID) {
  var element = document.getElementById(elementID);
  var previndexNum = localStorage.getItem(elementID + "saveIndex");
  element.style.zIndex = previndexNum;
  localStorage.removeItem(elementID + "saveIndex");
}

function closeNav() {
  location.reload();
}
