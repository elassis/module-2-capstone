import {renderElement} from "./homepage.js";
import { showLikes } from "./handlers.js";
const obArr = [
  {
    id:0,
    idTv:1,
    idInv:'item_1'
  },
  {
    id:1,
    idTv:2,
    idInv:'item_2'
  },
  {
    id:2,
    idTv:3,
    idInv:'item_3'
  },
  
  {
    id:3,
    idTv:4,
    idInv:'item_4'
  },
  {
    id:4,
    idTv:5,
    idInv:'item_5'
  },
  {
    id:5,
    idTv:6,
    idInv:'item_6'
  }
]
const Movies = {
  init: ()=>{
    Movies.showItemsCounter(obArr);
    Movies.getShows(obArr);
    Movies.getLikes();
  
  },
  showItemsCounter:(arr)=>{
    document.querySelector('#shows-counter').innerHTML = arr.length;
  },
  getShows:(objArr)=>{
    const arr = Array.from(objArr);
    arr.forEach((item)=>{
      fetch(`https://api.tvmaze.com/shows/${item.idTv}`)
      .then(response => response.json())
      .then(json =>renderElement(json,item.idInv));
    })
  },
  saveLike:(item_id)=>{
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/likes/',{
      method:'POST',
      body:JSON.stringify({
        item_id:item_id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => Movies.refreshLikeOnClick(response.status));
  },
  getLikes:()=>{
     fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/likes/',{
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json()).then(json => showLikes(json));
  },
  refreshLikeOnClick:(status)=>{
    if(status === 201){
      Movies.getLikes();
    }
  }
}


export default Movies;