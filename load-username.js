window.addEventListener("DOMContentLoaded", () => {
    const storedUser = localStorage.getItem("currentUser");
    document.getElementById("username-display").innerText = storedUser || "Guest";
});
