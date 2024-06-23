        document.getElementById('fileInput').addEventListener('change', processUploadedFile);
        document.getElementById('autocopy').addEventListener('click', autoCopyAndDelete);

        function processUploadedFile(event) {
            const file = event.target.files[0];
            
            if (!file) {
                alert("No file selected.");
                return;
            }
            
            const reader = new FileReader();
            
            reader.onload = function(e) {
                try {
                    const jsonContent = JSON.parse(e.target.result);
                    const output = formatJson(jsonContent);
                    document.getElementById('textarea2').value = output;
                } catch (error) {
                    alert("Error parsing JSON file: " + error.message);
                }
            };
            
            reader.readAsText(file);
        }

        function formatJson(jsonContent, indent = 0) {
            let result = '';

            // Iterate through each property in the JSON object
            for (let key in jsonContent) {
                if (jsonContent.hasOwnProperty(key)) {
                    const value = jsonContent[key];

                    // Indentation based on the level of nesting
                    let indentation = ' '.repeat(indent);

                    // Check property name and format accordingly
                    switch (key) {
                        case 'partsData':
                            result += `${indentation}Parts\n`;
                            value.forEach(part => {
                                result += formatPart(part, indent + 2);
                            });
                            break;
                        case 'laborData':
                            result += `${indentation}Labor:\n`;
                            value.forEach(labor => {
                                result += `${' '.repeat(indent + 2)}Description: ${labor.laborDescription}\n`;
                                result += `${' '.repeat(indent + 2)}Hours: ${labor.hours}\n\n`;
                            });
                            break;
                        case 'laborRate':
                            result += `${indentation}Labor Rate: ${value}\n`;
                            break;
                        default:
                            result += `${indentation}${key}: ${value}\n`;
                            break;
                    }
                }
            }

            return result;
        }

        function formatPart(part, indent) {
            let result = '';
            result += `${' '.repeat(indent)}Part Number: ${part.partNumber}\n`;
            result += `${' '.repeat(indent)}Part Name: ${part.partName}\n`;
            result += `${' '.repeat(indent)}RF Price: $${parseFloat(part.priceEach).toFixed(2)}\n`;
            result += `${' '.repeat(indent)}Quantity: ${part.quantity}\n\n`;
            document.getElementById('textarea5').value += part.partNumber + '\n' + part.partName + '\n' + parseFloat(part.priceEach).toFixed(2) + '\n' + part.quantity + '\n';
            return result;
        }

      function autoCopyAndDelete() {
            const textareaValue = document.getElementById('textarea5').value;
            const lines = textareaValue.split('\n');

            if (lines.length > 0) {
                const firstLine = lines[0].trim();

                if (firstLine !== '') {
                    navigator.clipboard.writeText(firstLine)
                        .then(() => {
                            // Remove the first line from the textarea
                            const updatedText = lines.slice(1).join('\n');
                            document.getElementById('textarea5').value = updatedText;
                        })
                        .catch(err => {
                            console.error('Failed to copy text: ', err);
                        });
                }
            }
        }