/**
 * @jest-environment jsdom
 */
import Movies from '../src/movies.js';

const mockItemsArr = [
  {
    id: 0,
    name: 'show_1',
  },
  {
    id: 1,
    name: 'show_2',
  },
  {
    id: 2,
    name: 'show_3',
  },
  {
    id: 3,
    name: 'show_4',
  },
  {
    id: 4,
    name: 'show_5',
  },
];

test('Count items List', () => {
  document.body.innerHTML = '<div id="shows-counter"></div>';
  expect(Movies.showItemsCounter(mockItemsArr)).toBe(5);
});