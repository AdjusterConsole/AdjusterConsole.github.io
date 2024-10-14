document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const fileInput = document.getElementById("fileInput");
    console.log("File input:", fileInput);

    const file = fileInput.files[0]; // Get the first file
    console.log("Selected file:", file);
    
    if (!file) {
        console.error("No file selected for upload.");
        alert("Please select a file to upload.");
        return;
    }

    console.log("Sending file to Cloud Function...");

    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file, file.name); // Append the file to the FormData object

    try {
        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/handleWebhook', {
            method: 'POST',
            body: formData, // Send the FormData
        });

        if (!response.ok) {
            console.error("Failed to upload document. Status:", response.status);
            alert("Failed to upload document.");
            return;
        }

        const jsonResponse = await response.json();
        console.log("Upload successful:", jsonResponse);
    } catch (error) {
        console.error("Error during file upload process:", error);
        alert("Error during file upload process.");
    }
});
