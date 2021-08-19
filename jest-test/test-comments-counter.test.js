/**
 * @jest-environment jsdom
 */
import Movies from '../src/movies.js';

const mockArr = [
  {
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Jane',
  },
  {
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Jane',
  },
];

test('Count items List', () => {
  document.body.innerHTML = '<div class="comment-count"></div>';
  expect(Movies.showCommentCounter(mockArr)).toBe(4);
});