console.log("Animated Overlay")

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


document.querySelector(".openbtn").addEventListener("click", () => {
    openNav()
})  

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

document.querySelector(".closebtn").addEventListener("click", () => {
    closeNav()
})  