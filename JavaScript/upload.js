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
    // Step 1: Upload the file and get the DocumentID
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

    // Extract the DocumentID from the response
    const documentID = uploadResult.attachments[0].DocumentID;
    console.log('DocumentID:', documentID);

    // Step 2: Poll the document data for the result property
    const maxAttempts = 5;
    const delay = 2000; // 2 seconds delay between requests

    let attempt = 0;
    let documentResult;

    // Function to delay execution for a given time (in ms)
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    while (attempt < maxAttempts) {
      attempt++;

      // Step 3: Use the DocumentID to fetch the document data (Auth required)
      const documentResponse = await fetch(`https://api.parseur.com/document/${documentID}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Token e2d94dfb673fd7d30ac213cab9fc167f7d3d8557', // Auth header for GET request
        },
      });

      if (!documentResponse.ok) {
        throw new Error(`GET request failed: ${documentResponse.statusText}`);
      }

      documentResult = await documentResponse.json();
      console.log(`Attempt ${attempt}: Document result:`, JSON.stringify(documentResult, null, 2));

      // Check if the result property exists
      if (documentResult.result) {
        console.log('Result found:', JSON.stringify(documentResult.result, null, 2));
        alert('File uploaded and document processed successfully!');
        return; // Exit the loop and function since result is found
      }

      // If result not found, wait 2 seconds before the next attempt
      if (attempt < maxAttempts) {
        console.log(`No result found. Waiting for ${delay / 1000} seconds before trying again...`);
        await wait(delay);
      }
    }

    // If after 5 attempts no result is found, log the message
    console.log('No Result Property found after 5 attempts.');
    alert('File uploaded, but no result property found after 5 attempts.');
    
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to upload and process the document.');
  }
});
