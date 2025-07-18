import { ConfigReader } from 'capacitor-config-reader';

window.testReadStringResource = async () => {
    const keyValue = document.getElementById("stringKeyInput").value;
    const resultDiv = document.getElementById("stringResourceResult");
    
    try {
        const result = await ConfigReader.readStringResource({ key: keyValue });
        resultDiv.innerHTML = `<p><strong>Result:</strong> ${result.value || '(empty)'}</p>`;
    } catch (error) {
        resultDiv.innerHTML = `<p><strong>Error:</strong> ${error.message}</p>`;
    }
}

window.testReadInfoPlistValue = async () => {
    const keyValue = document.getElementById("infoPlistKeyInput").value;
    const resultDiv = document.getElementById("infoPlistResult");
    
    try {
        const result = await ConfigReader.readInfoPlistValue({ key: keyValue });
        resultDiv.innerHTML = `<p><strong>Result:</strong> ${result.value || '(empty)'}</p>`;
    } catch (error) {
        resultDiv.innerHTML = `<p><strong>Error:</strong> ${error.message}</p>`;
    }
}
