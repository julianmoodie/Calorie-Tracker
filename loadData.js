function loadCaloriesForUsername(username) {
  if (!username) return null;

  const savedEntries = JSON.parse(localStorage.getItem("userCaloriesData")) || [];
  const userEntries = savedEntries.filter(entry => entry.username === username);

  if (userEntries.length === 0) return null;

  // Return the latest entry
  return userEntries[userEntries.length - 1];
}



function loadAllCaloriesForUsername(username) {
  if (!username) return [];

  const savedEntries = JSON.parse(localStorage.getItem("userCaloriesData")) || [];
  return savedEntries.filter(entry => entry.username === username);
}





document.getElementById("load-user-btn").addEventListener("click", () => {
  const usernameInput = document.getElementById("username-input").value.trim();
  const resultDiv = document.getElementById("load-result");

  if (!usernameInput) {
    alert("Please enter a username");
    return;
  }

  const entries = loadAllCaloriesForUsername(usernameInput);

  if (entries.length === 0) {
    resultDiv.textContent = `No saved data for ${usernameInput}`;
    document.getElementById("TotalCal").textContent = "N/A";
    return;
  }

  // Clear previous results
  resultDiv.innerHTML = "";

  // Create a list to show all entries
  const ul = document.createElement("ul");

  entries.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${usernameInput}'s total calories was ${entry.totalCalories} kcal at ${entry.savedAt}`;
    ul.appendChild(li);
  });

  resultDiv.appendChild(ul);

  // Optionally update totalCalories with last entry
  const lastEntry = entries[entries.length - 1];
  window.totalCalories = lastEntry.totalCalories;
  document.getElementById("TotalCal").textContent = lastEntry.totalCalories.toFixed(1);
});
console.log(localStorage.getItem("userCaloriesData"));