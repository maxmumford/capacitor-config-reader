import { ConfigReader } from 'config-reader';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    ConfigReader.echo({ value: inputValue })
}
