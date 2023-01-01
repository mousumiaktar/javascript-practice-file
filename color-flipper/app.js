const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);


    console.log(randomNumber);
}


document.getElementById("btn").addEventListener("click", getColor);