const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const mainContainer = document.querySelector(".big-slide");
const previewSide = document.querySelector(".preview-side");

// Ciclo per stampare le slide
for (let index = 0; index < images.length; index++) {

    let slide = document.createElement("div");
    slide.classList.add("slide");
    mainContainer.append(slide);

    let imageSlide = document.createElement("img");
    imageSlide.src = images[index]["image"];
    slide.append(imageSlide);

    let textSlide = document.createElement("div");
    textSlide.classList.add("text");
    slide.append(textSlide);

    let title = document.createElement("h3");
    title.innerHTML = images[index]["title"];
    textSlide.append(title);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = images[index]["text"];
    textSlide.append(paragraph);

    let miniSlide = document.createElement("div");
    miniSlide.classList.add("mini-slide");
    previewSide.append(miniSlide);

    let imageMiniSlide = document.createElement("img");
    imageMiniSlide.src = images[index]["image"];
    miniSlide.append(imageMiniSlide);

}


// Frecce
let prewArrow = document.createElement("span");
prewArrow.classList.add("prew");
prewArrow.innerHTML += `<i class="fa-solid fa-chevron-up"></i>`;
previewSide.append(prewArrow);

let nextArrow = document.createElement("span");
nextArrow.classList.add("next");
nextArrow.innerHTML += `<i class="fa-solid fa-chevron-down"></i>`;
previewSide.append(nextArrow);


// Assegnazione della slide attiva
let activeSlide = 0;
const allSlides = document.querySelectorAll(".slide");
console.log("allSlide", allSlides);
allSlides[activeSlide].classList.add("active");

const allMiniSlides = document.querySelectorAll(".mini-slide");
console.log("allMiniSlides", allMiniSlides);
allMiniSlides[activeSlide].classList.add("active");


// Cambiare l'immagine attiva
const previousButton = document.querySelector(".prew");
const nextButton = document.querySelector(".next");

previousButton.addEventListener("click",

    function () {
        
        if (activeSlide > 0) {
            
            allSlides[activeSlide].classList.remove("active");
            allMiniSlides[activeSlide].classList.remove("active");
            activeSlide--;
            allSlides[activeSlide].classList.add("active");
            allMiniSlides[activeSlide].classList.add("active");

        }
    }
); 

nextButton.addEventListener("click",

    function () {
        
        if (activeSlide < images.length - 1) {
            
            allSlides[activeSlide].classList.remove("active");
            allMiniSlides[activeSlide].classList.remove("active");
            activeSlide++;
            allSlides[activeSlide].classList.add("active");
            allMiniSlides[activeSlide].classList.add("active");

        }
    }
); 