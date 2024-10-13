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

//                                                                       LABOR RATE SCRIPT

function openScript() {
	if (!checkOpen()) {
		document.getElementById("laborscriptDiv").classList.remove('hide');
		document.getElementById("laborscriptDiv").classList.add('show');
	}
}

function exitScript() {
	setZero();
	document.getElementById("laborscriptDiv").classList.remove('show');
	document.getElementById("laborscriptDiv").classList.add('hide');
}

function setZero() {
	document.getElementById("responseDiv_text").innerHTML = "";
	document.getElementById("noScript").style.opacity = "0";
	document.getElementById("yesScript").style.opacity = "0";
	document.getElementById("responseDiv").style.opacity = "0";
	document.getElementById('asking').value = '';
	document.getElementById('current').value = '';
	document.getElementById('custom').value = '';
	document.getElementById('aveRate').value = '';
	localStorage.removeItem('selectedIdR');
	localStorage.removeItem('selectedIdQ');
	localStorage.removeItem('selectedIdT');
	const allopts = document.getElementsByClassName('laboropt');
	for (i = 0; i < allopts.length; i++) {
		if (allopts[i].classList.contains('selected')) {
			allopts[i].classList.remove('selected');
		}
	}
}

function radiusSelect(x, id) {
	let priorRadius = localStorage.getItem('radius');
	let priorId = localStorage.getItem('selectedIdR');
	if (priorRadius !== null && priorId !== null) {
		document.getElementById(priorId).classList.remove('selected');
		localStorage.removeItem('radius');
		localStorage.removeItem('selectedIdR');
	}
	localStorage.setItem('radius', x);
	localStorage.setItem('selectedIdR', id);
	document.getElementById(id).classList.add('selected');
}

function typeSelect(x, id) {
	let priorType = localStorage.getItem('type');
	let priorId = localStorage.getItem('selectedIdT');
	if (priorType !== null && priorId !== null) {
		document.getElementById(priorId).classList.remove('selected');
		localStorage.removeItem('type');
		localStorage.removeItem('selectedIdT');
	}
	localStorage.setItem('type', x);
	localStorage.setItem('selectedIdT', id);
	document.getElementById(id).classList.add('selected');
}

function quantSelect(x, id) {
	let priorQuant = localStorage.getItem('quant');
	let priorId = localStorage.getItem('selectedIdQ');
	if (priorQuant !== null && priorId !== null) {
		document.getElementById(priorId).classList.remove('selected');
		localStorage.removeItem('quant');
		localStorage.removeItem('selectedIdQ');
	}
	localStorage.setItem('quant', x);
	localStorage.setItem('selectedIdQ', id);
	document.getElementById(id).classList.add('selected');
}

function scriptInfo() {
	let askingstr = document.getElementById("asking").value;
	let currentstr = document.getElementById("current").value;
	let asking = parseInt(askingstr);
	let current = parseInt(currentstr);
	if (current < 1) current = asking;
	let aveRate = document.getElementById("aveRate").value;
	let custom = document.getElementById("custom").value;
	if (asking !== '' && aveRate !== '') {
		localStorage.setItem("aveRate", aveRate);
		localStorage.setItem("asking", asking);
	} else {
		return;
	}
	if (current !== '') localStorage.setItem("current", current);
	if (custom !== '') localStorage.setItem("custom", custom);
}

function instructScript() {
	let instructL = document.getElementById("instructL");
	instructL.classList.toggle("hide");
	instructL.classList.toggle("showing");
}

function laborScript() {
	let radius = localStorage.getItem('radius');
	let type = localStorage.getItem('type');
	let quant = localStorage.getItem('quant');
	if (radius === '0' || type === '0' || quant === '0') return;
	let askingstr = document.getElementById("asking").value;
	let aveRate = document.getElementById("aveRate").value;
	let currentstr = document.getElementById("current").value;
	if (askingstr === '0' || aveRate === '0') return;
	let current = parseInt(currentstr);
	let asking = parseInt(askingstr);
	if (current < 1) current = asking;
	let whatDo = laborReview(asking, current, aveRate);
	document.getElementById("responseDiv").style.opacity = "1";
	localStorage.setItem("weTried", "notYet");
	if (whatDo == "allow") {
		document.getElementById("responseDiv_text").innerHTML = "Your Response is:<br>Thanks for that. So most shops have been working with us by coming down on the hourly rate to help customers.<br>";
		document.getElementById("responseDiv_text").innerHTML += "Is there any flexibility for a lower hourly rate for this customer?";
		document.getElementById("noScript").style.opacity = "1";
		document.getElementById("yesScript").style.opacity = "1";
		localStorage.setItem('shopAveLabor', 'underAve');
		return;
	} else {
		localStorage.setItem('shopAveLabor', 'overAve');
		negotiateScript('f');
		return;
	}
}

function negotiateScript(x) {
	if (x == 'r') {
		setZero();
		return;
	}
	if (x == 'e') {
		exitScript();
		return;
	}
	let askingElem = document.getElementById("asking");
	let asking = sanitizeInput(document.getElementById("asking").value);
	let aveRateElem = document.getElementById("aveRate");
	let aveRate = sanitizeInput(document.getElementById("aveRate").value);
	let currentElem = document.getElementById("current");
	let current = sanitizeInput(document.getElementById("current").value);
	const responseDiv_text = document.getElementById("responseDiv_text");
	const responseDiv = document.getElementById("responseDiv");
	document.getElementById("noScript").style.opacity = "1";
	document.getElementById("yesScript").style.opacity = "1";
	let whatDo = laborReview(asking, current, aveRate);
	let tryHarder = localStorage.getItem("weTried");
	let shopAveLabor = localStorage.getItem("shopAveLabor");
	if (shopAveLabor === 'underAve') {
		document.getElementById("noScript").style.opacity = "0";
		document.getElementById("yesScript").style.opacity = "0";
		if (x == 'n') {
			const rfasking = parseInt(asking);
			responseDiv_text.innerHTML = `Your Response is:<br>No problem. Thank you for considering it.<br>I will update your repair facility profile to $${rfasking.toFixed(2)}.`;
			buildLaborNote('declineunderAve');
			return;
		}
		if (x == 'y') {
			responseDiv_text.innerHTML = "Come to an agreed upon rate with the Repair facility.<br>Enter the amount agreed upon in the <b>RF Offered</b> input below.<br>";
			responseDiv_text.innerHTML += "Once completed, click the <b>Accept</b> button.";
			return;
		}
		if (x == 'a') {
			const custom = parseInt(document.getElementById("custom").value);
			responseDiv_text.innerHTML = `Your Response is:<br>Thank you. I have updated your repair facility profile and set the labor rate at $${custom.toFixed(2)}.`;
			buildLaborNote('negunderAve');
			return;
		}
	}
	if (x == 'y') {
		let agreed;
		if (tryHarder != "notYet") {
			agreed = tryHarder;
			buildLaborNote('halfway');
		} else {
			agreed = aveRate;
			buildLaborNote('atAve');
			agreed = parseInt(agreed).toFixed(2);
		}
		responseDiv_text.innerHTML = "Your Response is:<br>Thank you. I have updated your repair facility profile and set the labor rate at $" + agreed + ".";
		document.getElementById("noScript").style.opacity = "0";
		document.getElementById("yesScript").style.opacity = "0";
		return;
	}
	if (x == 'a') {
		let customstr = document.getElementById("custom").value;
		let custom = parseInt(customstr);
		if (custom < 1) {
			return;
		}
		responseDiv_text.innerHTML = "Your Response is:<br>Thank you. I have updated your repair facility profile and set the labor rate at $" + custom + ".";
		document.getElementById("noScript").style.opacity = "0";
		document.getElementById("yesScript").style.opacity = "0";
		buildLaborNote('custom');
		return;
	}
	if (x == 'n' && tryHarder == "notYet") {
		let pleaseD = (parseInt(asking) + parseInt(aveRate)) / 2;
		let please = pleaseD.toFixed(2);
		responseDiv_text.innerHTML = "Your Response is:<br>Are you able to match us at $" + please + "?";
		localStorage.setItem("weTried", please);
		return;
	}
	if (x == 'n' && whatDo == "normal") {
		responseDiv_text.innerHTML = "Your Response is:<br>No problem. Thank you for considering it.<br>I will update your repair facility profile to $" + asking + ".<br>Please keep in mind there could be other times during the claims process that we may ask you to negotiate pricing";
		document.getElementById("noScript").style.opacity = "0";
		document.getElementById("yesScript").style.opacity = "0";
		buildLaborNote('declined');
	}
	if (x == 'n' && whatDo == "alt") {
		responseDiv_text.innerHTML = "Your Response is either:<br>No problem. Thank you for considering it.<br>I will update your repair facility profile to $" + asking + ".<br>Please keep in mind there could be other times during the claims process that we may ask you to negotiate pricing";
		responseDiv_text.innerHTML += "<br>OR: I have your current labor rate set at $" + current + ".<br>In order to increase the labor rate, we would request that verification be sent in.<br>I can start that process for you once we have finished.";
		responseDiv_text.innerHTML += "<br>Follow the most recent directives from AAS or discuss with your TL/DRG/Team Chat if needed.";
		document.getElementById("noScript").style.opacity = "0";
		document.getElementById("yesScript").style.opacity = "0";
		buildLaborNote('declined');
		return;
	}
	if (x == 'f') {
		responseDiv_text.innerHTML = "Your Response is:<br>The average labor rate in your area is $" + aveRate + ".<br>Are you able to match that?";
		return;
	}
}

function laborReview(askingStr, currentStr, averageStr) {
	let asking = parseInt(askingStr);
	let current = parseInt(currentStr);
	let average = parseInt(averageStr);
	if (current === '0') {
		current = asking;
	}
	let normal = "normal";
	let alt = "alt";
	let allow = "allow";
	let diffInRate = asking - current;
	if (asking <= average) {
		return allow;
	} else if (asking <= current) {
		return normal;
	} else if (asking > 250 || diffInRate > 49.99) {
		return alt;
	} else {
		return normal;
	}
}

function buildLaborNote(result) {
	scriptInfo();
	let textarea;
	let please = localStorage.getItem("weTried");
	let asking = localStorage.getItem("asking");
	let radius = localStorage.getItem("radius");
	let type = localStorage.getItem("type");
	let quant = localStorage.getItem("quant");
	let aveRate = localStorage.getItem("aveRate");
	let current = localStorage.getItem("current");
	let custom = localStorage.getItem("custom");

	textarea = "Search Parameters:\rRadius: " + radius + "\rFacility Type: " + type + "\rNumber of Facilities: " + quant + "\r\r";
	textarea += "Average Labor Rate: $" + aveRate;
	if (asking != current) {
		textarea += "\rRepair Facility Previous Labor Rate: $" + current;
	}
	textarea += "\rRepair Facility Posted Labor Rate: $" + asking;
	if (result == "negunderAve") {
		textarea += "\r\rThe Repair Facility posted labor rate is under the average labor rate for comparable shops in the vicinity.";
		textarea += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed to lower their rate to an agreed upon amount.";
		textarea += "\rUpdated Repair Facility labor rate at: $" + custom;
	}
	if (result == "declineunderAve") {
		textarea += "\r\rThe Repair Facility posted labor rate is under the average labor rate for comparable shops in the vicinity.";
		textarea += "\r\rThe Repair Facility is unwilling to negotiate the labor rate.";
		textarea += "\rUpdated Repair Facility labor rate at: $" + asking;
	}
	if (result == "declined") {
		textarea += "\r\rThe Repair Facility is unwilling to negotiate the labor rate.";
		textarea += "\rUpdated Repair Facility labor rate at: $" + asking;
	}
	if (result == "atAve") {
		textarea += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed to the average rate for the area.";
		textarea += "\rUpdated Repair Facility labor rate at: $" + aveRate;
	}
	if (result == "halfway") {
		textarea += "\r\rThe Repair Facility is willing to negotiate.\rThey agreed on midway between average and asking.";
		textarea += "\rUpdated Repair Facility labor rate at: $" + please;
	}
	if (result == "custom") {
		textarea += "\r\rThe Repair Facility is willing to negotiate.\rThey made an offer under the current posted labor rate which we accepted";
		textarea += "\rUpdated Repair Facility labor rate at: $" + custom;
	}
	copy(textarea);
	localStorage.setItem('asking', '0');
	localStorage.setItem('radius', '0');
	localStorage.setItem('type', '0');
	localStorage.setItem('quant', '0');
	localStorage.setItem('aveRate', '0');
	localStorage.setItem('current', '0');
	localStorage.setItem('custom', '0');
}