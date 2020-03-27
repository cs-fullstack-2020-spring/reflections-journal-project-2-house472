import React, {Component} from 'react'

class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            journalEntry: "",
            confidenceLevel: "",
            entryDate:""
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
            <div>
                <form action="">
                    <fieldset>
                        <legend>Journal Entries</legend>

                        <label htmlFor="">       Date        </label>
                        <input type="date" id= "entryDate" name ="entryDate" onChange={this.handleChange} value={this.state.entryDate}/>

                        <label htmlFor="">       Journal Entry            </label>
                        <input type="text" id= "journalEntry" name="journalEntry" onChange={this.handleChange} value={this.state.journalEntry}/>

                        <label htmlFor="">       Confidence Level          </label>
                        <input type="text" id= "confidenceLevel" name="confidenceLevel" onChange={this.handleChange} value={this.state.confidenceLevel}/>

                        <button onClick={this.handleSubmission}>Post Entry</button>

                    </fieldset>





                </form>
            </div>
         );
    }
}
 
export default JournalForm;