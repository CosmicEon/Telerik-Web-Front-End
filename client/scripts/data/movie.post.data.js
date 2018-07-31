import * as requester from 'requester';

function getById(id) {
  return requester.get(`/movies/${id}`);
}

export { getById };
