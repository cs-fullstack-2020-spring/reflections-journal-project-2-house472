import React, { Component } from 'react'
import JournalDisplay from './JournalDisplay'
import JournalForm from './JournalForm'
import { BrowserRouter as Router, Link, Route } from 'react'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryArray: []
        }
    }
    updateArray = (journalentry) => {
        console.log(this.state.entryArray)
        this.state.entryArray.push(journalentry)
        this.setState({ entryArray: this.state.entryArray })
    }
    render() {
        return (
            <div id="AppContainer">
                <Router>
                    <Link to="/">Home </Link>
                    <Link to="/form">Form </Link>


                </Router>
                <JournalForm updateArray={this.updateArray} />
                <JournalDisplay entryArray={this.state.entryArray} />




            </div>
        );
    }
}

export default AppContainer;