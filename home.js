window.onload = function () {
    getUsers();
};

function navLogin() {
    window.location.href = "login.html";
}

async function getUsers() {
    await fetchData();
}

async function fetchData() {
    const url = "https://rahim-api.onrender.com/get_profiles";

    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Access-Control-Allow-Credentials": true
        }
    }).then(response => console.log("Response :", response.text));
}