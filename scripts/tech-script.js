const techName = document.querySelector(".tech-name");
const text = document.querySelector(".tech-text");
const imageLarge = document.querySelector(".tech-image img");
const imageSmall = document.querySelector(".tech-image source");
const inputElements = [techName, text, imageLarge, imageSmall];

const selectors = document.querySelectorAll(".tech-btn");


const data = JSON.parse(sessionStorage.getItem("space-data"));
if (data) {
    console.log("Got data");
    assignData(findTech(0));
} else {
    console.log("NOT LOADED");
}

function assignData(tech) {
    console.log(tech.name);
    inputElements.forEach((el) => el.classList.add("fade-out"));

    setTimeout(() => {
        imageLarge.src = tech.images.portrait;
        imageLarge.alt = `${tech.name} image`;
        setTimeout(() => {
            inputElements.forEach((el) => {
                el.classList.remove("fade-out");
                el.classList.add("fade-in");
            });
            techName.textContent = tech.name;
            text.textContent = tech.description;
        }, 100);
    }, 250);
}


function findTech(index) {
    return data.technology[parseInt(index)];
}


inputElements.forEach((el) => {
    el.addEventListener("animationend", function () {
        this.classList.remove("fade-in");
    });
});


selectors.forEach((tab) => {
    tab.addEventListener("click", function () {
        selectors.forEach((el) => el.setAttribute("aria-current", false));
        this.setAttribute("aria-current", true);

        const tech = findTech(this.id);
        assignData(tech);
    });
});