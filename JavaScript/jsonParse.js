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
	reader.onload = function (e) {
		try {
			const jsonContent = JSON.parse(e.target.result);
			if (Array.isArray(jsonContent) && jsonContent.length > 0) {
				const output = formatJsons(jsonContent); // Pass the entire array to formatJsons
				document.getElementById('textarea2').value = output;
				const countLefts = jsonContent.length; // Set the countLefts based on the number of parts
				localStorage.setItem("countLefts", countLefts);
				const countInts = countLefts * 4;
				localStorage.setItem("countAlls", countInts);
				localStorage.setItem("countPNs", countLefts);
				localStorage.setItem("countPrices", countLefts);
				document.getElementById('left1').innerHTML = 'Remaining<br>' + countInts;
				document.getElementById('left2').innerHTML = 'Remaining<br>' + countLefts;
				document.getElementById('left3').innerHTML = 'Remaining<br>' + countLefts;
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
	jsonContent.forEach(part => {
		result += formatPart(part, indent);
	});
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
		'fileInput', 'textarea5', 'textarea4', 'textarea3', 'textarea2'
	], "");
	document.getElementById('copy1').innerHTML = "Copied<br>--";
	document.getElementById('copy2').innerHTML = "Copied<br>--";
	document.getElementById('copy3').innerHTML = "Copied<br>--";
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
				document.getElementById('copy1').innerHTML = "Copied<br>" + firstLine;
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
				document.getElementById('copy2').innerHTML = "Copied<br>" + firstLine;
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
				document.getElementById('copy3').innerHTML = "Copied<br>" + firstLine;
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