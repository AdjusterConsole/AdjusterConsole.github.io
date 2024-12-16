let buttonTracker;
let root;
const today = daysSinceEpoch();
sessionStorage.setItem("currentDay", today);
document.addEventListener('DOMContentLoaded', initializeButtonTrackerData);

function initializeButtonTrackerData() {
	const storedTracker = localStorage.getItem("buttonTracker");
	const storedRoot = localStorage.getItem("root");
	if (!storedTracker || storedTracker === null || storedTracker === "undefined") {
		buttonTracker = newTracker();
		sessionStorage.removeItem("currentDay");
	} else {
		buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
	}
	if (!storedRoot) {
		root = newRoot();
		initializeRoot();
	} else {
		root = JSON.parse(localStorage.getItem("root"));
	}
	let savedDay = sessionStorage.getItem("currentDay");
	const todayString = today.toString();
	if (todayString === savedDay) {
		return;
	} else {
		for (const buttonKey in buttonTracker) {
			const button = buttonTracker[buttonKey];
			trackerDay(button);
		}
		sessionStorage.setItem("currentDay", today);
	}
	savebuttonTracker();
}

function savebuttonTracker() {
	localStorage.setItem('buttonTracker', JSON.stringify(buttonTracker));
	localStorage.setItem('root', JSON.stringify(root));
	if (document.getElementById('dashContainer').classList.contains('show')) filterAndDisplayData();
}

function initializeRoot() {
	root[today] = {
		totalClicks: 0,
		allTimeSaved: 0,
		totalWords: 0,
		notesOutput: 0
	};
}

function trackerDay(button) {
	if (button.type !== "none") {
		button.data[today] = {
			count: 0,
			cancelled: 0,
			words: 0,
			totalTimeSaved: 0,
			times: []
		};
	}
}

function daysSinceEpoch() {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const now = new Date();
    const utcMidnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return Math.floor(utcMidnight / millisecondsPerDay).toString();
}

function validate(buttonId) {
	const button = buttonTracker[buttonId];
	if (!button) {
		console.error(`Button ID ${buttonId} not found in buttonTracker.`);
		return null;
	}
	if (!button.data[today]) {
		trackerDay(button);
	}
	return button;
}

function addCount(buttonId) {
	const button = validate(buttonId);
	button.data[today].count += 1;
	savebuttonTracker();
}

function startTimer(buttonId) {
	const button = validate(buttonId);
	button.timeStarted = Date.now();
	if (button.description.includes("pdf")) {
		sessionStorage.setItem("pdfId", button.description);
	}
	savebuttonTracker();
}

function stopTimer(buttonId) {
	const button = validate(buttonId);
	if (!button) return;
	const startTime = button.timeStarted;
	if (!startTime || isNaN(startTime)) {
		return;
	}
	const elapsedRaw = (Date.now() - startTime) / 1000;
	const elapsed = elapsedRaw.toFixed(2);
	button.data[today].times.push(elapsed);
	button.timeStarted = null;
	savebuttonTracker();
}

function cancelTimer(buttonId) {
	const button = validate(buttonId);
	if (!button) return;
	button.timeStarted = null;
	button.data[today].cancelled += 1;
	if (button.data[today].count > 0) {
		button.data[today].count -= 1;
	}
	savebuttonTracker();
}

function handlePdfs() {
	const pdfId = sessionStorage.getItem("pdfId");
	stopTimer(pdfId);
	sessionStorage.removeItem("pdfId");
}

document.addEventListener('DOMContentLoaded', initButtonListeners);
function initButtonListeners() {
	document.addEventListener("click", (event) => {
		const buttonId = event.target.id;
		if (buttonTracker[buttonId]) {
			processClicks(buttonId);
		}
	});
}

function processClicks(buttonId) {
	const button = validate(buttonId);
	if (!button || ["tools", "SOPs", "tutorials"].includes(buttonId) || ["policy", "diag", "pdfsop"].includes(button.type))
		return;
	const remapId = button.remap;
	if (remapId) { 
		processClicks(remapId);
		return;
	}
	const targetId = button.target;
	if (targetId) {
		addCount(buttonId);
		cancelTimer(targetId);
		return;
	}
	const hook = button.hook;
	if (hook) {
		handlePdfs();
		return;
	}
	const finishId = button.finish;
	if (finishId) {
		addCount(finishId);
		stopTimer(finishId);
		return;
	}
	if (button.isTimed) {
		const timerValue = button.timeStarted;
		if (timerValue) {
			cancelTimer(buttonId);
		}
		startTimer(buttonId);
		return;
	}
	addCount(buttonId);
}

document.getElementById('metricMenu')?.addEventListener('click', function () {
	document.getElementById('dashContainer').classList.add('show');
	filterAndDisplayData();
});

document.getElementById('closeDash')?.addEventListener('click', function () {
	document.getElementById('dashContainer').classList.remove('show');
	document.getElementById("startDate").value = '';
    document.getElementById("endDate").value = '';
});

function resetMetricDisplay() {
	document.getElementById("detailsContent").innerHTML = '';
	document.getElementById("detailContainer").classList.add("hidden");
	document.getElementById("mainDash").classList.remove("share");
}

document.getElementById("endDate")?.addEventListener("change", filterAndDisplayData);
document.getElementById("startDate")?.addEventListener("change", filterAndDisplayData);
document.getElementById("closeMetricDetail")?.addEventListener("click", resetMetricDisplay);
document.getElementById("typeFilter")?.addEventListener("change", filterAndDisplayData);

document.getElementById("dateFilter")?.addEventListener("change", () => {
	const customDateRange = document.getElementById("customDateRange");
	if (document.getElementById("dateFilter").value === "custom") {
		customDateRange.style.display = "block";
	} else {
		customDateRange.style.display = "none";
		filterAndDisplayData();
	}
});

function resetBodyDisplay() {
	document.getElementById("basicMapBody").innerHTML = '';
	document.getElementById("timeMapBody").innerHTML = '';
	document.getElementById("complexMapBody").innerHTML = '';
	document.getElementById("basicMapTable").style.display = 'none';
	document.getElementById("timeMapTable").style.display = 'none';
	document.getElementById("complexMapTable").style.display = 'none';
}

function determineOutputTime(secs) {
	let seconds = Number(secs);
    if (seconds < 0 || isNaN(seconds)) {
		seconds = 0;
    }
    const hours = Math.floor(seconds / 3600) || 0;
    const minutes = Math.floor((seconds % 3600) / 60) || 0;
    const remainingSeconds = Math.floor(seconds % 60) || 0;
	let formattedTime;
	if (hours > 0) {
		if (minutes > 0) {
			if (remainingSeconds > 0) {
				formattedTime = `${hours} hours\r${minutes} mins\r${remainingSeconds} secs`;
			} else {
				formattedTime = `\r${hours} hours\r${minutes} mins\r`;
			}
		} else {
			if (remainingSeconds > 0) {
				formattedTime = `\r${hours} hours\r${remainingSeconds} secs`;
			} else {
				formattedTime = `${hours} hours`;
			}
		}
	} else {
		if (minutes > 0) {
			if (remainingSeconds > 0) {
				formattedTime = `${minutes} mins\r${remainingSeconds} secs`;
			} else {
				formattedTime = `${minutes} mins`;
			}
		} else {
			formattedTime = `${remainingSeconds} secs`;
		}
	}
	return formattedTime;
}
	
function filterAndDisplayData() {
	resetBodyDisplay();
	const dateRange = getDateRange();
	const filteredButtons = filterButtons();
	const sortedMap = getSortedButtons(filteredButtons);
	outputSelection(sortedMap);
}

function getDateRange() {
    let dateRange = [];
    const today = parseInt(daysSinceEpoch());
	const dateFilter = document.getElementById("dateFilter").value;
    switch (dateFilter) {
        case "today":
            dateRange = [today];
            break;
        case "last7Days":
            for (let i = 0; i < 7; i++) {
                dateRange.push(today - i);
            }
            break;
        case "lastMonth":
            for (let i = 0; i < 30; i++) {
                dateRange.push(today - i);
            }
            break;
        case "custom": {
			const startDateInput = document.getElementById("startDate").value;
			const endDateInput = document.getElementById("endDate").value;
			const startDate = new Date(startDateInput);
			const endDate = new Date(endDateInput);
            if (isNaN(start) || isNaN(end)) {
                console.error("Invalid start or end date.");
                return null;
            }
            const startEpoch = Math.floor(start.getTime() / (24 * 60 * 60 * 1000));
            const endEpoch = Math.floor(end.getTime() / (24 * 60 * 60 * 1000));
            if (startEpoch > endEpoch) {
                console.error("Start date must be earlier than or equal to end date.");
                return null;
            }
            for (let i = startEpoch; i <= endEpoch; i++) {
                dateRange.push(i);
            }
            break;
        }
        default:
            console.error("Invalid date filter provided.");
            return null;
    }
    return dateRange;
}

function filterButtons() {
    const buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
    if (!buttonTracker) {
        console.error("buttonTracker not found in localStorage.");
        return null;
    }
    const selectedFilter = document.getElementById('typeFilter').value;
    const tempTracker = {};
    const filterGroups = {
        basic: ["function", "customization", "menu", "info"],
        timed: ["tool", "diag", "complex", "policy", "pdfsop"],
        notes: ["simple", "complex"],
        all: Object.keys(buttonTracker),
    };
    for (const buttonId in buttonTracker) {
        const button = buttonTracker[buttonId];
        if (!button.type) continue;
		if (["finish", "cancel", "none"].includes(button.type)) continue;
        if (selectedFilter === "all" || (filterGroups[selectedFilter] && filterGroups[selectedFilter].includes(button.type)) || button.type === selectedFilter) {
            tempTracker[buttonId] = button;
        }
    }
    return tempTracker;
}

function getSortedButtons(inputTracker) {
    if (!inputTracker || typeof inputTracker !== "object") {
        console.error("Invalid inputTracker provided. It must be a valid object.");
        return null;
    }
    const trackerCopy = JSON.parse(JSON.stringify(inputTracker));
    const typeOrder = [
        "complex", "simple", "tool", "info", 
        "policy", "diag", "pdfsop", "functions", "customization", "menu"
    ];
    const typeBuckets = {
        complex: [],
        simple: [],
        tool: [],
        info: [],
        policy: [],
        diag: [],
		pdfsop: [],
        functions: [],
        customization: [],
        menu: []
    };
    Object.keys(trackerCopy).forEach(key => {
        const button = trackerCopy[key];
        if (typeOrder.includes(button.type)) {
            typeBuckets[button.type].push({ key, button });
        }
    });
    const sortedMap = new Map();
    typeOrder.forEach(type => {
        if (typeBuckets[type].length > 0) {
            typeBuckets[type].forEach(({ key, button }) => {
                sortedMap.set(key, button);
            });
        }
    });
    return sortedMap;
}

function outputSelection(sortedMap) {
    const basicMap = new Map();
    const timeMap = new Map();
	const complexMap = new Map();
    for (const [key, button] of sortedMap.entries()) {
        if (button.isTimed && button.type !== "complex") {
            timeMap.set(key, button);
        } else if (["functions", "customization", "menu", "info"].includes(button.type)) {
            basicMap.set(key, button);
        } else if (["simple", "complex"].includes(button.type)) {
            complexMap.set(key, button);
        }
    }
    if (basicMap.size > 0) basicMapOutput(basicMap);
    if (timeMap.size > 0) timeMapOutput(timeMap);
	if (complexMap.size > 0) complexMapOutput(complexMap);
}

function wordParseCount(text, buttonId) {
    const words = text.split(/\s+/).filter(word => word.trim().length > 0);
    let wordCount = 0;
    words.forEach(word => {
        const charPerWord = word.length;
        wordCount++;
        if (charPerWord > 5) {
            wordCount++;
        }
    });
    wordCount += Math.ceil(wordCount * 0.05);
    const estimatedTime = ((wordCount / 35) * 60).toFixed(2);
    addWordMetrics(wordCount, buttonId, estimatedTime);
	savebuttonTracker();
}

function addWordMetrics(wordCount, buttonId, estimatedTime) {
    const button = validate(buttonId);
    const today = daysSinceEpoch();
    if (!root[today]) {
        initializeRoot();
    }
    let timeSaved;
    if (button.isTimed) {
        const timesArray = button.data[today]?.times || [];
        const lastSaved = parseFloat(timesArray[timesArray.length - 1]) || 0;
        timeSaved = parseFloat(estimatedTime) - lastSaved;
    } else {
        timeSaved = parseFloat(estimatedTime);
    }
    const totalTimeSaved = parseFloat(button.data[today]?.totalTimeSaved || 0);
    const currentWords = parseFloat(button.data[today]?.words || 0);
    button.data[today].totalTimeSaved = parseFloat((totalTimeSaved + timeSaved).toFixed(2));
    button.data[today].words = parseFloat((currentWords + wordCount).toFixed(2));
    const allTimeSaved = parseFloat(root[today]?.allTimeSaved || 0);
    const totalWords = parseFloat(root[today]?.totalWords || 0);
    const notesOutput = parseInt(root[today]?.notesOutput || 0, 10);
    root[today].allTimeSaved = parseFloat((allTimeSaved + timeSaved).toFixed(2));
    root[today].notesOutput = notesOutput + 1;
    root[today].totalWords = Math.round(totalWords + wordCount);
}

function basicMapOutput(basicMap, range = null) {
    const dateRange = range || getDateRange();
    const basicMapTable = document.getElementById("basicMapTable");
    basicMapTable.style.display = "table";
    const basicMapBody = document.getElementById("basicMapBody");
    basicMapBody.innerHTML = "";
    for (const [key, button] of basicMap.entries()) {
        const {
			totalClicks, 
			averageClicksPerDay,
		} = computeMetrics(button, dateRange);
        const row = document.createElement("tr");
        row.classList.add("metricRow");
        row.dataset.key = key;
        row.innerHTML = `
            <td>${button.description}</td>
            <td>${button.type}</td>
            <td>${totalClicks}</td>
            <td>${averageClicksPerDay}</td>`;
        basicMapBody.appendChild(row);
    }
}

function timeMapOutput(timeMap, range = null) {
    const dateRange = range || getDateRange();
    const timeMapTable = document.getElementById("timeMapTable");
    timeMapTable.style.display = "table";
    const timeMapBody = document.getElementById("timeMapBody");
    timeMapBody.innerHTML = "";
    for (const [key, button] of timeMap.entries()) {
		const {
			totalClicks,
			averageClicksPerDay,
			averageTime,
		} = computeMetrics(button, dateRange);

		const row = document.createElement("tr");
		row.classList.add("metricRow");
		row.dataset.key = key;
		row.innerHTML = `
			<td>${button.description}</td>
			<td>${button.type}</td>
			<td>${totalClicks}</td>
			<td>${averageClicksPerDay}</td>
			<td>${averageTime}</td>`;
		timeMapBody.appendChild(row);
	}
}

function complexMapOutput(complexMap, range = null) {
    const dateRange = range || getDateRange();
    const complexMapTable = document.getElementById("complexMapTable");
    complexMapTable.style.display = "table";
    const complexMapBody = document.getElementById("complexMapBody");
    complexMapBody.innerHTML = "";
    for (const [key, button] of complexMap.entries()) {
        const {
            totalClicks,
			averageClicksPerDay,
            totalWordsOutput,
            totalTimeSaved,
            averageTimeSavedPerClick,
        } = computeMetrics(button, dateRange);
        const row = document.createElement("tr");
        row.classList.add("metricRow");
        row.dataset.key = key;
        row.innerHTML = `
            <td>${button.description}</td>
            <td>${button.type}</td>
            <td>${totalClicks}</td>
			<td>${averageClicksPerDay}</td>
            <td>${totalWordsOutput}</td>
			<td>${totalTimeSaved}</td>
            <td>${averageTimeSavedPerClick}</td>`;
        complexMapBody.appendChild(row);
    }
}

function computeMetrics(button, dateRange) {
    let totalClicks = 0;
    let totalWordsOutput = 0;
    let totalTimeSaved = 0;
	let totalTimeUsed = 0;
    let totalCancelled = 0;
    let times = [];
    let mostClicksSingle = 0;
    const validDays = dateRange.filter(date => {
        const dataForDate = button.data[date.toString()];
        return dataForDate && dataForDate.count > 0;
    });
    dateRange.forEach(date => {
        const dataForDate = button.data[date.toString()];
        if (dataForDate) {
            const clicks = dataForDate.count || 0;
            const words = dataForDate.words || 0;
            const timeSaved = dataForDate.totalTimeSaved || 0;
            const cancelled = dataForDate.cancelled || 0;
            totalClicks += clicks;
            totalWordsOutput += words;
            totalTimeSaved += timeSaved;
            totalCancelled += cancelled;
            if (clicks > mostClicksSingle) {
                mostClicksSingle = clicks;
            }
            if (dataForDate.times) {
                times = times.concat(dataForDate.times.map(Number));
            }
        }
    });
    const averageClicksPerDay = validDays.length > 0
        ? (totalClicks / validDays.length).toFixed(0)
        : "N/A";
    const averageWordsOutput = totalClicks > 0
        ? (totalWordsOutput / totalClicks).toFixed(2)
        : "N/A";
    totalTimeUsed = times.length
        ? times.reduce((sum, time) => sum + time, 0)
        : 0;
    const wordsPerMinNum = totalTimeUsed > 0
        ? (totalWordsOutput / (totalTimeUsed / 60)).toFixed(2)
        : "N/A";
	const wordsPerMin = `${wordsPerMinNum} wpm`;
    const averageTimeSavedPerClickTemp = totalClicks > 0
        ? (totalTimeSaved / totalClicks).toFixed(2)
        : "N/A";
    const averageTimeTemp = times.length
        ? (times.reduce((sum, time) => sum + time, 0) / times.length).toFixed(2)
        : "N/A";
    const fastestTimeTemp = times.length ? Math.min(...times).toFixed(2) : "N/A";
    const slowestTimeTemp = times.length ? Math.max(...times).toFixed(2) : "N/A";
	
	totalTimeUsed = determineOutputTime(totalTimeUsed);
	totalTimeSaved = determineOutputTime(totalTimeSaved);
	
	const averageTimeSavedPerClick = determineOutputTime(averageTimeSavedPerClickTemp);
	const averageTime = determineOutputTime(averageTimeTemp);
	const fastestTime = determineOutputTime(fastestTimeTemp);
	const slowestTime = determineOutputTime(slowestTimeTemp);
    return {
        totalClicks,
        averageClicksPerDay,
        mostClicksSingle,
        totalCancelled,
        totalWordsOutput,
        averageWordsOutput,
        totalTimeUsed,
        wordsPerMin,
        totalTimeSaved,
        averageTimeSavedPerClick,
        averageTime,
        fastestTime,
        slowestTime
    };
}

document.getElementById("closeMetricDetail")?.addEventListener("click", function () {
	document.getElementById("mainDash").classList.remove("share");
	document.getElementById("detailContainer").classList.add("hidden");
});

document.getElementById("basicMapTable")?.addEventListener("click", handleRowClick);
document.getElementById("timeMapTable")?.addEventListener("click", handleRowClick);
document.getElementById("complexMapTable")?.addEventListener("click", handleRowClick);

function handleRowClick(event) {
    const row = event.target.closest("tr");
    if (!row || !row.dataset.key) return;
    const key = row.dataset.key;
    const button = buttonTracker[key];
    if (!button) {
        return;
    }
    const today = new Date();
    const dayOfWeek = today.getDay();
    let currentFriday = new Date(today);
    currentFriday.setDate(today.getDate() - ((dayOfWeek + 2) % 7));
    const dateRanges = [];
    for (let i = 0; i < 4; i++) {
        const friday = new Date(currentFriday);
        const monday = new Date(currentFriday);
        monday.setDate(friday.getDate() - 4);
        dateRanges.unshift({
            start: monday.toISOString().split("T")[0],
            end: friday.toISOString().split("T")[0],
        });
        currentFriday.setDate(currentFriday.getDate() - 7);
    }
	const metricsDivRow0 = document.getElementById("metricsDivRow0");
	metricsDivRow0.innerHTML = `
		<div class="metricsDivblock">
			<p>Week Starting</p>
		</div>
	`;
	dateRanges.forEach(range => {
    const mondayDate = new Date(range.start);
    const formattedDate = `${(mondayDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${mondayDate
        .getDate()
        .toString()
        .padStart(2, "0")}/${mondayDate.getFullYear()}`;
		const div = document.createElement("div");
		div.classList.add("metricsDivBlock");
		const p = document.createElement("p");
		p.textContent = formattedDate;
		div.appendChild(p);
		metricsDivRow0.appendChild(div);
	});
    const metricsByWeek = dateRanges.map(range => {
        const startEpoch = Math.floor(new Date(range.start).getTime() / (24 * 60 * 60 * 1000));
        const endEpoch = Math.floor(new Date(range.end).getTime() / (24 * 60 * 60 * 1000));
        const dateRange = Array.from(
            { length: endEpoch - startEpoch + 1 },
            (_, i) => startEpoch + i
        );
        return computeMetrics(button, dateRange);
    });
	const metricsDivRowx = document.getElementById("metricsDivRowx");
	const metricsDivRow1 = document.getElementById("metricsDivRow1");
    const metricsDivRow2 = document.getElementById("metricsDivRow2");
    const metricsDivRow3 = document.getElementById("metricsDivRow3");
    const metricsDivRow4 = document.getElementById("metricsDivRow4");

	metricsDivRowx.innerHTML = `
		<div class="metricsDivblock" id="block1">
			<p>Description: ${button.description}</p>
			<p>Type: ${button.type}</p>
		</div>
	`;
    metricsDivRow1.innerHTML = `
		<div class="metricsDivblock">
			<p>Total Clicks</p>
			<p>Average Clicks/Day</p>
            <p>Most Clicks/Day</p>
            <p>Total Cancelled</p>
		</div>
	`;
    metricsDivRow2.innerHTML = `
		<div class="metricsDivblock">
			<p>Total Words Output</p>
            <p>Clicks/Day</p>
            <p>Words Per Min</p>
		</div>
	`;
    metricsDivRow3.innerHTML = `
		<div class="metricsDivblock">
			<p>Total Time Used</p>
			<p>Total Time Saved</p>
			<p>Ave Time Saved/Note</p>
		</div>
	`;
    metricsDivRow4.innerHTML = `
		<div class="metricsDivblock">
			<p>Least Time</p>
			<p>Average Time</p>
			<p>Most Time</p>
		</div>
	`;
    function appendMetricsData(container, dataValues) {
        const div = document.createElement("div");
        div.classList.add("metricsDivBlock");
        dataValues.forEach(value => {
            const p = document.createElement("p");
            p.textContent = value !== undefined ? value : "N/A";
            div.appendChild(p);
        });
        container.appendChild(div);
    }
    metricsByWeek.forEach(metrics => {
        appendMetricsData(metricsDivRow1, [
            metrics.totalClicks,
            metrics.averageClicksPerDay,
            metrics.mostClicksSingle,
            metrics.totalCancelled,
        ]);
        appendMetricsData(metricsDivRow2, [
            metrics.totalWordsOutput,
            metrics.averageWordsOutput,
            metrics.wordsPerMin,
        ]);
        appendMetricsData(metricsDivRow3, [
            metrics.totalTimeUsed,
            metrics.totalTimeSaved,
            metrics.averageTimeSavedPerClick,
        ]);
        appendMetricsData(metricsDivRow4, [
            metrics.fastestTime,
            metrics.averageTime,
            metrics.slowestTime,
        ]);
    });
	document.getElementById("mainDash").classList.add("share");
	document.getElementById("detailContainer").classList.remove("hidden");
}

document.getElementById("fakeRecord")?.addEventListener("click", () => {
	generateTestData();
});

function generateTestData(days = 95) {
	buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
	const today = parseInt(daysSinceEpoch());
	for (const buttonId in buttonTracker) {
		const button = buttonTracker[buttonId];
		if (!button || typeof button !== "object") {
			console.error(`Invalid button object for ID: ${buttonId}`);
			continue;
		}
		if (!button.data || typeof button.data !== "object") {
			button.data = {};
		}
		for (let dayOffset = 0; dayOffset < days; dayOffset++) {
			const day = (today - dayOffset).toString();
			const count = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
			button.data[day] = { 
				count,
				cancelled: Math.floor(Math.random() * 4),
				times: [],
				totalTimeSaved: 0,
				words: 0
			};
			if (button.isTimed) {
				for (let i = 0; i < count; i++) {
					const time = (Math.random() * (15 - 4) + 4).toFixed(2);
					button.data[day].times.push(parseFloat(time));
					button.data[day].words += Math.floor(Math.random() * (250 - 50 + 1) + 50);
					button.data[day].totalTimeSaved += Math.floor(Math.random() * (550 - 300 + 1) + 300);
				}
			}
		}
	}
	savebuttonTracker();
}

function pruneButtonTrackerData() {
    let buttonTracker = JSON.parse(localStorage.getItem('buttonTracker')) || {};
    if (Object.keys(buttonTracker).length === 0) {
        console.warn("No buttonTracker data found in localStorage.");
        return;
    }
    Object.keys(buttonTracker).forEach((key) => {
        const data = buttonTracker[key]?.data;
        if (data && typeof data === 'object' && Object.keys(data).length > 90) {
            const sortedDays = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b));
            while (sortedDays.length > 90) {
                const oldestDay = sortedDays.shift();
                delete data[oldestDay];
                console.log(`Removed day ${oldestDay} for key: ${key}`);
            }
        }
    });
    localStorage.setItem('buttonTracker', JSON.stringify(buttonTracker));
}


