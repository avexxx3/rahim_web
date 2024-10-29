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
    }).then(response => response.json()).then(json => setData(json))//.catch(navLogin())
}

function setData(jsonArray) {
    var profiles = document.getElementById("profiles").innerHTML
    for (var user of jsonArray) {
        document.getElementById("profiles").innerHTML += '<div id=\"profile\">' + JSON.stringify(user) + '</div></br></br>'
    }

    console.log(jsonA)
}