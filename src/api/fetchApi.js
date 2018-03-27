// API Users static class
export default class FetchApi {
    static fetchAutoCompleteSearch(searchQuery) {
        return fetch('https://api.github.com/search/users?q=' + searchQuery).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}