function saveData() {
  const inputData = document.getElementById("dataInput").value;
  localStorage.setItem("userData", inputData);
  displayData();
}

// Функция для отображения данных из localStorage
function displayData() {
  const storedData = localStorage.getItem("userData");
  const outputDiv = document.getElementById("output");

  if (storedData) {
    outputDiv.textContent = `Stored Data: ${storedData}`;
  } else {
    outputDiv.textContent = "No data stored.";
  }
}

// При загрузке страницы отображаем сохраненные данные
window.onload = displayData;
