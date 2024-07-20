const image = document.querySelector(".destination-image");
const heading = document.querySelector(".destination-heading");
const text = document.querySelector(".destination-text");
const distance = document.querySelector(".distance-data");
const travel = document.querySelector(".travel-data");
const inputElements = [image, heading, text, distance, travel];


const data = JSON.parse(sessionStorage.getItem("space-data"));
if (data) {
    console.log("Got data");
    createSelectors(data.destinations);
    assignData(findDestination(0));
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
        image.alt = `${destination.name} image`;
        heading.textContent = destination.name;
        text.textContent = destination.description;
        distance.textContent = destination.distance;
        travel.textContent = destination.travel;
    }, 250);
}


function createSelectors(destination) {
    const selectorsWrapper = document.querySelector(".destination-selectors");

    destination.forEach((item, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = index;
        button.className = "destination-btn heading nav-text mid-text";
        button.textContent = item.name;
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
    document.querySelectorAll(".destination-btn").forEach((el) => el.setAttribute("aria-current", false));
    button.setAttribute("aria-current", true);

    const destination = findDestination(button.id);
    assignData(destination);
}


function findDestination(index) {
    return data.destinations[parseInt(index)];
}


inputElements.forEach((el) => {
    el.addEventListener("animationend", function () {
        this.classList.remove("fade-in");
    });
});
