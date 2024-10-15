// upload.js

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const fileInput = document.getElementById('fileInputai');
    const file = fileInput.files[0]; // Get the selected file

    console.log("File input:", fileInput);
    console.log("Selected file:", file);

    if (!file) {
        console.error('No file selected for upload.');
        alert('Please select a file to upload.');
        return;
    }

    console.log('Sending file to Cloud Function...');

    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/api/handleWebhook', {
            method: 'POST',
            body: formData,
            // No need to set headers; the browser will set the appropriate 'Content-Type' for FormData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Upload successful:', responseData);
        alert('File uploaded successfully!');
    } catch (error) {
        console.error('Error during file upload process:', error);
        alert('Failed to upload document. Please try again.');
    }
});
