const renderPopup = (tvShow, id) => {
  const poPup = document.createElement('section');
  const commentsCont = document.querySelector('.popup-comments');

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
              <p class="comment-count"> ( 3 )</p>
            </div>
            <div class="popup-info">
                <div class="popup-comments">
                  <p class="comment" >Comment 1</p>
                  <p class="comment" >Comment 2</p>
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
}

export default renderPopup;