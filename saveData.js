function saveUserCalories(username, totalCalories) {
  if (!username) {
    alert("Username is missing.");
    return;
  }
  if (!totalCalories || isNaN(totalCalories) || totalCalories <= 0) {
    alert("Total calories must be calculated and greater than 0.");
    return;
  }

  const now = new Date().toLocaleString();
  const savedEntries = JSON.parse(localStorage.getItem("userCaloriesData")) || [];

  savedEntries.push({
    username,
    totalCalories,
    savedAt: now,
  });

  localStorage.setItem("userCaloriesData", JSON.stringify(savedEntries));

  alert(`Saved calories: ${totalCalories} for user ${username} on ${now}`);
  window.location.href = "index.html"; // Redirect after saving
}

window.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById("save-btn");
  if (!saveBtn) {
    console.error("save-btn not found!");
    return;
  }

  saveBtn.addEventListener("click", () => {
    // Read username and totalCalories when button is clicked
    const username = document.getElementById("username-display").textContent.trim();
    const totalCalories = window.totalCalories;

    saveUserCalories(username, totalCalories);
  });
});
