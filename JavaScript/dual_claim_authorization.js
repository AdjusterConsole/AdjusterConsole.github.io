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
  const new_oop = document.getElementById('nauth9').checked;
  const old_oop = document.getElementById('auth9').checked;
  const new_both = document.getElementById('nauth11').checked;
  const old_both = document.getElementById('auth11').checked;
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
  document.getElementById('auth12').checked = true;
  document.getElementById('nauth12').checked = true;
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
  resetChecks();
  document.getElementById('auth20').value = '';
  document.getElementById('nauth20').value = '';

  document.getElementById('auth25').value = '$100.00';
  document.getElementById('nauth25').value = '$100.00';
  document.getElementById('oopc_option').style.opacity = "0";

  document.getElementById("authParts").style.display = "inline-block";
  setButtonDisplay([ 'OOPoptDiv', 'newAuthstyle', 'authOopcs', 'authRequests' ], "none");
  if (document.getElementById('auth_module').classList.contains('show')){
    document.getElementById('auth_module').classList.remove('show');
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
  if (x) {
    document.getElementById('oopc_option').style.opacity = "1";
    document.getElementById('oopc_option2').style.opacity = "1";
    document.getElementById('OOPoptDiv').style.display = "inline-block";
  } else {
    document.getElementById('oopc_option').style.opacity = "0";
    document.getElementById('oopc_option2').style.opacity = "0";
    document.getElementById('OOPoptDiv').style.display = "none";
  }
}


function auth_initialize(version) {
  if (!check_Ready()) { return; }
  
  const prefix = version === 2 ? 'n' : ''; 

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
  const auth17Note = "No records requested as history will not change claim decision.\r";
  const auth17aNote = "No prior related claims.\r";
  const auth17bNote = "No TSBs or recalls associated.\r";
  const auth17cNote = "No mileage or VIN concerns.\r";
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

  const inspection = document.getElementById(prefix + 'auth6').checked;
  const photos = document.getElementById(prefix + 'auth7').checked;
  const records = document.getElementById(prefix + 'auth8').checked;
  const stop17b = document.getElementById(prefix + 'auth15').checked;
  const stop17a = document.getElementById(prefix + 'auth16').checked;
  const stop17c = document.getElementById(prefix + 'auth16a').checked;

  let needed = false;
  if (inspection || photos || records) needed = true;

  output += inspection ? auth3Note : '';
  output += photos ? auth4Note : '';
  output += '.\r' + auth5Note + auth6Note + auth7Note + auth8Note + contact_email + '.\r';

  const parts1 = document.getElementById(prefix + 'auth1').checked;
  const parts2 = document.getElementById(prefix + 'auth2').checked;
  const parts3 = document.getElementById(prefix + 'auth3').checked;
  const parts4 = document.getElementById(prefix + 'auth4').checked;
  const parts5 = document.getElementById(prefix + 'auth5').checked;

  output += parts1 ? auth9Note : '';
  output += parts2 ? auth10Note : '';
  output += parts3 ? auth11Note : '';
  output += parts4 ? auth12Note : '';
  output += parts5 ? auth13Note : '';
 
  let auth17zNote = "Vehicle is not in waiting period.\rLack of maintenance will not be a provable exclusion.\r";
  if (!stop17a) auth17zNote += auth17aNote;
  if (!stop17b) auth17zNote += auth17bNote;
  if (!stop17c) auth17zNote += auth17cNote;

  if (needed) {
    output += inspection ? auth15Note : auth14Note;
    output += photos ? auth16Note : '';
    output += records ? auth18Note : auth17Note;
    output += auth17zNote;
    output += auth19Note;
  } else {
    output += auth14Note + auth17Note + auth17zNote;
  }

  const deductibleValue = document.getElementById(prefix + 'auth25').value;
  if (deductibleValue === '$0.00') {
    output += 'The Contract Holder has no deductible.\r';
  } else {
    output += `The Contract Holder has a deductible of ${deductibleValue}.\r`;
  }
  
  const oopc = document.getElementById(prefix + 'auth9').checked;
  const shipping = document.getElementById(prefix + 'auth10').checked;
  const both = document.getElementById(prefix + 'auth11').checked;
  const none = document.getElementById(prefix + 'auth12').checked;
  const oopcamount = parseInt(document.getElementById(prefix + 'auth20').value);
  const noncovered = document.getElementById(prefix + 'auth14').checked;
  const denied = document.getElementById(prefix + 'auth15').checked;

  if (oopc || both) {
    const partoop = document.getElementById(prefix + 'auth17').checked;
    const laboroop = document.getElementById(prefix + 'auth18').checked;
    const bothoop = document.getElementById(prefix + 'auth19').checked;
    const amountUnknown = document.getElementById(prefix + 'auth21').checked;
    
    if (amountUnknown) {
      output += auth30Note;
      output += shipping ? auth24Note : '';
    } else {
      output += oopcamount ? auth20Note + oopcamount.toFixed(2) : '';
      output += shipping ? auth22Note : auth21Note;
      output += auth23Note;
      if (bothoop) output += "parts and labor ";
      if (partoop) output += "parts ";
      if (laboroop) output += "labor ";
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
