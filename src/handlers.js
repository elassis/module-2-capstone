
import Movies from "./movies";

const listeners = () =>{
  document.addEventListener('click',(e)=>{
    if(e.target.className === 'fas fa-heart'){
      Movies.saveLike(e.target.id);
    }
    if(e.target.className === 'comment-btn'){
      const movieTitle = e.target.parentElement.parentElement.children[1].children[0].textContent;
      const movieName = movieTitle.split(": ").pop();
      const id = e.target.parentElement.firstElementChild.value;
      Movies.getComments(movieName,id);
    }
    if(e.target.id === 'submit-comment'){
      e.preventDefault();
      const id = document.querySelector('#popup-id').value;
      const userName = document.querySelector('#name');
      const comment = document.querySelector('#input-comment');
      const movieName = document.querySelector('.popup-title').children[0].innerHTML;

      Movies.addComment( id, userName.value, comment.value);
      
      Movies.refreshComments(id);
      userName.value = '';
      comment.value = '';
    }
    if(e.target.className === 'close-icon'){
      const popup = document.querySelector('.item-popup');
      popup.remove();
    }
    if(e.target.id === 'test'){
        showComments();
    }
  })
}

const refresh = (commentArr) => {
  const commentsContainer = document.querySelector('.popup-comments');
  const commentCount = document.querySelector('.comment-count');

  commentCount.innerHTML = '';
  commentCount.innerHTML = commentArr.length;
  commentsContainer.innerHTML = '';
    commentArr.forEach(element => {
      const p = document.createElement('p');
      p.classList.add('comment')
      p.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentsContainer.appendChild(p);
    });
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

export {listeners,showLikes, refresh};