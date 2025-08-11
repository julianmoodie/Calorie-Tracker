document.getElementById("username-form").addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from reloading the page instantly

    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a username");
        return;
    }

    // Save username in localStorage
    localStorage.setItem("currentUser", username);
   // document.getElementById("currentUser").innerHTML = username;
   //document.getElementById("username-display").innerText = username;

    // Redirect
    window.location.href = "calorie-tracker.html";
});
