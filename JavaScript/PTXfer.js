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

function PTXFER() {
	const showTemp = document.getElementById("transferTemplate");
	showTemp.style.display = "inline-block";
	const rfEmail = getContact('1');
	const rfName = getContact('0');
	document.getElementById("contact1").value = rfName;
	document.getElementById("contact2").value = rfEmail;
	localStorage.setItem("PTpage", "1");
	document.getElementById("quest1").style.display = "block";
	if (checkOpen()) {
		ShowTemps();
	}
}

function ShowTemps() {
	const TPDiv = document.getElementById("TPDiv");
	if (TPDiv.style.display == "inline-block" || checkOpen()) {
		TPDiv.style.display = "none";
		return;
	}
	TPDiv.style.display = "inline-block";
}

function advancePT(radioId) {
	const page = parseInt(localStorage.getItem("PTpage"));
	const num = radioId.match(/(\d+)/);
	const single = num[0];
	const curId = "quest" + single;
	const nextIdnum = parseInt(single) + 1;
	const nextId = "quest" + nextIdnum;
	if (radioId == "no3" || radioId == "nr3") {
		document.getElementById("q3ansN").style.display = "block";
		document.getElementById("quest3").style.display = "none";
		return;
	}
	if (radioId == "done3") {
		document.getElementById("q3ansN").style.display = "none";
	}
	if (radioId == "yes11") {
		document.getElementById("q11ansY").style.display = "block";
		document.getElementById("quest11").style.display = "none";
		return;
	}
	if (radioId == "no11" || radioId == "done11") {
		document.getElementById("q11ansY").style.display = "none";
		submitTEMP();
		return;
	}
	localStorage.setItem("PTpage", nextIdnum);
	document.getElementById(curId).style.display = "none";
	document.getElementById(nextId).style.display = "block";
}

function backTEMP() {
	const page = localStorage.getItem("PTpage");
	if (page == "1") {
		return;
	}
	const curId = "quest" + page;
	const newpage = parseInt(page) - 1;
	const nextId = "quest" + newpage;
	localStorage.setItem("PTpage", newpage);
	document.getElementById("q3ansN").style.display = "none";
	document.getElementById("q11ansY").style.display = "none";
	document.getElementById(curId).style.display = "none";
	document.getElementById(nextId).style.display = "block";
}

function submitTEMP() {
	const PtTransfer1 = "Is the Repair Facility able to diagnose to cause of failure and overhaul if needed?   ";
	const PtTransfer2 = "Has the Repair Facility ever serviced the vehicle before?   ";
	const PtTransfer3 = "Can a test drive be performed if needed?   ";
	const PtTransfer4 = "Did the Repair Facility tow the vehicle?   ";
	const PtTransfer5 = "Has the cause of failure been identified?   ";
	const PtTransfer6 = "Does the Repair Facility have an itemized estimate available?   ";
	const PtTransfer7 = "Has the Repair Facility's info and contact info been verified?   ";
	const PtTransfer8 = "What is the preferred method of contact?   ";
	const PtTransfer9 = "Have the PT claim expectations been reviewed with the Repair Facility contact?   ";
	const PtTransfer10 = "Have you provided the Repair Facility with the assigned adjusters name, direct extension, and e-mail?   ";
	const PtTransfer11 = "Is there any other relevant info that will assist the adjuster?   ";
	const q1 = document.getElementsByName("ans1");
	const q2 = document.getElementsByName("ans2");
	const q3 = document.getElementsByName("ans3");
	const q4 = document.getElementsByName("ans4");
	const q5 = document.getElementsByName("ans5");
	const q6 = document.getElementsByName("ans6");
	const q7 = document.getElementsByName("ans7");
	const q8 = document.getElementsByName("ans8");
	const q9 = document.getElementsByName("ans9");
	const q10 = document.getElementsByName("ans10");
	const q11 = document.getElementsByName("ans11");
	let ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11;
	let checkedArr = [];
	for (i = 0; i < q1.length; i++) {
		if (q1[i].checked) {
			ans1 = q1[i].value;
			checkedArr.push(q1[i]);
		}
	}
	for (i = 0; i < q2.length; i++) {
		if (q2[i].checked) {
			ans2 = q2[i].value;
			checkedArr.push(q2[i]);
		}
	}
	for (i = 0; i < q3.length; i++) {
		if (q3[i].checked) {
			ans3 = q3[i].value;
			checkedArr.push(q3[i]);
		}
	}
	for (i = 0; i < q4.length; i++) {
		if (q4[i].checked) {
			ans4 = q4[i].value;
			checkedArr.push(q4[i]);
		}
	}
	for (i = 0; i < q5.length; i++) {
		if (q5[i].checked) {
			ans5 = q5[i].value;
			checkedArr.push(q5[i]);
		}
	}
	for (i = 0; i < q6.length; i++) {
		if (q6[i].checked) {
			ans6 = q6[i].value;
			checkedArr.push(q6[i]);
		}
	}
	for (i = 0; i < q7.length; i++) {
		if (q7[i].checked) {
			ans7 = q7[i].value;
			checkedArr.push(q7[i]);
		}
	}
	for (i = 0; i < q8.length; i++) {
		if (q8[i].checked) {
			ans8 = q8[i].value;
			checkedArr.push(q8[i]);
		}
	}
	for (i = 0; i < q9.length; i++) {
		if (q9[i].checked) {
			ans9 = q9[i].value;
			checkedArr.push(q9[i]);
		}
	}
	for (i = 0; i < q10.length; i++) {
		if (q10[i].checked) {
			ans10 = q10[i].value;
			checkedArr.push(q10[i]);
		}
	}
	for (i = 0; i < q11.length; i++) {
		if (q11[i].checked) {
			ans11 = q11[i].value;
			checkedArr.push(q11[i]);
		}
	}
	let q11ansExplain = document.getElementById("q11ansExplain").value;
	let q3ansExplain = document.getElementById("q3ansExplain").value;
	const contact1 = "Contact Name: " + document.getElementById("contact1").value;
	const contact2 = "Contact Info: " + document.getElementById("contact2").value;
	for (i = 0; i < checkedArr.length; i++) {
		checkedArr[i].checked = false;
	}
	document.getElementById("textarea5").value = PtTransfer1 + ans1 + "\r" + PtTransfer2 + ans2 + "\r" + PtTransfer3 + ans3 + "\r";
	if (ans3 != "YES") {
		document.getElementById("textarea5").value += q3ansExplain + "\r";
	}
	document.getElementById("textarea5").value += PtTransfer4 + ans4 + "\r" + PtTransfer5 + ans5 + "\r" + PtTransfer6 + ans6 + "\r" + PtTransfer7 + ans7 + "\r" + PtTransfer8 + ans8 + "\r" + contact1 + "\r" + contact2 + "\r" + PtTransfer9 + ans9 + "\r" + PtTransfer10 + ans10 + "\r" + PtTransfer11 + ans11 + "\r";
	if (ans11 == "YES") {
		document.getElementById("textarea5").value += q11ansExplain;
	}
	let outputString = document.getElementById("textarea5").value;
	copy(outputString);
	document.getElementById("q3ansExplain").value = "";
	document.getElementById("q11ansExplain").value = "";
	document.getElementById("contact1").value = "";
	document.getElementById("contact2").value = "";
	const showTemp = document.getElementById("transferTemplate");
	showTemp.style.display = "none";
}

function cancelPT() {
	const showTemp = document.getElementById("transferTemplate");
	showTemp.style.display = "none";
	const questDivs = document.getElementsByClassName("ptQuest");
	for (const x of questDivs) {
		x.style.display = "none";
	}
	const questRadios = document.getElementsByClassName("ptRad");
	for (const x of questRadios) {
		x.checked = false;
	}
}