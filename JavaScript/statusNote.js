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