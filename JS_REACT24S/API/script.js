const catFrame = document.getElementById("catFrame")


async function fetchCats() {
    try {
        const response = await fetch ("https://api.thecatapi.com/v1/images/search")
        const data = await response.json()
        console.log(data);

        catFrame.style.width = `${data[0].width}px`;
        catFrame.style.height = `${data[0].height}px`;
        catFrame.style.backgroundImage = `url(${data[0].url})`;

    } catch (error) {
        console.error("error", error)
    }
}

fetchCats()