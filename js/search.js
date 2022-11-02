const searchForm = document.querySelector("#search-form");
const serachInput = document.querySelector("#search-form input");

function searchSubmit(event) {
    event.preventDefault();
    const link = `https://www.google.com/search?q=${serachInput.value}`;
    location.href = link;
}

searchForm.addEventListener("submit", searchSubmit);