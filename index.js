function translateEnglish() {
  let language = prompt("What language do you speak?");
  language = language.toLowerCase().trim();

  if (language === "english") {
    alert("Hi, Welcome to Conservation Club!");
  } else {
    alert("👋👋👋");
  }
}

let englishButton = document.querySelector(".english");
englishButton.addEventListener("click", translateEnglish);

function translateSpanish() {
  let idioma = prompt("What language do you speak? ¿Qué idioma hablas?");

  idioma = idioma.toLowerCase().trim();

  if (idioma === "spanish" || idioma === "espanol" || idioma === "español") {
    alert(
      "¡Hola, bienvenidos al Club de Conservación! ¡Lo siento! La traducción llegará pronto."
    );
  } else {
    alert("👋👋👋");
  }
}

let spanishButton = document.querySelector(".spanish");
spanishButton.addEventListener("click", translateSpanish);

function translateSomali() {
  let luqadda = prompt("What language do you speak? Luuqaddee ku hadashaa?");

  luqadda = luqadda.toLowerCase().trim();

  if (luqadda === "somali" || luqadda === "Soomaaliga") {
    alert(
      "Ku soo dhawoow Naadiga Ilaalinta! Waan ka xumahay! Turjumaada ayaa soo socota dhawaan."
    );
  } else {
    alert("👋👋👋");
  }
}

let somaliButton = document.querySelector(".somali");
somaliButton.addEventListener("click", translateSomali);
