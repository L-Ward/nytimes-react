import axios from 'axios';

export default {

    // Get articles
    getArticles: function (searchTerm, startYear, endYear) {
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
                'q': searchTerm,
                'begin_date': startYear + "0101",
                'end_date': endYear + "1231"
            }
        })
    },

    // Get saved articles
    getSavedArticles: function () {
        return axios.get('/saved')
    },

    // Post saved article
    saveArticle: function (articleData) {
        return axios.post('/saved', articleData);
    },

    // Delete saved article
    removeArticle: function (articleData) {
        return axios.delete('/saved', {data: articleData});
    }
}