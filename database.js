function saveData(cal) {
      const username = document.getElementById("username").value;
     // const Calories = document.getElementById("username").value;
      const now = new Date().toLocaleString();  // gets current date and time as a string

      const userData = {
        username: username,
        savedAt: now,
        calories: cal
      };

      localStorage.setItem("userInfo", JSON.stringify(userData));
      alert("Saved!");
    }

    function loadData() {
      const stored = localStorage.getItem("userInfo");

      if (stored) {
        const data = JSON.parse(stored);
        document.getElementById("output").innerText = 
          `Username: ${data.username}\nSaved At: ${data.savedAt}\nCalories: ${data.calories}`;
      } else {
        document.getElementById("output").innerText = "No data found.";
      }
    }
