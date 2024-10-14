// Function to convert file to base64
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            console.log("File successfully converted to base64.");
            resolve(reader.result);
        };
        reader.onerror = error => {
            console.error("Error converting file to base64:", error);
            reject(error);
        };
        reader.readAsDataURL(file); // Converts file to base64
    });
}

// Handle file upload
document.querySelector('#uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const file = document.querySelector('#fileInput').files[0];

    if (!file) {
        console.error("No file selected for upload.");
        alert("Please select a file to upload.");
        return;
    }

    try {
        console.log("Converting file to base64...");
        const base64File = await convertToBase64(file);
        console.log("Sending file to Cloud Function...");

        // Send base64 file to Cloud Function
        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/handleWebhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                file: base64File, // Sending the base64 file
                filename: file.name, // Optionally send the file name
            }),
        });

        if (!response.ok) {
            console.error("Failed to upload document. Status:", response.status, response.statusText);
            throw new Error('Failed to upload document.');
        }

        const result = await response.json();
        console.log('Upload successful. Server response:', result);
        alert("File uploaded successfully!");

    } catch (error) {
        console.error("Error during file upload process:", error);
        alert("An error occurred while uploading the file.");
    }
});
