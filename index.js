

let colorStyle = document.getElementById("color-style");
let genrateButton = document.getElementById("genrate-button");
let colorDiv = document.querySelectorAll(".color");
let Scheme = document.querySelectorAll(".Scheme");

genrateButton.addEventListener("click", () => {
    Scheme.forEach(() => {

        let color = colorStyle.value.slice(1, 7);
        fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json`)
            .then((res) => res.json())
            .then((data) => {
                colorDiv.forEach((div, index) => {
                colorDiv[index].style.backgroundColor = data.colors[index].hex.value;
            });
        });
    });
});


