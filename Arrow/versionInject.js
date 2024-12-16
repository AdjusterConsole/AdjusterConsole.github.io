function updateElementById(id, content) {
    const element = document.getElementById(id);
    if (element) element.innerText = content;
}

const versionMBI = isAC() ? "MBI" : "GL6";

const mbiBody1Text = `
If a Repair Facility calls in and the contract is the ${versionMBI} variant,
do not disclose any information about coverage whatsoever.
Do not bother pulling the contract to check or verify.`;
			
const mbiBody2Text = `
Once all items are keyed in and verified, click the Assign to ${versionMBI}
button in your system. Once it has reassigned to the ${versionMBI}
adjuster, task that adjuster. Tell the Repair Facility that the claim is under
review and that an adjuster will reach out to them within 24 hours.`;

updateElementById('mbiHeader', `${versionMBI} Claims`);
updateElementById('mbiBody1', mbiBody1Text);
updateElementById('mbiBody2', mbiBody2Text);

const version2790 = isAC() ? "2790" : "2024";

updateElementById('2790Header', `${version2790}`);
updateElementById('body12790', `
A transfer to ${version2790} is only required in order to start a new claim.
If they already have a claim, read the notes.`);
updateElementById('xfer2790Btn', `${version2790}`);

const versionEmail = isAC() ? "Jude.Deangelis@americanautoshield.com" : "John.Doe@yourOrganization.com";

updateElementById('teslaEmail', `
E-mail this information to ${versionEmail}
Advise the Repair Facility that the team that handles Tesla claims will reach out with-in 24 hours.`);

const partsResHTML = `
<li>Note the RF contact name, mileage, labor rate, and labor time for the part.</li>
<li>Select the 'Parts' tab and click 'Part Ordered'.</li>
<li>Click the checkbox next to the part. Select 'Parts Return'.</li>
<li>Select the repair facility.</li>
<li>Select the repair facility contact.</li>
<li>Enter the mileage, labor rate and hours.</li>
<li>Select that you have notified the customer</li>
<li>Enter a detailed description of why the part was wrong or how it failed.</li>
<li>Click 'Finish'</li>`;

const partsRes = document.getElementById('partsRes');
if (!isAC() && partsRes) partsRes.innerHTML = partsResHTML;

const otherFluidsVersion = `
REG OIL: 7.27
SYN OIL: 10.79

DEX III: 11.52
ATF+4: 12.99
DEX VI/SYN: 13.86
MERC V: 13.19
CVT: 14.19
REG GEAR OIL: 13.11
SYN GEAR OIL: 19.66
FRIC MODIFIER: 11.59

PS FLUID: 8.16

DOT 3: 5.90 PER 12 OZ
DOT 4: 6.30 PER 12 OZ

REG COOLANT: 16.99
LONG LIFE COOLANT: 21.50

R134A: 1.50/OZ
R1234YF: 6.50/OZ
PAG OIL: 10.91/OZ
AC UV DYE: 12.81/OZ
FLUSH SOLVANT: 6.68/OZ

ENG/TRANS DYE: 11.47/OZ
SEALANT/RTV: 15.32 PER 3.5OZ`;

const div6 = document.getElementById('div6');
if (!isAC() && div6) div6.innerText = otherFluidsVersion;

const otherNumVersion = `
Payments
555-555-5555

Towing
555-555-5555

Rental
555-555-5555

Main
555-555-5555`;

const NUMBERS = document.getElementById('NUMBERS');
if (!isAC() && NUMBERS) NUMBERS.innerText = otherNumVersion;

const MBIsidenav = document.getElementById('MBIsidenav');
if (!isAC() && MBIsidenav) MBIsidenav.innerHTML = 'GL6';

const Xfer2790sidenav = document.getElementById('Xfer2790sidenav');
if (!isAC() && Xfer2790sidenav) Xfer2790sidenav.innerText = '2024';

const pdf0029 = document.getElementById('pdf0029');
if (!isAC() && pdf0029) pdf0029.innerText = 'GL6 Claims';

const questa4 = document.getElementById('questa4');
if (!isAC() && questa4) questa4.innerHTML = `
            <h3 class="headerTab marginBottom0">Common questions</h3>
            <p class="center marginTop">And Their Answers or Where to Find Them.</p>
            <div class="questionContain">
                <div class="questions noShow" id="questa1">
                    &blacklozenge; Where can I find tracking information?
                </div>
                <div class="questions noShow" id="questa2">
                    &blacklozenge; Am I supposed to open a claim or can this end in interaction?
                </div>
                <div class="questions noShow" id="questa3">
					&blacklozenge; Only some of the authorized repairs are going to be completed.<br>
                    How do I make the estimate match the invoice?
                </div>
                <div class="questions noShow" id="questa5">
                    &blacklozenge; The Repair Facility is saying they didn't get paid.<br>
                    It shows they were paid in our system.<br>
                    How can I help?
                </div>
            </div>
            <div id="anstoquesta1" class="answerSlide noShow">
                <ul>
                    <li>Note the claim number.</li>
                    <li>Go to the AM home tab.</li>
                    <li>Click Track Orders.</li>
                    <li>Select the search option</li>
                    <li>Input the claim number into the search box and click search.</li>
                    <li>Click on the order number.</li>
                    <li>This will show relevant info such as the tracking number, address shipped to, etc.</li>
                    <li>Clicking on the tracking number will show you current shipment status.</li>
                </ul>
            </div>
            <div id="anstoquesta2" class="answerSlide noShow">
                <p class="QandA">You MUST open a claim if:</p>
                <ul>
                    <li>The part has coverage.</li>
                    <li>There is a mileage issue. Negative mileage, for example.</li>
                    <li>There is a VIN issue.</li>
                </ul>
                <p class="QandA">A claim doesn't need to be opened if:</p>
                <ul>
                    <li>The part is PNLC unless VIN or mileage<br>issues need to be addressed</li>
                    <li>The CH vehicle is not at the RF.</li>
                    <li>The RF doesn't have a verified failure.</li>
                </ul>
                <p class="QandA">Even if the claim will be denied, one must be opened if the part is listed.<br><br>
                    Even if the part is not listed, an open claim is needed to correct mileage or VIN issues.</p>
            </div>
            <div id="anstoquesta3" class="answerSlide noShow">
                <ul>
                    <li>Reauthorize the claim using the button in the tab of the system.</li>
                    <li>Go to the estimate and lock out other users.</li>
                    <li>Open the section of the estimate to find the items that are no longed needed.</li>
                    <li>Select the checkbox next to each of those items.</li>
                    <li>Click the Claim Item button.</li>
                    <li>For part line items, set the Repair Facility and Authorized prices to $0.00.</li>
                    <li>For labor line items, set the Repair Facility and Authorized labor hours to 0.0.</li>
                    <li>Click 'Save' in the bottom right corner when finished with each item.</li>
                </ul>
                <p class="QandA marginAlign"><b>IMPORTANT - Do NOT change any PART line item to a QUANTITY of 0.</b></p>
            </div>
            <div id="anstoquesta5" class="answerSlide noShow"><br>
                <p class="QandA">'Paid' status in the system just means that the payment was sent<br>
                    It does not indicate if any money was actually dispersed.<br>
                    In order to resolve the issue:
				</p>
                <ul>
                    <li>Verify the payment information on file and fix any errors.</li>
                    <li>Notate the claim stating the situation and that you verified payment info.</li>
                    <li>Note the claim number, Contract Holder name, and RF payment information.</li>
                    <li>To verify whether or not payment has been released and to release a secondary payment,<br>contact Accounting.</li>
                    <li>Call the Accounting line, explain the situation and provide any requested information</li>
                    <li>Accounting will inform you if the card was ran or release payment if it hasn't.</li>
                    <li>Inform the RF of the outcome.</li>
                </ul>
            </div>`;

const pricingOther = `
			<h3 class="headerTab">Parts Pricing - AM and Sourcing</h3>
			<div id="authGuide1" class="authGuide noShow">
				<p class="bodyTab"><b>Is the Repair Facility part OEM or AM?</b>
					<input type="radio" class="authGuideradio" id="AM1" name="guide1" value="AM"><label for="AM1" class="floatRight"><b>AM</b></label><br>
					<input type="radio" class="authGuideradio" id="OE1" name="guide1" value="OE"><label for="OE1" class="floatRight"><b>OEM</b></label>
				</p>
				<div id="authGuideOE" class="authGuide noShow noDisp">
					<p class="bodyTab"><b>Is the MSRP over $200.00?</b>
						<input type="radio" class="authGuideradio" id="over1" name="guide2" value="over"><label for="over1" class="floatRight"><b>Yes</b></label><br>
						<input type="radio" class="authGuideradio" id="under1" name="guide2" value="under"><label for="under1" class="floatRight"><b>No</b></label>
					</p>
					<div id="oeunder" class="authGuide noShow noDisp">
						<p class="bodyTab"><b>Is the Repair Facility charging more than OEM MSRP?</b>
							<input type="radio" class="authGuideradio" id="rfovli34" name="gui"><label for="rfovli34" class="floatRight"><b>Yes</b></label><br>
							<input type="radio" class="authGuideradio" id="rfundli34" name="gui"><label for="rfundli34" class="floatRight"><b>No</b></label>
						</p>
						<div id="rfovrmsrp" class="authGuide noShow noDisp">
							<p class="bodyTab"><b>If the Repair Facility won't match, is shipping an option?</b>
								<input type="radio" class="authGuideradio" id="yyyship" name="guid234" value="yes"><label for="yship" class="floatRight"><b>Yes</b></label><br>
								<input type="radio" class="authGuideradio" id="nnnship" name="guid234" value="no"><label for="nship" class="floatRight"><b>No</b></label>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="authGuideAM" class="authGuide noShow noDisp">
				<p><b>AM Sourcing</b></p>
				<p class="bodyTab">Enter the CH VIN into AM<br>
					If the RF is using OEM, search using the OEM part number<br>
					If the RF is using AM, search using the part name<br><br>
					Follow the instructions listed here as a reminder of procedure
				</p>
				<p class="bodyTab"><b>Does AM have options?</b>
					<input type="radio" class="authGuideradio" id="paopt1" name="guide3" value="yespa"><label for="paopt1" class="floatRight"><b>Yes</b></label><br>
					<input type="radio" class="authGuideradio" id="noopt1" name="guide3" value="nopa"><label for="noopt1" class="floatRight"><b>No</b></label>
				</p>
			</div>
			<div id="paGuide" class="authGuide noShow noDisp">
				<p><b>AM Pricing</b></p>
				<p class="bodyTab"><b>Is the AM LIST price over $200.00?</b>
					<input type="radio" class="authGuideradio" id="listov" name="guide4" value="over"><label for="listov" class="floatRight"><b>Yes</b></label><br>
					<input type="radio" class="authGuideradio" id="listund" name="guide4" value="under"><label for="listund" class="floatRight"><b>No</b></label>
				</p>
				<div id="listUnder" class="noShow authGuide noDisp">
					<p class="bodyTab2"><b>This is your part.</b><br>- AM List is your MSRP.</p>
					<p class="bodyTab"><b>Is the RF charging more than AM List?</b>
						<input type="radio" class="authGuideradio" id="rfovli" name="guide5" value="over"><label for="rfovli" class="floatRight"><b>Yes</b></label><br>
						<input type="radio" class="authGuideradio" id="rfundli" name="guide5" value="under"><label for="rfundli" class="floatRight"><b>No</b></label>
					</p>
					<div id="rfovrlist" class="noShow authGuide noDisp">
						<p class="bodyTab"><b>If the RF won't match, is shipping an option?</b>
							<input type="radio" class="authGuideradio" id="yship" name="guide6" value="yes"><label for="yship" class="floatRight"><b>Yes</b></label><br>
							<input type="radio" class="authGuideradio" id="nship" name="guide6" value="no"><label for="nship" class="floatRight"><b>No</b></label>
						</p>
					</div>
				</div>
				<div id="listOver" class="noShow authGuide noDisp">
					<p class="bodyTab"><b>Is AM cost over $200.00?</b><br>Either way, note the MCE AM part.
						<input type="radio" class="authGuideradio" id="costo" name="guide7" value="over"><label for="costo" class="floatRight"><b>Yes</b></label><br>
						<input type="radio" class="authGuideradio" id="costu" name="guide7" value="under"><label for="costu" class="floatRight"><b>No</b></label>
					</p>
					<div id="costund" class="noShow authGuide noDisp">
						<p class="bodyTab2"><b>This is your part.</b><br>- AM List is your MSRP.<br>- AM Cost is MCE.</p>
						<p class="bodyTab"><b>Is RF charging more than AM Cost</b>
							<input type="radio" class="authGuideradio" id="rfovco" name="guide8" value="over"><label for="rfovco" class="floatRight"><b>Yes</b></label><br>
							<input type="radio" class="authGuideradio" id="rfundco" name="guide8" value="under"><label for="rfundco" class="floatRight"><b>No</b></label>
						</p>
						<div id="rfovrcost" class="noShow authGuide noDisp">
							<p class="bodyTab"><b>If the RF won't match, is shipping an option?</b>
								<input type="radio" class="authGuideradio" id="yship2" name="guide9" value="yes"><label for="yship2" class="floatRight"><b>Yes</b></label><br>
								<input type="radio" class="authGuideradio" id="nship2" name="guide9" value="no"><label for="nship2" class="floatRight"><b>No</b></label>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="IHSourcing" class="noShow authGuide noDisp">
				<p><b>In House Sourcing</b></p>
				<p class="bodyTab">
					There is a specific set of instructions to follow.<br>
					Those instructions are listed right here.<br>
					If you follow the instructions in this section,<br>
					you will consistently make the correct decision.
				</p>
			</div>
			<button id="resetPA" class="wefwefwef">Reset</button>`;
			
const PAPriceDiv = document.getElementById('PAPrice');
if (!isAC() && PAPriceDiv) PAPriceDiv.innerHTML = pricingOther;
			
const MileDiscrepOther = `
            <h3 class="headerTab">Mileage Discrepancies</h3>
            <div id="MileDiscrep1" class="mileage noShow">
                <p><b>Is the contract Type 1 or a Type 2 Contract?</b>
                    <input type="radio" class="mdguide" id="md1" name="discrep1" required><label for="md1" class="floatRight"><b>Type 1</b></label><br>
                    <input type="radio" class="mdguide" id="md2" name="discrep1" required><label for="md2" class="floatRight"><b>Type 2</b></label>
                </p><br>
                <p><b>Is the vehicle over 100 days in coverage?</b>
                    <input type="radio" class="mdguide" id="md3" name="discrep2" required><label for="md3" class="floatRight"><b>Yes</b></label><br>
                    <input type="radio" class="mdguide" id="md4" name="discrep2" required><label for="md4" class="floatRight"><b>No</b></label>
                </p><br>
                <p><b>What kind of mileage discrepancy is being reviewed?</b><br>
                    <input type="radio" class="mdguide" id="md5" name="discrep3" required><label for="md5" class="floatRight"><b>Negative Mileage</b></label><br>
                    <input type="radio" class="mdguide" id="md6" name="discrep3" required><label for="md6" class="floatRight"><b>Proven Inaccurate Start Mileage</b></label><br>
                    <input type="radio" class="mdguide" id="md7" name="discrep3" required><label for="md7" class="floatRight"><b>Mileage Unknown/Rollback/Inop ODO</b></label><br>
                    <input type="radio" class="mdguide" id="md8" name="discrep3" required><label for="md8" class="floatRight"><b>High Mileage Per Day</b></label>
                </p><br>
            </div>
            <div id="under90hmpd" class="mileage noShow noDisp">
                <p><b>Does the contract have the <b>Special A</b> or <b>Special B</b> surcharge?</b>
                    <input type="radio" class="mdguide" id="md9" name="discrep4" required><label for="md9" class="floatRight"><b>Yes</b></label><br>
                    <input type="radio" class="mdguide" id="md10" name="discrep4" required><label for="md10" class="floatRight"><b>No</b></label>
                </p>
            </div>
            <div id="norideshare" class="mileage noShow noDisp">
                <p>Contact the customer and ask about usage for potential Special A/Special B.<br>
                    <b>Did the customer admit to Special A or Special B use?</b>
                    <input type="radio" class="mdguide" id="md11" name="discrep5" required><label for="md11" class="floatRight"><b>Yes</b></label><br>
                    <input type="radio" class="mdguide" id="md12" name="discrep5" required><label for="md12" class="floatRight"><b>No</b></label>
                </p>
            </div>
            <div id="proceed" class="mileage noShow noDisp">
                <p class="bodyTab">
                    Proceed with the claim as normal.<br>
                    Do not send to Review Team.
                </p>
            </div>
            <div id="crReview" class="mileage noShow noDisp">
                <p class="bodyTab">
                    Task to Review Team to review.<br>
                    Refer to the <b>Tasking Review Team</b> Job Aid.<br>
                </p>
            </div>
            <div id="mileageCalc" class="mileage noShow noDisp">
                <p><b>How to Proceed with a Mileage Calculation</b></p>
                <p class="bodyTab">
                    Verify the breakdown mileage with the Repair Facility.<br>
                    If the Repair Facility has any records the fit the required criteria, request them.<br>
                    If the Repair Facility doesn't have a record available to be used immediately, request verifiable records from the customer.<br>
                    If none are available or they are uncooperative, a CARFAX report may be used.<br>
                    Records should be as close to date of sale as possible</p>
                <ul>
                    <li>No older than 12 months prior to date of sale.</li>
                    <li>Must be prior to date of sale</li>
                </ul>
                <p class="bodyTab">
                    Perform a mileage calculation using the SOP available in the Document Base.
                </p>
            </div>
            <div id="buttons" class="noShow">
                <button id="mileagebtn" class="wefwefwef">Next</button>
                <button id="resetMD" class="wefwefwef">Reset</button>
            </div>`;
			
const MileDiscrep = document.getElementById('MileDiscrep');
if (!isAC() && MileDiscrep) MileDiscrep.innerHTML = MileDiscrepOther;