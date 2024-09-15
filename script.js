document.getElementById("copyButton").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;

    // Replace regular line breaks (\n) with Instagram-friendly formatting
    let formattedText = inputText.replace(/\n/g, '\u00A0\u00A0\n'); // Adds non-breaking spaces

    // Set formatted text in the output textarea for visibility
    document.getElementById("outputText").value = formattedText;

    // Copy the formatted text to clipboard
    copyToClipboard(formattedText);

    // Change the button text to "Copied"
    let copyButton = document.getElementById("copyButton");
    copyButton.textContent = "Copied";

    // Optionally, reset the button text after a few seconds
    setTimeout(function() {
        copyButton.textContent = "Copy Formatted Text";
    }, 2000); // Change text back after 2 seconds
});

function copyToClipboard(text) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}
