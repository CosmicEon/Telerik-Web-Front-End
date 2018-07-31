/* globals $ */

function ajaxCall(url, method, body, headers) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      method,
      contentType: 'application/json',
      headers: headers,
      data: body,
      success: resolve,
      error: reject,
    });
  });
}

function get(url, headers = {}) {
  return ajaxCall(url, 'GET', '', headers);
}

function post(url, body, headers = {}) {
  return ajaxCall(url, 'POST', JSON.stringify(body), headers);
}

function put(url, body, headers = {}) {
  return ajaxCall(url, 'PUT', JSON.stringify(body), headers);
}

export { get, post, put };
