import React, {Component} from 'react'

class JournalDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id = "display">
               
{
    this.props.entryArray.map((entry, idx) => {
        return(
            <div Key = {idx}>
                <p>Date: {entry.entryDate}</p>
                <p>What's On Your Mind: {entry.journalEntry}</p>
                <p>Rate Your Confidence: {entry.confidenceLevel}</p>
                
                <br/>
            </div>
        )
    })
}
            </div>
         );
    }
}
 
export default JournalDisplay;