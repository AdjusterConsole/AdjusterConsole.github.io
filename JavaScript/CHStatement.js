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