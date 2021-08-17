import './style.css'; 
import { renderHomePage } from './homepage';
import Movies from './movies';

const component = () => {
   renderHomePage();
   Movies.init();
} 

component(); 
