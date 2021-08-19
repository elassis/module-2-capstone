import './style.css'; 
import { renderHomePage } from './homepage';
import Movies from './movies';
import {listeners} from './handlers';

const component = () => {

   renderHomePage();
   Movies.init();
   listeners();
} 

component(); 
