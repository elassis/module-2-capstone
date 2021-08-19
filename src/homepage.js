
const renderHomePage = () => {
  document.body.innerHTML = `<nav>
   <ul class="nav-bar">
    <li class="logo"></li>
    <li class="items">Shows (<p id="shows-counter"></p>)</li>
   </ul> 
  </nav>
  
  <div class="container">
  </div>`;
}
const renderElement = (element,idMicroverse) =>{
  let counterLikes = 3;
  const container = document.querySelector('.container');
  const htmlElement = `<div id=${element.id} class="show-container">
                      <ul class="data-ul">
                        <li class="img"><img src="${element.image.medium}"></li>
                        <li class="like-title">
                          <p>Title: ${element.name}</p>
                          <div class="like-section">
                            <button><i id="${idMicroverse}" class="fas fa-heart"></i></button>
                            <p class="like-text">Like ${counterLikes}</p>
                          </div>                          
                        </li> 
                        <li class="comment-cont">
                          <input id="get-id" type="hidden" value="${idMicroverse}">
                          <button class="comment-btn">Comment</button></li>
                      </ul>
                    </div>`;
  container.innerHTML += htmlElement;
}

export { renderHomePage, renderElement };