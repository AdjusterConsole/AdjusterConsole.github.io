document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload a file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://us-central1-parser-bbd01.cloudfunctions.net/uploadDocument', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Document uploaded successfully. The result will be sent when processed.');
        } else {
            throw new Error('Failed to upload document.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error uploading the document.');
    }
});
