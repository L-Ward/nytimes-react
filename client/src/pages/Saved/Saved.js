import React from 'react';
import './Saved.css';
import API from '../../utils/API'
import Results from '../../components/Results'


class Saved extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles:[]
        }
        this.loadSavedArticles = this.loadSavedArticles.bind(this);
        this.loadSavedArticles();
    }

    loadSavedArticles = () => {
        API.getSavedArticles()
        .then( res =>
            this.setState({ articles: res.data })
        )
    }

    render() {
        return (
            <div>
               <Results saved={true} articles={this.state.articles}/>
            </div>
        );
    }
}

export default Saved;