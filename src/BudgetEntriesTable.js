import React from 'react';
import TableHeaderRow from './TableHeaderRow';
import TableRows from './TableRows';

class BudgetEntriesTable extends React.Component {
  render() {
    const headers = ['EntryDate', 'Amount', 'Category', 'Description'];

    return(
      <table>
        <TableHeaderRow headers={headers}/>
        <TableRows entries={this.props.entries}/>
      </table>
    );
  }
}

export default BudgetEntriesTable;
