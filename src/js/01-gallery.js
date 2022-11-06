// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
import '../css/common.css'
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// import "simplelightbox/dist/simple-lightbox.min.css";

const imgGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkUp(galleryItems);

imgGalleryEl.innerHTML = markupGallery;

function createMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        alt="${item.description}"/>
        </a>
        </div>`
        }).join("");
};


const simplelightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});


