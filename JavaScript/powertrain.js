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
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.

let myTimeout1;
let myTimeout2;
let myTimeout3;

function slideOpen() {
  let slideOpen = localStorage.getItem('slideOpen');
  if (slideOpen == 'true') {
    return true;
  } else {
    return false;
  }
}

function showDenials() {
  const denyDiv = document.getElementById('denialBtnDiv');
  if (slideOpen()) {
    closeSlide();
  } 
  denyDiv.classList.add('showit');
  denyDiv.classList.remove('hideit');
  localStorage.setItem('slideOpen', true);
  localStorage.setItem('whichSlide', 'denialBtnDiv');
  if (myTimeout2) {
    clearTimeout(myTimeout2);
  }
  if (myTimeout3) {
    clearTimeout(myTimeout3);
  }
  myTimeout1 = setTimeout(closeSlide,3000);
}

function showReviews() {
  const reviewDiv = document.getElementById('reviewBtnDiv');
  if (slideOpen()) {
    closeSlide();
  } 
  reviewDiv.classList.add('showit');
  reviewDiv.classList.remove('hideit');
  localStorage.setItem('slideOpen', true);
  localStorage.setItem('whichSlide', 'reviewBtnDiv');
  if (myTimeout1) {
    clearTimeout(myTimeout1);
  }
  if (myTimeout3) {
    clearTimeout(myTimeout3);
  }
  myTimeout2 = setTimeout(closeSlide,3000);
}

function showRequests() {
  const requestDiv = document.getElementById('requestBtnDiv');
  if (slideOpen()) {
    closeSlide();
  } 
  requestDiv.classList.add('showit');
  requestDiv.classList.remove('hideit');
  localStorage.setItem('slideOpen', true);
  localStorage.setItem('whichSlide', 'requestBtnDiv');
  if (myTimeout1) {
    clearTimeout(myTimeout1);
  }
  if (myTimeout2) {
    clearTimeout(myTimeout2);
  }
  myTimeout3 = setTimeout(closeSlide,3000);
}

function closeSlide() {
  const whichSlideId = localStorage.getItem('whichSlide');
  const openSlide = document.getElementById(whichSlideId);
  openSlide.classList.remove('showit');
  openSlide.classList.add('hideit');
}

function ringDeny() {
  let text = "After review of borescope provided photos, there are obvious signs of excessive carbon.\rThis carbon is a biproduct of a fuel/spark related issue.\r";
  text += "Per the leak-down test performed, we have air bypass from piston rings (air escaping to crank case).\rWe know the piston rings are stuck, and have made marks/scoring on the cylinder walls.\r";
  text += "The stuck piston rings can be attributed to the carbon.\rCarbon is an exclusion on this policy.\rThe engine portion of this claim will be denied.\r";
  text += "The following items and conditions are not covered by this CONTRACT:\r\r";
  text += "17. BREAKDOWNS resulting from engine sludge, carbon, pre-ignition, detonation, varnish, corrosion, foreign objects, dirt, dust, liquid, cracked rubber and/or neoprene parts, dry-rot, road chemicals, lack of proper fluids or use of additives or fuel grades not recommended by the manufacturer.";
  copy(text);
}

function autoEnable() {
  document.getElementById("fileUploaderDiv").classList.toggle('slideFilein');
  document.getElementById("fileUploaderDiv").classList.toggle('slideFileout');
}

function slideTextarea() {
  document.getElementById("partsSlide").classList.toggle('home');
  document.getElementById("partsSlide").classList.toggle('away');
}

function copyTextFunc(id) {
 
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
  switch(id) {

    case 'conopdeny':
    text = '21. Negligence:\ra. Continuing to operate YOUR VEHICLE and not protecting YOUR VEHICLE from\rfurther damage after a BREAKDOWN may result in no COVERAGE for any\radditional damage.\r';
    copy(text);
    closeSlide();
    break;

    case 'sludgedeny':
    text = '17. BREAKDOWNS resulting from engine sludge, carbon, pre-ignition, detonation, varnish,\rcorrosion, foreign objects, dirt, dust, liquid, cracked rubber and/or neoprene parts, dry-rot,\rroad chemicals, lack of proper fluids or use of additives or fuel grades not recommended by\rthe manufacturer\r';
    copy(text);
    closeSlide();
    break;

    case 'waitdeny':
    text = '3. Pre-existing conditions: BREAKDOWNS that occurred prior to the CONTRACT purchase\rdate or during the WAITING PERIOD.\r\r21. WAITING PERIOD: the amount of time AND miles the VEHICLE must be driven after the\rCONTRACT effective date before BREAKDOWN COVERAGE begins, as specified on the\rDECLARATIONS PAGE.\r';
    copy(text);
    closeSlide();
    break;

    case 'T31':
    text = 'Technician states:\r\rPart failure\rPart failure\rPart failure\r\rPlease have the technician demonstrate the failures listed above.\r\rNotate if rust, corrosion, or any outside influence is the cause of failure.\rNotate available fluid levels and conditions.\rFor electrical components, have technician verify power and ground.\r\rPlease take pictures of the following:\r';
    text += 'All failures.\rAll 4 sides of vehicle, vin, and odometer.\rInspection stickers and oil change stickers.\rWheels, tires, and rotors.\rAny dash light that are on, current or history DTCs, and any freeze frame data available.\rAny signs of commercial use or modifications.\rAny rust, corrosion, or collision damage.\rAny other information relevant to the failures.\r\rIf the failure is related to drivability or verification is noise based, please provide video verification.\r\rPlease contact the Repair Facility 1-2 hours before arrival.\r\rContact Name:\rEmail:\rDirect Line:\r';
    copy(text);
    closeSlide();
    break;

    case 'T41':
    text = 'Inspection Review\rReason for inspection:\rLabor rate:\rMileage:\rFluid condition:\rModifications/Collision/Commercial:\rInspector findings/photo review:';
    copy(text);
    closeSlide();
    break;

    case 'T51':
    text = 'Reviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r';
    copy(text);
    closeSlide();
    break;

    case 'T61':
    text = 'CARFAX Report Review:\r1.) What I was looking for:\r2.) Red flags or Mileage Discrepancy:\r3.) Does it relate to the claim:\r4.) What is needed now:';
    copy(text);
    closeSlide();
    break;

    case 'T71':
    text = 'Requesting photos from Repair Facility to verify failure and avoid inspection delay.\rInforming Repair Facility to include pics of all 4 corners of the vehicle, VIN plate, odometer, and pictures of the failure.\rSent request via SRS action button.\r';
    copy(text);
    closeSlide();
    break;

    case 'T81':
    text = 'Requesting Contract Holder statement regarding issues.\rRequesting past 12 months of service records from the Contract Holder.\rSent records request using SRS action button.\rWill call the Contract Holder to inform.\r';
    copy(text);
    closeSlide();
    break;

    case 'T91':
    text = 'Called Contract Holder to request records.\rCalled Contract Holder to request statement.\rNo answer – left voicemail.\rTasked to CS callbacks.';
    copy(text);
    closeSlide();
    break;

    case 'prompt':
    text = `I'm going to upload an automotive repair estimate.
I want you to output the information in the following JSON format as a downloadable file: 

[
  {
    "partNumber": "partNumberFromEstimate",
    "partName": "partNameFromEstimate",
    "priceEach": "partPriceFromEstimate",
    "quantity": "partquantityFromEstimate"
  },
  {
    "partNumber": "partNumberFromEstimate",
    "partName": "partNameFromEstimate",
    "priceEach": "partPriceFromEstimate",
    "quantity": "partquantityFromEstimate"
  },
  {
    "partNumber": "partNumberFromEstimate",
    "partName": "partNameFromEstimate",
    "priceEach": "partPriceFromEstimate",
    "quantity": "partquantityFromEstimate"
  }
]
  

In the estimate, part numbers will have a red dot to the left, part names will have an orange dot to the left, quantity will have a yellow dot to the left and prices will have a green dot to the left.
Each line is an individual part and should have its own entry in the JSON output file. Do not include the dollar sign in the part price.`;
    copy(text);
    break;

    case 'T101':
    STMTTEMP();
    closeSlide();
    break;
  }
}

function closeChart() {
    document.getElementById('imageContainer').classList.remove('showImg');
    document.getElementById('closeChartBtn').classList.remove('showImg');
}

function flowchart() {
    const imageContainer = document.getElementById('imageContainer');
    const flowchartImg = document.getElementById('flowchartImg');

    flowchartImg.setAttribute('draggable', false);
    flowchartImg.addEventListener('dragstart', function(event) {
        event.preventDefault();
    });

    // Initialize transform values
    let scale = 1;
    let translateX = 0;
    let translateY = 0;

    let isDragging = false;
    let startX, startY;

    // Function to update the image transform
    function updateTransform() {
        flowchartImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function showImage() {
        imageContainer.classList.add('showImg');
        document.getElementById('closeChartBtn').classList.add('showImg');
        translateX = 0;
        translateY = 0;
        updateTransform();
    }

    imageContainer.addEventListener('wheel', function(event) {
        event.preventDefault();

        // Calculate scale change
        const scaleChange = event.deltaY < 0 ? 1.1 : 1 / 1.1;

        // Adjust translateX and translateY to zoom in/out based on the center of the viewport
        translateX -= (0 - translateX) * (scaleChange - 1);
        translateY -= (0 - translateY) * (scaleChange - 1);

        // Apply the new scale
        scale *= scaleChange;

        updateTransform();
    });

    // Mouse down event to start dragging
    flowchartImg.addEventListener('mousedown', function(event) {
        isDragging = true;
        startX = event.clientX - translateX;
        startY = event.clientY - translateY;
        imageContainer.classList.add('dragging');
    });

    // Mouse move event to drag the image
    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            translateX = event.clientX - startX;
            translateY = event.clientY - startY;
            updateTransform();
        }
    });

    // Mouse up event to stop dragging
    document.addEventListener('mouseup', function() {
        isDragging = false;
        imageContainer.classList.remove('dragging');
    });

    showImage();
}







