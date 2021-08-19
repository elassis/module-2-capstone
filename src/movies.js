import { renderElement } from './homepage.js';
import { renderPopup, refresh } from './popup.js';

const obArr = [
  {
    id: 0,
    idTv: 1,
    idInv: 'item_1',
  },
  {
    id: 1,
    idTv: 2,
    idInv: 'item_2',
  },
  {
    id: 2,
    idTv: 3,
    idInv: 'item_3',
  },

  {
    id: 3,
    idTv: 4,
    idInv: 'item_4',
  },
  {
    id: 4,
    idTv: 5,
    idInv: 'item_5',
  },
  {
    id: 5,
    idTv: 6,
    idInv: 'item_6',
  },
];
const Movies = {
  init: () => {
    Movies.showItemsCounter(obArr);
    Movies.getShows(obArr);
    Movies.getLikes();
  },
  showItemsCounter: (arr) => {
    document.querySelector('#shows-counter').innerHTML = arr.length;
    return arr.length;
  },
  getShows: (objArr) => {
    const arr = Array.from(objArr);
    arr.forEach(async (item) => {
      await fetch(`https://api.tvmaze.com/shows/${item.idTv}`)
        .then((response) => response.json())
        .then((json) => renderElement(json, item.idInv));
    });
  },
  saveLike: async (itemId) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => Movies.refreshLikeOnClick(response.status));
  },
  getLikes: async () => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/likes/', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => Movies.showLikes(json));
  },
  showLikes: (arr) => {
    const showsArr = Array.from(arr);
    const containersArr = document.querySelectorAll('.like-text');
    showsArr.forEach((show) => {
      containersArr.forEach((container) => {
        if (container.className.includes(show.item_id)) {
          container.innerHTML = '';
          container.innerHTML = `Likes ${show.likes}`;
        }
      });
    });
  },
  refreshLikeOnClick: (status) => {
    if (status === 201) {
      Movies.getLikes();
    }
  },
  getShowPopup: async (movieName, id, commentArr) => {
    const urlReq = `https://api.tvmaze.com/singlesearch/shows?q=${movieName}`;
    await fetch(urlReq)
      .then((response) => response.json())
      .then((data) => {
        renderPopup(data, id, commentArr);
        Movies.showCommentCounter(commentArr);
      });
  },
  getComments: async (movieName, id) => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/comments?item_id=${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => { Movies.getShowPopup(movieName, id, json); });
  },
  refreshComments: async (id) => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/comments?item_id=${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        refresh(json);
        Movies.showCommentCounter(json);
      });
  },
  addComment: async (id, userName, userComment) => {
    const urlReq = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CTh1EvksCU2CGkEmnLer/comments';
    await fetch(urlReq, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: `${id}`,
        username: `${userName}`,
        comment: `${userComment}`,
      }),
    });
  },
  showCommentCounter: (commArr) => {
    const commCount = document.querySelector('.comment-count');
    commCount.innerHTML = '';
    commCount.innerHTML = commArr.length;

    return commArr.length;
  },

};

export default Movies;