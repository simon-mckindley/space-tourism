

async function fetchJsonData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch the JSON data:', error);
    }
}

async function loadData() {
    const data = await fetchJsonData();
    if (data) {
        console.log("DATA");
        sessionStorage.setItem("space-data", JSON.stringify(data));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});
