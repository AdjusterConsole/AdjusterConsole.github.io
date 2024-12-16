const storageKeywords = [ "Xcolor", "XfontWeight", "XFont", "XDisplay", "XEDIT", "XHeight", "XWidth", "Xtop", "Xleft", "XSHOW" ];

class ProfileManager {
    constructor() {
        this.profiles = JSON.parse(localStorage.getItem('profiles')) || {};
        this.currentProfile = localStorage.getItem('currentProfile') || null;
    }

    saveToLocalStorage() {
        localStorage.setItem('profiles', JSON.stringify(this.profiles));
        localStorage.setItem('currentProfile', this.currentProfile);
    }

    addProfile(profileName) {
        if (this.profiles[profileName]) {
            showModalMessage('Profile name already exists.');
        }
        this.profiles[profileName] = defaultProfileInit();
        this.currentProfile = profileName;
		this.setSessionUsingProfile(profileName);
		refreshElements();
        this.saveToLocalStorage();
		showModalMessage('New profile created successfully!');
    }

    generateProfileData() {
        const sessionData = {};
        Object.keys(sessionStorage).forEach((key) => {
            const includesAllowedID = allowedIDs.some((id) => key.includes(id));
            if (includesAllowedID) {
                sessionData[key] = sessionStorage.getItem(key);
            }
        });
        sessionData.colorSet1 = JSON.parse(sessionStorage.getItem('colorSet1')) || {};
        sessionData.colorSet2 = JSON.parse(sessionStorage.getItem('colorSet2')) || {};
        sessionData.customIDs = JSON.parse(sessionStorage.getItem('customIDs')) || [];
        sessionData.doubleBubble = sessionStorage.getItem('doubleBubble');
        sessionData.mode = sessionStorage.getItem('mode');
        return sessionData;
    }

    saveChangesToCurrentProfile() {
        if (!this.currentProfile) {
            showModalMessage('No profile is currently active.');
            return;
        }
        const generatedData = this.generateProfileData();
        const currentProfileData = this.profiles[this.currentProfile];
        Object.keys(currentProfileData).forEach((key) => {
            if (!(key in generatedData)) {
                delete currentProfileData[key];
            }
        });
        this.profiles[this.currentProfile] = {
            ...currentProfileData,
            ...generatedData,
        };
        this.saveToLocalStorage();
    }

    renameProfile(oldName, newName) {
        if (oldName === "defaultAC") {
            showModalMessage('Default profile cannot be renamed.');
        }
        if (!this.profiles[oldName]) {
            showModalMessage('Profile does not exist.');
        }
        if (this.profiles[newName]) {
            showModalMessage('New profile name already exists.');
        }
        this.profiles[newName] = this.profiles[oldName];
        delete this.profiles[oldName];
        if (this.currentProfile === oldName) {
            this.currentProfile = newName;
        }
        this.saveToLocalStorage();
    }

    deleteProfile(profileName) {
        if (profileName === "defaultAC") {
            showModalMessage(`Cannot delete the protected profile: ${profileName}.`);
        }
        if (!this.profiles[profileName]) {
            showModalMessage('Profile does not exist.');
        }
        delete this.profiles[profileName];
        if (this.currentProfile === profileName) {
            this.currentProfile = 'defaultAC';
			this.setSessionUsingProfile('defaultAC');
			this.saveToLocalStorage();
			refreshElements();
        }
    }
	
	resetProfile(profileName) {
        if (!this.profiles[profileName]) {
            showModalMessage('Profile does not exist.');
        }
        this.profiles[profileName] = defaultProfileInit();
		this.setSessionUsingProfile(profileName);
        this.saveToLocalStorage();
		refreshElements();
    }

    changeProfile(profileName) {
        if (!this.profiles[profileName]) {
            showModalMessage('Profile does not exist.');
        }
        this.currentProfile = profileName;
        this.setSessionUsingProfile(profileName);
        this.saveToLocalStorage();
		refreshElements();
    }
	
	cloneProfile(originalProfile, newProfileName) {
		if (this.profiles[newProfileName]) {
			showModalMessage('A profile with this name already exists.');
		}
		if (!this.profiles[originalProfile]) {
			showModalMessage('The original profile does not exist.');
		}
		this.profiles[newProfileName] = JSON.parse(JSON.stringify(this.profiles[originalProfile]));
		this.saveToLocalStorage();
	}

    getCurrentProfileData() {
        if (!this.currentProfile) {
            showModalMessage('No profile is currently active.');
        }
        return this.profiles[this.currentProfile];
    }
	
	setSessionUsingProfile(profileName) {
		if (!this.profiles[profileName]) {
			showModalMessage(`Profile "${profileName}" does not exist.`);
			return;
		}
		const profileSettings = this.profiles[profileName];
		const keysToRemove = [];
		keysToRemove.push('colorSet1', 'colorSet2', 'doubleBubble', 'mode');
		Object.keys(sessionStorage).forEach((key) => {
			const includesAllowedID = allowedIDs.some((id) => key.includes(id));
			if (includesAllowedID) {
				keysToRemove.push(key);
			}
		});
		keysToRemove.forEach((key) => {
			sessionStorage.removeItem(key);
		});
		for (const [key, value] of Object.entries(profileSettings)) {
			if (typeof value === 'object') {
				sessionStorage.setItem(key, JSON.stringify(value));
			} else {
				sessionStorage.setItem(key, value);
			}
		}
	}
}

function populateProfileDropdown() {
    const profileSelect = document.getElementById('profileSelect');
    profileSelect.innerHTML = '<option value="">-- Select Profile --</option>';
    Object.keys(profileManager.profiles).forEach(profileName => {
        const option = document.createElement('option');
        option.value = profileName;
        option.textContent = profileName;
        profileSelect.appendChild(option);
    });
	populateProfileDropdownUL();
    updateDisplayedName();
}

function populateProfileDropdownUL() {
	const profileDropdown = document.querySelector('.profileDropdown');
    const profileDropdownUL = document.querySelector('.profileDropdownUL');
    const profileDropdownButton = document.querySelector('.profileDropdownButton');
	const currentProfile = profileManager.currentProfile;
	profileDropdownButton.textContent = `Profile: ${currentProfile}`;
    profileDropdownUL.innerHTML = '';
    Object.keys(profileManager.profiles).forEach(profileName => {
        const li = document.createElement('li');
        li.textContent = profileName;
        li.addEventListener('click', () => {
            profileManager.changeProfile(profileName);
            profileDropdown.classList.remove('show');
        });
        profileDropdownUL.appendChild(li);
    });
    profileDropdownButton.addEventListener('click', (event) => {
        event.stopPropagation();
        profileDropdown.classList.add('show');
    });
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.profileDropdown')) {
            profileDropdown.classList.remove('show');
        }
    });
}

const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', finalizeActions);

function finalizeActions() {
	const profileName = document.getElementById('profileName');
	const renameProfileInput = document.getElementById('renameProfileInput');
	if (profileName.classList.contains('show')) profileName.classList.remove('show');
	if (renameProfileInput.classList.contains('show')) renameProfileInput.classList.remove('show');
	cancelBtn.classList.remove('show');
	enableAllButtons();
}

const addProfileBtn = document.getElementById('addProfileBtn');
addProfileBtn.addEventListener('click', () => {
	const profileNameInput = document.getElementById('profileName');
	if (!profileNameInput.classList.contains('show')) {
		profileNameInput.classList.add('show');
		disableAllExcept('addProfileBtn');
		return;
	}
    const profileName = profileNameInput.value;
    if (profileName) {
        try {
            profileManager.addProfile(profileName);
            populateProfileDropdown();
            showModalMessage('Profile added successfully!');
            profileNameInput.value = '';
			finalizeActions();
        } catch (error) {
        alert(error.message);
        }
    } else {
        showModalMessage('Please enter a profile name.');
    }
});

const changeProfileBtn = document.getElementById('changeProfileBtn');
changeProfileBtn.addEventListener('click', () => {
    const profileName = document.getElementById('profileSelect').value;
    if (profileName) {
        try {
            profileManager.changeProfile(profileName);
            showModalMessage('Profile changed successfully!');
        } catch (error) {
            alert(error.message);
        }
    } else {
        showModalMessage('Please select a profile.');
    }
});

const cloneProfileBtn = document.getElementById('cloneProfileBtn');
cloneProfileBtn.addEventListener('click', () => {
    const profileNameInput = document.getElementById('profileName');
    const profileSelect = document.getElementById('profileSelect');
    if (!profileNameInput.classList.contains('show')) {
        profileNameInput.classList.add('show');
		cancelBtn.classList.add('show');
		disableAllExcept('cloneProfileBtn');
        return;
    }
    const originalProfile = profileSelect.value;
    const profileName = profileNameInput.value;
    if (!profileName) {
        showModalMessage('Please enter a name for the new profile.');
        return;
    }
    if (!profileManager.profiles[originalProfile]) {
        showModalMessage('Please select a profile to clone.');
        return;
    }
    try {
        profileManager.cloneProfile(originalProfile, profileName);
        showModalMessage('Profile cloned successfully!');
        profileNameInput.value = '';
		finalizeActions();
        populateProfileDropdown();
    } catch (error) {
        showModalMessage(error.message);
    }
});

const deleteProfileBtn = document.getElementById('deleteProfileBtn');
deleteProfileBtn.addEventListener('click', () => {
    const profileName = document.getElementById('profileSelect').value;
	if (!profileName) {
		showModalMessage('Please select a profile.');
		return;
	}
	if (profileName === 'defaultAC') {
		showModalMessage('Please select a profile other than defaultAC.');
		return;
	}
	try {
		profileManager.deleteProfile(profileName);
		populateProfileDropdown();
		profileManager.changeProfile('defaultAC');
		showModalMessage('Profile deleted successfully!');
	} catch (error) {
		showModalMessage(error.message);
	}
});

const resetProfileBtn = document.getElementById('resetProfileBtn');
resetProfileBtn.addEventListener('click', () => {
    const profileName = document.getElementById('profileSelect').value;
        if (profileName) {
            try {
            profileManager.resetProfile(profileName);
            showModalMessage('Profile reset successfully!');
        } catch (error) {
            showModalMessage(error.message);
        }
    } else {
        showModalMessage('Please select a profile.');
    }
});

const renameProfileBtn = document.getElementById('renameProfileBtn');
renameProfileBtn.addEventListener('click', () => {
	const renameProfileInput = document.getElementById('renameProfileInput');
	if (!renameProfileInput.classList.contains('show')) {
		renameProfileInput.classList.add('show');
		disableAllExcept('renameProfileBtn');
		return;
	}
    const oldName = document.getElementById('profileSelect').value;
    const newName = renameProfileInput.value;
	if (oldName === 'defaultAC') {
		showModalMessage('Unable to rename Default Profile');
		finalizeActions();
		return;
	}
    if (oldName && newName) {
        try {
            profileManager.renameProfile(oldName, newName);
            populateProfileDropdown();
            showModalMessage('Profile renamed successfully!');
			finalizeActions();
        } catch (error) {
            showModalMessage(error.message);
        }
    } else {
        showModalMessage('Please select a profile and enter a new name.');
    }
});

function loadProfileManager() {
    if (!profileManager) {
        profileManager = new ProfileManager();
    }
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || {};
    const currentProfile = localStorage.getItem('currentProfile');
    if (Object.keys(storedProfiles).length === 0) {
        profileManager.profiles["defaultAC"] = defaultProfileInit();
		profileManager.profiles["User1"] = profileManager.generateProfileData();
        profileManager.currentProfile = "User1";
        profileManager.saveToLocalStorage();
    } else {
        profileManager.profiles = storedProfiles;
        profileManager.currentProfile = currentProfile || Object.keys(storedProfiles)[0];
        profileManager.setSessionUsingProfile(profileManager.currentProfile);
    }
}

function defaultProfileInit() {
	return {
		colorSet1: new colorObject(),
		colorSet2: new colorObject(),
		mode: '2',
		customIDs: [],
		doubleBubble: 'true',
	}
}

document.getElementById('layoutMenu').addEventListener('click', () => {
	document.getElementById('layoutBacker').classList.add("show");
});

document.getElementById('closeLayouts').addEventListener('click', () => {
	document.getElementById('layoutBacker').classList.remove("show");
});

setTimeout(() => {
    const currentProfile = profileManager.currentProfile;
    if (currentProfile && profileManager.profiles[currentProfile]) {
        profileManager.saveChangesToCurrentProfile();
    }
}, 600000);

function showModalMessage(message) {
	const modal = document.getElementById('profileModal');
	modal.textContent = message;
	modal.classList.add('profileAlert');
	setTimeout(() => {
        modal.classList.remove('profileAlert');
	}, 2500);
}

function updateDisplayedName(name) {
    const profileName = name || profileManager.currentProfile || 'defaultAC';
    const profileSelect = document.getElementById('profileSelect');
    const options = profileSelect.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === profileName) {
            profileSelect.selectedIndex = i;
            return;
        }
    }
}

function disableAllExcept(buttonId) {
    const buttons = document.querySelectorAll('.btn');
	cancelBtn.classList.add('show');
    buttons.forEach((button) => {
        if (button.id === buttonId || button.id === 'cancelBtn') {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
}

function enableAllButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

function refreshElements() {
	profileManager.saveChangesToCurrentProfile();
	localStorage.setItem('skipSplash', 'true');
	location.reload();
}
