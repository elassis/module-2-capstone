import {renderElement} from "./homepage.js";
import { showLikes } from "./handlers.js";
import renderPopup from "./popup.js";

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
    return arr.length;
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
    
  },
  getShowPopup: (movieName, id) => {
    const urlReq = `https://api.tvmaze.com/singlesearch/shows?q=${movieName}`;
    
      fetch(urlReq)
      .then(response => response.json())
      .then((data) => { renderPopup(data, id); })
  
  },
  getComments: async (id) => {
    console.log(id)
    const urlReq = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/comments?item_id=${id}`;
  
    const response = await fetch(urlReq);
    const commArr = await response.json();
    return response;
  },
  addComment: async (id, userName, userComment) => {
    const urlReq = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/comments';
    const response = await fetch(urlReq, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: `${id}`,
        username: `${userName}`,
        comment: `${userComment}`,
      }),
    })
  }

}


export default Movies;