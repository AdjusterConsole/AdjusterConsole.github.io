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
