const form = document.querySelector("form");


function changeColour(chosencolour) {
  document.body.style.backgroundColor = chosencolour
}

function changeFontFamily(chosenfontfamily) {
  document.body.style.fontFamily = chosenfontfamily
}

// form.addEventListener("submit", function (event) {
  // event.preventDefault();
  // const favColourInput = event.target.colour.value;
  //changeColour(favColourInput);
  //localStorage.setItem("localColour", favColourInput);}
//)


// part 02 JSON


function savePreferences(event) {
  event.preventDefault()
  const favColourInput = event.target.colour.value;
  changeColour(favColourInput);
  const fontInput = event.target.font.value;
  const preferences = {
    favColourInput, fontInput}
    changeFontFamily(fontInput)
  localStorage.setItem("preferences", JSON.stringify(preferences))
}
// const formData = new FormData(form);
// const colour = formData.get("colour");
// NEED ^^ explained. reminder

form.addEventListener("submit", savePreferences);

function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));
    changeColour(preferences.favColourInput);
    changeFontFamily(preferences.fontInput);
  }
  
  loadPreferences();
