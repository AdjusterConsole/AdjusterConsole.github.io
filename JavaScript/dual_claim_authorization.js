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

document.getElementById("newAuthstarter").addEventListener('click', function(e) {
    if (document.getElementById("newauthSelect").checked) {
      auth_run('new');
    } else {
      auth_run('old');
    }
});

function check_Ready() {
  const new_partsboxes = ['nauth1', 'nauth2', 'nauth3', 'nauth4', 'nauth5'];
  const old_partsboxes = ['auth1', 'auth2', 'auth3', 'auth4', 'auth5'];
  const new_oop = document.getElementById('nauth10').checked;
  const old_oop = document.getElementById('auth10').checked;
  const new_both = document.getElementById('nauth12').checked;
  const old_both = document.getElementById('auth12').checked;
  const new_oop_known = document.getElementById('nauth21').checked;
  const old_oop_known = document.getElementById('auth21').checked;
  const new_oop_amt = document.getElementById('nauth20').value;
  const old_oop_amt = document.getElementById('auth20').value;
  let check_Parts = false;
  if (document.getElementById("newauthSelect").checked) {
    new_partsboxes.forEach(id => {
      if (document.getElementById(id).checked) {
        check_Parts = true;
      }
    });
    if (new_oop || new_both) {
      if (!new_oop_known && new_oop_amt === '') {
        alert('Enter OOPC amount or declare unknown.');
        return false;
      }
    } 
  }
  if (!document.getElementById("newauthSelect").checked) {
    old_partsboxes.forEach(id => {
      if (document.getElementById(id).checked) {
        check_Parts = true;
      }
    });
    if (old_oop || old_both) {
      if (!old_oop_known && old_oop_amt === '') {
        alert('Enter OOPC amount or declare unknown.');
        return false;
      }
    } 
  }
  if (!check_Parts) { 
    if (!confirm('No part options selected. Continue?')) { return false; }
  }
 return true;
}

function auth_run(version) {
  if (!checkOpen()) {
    if (version === 'new') {
      document.getElementById('auth_module').classList.add('show');
    } else if (version === 'old') {
      document.getElementById("newAuthstyle").style.display = "inline-block";
    }
  resetChecks();
  }
}

function resetChecks() {
  const checkboxes = ['auth9', 'auth13', 'auth16', 'auth23', 'nauth9', 'nauth13', 'nauth16', 'nauth23' ];
  checkboxes.forEach(id => {
    document.getElementById(id).checked = true;
  });
}

function saveAuth() {
  const newauthSelect = document.getElementById("newauthSelect").checked;
  if (newauthSelect) { 
    localStorage.setItem('authMode', 'newAuth');
  }
  if (!newauthSelect) { 
    localStorage.setItem('authMode', 'oldAuth');
  }
}



function cancel_auth() {
    uncheck_All();
    document.getElementById('nauth20').value = '';
    document.getElementById('auth20').value = '';
    document.getElementById('oopc_option').style.opacity = "0";
    document.getElementById('nauth9').checked = true;
    document.getElementById('nauth16').checked = true;
    document.getElementById('nauth13').checked = true;
    document.getElementById('auth9').checked = true;
    document.getElementById('auth16').checked = true;
    document.getElementById('auth13').checked = true;
    document.getElementById("authParts").style.display = "inline-block";
    setButtonDisplay([ 'OOPoptDiv', 'newAuthstyle', 'authOopcs', 'authRequests' ], "none");
    if (document.getElementById('auth_module').classList.contains('show')){
       document.getElementById('auth_module').classList.remove('show');
    }
}

function concerned(x) {
  if (x === 'n') {
    document.getElementById('nauth6').checked = false;
    document.getElementById('nauth7').checked = false;
    document.getElementById('nauth8').checked = false;
    document.getElementById('auth6').checked = false;
    document.getElementById('auth7').checked = false;
    document.getElementById('auth8').checked = false;
    return;
  }
  if (x === 'y') {
    document.getElementById('nauth9').checked = false;
    document.getElementById('auth9').checked = false;
    return;
  }
  if (x === 'd') {
    document.getElementById('nauth16').checked = false;
    document.getElementById('auth16').checked = false;
    return;
  }
  if (x === 'c') {
    document.getElementById('nauth14').checked = false;
    document.getElementById('nauth15').checked = false;
    document.getElementById('auth14').checked = false;
    document.getElementById('auth15').checked = false;
    return;
  }
}

function moveAuth2() {
  document.getElementById("authRequests").style.display = "none";
  document.getElementById("authOopcs").style.display = "inline-block";
}

function moveAuth() {
  document.getElementById("authParts").style.display = "none";
  document.getElementById("authRequests").style.display = "inline-block";
}

function show_oopc_option(x) {
  if (x === 'n') {
    if (document.getElementById("newauthSelect").checked) {
      document.getElementById('oopc_option').style.opacity = "0";
      document.getElementById('oopc_option2').style.opacity = "0";
    } else {
      document.getElementById('OOPoptDiv').style.display = "none";
    }
  }
  if (x === 'y') {
     if (document.getElementById("newauthSelect").checked) {
       document.getElementById('oopc_option').style.opacity = "1";
       document.getElementById('oopc_option2').style.opacity = "1";
     } else {
      document.getElementById('OOPoptDiv').style.display = "inline-block";
    }
  }
}


function auth_initialize2() {
  if (!check_Ready()) { return; }
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

  const inspection = document.getElementById('auth6').checked;
  const photos = document.getElementById('auth7').checked;
  const records = document.getElementById('auth8').checked;
  const notNeeded = document.getElementById('auth9').checked;

  output += inspection ? auth3Note : '';
  output += photos ? auth4Note : '';
  output += '.\r' + auth5Note + auth6Note + auth7Note + auth8Note + contact_email + '.\r';

  const parts1 = document.getElementById('auth1').checked;
  const parts2 = document.getElementById('auth2').checked;
  const parts3 = document.getElementById('auth3').checked;
  const parts4 = document.getElementById('auth4').checked;
  const parts5 = document.getElementById('auth5').checked;

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

  const deductible = document.getElementsByName('authoopcs61o');
  for (const box of deductible) {
    if (box.checked) {
      if (box.value !== 'Void') {
        output += `The Contract Holder has a deductible of ${box.value}\r`;
      }
      break;
    }
  }

  const oopc = document.getElementById('auth10').checked;
  const shipping = document.getElementById('auth11').checked;
  const both = document.getElementById('auth12').checked;
  const none = document.getElementById('auth13').checked;
  const oopcamount1 = document.getElementById('auth20').value;
  const oopcamount = parseInt(oopcamount1);

  const noncovered = document.getElementById('auth14').checked;
  const denied = document.getElementById('auth15').checked;
  const neither = document.getElementById('auth16').checked;

  if (oopc || both) {
    const partoop = document.getElementById('auth17').checked;
    const laboroop = document.getElementById('auth18').checked;
    const bothoop = document.getElementById('auth19').checked;
    const amountUnknown = document.getElementById('auth21').checked;
    if (amountUnknown) {
      output += auth30Note
      output += shipping ? auth24Note : '';
    } else {
      output += oopcamount ? auth20Note + oopcamount.toFixed(2) : '';
      output += shipping ? auth22Note : auth21Note;
      output += auth23Note;
      if (bothoop) output += "parts and labor "
      if (partoop) output += "parts "
      if (laboroop) output += "labor "
      output += "and does NOT include the deductible.\r";
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

function auth_initialize() {
  if (!check_Ready()) { return; }
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

  const deductible = document.getElementsByName('authoopcs61');
  for (const box of deductible) {
    if (box.checked) {
      if (box.value !== 'Void') {
        output += `The Contract Holder has a deductible of ${box.value}\r`;
      }
      break;
    }
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
      output += oopcamount ? auth20Note + oopcamount.toFixed(2) : '';
      output += shipping ? auth22Note : auth21Note;
      output += auth23Note;
      if (bothoop) output += "parts and labor "
      if (partoop) output += "parts "
      if (laboroop) output += "labor "
      output += "and does NOT include the deductible.\r";
    }
    output += auth25Note;
  }
  if (!oopc && shipping) output += auth24Note + auth26Note + auth25Note;

  const auth27NoteA = auth26Note + auth27Note + contact_name + '.\r';
  output += none ? auth27NoteA : '';
  output += noncovered ? auth28Note : '';
  output += denied ? auth29Note : '';
  copy(output);
  cancel_auth('c');
}