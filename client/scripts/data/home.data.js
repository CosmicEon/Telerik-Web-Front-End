import * as requester from 'requester';

function getAll() {
  return requester.get('/movies/');
}

export { getAll };
