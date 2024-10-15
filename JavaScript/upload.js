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

    // Step 2: Initial 5-second delay before the first GET request
    const initialDelay = 5000; // 5 seconds
    const maxAttempts = 5;
    const delay = 2000; // 2 seconds delay between requests

    // Function to delay execution for a given time (in ms)
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    console.log(`Waiting for ${initialDelay / 1000} seconds before making the first request...`);
    await wait(initialDelay); // Initial 5-second delay

    let attempt = 0;
    let documentResult;

    // Polling loop: Try up to maxAttempts
    while (attempt < maxAttempts) {
      attempt++;

      // Step 3: Use the DocumentID to fetch the document data (Auth required)
      const documentResponse = await fetch(`https://api.parseur.com/document/${documentID}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Token e2d94dfb673fd7d30ac213cab9fc167f7d3d8557', // Auth header for GET request
        },
      });

      // Log the entire GET response for debugging
      const responseText = await documentResponse.text(); // Fetch response as text for logging
      console.log(`Attempt ${attempt}: GET response:`, responseText);

      // Parse the response as JSON (if the server returns JSON)
      try {
        documentResult = JSON.parse(responseText); // Safely parse JSON
      } catch (err) {
        console.error(`Error parsing response for attempt ${attempt}:`, err);
        documentResult = null; // Set to null if parsing fails
      }

      // Check if the result property exists in the parsed response
      if (documentResult && documentResult.result) {
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
