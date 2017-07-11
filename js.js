function elppa(i) {
    if (i == 0) {
        document.getElementById("ROM").style.display = "none";
        document.getElementById("xstable1").style.display = "none";
        document.getElementById("xstable2").style.display = "none";
    }
    if (i == 1) {
        document.getElementById("xstitle").style.display = "none";
        document.getElementById("xstable1").style.display = "none";
        document.getElementById("xstable2").style.display = "none";

    }
    if (i == 2) {
        document.getElementById("xstitle").style.display = "none";
        document.getElementById("ROM").style.display = "none";
        document.getElementById("xstable2").style.display = "none";
    }
    if (i == 3) {
        document.getElementById("xstitle").style.display = "none";
        document.getElementById("ROM").style.display = "none";
        document.getElementById("xstable1").style.display = "none";
    }
}

