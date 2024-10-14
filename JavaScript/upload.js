// Function to convert file to base64
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file); // Converts file to base64
    });
}

// Handle file upload
document.querySelector('#uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const file = document.querySelector('#fileInput').files[0];
    
    if (file) {
        try {
            const base64File = await convertToBase64(file);

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
                throw new Error('Failed to upload document.');
            }

            const result = await response.json();
            console.log('Upload successful:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
});
