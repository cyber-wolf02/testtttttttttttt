// Import the Google AI SDK from a CDN
import { GoogleGenerativeAI } from "https://esm.run";

// 1. SETUP: Replace with your actual key from https://aistudio.google.com/
const API_KEY = "AIzaSyD26j0wbYOS5avb3L9QCAGzvQhShVoEjGk";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', async () => {
    const prompt = document.getElementById('promptInput').value;
    
    if (!prompt) {
        alert("Please enter a prompt!");
        return;
    }

    // UI Feedback
    generateBtn.disabled = true;
    generateBtn.innerText = "Thinking...";
    resultDiv.innerHTML = "Generating response...";

    try {
        // 2. THE AI CALL: Send prompt to Google Gemini
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // 3. DISPLAY: Show only the AI's text
        resultDiv.innerText = text;

    } catch (error) {
    console.error("AI Error:", error);
    // This puts the actual error message on your webpage so you can read it
    resultDiv.innerHTML = `<b style="color:red">ERROR: ${error.message}</b>`;
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerText = "Generate";
    }
});
