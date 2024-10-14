const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const file = fileInput.files[0];
    console.log("File input:", fileInput);
    console.log("Selected file:", file);

    if (!file) {
        console.error("No file selected for upload.");
        alert("Please select a file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        console.log("Sending file to Cloud Function...");
        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/api/handleWebhook', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();
        console.log("File uploaded successfully:", result);
        alert("File uploaded successfully!");
    } catch (error) {
        console.error("Error during file upload process:", error);
        alert("Error uploading document.");
    }
});
