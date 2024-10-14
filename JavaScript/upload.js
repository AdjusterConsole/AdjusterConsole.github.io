document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload a file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file); // Append only the file to FormData

    try {
        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/handleWebhook', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json(); // Get the response from the server
            console.log('Document uploaded successfully. Response:', result);
        } else {
            throw new Error('Failed to upload document.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error uploading the document.');
    }
});
