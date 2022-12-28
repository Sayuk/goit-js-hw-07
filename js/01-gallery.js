import {galleryItems} from './gallery-items.js';
// Change code below this line
///

// import * as basicLightbox from 'basiclightbox'
const imageContainer = document.querySelector(".gallery");
const imgMarkup = createImgGallery(galleryItems);
imageContainer.insertAdjacentHTML("beforeend",imgMarkup );

function createImgGallery(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image"
            src='${preview}'
            data-source="${original}"
            alt="${description}"
            >
            </a>
            </div>
        `
    }).join("");
}


imageContainer.addEventListener("click", (eve) => {
    eve.preventDefault();

    if(eve.target.nodeName !== "IMG"){
        return;
    }
    const modalImg = eve.target.getAttribute("data-source");

    const instance = basicLightbox.create(`
    <img src="${modalImg}" width="800" height="600">
`)


instance.show()
})



console.log(galleryItems);




// instance.show()
