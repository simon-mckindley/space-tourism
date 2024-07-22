const role = document.querySelector(".crew-role");
const crewName = document.querySelector(".crew-name");
const bio = document.querySelector(".crew-bio");
const image = document.querySelector(".crew-image");
const inputElements = [role, crewName, bio, image];


const data = JSON.parse(sessionStorage.getItem("space-data"));
if (data) {
    console.log("Got data");
    createSelectors(data.crew);
    assignData(findCrew(0));
} else {
    console.log("NOT LOADED");
}


function assignData(crew) {
    inputElements.forEach((el) => el.classList.add("fade-out"));

    setTimeout(() => {
        image.src = "";
        image.src = crew.images.webp;
        image.alt = `${crew.name} image`;
        setTimeout(() => {
            inputElements.forEach((el) => {
                el.classList.remove("fade-out");
                el.classList.add("fade-in");
            });
            role.textContent = crew.role;
            crewName.textContent = crew.name;
            bio.textContent = crew.bio;
        }, 100);
    }, 250);
}


function createSelectors(crew) {
    const selectorsWrapper = document.querySelector(".crew-selectors");

    crew.forEach((item, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = index;
        button.className = "crew-btn";
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
    document.querySelectorAll(".crew-btn").forEach((el) => el.setAttribute("aria-current", false));
    button.setAttribute("aria-current", true);

    const crew = findCrew(button.id);
    assignData(crew);
}


function findCrew(index) {
    return data.crew[parseInt(index)];
}


inputElements.forEach((el) => {
    el.addEventListener("animationend", function () {
        this.classList.remove("fade-in");
    });
});
