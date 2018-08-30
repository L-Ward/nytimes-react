import React from 'react';
import './Home.css';
import Form from '../../components/Form';
import Results from '../../components/Results'
import API from '../../utils/API';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
        this.loadArticles = this.loadArticles.bind(this);
    }

loadArticles = (search, startYear, endYear) => {
    API.getArticles(search, startYear, endYear)
    .then( res =>
        this.setState({ articles: res.data.response.docs })
    )
}

    render() {
        return (
            <div>
                <Form loadArticles={this.loadArticles}/>
                <Results saved={false} articles={this.state.articles}/>
            </div>
        );
    }
}

export default Home;