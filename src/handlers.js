import Movies from "./movies";
const listeners = () =>{
  document.addEventListener('click',(e)=>{
    if(e.target.className === 'fas fa-heart'){
      Movies.saveLike(e.target.id);
    }
  })
}

export default listeners;