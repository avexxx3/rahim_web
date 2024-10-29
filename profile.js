const nameField = document.getElementById("name-field")
const nationalityField = document.getElementById("nationality-field")
const genderField = document.getElementById("gender-field")
const languageField = document.getElementById("language-field")
const addictionField = document.getElementById("addictions-field")
const heightField = document.getElementById("height-field")
const weightField = document.getElementById("weight-field")
const skinField = document.getElementById("skin-field")
const fitnessField = document.getElementById("fitness-field")
const countryField = document.getElementById("country-field")
const cityField = document.getElementById("city-field")
const hobbyField = document.getElementById("hobby-field")
const aboutField = document.getElementById("about-field")
const arrangementField = document.getElementById("arrangement-field")
const qualifactionField = document.getElementById("qualification-field")
const universityField = document.getElementById("university-field")
const occupationField = document.getElementById("occupation-field")
const incomeField = document.getElementById("income-field")
const divorcedField = document.getElementById("divorced-field")
const childrenField = document.getElementById("children-field")
const parentsField = document.getElementById("parents-field")
const siblingsField = document.getElementById("siblings-field")
const ageMinField = document.getElementById("age-min-field")
const ageMaxField = document.getElementById("age-max-field")
const submitFormButton = document.getElementById("submit-form-submit")

submitFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    updateProfile();
})

window.onload = function () {
    fetchProfile()
}

function fetchProfile() {
    const url = "https://rahim-api.onrender.com/get_profile";

    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Access-Control-Allow-Credentials": true
        }
    }).then(response => response.json()).then(json => setData(json))// setData(json));
}

function setData(responseObject) {
    if (!responseObject) {
        submitFormButton.value = "Create profile"
    } else submitFormButton.value = "Edit profile"

    console.log(responseObject)
    nameField.value = responseObject.bio_data.name
    genderField.value = responseObject.bio_data.is_male
    nationalityField.value = responseObject.bio_data.nationality
    languageField.value = responseObject.bio_data.native_language
    addictionField.value = responseObject.bio_data.addictions
    aboutField.value = responseObject.about_oneself
    hobbyField.value = responseObject.hobbies
    countryField.value = responseObject.whereabouts.country
    cityField.value = responseObject.whereabouts.city
    arrangementField.value = responseObject.whereabouts.living_arrangement
    qualifactionField.value = responseObject.qualifications.qualificiation
    universityField.value = responseObject.qualifications.university
    occupationField.value = responseObject.qualifications.occupation
    incomeField.value = parseInt(responseObject.qualifications.monthly_income)
    heightField.value = parseInt(responseObject.appearance.height)
    weightField.value = parseInt(responseObject.appearance.weight)
    skinField.value = responseObject.appearance.skin_color
    fitnessField.value = responseObject.appearance.fit
    ageMinField.value = parseInt(responseObject.age_range_min)
    ageMaxField.value = parseInt(responseObject.age_range_max)
    divorcedField.value = responseObject.family.divorced
    childrenField.value = responseObject.family.children
    parentsField.value = responseObject.family.parents
    siblingsField.value = responseObject.family.siblings
}

function updateProfile() {
    const body = JSON.stringify({
        email: localStorage.getItem("email"),
        public: true,
        name: nameField.value,
        is_male: genderField.value == "on",
        nationality: nationalityField.value,
        native_language: languageField.value,
        addictions: addictionField.value,
        about_oneself: aboutField.value,
        hobbies: hobbyField.value,
        country: countryField.value,
        city: cityField.value,
        living_arrangement: arrangementField.value,
        qualificiation: qualifactionField.value,
        university: universityField.value,
        occupation: occupationField.value,
        monthly_income: parseInt(incomeField.value),
        height: parseInt(heightField.value),
        weight: parseInt(weightField.value),
        skin_color: skinField.value,
        fit: fitnessField.value,
        age_range_min: parseInt(ageMinField.value),
        age_range_max: parseInt(ageMaxField.value),
        divorced: divorcedField.value == "on",
        children: childrenField.value == "on",
        parents: parentsField.value == "on",
        siblings: siblingsField.value == "on"
    });

    const Http = new XMLHttpRequest();
    const url = "https://rahim-api.onrender.com/create_profile";

    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.withCredentials = true
    Http.send(body);
}

function navLogin() {
    window.location.href = "login.html";
}
