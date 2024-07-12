document.addEventListener('keyup', function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'P') {
    let mode = localStorage.getItem("mode");
    if (mode === '2') {
      localStorage.setItem('mode', '1');
      modePT();
    } else {
      localStorage.setItem('mode', '2');
      modePT();
    }
  }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'L') {
    window.location.href = 'https://theadjusterconsole.github.io/';
  }
  if (e.key === 'Escape') {
    whiteRabbit();
  }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'A') {
    autoEnable();
  }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'M') {
    downloadAndProcessLatestFile();
  }
});

//document.addEventListener('contextmenu', function(e) {
//  e.preventDefault();
//  openNav();
//});

function autoEnable() {
  document.getElementById("ITSBRITTNEY").classList.toggle('hide');
  document.getElementById("fileUploaderDiv").classList.toggle('hideFile');
  document.getElementById("snipbox").classList.toggle('hide');
}

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

function whiteRabbit() {
  closeResource2();
  closeResource();
  setZero();
  openScript('close');
  cancelState();
  cancel_auth();
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