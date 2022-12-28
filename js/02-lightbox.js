import { galleryItems } from './gallery-items.js';
// Change code below this line


const imageContainer = document.querySelector(".gallery");
const imgMarkup = createImgGallery(galleryItems);
imageContainer.insertAdjacentHTML("beforeend",imgMarkup );

function createImgGallery(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__item" href="${original}" data-lightbox="lbox" onclick="return false">
            <img 
            class="gallery__image"
            loading="lazy"
            src='${preview}'
            data-source="${original}"
            alt="${description}"
            
            >
            </a>
            </li>
        `
    }).join("");
}


var gallery = new SimpleLightbox('.gallery a',{captionsData: 'alt', captionDelay: 250, });

    gallery.on('show.simplelightbox', function (){
});


console.log(galleryItems);
