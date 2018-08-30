import React from "react";
import "./Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            startYear: '',
            endYear: '',
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleStartYearChange = this.handleStartYearChange.bind(this);
        this.handleEndYearChange = this.handleEndYearChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleStartYearChange(event) {
        this.setState({ startYear: event.target.value });
    }

    handleEndYearChange(event) {
        this.setState({ endYear: event.target.value });
    }

    handleClear(_) {
        this.setState({
            searchTerm: '',
            startYear: '',
            endYear: '',
        });
    }

    handleSubmit(event, searchTerm, startYear, endYear) {
        event.preventDefault();
        this.props.loadArticles(searchTerm, startYear, endYear)
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-list-alt"></i>
                        &nbsp;Search Parameters
                    </div>
                    <form>
                        <div className="form-group">
                            <label>Search Term:</label>
                            <input type="text" className="form-control" id="searchTerm" value={this.state.searchTerm} onChange={this.handleSearchChange}></input>
                        </div>
                        <div className="form-group">
                            <label>Start Year:</label>

                            <input type="text" className="form-control" id="startYear" value={this.state.startYear} onChange={this.handleStartYearChange}></input>
                        </div>
                        <div className="form-group">
                            <label>End Year:</label>
                            <input type="text" className="form-control" id="endYear" value={this.state.endYear} onChange={this.handleEndYearChange}></input>
                        </div>
                        <button type="submit" className="btn btn-secondary" id="runSearch" onClick={(event)=>this.handleSubmit(event, this.state.searchTerm, this.state.startYear, this.state.endYear)}>
                            <i className="fa fa-search"></i>
                            &nbsp;Search
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;