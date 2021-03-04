import React from 'react';
import './EntryForm.css'

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitEntry = this.handleSubmitEntry.bind(this);
    this.state = {
      entryDate: '',
      amount: '',
      category: '',
      description: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Insert a budget entry</h2>
        <form onSubmit={this.handleSubmitEntry}>
          <label className="entry-form">entry date</label>
          <input
            name="entryDate"
            type="text"
            value={this.state.entryDate}
            onChange={this.handleInputChange} />
          <br />
          <label className="entry-form">amount</label>
          <input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={this.handleInputChange}/>
          <br />
          <label className="entry-form">category</label>
          <input
            name="category"
            type="text"
            value={this.state.category}
            onChange={this.handleInputChange} />
          <br />
          <label className="entry-form">description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value });
  }

  handleSubmitEntry = (e) => {
    e.preventDefault();
    console.log('submitting...')
    const entryDate = this.state.entryDate
    const amount = this.state.amount
    const category = this.state.category
    const description = this.state.description
    if ([entryDate, amount, category, description].some(i => i === '')) {
        return;
    }
    const newEntry = {
        EntryDate: entryDate,
        Amount: (amount * 100).toString(),
        Category: category,
        Description: description
    };
    // config for POST
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    }
    // post to db
    fetch(`${this.props.api}/insert.json`, config)
      .then( response => response.json() )
      .then( responseData => {
        console.log(responseData)
        this.props.addEntry(newEntry);
        this.setState({
            entryDate: '',
            amount: '',
            category: '',
            description: ''
        });
      })
      .catch( err => console.log('something went wrong...:', err) )
  }
}

export default EntryForm;
