const getColor = () => {
    // RANDOM-NUMBER
    const randomNumber = Math.floor(Math.random() * 16777215);

    // MAKE STRING THE RANDOM NUMBER
    const randomCode = "#" + randomNumber.toString(16);

    // DISPLAY COLOR CODE CHANGE
    document.getElementById("color-code").innerText = randomCode;

    // DISPLAY BACKGROUND COLOR
    document.body.style.background = randomCode;

    // COPY COLOR CODE WITH CLICK
    navigator.clipboard.writeText(randomCode);
}

// EVENT CALL
document.getElementById("btn").addEventListener("click", getColor);


// INITIAL-CALL
getColor();