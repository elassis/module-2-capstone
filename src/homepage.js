
const arrElements = [
  {
    id:0,
    title: "item 1",
    img:"hello"
  },
  {
    id:1,
    title: "item 2",
    img:"hello2"
  },
  {
    id:2,
    title: "item 3",
    img:"hello3"
  }
]

const renderHomePage = () => {
  let arr = Array.from(arrElements);
  let counterLikes = 3;
  document.body.innerHTML = `<nav>
   <ul class="nav-bar">
    <li class="logo"></li>
    <li class="items">Shows (${arr.length})</li>
   </ul> 
  </nav>
  
  <div class="container">
  </div>`;

  arr.forEach((show)=>{
    const container = document.querySelector('.container');
    const element = `<div id=${show.id} class="show-container">
                      <ul class="data-ul">
                        <li class="img"><p>${show.img}</p></li>
                        <li class="like-title">
                          <p>Title: ${show.title}</p>
                          <div class="like-section">
                            <button><i class="fas fa-heart"></i></button>
                            <p class="like-text">Like ${counterLikes}</p>
                          </div>                          
                        </li> 
                        <li class="comment-cont">
                          <button class="comment-btn">Comment</button></li>
                      </ul>
                    </div>`;
                    container.innerHTML += element;
  })

}

export default renderHomePage;