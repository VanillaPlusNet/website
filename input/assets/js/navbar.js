const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

const otherLink = document.getElementById("otherLink");
const otherDropdown = document.getElementById("otherDropdown");

otherLink.addEventListener("click", function (event) {
    event.preventDefault();
    otherDropdown.classList.toggle("hidden");
});

const mobileOtherLink = document.getElementById("mobileOtherLink");
const mobileOtherDropdown = document.getElementById("mobileOtherDropdown");

mobileOtherLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileOtherDropdown.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
    const isClickInsideOther = otherLink.contains(event.target) || otherDropdown.contains(event.target);
    if (!isClickInsideOther) {
        otherDropdown.classList.add("hidden");
    }

    const isClickInsideMobileOther = mobileOtherLink.contains(event.target) || mobileOtherDropdown.contains(event.target);
    if (!isClickInsideMobileOther) {
        mobileOtherDropdown.classList.add("hidden");
    }

    const isClickInsideMenu = hamburgerBtn.contains(event.target) || mobileMenu.contains(event.target);
    if (!isClickInsideMenu) {
        mobileMenu.classList.add("hidden");
    }
});

function copyLink(element) {
    var linkValue = "play.vanillaplus.net";

    navigator.clipboard.writeText(linkValue)
        .then(function () {
            element.innerText = "Link copied";
            setTimeout(function () {
                element.innerText = "Join Us!";
            }, 5000);
        })
        .catch(function (error) {
            console.error('Failed to copy: ', error);
        });
}