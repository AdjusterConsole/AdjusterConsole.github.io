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
      throw new Error(`Error: ${uploadResponse.statusText}`);
    }

    const uploadResult = await uploadResponse.json();
    console.log('Upload result:', JSON.stringify(uploadResult, null, 2));

    // Extract the DocumentID from the response
    const documentID = uploadResult.attachments[0].DocumentID;
    console.log('DocumentID:', documentID);

    // Step 2: Use the DocumentID to fetch the document data
    const documentResponse = await fetch(`https://api.parseur.com/document/${documentID}`, {
      method: 'GET'
    });

    if (!documentResponse.ok) {
      throw new Error(`Error: ${documentResponse.statusText}`);
    }

    const documentResult = await documentResponse.json();
    console.log('Document result:', JSON.stringify(documentResult, null, 2));

    // Step 3: Output the "result" property from the document response
    if (documentResult.result) {
      console.log('Result:', JSON.stringify(documentResult.result, null, 2));
    } else {
      console.log('No result property found in the document response.');
    }

    alert('File uploaded and document processed successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to upload and process the document.');
  }
});
