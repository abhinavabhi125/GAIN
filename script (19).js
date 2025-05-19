const proteinData = {
  chicken: { protein: 31, calories: 165 },
  egg: { protein: 13, calories: 155 },
  tofu: { protein: 8, calories: 76 },
  whey: { protein: 80, calories: 400 },
  milk: { protein: 3.4, calories: 42 }
};

const goalProtein = 150;

function calculate() {
  const chicken = parseFloat(document.getElementById("chicken").value) || 0;
  const egg = parseFloat(document.getElementById("egg").value) || 0;
  const tofu = parseFloat(document.getElementById("tofu").value) || 0;
  const whey = parseFloat(document.getElementById("whey").value) || 0;
  const milk = parseFloat(document.getElementById("milk").value) || 0;

  const protein =
    (chicken * proteinData.chicken.protein) / 100 +
    (egg * proteinData.egg.protein) / 100 +
    (tofu * proteinData.tofu.protein) / 100 +
    (whey * proteinData.whey.protein) / 100 +
    (milk * proteinData.milk.protein) / 100;

  const calories =
    (chicken * proteinData.chicken.calories) / 100 +
    (egg * proteinData.egg.calories) / 100 +
    (tofu * proteinData.tofu.calories) / 100 +
    (whey * proteinData.whey.calories) / 100 +
    (milk * proteinData.milk.calories) / 100;

  document.getElementById("proteinResult").textContent = protein.toFixed(2);
  document.getElementById("calorieResult").textContent = calories.toFixed(2);

  const progressPercent = Math.min((protein / goalProtein) * 100, 100);
  document.getElementById("progressFill").style.width = progressPercent + "%";
}

// Recalculate on every input
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", calculate);
});

calculate(); // run on load
