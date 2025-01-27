import React from 'react';
import EntryForm from './EntryForm.js'
import BudgetEntriesContainer from './BudgetEntriesContainer.js'

class BudgetEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      startDate: new Date(),
      endDate: new Date()
    };
  }

  render() {
    return (
      <div>
        <EntryForm
          addEntry={this.handleAddEntry}
          api={this.props.api} />
        <br></br>
        <BudgetEntriesContainer
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          filterDates={this.handleFilterDates}
          entries={this.state.entries} />
      </div>
    );
  }

  // add: place entry in correct position
  handleAddEntry = (entry) => {
      this.setState( prevState => {
         return {
             entries: [entry, ...prevState.entries]
         };
      });
  }

  handleFilterDates = (startDate, endDate) => {
    console.log("Filtering dates...");
    let updatedEntries = this.state.allEntries.filter(e => e.EntryDate >= startDate && e.EntryDate <= endDate)
    console.log(updatedEntries);
    this.setState( prevState => ({
      entries: updatedEntries,
      startDate: startDate,
      endDate: endDate
    }));
  }

  componentDidMount() {
    console.log(`fetching entries at: ${this.props.api}/budget-entries.json`);
    fetch(`${this.props.api}/budget-entries.json`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState( prevState => ({
          startDate: responseData['StartDate'],
          endDate: responseData['EndDate'],
          allEntries: responseData['Entries'],
          entries: responseData['Entries']
        }));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

}

export default BudgetEntries;
