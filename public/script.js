
// Toggles Sidebar container
const openMenuIcon = document.getElementById("open-menu-icon");
const menuContainer = document.getElementById("menu-container");
const closeMenuIcon = document.getElementById("close-menu-icon");
const overlay = document.getElementById("overlay");
const body = document.body;

openMenuIcon.addEventListener("click", () => {
    menuContainer.classList.add("sidebar-open");
    overlay.classList.remove("hidden");
    body.style.overflow = "hidden";
});

closeMenuIcon.addEventListener("click", () => {
    menuContainer.classList.remove("sidebar-open");
    overlay.classList.add("hidden");
    body.style.overflow = "initial";
});


// Toggles Mobile Features list
const featuresIcon = document.getElementById("features-icon");
const featuresList = document.getElementById("features-list");
const mFeatures = document.getElementById("m-features");

const toggleFeaturesList = () => {
    const featuresListStyle = window.getComputedStyle(featuresList);
    if (featuresListStyle.maxHeight === "0px") {
        featuresList.style.maxHeight = featuresList.scrollHeight + "px";
        featuresList.classList.add("add-margin-top");
        featuresIcon.classList.add("rotate-arrow-icon");
    } else {
        featuresList.style.maxHeight = "0";
        featuresList.classList.remove("add-margin-top");
        featuresIcon.classList.remove("rotate-arrow-icon");
    };
};


// Toggles Mobile Company list
const companyIcon = document.getElementById("company-icon");
const companyList = document.getElementById("company-list");
const mCompany = document.getElementById("m-company");

const toggleCompanyList = () => {
    const companyListStyle = window.getComputedStyle(companyList);
    if (companyListStyle.maxHeight === "0px") {
        companyList.style.maxHeight = companyList.scrollHeight + "px";
        companyList.classList.add("add-margin-top");
        companyIcon.classList.add("rotate-arrow-icon");
    } else {
        companyList.style.maxHeight = "0";
        companyList.classList.remove("add-margin-top");
        companyIcon.classList.remove("rotate-arrow-icon");
    };
};

// Mobile Menu Event Listeners
featuresIcon.addEventListener("click", toggleFeaturesList);
mFeatures.addEventListener("click", toggleFeaturesList);

companyIcon.addEventListener("click", toggleCompanyList);
mCompany.addEventListener("click", toggleCompanyList);



// Toggles desktop nav-list
document.addEventListener("DOMContentLoaded", () => {

    const dFeaturesElement = document.getElementById("features"); 
    const dFeaturesIcon = document.getElementById("d-features-icon");
    const dFeaturesList = document.getElementById("d-features-list");

    // Toggles features list
    const dFeaturesElementToggle = () => {
        dFeaturesList.style.opacity = "0";
        setTimeout(() => {
            dFeaturesList.style.opacity = "1";
            dFeaturesList.classList.toggle("invisible");
            dFeaturesIcon.classList.toggle("rotate-arrow-icon");
        }, 200);
    };
   

    const dCompanyElement = document.getElementById("company"); 
    const dCompanyIcon = document.getElementById("d-company-icon");
    const dCompanyList = document.getElementById("d-company-list");

    // Toggles company list
    const dCompanyElementToggle = () => {
        dCompanyList.style.opacity = "0";
        setTimeout(() => {
            dCompanyList.style.opacity = "1";
            dCompanyList.classList.toggle("invisible");
            dCompanyIcon.classList.toggle("rotate-arrow-icon");
        }, 200);
    };


    // Desktop Nav event listeners
    dFeaturesElement.addEventListener("click", dFeaturesElementToggle);
    dFeaturesIcon.addEventListener("click", dFeaturesElementToggle);

    dCompanyElement.addEventListener("click", dCompanyElementToggle);
    dCompanyIcon.addEventListener("click", dCompanyElementToggle);
});