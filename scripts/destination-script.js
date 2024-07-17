const image = document.querySelector(".destination-image");
const heading = document.querySelector(".destination-heading");
const text = document.querySelector(".destination-text");
const distance = document.querySelector(".distance-data");
const travel = document.querySelector(".travel-data");
const inputElements = [image, heading, text, distance, travel];

const selectors = document.querySelectorAll(".destination-btn");


const data = JSON.parse(sessionStorage.getItem("space-data"));
if (data) {
    console.log("Got data");
    const moon = findDestination("Moon");
    assignData(moon);
} else {
    console.log("NOT LOADED");
}


function assignData(destination) {
    inputElements.forEach((el) => el.classList.add("fade-out"));

    setTimeout(() => {
        inputElements.forEach((el) => {
            el.classList.remove("fade-out");
            el.classList.add("fade-in");
        });
        image.src = destination.images.png;
        heading.textContent = destination.name;
        text.textContent = destination.description;
        distance.textContent = destination.distance;
        travel.textContent = destination.travel;
    }, 250);
}


function findDestination(name) {
    return data.destinations.find((el) => el.name.toLowerCase() === name.toLowerCase());
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

        const destination = findDestination(this.id);
        assignData(destination);
    });
});