document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const fileInput = document.getElementById('imageFile');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file!');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('https://api.parseur.com/parser/84913/upload', {
      method: 'POST',
      headers: {
        'Authorization': 'Token e2d94dfb673fd7d30ac213cab9fc167f7d3d8557', // Replace this later with GitHub Secret
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);

    // Display the result in the div#result
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);

    alert('File uploaded successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to upload file.');
  }
});
