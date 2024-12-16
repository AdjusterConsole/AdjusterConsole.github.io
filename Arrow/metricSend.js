(async function sendButtonTrackerData() {
  const endpoint = "https://script.google.com/macros/s/AKfycbyHI2dhI9pYdokJUEBe3Jca_msUG2EfLpfH5bwlfhWFPf-jL2-cOGzzX-TEmU-RUCTb/exec";
  const secretKey = "vnBBHbBhy8755430988nhvj";
  function getButtonTrackerData() {
    const buttonTracker = localStorage.getItem("buttonTracker");
    return buttonTracker ? JSON.parse(buttonTracker) : {};
  }
  function ensureLastDaySent(buttonTracker) {
    if (!buttonTracker.hasOwnProperty("lastDaySent")) {
      buttonTracker.lastDaySent = null;
    }
    return buttonTracker;
  }
  const today = daysSinceEpoch();
  let buttonTrackerData = getButtonTrackerData();
  buttonTrackerData = ensureLastDaySent(buttonTrackerData);
  if (Object.keys(buttonTrackerData).length === 0) {
    console.warn("No buttonTracker data found in localStorage.");
    return;
  }
  let dataToSend = {};
  if (buttonTrackerData.lastDaySent === null) {
    console.log("lastDaySent is not defined. Sending all buttonTracker data.");
    Object.keys(buttonTrackerData).forEach(key => {
      if (key !== "lastDaySent") {
        dataToSend[key] = {
          description: buttonTrackerData[key].description,
          type: buttonTrackerData[key].type,
          data: buttonTrackerData[key].data
        };
      }
    });
  } else if (buttonTrackerData.lastDaySent === today) {
    console.log("Data already sent today. Skipping.");
    return;
  } else {
    Object.keys(buttonTrackerData).forEach(key => {
      if (key !== "lastDaySent" && buttonTrackerData[key].data && buttonTrackerData[key].data[today]) {
        dataToSend[key] = {
          description: buttonTrackerData[key].description,
          type: buttonTrackerData[key].type,
          data: {
            [today]: buttonTrackerData[key].data[today]
          }
        };
      }
    });
  }
  if (Object.keys(dataToSend).length === 0) {
    console.log("No relevant data to send.");
    return;
  }
  try {
    const response = await fetch(`${endpoint}?secret=${secretKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ buttonTracker: dataToSend })
    });
    const result = await response.json();
    if (result.status === "success") {
      buttonTrackerData.lastDaySent = today;
      localStorage.setItem('buttonTracker', JSON.stringify(buttonTrackerData));
      console.log("Button tracker data successfully sent.");
    } else {
      console.error("Error from server:", result.error);
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
})();