const searchButton = document.getElementById("request-button");

searchButton.addEventListener("click", () => {

    const search = document.getElementById('search').value
    window.location.href = `/artist-search-results/${search}`

});