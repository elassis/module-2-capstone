import Movies from "./movies";
const listeners = () =>{
  document.addEventListener('click',(e)=>{
    if(e.target.className === 'fas fa-heart'){
      Movies.saveLike(e.target.id);
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