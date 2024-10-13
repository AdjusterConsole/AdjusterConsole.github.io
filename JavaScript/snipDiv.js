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

async function copyText() {
	const notification = document.getElementById('copy-notification');
	let text = document.getElementById("Snippings").value;
	try {
		await navigator.clipboard.writeText(text);

		setTimeout(function () {
			setButtonDisplay(["Snippings"], "none");
		}, 5000);
		notification.style.top = '0';
		setTimeout(() => {
			notification.style.top = '-50px';
		}, 800);

	} catch (err) {
		console.error('Failed to copy text: ', err);
	}
}

async function copy(text) {
	const notification = document.getElementById('copy-notification');
	try {
		await navigator.clipboard.writeText(text);
		notification.style.top = '0';
		setTimeout(() => {
			notification.style.top = '-50px';
		}, 800);
	} catch (err) {
		console.error('Failed to copy text: ', err);
	}
}

function common_hide() {
	setButtonDisplay(["TGAFOSABTN", "TGAFOSDSBTN", "TGAFOSDBBTN", "TGAFOSCBTN", "TGAFOABTN", "TGAFODBTN", "TGAFOCBTN", "TGAFSABTN", "TGAFSDBTN", "TGAFSCBTN", "NALVM", "NANVM"], "none");
}

function setButtonDisplay(buttonIds, displayStyle) {
	buttonIds.forEach(function (btnId) {
		document.getElementById(btnId).style.display = displayStyle;
	});
}

function setVMReason(reason) {
	localStorage.setItem("VMREASON", reason);
}

function showSnipAndUpdateEditArea(value) {
	document.getElementById("Snippings").value = value;
	document.getElementById("EDITarea").value = value;
}

function setLocalStorageItem(key, value) {
	localStorage.setItem(key, value);
}

function getElementValue(id) {
	return document.getElementById(id).value;
}

function setElementValue(buttonId, value) {
	buttonId.forEach(function (btnIds) {
		document.getElementById(btnIds).value = value;
	});
}

function commonFunctionality(btnID, defaultText) {
	var Check = localStorage.getItem(btnID + "EDIT") || defaultText;
	setElementValue(["Snippings", "EDITarea"], Check);
	copyText();
	setButtonDisplay(["Snippings"], "inline-block");
}

function TGAF() {
	if (checkOpen()) {
		return;
	}
	setElementValue(["Snippings"], "");
	setButtonDisplay(["TGAFBTN", "TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "inline-block");
	setButtonDisplay(["Snippings"], "none");
}

function TGAFO() {
	setButtonDisplay(["TGAFOABTN", "TGAFODBTN", "TGAFOCBTN", "NALVM", "NANVM"], "inline-block");
	setButtonDisplay(["TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "none");
	setVMReason("I called the Contract Holder to get authorization for the OOPC.\r");
}

function TGAFS() {
	setButtonDisplay(["TGAFSABTN", "TGAFSDBTN", "TGAFSCBTN", "NALVM", "NANVM"], "inline-block");
	setButtonDisplay(["TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "none");
	setVMReason("I called the Contract Holder to get authorization for shipping.\r");
}

function TGAFB() {
	changeVMpos();
	setButtonDisplay(["TGAFOSABTN", "TGAFOSDSBTN", "TGAFOSDBBTN", "TGAFOSCBTN", "NALVM", "NANVM"], "inline-block");
	setButtonDisplay(["TGAFOBTN", "TGAFSBTN", "TGAFBBTN"], "none");
	setVMReason("I called the Contract Holder to get authorization for the OOPC and shipping.\r");
}

function TGAFOA(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC.\rThe Contract Holder has approved the OOPC.\rI will call the Repair Facility to give authorization and payment info.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
	setVMpos();
}

function TGAFOD(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC.\rThe Contract Holder has declined repairs at this time.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFOC(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC.\rThe Contract Holder will call back with a decision.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFSA(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder has approved shipping.\rI will call the Repair Facility to inform and order part.";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFSD(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder has declined shipping and will use the Repair Facility parts.\rThe Contract Holder has agreed to the OOPC.\rI will call the Repair Facility to inform and give authorization.";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFSC(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for shipping.\rThe Contract Holder will call back with a decision.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFOSA(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has approved the OOPC and shipping.\rI will call Repair Facility to inform and order parts.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFOSDS(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has declined shipping and will use the Repair Facility parts.\rThe Contract Holder has agreed to the OOPC.\rI will call Repair Facility to inform and give authorization.";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFOSDB(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder has declined repairs at this time.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function TGAFOSC(btnID) {
	var defaultText = "I called the Contract Holder to get authorization for the OOPC and shipping.\rThe Contract Holder will call back with a decision.\r";
	commonFunctionality(btnID, defaultText);
	common_hide();
}

function setVMpos() {
	document.getElementById("NALVM").style.left = "270px";
	document.getElementById("NANVM").style.left = "270px";
}

function changeVMpos() {
	document.getElementById("NALVM").style.left = "400px";
	document.getElementById("NANVM").style.left = "400px";
}

function RFIB() {
	if (checkOpen()) {
		return;
	}
	setElementValue(["Snippings"], "");
	setButtonDisplay(["Snippings"], "none");
	setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "inline-block");
}

function RFIBDH() {
	setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "inline-block");
	setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function RFIBND(btnID) {
	var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have a complete diagnostic.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back when the diagnostic is complete.\r";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNE(btnID) {
	var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have an estimate ready.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back with an estimate.\r";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNF(btnID) {
	var defaultText = "A Repair Facility called in to start a claim.\rThe Repair Facility doesn't have a verified cause of failure.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back when they are ready.\r";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function RFIBNV(btnID) {
	var defaultText = "A Repair Facility called in to start a claim.\rThe Contract Holder's vehicle is not at Repair Facility.\rI advised the Repair Facility of the requirements to open a claim.\rThe Repair Facility understood and will call back when the vehicle has returned.\r";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBND", "RFIBNE", "RFIBNF", "RFIBNV"], "none");
}

function PNLC(btnID) {
	var defaultText = "A Repair Facility called in with the following concerns:\r\rI advised the Repair Facility that the parts were not listed for coverage - PNLC\rI will call the Contract Holder to inform of coverage.";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function TOTAL(btnID) {
	var defaultText = "A Repair Facility called in to go over totals.\rI advised the Repair Facility of totals.\rThe Repair Facility understood.";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function GAR(btnID) {
	var defaultText = "A Repair Facility called in to get authorization info.\rI verified the Contract Holder has authorized the OOPC via the notes.\rI gave the Repair Facility authorization and payment details.";
	commonFunctionality(btnID, defaultText);
	setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN"], "none");
}

function NAV() {
	setButtonDisplay(["Snippings"], "inline-block");
	setElementValue(["Snippings"], localStorage.getItem("VMREASON") + "There was no answer.\rI left a voicemail and tasked Customer Service to callback.\r");
	copyText();
	auth_Close();
	setVMpos();
}

function NAN() {
	setButtonDisplay(["Snippings"], "inline-block");
	setElementValue(["Snippings"], localStorage.getItem("VMREASON") + "There was no answer.\rThere was no voicemail available\rI have tasked Customer Service to callback.\r");
	copyText();
	auth_Close();
	setVMpos();
}

function RESETNOTE() {
	setButtonDisplay(["RFIBBTN", "TGAFBTN"], "inline-block");
	setButtonDisplay(["RFIBDH", "PNLCBTN", "TOTALBTN", "RFAUTHBTN", "RFIBND", "RFIBNE", "RFIBNF", "RFIBNV", "Snippings"], "none");
	auth_Close();
	localStorage.removeItem("VMREASON");
	setElementValue(["Snippings"], "");
	setVMpos();
}

function auth_Close() {
	setButtonDisplay([
			"TGAFOBTN",
			"TGAFSBTN",
			"TGAFBBTN",
			"TGAFOABTN",
			"TGAFODBTN",
			"TGAFOCBTN",
			"TGAFSABTN",
			"TGAFSDBTN",
			"TGAFSCBTN",
			"TGAFOSABTN",
			"TGAFOSDSBTN",
			"TGAFOSDBBTN",
			"TGAFOSCBTN",
			"NALVM",
			"NANVM"
		],
		"none");
}

function BuilderShow() {
	var menuOpen = localStorage.getItem("menuOpen");
	var toggleMaster = document.getElementById("toggleMaster");
	var BtnBuilder = document.getElementById("BtnBuilder");
	const displayValue = window.getComputedStyle(toggleMaster).display;
	if (displayValue === "none") {
		toggleMaster.style.display = "inline-block";
		BtnBuilder.innerText = "\u2666 Hide Toggle \u2666";
	} else {
		toggleMaster.style.display = "none";
		BtnBuilder.innerText = "\u2666 Toggle On/Off \u2666";
		if (menuOpen == 'true') {
			MENU();
		}
	}
}

function resetOB() {
	document.getElementById('result1').style.display = '';
	document.getElementById('result2').style.display = '';
	document.getElementById('inform').style.display = '';
	document.getElementById('reasonAuth').style.display = '';
	document.getElementById('reasonDenial').style.display = '';
	document.getElementById('reasonStatus').style.display = '';
	xferClose();
}

function RESET() {
	localStorage.setItem("newpartcount", "2");
	document.getElementById("textarea1").value = "CONTACT:   \rPAYMENT:   \rZIPCODE:   \rMILEAGE:   \rDISTANCE:   \rTIME:   ";
	setElementValue(["partname1", "partname2", "partname3", "partname4", "partname5", "partname6", "partname7", "partnum", "rfprice", "msrp", "textarea2", "textarea3"], "");
	setButtonDisplay(["partname2", "partname3", "partname4", "partname5", "partname6", "partname7", "transferTemplate", "statNote", "newAuthstyle", "TPDiv", "div6"], "none");
	RESETNOTE();
	cancelState();
	cancelStat();
	cancel_auth();
	cancelPT();
	resetOB();
}