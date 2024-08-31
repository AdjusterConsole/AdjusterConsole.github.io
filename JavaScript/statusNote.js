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
