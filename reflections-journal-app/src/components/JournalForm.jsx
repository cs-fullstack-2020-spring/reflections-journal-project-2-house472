import React, {Component} from 'react'

class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            journalEntry: "",
            confidenceLevel: "",
            entryDate:"",
         }
    }
    handleSubmission = (event) => {
        console.log(this.state.confidenceLevel)
        event.preventDefault();
        this.props.updateArray(this.state)
        this.setState({
            journalEntry: "",
            confidenceLevel: "",
            entryDate:""
        })
    }
    handleChange = (event) => {
        if(event.target.name == "journalEntry"){
            this.setState({journalEntry : event.target.value})
        }else if (event.target.name == "confidenceLevel"){
            this.setState({confidenceLevel : event.target.value})
        }else if (event.target.name == "entryDate"){
            this.setState({entryDate: event.target.value})
        }

    }
    render() { 
        return ( 
            <div id = "form">
                <form action="">
                    <fieldset>
                        <legend>Journal Entries</legend>

                        <label htmlFor="">Date </label>
                        <input type="date" id= "entryDate" name ="entryDate" onChange={this.handleChange} value={this.state.entryDate}/>
<br/>
                        <label htmlFor="">Journal Entry            </label>
                        <input type="text" id= "journalEntry" name="journalEntry" onChange={this.handleChange} value={this.state.journalEntry}/>
                        <br/>
                        <label htmlFor="">Confidence Level          </label>
                        <input type="text" id= "confidenceLevel" name="confidenceLevel" onChange={this.handleChange} value={this.state.confidenceLevel}/>
                      {/* TO REPLACE CONFIDENCE INPUT WITH DROPDOWN */}

                       {/* <select name="confidence" id="confidence">
                       <option name="low"   value={this.state.confidence}>Low</option>
                       <option value={this.state.confidence}>Medium</option>
                       <option value={this.state.confidence}>High</option>
                       </select> */}
                       
                       
                        <br/>
                        <button onClick={this.handleSubmission}>Post Entry</button>

                    </fieldset>





                </form>
            </div>
         );
    }
}
 
export default JournalForm;