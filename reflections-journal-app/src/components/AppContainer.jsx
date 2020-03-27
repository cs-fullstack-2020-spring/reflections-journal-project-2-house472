import React, { Component } from 'react'
import JournalDisplay from './JournalDisplay'
import JournalForm from './JournalForm'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
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
               {/* TO FIX: PLACE BUTTONS ABOVE FORM BUTTONS ARE PUSHED DOWN EACH TIME ENTRY IS DISPLAYED*/}
               
                <Router>
                    <a href=""> <Link to="/">Home </Link></a>
                   <a href=""> <Link to="/form">Form </Link></a>
                    <Route path= "/form">
                    <JournalForm updateArray={this.updateArray} />
                    
                    <JournalDisplay entryArray={this.state.entryArray} />
                    </Route>
                </Router>
               
                




            </div>
        );
    }
}

export default AppContainer;