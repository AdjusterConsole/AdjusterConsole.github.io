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
      const output = formatJson(jsonContent);
      document.getElementById('textarea2').value = output;
      const countLeft = localStorage.getItem("countLeft");
      document.getElementById('left2').innerHTML = 'Remaining<br>' + countLeft;
      document.getElementById('left3').innerHTML = 'Remaining<br>' + countLeft; 
      const countInt = parseInt(countLeft) * 4;
      localStorage.setItem("countAll", countInt);
      localStorage.setItem("countPN", countLeft);
      localStorage.setItem("countPrice", countLeft);
      const countStr = countInt.toString();
      document.getElementById('left1').innerHTML = 'Remaining<br>' + countStr;

    } catch (error) {
      alert("Error parsing JSON file: " + error.message);
    }
  };
  reader.readAsText(file);
}

function formatJson(jsonContent, indent = 0) {
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
        case 'moneyData':
          result += `${indentation}Money Data:\n`;
          value.forEach(money => {
            result += `${' '.repeat(indent + 2)}Total Parts: ${money.totalParts}\n`;
            result += `${' '.repeat(indent + 2)}Total Labor: ${money.totalLabor}\n`;
            result += `${' '.repeat(indent + 2)}Subtotal: ${money.subTotal}\n`;
            result += `${' '.repeat(indent + 2)}Tax Total: ${money.taxTotal}\n`;
            result += `${' '.repeat(indent + 2)}Grand Total: ${money.grandTotal}\n\n`;
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
  let countLeft = parseInt(localStorage.getItem("countLeft")) + 1;
  if (countLeft === 1) {
    document.getElementById('next1').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next2').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next3').innerHTML = 'Next<br>' + parseFloat(part.priceEach).toFixed(2);
  }
  localStorage.setItem("countLeft", countLeft);
  return result;
}

function resetAutoCopyComponents() {
  localStorage.setItem("countLeft", '0');
  localStorage.setItem("countAll", '0');
  localStorage.setItem("countPN", '0');
  localStorage.setItem("countPrice", '0');
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
        let countAll = parseInt(localStorage.getItem("countAll")) - 1;
        if (countAll === 0) {
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
        document.getElementById('left1').innerHTML = "Remaining<br>" + countAll;
        localStorage.setItem("countAll", countAll);
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
        let countPN = parseInt(localStorage.getItem("countPN")) - 1;
        if (countPN === 0) {
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
        document.getElementById('left2').innerHTML = "Remaining<br>" + countPN;
        localStorage.setItem("countPN", countPN);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}
pricecopy
function partpriceCopyAndDelete() {
  const textareaValue = document.getElementById('textarea4').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countPrice = parseInt(localStorage.getItem("countPrice")) - 1;
        if (countPrice === 0) {
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
        document.getElementById('left3').innerHTML = "Remaining<br>" + countPrice;
        localStorage.setItem("countPrice", countPrice);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}