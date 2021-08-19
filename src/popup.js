const refresh = (commentArr) => {
  const commentsContainer = document.querySelector('.popup-comments');
  const commentCount = document.querySelector('.comment-count');

  commentCount.innerHTML = '';
  commentCount.innerHTML = commentArr.length;
  commentsContainer.innerHTML = '';
  commentArr.forEach((element) => {
    const p = document.createElement('p');
    p.classList.add('comment');
    p.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
    commentsContainer.appendChild(p);
  });
};

const renderPopup = (tvShow, id, commentArr) => {
  const poPup = document.createElement('section');
  poPup.id = 'popup';
  poPup.innerHTML = `<article class="item-popup">
    <div class="popup-wrapper">
        <div class="popup-header">
            <div class="img-holder">
              <img class="popup-img" src="${tvShow.image.original}">
            </div>
            <div class="close-icon">X</div>
        </div>
        <div class="popup-details">
            <div class="popup-title">
              <h2>${tvShow.name}</h2>
            </div>
            <div class="popup-info">
                <div class="popup-specs">
                  <p>Premiered: ${tvShow.premiered}</p>
                  <p>Rating: ${tvShow.rating.average}</p>
                </div>
                <div class="popup-specs">
                  <p>Genres: ${tvShow.genres}</p>
                  <p>Language: ${tvShow.language}</p>
                </div>
            </div>
        </div>
        <div class="popup-details">
            <div class="comments-container">
              <h3>Comments</h3>
              <p class="comment-count"></p>
            </div>
            <div class="popup-info">
                <div class="popup-comments">
                </div>
            </div>
        </div>
        <div class="popup-details">
            <div class="comments-container">
              <h3>Add a comment</h3>
            </div>
            <form class="add-comment">
              <input id="name" type="text" placeholder="Your name" name="name">
              <textarea id="input-comment" type="text" name="comments" placeholder="Your insights"></textarea>
              <input id="popup-id" type="hidden" value="${id}">
              <button id="submit-comment">Comment</button>
            </form>
        </div>
    </div>
    </article>`;

  document.body.appendChild(poPup);
  refresh(commentArr);
};

export { renderPopup, refresh };