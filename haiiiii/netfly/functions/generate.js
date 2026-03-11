const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', async () => {
    const prompt = document.getElementById('promptInput').value;
    resultDiv.innerText = "Loading...";

    try {
        const response = await fetch("/.netlify/functions/generate", {
            method: "POST",
            body: JSON.stringify({ prompt: prompt }),
        });
        const data = await response.json();
        resultDiv.innerText = data.text;
    } catch (error) {
        resultDiv.innerText = "Error: " + error.message;
    }
});
