(function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    }
})();

function toggleMode() {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


function openPDF(pdfUrl) {
    document.getElementById("pdfModal").style.display = "block";
    document.getElementById("pdfFrame").src = pdfUrl;
}

function closePDF() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfFrame").src = "";
}