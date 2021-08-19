import './style.css';
import { renderHomePage } from './homepage.js';
import Movies from './movies.js';
import listeners from './handlers.js';

const component = () => {
  renderHomePage();
  Movies.init();
  listeners();
};

component();
