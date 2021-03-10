import React from 'react';
import TableHeaderRow from './TableHeaderRow';
import TableRows from './TableRows';

function BudgetEntriesTable(props) {
    const headers = ['EntryDate', 'Amount', 'Category', 'Description'];

    return(
      <table>
        <TableHeaderRow headers={headers}/>
        <TableRows entries={props.entries}/>
      </table>
    );
}

export default BudgetEntriesTable;
