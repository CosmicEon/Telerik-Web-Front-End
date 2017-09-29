/* globals $ */

function ajax(url, method, body, headers) {
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
    return ajax(url, 'GET', '', headers);
}

function post(url, body, headers = {}) {
    return ajax(url, 'POST', JSON.stringify(body), headers);
}

function put(url, body, headers = {}) {
    return ajax(url, 'PUT', JSON.stringify(body), headers);
}

export { get, post, put };
