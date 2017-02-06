function toggleNav() {
    var links = document.getElementById("mobileList");
    if (links.className === "mL") {
        links.className += " show";
    } else {
        links.className = "mL";
    }
}
