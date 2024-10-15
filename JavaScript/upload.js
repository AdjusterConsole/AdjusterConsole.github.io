document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const fileInput = document.getElementById('fileInputai');
    const file = fileInput.files[0]; // Get the selected file

    if (!file) {
        console.error("No file selected for upload.");
        alert("Please select a file to upload.");
        return;
    }

    try {
        // Prepare the form data to send
        const formData = new FormData();
        formData.append('file', file);

        // Send the file to the Firebase Cloud Function
        const response = await fetch('https://us-central1-parseur-integration.cloudfunctions.net/api/handleWebhook', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the result from Parseur via Firebase
        const result = await response.json();
        console.log("File processed successfully:", result);

        // Display the result on the webpage
        document.getElementById('resultContainer').innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    } catch (error) {
        console.error("Error during file upload process:", error);
        alert("Failed to upload document. Please try again.");
    }
});
