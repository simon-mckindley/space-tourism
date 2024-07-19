const role = document.querySelector(".crew-role");
const crewName = document.querySelector(".crew-name");
const bio = document.querySelector(".crew-bio");
const image = document.querySelector(".crew-image");
const inputElements = [role, crewName, bio, image];

const selectors = document.querySelectorAll(".crew-btn");


const data = JSON.parse(sessionStorage.getItem("space-data"));
if (data) {
    console.log("Got data");
    assignData(findCrew(0));
} else {
    console.log("NOT LOADED");
}

function assignData(crew) {
    console.log(crew.name);
    inputElements.forEach((el) => el.classList.add("fade-out"));

    setTimeout(() => {
        image.src = crew.images.png;
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


function findCrew(index) {
    return data.crew[parseInt(index)];
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

        const crew = findCrew(this.id);
        assignData(crew);
    });
});