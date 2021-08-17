import {renderElement} from "./homepage.js";
const obArr = [
  {
    id:0,
    idTv:1,
    idInv:1
  },
  {
    id:1,
    idTv:2,
    idInv:2
  },
  {
    id:2,
    idTv:3,
    idInv:3
  },
  
  {
    id:3,
    idTv:4,
    idInv:4
  },
  {
    id:4,
    idTv:5,
    idInv:5
  },
  {
    id:5,
    idTv:6,
    idInv:6
  }
]
const Movies = {
  init: ()=>{
    document.querySelector('#shows-counter').innerHTML = obArr.length
    Movies.getShows(obArr);
  },
  getShows:(objArr)=>{
    const arr = Array.from(objArr);
    arr.forEach((item)=>{
      fetch(`https://api.tvmaze.com/shows/${item.idTv}`)
      .then(response => response.json())
      .then(json =>renderElement(json));
    })
  }
}


export default Movies;