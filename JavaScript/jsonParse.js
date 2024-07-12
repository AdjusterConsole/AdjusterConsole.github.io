document.getElementById('fileInput').addEventListener('change', processUploadedFile);
document.getElementById('autocopy').addEventListener('click', autoCopyAndDelete);
document.getElementById('pncopy').addEventListener('click', partnumberCopyAndDelete);
document.getElementById('pricecopy').addEventListener('click', partpriceCopyAndDelete);
document.getElementById('resetFile').addEventListener('click', resetAutoCopyComponents);

function processUploadedFile(event) {
  const file = event.target.files[0];
  if (!file) {
    alert("No file selected.");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const jsonContent = JSON.parse(e.target.result);
      if (jsonContent.claim_info && jsonContent.claim_info.length > 0) {
        const claimInfo = jsonContent.claim_info[0]; // Isolate claim_info
        const output = formatJsons(claimInfo); // Pass only claim_info to formatJson
        document.getElementById('textarea2').value = output;
        const countLefts = localStorage.getItem("countLefts");
        document.getElementById('left2').innerHTML = 'Remaining<br>' + countLefts;
        document.getElementById('left3').innerHTML = 'Remaining<br>' + countLefts; 
        const countInts = parseInt(countLefts) * 4;
        localStorage.setItem("countAlls", countInts);
        localStorage.setItem("countPNs", countLefts);
        localStorage.setItem("countPrices", countLefts);
        const countStrs = countInts.toString();
        document.getElementById('left1').innerHTML = 'Remaining<br>' + countStrs;
      } else {
        alert("Invalid JSON structure.");
      }
    } catch (error) {
      alert("Error parsing JSON file: " + error.message);
    }
  };
  reader.readAsText(file);
}


function formatJsons(jsonContent, indent = 0) {
  let result = '';
  for (let key in jsonContent) {
    if (jsonContent.hasOwnProperty(key)) {
      const value = jsonContent[key];
      let indentation = ' '.repeat(indent);
      switch (key) {
        case 'partsData':
          result += `${indentation}Parts\n`;
          value.forEach(part => {
            result += formatPart(part, indent + 2);
          });
          break;
        case 'laborData':
          result += `${indentation}Labor:\n`;
          value.forEach(labor => {
            result += `${' '.repeat(indent + 2)}Description: ${labor.laborDescription}\n`;
            result += `${' '.repeat(indent + 2)}Hours: ${labor.hours}\n\n`;
          });
          break;
        case 'totals':
          result += `${indentation}Totals:\n`;
          for (let totalKey in value) {
            if (value.hasOwnProperty(totalKey)) {
              result += `${' '.repeat(indent + 2)}${totalKey}: ${value[totalKey]}\n`;
            }
          }
          break;
        case 'laborRate':
          result += `${indentation}Labor Rate: ${value}\n`;
          break;
        default:
          result += `${indentation}${key}: ${value}\n`;
          break;
      }
    }
  }
  return result;
}

function formatPart(part, indent) {
  let result = '';
  result += `${' '.repeat(indent)}Part Number: ${part.partNumber}\n`;
  result += `${' '.repeat(indent)}Part Name: ${part.partName}\n`;
  result += `${' '.repeat(indent)}Quantity: ${part.quantity}\n`;
  result += `${' '.repeat(indent)}RF Price: $${parseFloat(part.priceEach).toFixed(2)}\n\n`;
  document.getElementById('textarea5').value += part.partNumber + '\n' + part.partName + '\n' + part.quantity + '\n' + parseFloat(part.priceEach).toFixed(2) + '\n';
  document.getElementById('textarea4').value += parseFloat(part.priceEach).toFixed(2) + '\n';
  document.getElementById('textarea3').value += part.partNumber + '\n';
  let countLefts = parseInt(localStorage.getItem("countLefts")) + 1;
  if (countLefts === 1) {
    document.getElementById('next1').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next2').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next3').innerHTML = 'Next<br>' + parseFloat(part.priceEach).toFixed(2);
  }
  localStorage.setItem("countLefts", countLefts);
  return result;
}

function resetAutoCopyComponents() {
  localStorage.setItem("countLefts", '0');
  localStorage.setItem("countAlls", '0');
  localStorage.setItem("countPNs", '0');
  localStorage.setItem("countPrices", '0');
  setElementValue([ 
    'fileInput', 'textarea5', 'textarea4', 'textarea3', 'textarea2' ], "");
  document.getElementById('next1').innerHTML = "Next<br>--";
  document.getElementById('next2').innerHTML = "Next<br>--";
  document.getElementById('next3').innerHTML = "Next<br>--";
  document.getElementById('left1').innerHTML = "Remaining<br>--";
  document.getElementById('left2').innerHTML = "Remaining<br>--";
  document.getElementById('left3').innerHTML = "Remaining<br>--";
  document.getElementById('autocopy').disabled = false;
  document.getElementById('pncopy').disabled = false;
  document.getElementById('pricecopy').disabled = false;
}

function autoCopyAndDelete() {
  const textareaValue = document.getElementById('textarea5').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countAlls = parseInt(localStorage.getItem("countAlls")) - 1;
        if (countAlls === 0) {
          document.getElementById('next1').innerHTML = "Next<br>--";
          document.getElementById('left1').innerHTML = "Remaining<br>--";
          document.getElementById('textarea5').value = '';
          document.getElementById('autocopy').disabled = true;
          return;
        }
        const NextLine = lines[1].trim() || '';
        const updatedText = lines.slice(1).join('\n');
        document.getElementById('textarea5').value = updatedText;
        document.getElementById('next1').innerHTML = "Next<br>" + NextLine;
        document.getElementById('left1').innerHTML = "Remaining<br>" + countAlls;
        localStorage.setItem("countAlls", countAlls);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}

function partnumberCopyAndDelete() {
  const textareaValue = document.getElementById('textarea3').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countPNs = parseInt(localStorage.getItem("countPNs")) - 1;
        if (countPNs === 0) {
          document.getElementById('next2').innerHTML = "Next<br>--";
          document.getElementById('left2').innerHTML = "Remaining<br>--";
          document.getElementById('textarea3').value = '';
          document.getElementById('pncopy').disabled = true;
          return;
        }
        const NextLine = lines[1].trim() || '';
        const updatedText = lines.slice(1).join('\n');
        document.getElementById('textarea3').value = updatedText;
        document.getElementById('next2').innerHTML = "Next<br>" + NextLine;
        document.getElementById('left2').innerHTML = "Remaining<br>" + countPNs;
        localStorage.setItem("countPNs", countPNs);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}

function partpriceCopyAndDelete() {
  const textareaValue = document.getElementById('textarea4').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countPrices = parseInt(localStorage.getItem("countPrices")) - 1;
        if (countPrices === 0) {
          document.getElementById('next3').innerHTML = "Next<br>--";
          document.getElementById('left3').innerHTML = "Remaining<br>--";
          document.getElementById('textarea4').value = '';
          document.getElementById('pricecopy').disabled = true;
          return;
        }
        const NextLine = lines[1].trim() || '';
        const updatedText = lines.slice(1).join('\n');
        document.getElementById('textarea4').value = updatedText;
        document.getElementById('next3').innerHTML = "Next<br>" + NextLine;
        document.getElementById('left3').innerHTML = "Remaining<br>" + countPrices;
        localStorage.setItem("countPrices", countPrices);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}


function setElementValue(elementIds, value) {
  elementIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.value = value;
    }
  });
}