
window.addEventListener('resize', () => {
    if (window.innerWidth < 700) {
        document.getElementById("kill1").style.display = "none";
        document.getElementById("kill2").style.display = "none";
    } else if (window.innerWidth < 1000) {
        document.getElementById("kill1").style.display = "block";
        document.getElementById("kill2").style.display = "none";
    } else {
        document.getElementById("kill1").style.display = "block";
        document.getElementById("kill2").style.display = "block";
    }
    console.log(window.innerWidth);
});
