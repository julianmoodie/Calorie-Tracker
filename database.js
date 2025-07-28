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
      const element = document.getElementById("output")
      element.innerHTML = ""

      if (stored) {
        const data = JSON.parse(stored);
            const text = `Username: ${data.username}\nSaved At: ${data.savedAt}\nCalories: ${data.calories}`;
            const safeData = document.createTextNode(text)
            element.appendChild(safeData)

      } else {
        document.getElementById("output").innerText = "No data found.";
      }
    }
