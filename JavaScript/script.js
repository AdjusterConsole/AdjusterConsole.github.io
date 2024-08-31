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

import { downloadFile } from './firebase.js';

document.getElementById('downloadMostRecent').addEventListener('click', async () => {
  const referenceKey = prompt('Please enter the reference key:');
  if (!referenceKey) {
    alert('No reference key provided.');
    return;
  }

  const jsonContent = await downloadFile(referenceKey);
  if (jsonContent) {
    const fakeEvent = { target: { files: [new File([JSON.stringify(jsonContent)], `${referenceKey}.json`, { type: "application/json" })] } };
    processUploadedFilefb(fakeEvent);
  } else {
    alert("No file found or an error occurred.");
  }
});

function processUploadedFilefb(event) {
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
        const claimInfo = jsonContent.claim_info[0]; 
        const output = formatJson(claimInfo); 
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
            result += formatParts(part, indent + 2);
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

function formatParts(part, indent) {
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
