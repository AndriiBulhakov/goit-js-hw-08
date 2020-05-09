import items from './gallery-items';
const ulRef = document.querySelector('.js-gallery')
const lightBoxRef = document.querySelector('.js-lightbox')
const modalImg = document.querySelector('.lightbox__image')
const closeModalBtn = document.querySelector('.lightbox__button')

const createGalleryItems = item => {
    const listGalleryItem = document.createElement('li')
    listGalleryItem.classList.add('gallery__item')

    const linkGalleryItem = document.createElement('a')
    linkGalleryItem.classList.add('gallery__link')
    linkGalleryItem.setAttribute('href', item.original)

    const imgGalleryItem = document.createElement('img')
    imgGalleryItem.classList.add('gallery__image')
    imgGalleryItem.setAttribute('src', item.preview)
    imgGalleryItem.setAttribute('data-source', item.original)
    imgGalleryItem.setAttribute('alt', item.description)

    listGalleryItem.appendChild(linkGalleryItem)
    listGalleryItem.appendChild(imgGalleryItem)

    ulRef.appendChild(listGalleryItem)
    return ulRef
}

items.forEach(item => {createGalleryItems(item)})

closeModalBtn.addEventListener('click',() => {
    lightBoxRef.classList.remove('is-open')
    modalImg.removeAttribute('src')
})
ulRef.addEventListener('click', onImagesClick)
 
function onImagesClick(event){
  if(event.target.nodeName !== 'IMG'){
    return
  }  
  
  lightBoxRef.classList.add('is-open')
  modalImg.setAttribute('src', event.target.dataset.source)
}



