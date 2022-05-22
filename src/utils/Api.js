class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json()
    }


    getProfilesInfo() {
        return fetch(`${this._baseUrl}/users`)
            .then(res => this._getResponseData(res))
    }

    getPostsByUserId(id) {
        return fetch(`${this._baseUrl}/posts?userId=${id}`)
            .then(res => this._getResponseData(res))
    }

    getPostById(id) {
        return fetch(`${this._baseUrl}/posts/${id}`)
            .then(res => this._getResponseData(res))
    }

    getCommentsByPostId(id) {
        return fetch(`${this._baseUrl}/comments?postId=${id}`)
            .then(res => this._getResponseData(res))
    }

    makeComment(email, name, text) {
        return fetch(`${this._baseUrl}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                name: name,
                body: text,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => this._getResponseData(res))
    }


}

const api = new Api({
    baseUrl: 'https://jsonplaceholder.typicode.com',
}
);

export default api;