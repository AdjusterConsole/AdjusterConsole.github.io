document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById("fileInputai");
    console.log("File input:", fileInput);

    const file = fileInput.files[0]; // Get the selected file
    console.log("Selected file:", file);

    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    console.log("Sending file to Cloud Function...");

    try {
        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/handleWebhook', {
            method: 'POST',
            headers: {
                'Content-Type': file.type, // Set content type to the file type
            },
            body: file, // Directly send the file
        });

        if (!response.ok) {
            throw new Error(`Failed to upload document. Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log('Upload successful:', jsonResponse);
    } catch (error) {
        console.error('Error during file upload process:', error);
    }
});
