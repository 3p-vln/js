const form = document.forms.first;

form.elements.text.addEventListener("change", () => {
  const label = document.querySelector("#text-label");
  label.innerHTML = form.text.value;
});

form.email.addEventListener("input", (e) => {
  const label = document.querySelector("#email-label");
  label.innerHTML = e.target.value;
});

const divForRadio = document.querySelector(".for-studying");
const radioBtns = form.elements.studying;
form.elements.fieldset.addEventListener("click", (e) => {
  const radioBtn = e.target.closest('input[name="studying"]');
  if (!radioBtn) {
    return;
  }
  divForRadio.getElementsByTagName("span")[0].innerHTML = radioBtn.value;
  console.log(divForRadio.getElementsByTagName("span")[0]);
});

const studyingBtn = document.querySelector(".for-studying-btn");
studyingBtn.addEventListener("click", () => {
  radioBtns[0].checked;
});

const selectLang = form.elements.lang;
selectLang.addEventListener("change", () => {
  const langDiv = document
    .querySelector(".for-lang")
    .getElementsByTagName("span")[0];
  langDiv.innerHTML = selectLang.value;
});

const btnSelect = document.querySelector(".for-select");
btnSelect.addEventListener("click", () => {
  selectLang.value = "css";
  console.log(selectLang.value);
  const changeEvent = new Event("change");
  selectLang.dispatchEvent(changeEvent);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.querySelector(".message");
  message.innerHTML = "Форма отправлена без перезагрузки";
  console.dir(form);
});
