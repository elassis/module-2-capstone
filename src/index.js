import './style.css'; 
import { getShow, addComment } from './popup.js';

const component = () => {
   const popupButton = document.querySelector('#popup');
   popupButton.addEventListener('click', (event) => {
      const moviePath = event.currentTarget.parentElement.parentElement.children[1].children[0].textContent;
      const moviName = moviePath.split(": ").pop();
      getShow(moviName);
   });
} 

component(); 
