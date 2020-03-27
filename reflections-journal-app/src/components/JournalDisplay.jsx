import React, {Component} from 'react'

class JournalDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
{
    this.props.entryArray.map((entry, idx) => {
        return(
            <div KEY = {idx}>
                <p>Date: {entry.entryDate}</p>
                <p>What's On Your Mind: {entry.journalEntry}</p>
                <p>Rate Your Confidence: {entry.entryDate}</p>
            </div>
        )
    })
}
            </div>
         );
    }
}
 
export default JournalDisplay;