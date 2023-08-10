"use strict";
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

    // add images to li elements
const galleryImages = galleryItems.map((img) => 
`<li class="gallery__item">
<a class="gallery__link" href="${img.original}">
<img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    /></a>
    </li>`).join("");

    // add array of imgs to gallery
gallery.insertAdjacentHTML("afterbegin", galleryImages);

    // onclick event
gallery.addEventListener("click", event => {
    // prevent default browser behaviour
    event.preventDefault();
    // if no img finish function
if(!event.target.dataset.source) {
    return;
} 
    // show image on click
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

instance.show()
{
    // close modal window on click ESCAPE bttn
    document.addEventListener("keydown", (ev) => {
    if(ev.key === "Escape") {
        instance.close();
    }
})}
});

