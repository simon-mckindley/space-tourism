const techName = document.querySelector(".tech-name");
const text = document.querySelector(".tech-text");
const imageLarge = document.querySelector(".tech-image img");
const imageSmall = document.querySelector(".tech-image source");
const inputElements = [techName, text, imageLarge, imageSmall];


const data = JSON.parse(sessionStorage.getItem("space-data"));
if (data) {
    console.log("Got data");
    createSelectors(data.technology);
    assignData(findTech(0));
} else {
    console.log("NOT LOADED");
}

function assignData(tech) {
    inputElements.forEach((el) => el.classList.add("fade-out"));

    setTimeout(() => {
        imageLarge.src = "";
        imageSmall.srcset = "";
        imageSmall.srcset = tech.images.landscape;
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


function createSelectors(tech) {
    const selectorsWrapper = document.querySelector(".tech-selectors");

    tech.forEach((item, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = index;
        button.className = "tech-btn heading heading-s";
        button.textContent = index + 1;
        if (index === 0) {
            button.setAttribute("aria-current", true);
        }

        button.addEventListener("click", function () {
            changeItem(this);
        });

        selectorsWrapper.appendChild(button);
    });
}


function changeItem(button) {
    document.querySelectorAll(".tech-btn").forEach((el) => el.setAttribute("aria-current", false));
    button.setAttribute("aria-current", true);

    const tech = findTech(button.id);
    assignData(tech);
}


function findTech(index) {
    return data.technology[parseInt(index)];
}


inputElements.forEach((el) => {
    el.addEventListener("animationend", function () {
        this.classList.remove("fade-in");
    });
});
