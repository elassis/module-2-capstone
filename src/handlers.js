import Movies from './movies.js';

const listeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'fas fa-heart') {
      Movies.saveLike(e.target.id);
    }
    if (e.target.className === 'comment-btn') {
      const movieTitle = e.target.parentElement.parentElement.children[1].children[0].textContent;
      const movieName = movieTitle.split(': ').pop();
      const id = e.target.parentElement.firstElementChild.value;
      Movies.getComments(movieName, id);
    }
    if (e.target.id === 'submit-comment') {
      e.preventDefault();
      const id = document.querySelector('#popup-id').value;
      const userName = document.querySelector('#name');
      const comment = document.querySelector('#input-comment');

      Movies.addComment(id, userName.value, comment.value);
      Movies.refreshComments(id);
      userName.value = '';
      comment.value = '';
    }
    if (e.target.className === 'close-icon') {
      const popupContainer = document.querySelector('#popup');
      popupContainer.remove();
    }
  });
};

export default listeners;