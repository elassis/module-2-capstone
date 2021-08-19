import Movies from "./movies";

const listeners = () =>{
  document.addEventListener('click',(e)=>{
    if(e.target.className === 'fas fa-heart'){
      Movies.saveLike(e.target.id);
    }
    if(e.target.className === 'comment-btn'){
      const movieTitle = e.target.parentElement.parentElement.children[1].children[0].textContent;
      const moviName = movieTitle.split(": ").pop();
      const id = e.target.parentElement.firstElementChild.value;
      const popupComments = Movies.getComments(id);
      Movies.getShowPopup(moviName, id);
      console.log(popupComments)

    }
    if(e.target.id === 'submit-comment'){
      e.preventDefault();
      const id = document.querySelector('#popup-id').value;
      const userName = document.querySelector('#name').value;
      const comment = document.querySelector('#input-comment').value;

      Movies.addComment( id, userName, comment);
    }
    if(e.target.className === 'close-icon'){
      const popup = document.querySelector('.item-popup');
      popup.remove();
    }
  })
}

const showLikes = (arr) =>{
  const showsArr = Array.from(arr);
  const containersArr = document.querySelectorAll('.like-text');
  showsArr.forEach((show)=>{
    containersArr.forEach((container)=>{
      if(container.className.includes(show.item_id)){
        container.innerHTML = '';
        container.innerHTML = `Likes ${show.likes}`
      }
    })
  })
  
  


}

export {listeners,showLikes};