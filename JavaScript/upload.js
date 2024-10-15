document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const fileInput = document.getElementById('fileInputai');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file!');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    // Step 1: Upload the file via POST request
    const uploadResponse = await fetch('https://api.parseur.com/parser/84913/upload', {
      method: 'POST',
      headers: {
        'Authorization': 'Token e2d94dfb673fd7d30ac213cab9fc167f7d3d8557', // Replace this later with GitHub Secret
      },
      body: formData,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed: ${uploadResponse.statusText}`);
    }

    const uploadResult = await uploadResponse.json();
    console.log('Upload result:', JSON.stringify(uploadResult, null, 2));

    // Step 2: Wait for 5 seconds after the POST request
    const delay = 5000; // 5 seconds
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    console.log(`Waiting for ${delay / 1000} seconds before making the GET request...`);
    await wait(delay);

    // Step 3: Make the GET request to download the last document
    const documentResponse = await fetch('https://api.parseur.com/parser/84913/download/my.mailbox.json?last_document_only=true', {
      method: 'GET',
      headers: {
        'Authorization': 'Token e2d94dfb673fd7d30ac213cab9fc167f7d3d8557', // Replace this later with GitHub Secret if needed
      },
    });

    if (!documentResponse.ok) {
      throw new Error(`GET request failed: ${documentResponse.statusText}`);
    }

    const documentResult = await documentResponse.json();
    console.log('Document JSON result:', JSON.stringify(documentResult, null, 2));

    alert('File uploaded and document downloaded successfully! Check the console for the document data.');
    
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to upload and download the document.');
  }
});
